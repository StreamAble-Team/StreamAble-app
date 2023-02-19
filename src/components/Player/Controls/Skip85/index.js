import React, { useEffect, useState } from "react";
import { useBreakpoints } from "../../../../hooks";
import { Container, TextSkip, Wrapper, SkipIcon } from "./Skip85.styles";

const Skip85 = ({ videoRef, status, nextEpisodeId }) => {
  const { isMobile } = useBreakpoints();
  const currentTime = status.positionMillis;
  const duration = status.durationMillis;
  const [changeSkip, setChangeSkip] = useState(false);
  const handleSkip = () => {
    videoRef.current.setPositionAsync(currentTime + 85 * 1000);
  };

  // useEffect(() => {
  //   const watchPoint = Math.floor((currentTime / duration) * 100);
  //   if (watchPoint >= 90) {
  //     setChangeSkip(true);
  //   }
  // }, [currentTime]);

  if (!changeSkip)
    return (
      <Container>
        <Wrapper onPress={handleSkip} isMobile={isMobile}>
          <TextSkip>85s</TextSkip>
          <SkipIcon name="fast-forward" />
        </Wrapper>
      </Container>
    );
};

export default Skip85;
