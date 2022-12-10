import styled from "styled-components/native";

export const SectionItemsWrapper = styled.View`
  width: 100%;
  margin-bottom: 10px;
`;

export const SectionItem = styled.View`
  padding: 5px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const SectionItemText = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 15px;
  font-family: ${({ theme }) => theme.text.font.primary};
  text-transform: uppercase;
`;

export const SectionSetting = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.base.offDarkBg};
  overflow: hidden;
  align-self: flex-end;
`;
