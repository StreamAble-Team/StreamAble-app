import styled from "styled-components/native";

export const ScrollView = styled.ScrollView`
  margin-bottom: 60px;
`;

export const Wrap = styled.TouchableOpacity``;

export const White = styled.Text`
  font-family: ${({ theme }) => theme.text.font.secondary};
  color: ${({ theme }) => theme.text.primary};

  font-size: 16px;
  padding: 10px;
  margin: 10px;
`;
