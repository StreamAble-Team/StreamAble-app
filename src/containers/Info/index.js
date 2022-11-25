import { View } from "react-native";
import React, { useState } from "react";
import { InfoTop, PillMenu } from "../../components";
import Episodes from "../../components/Info/Episodes";
import Description from "../../components/Info/Desc";
import { Container } from "./Info.styles";

const Info = (props) => {
  const [episodes, setEpisodes] = useState(props.episodes);
  return (
    <View>
      <Container vertical={true}>
        <InfoTop {...props} setEpisodes={setEpisodes} />
        <Description desc={props.description} />
        {/* <PillMenu /> */}
        <Episodes episodes={episodes} />
      </Container>
    </View>
  );
};

export default Info;
