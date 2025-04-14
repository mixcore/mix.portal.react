<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/9113740/201498864-2a900c64-d88f-4ed4-b5cf-770bcb57e1f5.png">
  <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/9113740/201498152-b171abb8-9225-487a-821c-6ff49ee48579.png">
</picture>

<div align="center"><strong>Next.js Admin Dashboard Starter Template With Shadcn-ui</strong></div>
<div align="center">Built with the Next.js 15 App Router</div>
<br />
<div align="center">
<a href="https://dub.sh/shadcn-dashboard">View Demo</a>
<span>
</div>

## Overview

This is a starter template using the following stack:

- Framework - [Next.js 15](https://nextjs.org/13)
- Language - [TypeScript](https://www.typescriptlang.org)
- Styling - [Tailwind CSS v4](https://tailwindcss.com)
- Components - [Shadcn-ui](https://ui.shadcn.com)
- Schema Validations - [Zod](https://zod.dev)
- State Management - [Zustand](https://zustand-demo.pmnd.rs)
- Search params state manager - [Nuqs](https://nuqs.47ng.com/)
- Auth - [Clerk](https://go.clerk.com/ILdYhn7)
- Tables - [Tanstack Data Tables](https://ui.shadcn.com/docs/components/data-table) • [Dice UI](https://www.diceui.com/docs/components/data-table)
- Forms - [React Hook Form](https://ui.shadcn.com/docs/components/form)
- Command+k interface - [kbar](https://kbar.vercel.app/)
- Linting - [ESLint](https://eslint.org)
- Pre-commit Hooks - [Husky](https://typicode.github.io/husky/)
- Formatting - [Prettier](https://prettier.io)

_If you are looking for a React admin dashboard starter, here is the [repo](https://github.com/Kiranism/react-shadcn-dashboard-starter)._

## Pages

| Pages                                                                                 | Specifications                                                                                                                                                                                                                                                          |
| :------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Signup / Signin](https://next-shadcn-dashboard-starter.vercel.app/auth/sign-up)      | Authentication with **Clerk** provides secure authentication and user management with multiple sign-in options including passwordless authentication, social logins, and enterprise SSO - all designed to enhance security while delivering a seamless user experience. |
| [Dashboard (Overview)](https://next-shadcn-dashboard-starter.vercel.app/dashboard)    | Cards with recharts graphs for analytics.Parallel routes in the overview sections with independent loading, error handling, and isolated component rendering .                                                                                                          |
| [Product](https://next-shadcn-dashboard-starter.vercel.app/dashboard/product)         | Tanstack tables with server side searching, filter, pagination by Nuqs which is a Type-safe search params state manager in nextjs                                                                                                                                       |
| [Product/new](https://next-shadcn-dashboard-starter.vercel.app/dashboard/product/new) | A Product Form with shadcn form (react-hook-form + zod).                                                                                                                                                                                                                |
| [Profile](https://next-shadcn-dashboard-starter.vercel.app/dashboard/profile)         | Clerk's full-featured account management UI that allows users to manage their profile and security settings                                                                                                                                                             |
| [Kanban Board](https://next-shadcn-dashboard-starter.vercel.app/dashboard/kanban)     | A Drag n Drop task management board with dnd-kit and zustand to persist state locally.                                                                                                                                                                                  |
| [Not Found](https://next-shadcn-dashboard-starter.vercel.app/dashboard/notfound)      | Not Found Page Added in the root level                                                                                                                                                                                                                                  |
| -                                                                                     | -                                                                                                                                                                                                                                                                       |

## Feature based organization

```plaintext
src/
├── app/ # Next.js App Router directory
│ ├── (auth)/ # Auth route group
│ │ ├── (signin)/
│ ├── (dashboard)/ # Dashboard route group
│ │ ├── layout.tsx
│ │ ├── loading.tsx
│ │ └── page.tsx
│ └── api/ # API routes
│
├── components/ # Shared components
│ ├── ui/ # UI components (buttons, inputs, etc.)
│ └── layout/ # Layout components (header, sidebar, etc.)
│
├── features/ # Feature-based modules
│ ├── feature/
│ │ ├── components/ # Feature-specific components
│ │ ├── actions/ # Server actions
│ │ ├── schemas/ # Form validation schemas
│ │ └── utils/ # Feature-specific utilities
│ │
├── lib/ # Core utilities and configurations
│ ├── auth/ # Auth configuration
│ ├── db/ # Database utilities
│ └── utils/ # Shared utilities
│
├── hooks/ # Custom hooks
│ └── use-debounce.ts
│
├── stores/ # Zustand stores
│ └── dashboard-store.ts
│
└── types/ # TypeScript types
└── index.ts
```

## Getting Started

> [!NOTE]  
> We are using **Next 15** with **React 19**, follow these steps:

Clone the repo:

```
git clone https://github.com/Kiranism/next-shadcn-dashboard-starter.git
```

- `pnpm install` ( we have legacy-peer-deps=true added in the .npmrc)
- Create a `.env.local` file by copying the example environment file:
  `cp env.example.txt .env.local`
- Add the required environment variables to the `.env.local` file.
- `pnpm run dev`

You should now be able to access the application at http://localhost:3000.

> [!WARNING]
> After cloning or forking the repository, be cautious when pulling or syncing with the latest changes, as this may result in breaking conflicts.

Cheers! 🥂

## Documentation

The project documentation has been reorganized into a clear, structured format located in the `docs/` directory:

```
docs/
├── MIGRATION-GUIDE.md       # Main entry point and overview
├── guides/                  # Detailed development guides
│   ├── API-GUIDE.md         # API integration guidelines
│   ├── ANGULAR-TO-REACT-PATTERNS.md  # Migration patterns
│   ├── CODING-STANDARDS.md  # Coding standards & best practices
│   └── ...
├── tracking/                # Progress tracking documents
│   ├── IMPLEMENTATION-PLAN.md # Overall implementation plan
│   ├── PROGRESS-TRACKER.md  # Detailed status tracking
│   └── ...
└── reference/               # Reference documentation
    ├── COMPONENT-REGISTRY.md # Component library catalog
    └── ...
```

### Getting Started with Documentation

If you're new to the project or returning after a break, start with these documents:

1. [Migration Guide](./docs/MIGRATION-GUIDE.md) - Overview of the migration project and current status
2. [Implementation Plan](./docs/tracking/IMPLEMENTATION-PLAN.md) - Current phase and scheduled tasks
3. [Progress Tracker](./docs/tracking/PROGRESS-TRACKER.md) - Detailed status of components and features

### Helper Scripts

We've provided helper scripts to streamline the migration process:

```bash
# View migration status
./docs/migration.sh status

# Show component implementation status
./docs/migration.sh component-status

# Show API integration status
./docs/migration.sh api-status

# Create a new component from template
./docs/migration.sh create-component ComponentName

# Create a new page from template
./docs/migration.sh create-page path/to/page
```

# Mixcore Micro Mini Apps Architecture

## Overview

The Mixcore dashboard implements a micro frontend architecture where specialized mini applications operate within a central dashboard shell. This architecture enables modular development while maintaining a unified user experience across the platform. Each mini app is a self-contained module that can be developed, tested, and deployed independently while integrating seamlessly with the master shell.

## Technical Architecture

### Core Components

#### 1. Dashboard Shell (`layout.tsx`)
```tsx
// Dashboard shell layout structure
export default async function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <KBar>
      <NavigationContextProvider>
        <SidebarProvider defaultOpen={true}>
          <LayoutContextProvider>
            <AppSidebar />
            <SidebarInset className='flex h-screen flex-col'>
              <Header />
              <main className='flex-1 overflow-auto' data-app-view="default">
                <LayoutContainer>
                  {children}
                </LayoutContainer>
              </main>
            </SidebarInset>
          </LayoutContextProvider>
        </SidebarProvider>
      </NavigationContextProvider>
    </KBar>
  );
}
```

- **Purpose**: Provides the master container with consistent layout elements
- **Components**:
  - `KBar`: Command palette for global shortcuts
  - `NavigationContextProvider`: Provides navigation state to all children
  - `SidebarProvider`: Controls sidebar visibility and state
  - `LayoutContextProvider`: Provides layout configuration and responsive state
  - `AppSidebar`: Primary navigation sidebar
  - `Header`: Top navigation bar
  - `LayoutContainer`: Standardized padding and layout constraints

#### 2. App Loader System (`AppLoader.tsx`)
```tsx
// App registry with dynamic imports
const APPS = {
  cms: () => import('@/app/dashboard/apps/cms'),
  mixdb: () => import('@/app/dashboard/apps/mixdb'),
  projects: () => import('@/app/dashboard/apps/projects'),
  workflow: () => import('@/app/dashboard/apps/workflow'),
  blogs: () => import('@/app/dashboard/apps/blogs'),
  'mini-app': () => import('@/app/dashboard/apps/mini-app')
};

export function AppLoader({ appId }: AppLoaderProps) {
  // Implementation details for dynamically loading apps
  // ...

  return <AppComponent />;
}
```

- **Purpose**: Dynamically imports and renders mini apps based on URL parameters
- **Key Functions**:
  - App Registry: Maps app IDs to their module paths
  - Dynamic Importing: Lazy-loads app code only when requested
  - Error Handling: Provides fallbacks for missing or errored apps
  - Loading States: Shows appropriate loading UI during import

#### 3. Mini App Entry Point (`apps/[app-id]/index.tsx`)
```tsx
export function MiniApp(props: MiniAppProps) {
  // Router and URL parameters
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // App state
  const [activeView, setActiveView] = useState<ViewType>(getInitialView());
  const [selectedItemId, setSelectedItemId] = useState<string | null>(itemIdParam || null);
  const isFluidLayout = useContainerStatus();
  
  // Initialization logic
  // State management
  // View rendering
  // Event handling
  
  return (
    <AppShell
      title={appConfig.displayName}
      navigation={appNavigation}
      activeView={activeView}
      onViewChange={handleViewChange}
      standalone={props.standalone}
      fluidLayout={isFluidLayout}
    >
      {renderView()}
    </AppShell>
  );
}

export default function MiniAppDefault() {
  return <MiniApp />;
}
```

- **Purpose**: Main entry point for the mini app
- **Responsibilities**:
  - App Initialization: Sets up app data and state
  - View Management: Controls which view is rendered
  - URL Management: Syncs app state with URL parameters
  - Layout Detection: Adapts to container environment

### Integration Points

#### 1. URL-Based Navigation
Mini apps use standardized URL parameter patterns:
```
/dashboard/apps?app=cms&view=list&id=123
```

- `?app=cms`: Specifies which mini app to load
- `?view=list`: Controls which view to display
- `?id=123`: Identifies the specific item in detail view

#### 2. Event Communication
```typescript
// Example event definitions
const EVENTS = {
  BREADCRUMB_UPDATE: 'mixcore:breadcrumbs:update',
  CONTEXT_SET: 'mixcore:context:set',
  LAYOUT_CHANGE: 'mixcore:layout:change'
};

// Emitting events
window.dispatchEvent(new CustomEvent(EVENTS.BREADCRUMB_UPDATE, {
  detail: {
    items: [
      { label: 'Dashboard', path: '/dashboard' },
      { label: 'CMS', path: '/dashboard/apps?app=cms' },
      { label: 'Posts', path: '/dashboard/apps?app=cms&view=list' }
    ]
  }
}));

// Listening for events
window.addEventListener(EVENTS.LAYOUT_CHANGE, (event) => {
  // Handle layout change
  const { isFluid } = event.detail;
  setFluidLayout(isFluid);
});
```

#### 3. Container Status Detection
```typescript
// Custom hook to detect container environment
export function useContainerStatus() {
  const [isFluid, setIsFluid] = useState(false);
  
  useEffect(() => {
    // Check if parent container has fluid layout attribute
    const container = document.querySelector('[data-layout="fluid"]');
    setIsFluid(!!container);
    
    // Listen for layout change events
    const handleLayoutChange = (event: CustomEvent) => {
      setIsFluid(event.detail.isFluid);
    };
    
    window.addEventListener(EVENTS.LAYOUT_CHANGE, handleLayoutChange as EventListener);
    return () => {
      window.removeEventListener(EVENTS.LAYOUT_CHANGE, handleLayoutChange as EventListener);
    };
  }, []);
  
  return isFluid;
}
```

## App Initialization Process

### 1. Registration Phase
```typescript
async function registerApp(): Promise<void> {
  try {
    // Register app metadata with Mixcore system
    const response = await fetch('/api/apps/register', {
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
```

### 2. Database Setup
```typescript
async function setupMixDBCollections(): Promise<void> {
  try {
    // Create the required collections in MixDB
    const response = await fetch('/api/mixdb/collections/create-many', {
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
```

### 3. Permissions Setup
```typescript
async function registerPermissions(): Promise<void> {
  try {
    // Register permissions with the auth system
    const response = await fetch('/api/auth/permissions/create-many', {
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
```

### 4. Demo Data Loading
```typescript
async function loadDemoData(): Promise<void> {
  try {
    // For each collection in the demo data, insert the records
    for (const [collectionName, records] of Object.entries(demoData.data)) {
      const response = await fetch(`/api/mixdb/collections/${collectionName}/records/create-many`, {
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
```

## Configuration Files

### 1. App Configuration (`app.config.json`)
```json
{
  "appId": "mini-app",
  "version": "1.0.0",
  "displayName": "Mini App",
  "description": "A template application for the Mixcore dashboard",
  "category": "tools",
  "icon": "AppWindow",
  "entryPoint": "/dashboard/apps?app=mini-app",
  "navigation": {
    "primary": [
      {
        "id": "dashboard",
        "label": "Dashboard",
        "path": "?app=mini-app&view=dashboard",
        "icon": "LayoutDashboard"
      },
      {
        "id": "list",
        "label": "Items",
        "path": "?app=mini-app&view=list",
        "icon": "List"
      },
      {
        "id": "settings",
        "label": "Settings", 
        "path": "?app=mini-app&view=settings",
        "icon": "Settings"
      }
    ]
  },
  "permissions": [
    {
      "name": "mini-app:read",
      "description": "View mini app data"
    },
    {
      "name": "mini-app:write",
      "description": "Create and update mini app data"
    },
    {
      "name": "mini-app:admin",
      "description": "Full administrative access to mini app"
    }
  ],
  "init": {
    "initOnInstall": true,
    "createDefaultPermissions": true
  },
  "ui": {
    "layout": {
      "fluid": false
    },
    "theme": {
      "primaryColor": "#0090FF"
    }
  }
}
```

### 2. Database Schema (`mixdb.schema.json`)
```json
{
  "collections": [
    {
      "name": "mini_app_items",
      "displayName": "Mini App Items",
      "fields": [
        {
          "name": "title",
          "type": "string",
          "required": true,
          "displayName": "Title",
          "searchable": true
        },
        {
          "name": "description",
          "type": "text",
          "required": false,
          "displayName": "Description"
        },
        {
          "name": "status",
          "type": "string",
          "required": true,
          "displayName": "Status",
          "default": "draft",
          "options": ["draft", "published", "archived"]
        },
        {
          "name": "created_at",
          "type": "datetime",
          "required": true,
          "displayName": "Created At",
          "default": "NOW()"
        },
        {
          "name": "updated_at",
          "type": "datetime",
          "required": true,
          "displayName": "Updated At",
          "default": "NOW()"
        }
      ],
      "indexes": [
        {
          "fields": ["title"],
          "type": "fulltext"
        },
        {
          "fields": ["status"],
          "type": "index"
        }
      ]
    }
  ]
}
```

### 3. Demo Data (`demo-data.json`)
```json
{
  "data": {
    "mini_app_items": [
      {
        "title": "First Item",
        "description": "This is the first demo item",
        "status": "published",
        "created_at": "2023-01-01T00:00:00Z",
        "updated_at": "2023-01-01T00:00:00Z"
      },
      {
        "title": "Second Item",
        "description": "This is the second demo item",
        "status": "draft",
        "created_at": "2023-01-02T00:00:00Z",
        "updated_at": "2023-01-02T00:00:00Z"
      }
    ]
  }
}
```

## Complete Mini App Directory Structure

```
mini-app/
├── app-globals.css        # App-specific styles
├── app-loader.ts          # Initialization and registration
├── index.tsx              # Main entry point
├── index.ts               # Public API exports
├── components/            # UI components
│   ├── Dashboard.tsx      # Main dashboard component
│   ├── ItemList.tsx       # List view component
│   ├── ItemDetail.tsx     # Detail view component
│   ├── ItemForm.tsx       # Form for creating/editing items
│   └── Settings.tsx       # Settings view component
├── config/                # Configuration files
│   ├── app.config.json    # App configuration
│   ├── demo-data.json     # Demo data
│   └── mixdb.schema.json  # Database schema
├── hooks/                 # Custom hooks
│   ├── useBreadcrumb.ts   # Breadcrumb integration
│   ├── useContainerStatus.ts # Layout detection
│   ├── useItems.ts        # Data fetching for items
│   └── useAppSettings.ts  # Settings management
├── layouts/               # Layout components
│   ├── AppShell.tsx       # Main app shell layout
│   └── ContentLayout.tsx  # Content layout with standard padding/margins
├── lib/                   # Utility functions and types
│   ├── mixdb-api.ts       # MixDB API client
│   ├── auth.ts            # Authentication utilities
│   ├── culture.ts         # Localization utilities
│   ├── types.ts           # TypeScript type definitions
│   └── validation.ts      # Form validation schemas
└── assets/                # Static assets
    ├── icons/             # App-specific icons
    └── images/            # App-specific images
```

## API Integration

### MixDB API Client
```typescript
// lib/mixdb-api.ts
export class MixDBClient {
  private baseUrl: string;
  private authToken?: string;
  
  constructor(config: { baseUrl: string, authToken?: string }) {
    this.baseUrl = config.baseUrl;
    this.authToken = config.authToken;
  }
  
  async getItems(collection: string, params: { page?: number, pageSize?: number, filter?: any } = {}) {
    const queryParams = new URLSearchParams();
    if (params.page) queryParams.set('page', params.page.toString());
    if (params.pageSize) queryParams.set('pageSize', params.pageSize.toString());
    if (params.filter) queryParams.set('filter', JSON.stringify(params.filter));
    
    const response = await fetch(`${this.baseUrl}/collections/${collection}/records?${queryParams.toString()}`, {
      headers: this.getHeaders(),
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch items: ${response.statusText}`);
    }
    
    return await response.json();
  }
  
  async getItem(collection: string, id: string) {
    const response = await fetch(`${this.baseUrl}/collections/${collection}/records/${id}`, {
      headers: this.getHeaders(),
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch item: ${response.statusText}`);
    }
    
    return await response.json();
  }
  
  async createItem(collection: string, data: any) {
    const response = await fetch(`${this.baseUrl}/collections/${collection}/records`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error(`Failed to create item: ${response.statusText}`);
    }
    
    return await response.json();
  }
  
  async updateItem(collection: string, id: string, data: any) {
    const response = await fetch(`${this.baseUrl}/collections/${collection}/records/${id}`, {
      method: 'PATCH',
      headers: this.getHeaders(),
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error(`Failed to update item: ${response.statusText}`);
    }
    
    return await response.json();
  }
  
  async deleteItem(collection: string, id: string) {
    const response = await fetch(`${this.baseUrl}/collections/${collection}/records/${id}`, {
      method: 'DELETE',
      headers: this.getHeaders(),
    });
    
    if (!response.ok) {
      throw new Error(`Failed to delete item: ${response.statusText}`);
    }
    
    return true;
  }
  
  private getHeaders() {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    
    if (this.authToken) {
      headers['Authorization'] = `Bearer ${this.authToken}`;
    }
    
    return headers;
  }
}
```

### Data Fetching Hook
```typescript
// hooks/useItems.ts
import { useState, useEffect } from 'react';
import { MixDBClient } from '../lib/mixdb-api';

const api = new MixDBClient({
  baseUrl: '/api/mixdb',
});

export function useItems(collection: string, params: { page?: number, pageSize?: number, filter?: any } = {}) {
  const [items, setItems] = useState<any[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    let isMounted = true;
    
    const fetchItems = async () => {
      try {
        setLoading(true);
        const result = await api.getItems(collection, params);
        
        if (isMounted) {
          setItems(result.items);
          setTotalItems(result.total);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err : new Error(String(err)));
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };
    
    fetchItems();
    
    return () => {
      isMounted = false;
    };
  }, [collection, params.page, params.pageSize, JSON.stringify(params.filter)]);
  
  const refetch = async () => {
    setLoading(true);
    try {
      const result = await api.getItems(collection, params);
      setItems(result.items);
      setTotalItems(result.total);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setLoading(false);
    }
  };
  
  return { items, totalItems, loading, error, refetch };
}
```

## Detailed Implementation Guidelines

### Creating a New Mini App

1. **Copy the Template**:
   ```bash
   cp -r src/templates/mini-app src/app/dashboard/apps/your-app-name
   ```

2. **Update Package Information**:
   ```json
   // package.json
   {
     "name": "@mixcore/your-app-name",
     "version": "1.0.0",
     "description": "Your app description",
     "author": "Your Name"
   }
   ```

3. **Configure App Settings**:
   - Edit `config/app.config.json` with your app details
   - Update app ID, display name, description, icons, etc.
   - Define navigation items for your app's main views

4. **Define Database Schema**:
   - Modify `config/mixdb.schema.json` with your data model
   - Define collections, fields, relationships, and indexes

5. **Register in App Loader**:
   ```typescript
   // src/components/app/AppLoader.tsx
   const APPS = {
     // Existing apps...
     'your-app-name': () => import('@/app/dashboard/apps/your-app-name')
   };
   ```

6. **Implement Views and Components**:
   - Customize Dashboard.tsx for your main view
   - Create list, detail, and form components as needed
   - Add settings and configuration UI

7. **Implement Data Integration**:
   - Use the MixDB API client for CRUD operations
   - Create custom hooks for specific data needs
   - Handle loading, error, and empty states

8. **Test the App**:
   - Navigate to `/dashboard/apps?app=your-app-name`
   - Verify all views and functionality work as expected
   - Test in both standalone and integrated modes

## Best Practices

### State Management
- Use URL parameters for main navigation state
- Keep local state contained within components when possible
- Use context for shared state within the app
- Persist configuration in localStorage or database

### Performance Optimization
- Lazy load components and views
- Implement virtual scrolling for large lists
- Use optimistic UI updates for faster perceived performance
- Cache API responses when appropriate
- Implement proper loading and error states

### Layout and UI
- Follow the Mixcore design system
- Use responsive layouts that adapt to container size
- Support both light and dark modes
- Use common UI components from the shared library
- Implement proper loading and skeleton states

### Error Handling
- Implement comprehensive error boundaries
- Provide meaningful error messages
- Add retry functionality for failed operations
- Log errors to monitoring service
- Implement graceful degradation

### Security
- Use proper authentication for all API requests
- Implement permission checks for sensitive operations
- Sanitize all user inputs
- Validate data on both client and server
- Follow OWASP security guidelines

## Troubleshooting

### Common Issues

#### App Not Loading
- Check `AppLoader.tsx` for proper registration
- Verify import path is correct
- Check console for JavaScript errors
- Ensure all dependencies are installed

#### API Errors
- Verify API endpoints are correct
- Check authentication status
- Inspect network requests in browser dev tools
- Verify permission configuration

#### Layout Issues
- Test in both fluid and contained layouts
- Check responsive design breakpoints
- Verify CSS isolation is working properly
- Check for conflicting styles with the parent application

#### State Management Issues
- Verify URL parameter handling
- Check state initialization logic
- Use React DevTools to inspect component state
- Verify event listeners are properly cleaned up

This architecture allows Mixcore to maintain a unified dashboard experience while enabling diverse functionality through specialized micro applications.
