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
  selectAllWatchedEpisodes,
} from "../../../../database";

const Episode = (props) => {
  const navigation = useNavigation();
  const [watched, setWatched] = useState(false);

  const handlePress = async () => {
    const { headers, sources } = await api.getSource(props.id);
    const source = sources.find(
      (source) =>
        source.quality.includes("1080") ||
        source.quality.includes("720") ||
        source.quality.includes("default")
    );

    navigation.navigate("Player", {
      ...props,
      id: props.id,
      title: props.title,
      episode: props.number,
      source: source.url,
      referer: headers.Referer,
      nextEpisodeId:
        props.number !== props.totalEpisodes
          ? `${props.id.split("-").splice(0, 3).join("-")}-${props.number + 1}`
          : props.id,
    });
  };

  const checkIfWatched = async () => {
    // Get data from sqlite and check if the episode is watched
    const db = await openEpisodeDatabase();
    await createEpisodeTable(db);

    const select = await selectAllWatchedEpisodes(db, props.animeId);
    const find = select.find((item) => item.id === props.id) || props;
    setWatched(find?.watched);
  };

  useFocusEffect(
    useCallback(() => {
      checkIfWatched();
    }, [props])
  );

  const amount = Math.random() * 100;
  return (
    <Container onPress={handlePress}>
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
        {watched ? (
          <WatchedContainer>
            <WatchedAmount amount={100} />
          </WatchedContainer>
        ) : null}
      </CardImage>
    </Container>
  );
};

export default Episode;
