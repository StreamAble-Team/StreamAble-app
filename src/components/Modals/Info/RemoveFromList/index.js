import { View, Text } from "react-native";
import React from "react";
import { Container, RemoveIcon, RemoveText } from "./RemoveFromList.styles";
import {
  createCollectionTable,
  createInsertCollectionData,
  getDBConnection,
  selectCollection,
  updateCollection,
} from "../../../../database";

const RemoveFromList = ({ data, setActiveIndex }) => {
  const subOrDub = data.subOrDub;
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

  return (
    <Container onPress={removeFromCollection}>
      <RemoveIcon name="trash" />
      <RemoveText>Remove from list</RemoveText>
    </Container>
  );
};

export default RemoveFromList;
