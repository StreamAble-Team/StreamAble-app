import { View, Text } from "react-native";
import React from "react";
import { Container } from "../../Chapters/Chapter/Chapter.styles";
import {
  CardImage,
  ImageContainer,
  Info,
  SubtitleRole,
  Title,
} from "../../../Info/Characters/CharacterCard/CharacterCard.styles";

const CharacterCard = (props) => {
  return (
    <Container>
      <ImageContainer>
        <CardImage source={{ uri: props.image }}></CardImage>
      </ImageContainer>
      <Info>
        <SubtitleRole numberOfLines={1} style={{ marginBottom: -6 }}>
          {props.role}
        </SubtitleRole>
        <Title numberOfLines={1}>{props.name.full}</Title>
      </Info>
    </Container>
  );
};

export default CharacterCard;
