import { ScrollView } from "react-native";
import React from "react";
import { TestTrendingArray } from "../../utils/testData";
import { Card } from "../../components";
import { Container, Title } from "../Container.styles";
import { useQuery } from "react-query";
import { api } from "../../utils";

const Trending = () => {
  const { data } = useQuery("trendingData", () => api.getTrending());

  if (!data) return null;
  return (
    <Container>
      <Title>Trending right now</Title>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {data.map((item, i) => (
          <Card key={`trending-${item.id}`} {...item} index={i} />
        ))}
      </ScrollView>
    </Container>
  );
};

export default Trending;
