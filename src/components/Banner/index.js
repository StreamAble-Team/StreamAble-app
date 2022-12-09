import React from "react";

import { useQuery } from "react-query";

import { api } from "../../utils";
import { ScrollView } from "react-native";
import BannerItem from "./BannerItem";

const Banner = () => {
  const { data } = useQuery(["BannerData"], () => api.getTopRated(5));

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}
      snapToAlignment={"center"}
    >
      {data?.results.map((item) => {
        return <BannerItem key={`banner-${item.id}`} {...item} />;
      })}
    </ScrollView>
  );
};

export default Banner;
