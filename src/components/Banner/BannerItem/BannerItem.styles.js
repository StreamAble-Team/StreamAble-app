import styled from "styled-components/native";

export const BannerContainer = styled.TouchableOpacity`
  //   background-color: ${({ theme }) => theme.base.darkBg};
  height: 260px;
  width: ${({ width }) => width}px;
  margin-bottom: 15px;
  color: #fff;
  overflow: hidden;
  position: relative;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.base.navBg};
`;

export const BannerImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const BannerContent = styled.View`
  background-color: rgba(0, 0, 0, 0.55);
  height: 100%;
  width: 100%;
  padding: 15px 20px;
  display: flex;
  justify-content: flex-end;
`;

export const BannerTitle = styled.Text`
  color: #fff;
  font-size: 25px;
  font-family: ${({ theme }) => theme.text.font.secondary};
`;

export const BannerDescription = styled.Text`
  color: ${({ theme }) => theme.text.offWhite};
  font-size: 11px;
  font-family: ${({ theme }) => theme.text.font.primary};
`;

export const BannerMeta = styled.View`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  margin-top: 17px;
`;

export const BannerMetaItem = styled.Text`
  color: ${({ theme }) => theme.text.offWhite};
  font-size: 10px;
  font-family: ${({ theme }) => theme.text.font.primary};
  margin-right: 15px;
`;
