'use client';

import React from 'react';
import WebApp from '../web-app';
import { getAppConfig } from '../app-loader';

interface StandalonePageProps {
  apiUrl?: string;
  theme?: string;
}

/**
 * Standalone page for running the mini-app as a regular web application
 * This can be embedded in any Next.js app or used as a reference implementation
 */
export default function StandalonePage({ 
  apiUrl = 'https://api.example.com', 
  theme = 'light-theme' 
}: StandalonePageProps) {
  const appConfig = getAppConfig();
  
  return (
    <div className="standalone-page">
      <header className="p-4 border-b bg-background">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">{appConfig.displayName} Web App</h1>
          <div className="text-sm text-muted-foreground">Standalone Mode</div>
        </div>
      </header>
      
      <main className="container mx-auto py-6">
        {/* Wrap the app in the WebApp component for standalone mode */}
        <WebApp 
          webAppConfig={{
            standalone: true,
            hideHeader: false,
            customTheme: theme,
            apiBaseUrl: apiUrl
          }}
        />
      </main>
      
      <footer className="p-4 border-t bg-muted mt-auto">
        <div className="container mx-auto text-sm text-muted-foreground text-center">
          Powered by Mixcore CMS
        </div>
      </footer>
    </div>
  );
} 