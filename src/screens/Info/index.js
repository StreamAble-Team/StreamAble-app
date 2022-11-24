import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useQuery } from "react-query";
import { Info } from "../../containers";
import { api } from "../../utils";
import { InfoJSOn } from "../../utils/testData";

const InfoScreen = ({ route }) => {
  const { id } = route.params;

  const { data } = useQuery(["InfoData", id], () => api.getInfo(id));

  if (!data) return null;
  return (
    <SafeAreaView>
      <Info {...data} />
    </SafeAreaView>
  );
};

export default InfoScreen;
