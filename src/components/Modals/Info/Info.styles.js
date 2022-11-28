import styled from "styled-components/native";

export const Container = styled.Pressable`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
`;

export const Wrapper = styled.Pressable`
  width: 70%;
  height: 70%;
  background-color: ${({ theme }) => theme.base.navBg};
  padding: 10px 15px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.text.primary};
  font-family: ${({ theme }) => theme.text.font.primary};
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => theme.text.primary};
  padding-bottom: 5px;
`;
