import { View, Text } from "react-native";
import React from "react";
import { PillContainer, PillTitle } from "./Pill.styles";

const Pill = ({ title, onPress, index, active = false }) => {
  return (
    <PillContainer onPress={onPress} index={index} active={active}>
      <PillTitle>{title}</PillTitle>
    </PillContainer>
  );
};

export default Pill;
