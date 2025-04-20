'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { AppShell } from '../layouts/AppShell';
import { getAppConfig } from '../app-loader';
import DashboardView from '../views/DashboardView';
import PagesView from '../views/PagesView';
import TemplatesView from '../views/TemplatesView';
import SeoView from '../views/SeoView';
import useContainerStatus from '../hooks/useContainerStatus';

// Define view types for the Website app
type ViewType = 'dashboard' | 'pages' | 'templates' | 'seo' | 'settings';

// Props interface for the WebsiteApp
interface WebsiteAppProps {
  standalone?: boolean;
  params?: Record<string, any>;
}

export function WebsiteApp(props: WebsiteAppProps) {
  // Router and URL parameters
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // Get view from URL parameters
  const viewParam = searchParams.get('view') as ViewType | null;
  const itemIdParam = searchParams.get('id');
  
  // Get app config
  const appConfig = getAppConfig();
  
  // Check if app is in fluid layout container
  const isFluidLayout = useContainerStatus();
  
  // Set initial view based on URL parameter or config
  const getInitialView = (): ViewType => {
    if (viewParam && ['dashboard', 'pages', 'templates', 'seo', 'settings'].includes(viewParam)) {
      return viewParam as ViewType;
    }
    return 'dashboard';
  };
  
  // State for active view and selected item
  const [activeView, setActiveView] = useState<ViewType>(getInitialView());
  const [selectedItemId, setSelectedItemId] = useState<string | null>(itemIdParam || null);
  const [selectedItemTitle, setSelectedItemTitle] = useState<string | null>(null);
  
  // Update URL when view or item ID changes
  useEffect(() => {
    // Create new URLSearchParams object
    const params = new URLSearchParams(searchParams.toString());
    
    // Set the view parameter
    params.set('view', activeView);
    
    // Set or remove id parameter
    if (selectedItemId && activeView === 'pages') {
      params.set('id', selectedItemId);
    } else {
      params.delete('id');
    }
    
    // Update the URL without triggering navigation
    const newUrl = `${pathname}?${params.toString()}`;
    window.history.replaceState({}, '', newUrl);
  }, [activeView, selectedItemId, pathname, searchParams]);
  
  // Handle view change
  const handleViewChange = (view: ViewType) => {
    setActiveView(view);
    
    // Reset selected item when changing views (except when going from list to detail)
    if (view !== 'pages') {
      setSelectedItemId(null);
      setSelectedItemTitle(null);
    }
  };
  
  // Render the active view
  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <DashboardView />;
      case 'pages':
        return (
          <PagesView 
            selectedItemId={selectedItemId}
            onSelectItem={(id: string, title: string) => {
              setSelectedItemId(id);
              setSelectedItemTitle(title);
            }}
          />
        );
      case 'templates':
        return <TemplatesView />;
      case 'seo':
        return <SeoView />;
      case 'settings':
        return <div className="py-4">Settings view will be implemented soon.</div>;
      default:
        return <DashboardView />;
    }
  };
  
  // Navigation for app shell
  const appNavigation = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'pages', label: 'Pages' },
    { id: 'templates', label: 'Templates' },
    { id: 'seo', label: 'SEO' },
    { id: 'settings', label: 'Settings' }
  ];
  
  return (
    <AppShell
      activeView={activeView}
      onViewChange={handleViewChange}
      navigation={appNavigation}
      selectedItemId={selectedItemId}
      selectedItemTitle={selectedItemTitle}
      standalone={props.standalone}
    >
      {renderView()}
    </AppShell>
  );
}

export default function WebsiteAppDefault() {
  return <WebsiteApp />;
} 