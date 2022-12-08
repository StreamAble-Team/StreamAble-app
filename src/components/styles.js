import styled from "styled-components/native";

export const Container = styled.View`
  padding: 15px 25px 5px 25px;
`;

export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 10px;
  padding-bottom: 40px;
  padding-top: 5px;
  ${({ isMobile }) =>
    !isMobile &&
    `
    justify-content: space-between;
  flex-direction: row;
  `}
`;
