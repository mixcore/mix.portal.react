# MixDB Database Context Integration Guide

This guide explains how to integrate MixDB database contexts with your micro-apps to provide a more organized database experience for your users.

## Overview

MixDB allows you to create multiple database contexts, each representing a connection to a specific database. By integrating your micro-app with MixDB's database context system, you can:

1. Associate your app with a specific database context
2. Clearly show users which database their app data is stored in
3. Allow users to change the database context for your app
4. Keep tables from different apps organized and separate

## Setup Instructions

### 1. Add the MixDB Integration Component

Import the MixDB integration component in your micro-app's settings page:

```tsx
import { MixdbIntegration } from '@/components/integrations/mixdb-integration';
```

### 2. Add the Component to Your Settings Page

Add the component to your settings page, providing the necessary props:

```tsx
<MixdbIntegration 
  appId="your-app-id"
  appTitle="Your App Name"
  dbContextId={yourAppDbContextId}
  dbContextName="Your DB Context Name"
/>
```

### 3. Load Database Context Settings

Your app should load its database context settings from the app configuration. You can implement a service to fetch and update these settings. Here's a simplified example:

```tsx
// In your app settings service
async function loadAppSettings() {
  const response = await fetch('/api/apps/your-app-id/settings');
  return await response.json();
}

// In your settings component
useEffect(() => {
  async function fetchSettings() {
    const settings = await loadAppSettings();
    setDbContextId(settings.dbContextId);
    setDbContextName(settings.dbContextName);
  }
  
  fetchSettings();
}, []);
```

## How to Use in Your App

### 1. Get the Current Database Context

When your app needs to interact with database tables, it should use its configured database context ID:

```tsx
// In your data service
async function fetchData(tableName) {
  const settings = await loadAppSettings();
  const response = await fetch(`/api/mixdb/contexts/${settings.dbContextId}/tables/${tableName}/data`);
  return await response.json();
}
```

### 2. Create Tables in Your App's Context

When your app needs to create new tables, it should create them in its configured database context:

```tsx
// In your data service
async function createTable(tableSchema) {
  const settings = await loadAppSettings();
  const response = await fetch(`/api/mixdb/contexts/${settings.dbContextId}/tables`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tableSchema),
  });
  return await response.json();
}
```

## Sample Implementation

A complete sample implementation can be found in the template folder:

`src/templates/micro-app-settings/DatabaseSettings.tsx`

This example shows how to integrate the MixDB context component into a micro-app's settings page.

## Best Practices

1. **Default to the "Default" Context**: If your app doesn't have a configured database context, use the default system context.

2. **Explain to Users**: Provide clear explanations to users about what database contexts mean and why they might want to change them.

3. **App-specific Migration**: If a user changes your app's database context, offer to migrate existing data to the new context.

4. **Table Naming**: Use a prefix for your app's tables to avoid naming conflicts with other apps, even when using separate contexts.

5. **Context Validation**: Before using a context, validate that it exists and is accessible to avoid runtime errors.

## Troubleshooting

### Common Issues

1. **Context Not Found**: If your app's configured context no longer exists, fall back to the default context.
   
2. **Permission Issues**: Ensure your app has the necessary permissions to access the configured database context.

3. **Table Conflicts**: If multiple apps create tables with the same name in the same context, use schema validation to ensure compatibility.

### Getting Help

If you encounter issues with the database context system, contact the Mixcore development team or check the documentation for updates. 