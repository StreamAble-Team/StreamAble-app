import { View, Text } from "react-native";
import React from "react";
import { PillContainer, PillTitle } from "./Pill.styles";

const Pill = ({ title, onPress }) => {
  return (
    <PillContainer onPress={onPress}>
      <PillTitle>{title}</PillTitle>
    </PillContainer>
  );
};

export default Pill;
