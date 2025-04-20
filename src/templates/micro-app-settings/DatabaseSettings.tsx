'use client';

import React, { useState, useEffect } from 'react';
import { MixdbIntegration } from '@/components/integrations/mixdb-integration';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// This is an example implementation for a micro-app settings page
// that includes the MixDB integration component

interface MicroAppSettings {
  appId: string;
  appTitle: string;
  mixdbContext?: {
    id: number;
    name: string;
  }
}

export function AppSettingsPage() {
  // In a real implementation, this data would come from an API or context
  // that loads the app configuration and settings
  const [settings, setSettings] = useState<MicroAppSettings>({
    appId: 'micro-app',
    appTitle: 'Micro App',
    mixdbContext: {
      id: 1,
      name: 'Default Database'
    }
  });
  
  return (
    <div className="flex flex-col gap-6 p-6">
      <h1 className="text-3xl font-bold tracking-tight">{settings.appTitle} Settings</h1>
      
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="database">Database</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>
                Configure general application settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">General settings content would go here</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="database">
          <div className="space-y-6">
            {/* Include the MixDB Integration Component */}
            <MixdbIntegration 
              appId={settings.appId}
              appTitle={settings.appTitle}
              dbContextId={settings.mixdbContext?.id}
              dbContextName={settings.mixdbContext?.name}
            />
            
            <Card>
              <CardHeader>
                <CardTitle>Additional Database Settings</CardTitle>
                <CardDescription>
                  Configure additional database-related settings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Additional database settings would go here</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="advanced">
          <Card>
            <CardHeader>
              <CardTitle>Advanced Settings</CardTitle>
              <CardDescription>
                Configure advanced application settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Advanced settings content would go here</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 