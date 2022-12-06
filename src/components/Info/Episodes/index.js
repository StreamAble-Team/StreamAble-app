import React, { useEffect, useState } from "react";
import { useAccessToken } from "../../../contexts";
import { MediaListStatusWithLabel } from "../../../utils/constants";
import {
  useGetAnimeListQuery,
  useGetViewerQuery,
} from "../../../utils/graphql/generated";
import Paginate from "../../Paginate";
import { Container, Wrapper } from "../../styles";
import Episode from "./Episode";
import { Text } from "./Episodes.styles";

const Episodes = (props) => {
  const { accessToken, setAccessToken } = useAccessToken();
  const [status, setStatus] = useState(MediaListStatusWithLabel[0].value);

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

  const {
    episodes,
    totalEpisodes,
    setQualities,
    setShowQualityModal,
    setDataToSend,
  } = props;
  const [selectedPage, setSelectedPage] = useState(1);

  const pageSize = 50;

  if (loadingAnimeList) return null;

  const entries = animeListData?.MediaListCollection?.lists[0]?.entries;
  const findThisAnime = entries
    ? entries.find(
        (entry) => parseFloat(entry.media.id) === parseFloat(props.id)
      )
    : props;

  const progress = findThisAnime
    ? findThisAnime.media?.mediaListEntry?.progress
    : 0;

  return (
    <Container>
      <Paginate
        results={episodes}
        pageSize={pageSize}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Wrapper>
        {episodes
          .slice(
            selectedPage === 1 ? 0 : (selectedPage - 1) * pageSize,
            selectedPage === 1 ? pageSize : pageSize * selectedPage + 1
          )
          .map((episode, i) => (
            <Episode
              key={`episode-${i}`}
              {...episode}
              animeId={props.id}
              totalEpisodes={totalEpisodes}
              setQualities={setQualities}
              setShowQualityModal={setShowQualityModal}
              setDataToSend={setDataToSend}
              watchedAmount={
                progress && episode.number <= progress ? 100 : null
              }
            />
          ))}
      </Wrapper>
    </Container>
  );
};

export default Episodes;
