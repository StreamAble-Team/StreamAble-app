import { View, Text } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ResizeMode } from "expo-av";
import { VideoPlayer } from "./styles";
import Controls from "./Controls";

const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36";
export const proxyURL = "https://cors.proxy.consumet.org/";

const Player = (props) => {
  const { source, referer, title, episode, nextEpisodeId, animeId, id } = props;
  const videoRef = useRef(null);
  const [status, setStatus] = useState({});
  const [playing, setPlaying] = useState(false);

  const deleteALL = () => {
    AsyncStorage.getAllKeys().then((keys) => {
      AsyncStorage.multiRemove(keys);
    });
  };

  const handleUpdateWatched = async (status) => {
    const { positionMillis, durationMillis } = status;
    const watched = (positionMillis / durationMillis) * 100;
    const getStorage = await AsyncStorage.getItem(animeId);
    const getStorageJSON = JSON.parse(getStorage);
    const find =
      [getStorageJSON].find((item) => item?.episode === props?.episode) ||
      props;
    if (watched > 90 && find?.watched !== true) {
      if (!getStorageJSON) {
        const newData = {
          id: id,
          title,
          episode,
          nextEpisodeId,
          watched: true,
        };
        AsyncStorage.setItem(animeId, JSON.stringify(newData));
      } else {
        const newPlusOldData = getStorage.concat(
          JSON.stringify({
            id: id,
            title,
            episode,
            nextEpisodeId,
            watched: true,
          })
        );
        AsyncStorage.setItem(animeId, JSON.stringify(newPlusOldData));
      }
    }
  };

  useEffect(() => {
    // deleteALL();
  }, []);

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
          handleUpdateWatched(status);
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
