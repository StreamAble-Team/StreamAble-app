import { View, Text } from "react-native";
import React from "react";

import {
  CardBackground,
  CardContainer,
  CardContent,
  CardTitle,
} from "./Card.styles";
import { useNavigation } from "@react-navigation/native";

const Card = (props) => {
  const navigation = useNavigation();
  const {
    title: {
      romaji: title_romaji,
      userPreferred: title_userPreferred,
      english: title_english,
    },
    image,
    cover,
  } = props;

  const handlePress = (event) => {
    navigation.navigate("Info", { id: props.id });
  };

  return (
    <CardContainer index={props.index} onPress={handlePress}>
      <CardBackground source={{ uri: image }}>
        <CardContent>
          <CardTitle numberOfLines={2}>
            {title_english || title_userPreferred || title_romaji}
          </CardTitle>
        </CardContent>
      </CardBackground>
    </CardContainer>
  );
};

export default Card;
