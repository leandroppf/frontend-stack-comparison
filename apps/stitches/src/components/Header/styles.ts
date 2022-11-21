import { styled } from "../../styles/stitches";

export const HeaderRoot = styled("header", {
  width: "100vw",
  height: "$16",
  background: "$indigo100",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 5vw",
});

export const HeaderTitle = styled("h1", {
  color: "$textDefault",
});

export const ThemeButton = styled("button", {
  border: "none",
  background: "transparent",
});
