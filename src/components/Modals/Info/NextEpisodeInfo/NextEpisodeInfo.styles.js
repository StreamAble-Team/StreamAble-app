import styled from "styled-components/native";

export const Title = styled.Text`
  font-size: 13px;
  color: ${({ theme }) => theme.text.primary};
  font-family: ${({ theme }) => theme.text.font.secondary};
  text-transform: uppercase;
  text-align: left;
`;

export const InfoContainer = styled.View`
  margin-top: 25px;
  padding-top: 20px;
  border-top-width: 1.2px;
  border-top-color: ${({ theme }) => theme.text.offWhite};
`;

export const NextEpisodeTitleContainer = styled.View`
  margin-top: 13px;
  height: 45px;
  display: flex;
  padding-bottom: 2px;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const NextEpisodeTitle = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 15px;
  color: ${({ theme }) => theme.text.primary};
  font-family: ${({ theme }) => theme.text.font.secondary};
`;

export const Description = styled.Text.attrs({
  numberOfLines: 3,
})`
  font-size: 15px;
  color: ${({ theme }) => theme.text.primary};
  font-family: ${({ theme }) => theme.text.font.primary};
  margin-top: -1px;
  height: 70px;
`;

export const WatchedInfoImage = styled.ImageBackground`
  margin-top: 18px;
  width: 100%;
  height: 90px;
  border-radius: 8px;
  overflow: hidden;
`;

export const WatchedInfoImageBG = styled.ImageBackground`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
`;
