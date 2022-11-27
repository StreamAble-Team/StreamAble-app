import { View, Text } from "react-native";
import React from "react";
import { Container, Wrapper } from "../../styles";
import CharacterCard from "./CharacterCard";

const Characters = (props) => {
  const { characters } = props;
  return (
    <Container>
      <Wrapper>
        {characters.map((character, index) => (
          <CharacterCard key={character.id} {...character} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Characters;
