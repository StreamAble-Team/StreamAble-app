import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Settings } from "../../components";
import { Wrapper, Heading } from "../Container.styles";
import { GoBack, GoBackIcon } from "./settings.styles";

const SettingsContainer = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Wrapper>
      <GoBack onPress={goBack}>
        <GoBackIcon />
      </GoBack>

      <Heading>Settings</Heading>
      <Settings />
    </Wrapper>
  );
};

export default SettingsContainer;
