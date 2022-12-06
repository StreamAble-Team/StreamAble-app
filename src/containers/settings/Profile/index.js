import React from "react";
import { Container, NotLoggedIn, ProfileImage } from "./Profile.styles";
import { useNavigation } from "@react-navigation/native";
import { useGetViewerQuery } from "../../../utils/graphql/generated";

const Profile = ({ accessToken }) => {
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

  if (!profileData)
    return (
      <Container onPress={onPress}>
        <NotLoggedIn>Login</NotLoggedIn>
      </Container>
    );

  const { Viewer } = profileData;
  const { avatar } = Viewer;

  return (
    <Container>
      <ProfileImage source={{ uri: avatar?.large }} />
    </Container>
  );
};

export default Profile;
