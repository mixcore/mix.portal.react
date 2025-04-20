'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Device } from '../types/devices';

// Mock device data - would come from an API in production
const mockDevices: Device[] = [
  {
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
  },
  // Additional mock devices would be here
];

type DeviceContextType = {
  devices: Device[];
  loading: boolean;
  error: string | null;
  selectedDevice: Device | null;
  setSelectedDevice: (device: Device | null) => void;
  addDevice: (device: Device) => void;
  updateDevice: (device: Device) => void;
  removeDevice: (id: string) => void;
};

const DeviceContext = createContext<DeviceContextType | undefined>(undefined);

export function DeviceProvider({ children }: { children: ReactNode }) {
  const [devices, setDevices] = useState<Device[]>(mockDevices);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);

  const addDevice = (device: Device) => {
    setDevices((prev) => [...prev, device]);
  };

  const updateDevice = (updatedDevice: Device) => {
    setDevices((prev) =>
      prev.map((device) => (device.id === updatedDevice.id ? updatedDevice : device))
    );
  };

  const removeDevice = (id: string) => {
    setDevices((prev) => prev.filter((device) => device.id !== id));
  };

  const value = {
    devices,
    loading,
    error,
    selectedDevice,
    setSelectedDevice,
    addDevice,
    updateDevice,
    removeDevice,
  };

  return <DeviceContext.Provider value={value}>{children}</DeviceContext.Provider>;
}

export function useDevices() {
  const context = useContext(DeviceContext);
  if (context === undefined) {
    throw new Error('useDevices must be used within a DeviceProvider');
  }
  return context;
} 