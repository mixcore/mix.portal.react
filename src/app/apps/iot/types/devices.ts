// Device-related type definitions

export type DeviceType = 'light' | 'climate' | 'media' | 'sensor' | 'security' | 'gateway' | 'controller' | 'actuator';

export type DeviceStatus = 'on' | 'off' | 'online' | 'offline' | 'error' | 'maintenance' | 'updating';

export type ConnectivityProtocol = 'mqtt' | 'coap' | 'http' | 'websocket' | 'zigbee' | 'zwave' | 'bluetooth';

export interface Device {
  id: string;
  name: string;
  type: DeviceType;
  status: DeviceStatus;
  value: string;
  room: string;
  manufacturer?: string;
  model?: string;
  firmwareVersion?: string;
  lastUpdated?: Date;
  lastMaintenance?: Date;
  connectivity?: ConnectivityProtocol;
  ipAddress?: string;
  macAddress?: string;
  batteryLevel?: number;
  signalStrength?: number;
  healthStatus?: 'good' | 'warning' | 'critical';
  telemetryEnabled?: boolean;
  tags?: string[];
}

export interface Room {
  id: string;
  name: string;
  devices: string[]; // Reference to device IDs
  floor?: string;
  type?: 'living' | 'kitchen' | 'bedroom' | 'bathroom' | 'office' | 'outdoor' | 'other';
}

export interface FirmwareUpdate {
  id: string;
  deviceId: string;
  version: string;
  releaseNotes?: string;
  size: number; // in KB
  status: 'available' | 'downloading' | 'installing' | 'completed' | 'failed';
  releaseDate: Date;
  installDate?: Date;
  isMandatory: boolean;
} 