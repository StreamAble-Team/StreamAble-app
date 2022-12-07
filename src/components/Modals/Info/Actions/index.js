import { View, Text, ScrollView } from "react-native";
import React, { useCallback, useState } from "react";
import { Action, ActionText, Container } from "./Actions.styles";
import {
  createCollectionTable,
  createInsertCollectionData,
  getDBConnection,
  insertCollection,
  selectCollection,
  updateCollection,
} from "../../../../database";
import { useFocusEffect } from "@react-navigation/native";
import { MediaListStatusWithLabel } from "../../../../utils/constants";
import {
  GetAnimeDocument,
  refetchGetAnimeQuery,
  UpdateStatusDocument,
} from "../../../../utils/graphql/generated";
import { useDebouncedMutation } from "../../../../hooks";

const Actions = ({ data, activeIndex, setActiveIndex, found }) => {
  const { id } = data;
  const subOrDub = data.subOrDub;
  const handlePress = (index, collection, addToCol) => {
    addToCollection(collection, addToCol);
    addToAnilist(index);
    setActiveIndex(index);
  };

  const updateStatus = useDebouncedMutation({
    mutationDocument: UpdateStatusDocument,
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
                status: variables?.status,
              },
            },
          },
        });
      }
    },
    wait: 0,
    refetchQueries: [refetchGetAnimeQuery({ id: id })],
  });

  const addToAnilist = async (index) => {
    const value = MediaListStatusWithLabel[index].value;
    const id = data.id;

    // await updateStatus
    try {
      await updateStatus({
        mediaId: id,
        status: value,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addToCollection = async (collection, addToCol) => {
    const db = await getDBConnection();
    await createCollectionTable(db);
    const select = await selectCollection(
      db,
      subOrDub.toLowerCase() === "sub" ? data.id : `${data.id}-dub`
    );

    const dataForCol = createInsertCollectionData({
      ...data,
      id: subOrDub.toLowerCase() === "sub" ? data.id : `${data.id}-dub`,
      [collection]: addToCol,
    });

    if (select.length < 1) {
      await insertCollection(db, dataForCol);
    }
    // Check if the anime is already in the collection
    if (select.length > 0) {
      // Create data
      const dataForCol = createInsertCollectionData({
        ...data,
        [collection]: addToCol,
      });

      // Update the collection
      await updateCollection(db, dataForCol, id);
    }
  };

  const updateActiveIndex = async () => {
    const db = await getDBConnection();
    await createCollectionTable(db);
    const select = await selectCollection(
      db,
      subOrDub.toLowerCase() === "sub" ? data.id : `${data.id}-dub`
    );

    if (found || select.length > 0) {
      const watching = found ? found?.label === "Watching" : select[0].watching;
      const completed = found
        ? found?.label === "Completed"
        : select[0].completed;
      const planToWatch = found
        ? found?.label === "Plan to Watch"
        : select[0].planToWatch;
      const onHold = found ? found?.label === "On Hold" : select[0].onHold;
      const dropped = found ? found?.label === "Dropped" : select[0].dropped;

      if (watching) setActiveIndex(0);
      else if (completed) setActiveIndex(4);
      else if (planToWatch) setActiveIndex(2);
      else if (onHold) setActiveIndex(1);
      else if (dropped) setActiveIndex(3);
    }
  };

  useFocusEffect(
    useCallback(() => {
      updateActiveIndex();
    }, [])
  );

  return (
    <Container>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToAlignment={"center"}
      >
        <Action
          active={activeIndex === 0}
          onPress={() => handlePress(0, "watching", true)}
        >
          <ActionText>Watching</ActionText>
        </Action>
        <Action
          active={activeIndex === 4}
          onPress={() => handlePress(4, "completed", true)}
        >
          <ActionText>Completed</ActionText>
        </Action>
        <Action
          active={activeIndex === 2}
          onPress={() => handlePress(2, "planToWatch", true)}
        >
          <ActionText>Plan to Watch</ActionText>
        </Action>
        <Action
          active={activeIndex === 1}
          onPress={() => handlePress(1, "onHold", true)}
        >
          <ActionText>On Hold</ActionText>
        </Action>
        <Action
          style={{ marginRight: 0 }}
          active={activeIndex === 3}
          onPress={() => handlePress(3, "dropped", true)}
        >
          <ActionText>Dropped</ActionText>
        </Action>
      </ScrollView>
    </Container>
  );
};

export default Actions;
