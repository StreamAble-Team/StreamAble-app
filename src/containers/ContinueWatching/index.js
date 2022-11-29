import { ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { TestTrendingArray } from "../../utils/testData";
import { Container, Title } from "../Container.styles";
import WatchingCard from "../../components/WatchingCard";
import {
  openEpisodeDatabase,
  selectAllEpisodes,
  selectAllWatchedEpisodes,
  selectEpisode,
} from "../../database";
import { groupBy } from "../../utils/utils";

const ContinueWatching = () => {
  const [data, setData] = useState([]);

  const getContinueWatching = async () => {
    const db = await openEpisodeDatabase();
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

  useEffect(() => {
    getContinueWatching();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

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
