import { View, Text } from "react-native";
import React from "react";
import { Container } from "../Container.styles";
import ReaderPages from "../../components/Reader/pages";

const ReaderContainer = ({ pages }) => {
  return (
    <Container>
      <ReaderPages pages={pages} />
    </Container>
  );
};

export default ReaderContainer;
