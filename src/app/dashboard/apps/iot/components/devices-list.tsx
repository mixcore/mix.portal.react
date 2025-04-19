'use client';

import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  PlusCircle, 
  Search, 
  Sun, 
  Thermometer, 
  Tv, 
  Lock, 
  Speaker, 
  Camera,
  Power,
  Wifi,
  AlertCircle 
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DeviceCard from './device-card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

// Mock data for devices
const mockDevices = [
  {
    id: '1',
    name: 'Living Room Light',
    type: 'light',
    status: 'on',
    value: '80%',
    room: 'Living Room',
    icon: <Sun className="h-6 w-6" />
  },
  {
    id: '2',
    name: 'Kitchen Light',
    type: 'light',
    status: 'off',
    value: '0%',
    room: 'Kitchen',
    icon: <Sun className="h-6 w-6" />
  },
  {
    id: '3',
    name: 'Smart TV',
    type: 'media',
    status: 'off',
    value: '',
    room: 'Living Room',
    icon: <Tv className="h-6 w-6" />
  },
  {
    id: '4',
    name: 'Thermostat',
    type: 'climate',
    status: 'on',
    value: '22°C',
    room: 'Living Room',
    icon: <Thermometer className="h-6 w-6" />
  },
  {
    id: '5',
    name: 'Front Door',
    type: 'security',
    status: 'on',
    value: 'Locked',
    room: 'Entrance',
    icon: <Lock className="h-6 w-6" />
  },
  {
    id: '6',
    name: 'Smart Speaker',
    type: 'media',
    status: 'on',
    value: 'Playing',
    room: 'Bedroom',
    icon: <Speaker className="h-6 w-6" />
  },
  {
    id: '7',
    name: 'Security Camera',
    type: 'security',
    status: 'on',
    value: 'Recording',
    room: 'Entrance',
    icon: <Camera className="h-6 w-6" />
  },
  {
    id: '8',
    name: 'Bedroom Light',
    type: 'light',
    status: 'off',
    value: '0%',
    room: 'Bedroom',
    icon: <Sun className="h-6 w-6" />
  },
];

const DevicesList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredDevices = mockDevices.filter(device => 
    device.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    device.room.toLowerCase().includes(searchTerm.toLowerCase()) ||
    device.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const rooms = ['All Rooms', 'Living Room', 'Kitchen', 'Bedroom', 'Entrance'];
  
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Devices</h2>
        <Button>
          <PlusCircle className="h-4 w-4 mr-2" />
          Add Device
        </Button>
      </div>
      
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder="Search devices..." 
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <Tabs defaultValue="All Rooms">
        <TabsList className="mb-4 flex overflow-auto">
          {rooms.map(room => (
            <TabsTrigger key={room} value={room}>
              {room}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {rooms.map(room => (
          <TabsContent key={room} value={room}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredDevices
                .filter(device => room === 'All Rooms' || device.room === room)
                .map(device => (
                  <Card key={device.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg font-medium">{device.name}</CardTitle>
                        <Badge 
                          variant="outline" 
                          className={cn(
                            device.status === 'on' 
                              ? "bg-green-50 text-green-700 border-green-200" 
                              : "bg-gray-100 text-gray-500 border-gray-200"
                          )}
                        >
                          {device.status === 'on' ? 'Active' : 'Inactive'}
                        </Badge>
                      </div>
                      <CardDescription>{device.room}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <DeviceCard 
                        name={device.name}
                        type={device.type as any}
                        status={device.status as any}
                        value={device.value}
                        icon={device.icon}
                      />
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
      
      {filteredDevices.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-10 text-center">
            <AlertCircle className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-lg text-muted-foreground mb-2">
              No devices found
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Try a different search term or add a new device
            </p>
            <Button>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add Device
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

// Helper function for classnames
function cn(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

export default DevicesList; 