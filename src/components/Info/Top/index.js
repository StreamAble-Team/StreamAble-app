import React, { useCallback, useState } from "react";
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

const InfoTop = (props) => {
  const { setDub, id, totalEpisodes } = props;
  const [nextEpisode, setNextEpisode] = useState(null);
  const navigation = useNavigation();

  const gotoPlayer = async () => {
    const whatEpisodeToGet = !nextEpisode ? props.episodes[0] : nextEpisode;
    const { headers, sources } = await api.getSource(whatEpisodeToGet.id);
    const source = sources.find(
      (source) =>
        source.quality.includes("1080") ||
        source.quality.includes("720") ||
        source.quality.includes("default")
    );
    navigation.navigate("Player", {
      animeId: id,
      totalEpisodes: totalEpisodes,
      id: whatEpisodeToGet.id,
      title: whatEpisodeToGet.title,
      episode: whatEpisodeToGet.number,
      source: source.url,
      referer: headers.Referer,
      nextEpisodeId: `${whatEpisodeToGet.id
        .split("-")
        .splice(0, 3)
        .join("-")}-${whatEpisodeToGet.number + 1}`,
    });
  };

  const getHighestWatched = async () => {
    try {
      const getStorage = await AsyncStorage.getItem(props.id);
      const getStorageJSON = JSON.parse(getStorage);

      const maxNumber = await Math.max(
        Math.max(
          [getStorageJSON].map((item) => {
            return item?.episode || 1;
          })
        )
      );

      const max = await [getStorageJSON].find((result) => {
        return result?.episode === maxNumber;
      });

      const find = await props.episodes.find((ep) =>
        max ? ep?.id === max?.nextEpisodeId : ep.number === 1
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
        <InfoTopPosterImageWrapper>
          <InfoTopPoster source={{ uri: props.image }} />
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
            <InfoTopPlayButton
              onPress={() => setDub((prev) => !prev)}
              style={{ marginLeft: 10 }}
            >
              <InfoTopPlayButtonText>{props.subOrDub}</InfoTopPlayButtonText>
            </InfoTopPlayButton>
          </InfoTopButtons>
        </InfoTopWrapper>
      </InfoTopPosterContainer>
    </InfoTopContainer>
  );
};

export default InfoTop;
