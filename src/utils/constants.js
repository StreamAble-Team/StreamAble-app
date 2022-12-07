import Constants from "expo-constants";
import {
  MediaListSort,
  MediaListStatus,
  MediaStatus,
} from "./graphql/generated";

const AniListClientID = {
  DEV: 10273, // exp://localhost:19000/--/*
  EXPO_GO: 10274, // exp://exp.host/@tdanks2000/streamable
  PROD: 10189, // streamable://redirect
};

export const CLIENT_ID = (() => {
  // https://docs.expo.dev/build-reference/migrating/#constantsappownership--will-be--null-
  if (Constants.appOwnership !== "expo") {
    return AniListClientID.PROD;
  }

  if (__DEV__) {
    return AniListClientID.DEV;
  }

  return AniListClientID.EXPO_GO;
})();

export const ANILIST_ACCESS_TOKEN_STORAGE = `@anilist:access_token`;

export const MediaListStatusWithLabel = [
  { label: "Watching", value: MediaListStatus.Current },
  { label: "On Hold", value: MediaListStatus.Paused },
  { label: "Plan to Watch", value: MediaListStatus.Planning },
  { label: "Dropped", value: MediaListStatus.Dropped },
  { label: "Completed", value: MediaListStatus.Completed },
];

export const MediaStatusWithLabel = [
  { label: "Finished", value: MediaStatus.Finished },
  { label: "Currently releasing", value: MediaStatus.Releasing },
  { label: "Not yet released", value: MediaStatus.NotYetReleased },
  { label: "Cancelled", value: MediaStatus.Cancelled },
];

export const Sorts = [
  // { label: "Title", value: MediaListSort.MediaTitleEnglish }, // Currently Bugged https://github.com/AniList/ApiV2-GraphQL-Docs/issues/94
  { label: "Last Updated", value: MediaListSort.UpdatedTimeDesc },
  { label: "Highest Rated", value: MediaListSort.ScoreDesc },
  { label: "Lowest Rated", value: MediaListSort.Score },
];
