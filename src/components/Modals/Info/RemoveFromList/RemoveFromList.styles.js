import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { rgba } from "polished";

export const Container = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px 25px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  background: ${({ theme }) => rgba(theme.base.offDarkBg, 0.4)};
  border-top-width: 2px;
  border-color: ${({ theme }) => rgba(theme.base.offDarkBg, 0.2)};
`;

export const RemoveIcon = styled(Icon)`
  font-size: 18px;
  color: ${({ theme }) => theme.text.danger};
  margin-right: 20px;
`;

export const RemoveText = styled.Text`
  font-size: 15px;
  font-family: ${({ theme }) => theme.text.font.primary};
  color: ${({ theme }) => theme.text.primary};
  text-transform: uppercase;
`;
