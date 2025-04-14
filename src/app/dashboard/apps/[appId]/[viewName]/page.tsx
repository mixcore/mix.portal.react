import React from 'react';
import ClientAppLoader from '@/components/app/ClientAppLoader';

interface PageParams {
  params: {
    appId: string;
    viewName: string;
  };
  searchParams: Record<string, string | string[]>;
}

export default function AppViewPage({ params, searchParams }: PageParams) {
  const { appId, viewName } = params;
  
  // Combine route params with search params
  const appParams = {
    view: viewName,
    ...Object.fromEntries(
      // Convert array values to string by taking first item
      Object.entries(searchParams).map(([key, value]) => 
        [key, Array.isArray(value) ? value[0] : value]
      )
    )
  };
  
  return (
    <main className="app-container">
      <ClientAppLoader 
        appId={appId} 
        params={appParams}
      />
    </main>
  );
}

// Define common view names for static generation
export function generateStaticParams() {
  const apps = ['cms', 'mixdb', 'projects', 'workflow', 'blogs', 'mini-app'];
  const views = ['dashboard', 'list', 'detail', 'settings'];
  
  const params = [];
  
  for (const appId of apps) {
    for (const viewName of views) {
      params.push({ appId, viewName });
    }
  }
  
  return params;
} 