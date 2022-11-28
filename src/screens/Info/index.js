import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useQuery } from "react-query";
import { InfoModal } from "../../components";
import InfoSkeleton from "../../components/Skeletons/Info/InfoSkeleton";
import { Info } from "../../containers";
import { api } from "../../utils";

const InfoScreen = ({ route }) => {
  const [showModal, setShowModal] = useState(false);
  const [dub, setDub] = useState(null);
  const { id } = route.params;

  const getDub = async () => {
    try {
      const getStorage = await AsyncStorage.getItem("dub");
      const getStorageJSON = JSON.parse(getStorage);
      setDub(getStorageJSON);
    } catch (error) {
      setDub(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getDub();
    }, [dub])
  );

  const { data } = useQuery(
    ["Info-Data", dub, id],
    () => api.getInfo(id, dub),
    {
      cacheTime: 0,
    }
  );

  if (!data) return <InfoSkeleton />;
  return (
    <SafeAreaView>
      <Info {...data} dub={dub} setDub={setDub} setShowModal={setShowModal} />
      <InfoModal visible={showModal} data={data} setShowModal={setShowModal} />
    </SafeAreaView>
  );
};

export default InfoScreen;
