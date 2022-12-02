import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome5";

export const Container = styled.View``;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.text.font.secondary};
  color: ${({ theme }) => theme.text.primary};
`;

export const AppVersion = styled(Text)`
  width: 100%;
  font-size: 20px;
  text-align: center;
`;

export const SocialWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const SocialIconWrapper = styled.TouchableOpacity``;

export const Social = styled(Icon)`
  color: ${({ theme }) => theme.text.primary};
  font-size: 26px;
`;
