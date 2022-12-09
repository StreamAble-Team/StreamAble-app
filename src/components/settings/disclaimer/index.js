import { View } from "react-native";
import * as Linking from "expo-linking";
import React from "react";
import {
  AppVersion,
  Social,
  SocialIconWrapper,
  SocialWrapper,
  Text,
} from "./disclaimer.styles";
import Constants from "expo-constants";

const Disclaimer = () => {
  const version = Constants?.manifest?.version || "BETA";

  const onPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <View>
      <SocialWrapper>
        <SocialIconWrapper
          onPress={() =>
            onPress("https://github.com/TDanks2000/StreamAble-app")
          }
        >
          <Social name="github" />
        </SocialIconWrapper>
      </SocialWrapper>
      <AppVersion>Version {version}</AppVersion>
    </View>
  );
};

export default Disclaimer;
