import { View, Text } from "react-native";
import React from "react";
import {
  CardImage,
  Container,
  ImageContainer,
  Info,
  PlayedBy,
  PlayedByImage,
  Subtitle,
  SubtitleRole,
  Title,
} from "./CharacterCard.styles";

const CharacterCard = (props) => {
  //   console.log(props);
  //   return null;

  const findJapaneseName = props.voiceActors.find(
    (a) => a.language === "Japanese"
  );

  return (
    <Container>
      <ImageContainer>
        <CardImage source={{ uri: props.image }}>
          <PlayedBy>
            <PlayedByImage source={{ uri: findJapaneseName?.image }} />
          </PlayedBy>
        </CardImage>
      </ImageContainer>
      <Info>
        <SubtitleRole numberOfLines={1}>{props.role}</SubtitleRole>
        <Subtitle numberOfLines={1}>
          {findJapaneseName.name.userPreferred}
        </Subtitle>
        <Title numberOfLines={1}>{props.name.full}</Title>
      </Info>
    </Container>
  );
};

export default CharacterCard;
