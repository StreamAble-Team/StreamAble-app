import { View, Text, Animated } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Container,
  ImageContainer,
  TopWrapper,
  PosterContainer,
  PosterImageWrapper,
  TopButtons,
  TopSubTitle,
  TopTitle,
  TopPlayButton,
  MetaContainer,
  MetaContainerWrapper,
  MetaItemContainer,
  DescriptionView,
  DescriptionText,
} from "./InfoSkeleton.styles";

const InfoSkeleton = () => {
  const [opacity, setOpacity] = useState(new Animated.Value(0.5));
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.5,
          duration: 1200,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [opacity]);

  return (
    <Container style={{ opacity }}>
      <ImageContainer />
      <PosterContainer>
        <PosterImageWrapper></PosterImageWrapper>
        <TopWrapper>
          <TopTitle />
          <TopSubTitle />
          <TopButtons>
            <TopPlayButton />
            <TopPlayButton />
          </TopButtons>
        </TopWrapper>
      </PosterContainer>
      <MetaContainer>
        <MetaContainerWrapper>
          <MetaItemContainer />
          <MetaItemContainer />
          <MetaItemContainer />
          <MetaItemContainer />
        </MetaContainerWrapper>
      </MetaContainer>
      <DescriptionView>
        <DescriptionText />
      </DescriptionView>
    </Container>
  );
};

export default InfoSkeleton;
