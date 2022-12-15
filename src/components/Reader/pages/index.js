import { Dimensions } from "react-native";
import React, { useState } from "react";
import Page from "./Page";
import { FLatList, PagesContainer } from "./pages.styles";

const ReaderPages = ({ pages }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isHorizontal, setIsHorizontal] = useState(true);

  const renderPage = (page) => {
    return <Page key={page?.item.img} page={page?.item} />;
  };

  const getContentOffset = () => {
    const pageNum = 0;
    const { width, height } = Dimensions.get("window");

    const x = width * (pageNum - 1);
    const y = height * (pageNum - 1);
    const initOffset = { x: 0, y: 0 };
    return {
      ...initOffset,
      ...(isHorizontal ? { x } : { y }),
    };
  };

  return (
    <PagesContainer>
      <FLatList
        data={pages}
        renderItem={renderPage}
        keyExtractor={(item) => item.img}
        refreshing={pages.length === 0}
        onRefresh={() => null}
        horizontal={isHorizontal}
        inverted={!isHorizontal}
        directionalLockEnabled
        contentOffset={getContentOffset()}
      />
    </PagesContainer>
  );
};

export default ReaderPages;
