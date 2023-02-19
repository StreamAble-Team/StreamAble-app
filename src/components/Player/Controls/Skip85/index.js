import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { useBreakpoints } from "../../../../hooks";
import { Container, TextSkip, Wrapper, SkipIcon } from "./Skip85.styles";
import { helpers } from "../../../../utils";

const Skip85 = ({
  videoRef,
  status,
  nextEpisodeId,
  opSkipTimes,
  edSkipTimes,
}) => {
  const { isMobile } = useBreakpoints();
  const currentTime = status.positionMillis;
  const duration = status.durationMillis;

  const [changeSkip, setChangeSkip] = useState(false);
  const [autoNextEpisodeSetting, setAutoNextEpisodeSetting] = useState(false);

  const handleSkip = () => {
    if (changeSkip === "op") {
      videoRef.current.setPositionAsync(opSkipTimes?.endTime * 1000);
    }
    videoRef.current.setPositionAsync(currentTime + 85 * 1000);
  };

  // useEffect(() => {
  //   const watchPoint = Math.floor((currentTime / duration) * 100);
  //   if (watchPoint >= 90) {
  //     setChangeSkip(true);
  //   }
  // }, [currentTime]);

  const getSettings = async () => {
    const skipNextEpisodeSetting = await helpers.getSetting("autoNextEpisode");
    setAutoNextEpisodeSetting(
      helpers.removeNonAlphaNumeric(skipNextEpisodeSetting)
    );
  };

  // change button to skip intro if currentTime is greater than or equal to opSkipTimes?.startTime and less than or equal to opSkipTimes?.endTime
  useEffect(() => {
    //convert currentTime to seconds
    const currentTimeInSeconds = currentTime / 1000;

    if (
      currentTimeInSeconds >= opSkipTimes?.startTime &&
      currentTimeInSeconds <= opSkipTimes?.endTime
    ) {
      if (autoNextEpisodeSetting) {
        videoRef.current.setPositionAsync(opSkipTimes?.endTime * 1000);
        return;
      }
      if (changeSkip !== "op") setChangeSkip("op");
    } else {
      if (changeSkip === "op") setChangeSkip(false);
    }
  }, [currentTime]);

  useFocusEffect(
    useCallback(() => {
      getSettings();
    }, [])
  );

  if (changeSkip === "op")
    return (
      <Container>
        <Wrapper onPress={handleSkip} isMobile={isMobile}>
          <TextSkip>Skip OP</TextSkip>
        </Wrapper>
      </Container>
    );

  if (changeSkip === "ed")
    return (
      <Container>
        <Wrapper onPress={handleSkip} isMobile={isMobile}>
          <TextSkip>Next episode</TextSkip>
          <SkipIcon name="fast-forward" />
        </Wrapper>
      </Container>
    );

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
