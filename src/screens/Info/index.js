import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useQuery } from "react-query";
import { Info } from "../../containers";
import { api } from "../../utils";
import { InfoJSOn } from "../../utils/testData";

const InfoScreen = ({ route }) => {
  const [dub, setDub] = useState(false);
  const { id } = route.params;

  const { data } = useQuery(
    ["Info-Data", dub, id],
    () => api.getInfo(id, dub, true),
    {
      cacheTime: 0,
    }
  );

  if (!data) return null;
  return (
    <SafeAreaView>
      <Info {...data} dub={dub} setDub={setDub} />
    </SafeAreaView>
  );
};

export default InfoScreen;
