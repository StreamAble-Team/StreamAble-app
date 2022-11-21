import { View, Text } from "react-native";
import React from "react";
import { Container } from "../Container.styles";
import InfoTop from "../../components/Info/Top";

const Info = (props) => {
  return (
    <View>
      <InfoTop {...props} />
    </View>
  );
};

export default Info;
