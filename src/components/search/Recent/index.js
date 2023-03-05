import { View, Text, FlatList } from "react-native";
import React, { useCallback, useState } from "react";
import { PillContainer, RecentContainer } from "./Recent.styles";
import { helpers } from "../../../utils";
import { useFocusEffect } from "@react-navigation/native";
import Pill from "../../Pill";

const RecentSearches = () => {
  const [recentSearches, setRecentSearches] = useState([]);

  const getRecentSearches = async () => {
    const recentSearches = await helpers.getSetting("recentSearches");
    if (recentSearches) {
      setRecentSearches(recentSearches);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getRecentSearches();
    }, [])
  );

  console.log({ recentSearches });

  if (recentSearches?.length <= 0) return null;
  return (
    <RecentContainer>
      <PillContainer horizontal={true} showsHorizontalScrollIndicator={false}>
        <FlatList
          horizontal={true}
          data={recentSearches}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Pill text={item} onPress={() => console.log("pressed")} />
          )}
        />
      </PillContainer>
    </RecentContainer>
  );
};

export default RecentSearches;
