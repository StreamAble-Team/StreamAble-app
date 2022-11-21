import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Info } from "../../containers";
import { TestTrendingArray } from "../../utils/testData";

const InfoScreen = () => {
  return (
    <SafeAreaView>
      <Info {...TestTrendingArray.results[0]} />
    </SafeAreaView>
  );
};

export default InfoScreen;
