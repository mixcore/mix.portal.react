'use client';

import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { 
  BarChart3, 
  LineChart, 
  Activity, 
  Layers,
  Download
} from 'lucide-react';
import SensorMonitoring from './data-visualization/sensor-monitoring';

interface AnalyticsProps {
  onDeviceClick: (deviceId: string) => void;
}

const Analytics: React.FC<AnalyticsProps> = ({ onDeviceClick }) => {
  const [activeTab, setActiveTab] = useState('sensors');
  
  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Analyze and visualize data from your IoT devices</p>
        </div>
        <div className="flex mt-4 md:mt-0 space-x-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Data
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="sensors">
            <Activity className="h-4 w-4 mr-2" />
            Sensor Monitoring
          </TabsTrigger>
          <TabsTrigger value="trends">
            <LineChart className="h-4 w-4 mr-2" />
            Trends
          </TabsTrigger>
          <TabsTrigger value="reports">
            <BarChart3 className="h-4 w-4 mr-2" />
            Reports
          </TabsTrigger>
          <TabsTrigger value="data-explorer">
            <Layers className="h-4 w-4 mr-2" />
            Data Explorer
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="sensors">
          <SensorMonitoring />
        </TabsContent>
        
        <TabsContent value="trends">
          <Card>
            <CardHeader>
              <CardTitle>Usage Trends</CardTitle>
              <CardDescription>Long-term device activity and data patterns</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                <p className="text-muted-foreground">Trends visualization will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Reports</CardTitle>
              <CardDescription>Generate and view standardized reports</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                <p className="text-muted-foreground">Reports interface will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="data-explorer">
          <Card>
            <CardHeader>
              <CardTitle>Data Explorer</CardTitle>
              <CardDescription>Explore and query device data</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                <p className="text-muted-foreground">Data explorer interface will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics; 