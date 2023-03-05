import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { RecentSearches, SearchBar } from "../../components";
import { TestTrendingArray } from "../../utils/testData";
import SearchCard from "../../components/SearchCard";
import { ScrollContainer } from "./search.styles";
import { api, helpers } from "../../utils";
import { useDebounce } from "../../hooks";

const SearchScreen = () => {
  const [data, setData] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState("");

  const debouncedSearchTerm = useDebounce(searchPhrase, 500);

  const search = async (searchPhrase) => {
    const response = await api.getSearch(searchPhrase);
    setData(response);
  };

  const handleSubmit = async () => {
    if (searchPhrase?.length <= 3) return setData("");
    search(searchPhrase);
  };

  useEffect(() => {
    if (debouncedSearchTerm?.length < 2) setData([]);
    if (!debouncedSearchTerm || debouncedSearchTerm?.length <= 2) return;

    search(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

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
