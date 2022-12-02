import { Modal } from "react-native";
import React, { useState } from "react";
import { Container, Title, Wrapper, WrapperInner } from "./Info.styles";
import Actions from "./Actions";
import RemoveFromList from "./RemoveFromList";
import WatchedEpisodes from "./WatchedEpisodes";

const InfoModal = ({ visible, setShowModal, data }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <Modal visible={visible} transparent={true}>
      <Container onPress={() => setShowModal(false)}>
        <Wrapper>
          <WrapperInner>
            <Title numberOfLines={2}>{data.title.romaji}</Title>
            <Actions
              data={data}
              setActiveIndex={setActiveIndex}
              activeIndex={activeIndex}
            />
            <WatchedEpisodes data={data} />
          </WrapperInner>
          <RemoveFromList data={data} setActiveIndex={setActiveIndex} />
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default InfoModal;
