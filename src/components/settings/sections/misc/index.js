import { View, Text } from "react-native";
import React from "react";
import {
  Container,
  Wrapper,
  SettingsCard,
  SettingsCardIcon,
  SettingsCardTitle,
} from "../../settings.styles";

const MiscellaneousSettings = ({ openSettings, openIndex }) => {
  return (
    <>
      <SettingsCard onPress={() => openSettings({ index: 0 })}>
        <SettingsCardTitle numberOfLines={1}>Miscellaneous</SettingsCardTitle>
        <SettingsCardIcon open={openIndex === 0} />
      </SettingsCard>
    </>
  );
};

export default MiscellaneousSettings;
