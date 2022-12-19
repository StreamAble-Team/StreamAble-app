import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React, { useState } from "react";
import { Container } from "../Container.styles";
import ReaderPages from "../../components/Reader/pages";
import { ReaderNavBar } from "../../components";

const ReaderContainer = ({ pages, mangaTitle, chapter }) => {
  const [toggleNavBar, setToggleNavBar] = useState(true);

  return (
    <Pressable onPress={() => setToggleNavBar(!toggleNavBar)}>
      <ReaderNavBar
        mangaTitle={mangaTitle}
        chapter={chapter}
        toggleNavBar={toggleNavBar}
      />
      <Container>
        <ReaderPages
          pages={pages}
          mangaTitle={mangaTitle}
          toggleNavBar={toggleNavBar}
        />
      </Container>
    </Pressable>
  );
};

export default ReaderContainer;
