import styled from "styled-components/native";

export const SectionItemsWrapper = styled.View`
  width: 100%;
  margin-bottom: 10px;
`;

export const SectionItem = styled.View`
  width: 100%;
  padding: 5px 0;
`;

export const SectionItemText = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 15px;
  font-family: ${({ theme }) => theme.text.font.secondary};
`;
