import { ScrollView } from "react-native";
import React, { useCallback, useState } from "react";

import { Container, Title } from "../Container.styles";
import WatchingCard from "../../components/WatchingCard";
import {
  createEpisodeTable,
  openEpisodeDatabase,
  selectAllEpisodes,
} from "../../database";
import { groupBy } from "../../utils/utils";
import { useFocusEffect } from "@react-navigation/native";

const ContinueWatching = () => {
  const [data, setData] = useState(null);

  const getContinueWatching = async () => {
    const db = await openEpisodeDatabase();
    await createEpisodeTable(db);
    const select = await selectAllEpisodes(db);
    const grouped = groupBy(select, "animeId");

    // find highest episode in each group
    const highest = Object.keys(grouped).map((key) => {
      return grouped[key].reduce((prev, current) =>
        prev.number > current.number ? prev : current
      );
    });

    setData(highest);
  };

  useFocusEffect(
    useCallback(() => {
      getContinueWatching();
    }, [data])
  );

  if (!data || data.length === 0) return null;
  return (
    <Container>
      <Title>Continue Watching</Title>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {data?.map((item, i) => {
          return <WatchingCard key={i} {...item} />;
        })}
      </ScrollView>
    </Container>
  );
};

export default ContinueWatching;
