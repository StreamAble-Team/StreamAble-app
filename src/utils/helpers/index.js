import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDebouncedMutation } from "../../hooks";
import {
  GetAnimeDocument,
  refetchGetAnimeQuery,
  RemoveFromListDocument,
  UpdateProgressDocument,
  UpdateScoreDocument,
  UpdateStatusDocument,
} from "../graphql/generated";

export const removeFromList = (id) =>
  useDebouncedMutation({
    mutationDocument: RemoveFromListDocument,
    makeUpdateFunction: (_variables) => (proxy) => {
      const proxyData = proxy.readQuery({
        query: GetAnimeDocument,
        variables: { id: id },
      });

      if (proxyData?.Media?.mediaListEntry) {
        proxy.writeQuery({
          query: GetAnimeDocument,
          variables: { id: id },
          data: {
            ...proxyData,
            Media: {
              ...proxyData?.Media,
              id: proxyData?.Media?.id,
              mediaListEntry: undefined,
            },
          },
        });
      }
    },
    wait: 0,
    refetchQueries: [refetchGetAnimeQuery({ id: id })],
  });

export const updateScore = (id) =>
  useDebouncedMutation({
    mutationDocument: UpdateScoreDocument,
    makeUpdateFunction: (variables) => (proxy) => {
      const proxyData = proxy.readQuery({
        query: GetAnimeDocument,
        variables: { id: id },
      });

      if (proxyData?.Media?.mediaListEntry) {
        proxy.writeQuery({
          query: GetAnimeDocument,
          variables: { id: id },
          data: {
            ...proxyData,
            Media: {
              ...proxyData?.Media,
              id: proxyData?.Media?.id,
              mediaListEntry: {
                ...proxyData?.Media?.mediaListEntry,
                score: (variables?.scoreRaw ?? 0) / 10,
              },
            },
          },
        });
      }
    },
    refetchQueries: [refetchGetAnimeQuery({ id: id })],
  });

export const updateProgress = (id) =>
  useDebouncedMutation({
    mutationDocument: UpdateProgressDocument,
    makeUpdateFunction: (variables) => (proxy) => {
      const proxyData = proxy.readQuery({
        query: GetAnimeDocument,
        variables: { id: id },
      });

      if (proxyData?.Media?.mediaListEntry) {
        proxy.writeQuery({
          query: GetAnimeDocument,
          variables: { id: id },
          data: {
            ...proxyData,
            Media: {
              ...proxyData?.Media,
              id: proxyData?.Media?.id,
              mediaListEntry: {
                ...proxyData?.Media?.mediaListEntry,
                progress: variables?.progress,
              },
            },
          },
        });
      }

      if (variables?.progress === proxyData?.Media?.episodes) {
        // TODO: show dropdown alert to notify that this anime was moved to "completed" list
      }
    },
    refetchQueries: [refetchGetAnimeQuery({ id: id })],
  });

export const getSetting = async (setting) => {
  return await new Promise((resolve, reject) => {
    AsyncStorage.getItem(`@setting:${setting}`)
      .then((value) => {
        resolve(value);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const setSetting = async (setting, value) => {
  return await new Promise((resolve, reject) => {
    AsyncStorage.setItem(`@setting:${setting}`, JSON.stringify(value))
      .then(() => {
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const removeNonAlphaNumeric = (str) => {
  return str.replace(/[\W_]/g, "");
};
