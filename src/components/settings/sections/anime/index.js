import { View, Text } from "react-native";
import React from "react";
import {
  SettingsCard,
  SettingsCardIcon,
  SettingsCardTitle,
} from "../../settings.styles";
import {
  SectionItem,
  SectionItemsWrapper,
  SectionItemText,
} from "../sections.styles";
import PreferredTitle from "./settings/PreferredTitle";
import AutoNextEpisode from "./settings/autoNextEpisode";
import AutoSkipIntro from "./settings/autoSkipIntro";

const AnimeSettings = ({ openSettings, openIndex }) => {
  return (
    <>
      <SettingsCard onPress={() => openSettings({ index: 1 })}>
        <SettingsCardTitle numberOfLines={1}>Anime</SettingsCardTitle>
        <SettingsCardIcon open={openIndex === 1} />
      </SettingsCard>
      {openIndex === 1 && (
        <SectionItemsWrapper>
          <PreferredTitle />
          <AutoSkipIntro />
          <AutoNextEpisode />
        </SectionItemsWrapper>
      )}
    </>
  );
};

export default AnimeSettings;
