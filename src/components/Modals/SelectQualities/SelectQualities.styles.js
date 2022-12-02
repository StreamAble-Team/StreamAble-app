import styled from "styled-components/native";

export const Container = styled.Pressable`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
`;

export const Wrapper = styled.Pressable`
  position: relative;
  width: 100%;
  height: 45%;
  background-color: ${({ theme }) => theme.base.navBg};
  overflow: hidden;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 25px 0;
`;

export const WrapperFlex = styled.View`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.text.font.secondary}
  color: ${({ theme }) => theme.base.text};
  text-align: center;
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: 15px;
  text-transform: uppercase;
`;

export const Item = styled.TouchableOpacity`
  position: relative;
  width: 60%;
  height: 40px;
  border-radius: 8px;
  background: ${({ theme }) => theme.base.offDarkBg};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 18px;
`;

export const ItemText = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 16px;
  font-family: ${({ theme }) => theme.text.font.secondary};
  text-transform: uppercase;
`;
