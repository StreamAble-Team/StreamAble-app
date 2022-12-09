import { View, Text } from "react-native";
import React from "react";
import { CanPressIcon, PauseIcon, PlayIcon } from "./PlayPause.styles";

const PlayPause = ({ status, videoRef, handleInactive }) => {
  const handlePlayPause = () => {
    if (!status.isLoaded) return false;
    status.isPlaying
      ? videoRef.current.pauseAsync()
      : videoRef.current.playAsync();
    status.isPlaying ?? handleInactive();
  };

  return !status.isPlaying ? (
    <CanPressIcon onPress={handlePlayPause}>
      <PlayIcon />
    </CanPressIcon>
  ) : (
    <CanPressIcon onPress={handlePlayPause}>
      <PauseIcon />
    </CanPressIcon>
  );
};

export default PlayPause;
