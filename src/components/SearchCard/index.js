import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { helpers, textSanitizer } from "../../utils";
import {
  SearchCardContainer,
  SearchCardDescription,
  SearchCardImage,
  SearchCardImageContainer,
  SearchCardInfo,
  SearchCardMeta,
  SearchCardMetaItem,
  SearchCardTitle,
} from "./SearchCard.styles";

const SearchCard = (props) => {
  const [settingTitle, setSettingTitle] = useState("EN");
  const navigation = useNavigation();

  const handlePress = (event) => {
    navigation.navigate("Info", { id: props.id });
  };

  const description = textSanitizer(props.description);

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
    <SearchCardContainer onPress={handlePress}>
      <SearchCardImageContainer>
        <SearchCardImage source={{ uri: props.image }} />
      </SearchCardImageContainer>
      <SearchCardInfo>
        <SearchCardDescription numberOfLines={3}>
          {description}
        </SearchCardDescription>
        <SearchCardMeta>
          <SearchCardMetaItem>{props.releaseDate}</SearchCardMetaItem>
          <SearchCardMetaItem>{props.totalEpisodes}</SearchCardMetaItem>
          <SearchCardMetaItem>
            {(props.rating / 10).toFixed(1)}
          </SearchCardMetaItem>
          <SearchCardMetaItem>{props.status}</SearchCardMetaItem>
          <SearchCardMetaItem>{props.type}</SearchCardMetaItem>
        </SearchCardMeta>
        <SearchCardTitle numberOfLines={1}>
          {settingTitle === "EN" ? props?.title?.english : props?.title?.romaji}
        </SearchCardTitle>
      </SearchCardInfo>
    </SearchCardContainer>
  );
};

export default SearchCard;
