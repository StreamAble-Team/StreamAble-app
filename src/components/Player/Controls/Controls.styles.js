import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: ${({ hideControls }) => (!hideControls ? 1 : 0)};
`;

export const WrapperWithBg = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 110px;
  padding: 25px;
  background: rgba(0, 0, 0, 0.2);
  z-index: 11;
`;

export const WrapperFlex = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const GoBackWrapper = styled.Pressable`
  position: absolute;
  top: 0;
  left: 0;
  margin: 15px;
  z-index: 10;
  elevation: 10;
`;

export const ClickToDismiss = styled.Pressable`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  elevation: 1;
`;
