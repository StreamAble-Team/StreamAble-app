import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome5";

export const NavBarContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
  height: 55px;
`;

export const NavBarWrapper = styled.View`
  background: ${({ theme }) => theme.base.offDarkBg};
  width: 180px;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`;

export const NavBarIconItem = styled.TouchableOpacity``;

export const NavBarIcon = styled(Icon)`
  font-size: 23px;
  color: ${({ theme }) => theme.text.primary};
`;
