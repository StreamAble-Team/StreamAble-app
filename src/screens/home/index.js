import React, { useState } from "react";
import { RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Banner } from "../../components";
import User from "../../components/User";

import {
  Popular,
  ContinueWatching,
  Trending,
  TopRated,
} from "../../containers";
import PlanToWatch from "../../containers/PlanToWatch";
import { ScrollView } from "./home.styles";

const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
  };

  return (
    <SafeAreaView>
      <ScrollView
        vertical={true}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["#7d5fff"]}
            progressBackgroundColor={"#212121"}
            size={"large"}
          />
        }
      >
        <Banner />
        {/* <User /> */}
        <ContinueWatching
          refreshing={refreshing}
          setRefreshing={setRefreshing}
        />
        <PlanToWatch refreshing={refreshing} setRefreshing={setRefreshing} />
        <TopRated />
        <Popular />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
