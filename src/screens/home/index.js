import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Banner, Card } from "../../components";

import { Popular, ContinueWatching, Trending } from "../../containers";
import { ScrollView } from "./home.styles";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
        <Banner />
        {/* <ContinueWatching /> */}
        <Trending />
        <Popular />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
