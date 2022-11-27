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

export const CardImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  resize-mode: cover;
`;

export const PlayedBy = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 5px;
  background: rgba(0, 0, 0, 0.35);
  // margin-top: 5px;
`;

export const PlayedByImage = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  object-fit: cover;
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
  font-size: 14px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.text.font.secondary};
  margin-top: 8px;
`;

export const Subtitle = styled.Text`
  display: flex;
  align-items: center;
  text-align: left;
  color: ${({ theme }) => theme.text.offWhite};
  font-size: 11px;
  font-family: ${({ theme }) => theme.text.font.primary};
  margin-top: 2px;
`;

export const SubtitleRole = styled(Subtitle)`
  color: ${({ theme }) => theme.text.offWhite};
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
