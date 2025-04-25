'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Wifi, 
  Search, 
  PlusCircle,
  Thermometer, 
  Lightbulb,
  Radio,
  Camera,
  Lock,
  Cpu,
} from 'lucide-react';
import DeviceCard from '../ui/device-card';
import { useDevicesList } from '../../lib/hooks/useDevices';
import { Device } from '../../types/devices';

// Map device types to their icons
const deviceIcons: Record<string, React.ReactNode> = {
  climate: <Thermometer className="h-5 w-5" />,
  light: <Lightbulb className="h-5 w-5" />,
  media: <Radio className="h-5 w-5" />,
  sensor: <Wifi className="h-5 w-5" />,
  security: <Camera className="h-5 w-5" />,
  gateway: <Wifi className="h-5 w-5" />,
  controller: <Cpu className="h-5 w-5" />,
  actuator: <PlusCircle className="h-5 w-5" />,
};

interface DevicesListProps {
  onDeviceSelect?: (device: Device) => void;
  onAddDevice?: () => void;
}

export default function DevicesList({ onDeviceSelect, onAddDevice }: DevicesListProps) {
  const { devices, loading, error, selectDevice } = useDevicesList();
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleDeviceClick = (device: Device) => {
    selectDevice(device);
    if (onDeviceSelect) {
      onDeviceSelect(device);
    }
  };
  
  // Filter devices based on search query
  const filteredDevices = devices.filter(device => 
    device.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    device.room.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg">Devices</CardTitle>
        <Button size="sm" onClick={onAddDevice}>
          <PlusCircle className="h-4 w-4 mr-2" />
          Add Device
        </Button>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search devices..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        {loading ? (
          <div className="p-4 text-center">Loading devices...</div>
        ) : error ? (
          <div className="p-4 text-center text-red-500">{error}</div>
        ) : filteredDevices.length === 0 ? (
          <div className="p-4 text-center text-muted-foreground">
            {searchQuery ? 'No devices match your search' : 'No devices found'}
          </div>
        ) : (
          <div className="space-y-3">
            {filteredDevices.map((device) => (
              <DeviceCard
                key={device.id}
                device={device}
                icon={deviceIcons[device.type] || <Wifi className="h-5 w-5" />}
                onClick={handleDeviceClick}
                onStatusChange={(id, status) => {
                  // Handle status change logic
                  console.log(`Device ${id} status changed to ${status}`);
                }}
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
} 