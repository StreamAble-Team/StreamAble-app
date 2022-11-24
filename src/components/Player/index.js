import { View, Text } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { ResizeMode } from "expo-av";
import { VideoPlayer } from "./styles";
import Controls from "./Controls";

const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36";
export const proxyURL = "https://cors.proxy.consumet.org/";
const Referrer = `https://gogohd.net/streaming.php?id=MTkzMTU4&title=Spy+x+Family+Part+2+Episode+1`;
const videoId = `https://cache.387e6278d8e06083d813358762e0ac63.com/222936330334.m3u8`;
const sampleVideo = "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4";
const uri = `${proxyURL}${videoId}`;

const Player = ({ source, referer, title, episode, nextEpisodeId }) => {
  const videoRef = useRef(null);
  const [status, setStatus] = useState({});
  const [playing, setPlaying] = useState(false);

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
