import React, { useCallback, useRef, useState } from "react";
import {
  GoBackContainer,
  GoBackIcon,
  InfoTopButtons,
  InfoTopContainer,
  InfoTopEpisode,
  InfoTopImage,
  InfoTopImageContainer,
  InfoTopImageWrapper,
  InfoTopPlayButton,
  InfoTopPlayButtonText,
  InfoTopPoster,
  InfoTopPosterContainer,
  InfoTopPosterImageWrapper,
  InfoTopTitle,
  InfoTopWrapper,
  MetaContainer,
  MetaItem,
} from "./InfoTop.styles";
import { api } from "../../../utils";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SubOrDub from "./SubOrDub";
import {
  createEpisodeTable,
  openEpisodeDatabase,
  selectEpisode,
} from "../../../database";

const InfoTop = (props) => {
  const {
    setDub,
    dub,
    id,
    totalEpisodes,
    setShowEpisodeModal,
    setQualities,
    setShowQualityModal,
    setDataToSend,
  } = props;
  const [nextEpisode, setNextEpisode] = useState(null);
  const navigation = useNavigation();

  const gotoPlayer = async () => {
    const whatEpisodeToGet = !nextEpisode ? props.episodes[0] : nextEpisode;
    const { headers, sources } = await api.getSource(whatEpisodeToGet.id);

    setQualities(sources);

    setDataToSend({
      ...whatEpisodeToGet,
      animeId: id,
      totalEpisodes: totalEpisodes,
      id: whatEpisodeToGet.id,
      title: whatEpisodeToGet.title,
      episode: whatEpisodeToGet.number,
      referer: headers.Referer,
      nextEpisodeId: `${whatEpisodeToGet.id
        .split("-")
        .splice(0, 3)
        .join("-")}-${whatEpisodeToGet.number + 1}`,
    });

    return setShowQualityModal(true);
  };

  const getHighestWatched = async () => {
    try {
      // get the highest watched episode
      const db = await openEpisodeDatabase();
      await createEpisodeTable(db, id);

      const select = await selectEpisode(db, id);

      const highestWatched = select
        .filter((item) => item.watched)
        .sort((a, b) => b.number - a.number)[0];

      // find the highest watched episode in props.episodes
      const find = props.episodes.find(
        (item) => item.id === highestWatched.nextEpisodeId
      );

      setNextEpisode(find);
    } catch (error) {
      setNextEpisode(null);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getHighestWatched();
    }, [props])
  );

  return (
    <InfoTopContainer>
      <InfoTopImageContainer>
        <InfoTopImage source={{ uri: props.cover }}>
          <GoBackContainer onPress={() => navigation.goBack()}>
            <GoBackIcon />
          </GoBackContainer>
          <InfoTopImageWrapper />
        </InfoTopImage>
      </InfoTopImageContainer>
      <InfoTopPosterContainer>
        <InfoTopPosterImageWrapper
          onLongPress={() => setShowEpisodeModal(true)}
        >
          {({ pressed }) => (
            <InfoTopPoster source={{ uri: props.image }} pressed={pressed} />
          )}
        </InfoTopPosterImageWrapper>
        <InfoTopWrapper>
          <InfoTopTitle numberOfLines={1}>{props.title.romaji}</InfoTopTitle>
          <InfoTopEpisode numberOfLines={1}>
            Episode {nextEpisode?.number || 1}
          </InfoTopEpisode>
          <InfoTopButtons>
            <InfoTopPlayButton onPress={gotoPlayer}>
              {/* <InfoTopPlayButtonText>
                {nextEpisode && nextEpisode.number > 1 ? `Continue` : `Play`}
              </InfoTopPlayButtonText> */}
              <InfoTopPlayButtonText>Play</InfoTopPlayButtonText>
            </InfoTopPlayButton>
            <SubOrDub subOrDub={props.subOrDub} setDub={setDub} dub={dub} />
          </InfoTopButtons>
        </InfoTopWrapper>
      </InfoTopPosterContainer>
    </InfoTopContainer>
  );
};

export default InfoTop;
