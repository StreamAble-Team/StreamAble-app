import React from "react";

import { useQuery } from "react-query";

import { api } from "../../utils";
import { FlatList, ScrollView } from "react-native";
import BannerItem from "./BannerItem";

const Banner = () => {
  const { data } = useQuery(["BannerData"], () => api.getTopRated(5));

  const renderItem = ({ item, index }) => {
    return <BannerItem key={`banner-${item.id}`} {...item} />;
  };

  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={data?.results}
      renderItem={renderItem}
      keyExtractor={(item) => `banner-${item.id}`}
      pagingEnabled={true}
    />
  );
};

export default Banner;
