import { View, Text } from "react-native";
import React from "react";
import Slider from "@react-native-community/slider";

const SeekBar = () => {
  return (
    <View>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />
    </View>
  );
};

export default SeekBar;
