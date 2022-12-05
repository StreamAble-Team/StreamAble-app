import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.text.font.primary};
  color: ${({ theme }) => theme.text.primary};
  text-align: center;
  margin-bottom: 25px;
`;
