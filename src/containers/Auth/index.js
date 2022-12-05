import React, { useCallback, useEffect, useState } from "react";
import { useAniListAuthRequest } from "../../hooks";
import { useAccessToken } from "../../contexts";
import { ANILIST_ACCESS_TOKEN_STORAGE } from "../../utils/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Container, Title } from "./Auth.styles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { AnilistLoginButton } from "../../components/Auth";
import AnilistLoginTextBox from "../../components/Auth/AnilistLogin/AnilistLoginTextBox";

const AuthContainer = () => {
  const [token, setToken] = useState("");
  const navigation = useNavigation();
  const [, , promptAsync] = useAniListAuthRequest();
  const { setAccessToken, accessToken } = useAccessToken();

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const token = await AsyncStorage.getItem(
            ANILIST_ACCESS_TOKEN_STORAGE
          );

          if (token) {
            navigation.navigate("Home");
          }
        } catch {}
      })();
    }, [])
  );

  const handleSubmit = async () => {
    if (token.length <= 20) return null;
    setAccessToken(token);
    await AsyncStorage.setItem(ANILIST_ACCESS_TOKEN_STORAGE, token);
  };

  if (accessToken) return navigation.navigate("Home");

  return (
    <Container>
      <Title>Choose your login method</Title>
      <AnilistLoginButton
        promptAsync={promptAsync}
        setAccessToken={setAccessToken}
        TokenStorage={ANILIST_ACCESS_TOKEN_STORAGE}
        navigation={navigation}
      />
      <AnilistLoginTextBox
        setToken={setToken}
        token={token}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
};

export default AuthContainer;
