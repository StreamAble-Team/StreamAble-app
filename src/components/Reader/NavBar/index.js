import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { helpers } from "../../../utils";
import { Container, Title } from "./NavBar.styles";

const ReaderNavBar = ({ mangaTitle }) => {
  const [preferredLanguage, setPreferredLanguage] = useState("EN");
  const title_english = mangaTitle?.english || mangaTitle?.romaji;
  const title_romaji = mangaTitle?.romaji || mangaTitle?.english;

  const getTitle = async () => {
    const preferredTitle = await helpers.getSetting("preferredLanguage");
    setPreferredLanguage(preferredTitle);
  };

  useFocusEffect(
    useCallback(() => {
      getTitle();
    }, [])
  );

  return (
    <Container>
      <Title>
        {preferredLanguage === "EN" || title_english || title_romaji}
      </Title>
    </Container>
  );
};

export default ReaderNavBar;
