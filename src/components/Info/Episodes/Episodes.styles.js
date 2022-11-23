import styled from "styled-components/native";

export const Container = styled.View`
  padding: 25px;
  padding-bottom: 40px;
`;

export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 10px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.text.primary};
`;
