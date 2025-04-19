'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { supportedLanguages, extractLanguageFromPath, changeLanguageInPath } from '@/utils/language-utils';

type LanguageDisplay = {
  code: string;
  name: string;
  flag: string;
};

// Language display information
const languageDisplayInfo: Record<string, LanguageDisplay> = {
  'en-us': { code: 'en-us', name: 'English (US)', flag: '🇺🇸' },
  'vi-vn': { code: 'vi-vn', name: 'Vietnamese', flag: '🇻🇳' },
  'es-es': { code: 'es-es', name: 'Español', flag: '🇪🇸' },
  'fr-fr': { code: 'fr-fr', name: 'Français', flag: '🇫🇷' },
  'de-de': { code: 'de-de', name: 'Deutsch', flag: '🇩🇪' },
  'ja-jp': { code: 'ja-jp', name: '日本語', flag: '🇯🇵' },
  'zh-cn': { code: 'zh-cn', name: '中文', flag: '🇨🇳' }
};

export function LanguageSelector() {
  const pathname = usePathname();
  const router = useRouter();
  
  // Get current language from URL
  const currentLanguage = extractLanguageFromPath(pathname);
  const currentLangInfo = languageDisplayInfo[currentLanguage];
  
  // Handle language change
  const handleLanguageChange = (langCode: string) => {
    if (langCode !== currentLanguage) {
      const newPath = changeLanguageInPath(pathname, langCode as any);
      router.push(newPath);
    }
  };
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 gap-1 px-2">
          <span className="text-base">{currentLangInfo.flag}</span>
          <span className="hidden md:inline-block">{currentLangInfo.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {supportedLanguages.map(langCode => {
          const langInfo = languageDisplayInfo[langCode];
          return (
            <DropdownMenuItem 
              key={langCode}
              onClick={() => handleLanguageChange(langCode)}
              className="gap-2"
            >
              <span className="text-base">{langInfo.flag}</span>
              {langInfo.name}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LanguageSelector; 