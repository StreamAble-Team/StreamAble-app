import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { rgba } from "polished";

export const Container = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 25px;
  margin-bottom: 113px;
  z-index: 10;
`;

export const Wrapper = styled.TouchableOpacity`
  padding: 8px 15px;
  background: ${({ theme }) => rgba(theme.base.mainColor, 0.7)};
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TextSkip = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 17px;
  font-family: ${({ theme }) => theme.text.font.secondary};
`;

export const SkipIcon = styled(Icon)`
  color: ${({ theme }) => theme.text.primary};
  font-size: 17px;
  margin-left: 10px;
`;
