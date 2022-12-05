import React from "react";
import { Button, ButtonText, Container } from "./AnilistLoginButton.styles";
import * as WebBrowser from "expo-web-browser";
import { CLIENT_ID } from "../../../../utils/constants";
import { Linking } from "react-native";

WebBrowser.maybeCompleteAuthSession();

const AnilistLoginButton = ({
  navigation,
  promptAsync,
  setAccessToken,
  TokenStorage,
}) => {
  // const onPress = async () => {
  //   const result = await promptAsync();
  //   console.log(result);

  //   if (result.type === "error" || result.type === "success") {
  //     if (result.params.access_token) {
  //       setAccessToken(result.params.access_token);
  //       await AsyncStorage.setItem(TokenStorage, result.params.access_token);
  //       navigation.replace("Tabs");
  //     }
  //   }
  // };

  const onPress = async () => {
    Linking.openURL(
      `https://anilist.co/api/v2/oauth/authorize?client_id=${CLIENT_ID}&response_type=token`
    );
  };

  return (
    <Container>
      <Button onPress={onPress}>
        <ButtonText>Anilist</ButtonText>
      </Button>
    </Container>
  );
};

export default AnilistLoginButton;
