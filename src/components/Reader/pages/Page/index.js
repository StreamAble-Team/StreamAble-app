import { View, Text } from "react-native";
import React from "react";
import {
  Image,
  ImageContainer,
  PageContainer,
  PageNumber,
  ZoomableView,
} from "./Page.styles";

const Page = ({ page, onZoom }) => {
  const img = page?.img;
  const headers = page?.headerForImage;

  const changeScroll = (zoom = false) => {
    onZoom(zoom);
  };

  return (
    <ImageContainer>
      <PageContainer>
        <PageNumber>{page?.page}</PageNumber>
      </PageContainer>
      <ZoomableView
        onZoomBefore={() => changeScroll(false)}
        onZoomEnd={() => changeScroll(true)}
        maxZoom={5}
        minZoom={1}
        zoomStep={0.5}
        initialZoom={1}
      >
        <Image
          key={page.id}
          source={{
            uri: img,
            headers: {
              Referer: headers?.Referer,
            },
          }}
        />
      </ZoomableView>
    </ImageContainer>
  );
};

export default Page;
