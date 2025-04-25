'use client';

import React, { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

// App registry with dynamic imports
const APPS = {
  cms: () => import('@/app/apps/cms'),
  mixdb: () => import('@/app/apps/mixdb'),
  projects: () => import('@/app/apps/projects'),
  workflow: () => import('@/app/apps/workflow'),
  blogs: () => import('@/app/apps/blogs'),
  'mini-app': () => import('@/app/apps/mini-app'),
  website: () => import('@/app/apps/website/components/index.js'),
  automation: () => import('@/app/apps/automation')
  // Additional apps can be registered here
};

export interface AppLoaderProps {
  appId: string;
  params?: Record<string, any>;
}

export function AppLoader({ appId, params }: AppLoaderProps) {
  const [AppComponent, setAppComponent] = useState<React.ComponentType<any> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    setLoading(true);
    setError(null);
    setAppComponent(null);
    
    // Reset state when appId changes
    if (!appId || !APPS[appId as keyof typeof APPS]) {
      setError(`App "${appId}" not found`);
      setLoading(false);
      return;
    }
    
    // Dynamically import the app component
    APPS[appId as keyof typeof APPS]()
      .then(module => {
        setAppComponent(() => module.default);
        setLoading(false);
      })
      .catch(err => {
        console.error(`Error loading app ${appId}:`, err);
        setError(`Failed to load app "${appId}"`);
        setLoading(false);
      });
  }, [appId]);
  
  if (loading) {
    return <LoadingPlaceholder />;
  }
  
  if (error) {
    return <ErrorDisplay message={error} />;
  }
  
  if (!AppComponent) {
    return <ErrorDisplay message="App component not found" />;
  }
  
  return <AppComponent params={params} />;
}

// Loading placeholder component
function LoadingPlaceholder() {
  return (
    <div className="p-4 space-y-4">
      <Skeleton className="h-8 w-64" />
      <Skeleton className="h-32 w-full" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Skeleton className="h-40 w-full" />
        <Skeleton className="h-40 w-full" />
        <Skeleton className="h-40 w-full" />
      </div>
    </div>
  );
}

// Error display component
function ErrorDisplay({ message }: { message: string }) {
  return (
    <div className="p-4 bg-red-50 text-red-800 rounded-md">
      <h3 className="font-medium">Error Loading App</h3>
      <p>{message}</p>
    </div>
  );
}

export default AppLoader; 