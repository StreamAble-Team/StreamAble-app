import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const NotLoggedIn = styled.Text`
  font-size: 23px;
  font-family: ${({ theme }) => theme.text.font.secondary};
  color: ${({ theme }) => theme.text.primary};
  text-transform: uppercase;
`;

export const ProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;
