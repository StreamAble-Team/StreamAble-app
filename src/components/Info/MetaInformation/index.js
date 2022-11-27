import React from "react";
import {
  MetaContainer,
  MetaItem,
  MetaItemContainer,
  MetaItemIcon,
} from "./MetaInformation.styles";
import { Container } from "../../styles";

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
