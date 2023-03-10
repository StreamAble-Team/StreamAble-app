import { FlatList, ScrollView } from "react-native";
import React from "react";
import { TestTrendingArray } from "../../utils/testData";
import { Card } from "../../components";
import { Container, Title } from "../Container.styles";
import { useQuery } from "react-query";
import { api } from "../../utils";

const TopRated = () => {
  const { data } = useQuery("topRatedData", () => api.getTopRated());

  if (!data) return null;

  const renderCard = (item, i) => {
    return <Card key={`top-rated-${item.id}`} {...item} index={i} />;
  };

  return (
    <Container>
      <Title>Top rated</Title>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={data?.results}
        renderItem={({ item, index }) => renderCard(item, index)}
        keyExtractor={(item) => `top-rated-${item.id}`}
      />
    </Container>
  );
};

export default TopRated;
