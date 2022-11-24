import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Player from "../../components/Player";
import { useKeepAwake } from "expo-keep-awake";

const PlayerScreen = ({ navigation, route }) => {
  useKeepAwake();
  const { source, referer, title, episode } = route.params;
  return (
    <SafeAreaView>
      <Player
        source={source}
        referer={referer}
        title={title}
        episode={episode}
      />
    </SafeAreaView>
  );
};

export default PlayerScreen;
