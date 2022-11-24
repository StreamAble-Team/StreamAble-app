import React from "react";
import PlayPause from "./PlayPause";
import {
  Container,
  WrapperWithBg,
  GoBackWrapper,
  WrapperFlex,
} from "./Controls.styles";
import { IconItem } from "../styles";
import { useNavigation } from "@react-navigation/native";
import Skip85 from "./Skip85";
import SeekBar from "./SeekBar";

const Controls = ({ status, videoRef, setPlaying, playing }) => {
  const navigation = useNavigation();

  return (
    <Container>
      <GoBackWrapper onPress={() => navigation.goBack()}>
        <IconItem name="arrow-left" />
      </GoBackWrapper>
      <Skip85 videoRef={videoRef} />
      <WrapperWithBg>
        <SeekBar />
        <WrapperFlex>
          <IconItem name="step-backward" />
          <PlayPause status={status} videoRef={videoRef} />
          <IconItem name="step-forward" />
        </WrapperFlex>
      </WrapperWithBg>
    </Container>
  );
};

export default Controls;
