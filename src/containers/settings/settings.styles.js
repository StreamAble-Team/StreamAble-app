import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome5";

export const GoBack = styled.TouchableOpacity`
  width: 100%;
  padding: 10px 0;
  margin-bottom: 25px;
  flex-direction: row;
  align-items: center;
`;

export const GoBackIcon = styled(Icon).attrs(() => ({
  name: "arrow-left",
}))`
  font-size: 25px;
  color: ${({ theme }) => theme.text.primary};
  margin-right: 10px;
`;
