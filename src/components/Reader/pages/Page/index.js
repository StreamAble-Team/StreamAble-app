import { View, Text } from "react-native";
import React from "react";
import {
  Image,
  ImageContainer,
  PageContainer,
  PageNumber,
  ZoomableView,
} from "./Page.styles";

const Page = ({ page }) => {
  const img = page?.img;
  const headers = page?.headerForImage;

  return (
    <ImageContainer>
      <PageContainer>
        <PageNumber>{page?.page}</PageNumber>
      </PageContainer>
      <Image
        key={page.id}
        source={{
          uri: img,
          headers: {
            Referer: headers?.Referer,
          },
        }}
      />
    </ImageContainer>
  );
};

export default Page;
