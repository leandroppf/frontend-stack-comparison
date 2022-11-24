import { Sun, MoonStars } from "phosphor-react";
import { useCallback, useEffect, useState } from "react";

export default function Header() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const addDarkTheme = useCallback(() => {
    document.documentElement.classList.add("dark");
    setIsDarkTheme(true);
  }, []);

  const removeDarkTheme = useCallback(() => {
    document.documentElement.classList.remove("dark");
    setIsDarkTheme(false);
  }, []);

  const handleChangeTheme = useCallback(() => {
    if (document.documentElement.classList.contains("dark")) {
      removeDarkTheme();
    } else {
      addDarkTheme();
    }
  }, [addDarkTheme, removeDarkTheme]);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      addDarkTheme();
    } else {
      removeDarkTheme();
    }
  }, [addDarkTheme, removeDarkTheme]);

  return (
    <header className="w-full h-16 bg-indigo100-l dark:bg-indigo100-d flex flex-row items-center justify-between px-[5vw]">
      <h1 className="text-textDefault-l dark:text-textDefault-d text-3xl font-bold">
        Tailwindcss stack
      </h1>
      <button onClick={handleChangeTheme}>
        {isDarkTheme ? <Sun size={24} /> : <MoonStars size={24} />}
      </button>
    </header>
  );
}
