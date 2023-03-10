import styled from "styled-components/native";

import Icon from "react-native-vector-icons/FontAwesome";

export const MetaContainer = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
}))`
  margin-top: 15px;
`;

export const MetaItemContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-right: 15px;
  padding: 5px 15px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
`;

export const MetaItem = styled.Text`
  font-family: ${({ theme }) => theme.text.font.secondary};
  color: ${({ theme }) => theme.text.offWhite};
  text-transform: uppercase;
  font-size: 12px;
`;

export const MetaItemIcon = styled(Icon)`
  color: ${({ theme }) => theme.base.gold};
  font-size: 12px;
  font-weight: bold;
  margin-right: 10px;
`;
