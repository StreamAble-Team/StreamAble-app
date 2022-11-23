import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Info } from "../../containers";
import { InfoJSOn } from "../../utils/testData";

const InfoScreen = () => {
  return (
    <SafeAreaView>
      <Info {...InfoJSOn} />
    </SafeAreaView>
  );
};

export default InfoScreen;
