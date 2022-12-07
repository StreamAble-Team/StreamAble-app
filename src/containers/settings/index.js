import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Settings } from "../../components";
import { useAccessToken } from "../../contexts";
import { Wrapper, Heading, Top } from "../Container.styles";
import Profile from "./Profile";
import { GoBack, GoBackIcon } from "./settings.styles";

const SettingsContainer = () => {
  const { setAccessToken, accessToken } = useAccessToken();
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Wrapper>
      <Top>
        <GoBack onPress={goBack}>
          <GoBackIcon />
        </GoBack>

        <Heading>Settings</Heading>

        <Profile accessToken={accessToken} setAccessToken={setAccessToken} />
      </Top>
      <Settings />
    </Wrapper>
  );
};

export default SettingsContainer;
