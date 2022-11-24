import React from "react";
import { Container, TextSkip, Wrapper, SkipIcon } from "./Skip85.styles";

const Skip85 = ({ videoRef }) => {
  const handleSkip = () => {
    videoRef.current.getStatusAsync().then((status) => {
      const currentTIme = status.positionMillis;
      videoRef.current.setPositionAsync(currentTIme + 10 * 85);
    });
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
