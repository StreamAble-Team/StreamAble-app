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
  const { title, image, cover } = props;

  const title_english = title?.english;
  const title_romaji = title?.romaji;

  const handlePress = (event) => {
    navigation.navigate("Info", { id: props?.media?.id || props?.id });
  };

  return (
    <CardContainer index={props.index} onPress={handlePress}>
      <CardBackground
        source={{ uri: props?.media?.coverImage?.large || image }}
      >
        <CardContent>
          <CardTitle numberOfLines={2}>
            {props?.media?.title?.english ||
              props?.media?.title?.romaji ||
              title_english ||
              title_romaji}
          </CardTitle>
        </CardContent>
      </CardBackground>
    </CardContainer>
  );
};

export default Card;
