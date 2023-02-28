import { rgba } from "polished";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome5";

export const DropdownContainer = styled.View`
  position: relative;
  border-radius: 8px;
  margin: 10px;
  background-color: rgba(255, 255, 255, 0.1);
`;

export const Option = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 3px;
  border-color: ${({ theme }) => rgba(theme.base.mainColor, 0.5)};
  padding: 10px 15px;
  height: 70px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  justify-content: space-between;
  overflow: hidden;
`;

export const NonSelectedOption = styled(Option)`
  justify-content: flex-start;
`;

export const OptionText = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const NonSelectedOptionTextContainer = styled.View`
  width: 75%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const NonSelectedOptionText = styled(OptionText)``;

export const OptionImage = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 8px;
  object-fit: cover;
`;

export const OptionIcon = styled(Icon)`
  font-size: 26px;
  color: #fff;
`;

export const DropdownWrapper = styled.View`
  width: 100%;
  position: absolute;
  top: 70px;
  left: 0;
  background-color: rgba(255, 255, 255, 0.1);
  z-index: 100;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  overflow: hidden;
  opacity: 0;
`;
