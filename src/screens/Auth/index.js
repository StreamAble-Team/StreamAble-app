import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContainer } from "../../containers";

const AuthScreen = () => {
  return (
    <SafeAreaView>
      <AuthContainer />
    </SafeAreaView>
  );
};

export default AuthScreen;
