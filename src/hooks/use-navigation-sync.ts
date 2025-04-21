import { useEffect } from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useNavigationContext } from '@/providers/navigation-context-provider';
import { useAppContext } from '@/providers/AppContextProvider';

/**
 * Hook that synchronizes URL, app context, and navigation context
 */
export function useNavigationSync() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { activeContextId, setActiveContextId, availableContexts } = useNavigationContext();
  const { activeAppId, setActiveApp } = useAppContext();

  useEffect(() => {
    // Extract context information from URL
    let contextFromUrl: string | null = null;
    
    // Check app in URL parameters
    const appParam = searchParams.get('app');
    if (appParam) {
      // Update app context based on URL parameter
      setActiveApp(appParam as any);
      
      // Match app to context if possible
      const contextForApp = availableContexts.find(ctx => ctx.appId === appParam);
      if (contextForApp) {
        contextFromUrl = contextForApp.id;
      }
    }
    
    // Check pathname for context clues
    const pathParts = pathname.split('/').filter(Boolean);
    if (pathParts.includes('apps') && pathParts.length > 2) {
      const appId = pathParts[2]; // apps/[appId]
      
      // Update app context based on path
      setActiveApp(appId as any);
      
      // Match app to context if possible
      const contextForApp = availableContexts.find(ctx => ctx.appId === appId);
      if (contextForApp) {
        contextFromUrl = contextForApp.id;
      }
    }
    
    // Update active context if we found a match in the URL and it differs from current context
    if (contextFromUrl && contextFromUrl !== activeContextId) {
      setActiveContextId(contextFromUrl);
      localStorage.setItem('activeContextId', contextFromUrl);
    }
  }, [pathname, searchParams, activeContextId, setActiveContextId, availableContexts, activeAppId, setActiveApp]);

  return null;
} 