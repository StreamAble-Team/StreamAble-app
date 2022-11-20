import { View, Text } from "react-native";
import React from "react";
import {
  NavBarContainer,
  NavBarIcon,
  NavBarIconItem,
  NavBarWrapper,
} from "./NavBar.styles";

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavBarWrapper>
        <NavBarIconItem>
          <NavBarIcon name="search" />
        </NavBarIconItem>
        <NavBarIconItem>
          <NavBarIcon name="home" />
        </NavBarIconItem>
        <NavBarIconItem>
          <NavBarIcon name="list-ul" />
        </NavBarIconItem>
      </NavBarWrapper>
    </NavBarContainer>
  );
};

export default NavBar;
