import styled from "styled-components/native";

export const NotLoggedIn = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  padding: 0 25px;
`;

export const NotLoggedInText = styled.Text`
  font-size: 23px;
  color: ${({ theme }) => theme.text.primary};
  font-family: ${({ theme }) => theme.text.font.primary};
  text-align: center;
`;

export const LoginButton = styled.TouchableOpacity`
  background: ${({ theme }) => theme.base.mainColor};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
`;

export const LoginButtonText = styled.Text`
  font-size: 25px;
  padding: 8px 20px;
  color: ${({ theme }) => theme.text.primary};
  font-family: ${({ theme }) => theme.text.font.secondary};
  text-transform: uppercase;
`;
