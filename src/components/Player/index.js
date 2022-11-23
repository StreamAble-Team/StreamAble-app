import { View, Text } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { ResizeMode } from "expo-av";
import { VideoPlayer } from "./styles";
import Controls from "./Controls";

const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36";
export const proxyURL = "https://cors.proxy.consumet.org/";
const Referrer = `https://gogohd.net/streaming.php?id=MjYzMw==&title=Shingeki+no+Kyojin+Episode+1`;
const videoId = `https://wwwx14.gogocdn.stream/videos/hls/UyNDINK1Hx_ZcWz7ve0ZrA/1669144270/2633/4f762bd70a47a42d9d61cc4816e19295/ep.1.1657688609.m3u8`;
const sampleVideo = `https://d3rlna7iyyu8wu.cloudfront.net/skip_armstrong/skip_armstrong_multichannel_subs.m3u8`;
const uri = `${proxyURL}${videoId}`;

const Player = () => {
  const videoRef = useRef(null);
  const [status, setStatus] = useState({});
  const [playing, setPlaying] = useState(false);

  return (
    <View>
      <VideoPlayer
        ref={videoRef}
        source={{
          uri: sampleVideo,
        }}
        resizeMode={ResizeMode.CONTAIN}
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <Controls
        videoRef={videoRef}
        status={status}
        playing={playing}
        setPlaying={setPlaying}
      />
    </View>
  );
};

export default Player;
