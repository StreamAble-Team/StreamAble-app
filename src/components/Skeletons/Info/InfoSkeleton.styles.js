import styled from "styled-components/native";
import { rgba } from "polished";
import { Animated } from "react-native";

export const Container = styled(Animated.View)``;

export const ImageContainer = styled.View`
  width: 100%;
  height: 215px;
  background: ${({ theme }) => rgba(theme.text.offWhite, 0.2)};
`;

export const PosterContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: -80px;
  width: 100%;
  height: 184px;
  padding: 0 25px;
`;

export const PosterImageWrapper = styled.View`
  width: 122px;
  height: 100%;
  border-radius: 8px;
  background: ${({ theme }) => theme.base.navBg};
`;

export const TopWrapper = styled.View`
  margin-top: 66px;
  padding: 0 15px;
  width: 70%;
`;

export const TopTitle = styled.View`
  width: 100%;
  background: ${({ theme }) => theme.base.navBg};
  border-radius: 8px;
  padding: 6px;
  margin-bottom: 10px;
`;

export const TopSubTitle = styled(TopTitle)`
  width: 70%;
`;

export const TopButtons = styled.View`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const TopPlayButton = styled.View`
  padding: 15px 15px;
  background: ${({ theme }) => theme.base.mainColor};
  border-radius: 10px;
  width: 70px;
  margin-right: 10px;
`;

export const MetaContainer = styled.View`
  padding: 15px 25px 5px 25px;
`;

export const MetaContainerWrapper = styled.View`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const MetaItemContainer = styled.View`
  width: 55px;
  height: 20px;
  display: flex;
  margin-right: 15px;
  padding: 5px 15px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
`;

export const DescriptionView = styled.TouchableOpacity`
  padding: 22px 25px;
  height: 140px;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const DescriptionText = styled.View`
  width: 100%;
  height: 100%;
  padding: 5px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
`;
