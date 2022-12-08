import React from "react";
import { InfoTopPlayButtonText } from "../InfoTop.styles";
import { Container } from "./SubOrDub.styles";
import { helpers } from "../../../../utils";

const SubOrDub = ({ subOrDub, setDub, dub }) => {
  const handleDub = async () => {
    try {
      await helpers.setSetting("dub", JSON.stringify(!dub));
      setDub((prev) => !prev);
    } catch (error) {
      console.log({
        error,
        message: "Error setting dub in async storage",
      });
    }
  };

  return (
    <Container onPress={handleDub}>
      <InfoTopPlayButtonText>{subOrDub}</InfoTopPlayButtonText>
    </Container>
  );
};

export default SubOrDub;
