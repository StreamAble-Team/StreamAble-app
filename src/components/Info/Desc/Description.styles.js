import styled from "styled-components/native";

export const DescriptionView = styled.View`
  padding: 28px 25px;
  height: 130px;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

export const DescriptionText = styled.Text`
  font-family: ${({ theme }) => theme.text.font.primary};
  color: ${({ theme }) => theme.text.offWhite};
  font-size: 13px;
`;
