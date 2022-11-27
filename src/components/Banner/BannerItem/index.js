import React from "react";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerMeta,
  BannerMetaItem,
  BannerTitle,
} from "./BannerItem.styles";

import { textSanitizer } from "../../../utils";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BannerItem = (props) => {
  const navigation = useNavigation();
  const width = Dimensions.get("screen").width;
  const item = props;
  const description = textSanitizer(item.description);

  const handlePress = (event) => {
    navigation.navigate("Info", { id: item.id });
  };

  return (
    <BannerContainer key={item.id} width={width} onPress={handlePress}>
      <BannerImage source={{ uri: item.cover }} alt={item.title}>
        <BannerContent>
          <BannerDescription numberOfLines={4}>{description}</BannerDescription>
          <BannerMeta>
            <BannerMetaItem>{(item.rating / 10).toFixed(1)}</BannerMetaItem>
            <BannerMetaItem>{item.releaseDate}</BannerMetaItem>
            <BannerMetaItem>{item.totalEpisodes}</BannerMetaItem>
            <BannerMetaItem>{item.status.toUpperCase()}</BannerMetaItem>
            <BannerMetaItem>{item.type.toUpperCase()}</BannerMetaItem>
          </BannerMeta>
          <BannerTitle numberOfLines={1}>{item.title.romaji}</BannerTitle>
        </BannerContent>
      </BannerImage>
    </BannerContainer>
  );
};

export default BannerItem;
