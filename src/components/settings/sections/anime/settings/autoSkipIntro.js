import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import {
  SectionItem,
  SectionItemText,
  SectionSetting,
} from "../../sections.styles";
import { Option } from "../../../../Form";
import { helpers } from "../../../../../utils";

const AutoSkipIntro = () => {
  const [settingState, setSettingState] = useState(false);

  const getSetting = async () => {
    const setting = await helpers.getSetting("autoSkipIntro");
    if (setting) setSettingState(setting);
  };

  const setSetting = async (setting) => {
    await helpers.setSetting("autoSkipIntro", setting);
  };

  useEffect(() => {
    getSetting();
  }, []);

  return (
    <SectionItem>
      <SectionItemText>Auto Skip Intro</SectionItemText>
      <SectionSetting>
        <Option
          setOption={setSettingState}
          option={settingState}
          onPress={setSetting}
          options={[
            { label: "On", value: true },
            { label: "Off", value: false },
          ]}
        />
      </SectionSetting>
    </SectionItem>
  );
};

export default AutoSkipIntro;
