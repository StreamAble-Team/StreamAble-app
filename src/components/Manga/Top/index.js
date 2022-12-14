import { View, Text } from "react-native";
import React from "react";
import {
  GoBackContainer,
  GoBackIcon,
  InfoTopButtons,
  InfoTopContainer,
  InfoTopEpisode,
  InfoTopImage,
  InfoTopImageContainer,
  InfoTopImageWrapper,
  InfoTopPlayButton,
  InfoTopPlayButtonText,
  InfoTopPoster,
  InfoTopPosterContainer,
  InfoTopPosterImageWrapper,
  InfoTopTitle,
  InfoTopWrapper,
} from "../../Info/Top/InfoTop.styles";
import { useNavigation } from "@react-navigation/native";

const MangaTop = (props) => {
  const navigation = useNavigation();
  return (
    <InfoTopContainer>
      <InfoTopImageContainer>
        <InfoTopImage source={{ uri: props.cover }}>
          <GoBackContainer onPress={() => navigation.goBack()}>
            <GoBackIcon />
          </GoBackContainer>
          <InfoTopImageWrapper />
        </InfoTopImage>
      </InfoTopImageContainer>
      <InfoTopPosterContainer>
        <InfoTopPosterImageWrapper>
          <InfoTopPoster source={{ uri: props.image }} />
        </InfoTopPosterImageWrapper>
        <InfoTopWrapper>
          <InfoTopTitle numberOfLines={1}>
            {props?.title?.english ||
              props?.title?.romaji ||
              props?.title?.native ||
              props?.title?.romaji ||
              props?.title?.english}
          </InfoTopTitle>
          <InfoTopEpisode numberOfLines={1}>
            Chapter 1 {props?.chapters ? `/ ${props?.chapters?.length}` : null}
          </InfoTopEpisode>
          <InfoTopButtons>
            <InfoTopPlayButton>
              <InfoTopPlayButtonText>Read</InfoTopPlayButtonText>
            </InfoTopPlayButton>
          </InfoTopButtons>
        </InfoTopWrapper>
      </InfoTopPosterContainer>
    </InfoTopContainer>
  );
};

export default MangaTop;
