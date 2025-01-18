"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { SunIcon, MoonIcon } from "../Navbar/NavIcons";

export function SwitchThemeButton() {
  const { theme, setTheme, systemTheme } = useTheme();
  
  const currentTheme = theme === "system" ? systemTheme : theme;

  const isDarkMode = currentTheme === "dark";

  return (
    <Button

      size={"icon"}
      onClick={() => setTheme(isDarkMode ? "light" : "dark")}
      className={`ml-3 flex items-center justify-center rounded-full p-1
        ${isDarkMode ? "bg-light text-dark" : "bg-dark text-light"}
      `}
    >
      {isDarkMode ? (
        <SunIcon className="fill-dark" />
      ) : (
        <MoonIcon className="fill-light" />
      )}
    </Button>
  );
}
