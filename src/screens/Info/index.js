import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useQuery } from "react-query";
import { InfoModal, SelectQualitiesModal } from "../../components";
import InfoSkeleton from "../../components/Skeletons/Info/InfoSkeleton";
import { Info } from "../../containers";
import { api, helpers } from "../../utils";
import { useGetAnimeQuery } from "../../utils/graphql/generated";

const InfoScreen = ({ route }) => {
  const [showEpisodeModal, setShowEpisodeModal] = useState(false);

  const [showQualityModal, setShowQualityModal] = useState(false);
  const [qualities, setQualities] = useState([]);
  const [dataToSend, setDataToSend] = useState([]);

  const [dub, setDub] = useState(null);
  const { id } = route.params;

  const {
    loading,
    data: animeData,
    refetch,
    error,
  } = useGetAnimeQuery({
    variables: { id: id },
    notifyOnNetworkStatusChange: true,
  });

  useFocusEffect(
    useCallback(() => {
      if (!error || !loading) refetch();
    }, [id])
  );

  const getDub = async () => {
    try {
      const getStorage = await helpers.getSetting("dub");
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
    () => api.getInfo(id, Boolean(dub)),
    {
      cacheTime: 0,
    }
  );

  if (!data) return <InfoSkeleton />;
  return (
    <SafeAreaView>
      <Info
        {...data}
        anilistData={animeData}
        dub={dub}
        setDub={setDub}
        setShowEpisodeModal={setShowEpisodeModal}
        setShowQualityModal={setShowQualityModal}
        setQualities={setQualities}
        setDataToSend={setDataToSend}
      />
      <InfoModal
        visible={showEpisodeModal}
        data={data}
        setShowModal={setShowEpisodeModal}
        anilistData={animeData}
      />
      <SelectQualitiesModal
        visible={showQualityModal}
        qualities={qualities}
        data={data}
        setShowModal={setShowQualityModal}
        dataToSend={dataToSend}
      />
    </SafeAreaView>
  );
};

export default InfoScreen;
