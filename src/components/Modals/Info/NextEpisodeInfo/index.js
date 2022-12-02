import React from "react";
import {
  Description,
  InfoContainer,
  NextEpisodeTitle,
  NextEpisodeTitleContainer,
  Title,
  WatchedInfoImage,
  WatchedInfoImageBG,
} from "./NextEpisodeInfo.styles";

const NextEpisodeInfo = ({ currentEpisode }) => {
  return (
    <InfoContainer>
      <Title>Next episode info</Title>
      <NextEpisodeTitleContainer>
        <NextEpisodeTitle>{currentEpisode?.title}</NextEpisodeTitle>
      </NextEpisodeTitleContainer>
      <Description>{currentEpisode?.description}</Description>
      <WatchedInfoImage source={{ uri: currentEpisode?.image }}>
        <WatchedInfoImageBG />
      </WatchedInfoImage>
    </InfoContainer>
  );
};

export default NextEpisodeInfo;
