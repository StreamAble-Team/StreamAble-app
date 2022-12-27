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
  const { title } = props;
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

  const title_native = props?.media?.title?.native || title?.native;
  const title_romaji =
    props?.media?.title?.romaji || title?.romaji || title_native;
  const title_english =
    props?.media?.title?.english ||
    title?.english ||
    title_romaji ||
    title_native;

  return (
    <SearchCardContainer onPress={handlePress}>
      <SearchCardImageContainer>
        <SearchCardImage source={{ uri: props.image }} />
      </SearchCardImageContainer>
      <SearchCardInfo>
        <SearchCardDescription numberOfLines={3}>
          {description || "??"}
        </SearchCardDescription>
        <SearchCardMeta>
          <SearchCardMetaItem>{props?.releaseDate || "??"}</SearchCardMetaItem>
          <SearchCardMetaItem>
            {props?.totalEpisodes || "??"}
          </SearchCardMetaItem>
          <SearchCardMetaItem>
            {parseFloat((props.rating / 10)?.toFixed(1)) === 0.0
              ? "??"
              : (props.rating / 10)?.toFixed(1)}
          </SearchCardMetaItem>
          <SearchCardMetaItem>{props?.status || "??"}</SearchCardMetaItem>
          <SearchCardMetaItem>{props?.type || "??"}</SearchCardMetaItem>
        </SearchCardMeta>
        <SearchCardTitle numberOfLines={1}>
          {settingTitle === "EN" ? title_english : title_romaji}
        </SearchCardTitle>
      </SearchCardInfo>
    </SearchCardContainer>
  );
};

export default SearchCard;
