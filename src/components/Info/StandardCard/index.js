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
  const description = textSanitizer(props.description);
  return (
    <Container>
      <ImageContainer>
        <CardImage source={{ uri: props.image }} />
      </ImageContainer>
      <Info>
        <Description numberOfLines={3}>{props.relationType}</Description>
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
