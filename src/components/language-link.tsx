'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

// Define supported languages
const supportedLanguages = ['en-us', 'es-es', 'fr-fr', 'de-de', 'ja-jp', 'zh-cn'];
const defaultLanguage = 'en-us';

type LanguageLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export function LanguageLink({ href, children, className, onClick }: LanguageLinkProps) {
  const pathname = usePathname();
  
  // Extract language from current path if it exists
  const currentLanguage = supportedLanguages.find(
    lang => pathname.startsWith(`/${lang}/`)
  ) || defaultLanguage;
  
  // Skip language prefixing for external links, API routes, or links that already have a language code
  const isExternalLink = href.startsWith('http') || href.startsWith('//');
  const isApiRoute = href.startsWith('/api');
  const alreadyHasLanguage = supportedLanguages.some(
    lang => href.startsWith(`/${lang}/`)
  );
  
  let fullHref = href;
  
  // Only add language prefix if it's an internal link without language code already
  if (!isExternalLink && !isApiRoute && !alreadyHasLanguage && !href.startsWith('#')) {
    // Handle root path specially
    if (href === '/') {
      fullHref = `/${currentLanguage}/dashboard`;
    } 
    // Handle dashboard and admin links specially - make sure they're using the language prefix
    else if (href.startsWith('/dashboard/') || href.startsWith('/admin/')) {
      // Remove leading slash for consistent joining
      const cleanHref = href.startsWith('/') ? href.substring(1) : href;
      fullHref = `/${currentLanguage}/${cleanHref}`;
    }
    else {
      // Remove leading slash if present for consistent joining
      const cleanHref = href.startsWith('/') ? href.substring(1) : href;
      fullHref = `/${currentLanguage}/${cleanHref}`;
    }
  }
  
  return (
    <Link href={fullHref} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

export default LanguageLink; 