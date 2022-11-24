import React from "react";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerMeta,
  BannerMetaItem,
  BannerTitle,
} from "./Banner.styles";

import { useQuery } from "react-query";

import { api, textSanitizer } from "../../utils";

const Banner = () => {
  const { data } = useQuery("BannerData", () => api.getTopRated(1));

  if (!data?.results) return null;

  const item = data.results[0];
  const description = textSanitizer(item.description);
  return (
    <BannerContainer key={item.id}>
      <BannerImage source={{ uri: item.cover }} alt={item.title}>
        <BannerContent>
          <BannerDescription numberOfLines={4}>{description}</BannerDescription>
          <BannerMeta>
            <BannerMetaItem>{item.releaseDate}</BannerMetaItem>
            <BannerMetaItem>{item.totalEpisodes}</BannerMetaItem>
            <BannerMetaItem>{item.rating / 10}</BannerMetaItem>
            <BannerMetaItem>{item.status.toUpperCase()}</BannerMetaItem>
            <BannerMetaItem>{item.type.toUpperCase()}</BannerMetaItem>
          </BannerMeta>
          <BannerTitle numberOfLines={1}>{item.title.romaji}</BannerTitle>
        </BannerContent>
      </BannerImage>
    </BannerContainer>
  );
};

export default Banner;
