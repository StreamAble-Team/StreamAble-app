import { Modal } from "react-native";
import React from "react";
import { Container, Title, Wrapper } from "./Info.styles";
import Actions from "./Actions";

const InfoModal = ({ visible, setShowModal, data }) => {
  return (
    <Modal visible={visible} transparent={true}>
      <Container onPress={() => setShowModal(false)}>
        <Wrapper>
          <Title numberOfLines={1}>{data.title.romaji}</Title>
          <Actions data={data} />
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default InfoModal;
