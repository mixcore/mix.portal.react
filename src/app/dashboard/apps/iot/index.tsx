'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import AppShell from './layouts/AppShell';
import Dashboard from './components/Dashboard';
import DeviceList from './components/DeviceList';
import DeviceDetail from './components/DeviceDetail';
import AutomationRules from './components/AutomationRules';
import Settings from './components/Settings';
import Analytics from './components/Analytics';
import useContainerStatus from './hooks/useContainerStatus';
import './app-globals.css'; // Import app-specific styles
import { initializeApp, getAppConfig } from './app-loader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, RefreshCw, ArrowRight, Wifi } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

// Define possible views for the app
type ViewType = 'dashboard' | 'devices' | 'device-detail' | 'automation' | 'analytics' | 'settings';

export interface IotAppProps {
  standalone?: boolean;
  params?: Record<string, any>;
}

export function IotApp(props: IotAppProps) {
  // Router and URL parameters
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // Get view from URL parameters or from params prop
  const viewParam = props.params?.view || searchParams.get('view') as ViewType | null;
  const deviceIdParam = props.params?.deviceId || searchParams.get('deviceId');
  
  // Get app config
  const appConfig = getAppConfig();
  
  // Set initial view based on URL parameter or config
  const getInitialView = (): ViewType => {
    if (viewParam && ['dashboard', 'devices', 'device-detail', 'automation', 'analytics', 'settings'].includes(viewParam as string)) {
      return viewParam as ViewType;
    }
    return 'dashboard';
  };
  
  const [activeView, setActiveView] = useState<ViewType>(getInitialView());
  const [selectedDeviceId, setSelectedDeviceId] = useState<string | null>(deviceIdParam || null);
  const isFluidLayout = useContainerStatus();
  const [isInitialized, setIsInitialized] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  
  // Update URL when view or device ID changes
  useEffect(() => {
    // Skip URL updating if using the new URL structure (params prop provided)
    if (props.params) return;
    
    // Create new URLSearchParams object
    const params = new URLSearchParams(searchParams.toString());
    
    // Set the view parameter
    params.set('view', activeView);
    
    // Set or remove device ID parameter
    if (selectedDeviceId && activeView === 'device-detail') {
      params.set('deviceId', selectedDeviceId);
    } else {
      params.delete('deviceId');
    }
    
    // Update the URL without triggering navigation
    const newUrl = `${pathname}?${params.toString()}`;
    window.history.replaceState({}, '', newUrl);
  }, [activeView, selectedDeviceId, pathname, searchParams, props.params]);
  
  // Sync with URL parameters when they change
  useEffect(() => {
    if (viewParam && viewParam !== activeView) {
      setActiveView(viewParam as ViewType);
    }
    
    if (deviceIdParam !== selectedDeviceId) {
      setSelectedDeviceId(deviceIdParam);
      
      // If device ID is set but view isn't device-detail, update view
      if (deviceIdParam && activeView !== 'device-detail') {
        setActiveView('device-detail');
      }
    }
  }, [viewParam, deviceIdParam, activeView, selectedDeviceId]);
  
  // Initialize app if needed
  useEffect(() => {
    const appInitKey = `mixcore_${appConfig.appId}_initialized`;
    const isAppInitialized = localStorage.getItem(appInitKey) === 'true';
    
    const handleInitialization = async () => {
      // If already initialized or currently initializing, skip
      if (isAppInitialized || isLoading) return;
      
      try {
        setIsLoading(true);
        const success = await initializeApp();
        
        if (success) {
          localStorage.setItem(appInitKey, 'true');
          setIsInitialized(true);
        } else {
          setIsInitialized(false);
          // Only clear initialization flag in development to allow retries
          if (process.env.NODE_ENV === 'development') {
            localStorage.removeItem(appInitKey);
          }
        }
      } catch (error) {
        console.error('Error during app initialization:', error);
        setIsInitialized(false);
        // Only clear initialization flag in development to allow retries
        if (process.env.NODE_ENV === 'development') {
          localStorage.removeItem(appInitKey);
        }
      } finally {
        setIsLoading(false);
      }
    };
    
    // Handle initial load
    handleInitialization();
    
    // Clean up (if the component unmounts during initialization)
    return () => {
      if (isLoading) {
        console.log('Initialization interrupted: component unmounted');
      }
    };
  }, [isLoading, appConfig.appId]);
  
  // Handle device selection
  const handleDeviceClick = (deviceId: string) => {
    setSelectedDeviceId(deviceId);
    setActiveView('device-detail');
  };
  
  // Handle view change
  const handleViewChange = (viewType: ViewType) => {
    console.log('Changing view to:', viewType);
    setActiveView(viewType);
    
    // If changing away from device detail view, clear selected device
    if (viewType !== 'device-detail') {
      setSelectedDeviceId(null);
    }
    
    // Update URL params if using legacy URL structure
    if (!props.params) {
      const params = new URLSearchParams(searchParams.toString());
      params.set('view', viewType);
      
      if (viewType !== 'device-detail') {
        params.delete('deviceId');
      }
      
      const newUrl = `${pathname}?${params.toString()}`;
      window.history.replaceState({}, '', newUrl);
    }
  };
  
  // Set body class for fluid layout when this app is active
  useEffect(() => {
    const body = document.body;
    const shouldUseFluidLayout = appConfig.ui?.layout?.fluid || isFluidLayout;
    
    if (shouldUseFluidLayout) {
      body.classList.add(`${appConfig.appId}-app-active`);
    } else {
      body.classList.remove(`${appConfig.appId}-app-active`);
    }
    
    return () => {
      body.classList.remove(`${appConfig.appId}-app-active`);
    };
  }, [isFluidLayout, appConfig.ui?.layout?.fluid, appConfig.appId]);
  
  // Handle retry initialization
  const handleRetryInitialization = () => {
    localStorage.removeItem(`mixcore_${appConfig.appId}_initialized`);
    setIsLoading(true);
    setIsInitialized(true);
  };
  
  // Generate deep link for current view with new URL structure
  const getDeepLink = (view: ViewType, deviceId?: string): string => {
    const baseUrl = `/dashboard/apps/${appConfig.appId}/${view}`;
    const params = new URLSearchParams();
    
    if (deviceId && view === 'device-detail') {
      params.set('deviceId', deviceId);
    }
    
    const queryString = params.toString();
    return queryString ? `${baseUrl}?${queryString}` : baseUrl;
  };
  
  // Show loading state while app is initializing
  if (isLoading) {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center bg-background p-6">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-2 text-center">
            <Skeleton className="h-12 w-12 rounded-full mx-auto" />
            <Skeleton className="h-6 w-48 mx-auto" />
            <Skeleton className="h-4 w-64 mx-auto" />
          </div>
          
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <Skeleton className="h-5 w-40" />
              </CardHeader>
              <CardContent className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </CardContent>
            </Card>
            
            <div className="text-center text-sm text-muted-foreground animate-pulse">
              Initializing {appConfig.displayName}...
              <RefreshCw className="h-4 w-4 ml-2 inline animate-spin" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Show error state if initialization failed
  if (!isInitialized) {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center bg-background p-6">
        <div className="w-full max-w-md">
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Initialization Error</AlertTitle>
            <AlertDescription>
              Failed to initialize the {appConfig.displayName}. This could be because the API endpoints are not yet available.
            </AlertDescription>
          </Alert>
          
          <Card>
            <CardHeader>
              <CardTitle>{appConfig.displayName}</CardTitle>
              <CardDescription>
                {process.env.NODE_ENV === 'development' && (
                  "In development mode, you can retry initialization or skip this step for testing purposes."
                )}
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
              <Button 
                variant="outline"
                onClick={handleRetryInitialization}>
                Retry
              </Button>
              <Button onClick={() => setIsInitialized(true)}>
                Continue Anyway
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    );
  }
  
  // Render the appropriate view
  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard onDeviceClick={handleDeviceClick} />;
      case 'devices':
        return <DeviceList onDeviceClick={handleDeviceClick} />;
      case 'device-detail':
        return <DeviceDetail deviceId={selectedDeviceId} />;
      case 'automation':
        return <AutomationRules onDeviceClick={handleDeviceClick} />;
      case 'analytics':
        return <Analytics onDeviceClick={handleDeviceClick} />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard onDeviceClick={handleDeviceClick} />;
    }
  };
  
  // Main app render
  return (
    <AppShell
      activeView={activeView}
      onViewChange={handleViewChange}
      selectedDeviceId={selectedDeviceId}
      standalone={props.standalone}
    >
      {renderView()}
    </AppShell>
  );
}

export default IotApp; 