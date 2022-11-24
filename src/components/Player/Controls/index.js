import React, { useState } from "react";
import PlayPause from "./PlayPause";
import {
  Container,
  WrapperWithBg,
  GoBackWrapper,
  WrapperFlex,
  ClickToDismiss,
} from "./Controls.styles";
import { IconItem } from "../styles";
import { useNavigation } from "@react-navigation/native";
import Skip85 from "./Skip85";
import SeekBar from "./SeekBar";

const Controls = ({ status, videoRef, setPlaying, playing }) => {
  const [hideControls, setHideControls] = useState(false);
  const navigation = useNavigation();

  return (
    <Container hideControls={hideControls}>
      <GoBackWrapper onPress={() => navigation.goBack()}>
        <IconItem name="arrow-left" />
      </GoBackWrapper>
      <Skip85 videoRef={videoRef} status={status} />
      <ClickToDismiss onPress={() => setHideControls((prev) => !prev)} />
      <WrapperWithBg>
        <SeekBar videoRef={videoRef} status={status} />
        <WrapperFlex>
          <IconItem name="step-backward" />
          <PlayPause
            status={status}
            videoRef={videoRef}
            setHideControls={setHideControls}
          />
          <IconItem name="step-forward" />
        </WrapperFlex>
      </WrapperWithBg>
    </Container>
  );
};

export default Controls;
