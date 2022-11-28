import { Modal } from "react-native";
import React from "react";
import { Container, Title, Wrapper, WrapperInner } from "./Info.styles";
import Actions from "./Actions";
import RemoveFromList from "./RemoveFromList";

const InfoModal = ({ visible, setShowModal, data }) => {
  return (
    <Modal visible={visible} transparent={true}>
      <Container onPress={() => setShowModal(false)}>
        <Wrapper>
          <WrapperInner>
            <Title numberOfLines={2}>{data.title.romaji}</Title>
            <Actions data={data} />
          </WrapperInner>
          <RemoveFromList />
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default InfoModal;
