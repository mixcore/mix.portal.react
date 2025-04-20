'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { 
  HomeIcon, 
  ChevronRight, 
  Settings, 
  Activity, 
  Zap, 
  Home, 
  Wifi, 
  Power, 
  BarChart2, 
  Clock, 
  Thermometer, 
  Sun, 
  Shield, 
  Server, 
  Database, 
  Layers, 
  CpuIcon, 
  BellRing, 
  Users,
  Lock,
  Moon
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import DevicesList from './components/devices-list';
import DeviceCard from './components/device-card';
import DeviceDetails from './components/device-management/device-details';
import DeviceRegistration from './components/device-management/device-registration';
import DataExplorer from './components/data-visualization/data-explorer';
import SensorMonitoring from './components/data-visualization/sensor-monitoring';
import RulesBuilder from './components/automation/rules-builder';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { Device } from './types';

// Mock device for device details
const mockDevice: Device = {
  id: '1',
  name: 'Living Room Thermostat',
  type: 'climate',
  status: 'on',
  value: '22°C',
  room: 'Living Room',
  manufacturer: 'Nest',
  model: 'Learning Thermostat (3rd Gen)',
  firmwareVersion: '1.9.7',
  lastUpdated: new Date('2023-10-24T18:30:00'),
  lastMaintenance: new Date('2023-09-15'),
  connectivity: 'mqtt',
  ipAddress: '192.168.1.45',
  macAddress: '00:1A:2B:3C:4D:5E',
  batteryLevel: 78,
  signalStrength: 92,
  healthStatus: 'good',
  telemetryEnabled: true
};

