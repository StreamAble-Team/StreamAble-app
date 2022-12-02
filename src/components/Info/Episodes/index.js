import React, { useEffect, useState } from "react";
import Paginate from "../../Paginate";
import { Container, Wrapper } from "../../styles";
import Episode from "./Episode";
import { Text } from "./Episodes.styles";

const Episodes = (props) => {
  const {
    episodes,
    totalEpisodes,
    setQualities,
    setShowQualityModal,
    setDataToSend,
  } = props;
  const [selectedPage, setSelectedPage] = useState(1);

  const pageSize = 50;

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
            />
          ))}
      </Wrapper>
    </Container>
  );
};

export default Episodes;
