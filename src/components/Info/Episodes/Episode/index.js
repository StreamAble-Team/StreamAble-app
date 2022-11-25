import { View } from "react-native";
import React from "react";
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
import { useQuery } from "react-query";
import { api } from "../../../../utils";
import { useNavigation } from "@react-navigation/native";

const Episode = (props) => {
  const navigation = useNavigation();

  const handlePress = async () => {
    const { headers, sources } = await api.getSource(props.id);
    const source = sources.find(
      (source) =>
        source.quality.includes("1080") ||
        source.quality.includes("720") ||
        source.quality.includes("default")
    );
    navigation.navigate("Player", {
      title: props.title,
      episode: props.number,
      source: source.url,
      referer: headers.Referer,
      nextEpisodeId: `${props.id.split("-").splice(0, 3).join("-")}-${
        props.number + 1
      }`,
    });
  };

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
        {/* <WatchedContainer> */}
        {/* <WatchedAmount amount={amount} /> */}
        {/* </WatchedContainer> */}
      </CardImage>
    </Container>
  );
};

export default Episode;
