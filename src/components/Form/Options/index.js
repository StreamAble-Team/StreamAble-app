import { View, Text } from "react-native";
import React from "react";
import { Container, Item, ItemText } from "./Options.styles";
import { helpers } from "../../../utils";

const Option = ({ options, setOption, option, onPress }) => {
  const handlePress = (value) => {
    setOption(value);
    onPress(value);
  };

  return (
    <Container>
      {options.map((o) => {
        const active =
          String(helpers.removeNonAlphaNumeric(o.value.toString())) ===
          String(helpers.removeNonAlphaNumeric(option.toString()));

        return (
          <Item
            key={o.value}
            onPress={() => handlePress(o.value)}
            isActive={active}
          >
            <ItemText isActive={active}>{o.label}</ItemText>
          </Item>
        );
      })}
    </Container>
  );
};

export default Option;
