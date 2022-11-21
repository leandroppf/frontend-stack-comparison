import styled from "styled-components";

export const HeaderRoot = styled.header`
  width: 100vw;
  height: ${(props) => props.theme["16"]};
  background: ${(props) => props.theme.indigo100};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 5vw;
`;

export const HeaderTitle = styled.h1`
  color: ${(props) => props.theme.textDefault};
`;

export const ThemeButton = styled.button`
  border: none;
  background: transparent;
`;
