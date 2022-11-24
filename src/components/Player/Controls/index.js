import React, { useState } from "react";
import PlayPause from "./PlayPause";
import {
  Container,
  WrapperWithBg,
  GoBackWrapper,
  WrapperFlex,
  ClickToDismiss,
  GoBackWrapperPressable,
  EpisodeTitle,
  EpisodeNumber,
  FlexBox,
} from "./Controls.styles";
import { IconItem, PressableIcon } from "../styles";
import { useNavigation } from "@react-navigation/native";
import Skip85 from "./Skip85";
import SeekBar from "./SeekBar";

const Controls = ({
  status,
  videoRef,
  setPlaying,
  playing,
  title,
  episode,
}) => {
  const [hideControls, setHideControls] = useState(false);
  const navigation = useNavigation();

  const handleTimeSkip = (timeSkip) => {
    if (!status.isLoaded) return false;
    const currentTIme = status.positionMillis;
    videoRef.current.setPositionAsync(currentTIme + timeSkip * 1000);
  };

  return (
    <Container hideControls={hideControls}>
      <GoBackWrapper>
        <FlexBox>
          <GoBackWrapperPressable onPress={() => navigation.goBack()}>
            <IconItem name="arrow-left" />
          </GoBackWrapperPressable>
          <EpisodeTitle>{title || `Episode ${episode}`}</EpisodeTitle>
        </FlexBox>
        <EpisodeNumber>Episode {episode || 1}</EpisodeNumber>
      </GoBackWrapper>
      <Skip85 videoRef={videoRef} status={status} />
      <ClickToDismiss onPress={() => setHideControls((prev) => !prev)} />
      <WrapperWithBg>
        <SeekBar videoRef={videoRef} status={status} />
        <WrapperFlex>
          <PressableIcon onPress={() => handleTimeSkip(-10)}>
            <IconItem name="step-backward" />
          </PressableIcon>
          <PlayPause
            status={status}
            videoRef={videoRef}
            setHideControls={setHideControls}
          />
          <PressableIcon onPress={() => handleTimeSkip(10)}>
            <IconItem name="step-forward" />
          </PressableIcon>
        </WrapperFlex>
      </WrapperWithBg>
    </Container>
  );
};

export default Controls;
