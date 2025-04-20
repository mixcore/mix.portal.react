'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { 
  LayoutDashboard, 
  FileText, 
  Settings, 
  Code2, 
  Search, 
  Menu,
  Globe,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { getAppConfig } from '../app-loader';
import { useBreadcrumb } from '../hooks/useBreadcrumb';

// Define view types for type safety
type ViewType = 'dashboard' | 'pages' | 'templates' | 'seo' | 'settings';

// Navigation item interface
interface NavigationItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

// Props interface
interface AppShellProps {
  children: React.ReactNode;
  activeView?: ViewType;
  onViewChange?: (view: ViewType) => void;
  navigation?: NavigationItem[];
  selectedItemId?: string | null;
  selectedItemTitle?: string | null;
  standalone?: boolean;
}

export function AppShell({ 
  children, 
  activeView = 'dashboard', 
  onViewChange,
  navigation = [],
  selectedItemId,
  selectedItemTitle,
  standalone = false
}: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const appConfig = getAppConfig();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { setBreadcrumbs } = useBreadcrumb();
  
  // Map of view IDs to icons
  const viewIcons: Record<string, React.ReactNode> = {
    dashboard: <LayoutDashboard className="h-4 w-4" />,
    pages: <FileText className="h-4 w-4" />,
    templates: <Code2 className="h-4 w-4" />,
    seo: <Search className="h-4 w-4" />,
    settings: <Settings className="h-4 w-4" />
  };
  
  // Add icons to navigation items
  const navItemsWithIcons = navigation.map(item => ({
    ...item,
    icon: item.icon || viewIcons[item.id] || <Globe className="h-4 w-4" />
  }));
  
  // Update breadcrumbs when view or selected item changes
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

    if (selectedItemId && selectedItemTitle && activeView === 'pages') {
      // Add item-specific breadcrumb
      const itemPath = `/dashboard/apps/${appConfig.appId}?view=pages&id=${selectedItemId}`;
      breadcrumbs.push({ label: selectedItemTitle, href: itemPath });
    }

    // Update the breadcrumbs
    setBreadcrumbs(breadcrumbs);
  }, [activeView, selectedItemId, selectedItemTitle, appConfig, setBreadcrumbs]);

  // Handle tab change
  const handleTabChange = (value: string) => {
    if (onViewChange) {
      onViewChange(value as ViewType);
    }
  };
  
  // Determine if the view is showing a detail page
  const isDetailView = selectedItemId && selectedItemTitle;
  
  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* App header */}
      <div className="border-b bg-background p-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold tracking-tight">{appConfig.displayName}</h1>
            <p className="text-sm text-muted-foreground">{appConfig.description}</p>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:block">
            <Tabs
              value={activeView}
              onValueChange={handleTabChange}
              className="w-auto"
            >
              <TabsList>
                {navItemsWithIcons.map((item) => (
                  <TabsTrigger key={item.id} value={item.id} className="flex items-center gap-1">
                    {item.icon}
                    <span>{item.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          
          {/* Mobile navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <ScrollArea className="h-full">
                  <div className="py-4">
                    <h2 className="text-lg font-semibold mb-4">Navigation</h2>
                    <div className="space-y-1">
                      {navItemsWithIcons.map((item) => (
                        <Button
                          key={item.id}
                          variant={activeView === item.id ? 'secondary' : 'ghost'}
                          size="sm"
                          className="w-full justify-start"
                          onClick={() => handleTabChange(item.id)}
                        >
                          {item.icon}
                          <span className="ml-2">{item.label}</span>
                          {activeView === item.id && (
                            <ChevronRight className="ml-auto h-4 w-4" />
                          )}
                        </Button>
                      ))}
                    </div>
                  </div>
                </ScrollArea>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        
        {/* Display breadcrumb-like header for detail view */}
        {isDetailView && (
          <div className="mt-4 flex items-center space-x-1 text-sm text-muted-foreground">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => handleTabChange(activeView)}
              className="px-0 font-medium"
            >
              {activeView.charAt(0).toUpperCase() + activeView.slice(1)}
            </Button>
            <span>/</span>
            <span className="font-medium text-foreground">{selectedItemTitle}</span>
          </div>
        )}
      </div>
      
      {/* Main content */}
      <div className="flex-1 overflow-auto">
        {!standalone ? (
          <div className="h-full p-4 md:p-6">
            {children}
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
} 