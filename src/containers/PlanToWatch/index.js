import { ScrollView } from "react-native";
import React, { useMemo, useState } from "react";
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

const PlanToWatch = () => {
  const [status, setStatus] = useState(MediaListStatusWithLabel[2].value);

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

  if (!list.length) return null;
  return (
    <Container>
      <Title>Watch List</Title>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {list.map((item, i) => (
          <Card key={`planToWatch-${item.id}`} {...item} index={i} />
        ))}
      </ScrollView>
    </Container>
  );
};

export default PlanToWatch;
