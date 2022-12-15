import styled from "styled-components/native";
import { IconItem } from "../../styles";

export const CanPressIcon = styled.TouchableOpacity``;

export const PlayIcon = styled(IconItem).attrs({
  name: "play",
})`
  margin: 0 75px;
`;

export const PauseIcon = styled(IconItem).attrs({
  name: "pause",
})`
  margin: 0 75px;
`;
