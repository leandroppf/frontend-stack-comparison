"use client";

import { useCallback, useState } from "react";
import { ThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "../styles/themes";
import Header from "../components/Header";
import { AppRoot } from "./styles";

interface RootStyleProps {
  children: React.ReactNode;
}

export default function RootStyle({ children }: RootStyleProps) {
  const [useDarkTheme, setUseDarkTheme] = useState<boolean>(false);

  const handleChangeTheme = useCallback((theme: boolean) => {
    setUseDarkTheme(theme);
  }, []);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : lightTheme}>
      <AppRoot>
        <Header setDarkTheme={handleChangeTheme} useDarkTheme={useDarkTheme} />
        {children}
      </AppRoot>
    </ThemeProvider>
  );
}
