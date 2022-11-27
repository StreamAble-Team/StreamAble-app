import React, { useEffect, useState } from "react";
import Paginate from "../../Paginate";
import Episode from "./Episode";
import { Container, Text, Wrapper } from "./Episodes.styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Episodes = (props) => {
  const { episodes } = props;
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
            <Episode key={`episode-${i}`} {...episode} animeId={props.id} />
          ))}
      </Wrapper>
    </Container>
  );
};

export default Episodes;
