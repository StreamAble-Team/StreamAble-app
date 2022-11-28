import { View, Text } from "react-native";
import React from "react";
import { InfoTopPlayButtonText } from "../InfoTop.styles";
import { Container } from "./SubOrDub.styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SubOrDub = ({ subOrDub, setDub, dub }) => {
  const handleDub = async () => {
    try {
      await AsyncStorage.setItem("dub", JSON.stringify(!dub));
      setDub((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container onPress={handleDub}>
      <InfoTopPlayButtonText>{subOrDub}</InfoTopPlayButtonText>
    </Container>
  );
};

export default SubOrDub;
