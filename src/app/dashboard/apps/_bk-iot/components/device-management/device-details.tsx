'use client';

import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription,
  CardFooter
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Activity, 
  Settings, 
  Download, 
  RefreshCw, 
  Info, 
  BarChart, 
  WifiOff,
  Wifi,
  AlertTriangle, 
  CheckCircle2,
  Battery,
  Signal
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Device, FirmwareUpdate } from '../../types';

// Mock firmware update
const mockFirmwareUpdate: FirmwareUpdate = {
  id: '1',
  deviceId: '1',
  version: '2.1.0',
  releaseNotes: 'Security improvements and bug fixes',
  size: 1240, // KB
  status: 'available',
  releaseDate: new Date('2023-10-15'),
  isMandatory: false
};

interface DeviceDetailsProps {
  device: Device;
}

const DeviceDetails: React.FC<DeviceDetailsProps> = ({ device }) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [telemetryEnabled, setTelemetryEnabled] = useState(device.telemetryEnabled || false);
  const [healthCheckInProgress, setHealthCheckInProgress] = useState(false);

  const handleUpdateDevice = () => {
    setIsUpdating(true);
    // Simulate update process
    setTimeout(() => {
      setIsUpdating(false);
    }, 3000);
  };

  const handleHealthCheck = () => {
    setHealthCheckInProgress(true);
    // Simulate health check
    setTimeout(() => {
      setHealthCheckInProgress(false);
    }, 2000);
  };

  const getHealthStatusColor = (status: string | undefined) => {
    switch (status) {
      case 'good':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'warning':
        return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'critical':
        return 'bg-red-50 text-red-700 border-red-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const getConnectivityIcon = () => {
    return device.status === 'online' || device.status === 'on' ? 
      <Wifi className="h-4 w-4 text-green-600" /> : 
      <WifiOff className="h-4 w-4 text-red-600" />;
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-semibold">{device.name}</CardTitle>
            <CardDescription>
              {device.type} • {device.room} • ID: {device.id.substring(0, 8)}
            </CardDescription>
          </div>
          <Badge 
            variant="outline"
            className={getHealthStatusColor(device.healthStatus)}
          >
            {device.healthStatus || 'Unknown'}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent>
        <Tabs defaultValue="overview">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="connectivity">Connectivity</TabsTrigger>
            <TabsTrigger value="firmware">Firmware</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4 pt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Status</p>
                <p className="font-medium">{device.status}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Value</p>
                <p className="font-medium">{device.value || 'N/A'}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Manufacturer</p>
                <p className="font-medium">{device.manufacturer || 'Unknown'}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Model</p>
                <p className="font-medium">{device.model || 'Unknown'}</p>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Battery className="h-4 w-4" />
                  <span className="text-sm">Battery</span>
                </div>
                <span className="text-sm font-medium">{device.batteryLevel || 'N/A'}{device.batteryLevel ? '%' : ''}</span>
              </div>
              {device.batteryLevel && (
                <Progress value={device.batteryLevel} className="h-2" />
              )}
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Signal className="h-4 w-4" />
                  <span className="text-sm">Signal Strength</span>
                </div>
                <span className="text-sm font-medium">{device.signalStrength || 'N/A'}{device.signalStrength ? '%' : ''}</span>
              </div>
              {device.signalStrength && (
                <Progress value={device.signalStrength} className="h-2" />
              )}
            </div>
            
            <Button 
              variant="outline" 
              className="w-full"
              onClick={handleHealthCheck}
              disabled={healthCheckInProgress}
            >
              {healthCheckInProgress ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  Running Diagnostics...
                </>
              ) : (
                <>
                  <Activity className="h-4 w-4 mr-2" />
                  Run Health Check
                </>
              )}
            </Button>
          </TabsContent>
          
          <TabsContent value="connectivity" className="pt-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {getConnectivityIcon()}
                <span>Connection Status</span>
              </div>
              <Badge variant="outline">
                {device.status === 'online' || device.status === 'on' ? 'Connected' : 'Disconnected'}
              </Badge>
            </div>
            
            <Separator />
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Protocol</p>
                  <p className="font-medium">{device.connectivity || 'Unknown'}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">IP Address</p>
                  <p className="font-medium">{device.ipAddress || 'Unknown'}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">MAC Address</p>
                  <p className="font-medium">{device.macAddress || 'Unknown'}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Last Seen</p>
                  <p className="font-medium">{device.lastUpdated ? new Date(device.lastUpdated).toLocaleString() : 'Unknown'}</p>
                </div>
              </div>
              
              <Button variant="outline" className="w-full">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh Connection
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="firmware" className="pt-4 space-y-4">
            <div className="rounded-lg border p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Current Version</h4>
                  <p className="text-sm text-muted-foreground">{device.firmwareVersion || 'Unknown'}</p>
                </div>
                {device.firmwareVersion !== mockFirmwareUpdate.version && (
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    Update Available
                  </Badge>
                )}
              </div>
            </div>
            
            {device.firmwareVersion !== mockFirmwareUpdate.version && (
              <div className="rounded-lg border p-4 space-y-4">
                <div>
                  <h4 className="font-medium">Available Update</h4>
                  <p className="text-sm text-muted-foreground">Version {mockFirmwareUpdate.version}</p>
                </div>
                
                <div className="space-y-1">
                  <p className="text-sm font-medium">Release Notes:</p>
                  <p className="text-sm text-muted-foreground">{mockFirmwareUpdate.releaseNotes}</p>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span>Size: {mockFirmwareUpdate.size} KB</span>
                  <span>Released: {new Date(mockFirmwareUpdate.releaseDate).toLocaleDateString()}</span>
                </div>
                
                {isUpdating ? (
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Downloading update...</span>
                      <span className="text-sm font-medium">75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                ) : (
                  <Button className="w-full" onClick={handleUpdateDevice}>
                    <Download className="h-4 w-4 mr-2" />
                    Update Firmware
                  </Button>
                )}
              </div>
            )}
            
            <div className="rounded-lg border p-4 space-y-2">
              <h4 className="font-medium">Update History</h4>
              <div className="text-sm">
                <p className="flex justify-between">
                  <span>v1.8.3 to v1.9.0</span>
                  <span className="text-muted-foreground">08/15/2023</span>
                </p>
                <p className="flex justify-between">
                  <span>v1.7.2 to v1.8.3</span>
                  <span className="text-muted-foreground">05/22/2023</span>
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="settings" className="pt-4 space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <h4 className="font-medium">Telemetry Data</h4>
                  <p className="text-sm text-muted-foreground">
                    Enable collection of usage and diagnostic data
                  </p>
                </div>
                <Switch 
                  checked={telemetryEnabled}
                  onCheckedChange={setTelemetryEnabled}
                />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <h4 className="font-medium">Auto Updates</h4>
                  <p className="text-sm text-muted-foreground">
                    Automatically install security and maintenance updates
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <h4 className="font-medium">Notifications</h4>
                  <p className="text-sm text-muted-foreground">
                    Receive alerts about device status changes
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
            
            <div className="flex gap-2 pt-4">
              <Button variant="outline" className="flex-1">
                <RefreshCw className="h-4 w-4 mr-2" />
                Restart Device
              </Button>
              <Button variant="outline" className="flex-1" disabled>
                <Settings className="h-4 w-4 mr-2" />
                Factory Reset
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      
      <CardFooter className="border-t flex justify-between pt-4">
        <Button variant="ghost" size="sm">
          <Info className="h-4 w-4 mr-2" />
          View Logs
        </Button>
        <Button variant="ghost" size="sm">
          <BarChart className="h-4 w-4 mr-2" />
          View Analytics
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DeviceDetails; 