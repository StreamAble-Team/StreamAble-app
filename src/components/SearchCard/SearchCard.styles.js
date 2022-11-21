import styled from "styled-components/native";

export const SearchCardContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  height: 100px;
  margin: 0 20px;
  margin-bottom: 25px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

export const SearchCardImageContainer = styled.View`
  width: 85px;
`;

export const SearchCardImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: cover;
`;

export const SearchCardInfo = styled.View`
  display: flex;
  justify-content: flex-end;
  height: 100%;
  width: 75%;
  overflow: hidden;
  padding: 10px 15px;
`;

export const SearchCardTitle = styled.Text`
  text-align: left;
  color: ${({ theme }) => theme.text.primary};
  font-size: 13px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.text.font.secondary};
`;

export const SearchCardDescription = styled.Text`
  text-align: left;
  color: ${({ theme }) => theme.text.offWhite};
  font-size: 10px;
  font-family: ${({ theme }) => theme.text.font.primary};
  margin-bottom: 5px;
`;

export const SearchCardMeta = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const SearchCardMetaItem = styled.Text`
  color: ${({ theme }) => theme.text.offWhite};
  font-size: 9px;
  margin-right: 15px;
  font-family: ${({ theme }) => theme.text.font.primary};
  text-transform: uppercase;
`;
