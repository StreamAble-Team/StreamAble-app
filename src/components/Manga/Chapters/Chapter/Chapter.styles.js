import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 70px;
  margin-bottom: 30px;
  border-radius: 8px;
  overflow: hidden;
`;

export const CardBg = styled.View`
  background-color: ${({ theme }) => theme.base.mainColor};
  width: 100%;
  height: 100%;
`;

export const CardContent = styled.View`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 5px;
  overflow: hidden;
`;
