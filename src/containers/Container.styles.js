import styled from "styled-components/native";

export const Container = styled.View`
  padding: 5px 20px;
  margin-bottom: 15px;
`;

export const Wrapper = styled.View`
  padding: 15px 25px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.text.font.primary};
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: 15px;
`;

export const Heading = styled.Text`
  width: 100%;
  padding-bottom: 20px;
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => theme.text.primary};
  font-size: 23px;
  font-family: ${({ theme }) => theme.text.font.secondary};
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: 20px;
  text-transform: uppercase;
`;
