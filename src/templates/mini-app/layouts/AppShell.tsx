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
  Search, 
  ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Separator } from '@/components/ui/separator';

// Define view types for type safety
type ViewType = 'dashboard' | 'list' | 'detail' | 'settings';

interface AppShellProps {
  children: React.ReactNode;
  activeView?: ViewType;
  onViewChange?: (view: ViewType) => void;
  selectedItemId?: string | null;
  selectedItemTitle?: string | null;
}

// Header component for mobile view
const MobileHeader = ({ 
  appConfig, 
  activeView, 
  isFluidLayout, 
  handleViewChange, 
  toggleContainerClass,
  copyDeepLink,
  shareTooltip
}: { 
  appConfig: any; 
  activeView: ViewType;
  isFluidLayout: boolean;
  handleViewChange: (view: ViewType) => void;
  toggleContainerClass: () => void;
  copyDeepLink: () => void;
  shareTooltip: string;
}) => (
  <div className="md:hidden flex items-center justify-between px-4 py-2 border-b">
    <div className="flex items-center">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[240px] sm:w-[300px]">
          <nav className="flex flex-col gap-4 mt-4">
            <Button
              variant={activeView === 'dashboard' ? 'default' : 'ghost'}
              className="justify-start"
              onClick={() => handleViewChange('dashboard')}
            >
              <LayoutDashboard className="mr-2 h-5 w-5" />
              Dashboard
            </Button>
            <Button
              variant={activeView === 'list' ? 'default' : 'ghost'}
              className="justify-start"
              onClick={() => handleViewChange('list')}
            >
              <ListTodo className="mr-2 h-5 w-5" />
              List View
            </Button>
            <Button
              variant={activeView === 'settings' ? 'default' : 'ghost'}
              className="justify-start"
              onClick={() => handleViewChange('settings')}
            >
              <Settings className="mr-2 h-5 w-5" />
              Settings
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
      <span className="text-lg font-medium ml-2">{appConfig.displayName}</span>
    </div>
    <div className="flex items-center gap-1">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" onClick={toggleContainerClass}>
              {isFluidLayout ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
            </Button>
          </TooltipTrigger>
          <TooltipContent>{isFluidLayout ? 'Exit fullscreen' : 'Fullscreen'}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" onClick={copyDeepLink}>
              <Share className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>{shareTooltip || 'Copy link'}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  </div>
);

// Main toolbar component with tabs and actions
const Toolbar = ({ 
  activeView, 
  handleViewChange, 
  selectedItemId,
  searchQuery,
  setSearchQuery
}: { 
  activeView: ViewType;
  handleViewChange: (view: ViewType) => void;
  selectedItemId: string | null;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}) => (
  <div className="flex flex-col sm:flex-row items-center justify-between gap-2 px-4 py-2 border-b">
    {/* Main view tabs */}
    <Tabs value={activeView} onValueChange={(value) => handleViewChange(value as ViewType)} className="w-full">
      <TabsList className="h-9 w-full md:w-auto grid grid-cols-3 md:grid-cols-4">
        <TabsTrigger value="dashboard" className="flex items-center gap-1">
          <LayoutDashboard className="h-4 w-4" />
          <span className="hidden sm:inline-block">Dashboard</span>
        </TabsTrigger>
        <TabsTrigger value="list" className="flex items-center gap-1">
          <ListTodo className="h-4 w-4" />
          <span className="hidden sm:inline-block">List</span>
        </TabsTrigger>
        <TabsTrigger value="detail" disabled={!selectedItemId} className="flex items-center gap-1">
          <File className="h-4 w-4" />
          <span className="hidden sm:inline-block">Detail</span>
        </TabsTrigger>
        <TabsTrigger value="settings" className="flex items-center gap-1">
          <Settings className="h-4 w-4" />
          <span className="hidden sm:inline-block">Settings</span>
        </TabsTrigger>
      </TabsList>
    </Tabs>
    
    {/* Action buttons */}
    <div className="flex items-center gap-2">
      <div className="relative w-full md:w-auto">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search" 
          placeholder="Search..." 
          className="w-full md:w-[180px] pl-8 h-9"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <div className="flex items-center gap-1">
        <Button variant="outline" size="sm" className="h-9 hidden md:flex gap-1">
          <Eye className="h-4 w-4" />
          <span>Preview</span>
        </Button>
        <Button variant="default" size="sm" className="h-9 gap-1">
          <Plus className="h-4 w-4" />
          <span className="hidden sm:inline-block">Create</span>
        </Button>
      </div>
    </div>
  </div>
);

// Sidebar component
const Sidebar = ({ 
  sidebarOpen, 
  setSidebarOpen, 
  activeView, 
  handleViewChange 
}: { 
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  activeView: ViewType;
  handleViewChange: (view: ViewType) => void;
}) => (
  <div className={`hidden md:block app-sidebar bg-background border-r transition-all duration-300 ${sidebarOpen ? 'w-[240px]' : 'w-[60px]'}`}>
    <div className="p-3 border-b">
      <Button variant="ghost" size="sm" className="w-full justify-start" onClick={() => setSidebarOpen(!sidebarOpen)}>
        <Menu className="h-5 w-5 mr-2" />
        {sidebarOpen && <span>Toggle sidebar</span>}
      </Button>
    </div>
    <nav className="p-3 flex flex-col gap-1">
      <Button
        variant={activeView === 'dashboard' ? 'secondary' : 'ghost'}
        size="sm"
        className="justify-start"
        onClick={() => handleViewChange('dashboard')}
      >
        <LayoutDashboard className="h-5 w-5 mr-2" />
        {sidebarOpen && <span>Dashboard</span>}
      </Button>
      <Button
        variant={activeView === 'list' ? 'secondary' : 'ghost'}
        size="sm"
        className="justify-start"
        onClick={() => handleViewChange('list')}
      >
        <ListTodo className="h-5 w-5 mr-2" />
        {sidebarOpen && <span>List Items</span>}
      </Button>
      <Separator className="my-2" />
      <Button
        variant={activeView === 'settings' ? 'secondary' : 'ghost'}
        size="sm"
        className="justify-start"
        onClick={() => handleViewChange('settings')}
      >
        <Settings className="h-5 w-5 mr-2" />
        {sidebarOpen && <span>Settings</span>}
      </Button>
    </nav>
  </div>
);

// Main content area component
const MainContent = ({ 
  children, 
  isFluidLayout, 
  appHeight 
}: { 
  children: React.ReactNode;
  isFluidLayout: boolean;
  appHeight: number;
}) => (
  <div className={`flex-1 ${isFluidLayout ? 'overflow-auto' : ''} border-l`}>
    <div className="p-4 md:p-6" style={isFluidLayout ? { height: `${appHeight}px`, overflowY: 'auto' } : {}}>
      {children}
    </div>
  </div>
);

export function AppShell({ 
  children, 
  activeView = 'dashboard', 
  onViewChange,
  selectedItemId,
  selectedItemTitle
}: AppShellProps) {
  // State hooks
  const isFluidLayout = useContainerStatus();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [appHeight, setAppHeight] = useState(0);
  const [shareTooltip, setShareTooltip] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Utility hooks
  const appConfig = getAppConfig();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { setBreadcrumbs } = useBreadcrumb();
  
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
  
  // Handler for view changes
  const handleViewChange = (view: ViewType) => {
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
    <div className={`${appConfig.appId}-app-shell flex flex-col ${isFluidLayout ? 'h-full overflow-hidden' : ''}`}>
      {/* App header section */}
      <header className="app-header bg-background flex flex-col border-b">
        {/* Mobile header */}
        <MobileHeader 
          appConfig={appConfig}
          activeView={activeView}
          isFluidLayout={isFluidLayout}
          handleViewChange={handleViewChange}
          toggleContainerClass={toggleContainerClass}
          copyDeepLink={copyDeepLink}
          shareTooltip={shareTooltip}
        />
        
        {/* Main toolbar */}
        <Toolbar 
          activeView={activeView}
          handleViewChange={handleViewChange}
          selectedItemId={selectedItemId || null}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </header>
      
      {/* Main content with sidebar */}
      <div className={`flex flex-grow ${isFluidLayout ? 'overflow-hidden' : ''}`}>
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
        >
          {children}
        </MainContent>
      </div>
    </div>
  );
}

export default AppShell; 