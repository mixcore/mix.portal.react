'use client';

import type { MixcoreAppConfig } from '@/types/app';
import appConfig from './config/app.config.json';
import schemaConfig from './config/mixdb.schema.json';
import demoData from './config/demo-data.json';

// Flag to track whether we're in standalone web app mode
let isWebAppMode = false;

/**
 * Set web app mode - call this to enable standalone mode
 */
export function setWebAppMode(enabled: boolean): void {
  isWebAppMode = enabled;
  console.log(`Web app mode ${enabled ? 'enabled' : 'disabled'}`);
}

/**
 * Get whether we're in web app mode
 */
export function isInWebAppMode(): boolean {
  return isWebAppMode;
}

/**
 * Get the API base URL, taking into account web app mode
 */
export function getApiBaseUrl(): string {
  // In web app mode, check for custom API URL
  if (isWebAppMode && typeof window !== 'undefined' && window.__MIXCORE_API_BASE_URL) {
    return window.__MIXCORE_API_BASE_URL;
  }
  
  // Default API base URL
  return '/api';
}

/**
 * Initialize the Mini App
 * This function is called when the app is first installed or initialized
 */
export async function initializeApp(): Promise<boolean> {
  try {
    console.log(`Initializing ${appConfig.displayName} app...`);
    
    // In development mode or if API endpoints are not ready,
    // simulate successful initialization
    if (process.env.NODE_ENV === 'development' || !isApiEndpointAvailable()) {
      console.log('Running in development mode: simulating successful initialization');
      await simulateInitialization();
      return true;
    }
    
    // For production with actual API endpoints
    // Skip registration when in web app mode
    if (!isWebAppMode) {
      // Register app with Mixcore
      await registerApp();
    }
    
    // Setup MixDB collections
    await setupMixDBCollections();
    
    // Load demo data if needed
    if (appConfig.init.initOnInstall) {
      await loadDemoData();
    }
    
    // Register permissions - skip in web app mode
    if (appConfig.init.createDefaultPermissions && !isWebAppMode) {
      await registerPermissions();
    }
    
    console.log(`${appConfig.displayName} app initialized successfully`);
    return true;
  } catch (error) {
    console.error(`Failed to initialize ${appConfig.displayName} app:`, error);
    return false;
  }
}

/**
 * Check if API endpoints are available
 */
function isApiEndpointAvailable(): boolean {
  // This is a placeholder - in a real implementation, you might 
  // check for a feature flag or configuration setting
  return false; // Default to false for now until APIs are ready
}

/**
 * Simulate app initialization for development
 */
async function simulateInitialization(): Promise<void> {
  // Simulate API delays
  await new Promise(resolve => setTimeout(resolve, 800));
  
  console.log('App registration simulated');
  console.log('MixDB collections setup simulated');
  console.log('Demo data loading simulated');
  console.log('Permissions registration simulated');
}

/**
 * Register the app with Mixcore
 */
async function registerApp(): Promise<void> {
  try {
    // Register app metadata with Mixcore system
    const response = await fetch(`${getApiBaseUrl()}/apps/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        appId: appConfig.appId,
        version: appConfig.version,
        displayName: appConfig.displayName,
        description: appConfig.description,
        category: appConfig.category,
        icon: appConfig.icon,
        entryPoint: appConfig.entryPoint,
        navigation: appConfig.navigation
      }),
    });
    
    if (!response.ok) {
      throw new Error(`Failed to register app: ${response.statusText}`);
    }
    
    console.log('App registered successfully');
  } catch (error) {
    console.error('Error registering app:', error);
    throw error;
  }
}

/**
 * Set up MixDB collections needed for the app
 */
async function setupMixDBCollections(): Promise<void> {
  try {
    // Create the required collections in MixDB
    const response = await fetch(`${getApiBaseUrl()}/mixdb/collections/create-many`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(schemaConfig.collections),
    });
    
    if (!response.ok) {
      throw new Error(`Failed to create collections: ${response.statusText}`);
    }
    
    console.log('MixDB collections created successfully');
  } catch (error) {
    console.error('Error setting up MixDB collections:', error);
    throw error;
  }
}

/**
 * Load demo data into the collections
 */
async function loadDemoData(): Promise<void> {
  try {
    // For each collection in the demo data, insert the records
    for (const [collectionName, records] of Object.entries(demoData.data)) {
      const response = await fetch(`${getApiBaseUrl()}/mixdb/collections/${collectionName}/records/create-many`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(records),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to insert records for ${collectionName}: ${response.statusText}`);
      }
    }
    
    console.log('Demo data loaded successfully');
  } catch (error) {
    console.error('Error loading demo data:', error);
    throw error;
  }
}

/**
 * Register app permissions
 */
async function registerPermissions(): Promise<void> {
  try {
    // Register permissions with the auth system
    const response = await fetch(`${getApiBaseUrl()}/auth/permissions/create-many`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(appConfig.permissions),
    });
    
    if (!response.ok) {
      throw new Error(`Failed to register permissions: ${response.statusText}`);
    }
    
    console.log('Permissions registered successfully');
  } catch (error) {
    console.error('Error registering permissions:', error);
    throw error;
  }
}

/**
 * Get app configuration
 */
export function getAppConfig(): MixcoreAppConfig {
  return appConfig as MixcoreAppConfig;
}

/**
 * Uninstall the app
 */
export async function uninstallApp(): Promise<boolean> {
  try {
    // In development mode, simulate successful uninstallation
    if (process.env.NODE_ENV === 'development' || !isApiEndpointAvailable() || isWebAppMode) {
      await new Promise(resolve => setTimeout(resolve, 500));
      console.log(`${appConfig.displayName} app uninstallation simulated`);
      return true;
    }
    
    // Clean up app data and registrations
    await fetch(`${getApiBaseUrl()}/apps/${appConfig.appId}/uninstall`, {
      method: 'POST',
    });
    
    console.log(`${appConfig.displayName} app uninstalled successfully`);
    return true;
  } catch (error) {
    console.error(`Failed to uninstall ${appConfig.displayName} app:`, error);
    return false;
  }
}

export default {
  initializeApp,
  getAppConfig,
  uninstallApp,
  setWebAppMode,
  isInWebAppMode,
  getApiBaseUrl
}; 