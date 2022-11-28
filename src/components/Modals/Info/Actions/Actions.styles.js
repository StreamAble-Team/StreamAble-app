import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 15px;
`;

export const Action = styled.View`
  padding: 10px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.text.secondary};
  margin-right: 15px;
  margin-bottom: 15px;
  background: rgba(255, 255, 255, 0.08);
`;

export const ActionText = styled.Text`
  font-size: 10px;
  color: ${({ theme }) => theme.text.primary};
  font-family: ${({ theme }) => theme.text.font.secondary};
  text-transform: uppercase;
`;
