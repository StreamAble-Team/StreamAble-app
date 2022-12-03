import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  deleteAllEpisodesFromSameAnime,
  openEpisodeDatabase,
} from "../../database";
import {
  Delete,
  DeleteIcon,
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

  const handleDelete = async () => {
    try {
      const db = await openEpisodeDatabase();
      await deleteAllEpisodesFromSameAnime(db, props.animeId);
      alert("Removed from continue watching");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <WatchingCardContainer onPress={handlePress}>
      <WatchingCardBackground source={{ uri: props.image }}>
        <Delete onPress={handleDelete}>
          <DeleteIcon name={"times"} />
        </Delete>
        <WatchingCardContent>
          {/* <WatchingCardTitle numberOfLines={1}>{props.title}</WatchingCardTitle> */}
          <WatchingCardEpisode numberOfLines={1}>
            Episode{" "}
            {props.watched
              ? props.nextEpisodeId.split("-").pop()
              : props.episode}
          </WatchingCardEpisode>
        </WatchingCardContent>
      </WatchingCardBackground>
      {props?.watched ? null : (
        <WatchingBarHolder>
          <WatchingBar
            watchedAmount={
              !props?.watched ? props?.watchedAmount.toFixed(2) : 0
            }
          />
        </WatchingBarHolder>
      )}
    </WatchingCardContainer>
  );
};

export default WatchingCard;
