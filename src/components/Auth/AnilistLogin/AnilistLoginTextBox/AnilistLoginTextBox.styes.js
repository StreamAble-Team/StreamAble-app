import styled from "styled-components/native";

export const TextBox = styled.TextInput`
  margin: 25px 0;
  padding: 5px 15px;
  width: 88%;
  border: 1px solid ${({ theme }) => theme.base.mainColor};
  font-size: 10px;
  font-family: ${({ theme }) => theme.text.font.primary};
  color: ${({ theme }) => theme.text.primary};
`;
