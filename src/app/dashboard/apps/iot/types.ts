export type DeviceType = 'light' | 'climate' | 'media' | 'sensor' | 'security';

export type DeviceStatus = 'on' | 'off';

export interface Device {
  id: string;
  name: string;
  type: DeviceType;
  status: DeviceStatus;
  value: string;
  room: string;
}

export interface Room {
  id: string;
  name: string;
  devices: string[]; // Reference to device IDs
}

export interface Automation {
  id: string;
  name: string;
  trigger: {
    deviceId: string;
    condition: string;
    value: string;
  };
  actions: {
    deviceId: string;
    action: string;
    value: string;
  }[];
  isActive: boolean;
}

export interface EnergyData {
  timestamp: Date;
  consumption: number;
  device?: string;
} 