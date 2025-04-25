import React from 'react';
import ClientAppRedirect from './ClientAppRedirect';

export default function AppRedirectPage({ params }: { params: { appId: string } }) {
  return <ClientAppRedirect params={params} />;
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