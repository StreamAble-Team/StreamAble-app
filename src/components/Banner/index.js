import { View, Text } from "react-native";
import React from "react";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerMeta,
  BannerMetaDot,
  BannerMetaItem,
  BannerTitle,
} from "./Banner.styles";

import { TestARRAY } from "../../utils/testData";

const Banner = () => {
  return TestARRAY.map((test) => {
    return (
      <BannerContainer key={test.id}>
        <BannerImage source={{ uri: test.cover }} alt={test.title}>
          <BannerContent>
            <BannerDescription numberOfLines={3}>
              {test.description}
            </BannerDescription>
            <BannerMeta>
              <BannerMetaItem>{test.releaseDate}</BannerMetaItem>
              <BannerMetaItem>{test.totalEpisodes}</BannerMetaItem>
              <BannerMetaItem>{test.rating / 10}</BannerMetaItem>
              <BannerMetaItem>{test.status.toUpperCase()}</BannerMetaItem>
              <BannerMetaItem>{test.type.toUpperCase()}</BannerMetaItem>
            </BannerMeta>
            <BannerTitle numberOfLines={1}>{test.title.romaji}</BannerTitle>
          </BannerContent>
        </BannerImage>
      </BannerContainer>
    );
  });
};

export default Banner;
