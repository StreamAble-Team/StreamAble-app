import styled from "styled-components/native";

/* prettier-ignore */
export const BannerContainer = styled.View`
//   background-color: ${({ theme }) => theme.base.darkBg};
  height: 230px;
  width: 100%;
  marginBottom: 20px;
  color: #fff;
  overflow: hidden;
`;

/* prettier-ignore */
export const BannerImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  resizeMode: cover;
`;

/* prettier-ignore */
export const BannerContent = styled.View`
  backgroundColor: rgba(0, 0, 0, 0.6);
  height: 100%;
  width: 100%;
  padding: 5px 10px;
`;

/* prettier-ignore */
export const BannerTitle = styled.Text`
  color: #fff;    
  fontSize: 20px;
  fontFamily: OpenSans_800ExtraBold;
  marginBottom: 8px;
`;

/* prettier-ignore */
export const BannerDescription = styled.Text`
  color: ${({ theme }) => theme.text.offWhite};
  fontsize: 15px;
  fontFamily: OpenSans_400Regular;
`;
