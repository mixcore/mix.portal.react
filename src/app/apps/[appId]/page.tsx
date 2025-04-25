import React from 'react';
import ClientAppLoader from '@/components/app/ClientAppLoader';

export default function AppPage({ params }: { params: { appId: string } }) {
  const { appId } = params;
  
  // Map of app IDs to human-readable names
  const appNames: Record<string, string> = {
    cms: 'Content Management',
    mixdb: 'MixDB',
    projects: 'Projects',
    workflow: 'Workflow Automation',
    blogs: 'Blogs',
    'mini-app': 'Mini App',
    website: 'Website Manager',
    automation: 'Automation'
  };
  
  return (
    <main className="app-container">
      <ClientAppLoader appId={appId} />
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