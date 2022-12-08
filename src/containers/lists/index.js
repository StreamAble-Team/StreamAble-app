import React from "react";
import Completed from "../Completed";
import ContinueWatching from "../ContinueWatching";
import Dropped from "../Dropped";
import OnHold from "../OnHold";
import PlanToWatch from "../PlanToWatch";
import { Title, Container, Wrapper, ScrollView } from "./styles";

const ListsContainer = () => {
  return (
    <Container>
      <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
        <Wrapper>
          <Title>library</Title>
        </Wrapper>
        <ContinueWatching />
        <PlanToWatch />
        <OnHold />
        <Completed />
        <Dropped />
      </ScrollView>
    </Container>
  );
};

export default ListsContainer;
