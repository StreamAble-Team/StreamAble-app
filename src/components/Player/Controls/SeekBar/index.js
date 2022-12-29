import { View, Text } from "react-native";
import React from "react";
import {
  SeekBarComponent,
  SeekBarContainer,
  TimeStamps,
  TimeStampsContainer,
} from "./SeekBar.styles";
import dayjs from "dayjs";

const SeekBar = ({ videoRef, status }) => {
  const { durationMillis, positionMillis } = status;

  const durationTime = dayjs(durationMillis).format(
    durationMillis > 3600000 ? "HH:mm:ss" : "mm:ss"
  );
  const currentTime = dayjs(positionMillis).format(
    positionMillis > 3600000 ? "HH:mm:ss" : "mm:ss"
  );

  const handleSeekStart = () => {
    videoRef.current.pauseAsync();
  };

  const handleSeekEnd = (seekTime) => {
    if (!status.isLoaded) return false;
    videoRef.current.setPositionAsync(seekTime);
    videoRef.current.playAsync();
  };

  return (
    <SeekBarContainer>
      <TimeStampsContainer>
        <TimeStamps>{status.isLoaded ? currentTime : "00:00"}</TimeStamps>
      </TimeStampsContainer>
      <SeekBarComponent
        disabled={!status.isLoaded}
        value={status.isLoaded ? status.positionMillis : 0}
        maximumValue={status.isLoaded ? status.durationMillis : 0}
        onSlidingStart={(e) => handleSeekStart(e)}
        onSlidingComplete={(e) => handleSeekEnd(e)}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#fff"
      />
      <TimeStampsContainer>
        <TimeStamps>{status.isLoaded ? durationTime : "00:00"}</TimeStamps>
      </TimeStampsContainer>
    </SeekBarContainer>
  );
};

export default SeekBar;
