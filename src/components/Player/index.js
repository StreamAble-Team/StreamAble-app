import { View } from "react-native";
import React, { useCallback, useRef, useState } from "react";
import { ResizeMode } from "expo-av";
import { VideoPlayer } from "./styles";
import Controls from "./Controls";
import {
  createCollectionTable,
  createEpisodeTable,
  createInsertCollectionData,
  insertCollection,
  insertEpisode,
  openEpisodeDatabase,
  selectCollection,
  selectEpisode,
  updateCollection,
} from "../../database";
import { useFocusEffect } from "@react-navigation/native";

const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36";
export const proxyURL = "https://cors.proxy.consumet.org/";

const Player = (props) => {
  const { source, referer, title, episode, nextEpisodeId, animeId, id } = props;
  const videoRef = useRef(null);
  const [status, setStatus] = useState({});
  const [playing, setPlaying] = useState(false);
  const [watched, setWatched] = useState(false);

  const HandleUpdateWatched = async () => {
    if (watched === true) return false;
    const { positionMillis, durationMillis } = status;
    const watched = (positionMillis / durationMillis) * 100;

    //Get data from db
    const db = await openEpisodeDatabase();
    await createEpisodeTable(db, animeId);
    await createCollectionTable(db);

    //select all data
    const select = await selectEpisode(db, animeId);
    const selectCol = await selectCollection(
      db,
      id.split("-").includes("dub") === "sub" ? animeId : `${animeId}-dub`
    );

    const dataForCol = createInsertCollectionData({
      ...selectCol[0],
      currentEpisode: episode,
      nextEpisodeId,
      id: id.split("-").includes("dub") === "sub" ? animeId : `${animeId}-dub`,
      dropped: selectCol[0]?.dropped || false,
      completed: selectCol[0]?.completed || false,
      onHold: selectCol[0]?.onHold || false,
      planToWatch: selectCol[0]?.planToWatch || false,
      watching: selectCol[0]?.watching || true,
    });

    // Find the episode that was just watched
    const find = select.find((item) => item.id === id) || props;

    // Check if watched is greater than 85%
    if (watched > 85 && find?.watched !== 1 && watched !== true) {
      // Update the watched status to true
      setWatched(true);
      await insertEpisode(db, {
        id,
        title,
        animeId,
        image: props.image,
        episode,
        nextEpisodeId,
        watched: true,
      });
      if (selectCol.length < 1) {
        await insertCollection(db, dataForCol);
      } else if (selectCol.length > 0) {
        await updateCollection(db, dataForCol);
      }
    }
  };

  const continueWatching = async () => {
    const db = await openEpisodeDatabase();
    await createEpisodeTable(db, animeId);
    const select = await selectEpisode(db, animeId);
    const find = (await select.find((item) => item.id === id)) || undefined;

    // console.log(
    //   find.watchedAmount * 100 - status.positionMillis,
    //   status.durationMillis
    // );

    if (find?.watchedAmount) {
      videoRef.current.setPositionAsync(find.watchedAmount.toFixed(3) * 15250);
    }
  };

  useFocusEffect(
    useCallback(() => {
      continueWatching();
    }, [])
  );

  return (
    <View>
      <VideoPlayer
        ref={videoRef}
        source={{
          uri: source,
          headers: {
            "User-Agent": USER_AGENT,
            Referrer: referer,
          },
        }}
        resizeMode={ResizeMode.CONTAIN}
        onPlaybackStatusUpdate={(status) => {
          HandleUpdateWatched(status);
          return setStatus(() => status);
        }}
        onError={(err) => console.log(err)}
      />
      <Controls
        data={props}
        id={id}
        animeId={animeId}
        videoRef={videoRef}
        status={status}
        playing={playing}
        setPlaying={setPlaying}
        title={title}
        episode={episode}
        nextEpisodeId={nextEpisodeId}
      />
    </View>
  );
};

Number.prototype.countDecimals = function () {
  if (Math.floor(this.valueOf()) === this.valueOf()) return 0;

  var str = this.toString();
  if (str.indexOf(".") !== -1 && str.indexOf("-") !== -1) {
    return str.split("-")[1] || 0;
  } else if (str.indexOf(".") !== -1) {
    return str.split(".")[1].length || 0;
  }
  return str.split("-")[1] || 0;
};

export default Player;
