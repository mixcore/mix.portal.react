// Analytics-related type definitions

export interface EnergyData {
  timestamp: Date;
  consumption: number;
  device?: string;
  cost?: number;
  unit?: 'kWh' | 'W';
  source?: 'grid' | 'solar' | 'battery' | 'other';
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