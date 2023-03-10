import React, { useEffect, useRef, useState } from "react";

import { useQuery } from "react-query";

import { api } from "../../utils";
import { FlatList, ScrollView } from "react-native";
import BannerItem from "./BannerItem";

const Banner = () => {
  const [stopScroll, setStopScroll] = useState(false);

  const listRef = useRef(null);
  const { data } = useQuery(["BannerData"], () => api.getTrending(1, 5));

  const renderItem = ({ item, index }) => {
    return <BannerItem key={`banner-${item.id}`} {...item} />;
  };

  return (
    <FlatList
      ref={listRef}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => `banner-${item.id}`}
      pagingEnabled={true}
    />
  );
};

export default Banner;
