import { View, Text } from "react-native";
import React, { useState } from "react";
import Dropdown from "../../components/Form/Dropdown";
import { SafeAreaView } from "react-native-safe-area-context";

const TESTING = () => {
  const [selected, setSelected] = useState(0);
  const data = [
    {
      label: "Gogoanime",
      value: "gogoanime",
      image:
        "https://play-lh.googleusercontent.com/MaGEiAEhNHAJXcXKzqTNgxqRmhuKB1rCUgb15UrN_mWUNRnLpO5T1qja64oRasO7mn0",
    },
    {
      label: "Crunchyroll",
      value: "crunchyroll",
      image:
        "https://play-lh.googleusercontent.com/CjzbMcLbmTswzCGauGQExkFsSHvwjKEeWLbVVJx0B-J9G6OQ-UCl2eOuGBfaIozFqow",
    },
    {
      label: "Zoro",
      value: "zoro",
      image:
        "https://is3-ssl.mzstatic.com/image/thumb/Purple112/v4/7e/91/00/7e9100ee-2b62-0942-4cdc-e9b93252ce1c/source/512x512bb.jpg",
    },
    {
      label: "9anime",
      value: "9anime",
      image:
        "https://d1nxzqpcg2bym0.cloudfront.net/google_play/com.my.nineanime/87b2fe48-9c36-11eb-8292-21241b1c199b/128x128",
    },
  ];

  return (
    <SafeAreaView>
      <Dropdown
        label={data[0].label}
        data={data}
        onSelect={setSelected}
        whatsSelected={selected}
      />
    </SafeAreaView>
  );
};

export default TESTING;
