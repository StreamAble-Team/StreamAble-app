import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "../../components";
import { TestTrendingArray } from "../../utils/testData";
import SearchCard from "../../components/SearchCard";
import { ScrollContainer } from "./search.styles";

const SearchScreen = () => {
  return (
    <SafeAreaView>
      <SearchBar />
      <ScrollContainer vertical={true} showsVerticalScrollIndicator={false}>
        {TestTrendingArray.results.map((trending, index) => (
          <SearchCard
            key={trending.title + index}
            {...trending}
            index={index}
          />
        ))}
      </ScrollContainer>
    </SafeAreaView>
  );
};

export default SearchScreen;
