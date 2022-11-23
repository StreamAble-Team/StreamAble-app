import React from "react";
import PlayPause from "./PlayPause";
import {
  Container,
  WrapperWithBg,
  GoBackWrapper,
  WrapperFlex,
} from "./Controls.styles";
import { IconItem } from "../styles";

const Controls = ({ status, videoRef, setPlaying, playing }) => {
  return (
    <Container>
      <GoBackWrapper>
        <IconItem name="arrow-left" />
      </GoBackWrapper>
      <WrapperWithBg>
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
