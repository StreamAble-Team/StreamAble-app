import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback } from "react";
import { Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Banner, Card } from "../../components";

import { Popular, ContinueWatching, Trending } from "../../containers";
import { ScrollView, White, Wrap } from "./home.styles";

const HomeScreen = ({ route }) => {
  const onPress = () => {
    const url = `https://anilist.co/api/v2/oauth/authorize?client_id=10189&redirect_uri=streamable://app&response_type=code`;
    Linking.openURL(url);
  };

  useFocusEffect(
    useCallback(() => {
      alert(JSON.stringify(route?.params));
    }, [route])
  );

  return (
    <SafeAreaView>
      <Wrap onPress={onPress}>
        <White>ANLIST</White>
      </Wrap>
      <White>{route?.params?.access_token}</White>
      <White>{route?.params?.id}</White>
      <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
        <Banner />
        <ContinueWatching />
        <Trending />
        <Popular />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
