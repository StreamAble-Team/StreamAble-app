import { FlatList, ScrollView } from "react-native";
import React, { useCallback, useEffect, useMemo, useState } from "react";

import { Container, Title } from "../Container.styles";
import WatchingCard from "../../components/WatchingCard";
import {
  createEpisodeTable,
  openEpisodeDatabase,
  selectAllEpisodes,
} from "../../database";
import { sortBy } from "lodash";
import { groupBy } from "../../utils/utils";
import { useFocusEffect } from "@react-navigation/native";
import {
  useGetAnimeListQuery,
  useGetViewerQuery,
} from "../../utils/graphql/generated";
import { useAccessToken } from "../../contexts";
import { MediaListStatusWithLabel } from "../../utils/constants";
import { utils } from "../../utils";

const ContinueWatching = ({ refreshing, setRefreshing }) => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(MediaListStatusWithLabel[0].value);

  const { accessToken, setAccessToken } = useAccessToken();

  const { loading: loadingViewer, data: viewerData } = useGetViewerQuery({
    skip: !accessToken,
  });

  const {
    loading: loadingAnimeList,
    data: animeListData,
    refetch,
  } = useGetAnimeListQuery({
    skip: !accessToken || !viewerData?.Viewer?.id,
    variables: {
      userId: viewerData?.Viewer?.id,
      status,
    },
    // TODO: figure out how to maintain the list position while also updating the cache
    fetchPolicy: "no-cache",
    notifyOnNetworkStatusChange: false,
  });

  const list = useMemo(
    () =>
      sortBy(
        (
          (animeListData?.MediaListCollection?.lists &&
            animeListData?.MediaListCollection?.lists[0]?.entries) ??
          []
        ).filter(utils.notEmpty),
        (m) => m.media?.title?.english
      ),
    [animeListData]
  );

  // get Watching data
  const newList = !list.length ? data : list.concat(data);
  const uniqueList = !list.length
    ? newList
    : Array.from(new Set(newList.map((a) => a?.animeId || a?.media?.id))).map(
        (id) => {
          return newList.find((a) => a?.animeId || a?.media?.id === id);
        }
      );

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
    }, [])
  );

  useEffect(() => {
    if (refreshing) {
      getContinueWatching();
      refetch();
      setRefreshing(loadingAnimeList);
    }
  }, [refreshing]);

  if (
    !uniqueList ||
    uniqueList.length === 0 ||
    (uniqueList.length === 1 && uniqueList.includes(null))
  )
    return null;

  const renderItem = ({ item, index }) => (
    <WatchingCard
      key={`continue-watching-${item?.id}`}
      {...item}
      index={index}
      watchedAmount={item?.watchedAmount ? item.watchedAmount : 0}
    />
  );

  return (
    <Container>
      <Title>Continue Watching</Title>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={uniqueList}
        renderItem={renderItem}
        keyExtractor={(item) => `continue-watching-${item?.id}`}
      />
    </Container>
  );
};

export default ContinueWatching;
