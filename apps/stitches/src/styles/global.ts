import { globalCss } from "./stitches";

const globalStyles = globalCss({
  "*": {
    margin: "0",
    padding: "0",
    boxSizing: "border-box",
  },
  body: {
    fontSize: "16px",
    minHeight: "100vh",
  },
  "h1, h2, h3, h4, h5, h6": {
    margin: "0",
  },
  button: {
    cursor: "pointer",
  },
  a: {
    color: "inherit",
    textDecoration: "none",
  },
  "*:disabled": {
    cursor: "not-allowed",
  },
});

export default globalStyles;
