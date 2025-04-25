'use client';

import React, { useState, useEffect, lazy, useRef, Suspense } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import AppShell from './layouts/AppShell';
import useContainerStatus from './hooks/useContainerStatus';
import './app-globals.css'; // Import app-specific styles
import { initializeApp, getAppConfig } from './app-loader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, RefreshCw, ArrowRight } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

// Define possible views for the app
type ViewType = 'dashboard' | 'list' | 'detail' | 'settings' | 'basicGrid' | 'kanban' | 'calendar' | 'canvas' | 'workflow';

// Create lazy loaded view components
const DashboardView = lazy(() => import('./views/DashboardView'));
const ListView = lazy(() => import('./views/ListView'));
const DetailView = lazy(() => import('./views/DetailView'));
const SettingsView = lazy(() => import('./views/SettingsView'));
const BasicGridView = lazy(() => import('./views/BasicGridView'));
const KanbanView = lazy(() => import('./views/KanbanView'));
const CalendarView = lazy(() => import('./views/CalendarView'));
const CanvasView = lazy(() => import('./views/CanvasView'));
const WorkflowView = lazy(() => import('./views/WorkflowView'));

// Common loading fallback component
const LoadingFallback = ({ viewName }: { viewName: string }) => (
  <div className="flex items-center justify-center p-12">
    Loading {viewName} view...
  </div>
);

export interface MiniAppProps {
  standalone?: boolean;
  params?: Record<string, any>;
}

