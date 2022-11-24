import styled from "styled-components/native";
import Slider from "@react-native-community/slider";

export const SeekBarContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const SeekBarComponent = styled(Slider).attrs(({ theme }) => ({
  minimumTrackTintColor: theme.base.mainColor,
  maximumTrackTintColor: theme.text.offWhite,
  thumbTintColor: theme.base.mainColor,
}))`
  flex: 1;
`;

export const TimeStampsContainer = styled.Pressable``;

export const TimeStamps = styled.Text`
  color: ${({ theme }) => theme.text.offWhite};
  font-size: 14px;
  font-family: ${({ theme }) => theme.text.font.primary};
`;
