import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useKeepAwake } from "expo-keep-awake";
import ReaderContainer from "../../containers/Reader";

const ReaderScreen = ({ navigation, route }) => {
  useKeepAwake();
  return (
    <SafeAreaView>
      <ReaderContainer {...route.params} />
    </SafeAreaView>
  );
};

export default ReaderScreen;
