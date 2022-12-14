import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  CardContent,
  CardImage,
  Container,
  EpisodeNumber,
  Title,
} from "../../../Info/Episodes/Episode/Episode.styles";
import { CardBg } from "./Chapters.styles";

const Chapter = (props) => {
  const navigation = useNavigation();

  return (
    <Container isMobile={true}>
      <CardBg>
        <CardContent>
          <Title numberOfLines={1}>{props.title}</Title>
          <EpisodeNumber numberOfLines={1}>Chapter {props.title}</EpisodeNumber>
        </CardContent>
      </CardBg>
    </Container>
  );
};

export default Chapter;
