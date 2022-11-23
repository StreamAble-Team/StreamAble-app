import { View } from "react-native";
import React from "react";
import {
  CardContent,
  CardImage,
  Container,
  EpisodeNumber,
  Text,
  Title,
  WatchedAmount,
  WatchedContainer,
} from "./Episode.styles";

const Episode = (props) => {
  const amount = Math.random() * 100;
  return (
    <Container>
      <CardImage source={{ uri: props.image }}>
        <CardContent>
          <Title numberOfLines={1}>{props.title}</Title>
          <EpisodeNumber numberOfLines={1}>
            Episode {props.number}
          </EpisodeNumber>
        </CardContent>
        <WatchedContainer>
          <WatchedAmount amount={amount} />
        </WatchedContainer>
      </CardImage>
    </Container>
  );
};

export default Episode;
