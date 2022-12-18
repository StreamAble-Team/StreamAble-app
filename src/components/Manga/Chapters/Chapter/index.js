import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  EpisodeNumber,
  Title,
} from "../../../Info/Episodes/Episode/Episode.styles";
import { CardBg, Container, CardContent } from "./Chapter.styles";
import { api } from "../../../../utils";

const Chapter = (props) => {
  const navigation = useNavigation();

  const title = props?.title?.toLowerCase();
  const id = props?.id?.toLowerCase();
  const chapter = title.split("chapter ")[1] || id?.split("-chapter-")[1];

  const handlePress = async () => {
    const data = await api.getMangaPages(props?.id);

    navigation.navigate("Reader", {
      pages: data,
      mangaTitle: props.mangaTitle,
      chapter: chapter,
    });
  };

  return (
    <Container onPress={handlePress}>
      <CardBg source={{ uri: props?.cover }}>
        <CardContent>
          <Title numberOfLines={1}>{props.title || `Chapter ${chapter}`}</Title>
          <EpisodeNumber numberOfLines={1}>Chapter {chapter}</EpisodeNumber>
        </CardContent>
      </CardBg>
    </Container>
  );
};

export default Chapter;
