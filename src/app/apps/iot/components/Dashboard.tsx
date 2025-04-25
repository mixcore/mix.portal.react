'use client';

import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Thermometer, 
  Droplets, 
  Gauge, 
  PlusCircle, 
  Smartphone,
  Wifi,
  AlertTriangle,
  RefreshCcw
} from 'lucide-react';

interface DashboardProps {
  onDeviceClick: (deviceId: string) => void;
  activeTab?: string;
}

const Dashboard: React.FC<DashboardProps> = ({ 
  onDeviceClick,
  activeTab = 'overview'
}) => {
  const [dashboardTab, setDashboardTab] = useState(activeTab);
  
  // Sample data for the dashboard
  const devicesSummary = {
    total: 8,
    online: 7,
    offline: 1,
    critical: 0
  };
  
  const recentDevices = [
    { id: 'temp-sensor-001', name: 'Temperature Sensor 1', type: 'sensor', status: 'online', lastSeen: '2 mins ago' },
    { id: 'hum-sensor-001', name: 'Humidity Sensor 1', type: 'sensor', status: 'online', lastSeen: '3 mins ago' },
    { id: 'light-ctrl-001', name: 'Smart Light Controller', type: 'actuator', status: 'online', lastSeen: '4 mins ago' },
    { id: 'temp-sensor-002', name: 'Temperature Sensor 2', type: 'sensor', status: 'offline', lastSeen: '14 hours ago' }
  ];
  
  const recentAlerts = [
    { id: 'alert-001', deviceId: 'temp-sensor-002', message: 'Device offline for more than 12 hours', severity: 'warning', time: '2 hours ago' },
    { id: 'alert-002', deviceId: 'temp-sensor-001', message: 'Temperature spike detected', severity: 'info', time: 'Yesterday' }
  ];
  
  const renderDeviceIcon = (type: string) => {
    switch (type) {
      case 'sensor':
        return <Thermometer className="h-4 w-4 text-blue-500" />;
      case 'actuator':
        return <Gauge className="h-4 w-4 text-purple-500" />;
      default:
        return <Smartphone className="h-4 w-4 text-gray-500" />;
    }
  };
  
  const renderStatusIndicator = (status: string) => {
    const baseClass = "inline-block w-2 h-2 rounded-full mr-2";
    
    switch (status) {
      case 'online':
        return <span className={`${baseClass} bg-green-500`}></span>;
      case 'offline':
        return <span className={`${baseClass} bg-gray-400`}></span>;
      case 'error':
        return <span className={`${baseClass} bg-red-500`}></span>;
      default:
        return <span className={`${baseClass} bg-yellow-500`}></span>;
    }
  };
  
  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">IoT Dashboard</h1>
          <p className="text-muted-foreground">Monitor and manage your connected devices</p>
        </div>
        <div className="flex mt-4 md:mt-0 space-x-2">
          <Button variant="outline" size="sm">
            <RefreshCcw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button size="sm" onClick={() => onDeviceClick('new')}>
            <PlusCircle className="h-4 w-4 mr-2" />
            Add Device
          </Button>
        </div>
      </div>
      
      {/* Stats overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Devices</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{devicesSummary.total}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Online</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{devicesSummary.online}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Offline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-500">{devicesSummary.offline}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-500">{recentAlerts.length}</div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue={dashboardTab} onValueChange={setDashboardTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="devices">Devices</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Recent Devices */}
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Recent Devices</CardTitle>
                <CardDescription>Your recently active devices</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-2">
                  {recentDevices.map(device => (
                    <div 
                      key={device.id} 
                      className="flex items-center justify-between p-2 border rounded-md hover:bg-accent hover:text-accent-foreground cursor-pointer"
                      onClick={() => onDeviceClick(device.id)}
                    >
                      <div className="flex items-center">
                        {renderDeviceIcon(device.type)}
                        <div className="ml-3">
                          <div className="font-medium flex items-center">
                            {renderStatusIndicator(device.status)}
                            {device.name}
                          </div>
                          <div className="text-sm text-muted-foreground">Last seen: {device.lastSeen}</div>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full" onClick={() => onDeviceClick('list')}>
                  View All Devices
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
            
            {/* Recent Alerts */}
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Recent Alerts</CardTitle>
                <CardDescription>System alerts and notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {recentAlerts.length > 0 ? (
                  <div className="space-y-2">
                    {recentAlerts.map(alert => (
                      <div key={alert.id} className="p-2 border rounded-md">
                        <div className="flex items-center">
                          <AlertTriangle className="h-4 w-4 text-yellow-500 mr-2" />
                          <div className="font-medium">{alert.message}</div>
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <div 
                            className="text-sm text-blue-600 hover:underline cursor-pointer" 
                            onClick={() => onDeviceClick(alert.deviceId)}
                          >
                            View Device
                          </div>
                          <div className="text-sm text-muted-foreground">{alert.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-4 text-muted-foreground">
                    No alerts at this time
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full">
                  View All Alerts
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="devices">
          <Card>
            <CardHeader>
              <CardTitle>All Devices</CardTitle>
              <CardDescription>Manage your IoT devices</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Device management view will be implemented here</p>
              <Button className="mt-4" onClick={() => onDeviceClick('list')}>View Devices</Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="alerts">
          <Card>
            <CardHeader>
              <CardTitle>Alert History</CardTitle>
              <CardDescription>System alerts and notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Alert history and management will be implemented here</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Analytics Dashboard</CardTitle>
              <CardDescription>Visualize data from your IoT devices</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Analytics dashboard with charts and visualizations will be implemented here</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard; 