'use client';

import React, { useState, useEffect } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft,
  Thermometer, 
  Droplets, 
  Smartphone,
  Gauge, 
  Wifi,
  Clock,
  MapPin,
  DownloadCloud,
  History,
  Settings as SettingsIcon,
  AlertTriangle,
  Power,
  Trash2,
  Camera
} from 'lucide-react';

interface DeviceDetailProps {
  deviceId: string | null;
}

const DeviceDetail: React.FC<DeviceDetailProps> = ({ deviceId }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);
  const [device, setDevice] = useState<any>(null);
  
  // Fetch device details when deviceId changes
  useEffect(() => {
    if (!deviceId) {
      setDevice(null);
      setLoading(false);
      return;
    }
    
    // Simulate API call to fetch device details
    setLoading(true);
    
    // Mock function to get device by ID
    const getMockDeviceById = (id: string) => {
      const mockDevices: Record<string, any> = {
        'temp-sensor-001': {
          id: 'temp-sensor-001',
          name: 'Temperature Sensor 1',
          type: 'sensor',
          sensorType: 'temperature',
          status: 'online',
          lastSeen: '2 mins ago',
          firmware: '1.2.0',
          battery: '87%',
          location: {
            area: 'Office',
            building: 'Main Building',
            floor: '3rd Floor',
            coordinates: {
              lat: 37.7749,
              long: -122.4194
            }
          },
          connectivity: {
            type: 'WiFi',
            signalStrength: '92%',
            ipAddress: '192.168.1.100',
            macAddress: '00:1A:2B:3C:4D:5E'
          },
          readings: [
            { timestamp: '2023-09-15T08:30:00Z', value: 23.0, unit: 'C' },
            { timestamp: '2023-09-15T08:15:00Z', value: 22.7, unit: 'C' },
            { timestamp: '2023-09-15T08:00:00Z', value: 22.5, unit: 'C' },
            { timestamp: '2023-09-15T07:45:00Z', value: 22.4, unit: 'C' },
            { timestamp: '2023-09-15T07:30:00Z', value: 22.3, unit: 'C' }
          ],
          activityLog: [
            { timestamp: '2023-09-15T08:30:00Z', action: 'Data reported', details: 'Temperature: 23.0°C' },
            { timestamp: '2023-09-15T08:00:00Z', action: 'Data reported', details: 'Temperature: 22.5°C' },
            { timestamp: '2023-09-15T00:00:00Z', action: 'System', details: 'Daily health check passed' },
            { timestamp: '2023-09-14T12:35:00Z', action: 'System', details: 'Firmware update available: 1.2.1' }
          ]
        },
        'light-ctrl-001': {
          id: 'light-ctrl-001',
          name: 'Smart Light Controller',
          type: 'actuator',
          status: 'online',
          lastSeen: '4 mins ago',
          firmware: '2.0.1',
          battery: 'N/A (Wired)',
          location: {
            area: 'Conference Room',
            building: 'Main Building',
            floor: '3rd Floor',
            coordinates: {
              lat: 37.7749,
              long: -122.4194
            }
          },
          connectivity: {
            type: 'Ethernet',
            signalStrength: 'N/A',
            ipAddress: '192.168.1.102',
            macAddress: '00:1A:2B:3C:4D:60'
          },
          controls: {
            power: 'on',
            brightness: 80,
            colorTemperature: 3500
          },
          activityLog: [
            { timestamp: '2023-09-15T07:30:00Z', action: 'Control', details: 'Brightness set to 80%' },
            { timestamp: '2023-09-15T07:00:00Z', action: 'Control', details: 'Power turned on' },
            { timestamp: '2023-09-14T18:00:00Z', action: 'Control', details: 'Power turned off' },
            { timestamp: '2023-09-14T12:00:00Z', action: 'System', details: 'Daily health check passed' }
          ]
        },
        'temp-sensor-002': {
          id: 'temp-sensor-002',
          name: 'Temperature Sensor 2',
          type: 'sensor',
          sensorType: 'temperature',
          status: 'offline',
          lastSeen: '14 hours ago',
          firmware: '1.2.0',
          battery: '12%',
          location: {
            area: 'Warehouse',
            building: 'Storage Facility',
            floor: '1st Floor',
            coordinates: {
              lat: 37.7760,
              long: -122.4200
            }
          },
          connectivity: {
            type: 'WiFi',
            signalStrength: '0%',
            ipAddress: '192.168.1.105',
            macAddress: '00:1A:2B:3C:4D:64'
          },
          readings: [
            { timestamp: '2023-09-14T18:45:00Z', value: 19.8, unit: 'C' },
            { timestamp: '2023-09-14T18:30:00Z', value: 19.9, unit: 'C' },
            { timestamp: '2023-09-14T18:15:00Z', value: 20.0, unit: 'C' },
            { timestamp: '2023-09-14T18:00:00Z', value: 20.1, unit: 'C' },
            { timestamp: '2023-09-14T17:45:00Z', value: 20.2, unit: 'C' }
          ],
          activityLog: [
            { timestamp: '2023-09-14T18:45:00Z', action: 'Data reported', details: 'Temperature: 19.8°C' },
            { timestamp: '2023-09-14T18:45:10Z', action: 'System', details: 'Device went offline' },
            { timestamp: '2023-09-14T18:30:00Z', action: 'Alert', details: 'Low battery warning: 12%' },
            { timestamp: '2023-09-14T12:00:00Z', action: 'System', details: 'Daily health check passed' }
          ]
        },
        'camera-001': {
          id: 'camera-001',
          name: 'Outdoor Camera 1',
          type: 'camera',
          status: 'online',
          lastSeen: '2 mins ago',
          firmware: '2.3.1',
          battery: 'N/A (Wired)',
          location: {
            area: 'Parking Lot',
            building: 'Exterior',
            floor: 'Ground Level',
            coordinates: {
              lat: 37.7751,
              long: -122.4196
            }
          },
          connectivity: {
            type: 'WiFi',
            signalStrength: '85%',
            ipAddress: '192.168.1.104',
            macAddress: '00:1A:2B:3C:4D:63'
          },
          settings: {
            resolution: '1080p',
            motionDetection: true,
            nightMode: true,
            storageRetention: '7 days'
          },
          activityLog: [
            { timestamp: '2023-09-15T08:15:00Z', action: 'Event', details: 'Motion detected' },
            { timestamp: '2023-09-15T00:00:00Z', action: 'System', details: 'Night mode activated' },
            { timestamp: '2023-09-14T19:00:00Z', action: 'System', details: 'Daily storage cleanup' },
            { timestamp: '2023-09-14T12:00:00Z', action: 'System', details: 'Daily health check passed' }
          ]
        }
      };
      
      return mockDevices[id] || null;
    };
    
    // Simulate fetch delay
    const timer = setTimeout(() => {
      const result = getMockDeviceById(deviceId);
      setDevice(result);
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [deviceId]);
  
  // Generate status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'online':
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Online</Badge>;
      case 'offline':
        return <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">Offline</Badge>;
      case 'error':
        return <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">Error</Badge>;
      case 'maintenance':
        return <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">Maintenance</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };
  
  // Get device icon based on type
  const getDeviceIcon = (type: string) => {
    switch (type) {
      case 'sensor':
        if (device?.sensorType === 'temperature') {
          return <Thermometer className="h-6 w-6 text-blue-500" />;
        } else if (device?.sensorType === 'humidity') {
          return <Droplets className="h-6 w-6 text-blue-500" />;
        }
        return <Gauge className="h-6 w-6 text-blue-500" />;
      case 'actuator':
        return <Power className="h-6 w-6 text-purple-500" />;
      case 'camera':
        return <Camera className="h-6 w-6 text-red-500" />;
      case 'gateway':
        return <Wifi className="h-6 w-6 text-green-500" />;
      default:
        return <Smartphone className="h-6 w-6 text-gray-500" />;
    }
  };
  
  // If no device ID is provided
  if (!deviceId) {
    return (
      <div className="p-4 md:p-6">
        <Card>
          <CardHeader>
            <CardTitle>No Device Selected</CardTitle>
            <CardDescription>Please select a device to view its details</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Go to Devices and select one to see its details here.</p>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  // Loading state
  if (loading) {
    return (
      <div className="p-4 md:p-6">
        <Card>
          <CardHeader>
            <div className="h-6 w-48 bg-muted animate-pulse rounded"></div>
            <div className="h-4 w-64 bg-muted animate-pulse rounded"></div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="h-4 w-full bg-muted animate-pulse rounded"></div>
              <div className="h-4 w-3/4 bg-muted animate-pulse rounded"></div>
              <div className="h-4 w-5/6 bg-muted animate-pulse rounded"></div>
              <div className="h-4 w-2/3 bg-muted animate-pulse rounded"></div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  // Device not found
  if (!device) {
    return (
      <div className="p-4 md:p-6">
        <Card>
          <CardHeader>
            <CardTitle>Device Not Found</CardTitle>
            <CardDescription>The device with ID "{deviceId}" could not be found</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2" />
              The device may have been removed or you may not have permission to view it.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="secondary">Go to Devices List</Button>
          </CardFooter>
        </Card>
      </div>
    );
  }
  
  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Device header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-3">
          {getDeviceIcon(device.type)}
          <div>
            <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
              {device.name}
              {getStatusBadge(device.status)}
            </h1>
            <p className="text-muted-foreground">ID: {device.id}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <SettingsIcon className="h-4 w-4 mr-2" />
            Edit
          </Button>
          <Button variant="outline" size="sm" className="text-red-500 hover:bg-red-50 hover:text-red-600">
            <Trash2 className="h-4 w-4 mr-2" />
            Delete
          </Button>
        </div>
      </div>
      
      {/* Device details */}
      <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="data">Data</TabsTrigger>
          <TabsTrigger value="location">Location</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>
        
        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Device Information</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <dt className="text-muted-foreground">Type</dt>
                    <dd className="font-medium capitalize">{device.type}</dd>
                  </div>
                  {device.sensorType && (
                    <div>
                      <dt className="text-muted-foreground">Sensor Type</dt>
                      <dd className="font-medium capitalize">{device.sensorType}</dd>
                    </div>
                  )}
                  <div>
                    <dt className="text-muted-foreground">Manufacturer</dt>
                    <dd className="font-medium">Mixcore IoT</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Model</dt>
                    <dd className="font-medium">MX-{device.type.charAt(0).toUpperCase() + device.type.slice(1)}-01</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Firmware</dt>
                    <dd className="font-medium">{device.firmware}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Battery</dt>
                    <dd className="font-medium">{device.battery}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Location</dt>
                    <dd className="font-medium">{device.location.area}</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Connectivity</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <dt className="text-muted-foreground">Status</dt>
                    <dd className="font-medium capitalize flex items-center">
                      <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                        device.status === 'online' ? 'bg-green-500' : 
                        device.status === 'offline' ? 'bg-gray-400' : 
                        'bg-red-500'
                      }`}></span>
                      {device.status}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Last Seen</dt>
                    <dd className="font-medium">{device.lastSeen}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Connection Type</dt>
                    <dd className="font-medium">{device.connectivity.type}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Signal Strength</dt>
                    <dd className="font-medium">{device.connectivity.signalStrength}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">IP Address</dt>
                    <dd className="font-medium">{device.connectivity.ipAddress}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">MAC Address</dt>
                    <dd className="font-medium">{device.connectivity.macAddress}</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
          </div>
          
          {/* Activity Log */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {device.activityLog?.slice(0, 5).map((log: any, index: number) => (
                  <li key={index} className="border-l-2 pl-4 border-gray-200 py-1">
                    <div className="font-medium">{log.action}</div>
                    <div className="text-sm text-muted-foreground">{log.details}</div>
                    <div className="text-xs text-muted-foreground flex items-center mt-1">
                      <Clock className="h-3 w-3 mr-1" />
                      {new Date(log.timestamp).toLocaleString()}
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full">
                View All Activity
                <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        {/* Data Tab */}
        <TabsContent value="data" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Sensor Readings</CardTitle>
              <CardDescription>Recent data from this device</CardDescription>
            </CardHeader>
            <CardContent>
              {device.readings ? (
                <div className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="py-2 px-4 text-left font-medium">Timestamp</th>
                          <th className="py-2 px-4 text-left font-medium">Value</th>
                          <th className="py-2 px-4 text-left font-medium">Unit</th>
                        </tr>
                      </thead>
                      <tbody>
                        {device.readings.map((reading: any, index: number) => (
                          <tr key={index} className="border-b">
                            <td className="py-2 px-4">{new Date(reading.timestamp).toLocaleString()}</td>
                            <td className="py-2 px-4 font-medium">{reading.value}</td>
                            <td className="py-2 px-4">{reading.unit}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button variant="outline" size="sm">
                      <DownloadCloud className="h-4 w-4 mr-2" />
                      Export Data
                    </Button>
                  </div>
                </div>
              ) : device.controls ? (
                <div className="space-y-4">
                  <h3 className="font-medium">Current State</h3>
                  <dl className="grid grid-cols-3 gap-4">
                    {Object.entries(device.controls).map(([key, value]: [string, any]) => (
                      <div key={key} className="bg-muted p-3 rounded-md">
                        <dt className="text-xs text-muted-foreground capitalize">{key}</dt>
                        <dd className="font-medium">{value}</dd>
                      </div>
                    ))}
                  </dl>
                  
                  <div className="flex justify-end">
                    <Button variant="secondary">Control Device</Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-4 text-muted-foreground">
                  No data available for this device type
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Location Tab */}
        <TabsContent value="location" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Device Location</CardTitle>
              <CardDescription>Physical location of this device</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <dl className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-muted-foreground">Area</dt>
                  <dd className="font-medium">{device.location.area}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Building</dt>
                  <dd className="font-medium">{device.location.building}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Floor</dt>
                  <dd className="font-medium">{device.location.floor}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Coordinates</dt>
                  <dd className="font-medium">
                    {device.location.coordinates.lat}, {device.location.coordinates.long}
                  </dd>
                </div>
              </dl>
              
              {/* Map placeholder */}
              <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Map view will be displayed here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Settings Tab */}
        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Device Settings</CardTitle>
              <CardDescription>Configure this device</CardDescription>
            </CardHeader>
            <CardContent>
              {device.settings ? (
                <div className="space-y-4">
                  <h3 className="font-medium">Current Configuration</h3>
                  <dl className="grid grid-cols-2 gap-4">
                    {Object.entries(device.settings).map(([key, value]: [string, any]) => (
                      <div key={key} className="bg-muted p-3 rounded-md">
                        <dt className="text-xs text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</dt>
                        <dd className="font-medium">{typeof value === 'boolean' ? (value ? 'Enabled' : 'Disabled') : value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ) : (
                <div className="space-y-4">
                  <h3 className="font-medium">Available Actions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button variant="outline" className="justify-start">
                      <DownloadCloud className="h-4 w-4 mr-2" />
                      Update Firmware
                    </Button>
                    {device.type === 'actuator' && (
                      <Button variant="outline" className="justify-start">
                        <Power className="h-4 w-4 mr-2" />
                        Control Device
                      </Button>
                    )}
                    <Button variant="outline" className="justify-start">
                      <History className="h-4 w-4 mr-2" />
                      View Logs
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      Test Device
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button>Save Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        {/* History Tab */}
        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Activity History</CardTitle>
              <CardDescription>Complete history of device events</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {device.activityLog?.map((log: any, index: number) => (
                  <li key={index} className="border-l-2 pl-4 border-gray-200 py-1">
                    <div className="font-medium">{log.action}</div>
                    <div className="text-sm text-muted-foreground">{log.details}</div>
                    <div className="text-xs text-muted-foreground flex items-center mt-1">
                      <Clock className="h-3 w-3 mr-1" />
                      {new Date(log.timestamp).toLocaleString()}
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <DownloadCloud className="h-4 w-4 mr-2" />
                Export History
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DeviceDetail; 