'use client';

import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { 
  Settings, 
  Wifi,
  Search,
  PlusCircle,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import DevicesList from './components/devices/list';
import { Device } from './types/devices';
import { DeviceProvider } from './context/DeviceContext';
import { AutomationProvider } from './context/AutomationContext';
import AnalyticsPage from './components/analytics/analytics-page';
import { useRouter, useSearchParams } from 'next/navigation';

// App-level wrapper
function AppContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Get initial values from URL parameters
  const initialMainTab = searchParams.get('tab') || 'dashboard';
  const initialDeviceTab = searchParams.get('deviceTab') || 'overview';
  const initialAnalyticsTab = searchParams.get('analyticsTab') || 'data-explorer';
  const initialDeviceId = searchParams.get('deviceId') || null;
  
  // Active tab tracking
  const [mainTab, setMainTab] = useState(initialMainTab);
  const [deviceManagementTab, setDeviceManagementTab] = useState(initialDeviceTab);
  const [analyticsTab, setAnalyticsTab] = useState(initialAnalyticsTab);
  
  // Selected device for device details view
  const [selectedDeviceId, setSelectedDeviceId] = useState<string | null>(initialDeviceId);
  
  // Update URL when state changes
  useEffect(() => {
    const params = new URLSearchParams();
    
    // Only add parameters that differ from defaults
    if (mainTab !== 'dashboard') params.set('tab', mainTab);
    if (deviceManagementTab !== 'overview') params.set('deviceTab', deviceManagementTab);
    if (analyticsTab !== 'data-explorer') params.set('analyticsTab', analyticsTab);
    if (selectedDeviceId) params.set('deviceId', selectedDeviceId);
    
    // Update URL without refresh
    const url = params.toString() ? `?${params.toString()}` : '';
    router.replace(`/dashboard/apps/iot${url}`, { scroll: false });
  }, [mainTab, deviceManagementTab, analyticsTab, selectedDeviceId, router]);
  
  const handleDeviceSelect = (device: Device) => {
    setSelectedDeviceId(device.id);
    setMainTab("device-management");
    setDeviceManagementTab("device-details");
  };
  
  return (
    <div className="h-full flex flex-col">
      <div className="flex-grow p-4 space-y-6 overflow-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">IoT Platform</h1>
            <p className="text-muted-foreground">Manage and analyze your connected devices</p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              <Wifi className="h-3 w-3 mr-1" />
              32 Devices Online
            </Badge>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>

        <Tabs value={mainTab} onValueChange={setMainTab} className="space-y-4">
          <TabsList className="grid grid-cols-5 lg:w-auto">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="device-management">Device Management</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="automation">Automation</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>
          
          {/* Main Dashboard */}
          <TabsContent value="dashboard" className="space-y-4">
            {/* Dashboard content will go here */}
            <p>Dashboard content will be implemented using the new component structure</p>
          </TabsContent>
          
          {/* Device Management */}
          <TabsContent value="device-management" className="space-y-4">
            <Tabs value={deviceManagementTab} onValueChange={setDeviceManagementTab}>
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="device-details">Device Details</TabsTrigger>
                <TabsTrigger value="device-registration">Register Device</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <DevicesList 
                    onDeviceSelect={handleDeviceSelect} 
                    onAddDevice={() => setDeviceManagementTab("device-registration")} 
                  />
                  
                  <div className="md:col-span-2">
                    {/* Additional device management overview components will go here */}
                    <p>Device statistics and management tools will be implemented using the new component structure</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="device-details" className="mt-4">
                {/* Device details component will go here */}
                {selectedDeviceId ? (
                  <p>Device details for ID: {selectedDeviceId} will be implemented</p>
                ) : (
                  <p>Select a device to view details</p>
                )}
              </TabsContent>
              
              <TabsContent value="device-registration" className="mt-4">
                {/* Device registration component will go here */}
                <p>Device registration component will be implemented using the new component structure</p>
              </TabsContent>
            </Tabs>
          </TabsContent>
          
          {/* Analytics */}
          <TabsContent value="analytics" className="space-y-4">
            <AnalyticsPage 
              activeTab={analyticsTab} 
              onTabChange={setAnalyticsTab} 
            />
          </TabsContent>
          
          {/* Automation */}
          <TabsContent value="automation" className="space-y-4">
            {/* Automation content will go here */}
            <p>Automation content will be implemented using the new component structure</p>
          </TabsContent>
          
          {/* Security */}
          <TabsContent value="security" className="space-y-4">
            {/* Security content will go here */}
            <p>Security content will be implemented using the new component structure</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

// Main app component with context providers
export default function IotApp() {
  return (
    <DeviceProvider>
      <AutomationProvider>
        <AppContent />
      </AutomationProvider>
    </DeviceProvider>
  );
}
