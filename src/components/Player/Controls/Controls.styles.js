import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const WrapperWithBg = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 125px;
  padding: 25px;
  background: rgba(0, 0, 0, 0.3);
`;

export const WrapperFlex = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const GoBackWrapper = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  margin: 15px;
`;
