import { View, Text } from "react-native";
import React, { useState } from "react";
import {
  Container,
  Wrapper,
  SettingsCard,
  SettingsCardIcon,
  SettingsCardTitle,
} from "./settings.styles";
import Disclaimer from "./disclaimer";
import { AnimeSettings, MiscellaneousSettings } from "./sections";

const Settings = () => {
  const [openIndex, setOpenIndex] = useState(false);

  const openSettings = ({ index }) => {
    setOpenIndex(index);
  };

  return (
    <Container>
      <Wrapper>
        <MiscellaneousSettings
          openSettings={openSettings}
          openIndex={openIndex}
        />

        <AnimeSettings openSettings={openSettings} openIndex={openIndex} />

        {/* <SettingsCard onPress={() => openSettings({ index: 2 })}>
          <SettingsCardTitle numberOfLines={1}>Manga</SettingsCardTitle>
          <SettingsCardIcon />
        </SettingsCard> */}

        <SettingsCard onPress={() => openSettings({ index: 3 })}>
          <SettingsCardTitle numberOfLines={1}>About</SettingsCardTitle>
          <SettingsCardIcon open={openIndex === 3} />
        </SettingsCard>
      </Wrapper>
      <Disclaimer />
    </Container>
  );
};

export default Settings;