export default function IotApp() {
  // Active tab tracking
  const [mainTab, setMainTab] = useState("dashboard");
  const [deviceManagementTab, setDeviceManagementTab] = useState("overview");
  const [analyticsTab, setAnalyticsTab] = useState("data-explorer");
  
  // Selected device for device details view
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);
  
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex justify-between items-center text-lg">
                    <span>System Status</span>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      Healthy
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Device Connectivity</span>
                        <span className="font-medium">98%</span>
                      </div>
                      <Progress value={98} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Gateway Uptime</span>
                        <span className="font-medium">99.9%</span>
                      </div>
                      <Progress value={99.9} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Data Processing</span>
                        <span className="font-medium">95%</span>
                      </div>
                      <Progress value={95} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Active Devices</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col items-center justify-center p-3 bg-green-50 rounded-md">
                      <span className="text-3xl font-bold text-green-600">32</span>
                      <span className="text-xs text-muted-foreground">Online</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-3 bg-red-50 rounded-md">
                      <span className="text-3xl font-bold text-red-600">3</span>
                      <span className="text-xs text-muted-foreground">Offline</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-3 bg-yellow-50 rounded-md">
                      <span className="text-3xl font-bold text-yellow-600">2</span>
                      <span className="text-xs text-muted-foreground">Warnings</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-3 bg-blue-50 rounded-md">
                      <span className="text-3xl font-bold text-blue-600">5</span>
                      <span className="text-xs text-muted-foreground">Updates</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Energy Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-yellow-500" />
                      <div>
                        <div className="text-2xl font-bold">4.8 kWh</div>
                        <div className="text-xs text-muted-foreground">Today's consumption</div>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      -12% vs Avg
                    </Badge>
                  </div>
                  <div className="h-[60px] w-full bg-slate-100 rounded-md flex items-end">
                    {[40, 65, 50, 30, 80, 60, 85, 75, 60, 40, 70, 90].map((value, i) => (
                      <div 
                        key={i} 
                        className="flex-1 mx-0.5"
                        style={{ 
                          height: `${value}%`, 
                          background: `${value > 70 ? '#f97316' : value > 50 ? '#0ea5e9' : '#10b981'}`
                        }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                    <span>12 AM</span>
                    <span>12 PM</span>
                    <span>Now</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent className="max-h-[160px] overflow-auto">
                  <div className="space-y-3">
                    {[
                      { event: 'Motion detected', device: 'Living Room Sensor', time: '2 min ago', icon: <Activity className="h-4 w-4 text-blue-500" /> },
                      { event: 'Door unlocked', device: 'Front Door', time: '15 min ago', icon: <Lock className="h-4 w-4 text-blue-500" /> },
                      { event: 'Temperature changed', device: 'Bedroom Thermostat', time: '32 min ago', icon: <Thermometer className="h-4 w-4 text-blue-500" /> },
                      { event: 'Device connected', device: 'New Light Bulb', time: '1 hour ago', icon: <Wifi className="h-4 w-4 text-blue-500" /> },
                      { event: 'Automation triggered', device: 'Night Mode', time: '9 hours ago', icon: <Clock className="h-4 w-4 text-blue-500" /> }
                    ].map((activity, i) => (
                      <div key={i} className="flex items-start gap-2">
                        {activity.icon}
                        <div>
                          <p className="text-sm font-medium">{activity.event}</p>
                          <p className="text-xs text-muted-foreground">{activity.device} • {activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="md:col-span-2">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">Popular Rooms</CardTitle>
                    <Button variant="ghost" size="sm" className="text-xs">View All Rooms</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { name: 'Living Room', devices: 8, active: 6, icon: <Home className="h-6 w-6" /> },
                      { name: 'Kitchen', devices: 6, active: 4, icon: <Thermometer className="h-6 w-6" /> },
                      { name: 'Bedroom', devices: 5, active: 3, icon: <Sun className="h-6 w-6" /> }
                    ].map((room, i) => (
                      <div key={i} className="rounded-lg border p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium mb-1">{room.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {room.active} of {room.devices} devices active
                            </p>
                          </div>
                          <div className="p-2 bg-blue-50 rounded-full">
                            {room.icon}
                          </div>
                        </div>
                        <div className="mt-3">
                          <Progress value={(room.active / room.devices) * 100} className="h-1" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="flex flex-col items-center justify-center p-4 h-24">
                    <Power className="h-6 w-6 mb-2" />
                    <span>All Off</span>
                  </Button>
                  <Button variant="outline" className="flex flex-col items-center justify-center p-4 h-24">
                    <Home className="h-6 w-6 mb-2" />
                    <span>Away Mode</span>
                  </Button>
                  <Button variant="outline" className="flex flex-col items-center justify-center p-4 h-24">
                    <Sun className="h-6 w-6 mb-2" />
                    <span>Morning</span>
                  </Button>
                  <Button variant="outline" className="flex flex-col items-center justify-center p-4 h-24">
                    <Moon className="h-6 w-6 mb-2" />
                    <span>Night</span>
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">Platform Health</CardTitle>
                    <Button variant="ghost" size="sm" className="text-xs">View Details</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: 'Device Management', status: 'Operational', icon: <CpuIcon className="h-5 w-5 text-green-500" /> },
                      { name: 'Connectivity Layer', status: 'Operational', icon: <Wifi className="h-5 w-5 text-green-500" /> },
                      { name: 'Data Processing', status: 'Minor Issues', icon: <Database className="h-5 w-5 text-yellow-500" /> },
                      { name: 'Analytics Engine', status: 'Operational', icon: <BarChart2 className="h-5 w-5 text-green-500" /> },
                      { name: 'Security Layer', status: 'Operational', icon: <Shield className="h-5 w-5 text-green-500" /> }
                    ].map((component, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {component.icon}
                          <span className="font-medium">{component.name}</span>
                        </div>
                        <Badge 
                          variant="outline" 
                          className={component.status === 'Operational' 
                            ? 'bg-green-50 text-green-700 border-green-200' 
                            : 'bg-yellow-50 text-yellow-700 border-yellow-200'
                          }
                        >
                          {component.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">Alerts & Notifications</CardTitle>
                    <Button variant="ghost" size="sm" className="text-xs">View All</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { title: 'Firmware Update Available', message: '3 devices have updates available', level: 'info', time: '3 hours ago' },
                      { title: 'Gateway Connection Unstable', message: 'Intermittent connectivity issues detected', level: 'warning', time: '1 day ago' },
                      { title: 'Security Scan Complete', message: 'No vulnerabilities detected in your network', level: 'success', time: '2 days ago' },
                      { title: 'Battery Low', message: 'Front door lock battery below 20%', level: 'warning', time: '2 days ago' }
                    ].map((alert, i) => (
                      <div key={i} className="rounded-lg border p-3">
                        <div className="flex items-start gap-2">
                          <div className={`p-1 rounded-full mt-0.5 ${
                            alert.level === 'warning' ? 'bg-yellow-100' : 
                            alert.level === 'success' ? 'bg-green-100' : 'bg-blue-100'
                          }`}>
                            <BellRing className={`h-3 w-3 ${
                              alert.level === 'warning' ? 'text-yellow-600' : 
                              alert.level === 'success' ? 'text-green-600' : 'text-blue-600'
                            }`} />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-center mb-1">
                              <h4 className="text-sm font-medium">{alert.title}</h4>
                              <span className="text-xs text-muted-foreground">{alert.time}</span>
                            </div>
                            <p className="text-xs text-muted-foreground">{alert.message}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Device Management */}
          <TabsContent value="device-management" className="space-y-4">
            <Tabs value={deviceManagementTab} onValueChange={setDeviceManagementTab}>
              <TabsList className="mb-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="details">Device Details</TabsTrigger>
                <TabsTrigger value="registration">Add Device</TabsTrigger>
                <TabsTrigger value="firmware">Firmware Updates</TabsTrigger>
                <TabsTrigger value="inventory">Inventory</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview">
                <DevicesList />
              </TabsContent>
              
              <TabsContent value="details">
                {selectedDevice ? (
                  <DeviceDetails device={selectedDevice} />
                ) : (
                  <DeviceDetails device={mockDevice} />
                )}
              </TabsContent>
              
              <TabsContent value="registration">
                <DeviceRegistration />
              </TabsContent>
              
              <TabsContent value="firmware">
                <Card>
                  <CardHeader>
                    <CardTitle>Firmware Management</CardTitle>
                    <CardDescription>
                      Manage firmware updates for your connected devices
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <h3 className="text-lg font-medium mb-4">Available Updates</h3>
                      <div className="space-y-4">
                        {[
                          { device: 'Living Room Thermostat', current: 'v1.9.0', available: 'v2.0.1', status: 'Critical' },
                          { device: 'Kitchen Light', current: 'v1.2.3', available: 'v1.3.0', status: 'Recommended' },
                          { device: 'Front Door Lock', current: 'v2.5.1', available: 'v2.6.0', status: 'Optional' }
                        ].map((update, i) => (
                          <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                            <div>
                              <h4 className="font-medium">{update.device}</h4>
                              <div className="flex items-center gap-2 text-sm">
                                <span className="text-muted-foreground">{update.current}</span>
                                <ChevronRight className="h-3 w-3 text-muted-foreground" />
                                <span>{update.available}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <Badge 
                                variant="outline" 
                                className={
                                  update.status === 'Critical' ? 'bg-red-50 text-red-700 border-red-200' :
                                  update.status === 'Recommended' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                                  'bg-gray-50 text-gray-700 border-gray-200'
                                }
                              >
                                {update.status}
                              </Badge>
                              <Button size="sm">Update</Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between rounded-lg border p-4">
                      <div>
                        <h3 className="text-lg font-medium">Update Policy</h3>
                        <p className="text-sm text-muted-foreground">Manage how firmware updates are applied</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Button variant="outline">Schedule Updates</Button>
                        <Button variant="outline">Update All</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="inventory">
                <Card>
                  <CardHeader>
                    <CardTitle>Device Inventory</CardTitle>
                    <CardDescription>
                      Complete inventory of all your IoT devices
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-lg border">
                      <table className="w-full">
                        <thead className="bg-muted/50">
                          <tr>
                            <th className="text-left text-xs font-medium text-muted-foreground p-3">Device ID</th>
                            <th className="text-left text-xs font-medium text-muted-foreground p-3">Name</th>
                            <th className="text-left text-xs font-medium text-muted-foreground p-3">Type</th>
                            <th className="text-left text-xs font-medium text-muted-foreground p-3">Location</th>
                            <th className="text-left text-xs font-medium text-muted-foreground p-3">Status</th>
                            <th className="text-left text-xs font-medium text-muted-foreground p-3">Last Active</th>
                            <th className="text-left text-xs font-medium text-muted-foreground p-3">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { id: 'DEV-001', name: 'Living Room Thermostat', type: 'Climate', location: 'Living Room', status: 'Online', lastActive: '2 min ago' },
                            { id: 'DEV-002', name: 'Kitchen Light', type: 'Light', location: 'Kitchen', status: 'Online', lastActive: '15 min ago' },
                            { id: 'DEV-003', name: 'Front Door Lock', type: 'Security', location: 'Entrance', status: 'Online', lastActive: '30 min ago' },
                            { id: 'DEV-004', name: 'Bedroom Fan', type: 'Climate', location: 'Bedroom', status: 'Offline', lastActive: '2 days ago' },
                            { id: 'DEV-005', name: 'Garden Sprinkler', type: 'Automation', location: 'Garden', status: 'Online', lastActive: '1 hour ago' }
                          ].map((device, i) => (
                            <tr key={i} className="border-t">
                              <td className="p-3 text-sm">{device.id}</td>
                              <td className="p-3 text-sm font-medium">{device.name}</td>
                              <td className="p-3 text-sm">{device.type}</td>
                              <td className="p-3 text-sm">{device.location}</td>
                              <td className="p-3">
                                <Badge 
                                  variant="outline" 
                                  className={device.status === 'Online' 
                                    ? 'bg-green-50 text-green-700 border-green-200' 
                                    : 'bg-red-50 text-red-700 border-red-200'
                                  }
                                >
                                  {device.status}
                                </Badge>
                              </td>
                              <td className="p-3 text-sm">{device.lastActive}</td>
                              <td className="p-3">
                                <Button size="sm" variant="ghost">View</Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </TabsContent>
          
          {/* Analytics & Data Visualization */}
          <TabsContent value="analytics" className="space-y-4">
            <Tabs value={analyticsTab} onValueChange={setAnalyticsTab}>
              <TabsList className="mb-4">
                <TabsTrigger value="data-explorer">Data Explorer</TabsTrigger>
                <TabsTrigger value="sensor-monitoring">Sensor Monitoring</TabsTrigger>
                <TabsTrigger value="energy">Energy Analytics</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
                <TabsTrigger value="ai-insights">AI Insights</TabsTrigger>
              </TabsList>
              
              <TabsContent value="data-explorer">
                <DataExplorer />
              </TabsContent>
              
              <TabsContent value="sensor-monitoring">
                <SensorMonitoring />
              </TabsContent>
              
              <TabsContent value="energy">
                <Card>
                  <CardHeader>
                    <CardTitle>Energy Analytics</CardTitle>
                    <CardDescription>
                      Monitor and optimize energy consumption across your devices
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center justify-center p-10 text-center">
                    <Zap className="h-16 w-16 text-muted-foreground mb-4" />
                    <p className="text-lg text-muted-foreground mb-6">
                      Track energy usage, identify inefficiencies, and reduce costs
                    </p>
                    <Button>View Energy Dashboard</Button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="reports">
                <Card>
                  <CardHeader>
                    <CardTitle>Reports & Analytics</CardTitle>
                    <CardDescription>
                      Generate custom reports based on your IoT data
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center justify-center p-10 text-center">
                    <BarChart2 className="h-16 w-16 text-muted-foreground mb-4" />
                    <p className="text-lg text-muted-foreground mb-6">
                      Create advanced analytics reports to gain insights from your IoT data
                    </p>
                    <Button>Generate Report</Button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="ai-insights">
                <Card>
                  <CardHeader>
                    <CardTitle>AI-Powered Insights</CardTitle>
                    <CardDescription>
                      Intelligent analysis and recommendations for your smart home
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center justify-center p-10 text-center">
                    <CpuIcon className="h-16 w-16 text-muted-foreground mb-4" />
                    <p className="text-lg text-muted-foreground mb-6">
                      Leverage AI to identify patterns, anomalies, and optimization opportunities
                    </p>
                    <Button>Analyze Home Data</Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </TabsContent>
          
          {/* Automation & Rules */}
          <TabsContent value="automation" className="space-y-4">
            <RulesBuilder />
          </TabsContent>
          
          {/* Security & Compliance */}
          <TabsContent value="security" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Security Overview</CardTitle>
                  <CardDescription>
                    Monitor and manage security for your IoT network
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-medium">Security Score</h3>
                    <div className="relative pt-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-green-50 text-green-600">
                            Good
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-semibold inline-block text-green-600">
                            85%
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 mt-1">
                        <div style={{ width: "85%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { title: 'Devices Secured', value: '32/35', status: 'good' },
                        { title: 'Encryption', value: 'Enabled', status: 'good' },
                        { title: 'Vulnerabilities', value: '3 Low', status: 'warning' },
                        { title: 'Last Scan', value: '2 days ago', status: 'good' }
                      ].map((item, i) => (
                        <div key={i} className="rounded-lg border p-3">
                          <p className="text-sm text-muted-foreground">{item.title}</p>
                          <p className={`text-lg font-medium ${
                            item.status === 'good' ? 'text-green-600' : 
                            item.status === 'warning' ? 'text-yellow-600' : 'text-red-600'
                          }`}>{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">Recent Security Events</h3>
                      <Button variant="ghost" size="sm">View All</Button>
                    </div>
                    <div className="space-y-3">
                      {[
                        { event: 'New device connected', device: 'Kitchen Light', severity: 'info', time: '2 hours ago' },
                        { event: 'Failed login attempt', device: 'Admin Portal', severity: 'warning', time: '1 day ago' },
                        { event: 'Firmware security update', device: 'Front Door Lock', severity: 'info', time: '3 days ago' }
                      ].map((event, i) => (
                        <div key={i} className="flex items-start gap-2 rounded-lg border p-3">
                          <Shield className={`h-5 w-5 mt-0.5 ${
                            event.severity === 'info' ? 'text-blue-500' : 
                            event.severity === 'warning' ? 'text-yellow-500' : 'text-red-500'
                          }`} />
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <h4 className="text-sm font-medium">{event.event}</h4>
                              <span className="text-xs text-muted-foreground">{event.time}</span>
                            </div>
                            <p className="text-xs text-muted-foreground">{event.device}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>User Access</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                            <Users className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium">Active Users</p>
                            <p className="text-sm text-muted-foreground">3 users with access</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">Manage</Button>
                      </div>
                      <Separator />
                      <div className="space-y-3">
                        <p className="text-sm font-medium">Recent Access</p>
                        {[
                          { name: 'John Doe', role: 'Admin', time: '10 minutes ago' },
                          { name: 'Jane Smith', role: 'User', time: '2 hours ago' }
                        ].map((user, i) => (
                          <div key={i} className="flex justify-between items-center">
                            <div>
                              <p className="text-sm font-medium">{user.name}</p>
                              <p className="text-xs text-muted-foreground">{user.role}</p>
                            </div>
                            <p className="text-xs text-muted-foreground">{user.time}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Security Tools</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full justify-start" variant="outline">
                      <Shield className="mr-2 h-4 w-4" />
                      Run Security Scan
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Lock className="mr-2 h-4 w-4" />
                      Access Control
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Server className="mr-2 h-4 w-4" />
                      Backup & Recovery
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Activity className="mr-2 h-4 w-4" />
                      Audit Logs
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
