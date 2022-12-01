import styled from "styled-components/native";

export const Wrapper = styled.View`
  margin-top: 10px;
`;

export const WatchedContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const WatchedAmount = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.text.primary};
  font-family: ${({ theme }) => theme.text.font.secondary};
`;

export const WatchedInfoContainer = styled(WatchedContainer)`
  margin-bottom: -10px;
`;

export const WatchedInfoItem = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.text.offWhite};
  font-family: ${({ theme }) => theme.text.font.primary};
`;

export const Title = styled.Text`
  font-size: 13px;
  color: ${({ theme }) => theme.text.offWhite};
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
  margin-top: 20px;
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
  color: ${({ theme }) => theme.text.secondary};
  font-family: ${({ theme }) => theme.text.font.primary};
  margin-top: -1px;
  height: 70px;
`;
