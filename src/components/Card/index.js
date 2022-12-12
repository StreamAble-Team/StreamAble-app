import { View, Text } from "react-native";
import React, { useCallback, useEffect, useState } from "react";

import {
  CardBackground,
  CardContainer,
  CardContent,
  CardTitle,
} from "./Card.styles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { helpers } from "../../utils";

const Card = (props) => {
  const [settingTItle, setSettingTitle] = useState("EN");
  const navigation = useNavigation();
  const { title, image, cover } = props;

  const title_english = title?.english;
  const title_romaji = title?.romaji;

  const handlePress = (event) => {
    navigation.navigate("Info", { id: props?.media?.id || props?.id });
  };

  const getTitle = async () => {
    const preferredTitle = await helpers.getSetting("preferredLanguage");
    setSettingTitle(helpers.removeNonAlphaNumeric(preferredTitle));
  };

  useFocusEffect(
    useCallback(() => {
      getTitle();
    }, [])
  );

  return (
    <CardContainer index={props.index} onPress={handlePress}>
      <CardBackground
        source={{ uri: props?.media?.coverImage?.large || image }}
      >
        <CardContent>
          <CardTitle numberOfLines={2} ellipsizeMode={"tail"}>
            {settingTItle === "EN"
              ? props?.media?.title?.english || title_english || title_romaji
              : props?.media?.title?.romaji || title_romaji || title_english}
          </CardTitle>
        </CardContent>
      </CardBackground>
    </CardContainer>
  );
};

export default Card;
