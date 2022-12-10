import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import {
  SectionItem,
  SectionItemText,
  SectionSetting,
} from "../../sections.styles";
import { Option } from "../../../../Form";
import { helpers } from "../../../../../utils";

const PreferredTitle = () => {
  const [language, setLanguage] = useState("EN");

  const getPreferredLanguage = async () => {
    const language = await helpers.getSetting("preferredLanguage");
    if (language) setLanguage(language);
  };

  const setPreferredLanguage = async (language) => {
    await helpers.setSetting("preferredLanguage", language);
  };

  useEffect(() => {
    getPreferredLanguage();
  }, []);

  return (
    <SectionItem>
      <SectionItemText>Anime language</SectionItemText>
      <SectionSetting>
        <Option
          setOption={setLanguage}
          option={language}
          onPress={setPreferredLanguage}
          options={[
            { label: "EN", value: "EN" },
            { label: "JP", value: "JP" },
          ]}
        />
      </SectionSetting>
    </SectionItem>
  );
};

export default PreferredTitle;
