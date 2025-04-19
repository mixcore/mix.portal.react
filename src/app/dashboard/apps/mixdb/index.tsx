'use client';

import React, { useState, useEffect } from 'react';
import { AppShell } from './layouts/AppShell';
import { TableList } from './components/TableList';
import { TableDetail } from './components/TableDetail';
import { QueryEditor } from './components/QueryEditor';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { initializeApp } from './app-loader';
import { DatabaseProvider } from './contexts/DatabaseContext';
import { Database, FileCode, Upload, Download, Settings, Grid3X3 } from 'lucide-react';
import './app-globals.css';
import { useRouter, useSearchParams } from 'next/navigation';
import { getViewUrl, getTableNameFromSlug as getDisplayNameFromSlug } from './utils/url-helpers';
import { getTableNameFromSlug } from './config/route-mapping';

export interface MixDBAppProps {
  // Define app-specific props
  initialView?: string;
  initialTableId?: string | null;
}

export function MixDBApp(props: MixDBAppProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isInitialized, setIsInitialized] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  
  // Get view and tableId from URL params or default to 'tables'
  const activeView = searchParams.get('view') as 'tables' | 'detail' | 'query' | 'import-export' | 'settings' || props.initialView || 'tables';
  const selectedTableId = searchParams.get('tableId') || props.initialTableId || null;
  
  // Update page title based on current view and table
  useEffect(() => {
    updatePageTitle();
  }, [activeView, selectedTableId]);
  
  // Function to update page title
  const updatePageTitle = () => {
    let title = 'MixDB';
    
    switch (activeView) {
      case 'detail':
        if (selectedTableId) {
          // Get display name for title from the slug
          const displayName = getDisplayNameFromSlug(selectedTableId);
          title = `${displayName} | MixDB`;
        }
        break;
      case 'query':
        title = 'SQL Editor | MixDB';
        break;
      case 'import-export':
        title = 'Import/Export | MixDB';
        break;
      case 'settings':
        title = 'Settings | MixDB';
        break;
      default:
        title = 'Tables | MixDB';
        break;
    }
    
    // Update document title
    document.title = title;
  };

  // Initialize app if needed
  useEffect(() => {
    const appInitKey = 'mixcore_mixdb_initialized';
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
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
          <p>Initializing MixDB...</p>
        </div>
      </div>
    );
  }
  
  // Show error state
  if (!isInitialized) {
    return (
      <div className="p-6 bg-destructive/10 text-destructive rounded-md m-4">
        <h2 className="text-xl font-semibold mb-2">Initialization Error</h2>
        <p>Failed to initialize MixDB. Please try reloading the application.</p>
        <button 
          className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md"
          onClick={() => window.location.reload()}
        >
          Reload Application
        </button>
      </div>
    );
  }

  // Helper function to update URL with new view and optional tableId
  const navigateTo = (view: string, tableName?: string) => {
    // Use the URL helper to generate a friendly URL
    const url = getViewUrl(view, tableName);
    
    // Update the URL without reloading the page
    router.push(url, { scroll: false });
  };

  const handleTableClick = (tableId: string) => {
    navigateTo('detail', tableId);
  };

  const handleBackToTables = () => {
    navigateTo('tables');
  };

  const renderContent = () => {
    switch (activeView) {
      case 'detail':
        return selectedTableId ? (
          <TableDetail 
            tableName={getTableNameFromSlug(selectedTableId)} 
            onBackClick={handleBackToTables} 
          />
        ) : (
          <div className="text-center py-10">
            <p>No table selected</p>
          </div>
        );
      case 'query':
        return <QueryEditor />;
      case 'import-export':
        return (
          <div className="p-4 border rounded-md">
            <h3 className="text-lg font-medium mb-2">Import & Export</h3>
            <p className="text-muted-foreground">Import and export functionality coming soon</p>
          </div>
        );
      case 'settings':
        return (
          <div className="p-4 border rounded-md">
            <h3 className="text-lg font-medium mb-2">MixDB Settings</h3>
            <p className="text-muted-foreground">Settings configuration coming soon</p>
          </div>
        );
      case 'tables':
      default:
        return <TableList onTableClick={handleTableClick} />;
    }
  };

  return (
    <DatabaseProvider>
      <AppShell>
        <div className="flex flex-col h-full">
          <div className="border-b pb-2 mb-6">
            <Tabs 
              defaultValue="tables" 
              className="w-full"
              value={activeView}
              onValueChange={(value) => navigateTo(value)}
            >
              <TabsList className="grid grid-cols-5 mb-4">
                <TabsTrigger value="tables" className="flex items-center gap-2">
                  <Database className="h-4 w-4" />
                  <span className="hidden sm:inline">Tables</span>
                </TabsTrigger>
                <TabsTrigger value="query" className="flex items-center gap-2">
                  <FileCode className="h-4 w-4" />
                  <span className="hidden sm:inline">SQL Editor</span>
                </TabsTrigger>
                <TabsTrigger value="import-export" className="flex items-center gap-2">
                  <div className="flex">
                    <Upload className="h-4 w-4" />
                    <Download className="h-4 w-4 -ml-1" />
                  </div>
                  <span className="hidden sm:inline">Import/Export</span>
                </TabsTrigger>
                <TabsTrigger value="storage" className="flex items-center gap-2">
                  <Grid3X3 className="h-4 w-4" />
                  <span className="hidden sm:inline">Storage</span>
                </TabsTrigger>
                <TabsTrigger value="settings" className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  <span className="hidden sm:inline">Settings</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          <div className="flex-grow overflow-auto">
            {renderContent()}
          </div>
        </div>
      </AppShell>
    </DatabaseProvider>
  );
}

// Default export for dynamic import
export default MixDBApp; 