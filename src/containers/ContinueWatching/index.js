import { ScrollView } from "react-native";
import React from "react";
import { TestTrendingArray } from "../../utils/testData";
import { Container, Title } from "../Container.styles";
import WatchingCard from "../../components/WatchingCard";

const ContinueWatching = () => {
  return (
    <Container>
      <Title>Continue Watching</Title>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {TestTrendingArray.results.map((item, i) => (
          <WatchingCard key={item.id} {...item} index={i} />
        ))}
      </ScrollView>
    </Container>
  );
};

export default ContinueWatching;
