import React from "react";
import { Container, TextSkip, Wrapper, SkipIcon } from "./Skip85.styles";

const Skip85 = ({ videoRef, status }) => {
  const handleSkip = () => {
    const currentTIme = status.positionMillis;
    videoRef.current.setPositionAsync(currentTIme + 85 * 1000);
  };

  return (
    <Container>
      <Wrapper onPress={handleSkip}>
        <TextSkip>85s</TextSkip>
        <SkipIcon name="fast-forward" />
      </Wrapper>
    </Container>
  );
};

export default Skip85;
