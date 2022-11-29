import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  WatchingBar,
  WatchingBarHolder,
  WatchingCardBackground,
  WatchingCardContainer,
  WatchingCardContent,
  WatchingCardEpisode,
  WatchingCardTitle,
} from "./WatchingCard.styles";

const WatchingCard = (props) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Info", {
      id: props.animeId,
    });
  };

  return (
    <WatchingCardContainer onPress={handlePress}>
      <WatchingCardBackground source={{ uri: props.image }}>
        <WatchingCardContent>
          <WatchingCardTitle numberOfLines={1}>{props.title}</WatchingCardTitle>
          <WatchingCardEpisode numberOfLines={1}>
            Episode {props.episode + 1}
          </WatchingCardEpisode>
        </WatchingCardContent>
      </WatchingCardBackground>
      <WatchingBarHolder>
        <WatchingBar />
      </WatchingBarHolder>
    </WatchingCardContainer>
  );
};

export default WatchingCard;
