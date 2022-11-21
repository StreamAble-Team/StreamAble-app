import styled from "styled-components/native";

export const InfoTopContainer = styled.View``;

export const InfoTopImageContainer = styled.View`
  width: 100%;
  height: 215px;
`;

export const InfoTopImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const InfoTopImageWrapper = styled.View`
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
`;

export const WatchedContainer = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 3px;
  background: rgba(0, 0, 0, 0.7);
`;

export const WatchedAmount = styled.View`
  width: 40%;
  height: 100%;
  background: ${({ theme }) => theme.base.mainColor};
`;

export const InfoTopPosterContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: -80px;
  width: 100%;
  height: 184px;
  padding: 0 25px;
`;
export const InfoTopPoster = styled.Image`
  width: 122px;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
`;

export const InfoTopWrapper = styled.View`
  margin-top: 100px;
  padding: 0 15px;
`;

export const InfoTopTitle = styled.Text`
  font-family: ${({ theme }) => theme.text.font.secondary};
  color: ${({ theme }) => theme.text.primary};
  text-transform: uppercase;
  font-size: 22px;
`;

export const InfoTopEpisode = styled.Text`
  font-family: ${({ theme }) => theme.text.font.primary};
  color: ${({ theme }) => theme.text.offWhite};
  text-transform: uppercase;
  font-size: 13px;
`;

export const InfoTopDescription = styled.Text`
  font-family: ${({ theme }) => theme.text.font.primary};
  color: ${({ theme }) => theme.text.offWhite};
  font-size: 13px;
  padding: 15px 25px;
  height: 130px;
  overflow: hidden;
`;
