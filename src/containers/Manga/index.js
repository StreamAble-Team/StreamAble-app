import { View, ScrollView } from "react-native";
import React, { useState } from "react";
import { MangaTop, MetaInformation, PillMenu } from "../../components/Manga";
import { Description } from "../../components/Info";
import Switcher from "../../components/Manga/Switcher";

const MangaContainer = (props) => {
  const [current, setCurrent] = useState(1);
  return (
    <View>
      <ScrollView vertical={true}>
        <MangaTop {...props.data} />
        <MetaInformation {...props.data} />
        <Description desc={props?.data?.description} />
        <PillMenu setCurrent={setCurrent} current={current} />
        <Switcher current={current} data={props.data} />
      </ScrollView>
    </View>
  );
};

export default MangaContainer;
