import { rgba } from "polished";
import styled from "styled-components/native";

export const PillContainer = styled.TouchableOpacity`
  padding: 10px 20px;
  background: ${({ theme, active }) =>
    active === false ? "rgba(0, 0, 0, 0.5)" : rgba(theme.base.mainColor, 0.8)};
  border-radius: 20px;
  overflow: hidden;
  margin-left: ${({ index }) => (index === 0 ? 0 : "14px")};
`;

export const PillTitle = styled.Text`
  text-align: center;
  font-size: 10px;
  color: ${({ theme }) => theme.text.primary};
  font-family: ${({ theme }) => theme.text.font.secondary};
  text-transform: uppercase;
`;
