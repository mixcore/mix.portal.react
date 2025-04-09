'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import AppShell from './layouts/AppShell';
import Dashboard from './components/Dashboard';
import useContainerStatus from './hooks/useContainerStatus';
import './app-globals.css'; // Import app-specific styles
import { initializeApp, getAppConfig } from './app-loader';

// Define possible views for the app
type ViewType = 'dashboard' | 'list' | 'detail' | 'settings';

export interface MiniAppProps {
  // Define app-specific props
  standalone?: boolean;
}

export function MiniApp(props: MiniAppProps) {
  // Router and URL parameters
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // Get view from URL parameters
  const viewParam = searchParams.get('view') as ViewType | null;
  const itemIdParam = searchParams.get('id');
  
  // Get app config
  const appConfig = getAppConfig();
  
  // Set initial view based on URL parameter or config
  const getInitialView = (): ViewType => {
    if (viewParam && ['dashboard', 'list', 'detail', 'settings'].includes(viewParam)) {
      return viewParam as ViewType;
    }
    return 'dashboard';
  };
  
  const [activeView, setActiveView] = useState<ViewType>(getInitialView());
  const [selectedItemId, setSelectedItemId] = useState<string | null>(itemIdParam || null);
  const isFluidLayout = useContainerStatus();
  const [isInitialized, setIsInitialized] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  
  // Update URL when view or item ID changes
  useEffect(() => {
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
    window.history.replaceState({}, '', newUrl);
  }, [activeView, selectedItemId, pathname, searchParams]);
  
  // Sync with URL parameters when they change
  useEffect(() => {
    if (viewParam && viewParam !== activeView) {
      setActiveView(viewParam as ViewType);
    }
    
    if (itemIdParam !== selectedItemId) {
      setSelectedItemId(itemIdParam);
      
      // If item ID is set but view isn't detail, update view
      if (itemIdParam && activeView !== 'detail') {
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
    setSelectedItemId(itemId);
    setActiveView('detail');
  };
  
  // Handle view change
  const handleViewChange = (viewType: ViewType) => {
    setActiveView(viewType);
    
    // If changing away from detail view, clear selected item
    if (viewType !== 'detail') {
      setSelectedItemId(null);
    }
  };
  
  // Set body class for fluid layout when this app is active
  useEffect(() => {
    const body = document.body;
    const shouldUseFluidLayout = appConfig.ui.layout.fluid || isFluidLayout;
    
    if (shouldUseFluidLayout) {
      body.classList.add(`${appConfig.appId}-app-active`);
    } else {
      body.classList.remove(`${appConfig.appId}-app-active`);
    }
    
    return () => {
      body.classList.remove(`${appConfig.appId}-app-active`);
    };
  }, [isFluidLayout, appConfig.ui.layout.fluid, appConfig.appId]);
  
  // Handle retry initialization
  const handleRetryInitialization = () => {
    localStorage.removeItem(`mixcore_${appConfig.appId}_initialized`);
    setIsLoading(true);
    setIsInitialized(true);
  };
  
  // Generate deep link for current view
  const getDeepLink = (view: ViewType, itemId?: string): string => {
    const baseUrl = pathname;
    const params = new URLSearchParams();
    
    params.set('view', view);
    if (itemId && view === 'detail') {
      params.set('id', itemId);
    }
    
    return `${baseUrl}?${params.toString()}`;
  };
  
  // Show loading state while app is initializing
  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center bg-background p-4">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-muted border-t-primary mb-4"></div>
          <p className="text-muted-foreground">Initializing {appConfig.displayName}...</p>
        </div>
      </div>
    );
  }
  
  // Show error state if initialization failed
  if (!isInitialized) {
    return (
      <div className="h-full flex items-center justify-center bg-background p-4">
        <div className="text-center max-w-md">
          <div className="text-destructive mb-4">
            <span className="material-icons-outlined text-4xl">error_outline</span>
          </div>
          <h3 className="text-lg font-medium text-destructive-foreground mb-2">Initialization Error</h3>
          <p className="text-muted-foreground mb-4">
            Failed to initialize the {appConfig.displayName}. This could be because the API endpoints are not yet available.
            {process.env.NODE_ENV === 'development' && (
              <span className="block mt-2 text-sm">
                Note: In development mode, we're simulating initialization. The actual API endpoints will be implemented soon.
              </span>
            )}
          </p>
          <button 
            className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
            onClick={handleRetryInitialization}
          >
            Retry
          </button>
          {process.env.NODE_ENV === 'development' && (
            <button 
              className="px-4 py-2 ml-2 bg-secondary text-secondary-foreground rounded hover:bg-secondary/90"
              onClick={() => {
                localStorage.setItem(`mixcore_${appConfig.appId}_initialized`, 'true');
                setIsInitialized(true);
              }}
            >
              Skip Initialization
            </button>
          )}
        </div>
      </div>
    );
  }
  
  // Render the appropriate view based on activeView state
  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard onItemClick={handleItemClick} />;
      case 'list':
        return (
          <div className="h-full">
            <h2 className="text-2xl font-bold mb-4">List View</h2>
            <p>This is a placeholder for the list view.</p>
          </div>
        );
      case 'detail':
        return (
          <div className="h-full">
            <h2 className="text-2xl font-bold mb-4">Detail View</h2>
            <p>Viewing item: {selectedItemId}</p>
          </div>
        );
      case 'settings':
        return (
          <div className="h-full">
            <h2 className="text-2xl font-bold mb-4">Settings</h2>
            <p>This is a placeholder for the settings view.</p>
          </div>
        );
      default:
        return <Dashboard onItemClick={handleItemClick} />;
    }
  };

  // Standalone mode has a slightly different rendering approach
  if (props.standalone) {
    return (
      <div className="h-screen flex flex-col bg-background">
        <header className="border-b bg-card p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">{appConfig.displayName}</h1>
            <nav className="flex gap-4">
              <button 
                className={`px-3 py-1 rounded ${activeView === 'dashboard' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                onClick={() => handleViewChange('dashboard')}
              >
                Dashboard
              </button>
              <button 
                className={`px-3 py-1 rounded ${activeView === 'list' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                onClick={() => handleViewChange('list')}
              >
                List
              </button>
              <button 
                className={`px-3 py-1 rounded ${activeView === 'settings' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                onClick={() => handleViewChange('settings')}
              >
                Settings
              </button>
            </nav>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-4">
          {renderView()}
        </main>
        <footer className="border-t bg-muted p-4 text-center text-sm text-muted-foreground">
          {appConfig.displayName} v{appConfig.version} | &copy; {new Date().getFullYear()} {appConfig.author.name}
        </footer>
      </div>
    );
  }
  
  // Render the main app with the AppShell
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