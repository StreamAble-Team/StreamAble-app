import { View, ScrollView } from "react-native";
import React, { useState } from "react";

import { Description } from "../../components/Info";
import {
  MangaPillMenu,
  MangaTop,
  MetaInformation,
  Switcher,
} from "../../components";

const MangaContainer = (props) => {
  const [current, setCurrent] = useState(1);
  return (
    <View>
      <ScrollView vertical={true}>
        <MangaTop {...props.data} />
        <MetaInformation {...props.data} />
        <Description desc={props?.data?.description} />
        <MangaPillMenu setCurrent={setCurrent} current={current} />
        <Switcher current={current} data={props.data} />
      </ScrollView>
    </View>
  );
};

export default MangaContainer;
