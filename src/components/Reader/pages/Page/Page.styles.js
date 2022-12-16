import { rgba } from "polished";
import styled from "styled-components/native";
import ReactNativeZoomableView from "@openspacelabs/react-native-zoomable-view/src/ReactNativeZoomableView";

export const ImageContainer = styled.View`#
position: relative;
  width: 280px;
  height: 420px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  z-index: 5;
  margin-left: 10px;
  margin-bottom: 15px;
`;

export const ZoomableView = styled(ReactNativeZoomableView)`
  height: 100%;
  width: 100%;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: contain;
  // height: 100px;
`;

export const PageContainer = styled.View`
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const PageNumber = styled.Text`
  text-align: right;
  font-size: 15px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.text.font.primary};
  color: ${({ theme }) => theme.text.primary};
  padding: 3px 10px;
  border-radius: 8px;
  background: ${({ theme }) => theme.base.mainColor};
  opacity: 0.8;
`;
