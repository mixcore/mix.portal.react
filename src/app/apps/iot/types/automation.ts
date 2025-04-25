// Automation-related type definitions

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