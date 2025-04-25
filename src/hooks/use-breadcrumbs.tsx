'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { supportedLanguages } from '@/utils/language-utils';

type BreadcrumbItem = {
  title: string;
  link: string;
};

// Mini-app breadcrumb format
type MiniAppBreadcrumb = {
  label: string;
  href: string;
};

// Mapping of language codes to country names
const languageToCountry: Record<string, string> = {
  'en-us': 'United States',
  'es-es': 'Spain',
  'fr-fr': 'France',
  'de-de': 'Germany',
  'ja-jp': 'Japan',
  'zh-cn': 'China'
};

// App name mapping
const appNameMapping: Record<string, string> = {
  cms: 'Content Management',
  mixdb: 'MixDB',
  projects: 'Projects',
  workflow: 'Workflow',
  blogs: 'Blogs',
  'mini-app': 'Mini App',
  website: 'Website',
  automation: 'Automation'
};

// This allows to add custom title as well
const routeMapping: Record<string, BreadcrumbItem[]> = {
  '/dashboard': [{ title: 'Dashboard', link: '/dashboard' }],
  '/dashboard/employee': [
    { title: 'Dashboard', link: '/dashboard' },
    { title: 'Employee', link: '/dashboard/employee' }
  ],
  '/dashboard/product': [
    { title: 'Dashboard', link: '/dashboard' },
    { title: 'Product', link: '/dashboard/product' }
  ]
  // Remove /apps mapping since we want apps to be the root
};

export function useBreadcrumbs() {
  const pathname = usePathname();
  const [customBreadcrumbs, setCustomBreadcrumbs] = useState<BreadcrumbItem[] | null>(null);

  // Listen for custom breadcrumb events from mini-apps
  useEffect(() => {
    const handleBreadcrumbUpdate = (event: CustomEvent) => {
      if (event.detail && event.detail.breadcrumbs) {
        // Convert the mini-app format to our format
        const miniAppBreadcrumbs = event.detail.breadcrumbs as MiniAppBreadcrumb[];
        const mappedBreadcrumbs = miniAppBreadcrumbs.map(item => ({
          title: item.label,
          link: item.href
        }));
        
        setCustomBreadcrumbs(mappedBreadcrumbs);
      }
    };

    const handleBreadcrumbReset = () => {
      setCustomBreadcrumbs(null);
    };

    // Listen for custom events from mini-apps
    window.addEventListener('mixcore:breadcrumbs:update', handleBreadcrumbUpdate as EventListener);
    window.addEventListener('mixcore:breadcrumbs:reset', handleBreadcrumbReset);

    return () => {
      window.removeEventListener('mixcore:breadcrumbs:update', handleBreadcrumbUpdate as EventListener);
      window.removeEventListener('mixcore:breadcrumbs:reset', handleBreadcrumbReset);
    };
  }, []);

  const defaultBreadcrumbs = useMemo(() => {
    // Check if we have a custom mapping for this exact path
    if (routeMapping[pathname]) {
      return routeMapping[pathname];
    }

    // Handle apps specially: treat app name as root item
    if (pathname.startsWith('/apps/')) {
      const segments = pathname.split('/').filter(Boolean);
      
      // Check if we have at least 'apps' and an appId
      if (segments.length >= 2) {
        const appId = segments[1];
        const breadcrumbs: BreadcrumbItem[] = [];
        
        // Use the app name mapping or capitalize the app ID as the root breadcrumb
        const appName = appNameMapping[appId] || appId.charAt(0).toUpperCase() + appId.slice(1);
        breadcrumbs.push({
          title: appName,
          link: `/apps/${appId}`
        });
        
        // Add additional path segments after the app ID
        for (let i = 2; i < segments.length; i++) {
          const segment = segments[i];
          const path = `/${segments.slice(0, i + 1).join('/')}`;
          
          const title = segment.charAt(0).toUpperCase() + segment.slice(1);
          breadcrumbs.push({
            title,
            link: path
          });
        }
        
        return breadcrumbs;
      }
    }

    // If no exact match, fall back to generating breadcrumbs from the path
    const segments = pathname.split('/').filter(Boolean);
    return segments.map((segment, index) => {
      const path = `/${segments.slice(0, index + 1).join('/')}`;
      
      // Check if this segment is a language code (first segment) and replace with country name
      let title = segment.charAt(0).toUpperCase() + segment.slice(1);
      
      if (index === 0 && supportedLanguages.includes(segment.toLowerCase() as any)) {
        const lowerCaseSegment = segment.toLowerCase();
        title = languageToCountry[lowerCaseSegment] || title;
      }
      
      return {
        title,
        link: path
      };
    });
  }, [pathname]);

  // Use custom breadcrumbs if available, otherwise fall back to default
  return customBreadcrumbs || defaultBreadcrumbs;
}
