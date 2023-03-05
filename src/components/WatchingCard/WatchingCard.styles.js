import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome5";

export const WatchingCardContainer = styled.TouchableOpacity`
  position: relative;
  width: 235px;
  height: 100px;
  margin-right: 20px;
  border-radius: 8px;
  overflow: hidden;
`;

export const WatchingCardBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const WatchingCardContent = styled.View`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 5px;
  overflow: hidden;
`;

export const WatchingCardTitle = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 12px;
  font-family: ${({ theme }) => theme.text.font.secondary};
  text-transform: uppercase;
`;

export const WatchingCardEpisode = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 10px;
  font-family: ${({ theme }) => theme.text.font.primary};
  text-transform: uppercase;
  color: ${({ theme }) => theme.text.offWhite};
  margin-top: 2px;
`;

export const WatchingBarHolder = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const WatchingBar = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  width: ${({ watchedAmount }) => watchedAmount}%;
  height: 3px;
  background-color: ${({ theme }) => theme.base.mainColor};
`;

export const Delete = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  right: 0;
  width: 22px;
  height: 22px;
  margin: 3px 8px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

export const DeleteIcon = styled(Icon)`
  color: ${({ theme }) => theme.text.primary};
  font-size: 13px;
`;

export const FromAnilist = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 22px;
  height: 22px;
  margin: 3px 8px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  pointer-events: none;
`;

export const FromAnilistText = styled.Text`
  font-size: 13px;
  font-family: ${({ theme }) => theme.text.font.primary};
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ theme }) => theme.text.offWhite};
`;
