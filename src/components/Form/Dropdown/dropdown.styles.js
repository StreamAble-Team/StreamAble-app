import { rgba } from "polished";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { css } from "styled-components";

const styles = css`
  background-color: rgba(255, 255, 255, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const DropdownContainer = styled.View`
  position: relative;
  border-radius: 8px;
  margin: 10px;
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => theme.base.mainColor};
`;

export const DropdownWrapper = styled.TouchableOpacity`
  position: relative;
  flex-direction: row;
  align-items: center;
  height: 60px;
  z-index: 1;
  ${styles};
  padding: 0 15px;
`;

export const OptionIcon = styled(Icon)`
  font-size: 26px;
  color: #fff;
`;

export const OptionText = styled.Text`
  flex: 1;
  text-align: center;
  color: ${({ theme }) => theme.text.primary};
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
`;

export const Overlay = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
`;

export const DropdownList = styled.View`
  position: absolute;
  width: 100%;
`;

export const DropdownItem = styled.TouchableOpacity`
  margin: 0 10px;
  padding: 15px 15px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => rgba(theme.base.mainColor, 0.3)};
  background-color: rgba(255, 255, 255, 0.1);
  flex-direction: row;
  align-items: center;
`;

export const DropdownImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  object-fit: cover;
`;

export const DropdownItemText = styled(OptionText)`
  font-weight: 400;
`;

export const DropdownItemImage = styled(DropdownImage)``;
