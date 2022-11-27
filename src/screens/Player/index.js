import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Player from "../../components/Player";
import { useKeepAwake } from "expo-keep-awake";

const PlayerScreen = ({ navigation, route }) => {
  useKeepAwake();
  return (
    <SafeAreaView>
      <Player {...route.params} />
    </SafeAreaView>
  );
};

export default PlayerScreen;
