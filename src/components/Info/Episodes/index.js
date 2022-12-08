import React, { useEffect, useState } from "react";
import { useAccessToken } from "../../../contexts";
import { useBreakpoints } from "../../../hooks";
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
  const { isMobile } = useBreakpoints();

  const { loading: loadingViewer, data: viewerData } = useGetViewerQuery({
    skip: !accessToken,
  });

  const {
    episodes,
    totalEpisodes,
    setQualities,
    setShowQualityModal,
    setDataToSend,
    anilistData,
  } = props;
  const [selectedPage, setSelectedPage] = useState(1);

  const pageSize = 50;

  const progress = anilistData.Media?.mediaListEntry?.progress || 0;

  return (
    <Container>
      <Paginate
        results={episodes}
        pageSize={pageSize}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Wrapper isMobile={isMobile}>
        {episodes
          .slice(
            selectedPage === 1 ? 0 : (selectedPage - 1) * pageSize,
            selectedPage === 1 ? pageSize : pageSize * selectedPage + 1
          )
          .map((episode, i) => (
            <Episode
              isMobile={isMobile}
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
