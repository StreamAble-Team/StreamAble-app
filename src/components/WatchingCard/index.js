import { View, Text } from "react-native";
import React from "react";
import {
  WatchingBar,
  WatchingBarHolder,
  WatchingCardBackground,
  WatchingCardContainer,
  WatchingCardContent,
  WatchingCardEpisode,
  WatchingCardTitle,
} from "./WatchingCard.styles";
import { api } from "../../utils";

const WatchingCard = (props) => {
  return (
    <WatchingCardContainer>
      <WatchingCardBackground source={{ uri: props.cover }}>
        <WatchingCardContent>
          <WatchingCardTitle numberOfLines={1}>
            {props.title.romaji}
          </WatchingCardTitle>
          <WatchingCardEpisode numberOfLines={1}>Episode 1</WatchingCardEpisode>
        </WatchingCardContent>
      </WatchingCardBackground>
      <WatchingBarHolder>
        <WatchingBar />
      </WatchingBarHolder>
    </WatchingCardContainer>
  );
};

export default WatchingCard;
