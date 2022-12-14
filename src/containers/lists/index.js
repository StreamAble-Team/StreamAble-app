import React, { useCallback, useState } from "react";
import { RefreshControl } from "react-native";
import { User } from "../../components";
import Completed from "../Completed";
import ContinueWatching from "../ContinueWatching";
import Dropped from "../Dropped";
import OnHold from "../OnHold";
import PlanToWatch from "../PlanToWatch";
import { Title, Container, Wrapper, ScrollView } from "./styles";

const ListsContainer = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
  };

  return (
    <Container>
      <ScrollView
        vertical={true}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["#7d5fff"]}
            progressBackgroundColor={"#212121"}
            size={"large"}
          />
        }
      >
        <Wrapper>
          <Title>library</Title>
        </Wrapper>
        <User />
        <ContinueWatching
          refreshing={refreshing}
          setRefreshing={setRefreshing}
        />
        <PlanToWatch refreshing={refreshing} setRefreshing={setRefreshing} />
        <OnHold refreshing={refreshing} setRefreshing={setRefreshing} />
        <Completed refreshing={refreshing} setRefreshing={setRefreshing} />
        <Dropped refreshing={refreshing} setRefreshing={setRefreshing} />
      </ScrollView>
    </Container>
  );
};

export default ListsContainer;
