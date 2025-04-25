// API-related type definitions

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