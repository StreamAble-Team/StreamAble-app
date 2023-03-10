import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome";

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
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const BannerImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const BannerContent = styled.View`
  background-color: rgba(0, 0, 0, 0.55);
  height: 100%;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
`;

export const BannerTitle = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 22px;
  margin-top: 2px;
  font-family: ${({ theme }) => theme.text.font.semiBold};
`;

export const BannerDescription = styled.Text`
  color: ${({ theme }) => theme.text.offWhite};
  font-size: 12px;
  font-family: ${({ theme }) => theme.text.font.primary};
`;

export const BannerMeta = styled.View`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const BannerMetaItem = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const BannerMetaItemText = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 11px;
  font-family: ${({ theme }) => theme.text.font.primary};
  margin-right: 15px;
`;

export const BannerMetaItemIconContainer = styled.View`
  margin-right: 7px;
`;

export const BannerMetaItemIcon = styled(Icon)`
  color: ${({ theme }) => theme.base.gold};
  font-size: 12px;
`;
