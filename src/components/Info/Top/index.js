import { View, Text } from "react-native";
import React from "react";
import {
  GoBackContainer,
  GoBackIcon,
  InfoTopButtons,
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
  InfoTopPosterImageWrapper,
  InfoTopTitle,
  InfoTopWrapper,
  WatchedAmount,
  WatchedContainer,
} from "./InfoTop.styles";
import { textSanitizer } from "../../../utils";
import { useNavigation } from "@react-navigation/native";

const InfoTop = (props) => {
  const { setEpisodes, setDub } = props;
  const navigation = useNavigation();
  const description = textSanitizer(props.description);

  const gotoPlayer = () => {
    navigation.navigate("Player", {
      id: props.id,
      title: props.title,
      poster: props.poster,
      description: props.description,
    });
  };

  return (
    <InfoTopContainer>
      <InfoTopImageContainer>
        <InfoTopImage source={{ uri: props.cover }}>
          <GoBackContainer onPress={() => navigation.goBack()}>
            <GoBackIcon />
          </GoBackContainer>
          <InfoTopImageWrapper />
        </InfoTopImage>
        {/* <WatchedContainer>
          <WatchedAmount />
        </WatchedContainer> */}
      </InfoTopImageContainer>
      <InfoTopPosterContainer>
        <InfoTopPosterImageWrapper>
          <InfoTopPoster source={{ uri: props.image }} />
        </InfoTopPosterImageWrapper>
        <InfoTopWrapper>
          <InfoTopTitle numberOfLines={1}>{props.title.romaji}</InfoTopTitle>
          {/* <InfoTopEpisode numberOfLines={1}>Episode 1</InfoTopEpisode> */}
          <InfoTopButtons>
            <InfoTopPlayButton onPress={gotoPlayer}>
              <InfoTopPlayButtonText>Play</InfoTopPlayButtonText>
            </InfoTopPlayButton>
            <InfoTopPlayButton
              onPress={() => setDub((prev) => !prev)}
              style={{ marginLeft: 10 }}
            >
              <InfoTopPlayButtonText>{props.subOrDub}</InfoTopPlayButtonText>
            </InfoTopPlayButton>
          </InfoTopButtons>
        </InfoTopWrapper>
      </InfoTopPosterContainer>
    </InfoTopContainer>
  );
};

export default InfoTop;
