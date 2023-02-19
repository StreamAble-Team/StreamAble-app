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
} from "./InfoTop.styles";
import { api, helpers } from "../../../utils";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import SubOrDub from "./SubOrDub";
import {
  createEpisodeTable,
  openEpisodeDatabase,
  selectAllWatchedEpisodes,
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
    anilistData,
    malId,
  } = props;
  const [settingTitle, setSettingTitle] = useState("EN");
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
      malId: malId,
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

      const select = await selectAllWatchedEpisodes(db, id);

      const highestWatched = select
        .filter((item) => item.watched)
        .sort((a, b) => b.number < a.number)[0];

      // find the highest watched episode in props.episodes
      const find = props.episodes.find(
        (item) =>
          item.id ===
          `${highestWatched?.id?.split("-")?.splice(0, 4)?.join("-")}-${
            highestWatched?.episode + 1
          }`
      );

      const progress =
        anilistData?.Media?.mediaListEntry?.progress <= totalEpisodes
          ? anilistData?.Media?.mediaListEntry?.progress
          : totalEpisodes;

      if (progress < totalEpisodes)
        setNextEpisode(
          props.episodes[anilistData?.Media?.mediaListEntry?.progress]
        );
      else setNextEpisode(find);
    } catch (error) {
      console.log(error);
      setNextEpisode(null);
    }
  };

  const getTitle = async () => {
    const preferredTitle = await helpers.getSetting("preferredLanguage");
    setSettingTitle(helpers.removeNonAlphaNumeric(preferredTitle));
  };

  useFocusEffect(
    useCallback(() => {
      getHighestWatched();
      getTitle();
    }, [])
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
          <InfoTopTitle numberOfLines={1}>
            {settingTitle === "EN"
              ? props?.title?.english ||
                props?.title?.romaji ||
                props?.title?.native
              : props?.title?.romaji || props?.title?.english}
          </InfoTopTitle>
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
