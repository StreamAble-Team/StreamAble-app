import React from "react";
import Episode from "./Episode";
import { Container, Text, Wrapper } from "./Episodes.styles";

const Episodes = ({ episodes }) => {
  return (
    <Container>
      <Wrapper>
        {episodes.map((episode, i) => (
          <Episode key={`episode-${i}`} {...episode} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Episodes;
