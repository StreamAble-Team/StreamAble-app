import styled from "styled-components/native";
import { Video } from "expo-av";
import Icon from "react-native-vector-icons/FontAwesome5";

export const Container = styled.View`
  background-color: #000000;
`;

export const PressableIcon = styled.TouchableOpacity``;

export const VideoPlayer = styled(Video)`
  width: 100%;
  height: 100%;
`;

export const IconItem = styled(Icon)`
  font-size: 30px;
  color: ${({ theme }) => theme.text.primary};
`;
