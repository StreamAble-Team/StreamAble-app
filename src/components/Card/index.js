import { View, Text } from "react-native";
import React, { useCallback } from "react";

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

  //check if focused or not
  const onFocus = useCallback(() => {
    console.log("Focused item ", title_english);
  }, [title_english]);
  const onBlur = useCallback(() => {
    console.log("Lost item ", title_english);
  }, [title_english]);

  return (
    <CardContainer index={props.index} onPress={handlePress}>
      <CardBackground
        source={{ uri: props?.media?.coverImage?.large || image }}
      >
        <CardContent>
          <CardTitle numberOfLines={2} ellipsizeMode={"tail"}>
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
