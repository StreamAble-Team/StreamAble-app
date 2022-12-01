import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { Action, ActionText, Container } from "./Actions.styles";

const Actions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handlePress = (index) => {
    setActiveIndex(index);
  };

  return (
    <Container>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToAlignment={"center"}
      >
        <Action active={activeIndex === 0} onPress={() => handlePress(0)}>
          <ActionText>Watching</ActionText>
        </Action>
        <Action active={activeIndex === 1} onPress={() => handlePress(1)}>
          <ActionText>Completed</ActionText>
        </Action>
        <Action active={activeIndex === 2} onPress={() => handlePress(2)}>
          <ActionText>Plan to Watch</ActionText>
        </Action>
        <Action active={activeIndex === 3} onPress={() => handlePress(3)}>
          <ActionText>On Hold</ActionText>
        </Action>
        <Action
          style={{ marginRight: 0 }}
          active={activeIndex === 4}
          onPress={() => handlePress(4)}
        >
          <ActionText>Dropped</ActionText>
        </Action>
      </ScrollView>
    </Container>
  );
};

export default Actions;
