"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes"
import { useThemeSettings } from "@/hooks/use-theme-settings"

// ThemeInitializer component that will run on the client side
function ThemeInitializer() {
  // This hook will load and apply theme settings from localStorage
  useThemeSettings();
  return null;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <ThemeInitializer />
      {children}
    </NextThemesProvider>
  );
} 