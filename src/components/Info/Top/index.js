import { View, Text } from "react-native";
import React from "react";
import {
  InfoTopContainer,
  InfoTopDescription,
  InfoTopDescriptionText,
  InfoTopEpisode,
  InfoTopImage,
  InfoTopImageContainer,
  InfoTopImageWrapper,
  InfoTopPlayButton,
  InfoTopPlayButtonText,
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
          <InfoTopPlayButton>
            <InfoTopPlayButtonText>Play</InfoTopPlayButtonText>
          </InfoTopPlayButton>
        </InfoTopWrapper>
      </InfoTopPosterContainer>
      <InfoTopDescription>
        <InfoTopDescriptionText numberOfLines={4}>
          {description}
        </InfoTopDescriptionText>
      </InfoTopDescription>
    </InfoTopContainer>
  );
};

export default InfoTop;
