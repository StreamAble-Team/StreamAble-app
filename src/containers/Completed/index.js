import { FlatList, ScrollView } from "react-native";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Card } from "../../components";
import { Container, Title } from "../Container.styles";
import { useAccessToken } from "../../contexts";
import {
  useGetAnimeListQuery,
  useGetViewerQuery,
} from "../../utils/graphql/generated";
import { MediaListStatusWithLabel } from "../../utils/constants";
import { sortBy } from "lodash";
import { utils } from "../../utils";
import { useFocusEffect } from "@react-navigation/native";

const Completed = ({ refreshing, setRefreshing }) => {
  const [status, setStatus] = useState(MediaListStatusWithLabel[4].value);

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

  //combine all animeListData?.MediaListCollection?.lists entires into one array
  const allAnimeList = animeListData?.MediaListCollection?.lists?.reduce(
    (acc, list) => {
      return acc.concat(list.entries);
    },
    []
  );

  const list = useMemo(
    () =>
      sortBy(
        (
          (animeListData?.MediaListCollection?.lists && allAnimeList) ??
          []
        ).filter(utils.notEmpty),
        (m) => m.media?.title?.english
      ),
    [animeListData]
  );

  useEffect(() => {
    if (refreshing) {
      refetch();
      setRefreshing(loadingAnimeList);
    }
  }, [refreshing]);

  if (!list?.length) return null;

  // console.log("list sorted Completed: ", list.length);

  const renderItem = ({ item, index }) => (
    <Card key={`completed-${item?.id}`} {...item} index={index} />
  );

  return (
    <Container>
      <Title>Completed</Title>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={list}
        keyExtractor={(item) => `completed-${item?.id}`}
        renderItem={renderItem}
      />
    </Container>
  );
};

export default Completed;
