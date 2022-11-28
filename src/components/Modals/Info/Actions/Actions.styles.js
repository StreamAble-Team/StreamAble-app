import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  margin-top: 20px;
`;

export const Action = styled.TouchableOpacity`
  padding: 8px 15px
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  // border: 1px solid ${({ theme }) => theme.text.secondary};
  margin-right: 15px;
  margin-bottom: 15px;
  background: rgba(255, 255, 255, 0.1);
`;

export const ActionText = styled.Text`
  font-size: 13px;
  color: ${({ theme }) => theme.text.primary};
  font-family: ${({ theme }) => theme.text.font.primary};
  text-transform: uppercase;
`;
