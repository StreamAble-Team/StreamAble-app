import { useNavigation } from "@react-navigation/native";
import React from "react";
import { textSanitizer } from "../../../utils";
import {
  CardImage,
  Container,
  Description,
  ImageContainer,
  Info,
  Meta,
  MetaItem,
  Text,
  Title,
} from "./StandardCard.styles";

const StandardCard = (props) => {
  const navigation = useNavigation();
  const description = textSanitizer(props.description);

  const handlePress = (event) => {
    if (props.type.toLowerCase() !== "tv") return false;
    navigation.navigate("Info", { id: props.id });
  };

  return (
    <Container
      disabled={props.type.toLowerCase() !== "tv"}
      onPress={handlePress}
    >
      <ImageContainer>
        <CardImage source={{ uri: props.image }} />
      </ImageContainer>
      <Info>
        <Description numberOfLines={1}>{props.relationType}</Description>
        <Meta>
          {/* <MetaItem>{props.releaseDate}</MetaItem> */}
          {/* <MetaItem>{props.totalEpisodes}</MetaItem> */}
          <MetaItem>{(props.rating / 10).toFixed(1)}</MetaItem>
          <MetaItem>{props.status}</MetaItem>
          <MetaItem>{props.type}</MetaItem>
        </Meta>
        <Title numberOfLines={1}>{props.title.romaji}</Title>
      </Info>
    </Container>
  );
};

export default StandardCard;
