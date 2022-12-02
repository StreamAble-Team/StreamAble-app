import { View } from "react-native";
import React, { useRef, useState } from "react";
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
import { MetaInformation } from "../../components/Info";

const Info = (props) => {
  const [current, setCurrent] = useState(1);
  const [episodes, setEpisodes] = useState(props.episodes);

  return (
    <View>
      <Container vertical={true}>
        <InfoTop {...props} setEpisodes={setEpisodes} />
        <MetaInformation {...props} />
        <Description desc={props.description} />
        <PillMenu setCurrent={setCurrent} current={current} />
        <Switcher {...props} data={props} current={current} />
      </Container>
    </View>
  );
};

export default Info;
