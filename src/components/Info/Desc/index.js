import React from "react";
import { DescriptionText, DescriptionView } from "./Description.styles";
import { textSanitizer } from "../../../utils";

const Description = ({ desc }) => {
  const description = textSanitizer(desc);

  return (
    <DescriptionView>
      <DescriptionText numberOfLines={4}>{description}</DescriptionText>
    </DescriptionView>
  );
};

export default Description;
