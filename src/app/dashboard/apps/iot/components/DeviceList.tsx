'use client';

import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  PlusCircle, 
  ArrowDownUp, 
  Filter, 
  Thermometer, 
  Gauge, 
  Smartphone,
  Tv, 
  Wifi,
  Camera
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DeviceListProps {
  onDeviceClick: (deviceId: string) => void;
}

const DeviceList: React.FC<DeviceListProps> = ({ onDeviceClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string[]>([]);
  const [filterStatus, setFilterStatus] = useState<string[]>([]);
  
  // Sample device data
  const devices = [
    { id: 'temp-sensor-001', name: 'Temperature Sensor 1', type: 'sensor', status: 'online', location: 'Office', lastSeen: '2 mins ago' },
    { id: 'hum-sensor-001', name: 'Humidity Sensor 1', type: 'sensor', status: 'online', location: 'Office', lastSeen: '3 mins ago' },
    { id: 'light-ctrl-001', name: 'Smart Light Controller', type: 'actuator', status: 'online', location: 'Conference Room', lastSeen: '4 mins ago' },
    { id: 'gateway-001', name: 'Gateway Hub 1', type: 'gateway', status: 'online', location: 'Server Room', lastSeen: '1 min ago' },
    { id: 'motion-sensor-001', name: 'Motion Sensor 1', type: 'sensor', status: 'online', location: 'Entrance', lastSeen: '7 mins ago' },
    { id: 'camera-001', name: 'Outdoor Camera 1', type: 'camera', status: 'online', location: 'Parking Lot', lastSeen: '2 mins ago' },
    { id: 'temp-sensor-002', name: 'Temperature Sensor 2', type: 'sensor', status: 'offline', location: 'Warehouse', lastSeen: '14 hours ago' },
    { id: 'thermostat-001', name: 'Smart Thermostat', type: 'actuator', status: 'online', location: 'Office', lastSeen: '5 mins ago' }
  ];
  
  // Filter devices based on search term and filters
  const filteredDevices = devices.filter(device => {
    // Search term filter
    const matchesSearch = searchTerm === '' || 
      device.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      device.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      device.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Type filter
    const matchesType = filterType.length === 0 || filterType.includes(device.type);
    
    // Status filter
    const matchesStatus = filterStatus.length === 0 || filterStatus.includes(device.status);
    
    return matchesSearch && matchesType && matchesStatus;
  });
  
  const renderDeviceIcon = (type: string) => {
    switch (type) {
      case 'sensor':
        return <Thermometer className="h-5 w-5 text-blue-500" />;
      case 'actuator':
        return <Gauge className="h-5 w-5 text-purple-500" />;
      case 'gateway':
        return <Wifi className="h-5 w-5 text-green-500" />;
      case 'camera':
        return <Camera className="h-5 w-5 text-red-500" />;
      default:
        return <Smartphone className="h-5 w-5 text-gray-500" />;
    }
  };
  
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
  
  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Devices</h1>
          <p className="text-muted-foreground">Manage your IoT devices</p>
        </div>
        <Button 
          className="mt-4 md:mt-0" 
          onClick={() => onDeviceClick('new')}
        >
          <PlusCircle className="h-4 w-4 mr-2" />
          Add Device
        </Button>
      </div>
      
      {/* Search and filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search devices..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-10">
                <Filter className="h-4 w-4 mr-2" />
                Type
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuCheckboxItem
                checked={filterType.includes('sensor')}
                onCheckedChange={(checked) => {
                  if (checked) setFilterType([...filterType, 'sensor']);
                  else setFilterType(filterType.filter(t => t !== 'sensor'));
                }}
              >
                Sensors
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={filterType.includes('actuator')}
                onCheckedChange={(checked) => {
                  if (checked) setFilterType([...filterType, 'actuator']);
                  else setFilterType(filterType.filter(t => t !== 'actuator'));
                }}
              >
                Actuators
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={filterType.includes('gateway')}
                onCheckedChange={(checked) => {
                  if (checked) setFilterType([...filterType, 'gateway']);
                  else setFilterType(filterType.filter(t => t !== 'gateway'));
                }}
              >
                Gateways
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={filterType.includes('camera')}
                onCheckedChange={(checked) => {
                  if (checked) setFilterType([...filterType, 'camera']);
                  else setFilterType(filterType.filter(t => t !== 'camera'));
                }}
              >
                Cameras
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-10">
                <Filter className="h-4 w-4 mr-2" />
                Status
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuCheckboxItem
                checked={filterStatus.includes('online')}
                onCheckedChange={(checked) => {
                  if (checked) setFilterStatus([...filterStatus, 'online']);
                  else setFilterStatus(filterStatus.filter(s => s !== 'online'));
                }}
              >
                Online
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={filterStatus.includes('offline')}
                onCheckedChange={(checked) => {
                  if (checked) setFilterStatus([...filterStatus, 'offline']);
                  else setFilterStatus(filterStatus.filter(s => s !== 'offline'));
                }}
              >
                Offline
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={filterStatus.includes('error')}
                onCheckedChange={(checked) => {
                  if (checked) setFilterStatus([...filterStatus, 'error']);
                  else setFilterStatus(filterStatus.filter(s => s !== 'error'));
                }}
              >
                Error
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={filterStatus.includes('maintenance')}
                onCheckedChange={(checked) => {
                  if (checked) setFilterStatus([...filterStatus, 'maintenance']);
                  else setFilterStatus(filterStatus.filter(s => s !== 'maintenance'));
                }}
              >
                Maintenance
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button variant="outline" size="sm" className="h-10">
            <ArrowDownUp className="h-4 w-4 mr-2" />
            Sort
          </Button>
        </div>
      </div>
      
      {/* Devices grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDevices.map(device => (
          <Card
            key={device.id}
            className={`hover:shadow-md transition-shadow cursor-pointer hover:border-primary iot-device-card iot-device-card-${device.status}`}
            onClick={() => onDeviceClick(device.id)}
          >
            <CardHeader className="pb-2 flex flex-row items-start justify-between space-y-0">
              <div className="space-y-1">
                <CardTitle className="text-lg flex items-center gap-2">
                  {renderDeviceIcon(device.type)}
                  <span>{device.name}</span>
                </CardTitle>
                <CardDescription>{device.id}</CardDescription>
              </div>
              {getStatusBadge(device.status)}
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm">
                  <span className="text-muted-foreground">Location:</span>
                  <span className="ml-1 font-medium">{device.location}</span>
                </div>
                <div className="text-sm">
                  <span className="text-muted-foreground">Type:</span>
                  <span className="ml-1 font-medium capitalize">{device.type}</span>
                </div>
                <div className="text-sm col-span-2">
                  <span className="text-muted-foreground">Last seen:</span>
                  <span className="ml-1">{device.lastSeen}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Show empty state if no devices match filters */}
      {filteredDevices.length === 0 && (
        <Card className="border-dashed">
          <CardHeader>
            <CardTitle className="text-center">No devices found</CardTitle>
            <CardDescription className="text-center">
              No devices match your current filters.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center pb-6">
            <Button variant="outline" onClick={() => {
              setSearchTerm('');
              setFilterType([]);
              setFilterStatus([]);
            }}>
              Clear filters
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default DeviceList; 