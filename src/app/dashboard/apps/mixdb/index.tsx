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

export interface MixDBAppProps {
  // Define app-specific props
}

export function MixDBApp(props: MixDBAppProps) {
  const [isInitialized, setIsInitialized] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [activeView, setActiveView] = useState<'tables' | 'detail' | 'query' | 'import-export' | 'settings'>('tables');
  const [selectedTableId, setSelectedTableId] = useState<string | null>(null);

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

  const handleTableClick = (tableId: string) => {
    setSelectedTableId(tableId);
    setActiveView('detail');
  };

  const handleBackToTables = () => {
    setSelectedTableId(null);
    setActiveView('tables');
  };

  const renderContent = () => {
    switch (activeView) {
      case 'detail':
        return selectedTableId ? (
          <TableDetail 
            tableName={selectedTableId} 
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
              onValueChange={(value) => setActiveView(value as any)}
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