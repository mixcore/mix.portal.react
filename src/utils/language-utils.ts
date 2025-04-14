// Define supported languages and default language
export const supportedLanguages = ['en-us', 'es-es', 'fr-fr', 'de-de', 'ja-jp', 'zh-cn'] as const;
export const defaultLanguage = 'en-us';

export type SupportedLanguage = typeof supportedLanguages[number];

/**
 * Extracts language code from a pathname
 * @param pathname - The current pathname
 * @returns The language code if found, or the default language
 */
export function extractLanguageFromPath(pathname: string): SupportedLanguage {
  const langMatch = supportedLanguages.find(lang => 
    pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  );
  
  return (langMatch || defaultLanguage) as SupportedLanguage;
}

/**
 * Removes language prefix from a pathname
 * @param pathname - The current pathname with language prefix
 * @returns The pathname without language prefix
 */
export function removeLanguageFromPath(pathname: string): string {
  for (const lang of supportedLanguages) {
    if (pathname.startsWith(`/${lang}/`)) {
      return pathname.substring(`/${lang}`.length);
    }
    if (pathname === `/${lang}`) {
      return '/';
    }
  }
  
  return pathname;
}

/**
 * Adds language prefix to a path
 * @param path - The path to add language prefix to
 * @param language - The language to use (defaults to defaultLanguage)
 * @returns The path with language prefix
 */
export function addLanguageToPath(path: string, language: SupportedLanguage = defaultLanguage): string {
  // Skip for paths that already have language, or are special paths
  if (
    supportedLanguages.some(lang => path.startsWith(`/${lang}/`) || path === `/${lang}`) ||
    path.startsWith('/api/') ||
    path.startsWith('/_next/') ||
    path === '/favicon.ico'
  ) {
    return path;
  }
  
  // Handle root path specially
  if (path === '/') {
    return `/${language}`;
  }
  
  // Remove leading slash for consistent joining
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  return `/${language}/${cleanPath}`;
}

/**
 * Changes the language of a given path
 * @param path - The current path
 * @param newLanguage - The new language to switch to
 * @returns The path with the new language
 */
export function changeLanguageInPath(path: string, newLanguage: SupportedLanguage): string {
  const pathWithoutLang = removeLanguageFromPath(path);
  return addLanguageToPath(pathWithoutLang, newLanguage);
} 