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
  WatchedAmount,
  WatchedContainer,
} from "./InfoTop.styles";
import { api, textSanitizer } from "../../../utils";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const InfoTop = (props) => {
  const { setEpisodes, setDub } = props;
  const [nextEpisode, setNextEpisode] = useState(null);
  const navigation = useNavigation();
  const description = textSanitizer(props.description);

  // TODO: STORE EACH EPISODE IN ITS ANIME'S ID
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
      const keys = await AsyncStorage.getAllKeys();
      const results = await AsyncStorage.multiGet(keys);

      const maxNumber = await Math.max(
        ...results.map((o) => {
          const json = JSON.parse(o[1]);
          return json.episode;
        })
      );

      const max = await results.find((result) => {
        const json = JSON.parse(result[1]);
        return json.episode === maxNumber;
      });

      const json = JSON.parse(max[1]);
      console.log(json);

      const find = await props.episodes.find(
        (ep) => ep.id === json.nextEpisodeId
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
        {/* <WatchedContainer>
          <WatchedAmount />
        </WatchedContainer> */}
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
