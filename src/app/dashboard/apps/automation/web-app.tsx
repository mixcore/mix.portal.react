'use client';

import React from 'react';
import AutomationApp from './index';
import { getAppConfig, setWebAppMode } from './app-loader';
import './app-globals.css';

// Declare global window extension to hold API base URL
declare global {
  interface Window {
    __MIXCORE_API_BASE_URL: string | undefined;
  }
}

interface WebAppProps {
  params?: Record<string, any>;
  className?: string;
  webAppConfig?: {
    hideHeader?: boolean;
    standalone?: boolean;
    customTheme?: string;
    apiBaseUrl?: string;
  };
}

/**
 * WebApp is a standalone wrapper for AutomationApp that allows it to be used
 * outside of the Mixcore dashboard context as a normal web application.
 */
export function WebApp({
  params,
  className = '',
  webAppConfig = {
    hideHeader: false,
    standalone: true,
    customTheme: '',
    apiBaseUrl: ''
  }
}: WebAppProps) {
  const appConfig = getAppConfig();
  
  // Enable web app mode on component mount
  React.useEffect(() => {
    // Set web app mode to true when this component is mounted
    setWebAppMode(true);
    
    // On unmount, reset to regular app mode
    return () => {
      setWebAppMode(false);
    };
  }, []);
  
  // Apply custom theme class if provided
  React.useEffect(() => {
    if (webAppConfig.customTheme) {
      document.body.classList.add(webAppConfig.customTheme);
      return () => {
        document.body.classList.remove(webAppConfig.customTheme);
      };
    }
  }, [webAppConfig.customTheme]);
  
  // Set API base URL in window context if provided
  React.useEffect(() => {
    if (webAppConfig.apiBaseUrl && webAppConfig.apiBaseUrl.length > 0) {
      window.__MIXCORE_API_BASE_URL = webAppConfig.apiBaseUrl;
    }
  }, [webAppConfig.apiBaseUrl]);

  return (
    <div className={`web-app-container ${className}`} data-app-id={appConfig.appId}>
      {/* Container for standalone web app mode */}
      <AutomationApp 
        standalone={webAppConfig.standalone} 
        params={params} 
      />
    </div>
  );
}

export default WebApp; 