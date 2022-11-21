import { View, Text } from "react-native";
import React from "react";
import {
  NavBarContainer,
  NavBarIcon,
  NavBarIconItem,
  NavBarWrapper,
} from "./NavBar.styles";
import { useNavigation } from "@react-navigation/native";

const NavBar = () => {
  const navigation = useNavigation();

  const handleStackChange = (stackName) => {
    navigation.navigate(stackName);
  };

  return (
    <NavBarContainer>
      <NavBarWrapper>
        <NavBarIconItem onPress={() => handleStackChange("Search")}>
          <NavBarIcon name="search" />
        </NavBarIconItem>
        <NavBarIconItem onPress={() => handleStackChange("Home")}>
          <NavBarIcon name="home" />
        </NavBarIconItem>
        <NavBarIconItem onPress={() => handleStackChange("Info")}>
          <NavBarIcon name="list-ul" />
        </NavBarIconItem>
      </NavBarWrapper>
    </NavBarContainer>
  );
};

export default NavBar;
