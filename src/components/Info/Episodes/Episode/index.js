import { View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import {
  CardContent,
  CardImage,
  Container,
  EpisodeNumber,
  IsFiller,
  IsFillerText,
  Text,
  Title,
  WatchedAmount,
  WatchedContainer,
} from "./Episode.styles";
import { api } from "../../../../utils";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import {
  createEpisodeTable,
  openEpisodeDatabase,
  selectAllEpisodes,
  selectAllWatchedEpisodes,
} from "../../../../database";

const Episode = (props) => {
  const { setQualities, setDataToSend, setShowQualityModal, isMobile } = props;
  const navigation = useNavigation();
  const [watched, setWatched] = useState(false);
  const [watchedAmount, setWatchedAmount] = useState(props?.watchedAmount || 0);

  const handlePress = async () => {
    const { headers, sources } = await api.getSource(props.id);

    setQualities(sources);

    setDataToSend({
      ...props,
      id: props.id,
      title: props.title,
      episode: props.number,
      referer: headers.Referer,
      nextEpisodeId:
        props.number !== props.totalEpisodes
          ? `${props.id.split("-").splice(0, 3).join("-")}-${props.number + 1}`
          : props.id,
    });

    return setShowQualityModal(true);
  };

  const checkIfWatched = async () => {
    if (props?.watchedAmount) return false;
    // Get data from sqlite and check if the episode is watched
    const db = await openEpisodeDatabase();
    await createEpisodeTable(db);

    const select = await selectAllEpisodes(db, props.animeId);
    const find = select.find((item) => item.id === props.id) || props;
    setWatched(find?.watched === 1 ? true : false);
    if (find?.watchedAmount) setWatchedAmount(find.watchedAmount);
    else if (find?.watched === 1) setWatchedAmount(100);
  };

  useFocusEffect(
    useCallback(() => {
      checkIfWatched();
    }, [props])
  );

  return (
    <Container onPress={handlePress} isMobile={isMobile}>
      <CardImage source={{ uri: props.image }}>
        <CardContent>
          {props.isFiller ? (
            <IsFiller>
              <IsFillerText>FILLER</IsFillerText>
            </IsFiller>
          ) : null}
          <Title numberOfLines={1}>{props.title}</Title>
          <EpisodeNumber numberOfLines={1}>
            Episode {props.number}
          </EpisodeNumber>
        </CardContent>
        <WatchedContainer>
          <WatchedAmount amount={watchedAmount} />
        </WatchedContainer>
      </CardImage>
    </Container>
  );
};

export default Episode;
