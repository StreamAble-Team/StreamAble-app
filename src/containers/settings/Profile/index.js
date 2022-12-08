import React from "react";
import { Container, NotLoggedIn, ProfileImage } from "./Profile.styles";
import { useNavigation } from "@react-navigation/native";
import { useGetViewerQuery } from "../../../utils/graphql/generated";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ANILIST_ACCESS_TOKEN_STORAGE } from "../../../utils/constants";

const Profile = ({ accessToken, setAccessToken }) => {
  console.log(accessToken);
  const {
    loading: loadingProfile,
    data: profileData,
    refetch,
  } = useGetViewerQuery();

  if (loadingProfile) return null;

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Auth");
  };

  if (!accessToken)
    return (
      <Container onPress={onPress}>
        <NotLoggedIn>Login</NotLoggedIn>
      </Container>
    );

  const Viewer = profileData?.Viewer || {};
  const avatar = Viewer.avatar || {};

  const Alerted = () => {
    Alert.alert("Logout", "Are you sure you wanna logout", [
      {
        text: "No",
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: async () => {
          await AsyncStorage.removeItem(ANILIST_ACCESS_TOKEN_STORAGE);
          await setAccessToken(undefined);
          navigation.navigate("Home");
        },
      },
    ]);
  };

  return (
    <Container onPress={Alerted}>
      <ProfileImage source={{ uri: avatar?.large }} />
    </Container>
  );
};

export default Profile;
