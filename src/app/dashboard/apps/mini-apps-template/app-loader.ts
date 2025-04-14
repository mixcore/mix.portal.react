'use client';

import appConfig from './config/app.config.json';
import demoData from './config/demo-data.json';
import schemaData from './config/mixdb.schema.json';

interface AppConfig {
  appId: string;
  version: string;
  displayName: string;
  description: string;
  category: string;
  icon: string;
  author: {
    name: string;
    email: string;
    url: string;
  };
  license: string;
  repository: {
    type: string;
    url: string;
  };
  entryPoint: string;
  init: {
    initOnInstall: boolean;
    schemaFile: string;
    demoDataFile: string;
    createDefaultPermissions: boolean;
  };
  mainStyles: string;
  navigation: {
    position: string;
    priority: number;
    menuItem: {
      title: string;
      icon: string;
      url: string;
      badge: string | null;
      contextId: string;
    };
  };
  permissions: Array<{
    name: string;
    displayName: string;
    description: string;
  }>;
  settings: Record<string, any>;
  integrations: Record<string, any>;
  ui: Record<string, any>;
  storage: Record<string, any>;
}

// Get app configuration
export function getAppConfig(): AppConfig {
  return appConfig as AppConfig;
}

// Initialize the app with demo data and schema
export async function initializeApp(): Promise<boolean> {
  try {
    // For a real implementation, this would call MixDB API to set up collections
    // and populate them with demo data

    // 1. Check if collections already exist
    const collectionsExist = await checkCollectionsExist();
    if (collectionsExist) {
      console.log('Collections already exist, skipping initialization');
      return true;
    }

    // 2. Create collections based on schema
    await createCollections();

    // 3. Populate with demo data
    await populateDemoData();

    // 4. Register permissions
    await registerPermissions();

    // For demo purposes, just wait a bit to simulate API calls
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('App initialized successfully');
    return true;
  } catch (error) {
    console.error('Failed to initialize app:', error);
    return false;
  }
}

// Check if collections already exist
async function checkCollectionsExist(): Promise<boolean> {
  try {
    // In a real implementation, this would check MixDB for existing collections
    // Sample API call (not implemented here):
    // const response = await fetch('/api/v2/mixdb/collections?name=template_items');
    // return response.status === 200;

    // For demo, return false to simulate first-time setup
    return false;
  } catch (error) {
    console.error('Error checking collections:', error);
    return false;
  }
}

// Create collections based on schema
async function createCollections(): Promise<boolean> {
  try {
    // In a real implementation, this would create collections in MixDB
    // Sample API call (not implemented here):
    // const response = await fetch('/api/v2/mixdb/collections', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(schemaData.properties.collections)
    // });
    // return response.status === 201;

    console.log('Creating collections from schema:', schemaData.properties.collections);
    return true;
  } catch (error) {
    console.error('Error creating collections:', error);
    return false;
  }
}

// Populate with demo data
async function populateDemoData(): Promise<boolean> {
  try {
    // In a real implementation, this would populate collections in MixDB
    // Sample API call (not implemented here):
    // for (const collectionName in demoData.data) {
    //   const response = await fetch(`/api/v2/mixdb/${collectionName}/batch`, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(demoData.data[collectionName])
    //   });
    //   if (response.status !== 201) return false;
    // }

    console.log('Populating with demo data:', demoData.data);
    return true;
  } catch (error) {
    console.error('Error populating demo data:', error);
    return false;
  }
}

// Register permissions
async function registerPermissions(): Promise<boolean> {
  try {
    // In a real implementation, this would register permissions in the auth system
    // Sample API call (not implemented here):
    // const response = await fetch('/api/v2/permissions/batch', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(appConfig.permissions)
    // });
    // return response.status === 201;

    console.log('Registering permissions:', appConfig.permissions);
    return true;
  } catch (error) {
    console.error('Error registering permissions:', error);
    return false;
  }
} 