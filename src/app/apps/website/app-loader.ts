import { Globe } from 'lucide-react';

// App configuration interface
export interface AppConfig {
  appId: string;
  displayName: string;
  description: string;
  icon: any;
  version: string;
  settings?: {
    enableFullScreenByDefault?: boolean;
  };
  ui?: {
    layout?: {
      fluid?: boolean;
    };
  };
}

// Website app configuration
const appConfig: AppConfig = {
  appId: 'website',
  displayName: 'Website',
  description: 'Manage your website content and pages',
  icon: Globe,
  version: '1.0.0',
  settings: {
    enableFullScreenByDefault: false
  },
  ui: {
    layout: {
      fluid: false
    }
  }
};

/**
 * Get app configuration
 * @returns The app configuration
 */
export function getAppConfig(): AppConfig {
  return appConfig;
} 