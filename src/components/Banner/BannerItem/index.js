import React from "react";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerMeta,
  BannerMetaItem,
  BannerMetaItemIcon,
  BannerMetaItemIconContainer,
  BannerMetaItemText,
  BannerTitle,
} from "./BannerItem.styles";

import { textSanitizer } from "../../../utils";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BannerItem = (props) => {
  const navigation = useNavigation();
  const width = Dimensions.get("window").width;
  const item = props;
  const description = textSanitizer(item.description);

  const handlePress = (event) => {
    navigation.navigate("Info", { id: item.id });
  };

  return (
    <BannerContainer key={item.id} width={width} onPress={handlePress}>
      <BannerImage
        source={{ uri: item.cover }}
        alt={
          item?.title?.english ||
          item?.title?.userPreferred ||
          item?.title?.romaji
        }
      >
        <BannerContent>
          <BannerDescription numberOfLines={4}>{description}</BannerDescription>
          <BannerTitle numberOfLines={1}>
            {item?.title?.english ||
              item?.title?.userPreferred ||
              item?.title?.romaji}
          </BannerTitle>
          <BannerMeta>
            <BannerMetaItem>
              <BannerMetaItemIconContainer>
                <BannerMetaItemIcon name="star" />
              </BannerMetaItemIconContainer>
              <BannerMetaItemText>
                {(item.rating / 10).toFixed(1)}
              </BannerMetaItemText>
            </BannerMetaItem>
            <BannerMetaItem>
              <BannerMetaItemText>{item.releaseDate}</BannerMetaItemText>
            </BannerMetaItem>
            <BannerMetaItem>
              <BannerMetaItemText>
                {item.status.toUpperCase()}
              </BannerMetaItemText>
            </BannerMetaItem>
            <BannerMetaItem>
              <BannerMetaItemText>{item.type.toUpperCase()}</BannerMetaItemText>
            </BannerMetaItem>
          </BannerMeta>
        </BannerContent>
      </BannerImage>
    </BannerContainer>
  );
};

export default BannerItem;
