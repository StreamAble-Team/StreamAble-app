import { FlatList, ScrollView } from "react-native";
import React from "react";
import { TestTrendingArray } from "../../utils/testData";
import { Card } from "../../components";
import { Container, Title } from "../Container.styles";
import { useQuery } from "react-query";
import { api } from "../../utils";

const Popular = () => {
  const { data } = useQuery("popularData", () => api.getPopular());

  if (!data) return null;

  const renderCard = (item, i) => {
    return <Card key={`popular-${item.id}`} {...item} index={i} />;
  };

  return (
    <Container>
      <Title>Popular right now</Title>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item, index }) => renderCard(item, index)}
        keyExtractor={(item) => `popular-${item.id}`}
      />
    </Container>
  );
};

export default Popular;
