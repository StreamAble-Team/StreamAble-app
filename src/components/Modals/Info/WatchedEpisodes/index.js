import { View, Text } from "react-native";
import React, { useCallback, useState } from "react";
import {
  createEpisodeTable,
  getDBConnection,
  selectAllWatchedEpisodes,
} from "../../../../database";
import { useFocusEffect } from "@react-navigation/native";
import {
  Description,
  InfoContainer,
  InfoItem,
  NextEpisodeTitle,
  NextEpisodeTitleContainer,
  Title,
  WatchedAmount,
  WatchedContainer,
  WatchedInfoContainer,
  WatchedInfoItem,
  Wrapper,
} from "./styles";
import { addZero } from "../../../../utils/utils";
import NextEpisodeInfo from "../NextEpisodeInfo";

const WatchedEpisodes = ({ data, watchedAmount }) => {
  const [watchedEpisodes, setWatchedEpisodes] = useState(null);
  const [currentEpisode, setCurrentEpisode] = useState(null);
  const { id } = data;

  const getWatchedEpisodes = async () => {
    const db = await getDBConnection();
    await createEpisodeTable(db);
    const select = await selectAllWatchedEpisodes(db, id);

    const highest =
      select.length < 1
        ? null
        : select?.reduce((prev, current) =>
            prev.episode > current.episode ? prev : current
          );

    if (watchedAmount) setWatchedEpisodes(watchedAmount);
    else {
      setWatchedEpisodes(highest ? highest.episode : 0);
    }

    const currentEpisode = data.episodes[highest?.episode || 0];
    setCurrentEpisode(currentEpisode);
  };

  useFocusEffect(
    useCallback(() => {
      getWatchedEpisodes();
    }, [])
  );

  return (
    <Wrapper>
      <WatchedInfoContainer>
        <WatchedInfoItem>Watched</WatchedInfoItem>
        <WatchedInfoItem>Total</WatchedInfoItem>
      </WatchedInfoContainer>
      <WatchedContainer>
        <WatchedAmount>
          {watchedEpisodes <= 0 ? "??" : addZero(watchedEpisodes)}
        </WatchedAmount>
        <WatchedAmount>{addZero(data?.totalEpisodes) || "??"}</WatchedAmount>
      </WatchedContainer>
      <NextEpisodeInfo currentEpisode={currentEpisode} />
    </Wrapper>
  );
};

export default WatchedEpisodes;
