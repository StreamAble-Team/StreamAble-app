import styled from "styled-components/native";

/* prettier-ignore */
export const BannerContainer = styled.View`
//   background-color: ${({ theme }) => theme.base.darkBg};
  height: 230px;
  width: 100%;
  marginBottom: 20px;
  color: #fff;
  overflow: hidden;
  position: relative;
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
  padding: 15px 20px;
  display: flex;
  justifyContent: flex-end;
`;

/* prettier-ignore */
export const BannerTitle = styled.Text`
  color: #fff;    
  fontSize: 25px;
  fontFamily: OpenSans_800ExtraBold;
`;

/* prettier-ignore */
export const BannerDescription = styled.Text`
  color: ${({ theme }) => theme.text.offWhite};
  fontsize: 15px;
  fontFamily: OpenSans_400Regular;
`;

/* prettier-ignore */
export const BannerMeta = styled.View`
  display: flex;
  justifyContent: flex-start;
  flexDirection: row;
  alignItems: center;
  marginTop: 17px;
`;

/* prettier-ignore */
export const BannerMetaItem = styled.Text`
  color: ${({ theme }) => theme.text.offWhite};
  fontSize: 10px;
  fontFamily: OpenSans_400Regular;
  marginRight: 10px;
`;

/* prettier-ignore */
export const BannerMetaDot = styled.View`
  height: 3px;
  width: 3px;
  borderRadius: 50%;
  backgroundColor: ${({ theme }) => theme.text.offWhite};
  marginRight: 10px;
  
`;
