import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.base.offDarkBg};
  overflow: hidden;
  align-self: flex-start;
`;

export const Item = styled.TouchableOpacity`
  padding: 5px 10px;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.base.offDarkBg : theme.text.secondary};
`;

export const ItemText = styled.Text`
  color: ${({ isActive, theme }) => (isActive ? theme.base.mainColor : "#000")};
  font-family: ${({ theme }) => theme.text.font.secondary};
  text-transform: uppercase;
`;
