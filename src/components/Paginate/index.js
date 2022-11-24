import { View, Text, ScrollView } from "react-native";
import React from "react";
import {
  PaginateContainer,
  PaginatePill,
  PaginatePillText,
} from "./Paginate.styles";

const Paginate = ({
  results,
  pageSize = 25,
  setSelectedPage,
  selectedPage,
}) => {
  const totalPageCount = Math.ceil(results.length / pageSize);
  const pages = new Array(totalPageCount).fill(0);

  if (totalPageCount === 1) return null;
  return (
    <PaginateContainer>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {pages.map((_, i) => (
          <PaginatePill
            key={`page-${i}`}
            index={i}
            onPress={() => setSelectedPage(i + 1)}
            active={i + 1 === selectedPage}
          >
            <PaginatePillText>
              {i + 1 === 1 ? 0 : i * pageSize + 1} -{" "}
              {i + 1 === 1 ? pageSize : pageSize * (i + 1) + 1}
            </PaginatePillText>
          </PaginatePill>
        ))}
      </ScrollView>
    </PaginateContainer>
  );
};

export default Paginate;
