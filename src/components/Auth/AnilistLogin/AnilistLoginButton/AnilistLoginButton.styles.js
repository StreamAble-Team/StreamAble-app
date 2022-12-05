import styled from "styled-components/native";

export const Container = styled.View``;

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.base.mainColor};
  padding: 10px 25px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 16px;
  font-family: ${({ theme }) => theme.text.font.secondary};
  text-transform: uppercase;
`;
