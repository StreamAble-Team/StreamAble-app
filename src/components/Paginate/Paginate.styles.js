import { rgba } from "polished";
import styled from "styled-components/native";

export const PaginateContainer = styled.View`
  margin-bottom: 20px;
`;

export const PaginatePill = styled.TouchableOpacity`
  border-radius: 20px;
  padding: 10px 25px;
  background: ${({ theme }) => rgba(theme.text.offWhite, 0.09)};
  margin-left: ${({ index }) => (index === 0 ? 0 : "15px")};
  background: ${({ active, theme }) =>
    active ? rgba(theme.base.mainColor, 0.2) : rgba(theme.text.offWhite, 0.09)};
`;

export const PaginatePillText = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-family: ${({ theme }) => theme.text.font.secondary};
  text-transform: uppercase;
  font-size: 15px;
`;
