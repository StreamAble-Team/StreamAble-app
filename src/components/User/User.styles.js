import styled from "styled-components/native";

export const GeneralText = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.text.font.primary};
  color: ${({ theme }) => theme.text.primary};
`;

export const Container = styled.View`
  margin: 0 25px;
  padding-bottom: 25px;
  margin-bottom: 25px;
  margin-top: 10px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.text.secondary};
`;

export const Top = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  overflow: hidden;
`;

export const UserName = styled(GeneralText)`
  margin-left: 15px;
  font-size: 20px;
  font-family: ${({ theme }) => theme.text.font.secondary};
`;

export const Bottom = styled.View`
  margin-top: 15px;
`;

export const Texts = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Bold = styled(GeneralText)`
  font-family: ${({ theme }) => theme.text.font.secondary};
`;

export const LeftText = styled(GeneralText)`
  color: ${({ theme }) => theme.text.offWhite};
`;

export const RightText = styled(GeneralText)`
  color: ${({ theme }) => theme.text.offWhite};
`;
