import { View, Text, ScrollView } from "react-native";
import React from "react";
import { MenuContainer, MenuWrapper } from "./PillMenu.styles";
import Pill from "../../Pill";

const PillMenu = () => {
  return (
    <MenuContainer>
      <MenuWrapper>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        >
          <Pill title={`EPISODES`} index={0} />
          <Pill title={`RELATIONS`} index={1} />
          <Pill title={`CHARACTERS`} index={2} />
        </ScrollView>
      </MenuWrapper>
    </MenuContainer>
  );
};

export default PillMenu;
