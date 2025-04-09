'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import useContainerStatus from '../hooks/useContainerStatus';
import { getAppConfig } from '../app-loader';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { 
  LayoutDashboard, 
  ListTodo, 
  Settings, 
  File, 
  Menu, 
  Eye, 
  Share, 
  Maximize2, 
  Minimize2, 
  Plus, 
  Save, 
  Search, 
  X, 
  ChevronDown
} from 'lucide-react';

interface AppShellProps {
  children: React.ReactNode;
  activeView?: 'dashboard' | 'list' | 'detail' | 'settings';
  onViewChange?: (view: 'dashboard' | 'list' | 'detail' | 'settings') => void;
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
  const isFluidLayout = useContainerStatus();
  const [activeTab, setActiveTab] = useState('file');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [appHeight, setAppHeight] = useState(0);
  const appConfig = getAppConfig();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [shareTooltip, setShareTooltip] = useState('');
  const { setBreadcrumbs } = useBreadcrumb();
  const [searchQuery, setSearchQuery] = useState('');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
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
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Apps', href: '/dashboard/apps' },
      { label: appConfig.displayName, href: `/dashboard/apps/${appConfig.appId}` }
    ];

    if (activeView !== 'dashboard') {
      // Add view-specific breadcrumb
      const viewLabel = activeView.charAt(0).toUpperCase() + activeView.slice(1);
      const viewPath = `/dashboard/apps/${appConfig.appId}?view=${activeView}`;
      breadcrumbs.push({ label: viewLabel, href: viewPath });
    }

    if (selectedItemId && selectedItemTitle && activeView === 'detail') {
      // Add item-specific breadcrumb
      const itemPath = `/dashboard/apps/${appConfig.appId}?view=detail&id=${selectedItemId}`;
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
  
  const handleViewChange = (view: 'dashboard' | 'list' | 'detail' | 'settings') => {
    if (onViewChange) {
      onViewChange(view);
    }
  };
  
  // Toggle container class on parent dashboard layout
  const toggleContainerClass = () => {
    const dashboardContent = document.querySelector('.dashboard-content');
    const mainContent = document.querySelector('main.flex-1');
    
    if (dashboardContent) {
      if (isFluidLayout) {
        // Switch to contained view
        dashboardContent.classList.add('container', 'mx-auto', 'max-w-7xl', 'p-4', 'md:p-6');
        if (mainContent) {
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
  
  // Copy current URL to clipboard
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
  
  // Get icon for view type
  const getViewIcon = (view: string) => {
    switch (view) {
      case 'dashboard':
        return <LayoutDashboard className="h-5 w-5" />;
      case 'list':
        return <ListTodo className="h-5 w-5" />;
      case 'detail':
        return <File className="h-5 w-5" />;
      case 'settings':
        return <Settings className="h-5 w-5" />;
      default:
        return <LayoutDashboard className="h-5 w-5" />;
    }
  };
  
  return (
    <div className={`${appConfig.appId}-app-shell flex flex-col ${isFluidLayout ? 'h-full overflow-hidden' : ''}`}>
      {/* App header with minimal, elegant design */}
      <div className="app-header bg-background flex flex-col border-b">
        {/* Title bar with app name and controls - hidden on larger screens as it appears in the dashboard header */}
        <div className="md:hidden flex items-center justify-between px-4 py-2">
          <div className="flex items-center">
            <button 
              className="mr-2 rounded-md p-1 hover:bg-accent"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5 text-muted-foreground" />
            </button>
            <h1 className="text-lg font-medium">{appConfig.displayName}</h1>
          </div>
          <div className="flex items-center gap-2">
            <button 
              className="text-xs px-3 py-1.5 rounded-md flex items-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              onClick={copyDeepLink}
              aria-label="Share"
            >
              <Share className="h-4 w-4 mr-1" />
              Share
              {shareTooltip && (
                <span className="absolute mt-8 text-xs bg-popover text-popover-foreground px-2 py-1 rounded shadow-lg">
                  {shareTooltip}
                </span>
              )}
            </button>
            <button 
              className="text-xs px-3 py-1.5 rounded-md flex items-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              onClick={toggleContainerClass}
              aria-label={isFluidLayout ? "Switch to contained view" : "Switch to full width view"}
            >
              {isFluidLayout ? (
                <Minimize2 className="h-4 w-4 mr-1" />
              ) : (
                <Maximize2 className="h-4 w-4 mr-1" />
              )}
              {isFluidLayout ? 'Contained' : 'Full Width'}
            </button>
          </div>
        </div>

        {/* Modern toolbar with common actions */}
        <div className="app-toolbar flex items-center justify-between border-b px-4 py-2">
          <div className="flex items-center space-x-2">
            <button className="toolbar-button">
              <Plus className="h-4 w-4 mr-1" />
              New
            </button>
            <button className="toolbar-button">
              <Save className="h-4 w-4 mr-1" />
              Save
            </button>
            <div className="hidden sm:block h-4 w-px bg-border mx-2"></div>
            <div className="hidden sm:flex items-center">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="h-9 w-[180px] sm:w-[300px] rounded-md border border-input bg-transparent pl-8 pr-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button 
                    className="absolute right-2 top-2.5 text-muted-foreground hover:text-foreground"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <button 
              className="toolbar-button"
              onClick={toggleContainerClass}
              aria-label={isFluidLayout ? "Switch to contained view" : "Switch to full width view"}
            >
              {isFluidLayout ? (
                <Minimize2 className="h-4 w-4 mr-1" />
              ) : (
                <Maximize2 className="h-4 w-4 mr-1" />
              )}
              {isFluidLayout ? 'Contained' : 'Full Width'}
            </button>
            <button 
              className="toolbar-button"
              onClick={copyDeepLink}
              aria-label="Share"
            >
              <Share className="h-4 w-4 mr-1" />
              Share
              {shareTooltip && (
                <span className="absolute mt-16 text-xs bg-popover text-popover-foreground px-2 py-1 rounded shadow-lg">
                  {shareTooltip}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* View selector tabs */}
        <div className="app-tabs flex items-center border-b overflow-x-auto no-scrollbar">
          <button
            className={`px-4 py-2 border-b-2 font-medium text-sm transition-colors ${
              activeView === 'dashboard'
                ? 'border-primary text-foreground'
                : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
            }`}
            onClick={() => handleViewChange('dashboard')}
          >
            <span className="flex items-center">
              <LayoutDashboard className="h-4 w-4 mr-2" />
              Dashboard
            </span>
          </button>
          <button
            className={`px-4 py-2 border-b-2 font-medium text-sm transition-colors ${
              activeView === 'list'
                ? 'border-primary text-foreground'
                : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
            }`}
            onClick={() => handleViewChange('list')}
          >
            <span className="flex items-center">
              <ListTodo className="h-4 w-4 mr-2" />
              List
            </span>
          </button>
          <button
            className={`px-4 py-2 border-b-2 font-medium text-sm transition-colors ${
              activeView === 'settings'
                ? 'border-primary text-foreground'
                : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
            }`}
            onClick={() => handleViewChange('settings')}
          >
            <span className="flex items-center">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </span>
          </button>
        </div>
      </div>
      
      {/* Main content area with optional sidebar */}
      <div className={`app-content flex ${isFluidLayout ? 'flex-1 overflow-hidden' : ''}`}>
        {/* Sidebar - controlled by sidebarOpen state */}
        <div className={`app-sidebar ${sidebarOpen ? 'w-64' : 'w-0 sm:w-16'} border-r flex-shrink-0 transition-all duration-300 overflow-hidden ${showMobileMenu ? 'block absolute z-50 h-full bg-background sm:relative' : 'hidden sm:block'}`}>
          <div className="flex flex-col h-full">
            {/* Sidebar header */}
            <div className="p-4 border-b flex items-center justify-between">
              <h2 className={`font-medium truncate ${sidebarOpen ? 'block' : 'hidden'}`}>
                Navigation
              </h2>
              <button 
                className="p-1 rounded-md hover:bg-accent text-muted-foreground"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
              >
                {sidebarOpen ? (
                  <ChevronDown className="h-5 w-5 transform rotate-90" />
                ) : (
                  <ChevronDown className="h-5 w-5 transform -rotate-90" />
                )}
              </button>
            </div>
            
            {/* Sidebar navigation */}
            <nav className="flex-1 p-2 overflow-y-auto">
              <div className="space-y-1">
                <button
                  className={`w-full flex items-center px-3 py-2 rounded-md ${
                    activeView === 'dashboard'
                      ? 'bg-accent text-accent-foreground'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                  onClick={() => handleViewChange('dashboard')}
                >
                  <LayoutDashboard className="h-5 w-5 mr-3 flex-shrink-0" />
                  <span className={`truncate ${sidebarOpen ? 'block' : 'hidden'}`}>Dashboard</span>
                </button>
                <button
                  className={`w-full flex items-center px-3 py-2 rounded-md ${
                    activeView === 'list'
                      ? 'bg-accent text-accent-foreground'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                  onClick={() => handleViewChange('list')}
                >
                  <ListTodo className="h-5 w-5 mr-3 flex-shrink-0" />
                  <span className={`truncate ${sidebarOpen ? 'block' : 'hidden'}`}>List View</span>
                </button>
                <button
                  className={`w-full flex items-center px-3 py-2 rounded-md ${
                    activeView === 'settings'
                      ? 'bg-accent text-accent-foreground'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                  onClick={() => handleViewChange('settings')}
                >
                  <Settings className="h-5 w-5 mr-3 flex-shrink-0" />
                  <span className={`truncate ${sidebarOpen ? 'block' : 'hidden'}`}>Settings</span>
                </button>
              </div>
            </nav>

            {/* Sidebar footer */}
            <div className="p-4 border-t mt-auto">
              <div className={`text-xs text-muted-foreground ${sidebarOpen ? 'block' : 'hidden'}`}>
                <p>{appConfig.displayName}</p>
                <p className="mt-1">v{appConfig.version}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main content */}
        <div className={`app-main flex-1 overflow-auto p-4 ${showMobileMenu ? 'hidden sm:block' : 'block'}`} style={isFluidLayout ? { height: appHeight } : {}}>
          {/* Mobile search bar - shown only on small screens */}
          <div className="sm:hidden mb-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                placeholder="Search..."
                className="h-9 w-full rounded-md border border-input bg-transparent pl-8 pr-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  className="absolute right-2 top-2.5 text-muted-foreground hover:text-foreground"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
          
          {/* Context-specific header for detail view */}
          {activeView === 'detail' && selectedItemId && (
            <div className="mb-4 p-4 border rounded-lg bg-card">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <File className="h-5 w-5 mr-2 text-primary" />
                  <h2 className="text-lg font-medium">{selectedItemTitle || `Item ${selectedItemId}`}</h2>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-1 rounded-md hover:bg-accent text-muted-foreground">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="p-1 rounded-md hover:bg-accent text-muted-foreground">
                    <Save className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {/* Main content children */}
          {children}
        </div>
      </div>
    </div>
  );
}

export default AppShell; 