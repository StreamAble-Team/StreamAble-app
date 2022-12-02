import styled from "styled-components/native";

export const Wrapper = styled.View`
  margin-top: 10px;
`;

export const WatchedContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0;
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
