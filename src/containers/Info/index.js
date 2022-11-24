import { View } from "react-native";
import React from "react";
import { InfoTop, PillMenu } from "../../components";
import Episodes from "../../components/Info/Episodes";
import Description from "../../components/Info/Desc";
import { Container } from "./Info.styles";

const Info = (props) => {
  return (
    <View>
      <Container vertical={true}>
        <InfoTop {...props} />
        <Description desc={props.description} />
        {/* <PillMenu /> */}
        <Episodes episodes={props.episodes} />
      </Container>
    </View>
  );
};

export default Info;
