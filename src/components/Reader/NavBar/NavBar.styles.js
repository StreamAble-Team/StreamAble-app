import styled from "styled-components/native";

const borderRadius = 8;

export const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 25px;
  background: ${({ theme }) => theme.base.mainColor};
  z-index: 10;
  border-bottom-left-radius: ${borderRadius}px;
  border-bottom-right-radius: ${borderRadius}px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.text.font.primary};
  color: ${({ theme }) => theme.text.primary};
  text-align: center;
`;
