'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { HomeIcon, ChevronRight, Settings, Activity, Zap, Home, Wifi, Power, BarChart2, Clock, Thermometer, Sun } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import DevicesList from './components/devices-list';
import DeviceCard from './components/device-card';
import { Separator } from '@/components/ui/separator';

export default function IotApp() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-grow p-6 space-y-6 overflow-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Smart Home</h1>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              Connected
            </Badge>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>

        <Tabs defaultValue="dashboard" className="space-y-4">
          <TabsList>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="devices">Devices</TabsTrigger>
            <TabsTrigger value="automations">Automations</TabsTrigger>
            <TabsTrigger value="energy">Energy</TabsTrigger>
          </TabsList>
          
          <TabsContent value="dashboard" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="flex flex-col items-center justify-center p-4 h-24">
                    <Power className="h-6 w-6 mb-2" />
                    <span>All Off</span>
                  </Button>
                  <Button variant="outline" className="flex flex-col items-center justify-center p-4 h-24">
                    <Sun className="h-6 w-6 mb-2" />
                    <span>All Lights</span>
                  </Button>
                  <Button variant="outline" className="flex flex-col items-center justify-center p-4 h-24">
                    <Thermometer className="h-6 w-6 mb-2" />
                    <span>Climate</span>
                  </Button>
                  <Button variant="outline" className="flex flex-col items-center justify-center p-4 h-24">
                    <Clock className="h-6 w-6 mb-2" />
                    <span>Scenes</span>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Living Room</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <DeviceCard 
                    name="Main Light"
                    type="light"
                    status="on"
                    value="80%"
                    icon={<Sun className="h-6 w-6" />}
                  />
                  <Separator className="my-2" />
                  <DeviceCard 
                    name="Smart TV"
                    type="media"
                    status="off"
                    value=""
                    icon={<Wifi className="h-6 w-6" />}
                  />
                  <Separator className="my-2" />
                  <DeviceCard 
                    name="Temperature"
                    type="climate"
                    status="on"
                    value="22°C"
                    icon={<Thermometer className="h-6 w-6" />}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Connected Devices</span>
                      <Badge>12</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Active Automations</span>
                      <Badge>5</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Energy Consumption</span>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        Low
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">System Status</span>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        Healthy
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Energy Consumption</CardTitle>
                </CardHeader>
                <CardContent className="h-64 flex items-center justify-center">
                  <div className="text-center">
                    <BarChart2 className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                    <p className="text-muted-foreground">Energy consumption data will appear here</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <Activity className="h-4 w-4 mt-1 text-blue-500" />
                      <div>
                        <p className="text-sm font-medium">Living Room Light turned on</p>
                        <p className="text-xs text-muted-foreground">5 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Activity className="h-4 w-4 mt-1 text-blue-500" />
                      <div>
                        <p className="text-sm font-medium">Temperature changed to 22°C</p>
                        <p className="text-xs text-muted-foreground">20 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Activity className="h-4 w-4 mt-1 text-blue-500" />
                      <div>
                        <p className="text-sm font-medium">Front door locked</p>
                        <p className="text-xs text-muted-foreground">1 hour ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="devices" className="space-y-4">
            <DevicesList />
          </TabsContent>
          
          <TabsContent value="automations" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Automations</CardTitle>
                <CardDescription>
                  Create and manage automations for your smart home devices
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center p-10 text-center">
                <Settings className="h-16 w-16 text-muted-foreground mb-4" />
                <p className="text-lg text-muted-foreground mb-6">
                  Automate your home with custom rules and triggers
                </p>
                <Button>Create Automation</Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="energy" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Energy Management</CardTitle>
                <CardDescription>
                  Monitor and optimize your home energy usage
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center p-10 text-center">
                <Zap className="h-16 w-16 text-muted-foreground mb-4" />
                <p className="text-lg text-muted-foreground mb-6">
                  Track energy consumption and find ways to save
                </p>
                <Button>View Energy Dashboard</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
