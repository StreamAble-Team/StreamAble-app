import styled from "styled-components/native";

export const CardContainer = styled.TouchableOpacity`
  margin-left: ${({ index }) => (index === 0 ? 0 : 20)}px;
  overflow: hidden;
  width: 115px;
  height: 155px;
`;

export const CardBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
`;

export const CardContent = styled.View`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 5px;
  overflow: hidden;
`;

export const CardTitle = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 8px;
  font-family: ${({ theme }) => theme.text.font.secondary};
  text-transform: uppercase;
  height: 25px;
`;
