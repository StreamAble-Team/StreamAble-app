import styled from "styled-components/native";

export const Container = styled.View`
  padding: 5px 20px;
  margin-bottom: 15px;
`;

export const Top = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 25px;
  padding-bottom: 10px;
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => theme.text.primary};
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
  font-size: 23px;
  font-family: ${({ theme }) => theme.text.font.secondary};
  color: ${({ theme }) => theme.text.primary};
  text-transform: uppercase;
  flex: 1;
`;
