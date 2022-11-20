import styled from "styled-components/native";

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
  width: 15%;
  height: 3px;
  background-color: ${({ theme }) => theme.base.mainColor};
`;
