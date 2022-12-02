import { View, Text } from "react-native";
import React from "react";
import {
  Container,
  Wrapper,
  SettingsCard,
  SettingsCardIcon,
  SettingsCardTitle,
} from "./settings.styles";
import Disclaimer from "./disclaimer";

const Settings = () => {
  return (
    <Container>
      <Wrapper>
        <SettingsCard>
          <SettingsCardTitle numberOfLines={1}>Miscellaneous</SettingsCardTitle>
          <SettingsCardIcon />
        </SettingsCard>

        <SettingsCard>
          <SettingsCardTitle numberOfLines={1}>Anime</SettingsCardTitle>
          <SettingsCardIcon />
        </SettingsCard>

        <SettingsCard>
          <SettingsCardTitle numberOfLines={1}>Manga</SettingsCardTitle>
          <SettingsCardIcon />
        </SettingsCard>

        <SettingsCard>
          <SettingsCardTitle numberOfLines={1}>About</SettingsCardTitle>
          <SettingsCardIcon />
        </SettingsCard>
      </Wrapper>
      <Disclaimer />
    </Container>
  );
};

export default Settings;
