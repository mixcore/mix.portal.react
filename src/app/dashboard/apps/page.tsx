'use client';

import React, { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { PageLayout } from '@/components/layouts/PageLayout';
import { Skeleton } from '@/components/ui/skeleton';

export default function AppsRedirectPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const appId = searchParams.get('app') || 'cms'; // Default to CMS app if not specified
  
  // Redirect to the new URL structure
  useEffect(() => {
    // Get the view parameter if it exists
    const view = searchParams.get('view') || 'dashboard';
    
    // Build the new URL with the pattern /apps/[appId]/[viewName]
    let newUrl = `/apps/${appId}/${view}`;
    
    // Copy any additional query parameters
    const newParams = new URLSearchParams();
    searchParams.forEach((value, key) => {
      if (key !== 'app' && key !== 'view') {
        newParams.append(key, value);
      }
    });
    
    // Add query string if there are additional parameters
    const queryString = newParams.toString();
    if (queryString) {
      newUrl += `?${queryString}`;
    }
    
    // Redirect to the new URL
    router.replace(newUrl);
  }, [appId, router, searchParams]);
  
  // Show loading indicator while redirecting
  return (
    <PageLayout>
      <main className="app-container flex items-center justify-center">
        <div className="space-y-4 w-full max-w-md">
          <Skeleton className="h-8 w-64 mx-auto" />
          <Skeleton className="h-32 w-full" />
          <div className="grid grid-cols-3 gap-4">
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
          </div>
        </div>
      </main>
    </PageLayout>
  );
} 