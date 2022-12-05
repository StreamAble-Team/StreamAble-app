import Constants from "expo-constants";

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
