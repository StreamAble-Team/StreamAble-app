import styled from "styled-components/native";

export const PillContainer = styled.TouchableOpacity`
  padding: 10px 20px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  overflow: hidden;
  margin-right: 14px;
`;

export const PillTitle = styled.Text`
  text-align: center;
  font-size: 10px;
  color: ${({ theme }) => theme.text.primary};
  font-family: ${({ theme }) => theme.text.font.secondary};
  text-transform: uppercase;
`;
