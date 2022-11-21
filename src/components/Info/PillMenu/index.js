import { View, Text, ScrollView } from "react-native";
import React from "react";
import { MenuContainer, MenuWrapper } from "./PillMenu.styles";
import Pill from "../../Pill";

const PillMenu = () => {
  return (
    <MenuContainer>
      <MenuWrapper>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Pill title={`EPISODES`} />
          <Pill title={`RELATIONS`} />
          <Pill title={`CHARACTERS`} />
        </ScrollView>
      </MenuWrapper>
    </MenuContainer>
  );
};

export default PillMenu;
