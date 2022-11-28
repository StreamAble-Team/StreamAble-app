import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Action, ActionText, Container } from "./Actions.styles";

const Actions = () => {
  return (
    <Container>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToAlignment={"center"}
      >
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
        <Action style={{ marginRight: 0 }}>
          <ActionText>Dropped</ActionText>
        </Action>
      </ScrollView>
    </Container>
  );
};

export default Actions;
