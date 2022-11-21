import { View, Text } from "react-native";
import React from "react";
import {
  SearchBarBar,
  SearchBarContainer,
  SearchBarIcon,
  SearchBarIconItem,
} from "./SearchBar.styles";

const SearchBar = ({ searchPhrase, setSearchPhrase }) => {
  return (
    <SearchBarContainer>
      <SearchBarBar
        placeholder="Search"
        value={searchPhrase}
        onChangeText={setSearchPhrase}
        placeholderTextColor={"#fff"}
      />
      <SearchBarIconItem>
        <SearchBarIcon name="search" />
      </SearchBarIconItem>
    </SearchBarContainer>
  );
};

export default SearchBar;
