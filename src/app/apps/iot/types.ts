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

export interface Automation {
  id: string;
  name: string;
  description?: string;
  trigger: {
    deviceId: string;
    condition: string;
    value: string;
    timeCondition?: {
      time?: string;
      days?: string[];
      recurrence?: 'daily' | 'weekly' | 'monthly' | 'custom';
    };
  };
  actions: {
    deviceId: string;
    action: string;
    value: string;
    delay?: number; // Delay in milliseconds
  }[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastTriggered?: Date;
  priority?: 'low' | 'medium' | 'high' | 'critical';
}

export interface EnergyData {
  timestamp: Date;
  consumption: number;
  device?: string;
  cost?: number;
  unit?: 'kWh' | 'W';
  source?: 'grid' | 'solar' | 'battery' | 'other';
}

export interface Alert {
  id: string;
  deviceId?: string;
  severity: 'info' | 'warning' | 'error' | 'critical';
  message: string;
  timestamp: Date;
  isRead: boolean;
  category: 'connectivity' | 'security' | 'performance' | 'maintenance' | 'energy' | 'system';
  relatedAutomationId?: string;
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

export interface ApiEndpoint {
  id: string;
  name: string;
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  requiresAuth: boolean;
  isEnabled: boolean;
  rateLimitPerMinute?: number;
}

export interface UserPermission {
  userId: string;
  canViewDevices: boolean;
  canControlDevices: boolean;
  canAddDevices: boolean;
  canCreateAutomations: boolean;
  canViewAnalytics: boolean;
  canManageUsers: boolean;
  canUpdateFirmware: boolean;
  deviceRestrictions?: string[]; // Device IDs that this user cannot access
}

export interface DataStream {
  id: string;
  deviceId: string;
  name: string;
  dataType: 'number' | 'string' | 'boolean' | 'object' | 'binary';
  unit?: string;
  minValue?: number;
  maxValue?: number;
  sampleRate?: number; // Samples per second
  retentionPeriod?: number; // Days to retain data
  isEnabled: boolean;
}

export interface AnalyticsRule {
  id: string;
  name: string;
  description?: string;
  deviceIds: string[];
  dataStreamIds: string[];
  calculationType: 'average' | 'sum' | 'min' | 'max' | 'count' | 'custom';
  timeWindow: number; // In minutes
  threshold?: number;
  alertOnThresholdCrossed: boolean;
  executionFrequency: 'realtime' | 'hourly' | 'daily' | 'weekly';
  isEnabled: boolean;
} 