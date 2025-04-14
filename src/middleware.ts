import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { 
  supportedLanguages, 
  defaultLanguage, 
  addLanguageToPath,
  removeLanguageFromPath 
} from '@/utils/language-utils';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Log all requests for debugging
  console.log(`Middleware processing: ${pathname}`);
  
  // Check if the URL already has a language code
  const pathnameHasLanguage = supportedLanguages.some(
    (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  );
  
  // Skip language prefix for special paths
  const isSpecialPath = 
    pathname.startsWith('/_next') || 
    pathname.startsWith('/api') || 
    pathname === '/favicon.ico';
    
  // If there's no language in the URL, redirect to add the default language
  if (!pathnameHasLanguage && !isSpecialPath) {
    // For root path, redirect to /defaultLanguage/dashboard
    if (pathname === '/') {
      return NextResponse.redirect(new URL(`/${defaultLanguage}/dashboard`, request.url));
    }
    
    // For other paths, add the language prefix
    const newUrl = addLanguageToPath(pathname);
    return NextResponse.redirect(new URL(newUrl, request.url));
  }
  
  // Handle language-prefixed routes by rewriting to the actual route
  // This allows Next.js to find the correct route under /dashboard even when accessed via /en-us/dashboard
  if (pathnameHasLanguage) {
    const pathWithoutLanguage = removeLanguageFromPath(pathname);
    
    // Don't rewrite the URL if it's just the language with no additional path
    // e.g., /en-us should go to /en-us/dashboard
    if (supportedLanguages.some(lang => pathname === `/${lang}`)) {
      const url = request.nextUrl.clone();
      url.pathname = `/${pathname.split('/')[1]}/dashboard`;
      return NextResponse.redirect(url);
    }
    
    // Otherwise, rewrite the URL internally while preserving the language in the visible URL
    const url = request.nextUrl.clone();
    url.pathname = pathWithoutLanguage;
    
    // Special handling for dashboard/pages route
    if (pathname.includes('/dashboard/pages')) {
      console.log('Middleware: Handling /dashboard/pages route');
    }
    
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

// Configure the paths that should trigger this middleware
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
