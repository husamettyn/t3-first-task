"use client";

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { ThemeProviderProps } from "next-themes";
import { useEffect } from "react";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.remove("theme-system");
    if (resolvedTheme) {
      document.documentElement.classList.add(`theme-${resolvedTheme}`);
    }
  }, [resolvedTheme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, [setTheme]);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
