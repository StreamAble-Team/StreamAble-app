import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome5";

export const SearchBarContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 60px;
  margin: 25px 20px;
  margin-top: 52px;
  border-radius: 8px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.15);
`;

export const SearchBarBar = styled.TextInput`
  padding: 10px 20px;
  color: ${({ theme }) => theme.text.offWhite};
  width: 80%;
  height: 100%;
`;

export const SearchBarIconItem = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 100%;
  border-left-width: 2px;
  border-left-color: rgba(255, 255, 255, 0.1);
`;

export const SearchBarIcon = styled(Icon)`
  color: ${({ theme }) => theme.text.primary};
  font-size: 23px;
`;
