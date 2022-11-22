import React, { useCallback, useEffect, useState } from "react";
import {
  NavBarContainer,
  NavBarIcon,
  NavBarIconItem,
  NavBarWrapper,
} from "./NavBar.styles";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

const NavBar = ({ currentRoute }) => {
  const navigation = useNavigation();

  const handleStackChange = (stackName) => {
    navigation.navigate(stackName);
  };

  if (currentRoute === "Player") return null;
  return (
    <NavBarContainer>
      <NavBarWrapper>
        <NavBarIconItem onPress={() => handleStackChange("Search")}>
          <NavBarIcon
            name="search"
            isFocused={currentRoute === "Search" ? true : false}
          />
        </NavBarIconItem>
        <NavBarIconItem onPress={() => handleStackChange("Home")}>
          <NavBarIcon
            name="home"
            isFocused={currentRoute === "Home" ? true : false}
          />
        </NavBarIconItem>
        <NavBarIconItem onPress={() => handleStackChange("Info")}>
          <NavBarIcon
            name="list-ul"
            isFocused={currentRoute === "Info" ? true : false}
          />
        </NavBarIconItem>
      </NavBarWrapper>
    </NavBarContainer>
  );
};

export default NavBar;
