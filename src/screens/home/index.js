import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Banner, Card } from "../../components";

import { Popular } from "../../containers";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Banner />
      <Popular />
    </SafeAreaView>
  );
};

export default HomeScreen;
