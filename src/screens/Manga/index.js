import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useQuery } from "react-query";
import MangaContainer from "../../containers/Manga";
import { api } from "../../utils";
import InfoSkeleton from "../../components/Skeletons/Info/InfoSkeleton";

const MangaScreen = ({ navigation, route }) => {
  const { id } = route.params;

  const { data } = useQuery(["Manga-info-Data", id], () =>
    api.getMangaInfo(id)
  );

  if (!data) return <InfoSkeleton />;
  return (
    <SafeAreaView>
      <MangaContainer navigation={navigation} data={data} />
    </SafeAreaView>
  );
};

export default MangaScreen;
