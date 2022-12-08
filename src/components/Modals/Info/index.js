import { Modal } from "react-native";
import React, { useState } from "react";
import { Container, Title, Wrapper, WrapperInner } from "./Info.styles";
import Actions from "./Actions";
import RemoveFromList from "./RemoveFromList";
import WatchedEpisodes from "./WatchedEpisodes";
import { MediaListStatusWithLabel } from "../../../utils/constants";

const InfoModal = ({ visible, setShowModal, data, anilistData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const Media = anilistData?.Media || {};
  const mediaListEntry = Media?.mediaListEntry || {};

  const status = mediaListEntry?.status || undefined;
  const progress = mediaListEntry?.progress || 0;

  //  find status in MediaListStatusWithLabel
  const find = MediaListStatusWithLabel.find(
    (item) => item.value.toLowerCase() === status?.toLowerCase()
  );

  return (
    <Modal visible={visible} transparent={true}>
      <Container onPress={() => setShowModal(false)}>
        <Wrapper>
          <WrapperInner>
            <Title numberOfLines={2}>
              {data.title.english || data.title.romaji}
            </Title>
            <Actions
              data={data}
              found={find}
              setActiveIndex={setActiveIndex}
              activeIndex={activeIndex}
            />
            <WatchedEpisodes data={data} watchedAmount={progress} />
          </WrapperInner>
          <RemoveFromList data={data} setActiveIndex={setActiveIndex} />
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default InfoModal;
