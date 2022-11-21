import styled from "styled-components";

export const AppRoot = styled.div`
  background: ${(props) => props.theme.background};
  min-height: 100vh;
`;

export const Main = styled.main`
  background: ${(props) => props.theme.background};
`;

export const PageTitle = styled.h2`
  color: ${(props) => props.theme.textDefault};
`;
