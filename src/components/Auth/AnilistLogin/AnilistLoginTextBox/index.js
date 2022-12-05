import { View, Text } from "react-native";
import React, { useRef } from "react";
import { TextBox } from "./AnilistLoginTextBox.styes";

const AnilistLoginTextBox = ({ setToken, handleSubmit, token }) => {
  return (
    <TextBox
      placeholder="Please paste your access token here"
      placeholderTextColor={"#fff"}
      value={token}
      onChangeText={setToken}
      onSubmitEditing={handleSubmit}
    />
  );
};

export default AnilistLoginTextBox;
