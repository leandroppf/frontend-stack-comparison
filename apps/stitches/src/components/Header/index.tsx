import * as Components from "./styles";
import { Sun, MoonStars } from "phosphor-react";
import { Dispatch, SetStateAction, useCallback } from "react";

interface HeaderProps {
  useDarkTheme: boolean;
  setDarkTheme: Dispatch<SetStateAction<boolean>>;
}

export default function Header({ useDarkTheme, setDarkTheme }: HeaderProps) {
  const handleChangeTheme = useCallback(() => {
    setDarkTheme(!useDarkTheme);
  }, [setDarkTheme, useDarkTheme]);

  return (
    <Components.HeaderRoot>
      <Components.HeaderTitle>Stitches stack</Components.HeaderTitle>
      <Components.ThemeButton onClick={handleChangeTheme}>
        {useDarkTheme ? <Sun size={24} /> : <MoonStars size={24} />}
      </Components.ThemeButton>
    </Components.HeaderRoot>
  );
}
