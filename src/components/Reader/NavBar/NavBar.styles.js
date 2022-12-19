import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome5";

const borderRadius = 8;

export const Container = styled.View`
  position: absolute;
  left: 0;
  width: 100%;
  padding: 10px 25px;
  z-index: 10;
`;

export const FlexBox = styled(LinearGradient).attrs(() => ({
  colors: ["rgba(0, 0, 0, 0.1)", "rgba(0, 0, 0, 0.45)"],
  start: { x: 0, y: 1 },
  end: { x: 0, y: 0 },
}))`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

export const GoBackWrapperPressable = styled.Pressable``;

export const IconItem = styled(Icon)`
  font-size: 30px;
  color: ${({ theme }) => theme.text.primary};
`;

export const TitleWrapper = styled.View`
  width: 100%;
  flex: 1;
  margin-left: 15px;
`;

export const MangaTitle = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  color: ${({ theme }) => theme.text.primary};
  font-size: 11px;
  font-family: ${({ theme }) => theme.text.font.secondary};
`;

export const MangaSubTitle = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  color: ${({ theme }) => theme.text.offWhite};
  font-size: 13px;
  font-family: ${({ theme }) => theme.text.font.primary};
`;
