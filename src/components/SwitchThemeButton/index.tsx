"use client";

import * as React from "react";
import { useTheme } from "next-themes";


import { SunIcon, MoonIcon } from "../Navbar/NavIcons";

export function SwitchThemeButton() {
  const { theme, setTheme, systemTheme } = useTheme();
  
  const currentTheme = theme === "system" ? systemTheme : theme;

  const isDarkMode = currentTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDarkMode ? "light" : "dark")}
      className={` xs:mt-2 ml-3 flex items-center justify-center rounded-full p-1
        ${isDarkMode ? "bg-light text-dark hover:bg-light" : "bg-dark text-light hover:bg-dark"}
      `}
    >
      {isDarkMode ? (
        <SunIcon className="fill-dark" />
      ) : (
        <MoonIcon className="fill-light" />
      )}
    </button>
  );
}
