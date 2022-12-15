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

  if (
    currentRoute === "Player" ||
    currentRoute === "Settings" ||
    currentRoute === "Reader"
  )
    return null;
  return (
    <NavBarContainer>
      <NavBarWrapper>
        <NavBarIconItem onPress={() => handleStackChange("Home")}>
          <NavBarIcon
            name="home"
            isFocused={currentRoute === "Home" ? true : false}
          />
        </NavBarIconItem>
        <NavBarIconItem onPress={() => handleStackChange("Search")}>
          <NavBarIcon
            name="search"
            isFocused={currentRoute === "Search" ? true : false}
          />
        </NavBarIconItem>
        <NavBarIconItem onPress={() => handleStackChange("Lists")}>
          <NavBarIcon
            name="list-ul"
            isFocused={currentRoute === "Lists" ? true : false}
          />
        </NavBarIconItem>
        <NavBarIconItem onPress={() => handleStackChange("Settings")}>
          <NavBarIcon
            name="cog"
            isFocused={currentRoute === "Settings" ? true : false}
          />
        </NavBarIconItem>
      </NavBarWrapper>
    </NavBarContainer>
  );
};

export default NavBar;
