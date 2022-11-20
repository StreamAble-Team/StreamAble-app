import { ScrollView } from "react-native";
import React from "react";
import { Title, Container } from "./Popular.styles";
import { TestTrendingArray } from "../../utils/testData";
import { Card } from "../../components";

const Popular = () => {
  return (
    <Container>
      <Title>Popular right now</Title>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {TestTrendingArray.results.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </ScrollView>
    </Container>
  );
};

export default Popular;
