'use client';

import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SensorMonitoring from '../data-visualization/sensor-monitoring';

interface AnalyticsPageProps {
  activeTab: string;
  onTabChange: (value: string) => void;
}

const AnalyticsPage: React.FC<AnalyticsPageProps> = ({ 
  activeTab = 'data-explorer',
  onTabChange
}) => {
  return (
    <div className="space-y-4">
      <Tabs value={activeTab} onValueChange={onTabChange}>
        <TabsList>
          <TabsTrigger value="data-explorer">Data Explorer</TabsTrigger>
          <TabsTrigger value="sensor-monitoring">Sensor Monitoring</TabsTrigger>
        </TabsList>
        
        <TabsContent value="data-explorer" className="mt-4">
          {/* Data explorer component will go here */}
          <div className="rounded-lg border p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Data Explorer</h2>
            <p className="text-muted-foreground">
              Data explorer component will be implemented in the future.
            </p>
          </div>
        </TabsContent>
        
        <TabsContent value="sensor-monitoring" className="mt-4">
          <SensorMonitoring />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AnalyticsPage; 