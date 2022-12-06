import { ScrollView } from "react-native";
import React, { useCallback, useMemo, useState } from "react";

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

const ContinueWatching = () => {
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
    skip: !viewerData?.Viewer?.id || !accessToken,
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
  const newList = list.concat(data);
  const uniqueList = Array.from(
    new Set(newList.map((a) => a?.animeId || a?.media?.id))
  ).map((id) => {
    return newList.find((a) => a?.animeId || a?.media?.id === id);
  });

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

  if (!uniqueList || uniqueList.length === 0) return null;
  return (
    <Container>
      <Title>Continue Watching</Title>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {uniqueList?.map((item, i) => {
          return (
            <WatchingCard
              key={i}
              {...item}
              watchedAmount={item?.watchedAmount ? item.watchedAmount : 0}
            />
          );
        })}
      </ScrollView>
    </Container>
  );
};

export default ContinueWatching;
