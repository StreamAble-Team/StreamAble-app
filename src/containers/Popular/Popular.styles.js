import styled from "styled-components/native";
export const Container = styled.View`
  padding: 5px 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.text.font.primary};
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: 15px;
`;
