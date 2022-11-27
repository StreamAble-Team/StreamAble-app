import React, { useState } from "react";
import {
  DescriptionModel,
  DescriptionText,
  DescriptionView,
} from "./Description.styles";
import { textSanitizer } from "../../../utils";
import { View } from "react-native";

const Description = ({ desc }) => {
  const [expand, setExpand] = useState(false);
  const description = textSanitizer(desc);
  return (
    <View>
      <DescriptionView
        onPress={() => setExpand((prev) => !prev)}
        expand={expand}
      >
        <DescriptionText numberOfLines={expand === false ? 5 : 0}>
          {description}
        </DescriptionText>
      </DescriptionView>
    </View>
  );
};

export default Description;
