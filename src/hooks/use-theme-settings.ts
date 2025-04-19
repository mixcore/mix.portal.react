'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

// Color palette options with HSL values
export const colorOptions = [
  { name: 'Default', value: 'default', class: 'bg-primary', hsl: { light: '222.2 47.4% 11.2%', dark: '210 40% 98%', foreground: { light: '210 40% 98%', dark: '222.2 47.4% 11.2%' } } },
  { name: 'Slate', value: 'slate', class: 'bg-slate-600', hsl: { light: '215 20% 65%', dark: '215 25% 27%', foreground: { light: '210 40% 98%', dark: '210 40% 98%' } } },
  { name: 'Zinc', value: 'zinc', class: 'bg-zinc-600', hsl: { light: '240 5% 64%', dark: '240 5% 26%', foreground: { light: '210 40% 98%', dark: '210 40% 98%' } } },
  { name: 'Rose', value: 'rose', class: 'bg-rose-600', hsl: { light: '350 65% 60%', dark: '350 65% 40%', foreground: { light: '210 40% 98%', dark: '210 40% 98%' } } },
  { name: 'Red', value: 'red', class: 'bg-red-600', hsl: { light: '0 72% 51%', dark: '0 72% 41%', foreground: { light: '210 40% 98%', dark: '210 40% 98%' } } },
  { name: 'Orange', value: 'orange', class: 'bg-orange-600', hsl: { light: '24 75% 50%', dark: '24 75% 40%', foreground: { light: '210 40% 98%', dark: '210 40% 98%' } } },
  { name: 'Green', value: 'green', class: 'bg-green-600', hsl: { light: '142 71% 45%', dark: '142 71% 35%', foreground: { light: '210 40% 98%', dark: '210 40% 98%' } } },
  { name: 'Blue', value: 'blue', class: 'bg-blue-600', hsl: { light: '221 83% 53%', dark: '221 83% 43%', foreground: { light: '210 40% 98%', dark: '210 40% 98%' } } },
  { name: 'Violet', value: 'violet', class: 'bg-violet-600', hsl: { light: '262 83% 58%', dark: '262 83% 48%', foreground: { light: '210 40% 98%', dark: '210 40% 98%' } } },
  { name: 'Purple', value: 'purple', class: 'bg-purple-600', hsl: { light: '272 71% 50%', dark: '272 71% 40%', foreground: { light: '210 40% 98%', dark: '210 40% 98%' } } },
  { name: 'Pink', value: 'pink', class: 'bg-pink-600', hsl: { light: '330 81% 60%', dark: '330 81% 50%', foreground: { light: '210 40% 98%', dark: '210 40% 98%' } } },
];

// Default settings
const defaultSettings = {
  primaryColor: 'default',
  borderRadius: '0.5',
  fontFamily: 'inter',
  darkMode: false,
  animationsEnabled: true
};

// Type for theme settings
export type ThemeSettings = {
  primaryColor: string;
  borderRadius: string;
  fontFamily: string;
  darkMode: boolean;
  animationsEnabled: boolean;
};

export function useThemeSettings() {
  const { theme, setTheme } = useTheme();
  const [themeSettings, setThemeSettings] = useState<ThemeSettings>(defaultSettings);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Apply theme color based on selection
  const applyThemeColor = (colorValue: string, isDarkMode: boolean) => {
    // Only run on client side after component is mounted
    if (!isMounted) return;

    const selectedColor = colorOptions.find(color => color.value === colorValue);
    if (!selectedColor) return;

    const mode = isDarkMode ? 'dark' : 'light';
    
    // Set primary color
    document.documentElement.style.setProperty(
      '--primary', 
      `hsl(${selectedColor.hsl[mode]})`
    );
    
    // Set primary foreground color
    document.documentElement.style.setProperty(
      '--primary-foreground', 
      `hsl(${selectedColor.hsl.foreground[mode]})`
    );

    // Update the body class to reflect the theme
    document.body.classList.forEach(className => {
      if (className.startsWith('theme-')) {
        document.body.classList.remove(className);
      }
    });
    document.body.classList.add(`theme-${colorValue}`);
  };

  // Apply radius
  const applyRadius = (radius: string) => {
    if (!isMounted) return;
    document.documentElement.style.setProperty('--radius', `${radius}rem`);
  };

  // Apply all theme settings
  const applySettings = (settings: ThemeSettings) => {
    if (!isMounted) return;
    
    // Apply dark mode
    if (settings.darkMode) {
      setTheme('dark');
    } else {
      setTheme('light');
    }

    // Apply other settings
    applyThemeColor(settings.primaryColor, settings.darkMode);
    applyRadius(settings.borderRadius);
  };

  // Set isMounted to true once component is mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Load saved settings on mount (client-side only)
  useEffect(() => {
    // Avoid running during SSR or before component is mounted
    if (!isMounted) return;
    
    try {
      const savedSettings = localStorage.getItem('themeSettings');
      
      if (savedSettings) {
        const parsedSettings = JSON.parse(savedSettings) as ThemeSettings;
        setThemeSettings(parsedSettings);
        applySettings(parsedSettings);
      } else {
        // If no settings saved, use defaults but adjust for system theme
        const defaultWithSystemTheme = {
          ...defaultSettings,
          darkMode: theme === 'dark',
        };
        setThemeSettings(defaultWithSystemTheme);
        applySettings(defaultWithSystemTheme);
      }
    } catch (error) {
      console.error('Error loading theme settings:', error);
    } finally {
      setIsInitialized(true);
    }
  }, [isMounted]); // Only depend on isMounted, not theme

  // Update settings when theme changes externally
  useEffect(() => {
    if (!isInitialized || !isMounted) return;
    
    setThemeSettings(prev => {
      const updated = { ...prev, darkMode: theme === 'dark' };
      applyThemeColor(updated.primaryColor, theme === 'dark');
      return updated;
    });
  }, [theme, isInitialized, isMounted]);

  // Save settings function
  const saveSettings = (newSettings: ThemeSettings) => {
    if (!isMounted) return;
    
    // Store in localStorage
    localStorage.setItem('themeSettings', JSON.stringify(newSettings));
    
    // Update state
    setThemeSettings(newSettings);
    
    // Apply the changes
    applySettings(newSettings);
  };

  return {
    themeSettings,
    saveSettings,
    applyThemeColor,
    applyRadius,
    isInitialized
  };
} 