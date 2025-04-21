'use client';

import React from 'react';
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
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { getAppConfig } from '../app-loader';

const Settings: React.FC = () => {
  const appConfig = getAppConfig();
  
  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">Configure your IoT platform settings</p>
        </div>
      </div>
      
      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
        </TabsList>
        
        {/* General Settings */}
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Configure general platform options</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="darkMode">Dark Mode</Label>
                    <p className="text-sm text-muted-foreground">
                      Use dark theme for the interface
                    </p>
                  </div>
                  <Switch id="darkMode" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="autoRefresh">Auto Refresh</Label>
                    <p className="text-sm text-muted-foreground">
                      Automatically refresh device status
                    </p>
                  </div>
                  <Switch id="autoRefresh" defaultChecked />
                </div>
                
                <div>
                  <Label htmlFor="refreshInterval">Refresh Interval (seconds)</Label>
                  <Input 
                    id="refreshInterval" 
                    type="number" 
                    defaultValue="30" 
                    className="mt-1 max-w-[100px]" 
                  />
                </div>
                
                <div>
                  <Label htmlFor="timeZone">Time Zone</Label>
                  <Select defaultValue="UTC">
                    <SelectTrigger className="mt-1 w-full max-w-xs">
                      <SelectValue placeholder="Select a time zone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="UTC">UTC</SelectItem>
                      <SelectItem value="America/New_York">Eastern Time (ET)</SelectItem>
                      <SelectItem value="America/Chicago">Central Time (CT)</SelectItem>
                      <SelectItem value="America/Denver">Mountain Time (MT)</SelectItem>
                      <SelectItem value="America/Los_Angeles">Pacific Time (PT)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="temperatureUnit">Temperature Unit</Label>
                  <Select defaultValue="C">
                    <SelectTrigger className="mt-1 w-full max-w-xs">
                      <SelectValue placeholder="Select a temperature unit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="C">Celsius (°C)</SelectItem>
                      <SelectItem value="F">Fahrenheit (°F)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline">Reset</Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        {/* Notifications Settings */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Configure how you want to receive alerts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="enableNotifications">Enable Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive alerts when events occur
                    </p>
                  </div>
                  <Switch id="enableNotifications" defaultChecked />
                </div>
                
                <div className="space-y-2">
                  <Label>Notification Channels</Label>
                  <div className="grid gap-2">
                    <div className="flex items-center space-x-2">
                      <Switch id="emailNotifications" defaultChecked />
                      <Label htmlFor="emailNotifications">Email</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="pushNotifications" defaultChecked />
                      <Label htmlFor="pushNotifications">Push Notifications</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="smsNotifications" />
                      <Label htmlFor="smsNotifications">SMS</Label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="emailAddress">Email Address</Label>
                  <Input 
                    id="emailAddress" 
                    type="email" 
                    placeholder="your@email.com" 
                    className="mt-1 w-full max-w-md" 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Notification Categories</Label>
                  <div className="grid gap-2">
                    <div className="flex items-center space-x-2">
                      <Switch id="deviceStatusNotifications" defaultChecked />
                      <Label htmlFor="deviceStatusNotifications">Device Status Changes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="alertNotifications" defaultChecked />
                      <Label htmlFor="alertNotifications">Critical Alerts</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="systemNotifications" defaultChecked />
                      <Label htmlFor="systemNotifications">System Updates</Label>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline">Reset</Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        {/* Security Settings */}
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security</CardTitle>
              <CardDescription>Configure security settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="twoFactorAuth">Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">
                      Require additional verification when logging in
                    </p>
                  </div>
                  <Switch id="twoFactorAuth" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="apiAuthType">API Authentication Method</Label>
                  <Select defaultValue="token">
                    <SelectTrigger className="w-full max-w-xs">
                      <SelectValue placeholder="Select authentication method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="token">API Token</SelectItem>
                      <SelectItem value="oauth2">OAuth 2.0</SelectItem>
                      <SelectItem value="basic">Basic Auth</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                  <Input 
                    id="sessionTimeout" 
                    type="number" 
                    defaultValue="30" 
                    className="mt-1 max-w-[100px]" 
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline">Reset</Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        {/* API Settings */}
        <TabsContent value="api">
          <Card>
            <CardHeader>
              <CardTitle>API Settings</CardTitle>
              <CardDescription>Manage API access and documentation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="enableAPI">Enable API Access</Label>
                    <p className="text-sm text-muted-foreground">
                      Allow external applications to access your devices
                    </p>
                  </div>
                  <Switch id="enableAPI" defaultChecked />
                </div>
                
                <div>
                  <Label htmlFor="apiKey">API Key</Label>
                  <div className="flex gap-2 mt-1">
                    <Input 
                      id="apiKey" 
                      type="text" 
                      value="sk_test_abcdefg123456789" 
                      className="font-mono max-w-md" 
                      readOnly 
                    />
                    <Button variant="outline" size="sm">
                      Regenerate
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Regenerating the API key will invalidate the existing key.
                  </p>
                </div>
                
                <div>
                  <Label htmlFor="apiEndpoint">API Endpoint</Label>
                  <Input 
                    id="apiEndpoint" 
                    type="text" 
                    value="https://api.example.com/iot/v1" 
                    className="mt-1 max-w-md" 
                    readOnly 
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="rateLimit">Rate Limiting</Label>
                    <p className="text-sm text-muted-foreground">
                      Limit the number of API requests per minute
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input 
                      id="rateLimit" 
                      type="number" 
                      defaultValue="60" 
                      className="w-[80px]" 
                    />
                    <span className="text-sm text-muted-foreground">requests/minute</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline">Reset</Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        {/* About Settings */}
        <TabsContent value="about">
          <Card>
            <CardHeader>
              <CardTitle>About</CardTitle>
              <CardDescription>Information about this application</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium">Application</h3>
                  <p className="text-sm">{appConfig.displayName}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Version</h3>
                  <p className="text-sm">{appConfig.version}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Author</h3>
                  <p className="text-sm">{appConfig.author?.name}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Contact</h3>
                  <p className="text-sm">{appConfig.author?.email}</p>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-sm font-medium">Description</h3>
                  <p className="text-sm">{appConfig.description}</p>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <h3 className="text-sm font-medium mb-2">System Information</h3>
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-sm text-muted-foreground">Connected Devices</div>
                    <div className="text-sm">8</div>
                    
                    <div className="text-sm text-muted-foreground">Online Devices</div>
                    <div className="text-sm">7</div>
                    
                    <div className="text-sm text-muted-foreground">Data Points Collected</div>
                    <div className="text-sm">25,432</div>
                    
                    <div className="text-sm text-muted-foreground">Active Automations</div>
                    <div className="text-sm">3</div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Check for Updates
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings; 