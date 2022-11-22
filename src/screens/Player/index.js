import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ResizeMode } from "expo-av";
import { VideoPlayer } from "./styles";

const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36";
export const proxyURL = "https://cors.proxy.consumet.org/";
const Referrer = `https://gogohd.net/streaming.php?id=MjYzMw==&title=Shingeki+no+Kyojin+Episode+1`;
const videoId = `https://wwwx14.gogocdn.stream/videos/hls/UyNDINK1Hx_ZcWz7ve0ZrA/1669144270/2633/4f762bd70a47a42d9d61cc4816e19295/ep.1.1657688609.m3u8`;
const uri = `${proxyURL}${videoId}`;

const PlayerScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <VideoPlayer
        source={{
          uri: videoId,
          headers: {
            "User-Agent": USER_AGENT,
            Referer: Referrer,
          },
        }}
        useNativeControls
        shouldPlay={true}
        resizeMode={ResizeMode.CONTAIN}
        errorCallback={(error) => {
          console.error(error);
        }}
      />
    </SafeAreaView>
  );
};

export default PlayerScreen;
