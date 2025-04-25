'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import useContainerStatus from '../hooks/useContainerStatus';
import { getAppConfig } from '../app-loader';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { 
  MobileHeader, 
  MenubarHeader, 
  Sidebar, 
  MainContent,
  ChatPanel,
  ViewType
} from './components';
import { MessageSquare } from 'lucide-react';

interface AppShellProps {
  children: React.ReactNode;
  activeView?: ViewType;
  onViewChange?: (view: ViewType) => void;
  selectedItemId?: string | null;
  selectedItemTitle?: string | null;
}

export function AppShell({ 
  children, 
  activeView = 'dashboard', 
  onViewChange,
  selectedItemId,
  selectedItemTitle
}: AppShellProps) {
  console.log('AppShell rendering with props:', { activeView, selectedItemId, selectedItemTitle });
  
  // State hooks
  const isFluidLayout = useContainerStatus();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [chatPanelOpen, setChatPanelOpen] = useState(false);
  const [appHeight, setAppHeight] = useState(0);
  const [shareTooltip, setShareTooltip] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Utility hooks
  const appConfig = getAppConfig();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { setBreadcrumbs } = useBreadcrumb();
  
  // Log when activeView changes
  useEffect(() => {
    console.log('AppShell: activeView prop changed to:', activeView);
  }, [activeView]);
  
  // Set app context for the dashboard header
  useEffect(() => {
    // Define context info for the header
    const appContextInfo = {
      id: appConfig.appId,
      name: appConfig.displayName,
      icon: appConfig.icon
    };
    
    // Dispatch event to update the dashboard context
    const event = new CustomEvent('mixcore:context:set', { 
      detail: { context: appContextInfo } 
    });
    window.dispatchEvent(event);
    
    return () => {
      // Reset context when unmounting
      const resetEvent = new CustomEvent('mixcore:context:reset');
      window.dispatchEvent(resetEvent);
    };
  }, [appConfig.appId, appConfig.displayName, appConfig.icon]);
  
  // Update breadcrumbs when view or project changes
  useEffect(() => {
    const breadcrumbs = [
      { label: appConfig.displayName, href: `/apps/${appConfig.appId}` }
    ];

    if (activeView !== 'dashboard') {
      // Add view-specific breadcrumb
      const viewLabel = activeView.charAt(0).toUpperCase() + activeView.slice(1);
      const viewPath = `/apps/${appConfig.appId}?view=${activeView}`;
      breadcrumbs.push({ label: viewLabel, href: viewPath });
    }

    if (selectedItemId && selectedItemTitle && activeView === 'detail') {
      // Add item-specific breadcrumb
      const itemPath = `/apps/${appConfig.appId}?view=detail&id=${selectedItemId}`;
      breadcrumbs.push({ label: selectedItemTitle, href: itemPath });
    }

    // Create a contextual indicator that would normally appear in the breadcrumb-style path indicator
    const contextualInfo = {
      icon: activeView === 'dashboard' ? 'layout-dashboard' : 
            activeView === 'list' ? 'list' : 
            activeView === 'detail' ? 'file' : 'settings',
      viewLabel: activeView.charAt(0).toUpperCase() + activeView.slice(1),
      itemTitle: selectedItemTitle
    };

    // Update the dashboard context with view information
    const appContextInfo = {
      id: appConfig.appId,
      name: appConfig.displayName,
      icon: appConfig.icon,
      contextualInfo: contextualInfo
    };
    
    // Dispatch event to update the dashboard context with contextual information
    const contextEvent = new CustomEvent('mixcore:context:set', { 
      detail: { context: appContextInfo } 
    });
    window.dispatchEvent(contextEvent);

    // Update the dashboard breadcrumbs
    setBreadcrumbs(breadcrumbs);
  }, [activeView, selectedItemId, selectedItemTitle, setBreadcrumbs, appConfig.appId, appConfig.displayName, appConfig.icon]);
  
  // Handler for view changes
  const handleViewChange = (view: ViewType) => {
    console.log('AppShell: handleViewChange called with view:', view);
    console.log('AppShell: Current activeView is:', activeView);
    console.log('AppShell: Valid view types are:', ['dashboard', 'list', 'detail', 'settings', 'basicGrid', 'kanban', 'calendar', 'canvas', 'workflow'].includes(view) ? 'Valid view type' : 'INVALID VIEW TYPE');
    
    if (onViewChange) {
      console.log('AppShell: Calling parent onViewChange');
      onViewChange(view);
    } else {
      console.warn('AppShell: No onViewChange prop provided by parent component');
    }
  };
  
  // Toggle container class on parent dashboard layout
  const toggleContainerClass = () => {
    const dashboardContent = document.querySelector('.dashboard-content');
    const mainContent = document.querySelector('main.flex-1');
    
    if (dashboardContent) {
      if (isFluidLayout) {
        // Switch to contained view
        // dashboardContent.classList.add('container', 'mx-auto', 'max-w-7xl', 'p-4', 'md:p-6');
        if (mainContent) {
          mainContent.classList.add('container', 'mx-auto', 'max-w-7xl', 'p-4', 'md:p-6');
          mainContent.classList.add('overflow-auto');
          mainContent.classList.remove('overflow-hidden');
          mainContent.setAttribute('data-app-view', 'default');
        }
      } else {
        // Switch to fluid view
        dashboardContent.classList.remove('container', 'mx-auto', 'max-w-7xl', 'p-4', 'md:p-6');
        if (mainContent) {
          mainContent.classList.remove('overflow-auto');
          mainContent.classList.add('overflow-hidden');
          mainContent.setAttribute('data-app-view', `${appConfig.appId}-app`);
        }
      }
    }
  };
  
  // Calculate and set the app height dynamically
  const calculateAppHeight = () => {
    const mainContent = document.querySelector('main.flex-1');
    if (mainContent) {
      const mainHeight = mainContent.clientHeight;
      // Subtract header height (toolbar + tabs - around 100px)
      const availableHeight = mainHeight - 100;
      setAppHeight(Math.max(availableHeight, 300)); // Set minimum height
    }
  };
  
  // Set initial layout when component mounts or activeView changes
  useEffect(() => {
    // Get full-screen setting from config
    const shouldUseFullScreen = appConfig.settings?.enableFullScreenByDefault;
    const shouldUseFluidLayout = appConfig.ui?.layout?.fluid;
    
    // Enable full width if configured to use fluid layout by default
    if ((shouldUseFullScreen || shouldUseFluidLayout) && !isFluidLayout) {
      toggleContainerClass();
    }
    
    // Set attribute on main content to help with styling
    const mainContent = document.querySelector('main.flex-1');
    if (mainContent && !isFluidLayout) {
      mainContent.setAttribute('data-app-view', 'default');
    } else if (mainContent && isFluidLayout) {
      mainContent.setAttribute('data-app-view', `${appConfig.appId}-app`);
    }
    
    // Calculate initial height
    calculateAppHeight();
    
    // Add resize listener
    window.addEventListener('resize', calculateAppHeight);
    
    return () => {
      window.removeEventListener('resize', calculateAppHeight);
    };
  }, [activeView, isFluidLayout, appConfig.settings, appConfig.ui, appConfig.appId]);
  
  // Generate deep link for current state
  const getDeepLink = (): string => {
    // Create a new URLSearchParams with the current parameters
    const params = new URLSearchParams(searchParams.toString());
    
    // Always include the current view
    params.set('view', activeView);
    
    // Include itemId if we're in detail view
    if (activeView === 'detail' && selectedItemId) {
      params.set('id', selectedItemId);
    } else if (params.has('id')) {
      params.delete('id');
    }
    
    // Build the full URL
    return `${window.location.origin}${pathname}?${params.toString()}`;
  };
  
  // Copy URL to clipboard
  const copyDeepLink = () => {
    const url = getDeepLink();
    navigator.clipboard.writeText(url).then(
      () => {
        setShareTooltip('Link copied!');
        setTimeout(() => setShareTooltip(''), 2000);
      },
      () => {
        setShareTooltip('Failed to copy');
        setTimeout(() => setShareTooltip(''), 2000);
      }
    );
  };
  
  return (
    <div className={`${appConfig.appId}-app-shell flex flex-col ${isFluidLayout ? 'h-full' : 'min-h-screen'}`}>
      {/* App header section */}
      <header className="app-header bg-background flex flex-col">
        {/* Mobile header */}
        <MobileHeader 
          appConfig={appConfig}
          activeView={activeView}
          isFluidLayout={isFluidLayout}
          isSidebarOpen={sidebarOpen}
          handleViewChange={handleViewChange}
          toggleContainerClass={toggleContainerClass}
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          copyDeepLink={copyDeepLink}
          shareTooltip={shareTooltip}
        />
        
        {/* Main menubar header for desktop */}
        <div className="hidden md:block">
          <MenubarHeader 
            appConfig={appConfig}
            activeView={activeView}
            isFluidLayout={isFluidLayout}
            isSidebarOpen={sidebarOpen}
            handleViewChange={handleViewChange}
            toggleContainerClass={toggleContainerClass}
            toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
            copyDeepLink={copyDeepLink}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedItemId={selectedItemId || null}
            extraActions={
              <button
                onClick={() => setChatPanelOpen(!chatPanelOpen)}
                className={`relative h-9 w-9 rounded-md p-2 flex items-center justify-center ${chatPanelOpen ? 'bg-accent' : 'hover:bg-accent/50'}`}
                title="Chat"
              >
                <MessageSquare className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-green-500"></span>
              </button>
            }
          />
        </div>
      </header>
      
      {/* Main content with sidebar */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar 
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          activeView={activeView}
          handleViewChange={handleViewChange}
        />
        
        {/* Main content area */}
        <MainContent 
          isFluidLayout={isFluidLayout}
          appHeight={appHeight}
          viewType={activeView}
        >
          {children}
        </MainContent>

        {/* Chat Panel */}
        <ChatPanel 
          isOpen={chatPanelOpen} 
          onClose={() => setChatPanelOpen(false)} 
        />
      </div>
    </div>
  );
}

export default AppShell; 