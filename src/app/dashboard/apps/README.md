# Mixcore Dashboard Apps

This directory contains the various mini-apps that can be loaded in the Mixcore dashboard.

## URL Structure

The apps now support a URL-friendly structure with the following pattern:

```
/dashboard/apps/[appId]/[viewName]?pathParams...
```

### URL Parameters:

- **appId**: The identifier of the app to load (e.g., 'cms', 'mixdb', 'mini-app')
- **viewName**: The view to display within the app (e.g., 'dashboard', 'list', 'detail', 'settings')
- **pathParams**: Additional query parameters specific to the view (e.g., 'id=123')

### Examples:

- `/dashboard/apps/cms/dashboard` - Load the CMS app with the dashboard view
- `/dashboard/apps/mixdb/list` - Load the MixDB app with the list view
- `/dashboard/apps/mini-app/detail?id=123` - Load the mini-app with the detail view for item ID 123

### Backwards Compatibility

The older URL format (`/dashboard/apps?app=appId&view=viewName`) is still supported and will automatically redirect to the new URL structure.

## Adding a New App

When adding a new app, make sure to:

1. Register it in the `APPS` object in `src/components/app/AppLoader.tsx`
2. Implement the app component to handle the URL parameters via both the `params` prop and URL query parameters

## App Props Interface

All apps should accept the following interface:

```typescript
interface AppProps {
  standalone?: boolean;
  params?: Record<string, any>;
}
```

The `params` object will include the view name and any additional query parameters. 