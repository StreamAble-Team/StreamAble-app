import { View, Text } from "react-native";
import React, { useRef } from "react";
import {
  SearchBarBar,
  SearchBarContainer,
  SearchBarIcon,
  SearchBarIconItem,
} from "./SearchBar.styles";

const SearchBar = ({ searchPhrase, setSearchPhrase, handleSubmit }) => {
  const textInputRef = useRef(null);

  return (
    <SearchBarContainer>
      <SearchBarBar
        ref={textInputRef}
        placeholder="Search"
        value={searchPhrase}
        onChangeText={setSearchPhrase}
        placeholderTextColor={"#fff"}
        onSubmitEditing={handleSubmit}
      />
      <SearchBarIconItem>
        <SearchBarIcon name="search" />
      </SearchBarIconItem>
    </SearchBarContainer>
  );
};

export default SearchBar;
