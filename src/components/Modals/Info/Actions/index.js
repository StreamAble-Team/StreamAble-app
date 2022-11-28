import { View, Text } from "react-native";
import React from "react";
import { Action, ActionText, Container } from "./Actions.styles";

const Actions = () => {
  return (
    <Container>
      <Action>
        <ActionText>Watching</ActionText>
      </Action>
      <Action>
        <ActionText>Completed</ActionText>
      </Action>
      <Action>
        <ActionText>Plan to Watch</ActionText>
      </Action>
      <Action>
        <ActionText>On Hold</ActionText>
      </Action>
      <Action>
        <ActionText>Dropped</ActionText>
      </Action>
    </Container>
  );
};

export default Actions;
