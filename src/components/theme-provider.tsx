"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes"
import { useThemeSettings } from "@/hooks/use-theme-settings"

// ThemeInitializer component that will run on the client side
function ThemeInitializer() {
  const [isMounted, setIsMounted] = React.useState(false);
  
  // Only initialize theme settings after first render
  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Only apply theme settings on the client side
  if (isMounted) {
    // This hook will load and apply theme settings from localStorage
    useThemeSettings();
  }
  
  return null;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Default to light theme initially during SSR to avoid hydration mismatches
  const defaultProps = {
    defaultTheme: 'light',
    enableSystem: true,
    disableTransitionOnChange: false,
    ...props
  };
  
  return (
    <NextThemesProvider {...defaultProps}>
      <ThemeInitializer />
      {children}
    </NextThemesProvider>
  );
} 