import React, { useEffect, useState } from "react";
import PlayPause from "./PlayPause";
import {
  Container,
  WrapperWithBg,
  GoBackWrapper,
  WrapperFlex,
  ClickToDismiss,
  GoBackWrapperPressable,
  EpisodeTitle,
  EpisodeNumber,
  FlexBox,
  WrapperWithBgTop,
} from "./Controls.styles";
import { IconItem, PressableIcon } from "../styles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Skip85 from "./Skip85";
import SeekBar from "./SeekBar";
import {
  alterEpisodeTable,
  createEpisodeTable,
  insertEpisode,
  openEpisodeDatabase,
  selectEpisode,
  updateEpisode,
} from "../../../database";
import { api } from "../../../utils";
import { useCallback } from "react";

const Controls = (props) => {
  const {
    status,
    videoRef,
    setPlaying,
    playing,
    title,
    episode,
    nextEpisodeId,
    animeId,
    id,
    data,
  } = props;

  const [opSkipTimes, setOpSkipTimes] = useState([]);
  const [edSkipTimes, setEdSkipTimes] = useState([]);

  const [hideControls, setHideControls] = useState(false);
  const navigation = useNavigation();

  const handleTimeSkip = (timeSkip) => {
    if (!status.isLoaded) return false;
    const currentTIme = status.positionMillis;
    videoRef.current.setPositionAsync(currentTIme + timeSkip * 1000);
  };

  const handleUpdateWatched = async () => {
    // Update watchedAmount in db
    const { positionMillis, durationMillis } = status;
    const watched = (positionMillis / durationMillis) * 100;
    const db = await openEpisodeDatabase();
    await createEpisodeTable(db, animeId);
    await alterEpisodeTable(db);

    const select = await selectEpisode(db, animeId);
    const find = (await select.find((item) => item.id === id)) || undefined;

    if (!find) {
      await insertEpisode(db, {
        id: data.id,
        title: data.title,
        animeId: data.animeId,
        image: data.image,
        episode: data.episode,
        nextEpisodeId,
        watchedAmount: watched > 85 ? true : watched,
        watched: watched > 85 ? 1 : 0,
      });
    } else {
      await updateEpisode(db, {
        id: data.id,
        title: data.title,
        animeId: data.animeId,
        image: data.image,
        episode: data.episode,
        nextEpisodeId,
        watchedAmount: watched > 85 ? true : watched,
        watched: watched > 85 ? 1 : 0,
      });
    }
  };

  const handleGoBack = async () => {
    await handleUpdateWatched();
    navigation.goBack();
  };

  let duration = 5000;
  let timeout;
  const handleInactive = () => {
    setHideControls((prev) => !prev);

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (!status.isPlaying) return;
      setHideControls(true);
    }, duration);
  };

  const handleDismissPress = () => {
    handleInactive();
  };

  const getSkipTimes = async () => {
    if (!status.isLoaded) return false;

    const { malId } = props?.data;
    if (!malId) return false;

    try {
      const skipTimes = await api.getSkipTimes(malId, episode);

      if (!skipTimes) return false;

      const findOp = skipTimes.find(
        (item) => item?.skipType.toLowerCase() === "op"
      );

      const findEd = skipTimes.find(
        (item) => item?.skipType.toLowerCase() === "ed"
      );

      if (findOp) setOpSkipTimes(findOp?.interval);
      if (findEd) setEdSkipTimes(findEd?.interval);
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getSkipTimes();
    }, [status.isLoaded])
  );

  return (
    <Container hideControls={hideControls}>
      <GoBackWrapper>
        <FlexBox>
          <GoBackWrapperPressable onPress={() => handleGoBack()}>
            <IconItem name="arrow-left" />
          </GoBackWrapperPressable>
          <EpisodeTitle>{title || `Episode ${episode}`}</EpisodeTitle>
        </FlexBox>
        <EpisodeNumber>Episode {episode || 1}</EpisodeNumber>
      </GoBackWrapper>
      <Skip85
        videoRef={videoRef}
        status={status}
        nextEpisodeId={nextEpisodeId}
        title={title}
        episode={episode}
        opSkipTimes={opSkipTimes}
        edSkipTimes={edSkipTimes}
      />
      <ClickToDismiss onPress={handleDismissPress} />
      <WrapperWithBg>
        <SeekBar videoRef={videoRef} status={status} />
        <WrapperFlex>
          <PressableIcon onPress={() => handleTimeSkip(-10)}>
            <IconItem name="step-backward" />
          </PressableIcon>
          <PlayPause
            status={status}
            videoRef={videoRef}
            handleInactive={handleDismissPress}
          />
          <PressableIcon onPress={() => handleTimeSkip(10)}>
            <IconItem name="step-forward" />
          </PressableIcon>
        </WrapperFlex>
      </WrapperWithBg>
    </Container>
  );
};

export default Controls;
