'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';

export default function AppRedirectPage({ params }: { params: { appId: string } }) {
  const { appId } = params;
  const router = useRouter();
  
  // Redirect to the new URL structure
  useEffect(() => {
    const newUrl = `/apps/${appId}/dashboard`;
    router.replace(newUrl);
  }, [appId, router]);
  
  // Show loading indicator while redirecting
  return (
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
  );
}

// Function to generate static params
export function generateStaticParams() {
  return [
    { appId: 'cms' },
    { appId: 'mixdb' },
    { appId: 'projects' },
    { appId: 'workflow' },
    { appId: 'blogs' },
    { appId: 'mini-app' },
    { appId: 'website' },
    { appId: 'automation' }
  ];
} 