import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Player from "../../components/Player";

const PlayerScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Player />
    </SafeAreaView>
  );
};

export default PlayerScreen;
