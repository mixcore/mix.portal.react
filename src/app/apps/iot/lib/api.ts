'use client';

import { Device } from '../types/devices';
import { Automation } from '../types/automation';
import { EnergyData, DataStream } from '../types/analytics';

// In a real application, this would be fetching from a backend API

class IoTApiClient {
  private apiBaseUrl: string;
  
  constructor(baseUrl = '/api/v2/iot') {
    this.apiBaseUrl = baseUrl;
  }
  
  // Device Management API
  
  async getDevices(): Promise<Device[]> {
    // Mock implementation - would make a real API call
    console.log('Fetching devices from API');
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: '1',
            name: 'Living Room Thermostat',
            type: 'climate',
            status: 'on',
            value: '22°C',
            room: 'Living Room',
            healthStatus: 'good',
          }
          // More devices would be returned here
        ]);
      }, 500);
    });
  }
  
  async getDevice(id: string): Promise<Device | null> {
    // Mock implementation
    console.log(`Fetching device ${id} from API`);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id,
          name: 'Living Room Thermostat',
          type: 'climate',
          status: 'on',
          value: '22°C',
          room: 'Living Room',
          healthStatus: 'good',
        });
      }, 300);
    });
  }
  
  async createDevice(device: Omit<Device, 'id'>): Promise<Device> {
    // Mock implementation
    console.log('Creating device via API', device);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          ...device,
          id: `device-${Math.random().toString(36).substr(2, 9)}`,
        });
      }, 700);
    });
  }
  
  async updateDevice(id: string, updates: Partial<Device>): Promise<Device> {
    // Mock implementation
    console.log(`Updating device ${id} via API`, updates);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id,
          name: updates.name || 'Device Name',
          type: updates.type || 'sensor',
          status: updates.status || 'on',
          value: updates.value || '0',
          room: updates.room || 'Unknown',
          healthStatus: updates.healthStatus || 'good',
        });
      }, 600);
    });
  }
  
  async deleteDevice(id: string): Promise<boolean> {
    // Mock implementation
    console.log(`Deleting device ${id} via API`);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 400);
    });
  }
  
  // Automation API
  
  async getAutomations(): Promise<Automation[]> {
    // Mock implementation
    console.log('Fetching automations from API');
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          // Mock automation data would be here
        ]);
      }, 500);
    });
  }
  
  // Additional API methods for automation, analytics, etc.
  // would be implemented here in a similar pattern
}

// Create and export a singleton instance
const apiClient = new IoTApiClient();
export default apiClient; 