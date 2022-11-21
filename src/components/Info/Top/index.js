import { View, Text } from "react-native";
import React from "react";
import {
  InfoTopContainer,
  InfoTopDescription,
  InfoTopEpisode,
  InfoTopImage,
  InfoTopImageContainer,
  InfoTopImageWrapper,
  InfoTopPoster,
  InfoTopPosterContainer,
  InfoTopTitle,
  InfoTopWrapper,
  WatchedAmount,
  WatchedContainer,
} from "./InfoTop.styles";
import { textSanitizer } from "../../../utils";

const InfoTop = (props) => {
  const description = textSanitizer(props.description);

  return (
    <InfoTopContainer>
      <InfoTopImageContainer>
        <InfoTopImage source={{ uri: props.cover }}>
          <InfoTopImageWrapper />
        </InfoTopImage>
        <WatchedContainer>
          <WatchedAmount />
        </WatchedContainer>
      </InfoTopImageContainer>
      <InfoTopPosterContainer>
        <InfoTopPoster source={{ uri: props.image }} />
        <InfoTopWrapper>
          <InfoTopTitle numberOfLines={1}>{props.title.romaji}</InfoTopTitle>
          <InfoTopEpisode numberOfLines={1}>Episode 1</InfoTopEpisode>
        </InfoTopWrapper>
      </InfoTopPosterContainer>
      <InfoTopDescription numberOfLines={4}>{description}</InfoTopDescription>
    </InfoTopContainer>
  );
};

export default InfoTop;
