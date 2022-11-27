import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 110px;
  margin-bottom: 30px;
  border-radius: 8px;
  overflow: hidden;
`;

export const Text = styled.Text`
  color: #fff;
`;

export const ImageContainer = styled.View`
  width: 85px;
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: cover;
`;

export const Info = styled.View`
  display: flex;
  justify-content: flex-end;
  height: 100%;
  width: 75%;
  overflow: hidden;
  padding: 10px 15px;
  background-color: rgba(255, 255, 255, 0.05);
`;

export const Title = styled.Text`
  text-align: left;
  color: ${({ theme }) => theme.text.primary};
  font-size: 13px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.text.font.secondary};
`;

export const Description = styled.Text`
  text-align: left;
  color: ${({ theme }) => theme.text.offWhite};
  font-size: 10px;
  font-family: ${({ theme }) => theme.text.font.primary};
  margin-bottom: 5px;
`;

export const Meta = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const MetaItem = styled.Text`
  color: ${({ theme }) => theme.text.offWhite};
  font-size: 9px;
  margin-right: 15px;
  font-family: ${({ theme }) => theme.text.font.primary};
  text-transform: uppercase;
`;
