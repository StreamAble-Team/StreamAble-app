import { View, Text } from "react-native";
import React from "react";
import { Container } from "../../styles";
import {
  MetaContainer,
  MetaItem,
  MetaItemContainer,
  MetaItemIcon,
} from "../../Info/MetaInformation/MetaInformation.styles";

const MetaInformation = (props) => {
  return (
    <Container>
      <MetaContainer>
        <MetaItemContainer>
          <MetaItemIcon name={"star"} />
          <MetaItem>{props.rating / 10}</MetaItem>
        </MetaItemContainer>
        <MetaItemContainer>
          <MetaItem>{props.releaseDate}</MetaItem>
        </MetaItemContainer>
        <MetaItemContainer>
          <MetaItem>{props.status}</MetaItem>
        </MetaItemContainer>
        <MetaItemContainer>
          <MetaItem>{props.type}</MetaItem>
        </MetaItemContainer>
      </MetaContainer>
    </Container>
  );
};

export default MetaInformation;