export function MiniApp(props: MiniAppProps) {
  // Router and URL parameters
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // Get view from URL parameters or from params prop
  const viewParam = props.params?.view || searchParams.get('view') as ViewType | null;
  const itemIdParam = props.params?.id || searchParams.get('id');
  
  // Get app config
  const appConfig = getAppConfig();
  
  // Set initial view based on URL parameter or config
  const getInitialView = (): ViewType => {
    if (viewParam && ['dashboard', 'list', 'detail', 'settings', 'basicGrid', 'kanban', 'calendar', 'canvas', 'workflow'].includes(viewParam as string)) {
      return viewParam as ViewType;
    }
    return 'dashboard';
  };
  
  const [activeView, setActiveView] = useState<ViewType>(getInitialView());
  const [selectedItemId, setSelectedItemId] = useState<string | null>(itemIdParam || null);
  const isFluidLayout = useContainerStatus();
  const [isInitialized, setIsInitialized] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const isManualChange = useRef(false);
  
  // Update URL when view or item ID changes
  useEffect(() => {
    console.log('MiniApp: URL update effect triggered');
    console.log('MiniApp: Current activeView:', activeView);
    console.log('MiniApp: Current selectedItemId:', selectedItemId);
    
    // Skip URL updating if using the new URL structure (params prop provided)
    if (props.params) {
      console.log('MiniApp: URL update skipped - using params prop');
      return;
    }
    
    // Create new URLSearchParams object
    const params = new URLSearchParams(searchParams.toString());
    
    // Set the view parameter
    params.set('view', activeView);
    
    // Set or remove id parameter
    if (selectedItemId && activeView === 'detail') {
      params.set('id', selectedItemId);
    } else {
      params.delete('id');
    }
    
    // Update the URL without triggering navigation
    const newUrl = `${pathname}?${params.toString()}`;
    console.log('MiniApp: Updating URL to:', newUrl);
    window.history.replaceState({}, '', newUrl);
  }, [activeView, selectedItemId, pathname, searchParams, props.params]);
  
  // Sync with URL parameters when they change
  useEffect(() => {
    if (isManualChange.current) {
      isManualChange.current = false;
      return;
    }
    console.log('MiniApp: URL params sync effect triggered');
    console.log('MiniApp: viewParam:', viewParam);
    console.log('MiniApp: itemIdParam:', itemIdParam);
    console.log('MiniApp: Current activeView:', activeView);
    console.log('MiniApp: Current selectedItemId:', selectedItemId);
    
    if (viewParam && viewParam !== activeView) {
      console.log(`MiniApp: Syncing activeView from URL: ${viewParam}`);
      setActiveView(viewParam as ViewType);
    }
    
    if (itemIdParam !== selectedItemId) {
      console.log(`MiniApp: Syncing selectedItemId from URL: ${itemIdParam}`);
      setSelectedItemId(itemIdParam);
      
      // If item ID is set but view isn't detail, update view
      if (itemIdParam && activeView !== 'detail') {
        console.log('MiniApp: Setting view to detail based on URL item ID');
        setActiveView('detail');
      }
    }
  }, [viewParam, itemIdParam, activeView, selectedItemId]);
  
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
  
  // Handle item selection
  const handleItemClick = (itemId: string) => {
    if (itemId === 'list') {
      setActiveView('list');
      setSelectedItemId(null);
    } else {
      setSelectedItemId(itemId);
      setActiveView('detail');
    }
  };
  
  // Handle view change
  const handleViewChange = (viewType: ViewType) => {
    isManualChange.current = true;
    console.log('MiniApp: handleViewChange called with viewType:', viewType);
    console.log('MiniApp: Current activeView before change:', activeView);
    
    if (viewType === activeView) {
      console.log('MiniApp: View type is the same as current, not changing');
      return;
    }
    
    console.log('MiniApp: Setting new active view:', viewType);
    setActiveView(viewType);
    
    // If changing away from detail view, clear selected item
    if (viewType !== 'detail') {
      setSelectedItemId(null);
    }
    
    console.log('MiniApp: View change complete');
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
  const getDeepLink = (view: ViewType, itemId?: string): string => {
    const baseUrl = `/dashboard/apps/${appConfig.appId}/${view}`;
    const params = new URLSearchParams();
    
    if (itemId && view === 'detail') {
      params.set('id', itemId);
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
                variant="default"
                onClick={handleRetryInitialization}
                className="gap-2"
              >
                <RefreshCw className="h-4 w-4" />
                Retry
              </Button>
              {process.env.NODE_ENV === 'development' && (
                <Button 
                  variant="outline"
                  onClick={() => {
                    localStorage.setItem(`mixcore_${appConfig.appId}_initialized`, 'true');
                    setIsInitialized(true);
                  }}
                  className="gap-2"
                >
                  Skip Initialization
                  <ArrowRight className="h-4 w-4" />
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>
    );
  }
  
  // Render the active view
  const renderView = () => {
    console.log('MiniApp: renderView called with activeView:', activeView);
    
    switch (activeView) {
      case 'dashboard':
        console.log('MiniApp: Rendering Dashboard view');
        return (
          <Suspense fallback={<LoadingFallback viewName="dashboard" />}>
            <DashboardView onItemClick={handleItemClick} />
          </Suspense>
        );
      case 'list':
        console.log('MiniApp: Rendering List view');
        return (
          <Suspense fallback={<LoadingFallback viewName="list" />}>
            <ListView standalone={props.standalone} onItemClick={handleItemClick} />
          </Suspense>
        );
      case 'detail':
        console.log('MiniApp: Rendering Detail view');
        return (
          <Suspense fallback={<LoadingFallback viewName="detail" />}>
            <DetailView itemId={selectedItemId} />
          </Suspense>
        );
      case 'settings':
        console.log('MiniApp: Rendering Settings view');
        return (
          <Suspense fallback={<LoadingFallback viewName="settings" />}>
            <SettingsView />
          </Suspense>
        );
      case 'basicGrid':
        console.log('MiniApp: Rendering BasicGrid view');
        return (
          <Suspense fallback={<LoadingFallback viewName="grid" />}>
            <BasicGridView onItemClick={handleItemClick} />
          </Suspense>
        );
      case 'kanban':
        console.log('MiniApp: Rendering Kanban view');
        return (
          <Suspense fallback={<LoadingFallback viewName="kanban board" />}>
            <KanbanView onCardClick={handleItemClick} />
          </Suspense>
        );
      case 'calendar':
        console.log('MiniApp: Rendering Calendar view');
        return (
          <Suspense fallback={<LoadingFallback viewName="calendar" />}>
            <CalendarView onEventClick={handleItemClick} />
          </Suspense>
        );
      case 'canvas':
        console.log('MiniApp: Rendering Canvas view');
        return (
          <Suspense fallback={<LoadingFallback viewName="canvas editor" />}>
            <CanvasView />
          </Suspense>
        );
      case 'workflow':
        console.log('MiniApp: Rendering Workflow view');
        return (
          <Suspense fallback={<LoadingFallback viewName="workflow editor" />}>
            <WorkflowView />
          </Suspense>
        );
      default:
        console.log('MiniApp: Rendering default Dashboard view (activeView not recognized)');
        return (
          <Suspense fallback={<LoadingFallback viewName="dashboard" />}>
            <DashboardView onItemClick={handleItemClick} />
          </Suspense>
        );
    }
  };
  
  // Main app rendering
  return (
    <AppShell
      activeView={activeView}
      onViewChange={handleViewChange}
      selectedItemId={selectedItemId}
      selectedItemTitle={selectedItemId ? `Item ${selectedItemId}` : null}
    >
      {renderView()}
    </AppShell>
  );
}

export default MiniApp; 