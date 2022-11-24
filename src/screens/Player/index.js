import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Player from "../../components/Player";

const PlayerScreen = ({ navigation, route }) => {
  const { source, referer } = route.params;
  return (
    <SafeAreaView>
      <Player source={source} referer={referer} />
    </SafeAreaView>
  );
};

export default PlayerScreen;
