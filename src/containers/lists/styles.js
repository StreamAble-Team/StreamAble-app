import styled from "styled-components/native";

export const ScrollView = styled.ScrollView`
  margin-bottom: 60px;
`;

export const Container = styled.View``;

export const Wrapper = styled.View`
  padding: 10px 25px;
`;

export const Wrap = styled.TouchableOpacity``;

export const Title = styled.Text`
  font-size: 25px;
  font-family: ${({ theme }) => theme.text.font.secondary};
  color: ${({ theme }) => theme.text.primary};
  padding: 15px 0;
  margin: 15px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.text.primary};
  text-transform: uppercase;
`;
