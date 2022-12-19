import { Dimensions } from "react-native";
import React, { useState } from "react";
import Page from "./Page";
import { FLatList, PagesContainer } from "./pages.styles";

const ReaderPages = (props) => {
  const { pages, mangaTitle, toggleNavBar } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [isHorizontal, setIsHorizontal] = useState(false);
  const [inverted, setInverted] = useState(false);
  const [scrollEnabled, setScrollEnabled] = useState(true);

  const renderPage = (page) => {
    return (
      <Page key={page?.item.img} page={page?.item} onZoom={setScrollEnabled} />
    );
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
    <PagesContainer toggleNavBar={toggleNavBar}>
      <FLatList
        data={pages}
        renderItem={renderPage}
        keyExtractor={(item) => item.img}
        horizontal={isHorizontal}
        inverted={inverted}
        directionalLockEnabled
        contentOffset={getContentOffset()}
        scrollEnabled={scrollEnabled}
      />
    </PagesContainer>
  );
};

export default ReaderPages;
