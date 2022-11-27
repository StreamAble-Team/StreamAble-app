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
import AsyncStorage from "@react-native-async-storage/async-storage";

// TODO: STORE EACH EPISODE IN ITS ANIME'S ID
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
      id: props.id,
      title: props.title,
      episode: props.number,
      source: source.url,
      referer: headers.Referer,
      nextEpisodeId: `${props.id.split("-").splice(0, 3).join("-")}-${
        props.number + 1
      }`,
    });
  };

  const checkIfWatched = async () => {
    const getStorage = await AsyncStorage.getItem(props.id);
    const JSONStorage = await JSON.parse(getStorage);
    setWatched(JSONStorage?.watched === true ? true : false);
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
