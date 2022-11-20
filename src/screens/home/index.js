import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Banner, Card } from "../../components";

import { Popular } from "../../containers";
import ContinueWatching from "../../containers/ContinueWatching";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Banner />
      <ContinueWatching />
      <Popular />
    </SafeAreaView>
  );
};

export default HomeScreen;
