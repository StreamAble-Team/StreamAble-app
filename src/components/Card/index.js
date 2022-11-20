import { View, Text } from "react-native";
import React from "react";

import {
  CardBackground,
  CardContainer,
  CardContent,
  CardTitle,
} from "./Card.styles";

const Card = (props) => {
  return (
    <CardContainer index={props.index}>
      <CardBackground source={{ uri: props.image }}>
        <CardContent>
          <CardTitle numberOfLines={1}>{props.title.romaji}</CardTitle>
        </CardContent>
      </CardBackground>
    </CardContainer>
  );
};

export default Card;
