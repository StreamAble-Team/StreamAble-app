import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAccessToken } from "../../contexts";
import {
  LoginButton,
  LoginButtonText,
  NotLoggedIn,
  NotLoggedInText,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import ListsContainer from "../../containers/lists";

const ListScreen = () => {
  const navigation = useNavigation();
  const { accessToken, setAccessToken } = useAccessToken();

  if (!accessToken)
    return (
      <SafeAreaView>
        <NotLoggedIn>
          <NotLoggedInText>
            Login to Anilist to view your library
          </NotLoggedInText>
          <LoginButton onPress={() => navigation.navigate("Auth")}>
            <LoginButtonText>Login</LoginButtonText>
          </LoginButton>
        </NotLoggedIn>
      </SafeAreaView>
    );

  return (
    <SafeAreaView>
      <ListsContainer />
    </SafeAreaView>
  );
};

export default ListScreen;
