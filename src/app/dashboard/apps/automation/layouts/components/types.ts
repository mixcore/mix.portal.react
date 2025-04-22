// Define view types for type safety
export type ViewType = 'dashboard' | 'list' | 'detail' | 'settings';

export interface AppConfig {
  appId: string;
  displayName: string;
  icon: string;
  settings?: {
    enableFullScreenByDefault?: boolean;
    [key: string]: any;
  };
  ui?: {
    layout?: {
      fluid?: boolean;
      [key: string]: any;
    };
    [key: string]: any;
  };
  [key: string]: any;
} 