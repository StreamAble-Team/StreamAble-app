import { View, Text } from "react-native";
import React from "react";
import { InfoTop, PillMenu } from "../../components";

const Info = (props) => {
  return (
    <View>
      <InfoTop {...props} />
      <PillMenu />
    </View>
  );
};

export default Info;
