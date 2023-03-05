import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";
import { useRef } from "react";
import { Dropdown, DropdownItem } from "./testing.styles";

const TESTING = () => {
  const pickerRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Football", value: "football" },
  ]);

  // const getProviders = async () => {
  //   const { data } = await api.getProviders();

  //   const providers = data?.map((provider) => ({
  //     label: provider?.name,
  //     value: provider?.id,
  //   }));

  //   setItems(providers);
  // };

  // useFocusEffect(
  //   useCallback(() => {
  //     getProviders();
  //   }, [])
  // );

  return (
    <SafeAreaView>
      <Dropdown
        ref={pickerRef}
        selectedValue={value}
        onValueChange={(itemValue, itemIndex) => setValue(itemValue)}
        mode="dropdown"
      >
        <DropdownItem label="Java" value="java" />
        <DropdownItem label="JavaScript" value="js" />
      </Dropdown>
    </SafeAreaView>
  );
};

export default TESTING;
