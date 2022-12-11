import { View, Text, Alert } from "react-native";
import React from "react";
import { Container, RemoveIcon, RemoveText } from "./RemoveFromList.styles";
import {
  createCollectionTable,
  createInsertCollectionData,
  getDBConnection,
  selectCollection,
  updateCollection,
} from "../../../../database";
import { useDebouncedMutation } from "../../../../hooks";
import {
  GetAnimeDocument,
  refetchGetAnimeQuery,
  RemoveFromListDocument,
  useGetAnimeQuery,
} from "../../../../utils/graphql/generated";

const RemoveFromList = ({ data, setActiveIndex }) => {
  const subOrDub = data.subOrDub;

  const {
    loading,
    data: anilistData,
    refetch,
    error,
  } = useGetAnimeQuery({
    variables: { id: data.id },
    notifyOnNetworkStatusChange: true,
  });

  const mediaListEntry = anilistData?.Media?.mediaListEntry || undefined;

  const removeFromCollection = async () => {
    const db = await getDBConnection();
    await createCollectionTable(db);
    const select = await selectCollection(
      db,
      subOrDub.toLowerCase() === "sub" ? data.id : `${data.id}-dub`
    );

    const dataForCol = createInsertCollectionData({
      ...data,
      id: subOrDub.toLowerCase() === "sub" ? data.id : `${data.id}-dub`,
    });

    if (select.length > 0) {
      // Update the collection
      await updateCollection(db, dataForCol);
      setActiveIndex(null);
    }
  };

  const removeFromAnilist = useDebouncedMutation({
    mutationDocument: RemoveFromListDocument,
    makeUpdateFunction: (_variables) => (proxy) => {
      const proxyData = proxy.readQuery({
        query: GetAnimeDocument,
        variables: { id: data.id },
      });

      if (proxyData?.Media?.mediaListEntry) {
        proxy.writeQuery({
          query: GetAnimeDocument,
          variables: { id: data.id },
          data: {
            ...proxyData,
            Media: {
              ...proxyData?.Media,
              id: proxyData?.Media?.id,
              mediaListEntry: mediaListEntry,
            },
          },
        });
      }
    },
    wait: 0,
    refetchQueries: [refetchGetAnimeQuery({ id: data.id })],
  });

  const removeFromList = async () => {
    await removeFromCollection();
    if (mediaListEntry)
      await removeFromAnilist({
        id: mediaListEntry?.id,
      });
  };

  const Alerted = async () => {
    Alert.alert(
      "Remove from list",
      "Are you sure you want to remove this anime from your list?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Remove",
          onPress: () => removeFromList(),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <Container onPress={Alerted}>
      <RemoveIcon name="trash" />
      <RemoveText>Remove from list</RemoveText>
    </Container>
  );
};

export default RemoveFromList;
