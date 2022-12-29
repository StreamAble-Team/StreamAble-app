import styled from "styled-components/native";

export const Container = styled.Pressable`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
`;

export const Wrapper = styled.Pressable`
  position: relative;
  width: 75%;
  height: 80%;
  background-color: ${({ theme }) => theme.base.navBg};
  border-radius: 8px;
  overflow: hidden;
`;

export const WrapperInner = styled.View`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 15px 20px;
  overflow: hidden;
`;

export const Title = styled.Text`
  font-size: 25px;
  color: ${({ theme }) => theme.text.primary};
  font-family: ${({ theme }) => theme.text.font.secondary};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.text.primary};
  padding-bottom: 5px;
`;
