'use client';

import React, { useState, useEffect } from 'react';
import { AppShell } from './layouts/AppShell';
import { TenantList } from './components/TenantList';
import { TenantDetail } from './components/TenantDetail';
import { DomainList } from './components/DomainList';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { initializeApp } from './app-loader';
import { TenantProvider } from './contexts/TenantContext';
import { Building, Globe, Settings, Upload, Download } from 'lucide-react';
import './app-globals.css';
import { useRouter, useSearchParams } from 'next/navigation';
import { getViewUrl, getDisplayNameFromSlug } from './utils/url-helpers';
import { getTenantIdFromSlug } from './config/route-mapping';

export interface TenantsAppProps {
  initialView?: string;
  initialTenantId?: string | null;
}

export function TenantsApp(props: TenantsAppProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isInitialized, setIsInitialized] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  
  // Get view and tenantId from URL params or default to 'tenants'
  const activeView = searchParams.get('view') as 'tenants' | 'detail' | 'domains' | 'import-export' | 'settings' || props.initialView || 'tenants';
  const selectedTenantId = searchParams.get('tenantId') || props.initialTenantId || null;
  
  // Update page title based on current view and tenant
  useEffect(() => {
    updatePageTitle();
  }, [activeView, selectedTenantId]);
  
  // Function to update page title
  const updatePageTitle = () => {
    let title = 'Tenants';
    
    switch (activeView) {
      case 'detail':
        if (selectedTenantId) {
          // Get display name for title from the slug
          const displayName = getDisplayNameFromSlug(selectedTenantId);
          title = `${displayName} | Tenants`;
        }
        break;
      case 'domains':
        title = 'Domains | Tenants';
        break;
      case 'import-export':
        title = 'Import/Export | Tenants';
        break;
      case 'settings':
        title = 'Settings | Tenants';
        break;
      default:
        title = 'Tenants | Mixcore';
        break;
    }
    
    // Update document title
    document.title = title;
  };

  // Initialize app if needed
  useEffect(() => {
    const appInitKey = 'mixcore_tenants_initialized';
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
          <p>Initializing Tenants App...</p>
        </div>
      </div>
    );
  }
  
  // Show error state
  if (!isInitialized) {
    return (
      <div className="p-6 bg-destructive/10 text-destructive rounded-md m-4">
        <h2 className="text-xl font-semibold mb-2">Initialization Error</h2>
        <p>Failed to initialize Tenants App. Please try reloading the application.</p>
        <button 
          className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md"
          onClick={() => window.location.reload()}
        >
          Reload Application
        </button>
      </div>
    );
  }

  // Helper function to update URL with new view and optional tenantId
  const navigateTo = (view: string, tenantId?: string) => {
    // Use the URL helper to generate a friendly URL
    const url = getViewUrl(view, tenantId);
    
    // Update the URL without reloading the page
    router.push(url, { scroll: false });
  };

  const handleTenantClick = (tenantId: string) => {
    navigateTo('detail', tenantId);
  };

  const handleBackToTenants = () => {
    navigateTo('tenants');
  };

  const renderContent = () => {
    switch (activeView) {
      case 'detail':
        return selectedTenantId ? (
          <TenantDetail 
            tenantId={selectedTenantId}
            onBackClick={handleBackToTenants} 
          />
        ) : (
          <div className="text-center py-10">
            <p>No tenant selected</p>
          </div>
        );
      case 'domains':
        return <DomainList />;
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
            <h3 className="text-lg font-medium mb-2">Tenants Settings</h3>
            <p className="text-muted-foreground">Settings configuration coming soon</p>
          </div>
        );
      case 'tenants':
      default:
        return <TenantList onTenantClick={handleTenantClick} />;
    }
  };

  return (
    <TenantProvider>
      <AppShell>
        <div className="flex flex-col h-full">
          <div className="border-b pb-2 mb-6">
            <Tabs 
              defaultValue="tenants" 
              className="w-full"
              value={activeView}
              onValueChange={(value) => navigateTo(value)}
            >
              <TabsList className="grid grid-cols-4 mb-4">
                <TabsTrigger value="tenants" className="flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  <span className="hidden sm:inline">Tenants</span>
                </TabsTrigger>
                <TabsTrigger value="domains" className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  <span className="hidden sm:inline">Domains</span>
                </TabsTrigger>
                <TabsTrigger value="import-export" className="flex items-center gap-2">
                  <div className="flex">
                    <Upload className="h-4 w-4" />
                    <Download className="h-4 w-4 -ml-1" />
                  </div>
                  <span className="hidden sm:inline">Import/Export</span>
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
    </TenantProvider>
  );
}

// Default export for dynamic import
export default TenantsApp; 