import { View, Text, Modal } from "react-native";
import React from "react";
import {
  Container,
  Item,
  ItemText,
  Title,
  TItle,
  Wrapper,
  WrapperFlex,
} from "./SelectQualities.styles";
import { useNavigation } from "@react-navigation/native";

const SelectQualitiesModal = ({
  visible = true,
  qualities,
  setShowModal,
  dataToSend,
}) => {
  const navigation = useNavigation();

  const handlePress = async (source) => {
    setShowModal(false);
    navigation.navigate("Player", { ...dataToSend, source });
  };

  return (
    <Modal visible={visible} transparent={true}>
      <Container onPress={() => setShowModal(false)}>
        <Wrapper>
          <Title>Please select your desired quality</Title>
          <WrapperFlex>
            {qualities.map(({ quality, url }) => {
              if (isNaN(quality?.replace("p", ""))) return false;
              return (
                <Item key={quality} onPress={() => handlePress(url)}>
                  <ItemText>{quality}</ItemText>
                </Item>
              );
            })}
          </WrapperFlex>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default SelectQualitiesModal;
