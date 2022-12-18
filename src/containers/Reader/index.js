import { View, Text } from "react-native";
import React from "react";
import { Container } from "../Container.styles";
import ReaderPages from "../../components/Reader/pages";
import { ReaderNavBar } from "../../components";

const ReaderContainer = ({ pages, mangaTitle, chapter }) => {
  return (
    <>
      <ReaderNavBar mangaTitle={mangaTitle} chapter={chapter} />
      <Container>
        <ReaderPages pages={pages} mangaTitle={mangaTitle} />
      </Container>
    </>
  );
};

export default ReaderContainer;
