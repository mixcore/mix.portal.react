'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertCircle, RefreshCw, ArrowRight } from 'lucide-react';
import './app-globals.css'; // Import app-specific styles

// Define possible views for the app
type ViewType = 'dashboard' | 'list' | 'detail' | 'settings';

interface MiniAppProps {
  standalone?: boolean;
  params?: Record<string, any>;
  appId: string;
  appTitle: string;
}

export default function MiniApp({ appId, appTitle, standalone = false, params = {} }: MiniAppProps) {
  // Router and URL parameters
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // Get view from URL parameters or from params prop
  const viewParam = params?.view || searchParams.get('view') as ViewType | null;
  const itemIdParam = params?.id || searchParams.get('id');
  
  // Set initial view based on URL parameter or config
  const getInitialView = (): ViewType => {
    if (viewParam && ['dashboard', 'list', 'detail', 'settings'].includes(viewParam as string)) {
      return viewParam as ViewType;
    }
    return 'dashboard';
  };
  
  const [activeView, setActiveView] = useState<ViewType>(getInitialView());
  const [selectedItemId, setSelectedItemId] = useState<string | null>(itemIdParam || null);
  const [isLoading, setIsLoading] = useState(false);
  
  // Update URL when view or item ID changes
  useEffect(() => {
    if (params) return;
    
    const urlParams = new URLSearchParams(searchParams.toString());
    urlParams.set('view', activeView);
    
    if (selectedItemId && activeView === 'detail') {
      urlParams.set('id', selectedItemId);
    } else {
      urlParams.delete('id');
    }
    
    const newUrl = `${pathname}?${urlParams.toString()}`;
    window.history.replaceState({}, '', newUrl);
  }, [activeView, selectedItemId, pathname, searchParams, params]);
  
  // Sync with URL parameters when they change
  useEffect(() => {
    if (viewParam && viewParam !== activeView) {
      setActiveView(viewParam as ViewType);
    }
    
    if (itemIdParam !== selectedItemId) {
      setSelectedItemId(itemIdParam);
      
      if (itemIdParam && activeView !== 'detail') {
        setActiveView('detail');
      }
    }
  }, [viewParam, itemIdParam, activeView, selectedItemId]);
  
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
    setActiveView(viewType);
    
    if (viewType !== 'detail') {
      setSelectedItemId(null);
    }
  };
  
  // Generate deep link for current view
  const getDeepLink = (view: ViewType, itemId?: string): string => {
    const baseUrl = `/dashboard/apps/${appId}/${view}`;
    const urlParams = new URLSearchParams();
    
    if (itemId && view === 'detail') {
      urlParams.set('id', itemId);
    }
    
    const queryString = urlParams.toString();
    return queryString ? `${baseUrl}?${queryString}` : baseUrl;
  };
  
  // Show loading state
  if (isLoading) {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center bg-background p-6">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-2 text-center">
            <Skeleton className="h-12 w-12 rounded-full mx-auto" />
            <Skeleton className="h-6 w-48 mx-auto" />
            <Skeleton className="h-4 w-32 mx-auto" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-3/4" />
          </div>
        </div>
      </div>
    );
  }

  // Render app content based on the current view
  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Recent Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">8</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="gap-1" onClick={() => handleViewChange('list')}>
                    View all <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Active Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">5</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="gap-1" onClick={() => handleViewChange('list')}>
                    View all <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Pending Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">3</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="gap-1" onClick={() => handleViewChange('list')}>
                    View all <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest activity in the {appTitle} app</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">No recent activity to display.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">View All Activity</Button>
              </CardFooter>
            </Card>
          </div>
        );
        
      case 'list':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Item List</CardTitle>
              <CardDescription>All items in the {appTitle} app</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start text-left" onClick={() => handleItemClick('item-1')}>
                  Item 1
                </Button>
                <Button variant="outline" className="w-full justify-start text-left" onClick={() => handleItemClick('item-2')}>
                  Item 2
                </Button>
                <Button variant="outline" className="w-full justify-start text-left" onClick={() => handleItemClick('item-3')}>
                  Item 3
                </Button>
                <Button variant="outline" className="w-full justify-start text-left" onClick={() => handleItemClick('item-4')}>
                  Item 4
                </Button>
                <Button variant="outline" className="w-full justify-start text-left" onClick={() => handleItemClick('item-5')}>
                  Item 5
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">Create New Item</Button>
            </CardFooter>
          </Card>
        );
        
      case 'detail':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Item Details</CardTitle>
              <CardDescription>ID: {selectedItemId}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Title</h3>
                  <p>Item {selectedItemId?.replace('item-', '')}</p>
                </div>
                <div>
                  <h3 className="font-medium">Description</h3>
                  <p>This is a detailed description for item {selectedItemId?.replace('item-', '')}.</p>
                </div>
                <div>
                  <h3 className="font-medium">Status</h3>
                  <p>Active</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" onClick={() => handleViewChange('list')}>Back to List</Button>
              <Button variant="default" size="sm">Edit Item</Button>
            </CardFooter>
          </Card>
        );
        
      case 'settings':
        return (
          <Card>
            <CardHeader>
              <CardTitle>App Settings</CardTitle>
              <CardDescription>Configure the {appTitle} app</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Settings options will be displayed here.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">Save Settings</Button>
            </CardFooter>
          </Card>
        );
        
      default:
        return (
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Invalid View</AlertTitle>
            <AlertDescription>The selected view does not exist.</AlertDescription>
          </Alert>
        );
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex-grow p-4 md:p-6 space-y-6 overflow-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">{appTitle}</h1>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => handleViewChange('settings')}>Settings</Button>
          </div>
        </div>
        
        <Tabs value={activeView} onValueChange={(value) => handleViewChange(value as ViewType)} className="w-full">
          <TabsList>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="list">List</TabsTrigger>
            {selectedItemId && <TabsTrigger value="detail">Details</TabsTrigger>}
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value={activeView} className="mt-4">
            {renderView()}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 