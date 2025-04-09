'use client';

import React, { useState, useEffect } from 'react';
import './app-globals.css';
import { initializeApp } from './app-loader';

export interface WorkflowAppProps {
  // Define app-specific props
}

export function WorkflowApp(props: WorkflowAppProps) {
  const [isInitialized, setIsInitialized] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  
  // Initialize app if needed
  useEffect(() => {
    const appInitKey = 'mixcore_workflow_initialized';
    const isAppInitialized = localStorage.getItem(appInitKey) === 'true';
    
    if (!isAppInitialized) {
      setIsLoading(true);
      initializeApp()
        .then(success => {
          if (success) {
            localStorage.setItem(appInitKey, 'true');
          }
          setIsInitialized(success);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error initializing app:', error);
          setIsInitialized(false);
          setIsLoading(false);
        });
    }
  }, []);
  
  // Show loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  // Show error state
  if (!isInitialized) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-red-500">
        <h2 className="text-xl font-bold">Initialization Error</h2>
        <p>Unable to initialize the Workflow Automation app. Please try again later.</p>
      </div>
    );
  }
  
  return (
    <div className="workflow-app-shell">
      <div className="workflow-app-header">
        <h1 className="text-2xl font-bold">Workflow Automation</h1>
      </div>
      
      <div className="workflow-app-content">
        <div className="workflow-app-container">
          <h2 className="text-xl mb-4">Workflow Automation</h2>
          <p>Design and automate your workflows with a visual editor</p>
          
          {/* Main navigation/dashboard view will go here */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <div className="bg-card p-4 rounded shadow">
              <h3 className="font-medium">Recent Workflows</h3>
              {/* Content here */}
              <p className="text-sm text-muted-foreground mt-2">No recent workflows</p>
            </div>
            
            <div className="bg-card p-4 rounded shadow">
              <h3 className="font-medium">Templates</h3>
              {/* Content here */}
              <p className="text-sm text-muted-foreground mt-2">No templates available</p>
            </div>
            
            <div className="bg-card p-4 rounded shadow">
              <h3 className="font-medium">Activity</h3>
              {/* Content here */}
              <p className="text-sm text-muted-foreground mt-2">No recent activity</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="workflow-app-footer">
        <p className="text-sm text-muted-foreground">Workflow Automation Engine v1.0</p>
      </div>
    </div>
  );
}

// Default export for dynamic import
export default WorkflowApp; 