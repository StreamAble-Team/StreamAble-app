import { View, Text } from "react-native";
import React from "react";
import { Container, RemoveIcon, RemoveText } from "./RemoveFromList.styles";

const RemoveFromList = () => {
  return (
    <Container>
      <RemoveIcon name="trash" />
      <RemoveText>Remove from list</RemoveText>
    </Container>
  );
};

export default RemoveFromList;
