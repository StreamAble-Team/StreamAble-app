import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome5";

export const InfoTopContainer = styled.View`
  // margin-bottom: 10px;
`;

export const GoBackContainer = styled.Pressable`
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  z-index: 2;
`;

export const GoBackIcon = styled(Icon).attrs(() => ({
  name: "arrow-left",
}))`
  color: ${({ theme }) => theme.text.primary};
  font-size: 20px;
`;

export const InfoTopImageContainer = styled.View`
  width: 100%;
  height: 215px;
`;

export const InfoTopImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const InfoTopImageWrapper = styled.View`
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
`;

export const WatchedContainer = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 3px;
  background: rgba(0, 0, 0, 0.7);
`;

export const WatchedAmount = styled.View`
  width: 40%;
  height: 100%;
  background: ${({ theme }) => theme.base.mainColor};
`;

export const InfoTopPosterContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: -80px;
  width: 100%;
  height: 184px;
  padding: 0 25px;
`;

export const InfoTopPosterImageWrapper = styled.Pressable`
  width: 122px;
  height: 100%;
  // border-radius: 8px;
  // overflow: hidden;
  // border: 8px solid ${({ theme }) => theme.base.darkBg};
`;

export const InfoTopPoster = styled.Image`
  width: 100%;
  height: 100%;
  // border-top-left-radius: 8px;
  // border-top-right-radius: 8px;
  border-radius: 8px;
  overflow: hidden;
`;

export const InfoTopWrapper = styled.View`
  margin-top: 100px;
  padding: 0 15px;
  width: 70%;
`;

export const InfoTopTitle = styled.Text`
  font-family: ${({ theme }) => theme.text.font.secondary};
  color: ${({ theme }) => theme.text.primary};
  text-transform: uppercase;
  font-size: 20px;
`;

export const InfoTopEpisode = styled.Text`
  font-family: ${({ theme }) => theme.text.font.primary};
  color: ${({ theme }) => theme.text.offWhite};
  text-transform: uppercase;
  font-size: 13px;
  margin-bottom: 5px;
`;

export const InfoTopButtons = styled.View`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const InfoTopPlayButton = styled.TouchableOpacity`
  padding: 5px 15px;
  background: ${({ theme }) => theme.base.mainColor};
  border-radius: 10px;
  width: 70px;
  // width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const InfoTopPlayButtonText = styled.Text`
  font-family: ${({ theme }) => theme.text.font.secondary};
  color: ${({ theme }) => theme.text.primary};
  text-transform: uppercase;
  font-size: 13px;
`;
