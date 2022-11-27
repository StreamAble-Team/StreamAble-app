import styled from "styled-components/native";

export const DescriptionView = styled.TouchableOpacity`
  padding: 25px 25px;
  height: ${({ expand }) => (expand == false ? "140px" : "auto")};
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const DescriptionText = styled.Text`
  font-family: ${({ theme }) => theme.text.font.primary};
  color: ${({ theme }) => theme.text.offWhite};
  font-size: 13px;
`;

export const DescriptionModel = styled.View`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.base.darkBg};
  border-radius: 8px;
  overflow: hidden;
`;
