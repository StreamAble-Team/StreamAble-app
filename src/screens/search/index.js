import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "../../components";
import { TestTrendingArray } from "../../utils/testData";
import SearchCard from "../../components/SearchCard";
import { ScrollContainer } from "./search.styles";
import { api } from "../../utils";

const SearchScreen = () => {
  const [data, setData] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState("");

  const handleSubmit = async () => {
    if (searchPhrase?.length <= 3) return setData("");
    const response = await api.getSearch(searchPhrase);
    setData(response);
  };

  return (
    <SafeAreaView>
      <SearchBar
        setData={setData}
        handleSubmit={handleSubmit}
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
      />
      <ScrollContainer vertical={true} showsVerticalScrollIndicator={false}>
        {data.length > 0
          ? data.map((item, index) => (
              <SearchCard key={`search-${item.id}`} {...item} index={index} />
            ))
          : ""}
      </ScrollContainer>
    </SafeAreaView>
  );
};

export default SearchScreen;
