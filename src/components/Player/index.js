import { View } from "react-native";
import React, { useRef, useState } from "react";
import { ResizeMode } from "expo-av";
import { VideoPlayer } from "./styles";
import Controls from "./Controls";
import {
  createEpisodeTable,
  insertEpisode,
  openEpisodeDatabase,
  selectEpisode,
} from "../../database";

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

    //select all data
    const select = await selectEpisode(db, animeId);

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
    }
  };

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

export default Player;
