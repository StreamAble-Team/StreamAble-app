import { rgba } from "polished";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 110px;
  margin-bottom: 30px;
  border-radius: 8px;
  overflow: hidden;
`;

export const Text = styled.Text`
  color: #fff;
`;

export const CardImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  resize-mode: cover;
`;

export const CardContent = styled.View`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 5px;
  overflow: hidden;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 18px;
  font-family: ${({ theme }) => theme.text.font.secondary};
  text-transform: uppercase;
`;

export const EpisodeNumber = styled.Text`
  text-transform: uppercase;
  color: ${({ theme }) => theme.text.offWhite};
  font-size: 14px;
  font-family: ${({ theme }) => theme.text.font.primary};
`;

export const WatchedContainer = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 3px;
  background: rgba(0, 0, 0, 0.7);
`;

export const WatchedAmount = styled.View`
  width: ${({ amount }) => amount}%;
  height: 100%;
  background: ${({ theme }) => theme.base.mainColor};
`;

export const IsFiller = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 10px;
  // margin: 5px;
  background: ${({ theme }) => rgba(theme.text.warning, 0.3)};
  border-bottom-right-radius: 8px;
`;

export const IsFillerText = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 12px;
  font-family: ${({ theme }) => theme.text.font.secondary};
  text-transform: uppercase;
`;
