import { View, Text } from "react-native";
import React from "react";
import { Container, Wrapper } from "../../styles";
import RelationCard from "../StandardCard";
import StandardCard from "../StandardCard";

const Relations = (props) => {
  const { relations } = props;

  const filterOutNoneAnime = relations.filter((relation) => {
    return (
      relation.type.toLowerCase() === "tv" ||
      relation.type.toLowerCase() === "manga"
    );
  });

  filterOutNoneAnime.sort((a, b) => {
    return b.type > a.type;
  });

  return (
    <Container>
      <Wrapper>
        {filterOutNoneAnime.map((relation) => (
          <StandardCard key={relation.id} {...relation} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Relations;
