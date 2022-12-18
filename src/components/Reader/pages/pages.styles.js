import styled from "styled-components/native";

export const PagesContainer = styled.View`
  margin-top: 50px;
  margin-bottom: 50px;
  // background-color: red;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const FLatList = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
  alignItems: "center",
})`
  height: 86%;
`;
