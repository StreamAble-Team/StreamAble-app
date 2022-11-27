import { View } from "react-native";
import React, { useState } from "react";
import {
  Characters,
  Description,
  Episodes,
  InfoTop,
  PillMenu,
  Relations,
} from "../../components";
import { Container } from "./Info.styles";
import Switcher from "../../components/Info/Switcher";

const Info = (props) => {
  const [current, setCurrent] = useState(1);
  const [episodes, setEpisodes] = useState(props.episodes);
  return (
    <View>
      <Container vertical={true}>
        <InfoTop {...props} setEpisodes={setEpisodes} />
        <Description desc={props.description} />
        <PillMenu setCurrent={setCurrent} current={current} />
        <Switcher data={props} current={current} />
      </Container>
    </View>
  );
};

export default Info;
