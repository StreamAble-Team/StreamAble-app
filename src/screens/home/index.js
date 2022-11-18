import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Banner } from "../../components";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Banner />
    </SafeAreaView>
  );
};

export default HomeScreen;
