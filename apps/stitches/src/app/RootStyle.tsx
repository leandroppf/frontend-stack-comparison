"use client";

import { useState } from "react";
import { darkTheme } from "../styles/stitches";

import Header from "../components/Header";
import { AppRoot } from "./styles";

interface RootStyleProps {
  children: React.ReactNode;
}

export default function RootStyle({ children }: RootStyleProps) {
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  return (
    <AppRoot className={useDarkTheme ? darkTheme : ""}>
      <Header setDarkTheme={setUseDarkTheme} useDarkTheme={useDarkTheme} />
      {children}
    </AppRoot>
  );
}
