import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { helpers } from "../../../utils";
import {
  Container,
  FlexBox,
  GoBackWrapper,
  GoBackWrapperPressable,
  IconItem,
  MangaSubTitle,
  MangaTitle,
  Title,
  TitleWrapper,
} from "./NavBar.styles";

const ReaderNavBar = ({ mangaTitle, chapter, toggleNavBar }) => {
  const navigation = useNavigation();
  const [preferredLanguage, setPreferredLanguage] = useState("EN");
  const title_english = mangaTitle?.english || mangaTitle?.romaji;
  const title_romaji = mangaTitle?.romaji || mangaTitle?.english;

  const getTitle = async () => {
    const preferredTitle = await helpers.getSetting("preferredLanguage");
    setPreferredLanguage(preferredTitle);
  };

  const handleGoBack = () => {
    navigation.canGoBack() ? navigation.goBack() : navigation.navigate("Home");
  };

  useFocusEffect(
    useCallback(() => {
      getTitle();
    }, [])
  );

  if (!toggleNavBar) return null;
  return (
    <Container>
      <FlexBox>
        <GoBackWrapperPressable onPress={() => handleGoBack()}>
          <IconItem name="arrow-left" />
        </GoBackWrapperPressable>
        <TitleWrapper>
          <MangaTitle>
            {preferredLanguage === "EN" ? title_english : title_romaji}
          </MangaTitle>
          <MangaSubTitle>Chapter {chapter}</MangaSubTitle>
        </TitleWrapper>
      </FlexBox>
    </Container>
  );
};

export default ReaderNavBar;
