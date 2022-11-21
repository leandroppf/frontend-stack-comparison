import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-size: 16px;
    min-height: 100vh;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
  button {
    cursor: pointer;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  *:disabled {
    cursor: not-allowed;
  }
`;

export default GlobalStyle;
