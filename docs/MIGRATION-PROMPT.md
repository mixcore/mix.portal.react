# Mixcore Migration Prompt

This document serves as a prompt reference for working on the Mixcore application migration from AngularJS to Next.js. It provides a high-level overview and directs you to the detailed documentation.

## Documentation Structure

We have organized the migration documentation into a clear, structured format:

```
mix-app/                     # angulajs source code
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

## Getting Started

To work on the migration:

1. Start with the [Migration Guide](./MIGRATION-GUIDE.md) for an overview
2. Check the [Progress Tracker](./tracking/PROGRESS-TRACKER.md) to see what to work on next
3. Follow the [Implementation Plan](./tracking/IMPLEMENTATION-PLAN.md) for phase details
4. Use the [Component Registry](./reference/COMPONENT-REGISTRY.md) to find reusable components
5. Refer to specific guides as needed:
   - [API Guide](./guides/API-GUIDE.md) for API integration
   - [AngularJS-to-React Patterns](./guides/ANGULAR-TO-REACT-PATTERNS.md) for conversion patterns
   - [Coding Standards](./guides/CODING-STANDARDS.md) for implementation standards

## Helper Script

We've created a helper script to streamline the migration process:

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

## Core Migration Process

When migrating a component or page, follow these steps:

1. Check the [Progress Tracker](./tracking/PROGRESS-TRACKER.md) to confirm it's not already in progress
2. Consult the [Component Registry](./reference/COMPONENT-REGISTRY.md) for reusable components
3. Create the component/page using the helper script or templates
4. Use the [AngularJS-to-React Patterns](./guides/ANGULAR-TO-REACT-PATTERNS.md) for guidance
5. Implement API integration following the [API Guide](./guides/API-GUIDE.md)
6. Update the [Progress Tracker](./tracking/PROGRESS-TRACKER.md) once completed

## Navigation Context System

The application now supports context-specific navigation based on app context, user persona, roles, and permissions. This allows the UI to adapt based on user context:

### Key Features

- **Context-Specific Navigation**: Menu items can be filtered based on the active context (CMS, MixDB, Design, etc.)
- **Persona-Based Views**: Different users can have tailored experiences (Admin, Content Manager, Designer, etc.)
- **Role and Permission Support**: Navigation adapts to user's assigned roles and permissions
- **Priority-Based Ordering**: Menu items are displayed in priority order for better organization
- **Apps CTA in Header**: Users can quickly switch between app contexts via a dropdown in the header

### Implementation

Context-specific navigation is implemented through:

1. **NavItem Extensions**: The NavItem interface now includes `contextId`, `appId`, `personaIds`, `roleIds`, etc.
2. **Context Provider**: The `NavigationContextProvider` manages the active context and persona
3. **Context Selector**: Users can switch between contexts and personas via the sidebar and header
4. **Filtered Items**: The sidebar dynamically renders navigation based on the active context
5. **Header Apps CTA**: Provides a convenient way to switch between app contexts from any page

### Example Usage

To create a context-specific menu item:

```tsx
{
  title: 'Content',
  url: '#',
  icon: 'post',
  contextId: 'cms', // Context identification
  appId: 'cms',
  personaIds: ['admin', 'content-manager'], // Only visible to these personas
  priority: 10, // Ordering priority
  items: [
    // Child items
  ]
}
```

## Mini-App Architecture

Each mini-app in Mixcore should be designed as a self-contained mini-application that can be hot-loaded into the main application. This modular approach allows for better separation of concerns and improved performance through code splitting.

### Key Concepts

- **Hot-Loading**: mini-apps load dynamically without requiring full page reloads
- **Isolated Shell Layouts**: Each mini-app has its own shell layout displayed within the `<main>` element of /dashboard/apps/
- **Contextual UI**: UI elements adapt based on the active app
- **Code Splitting**: Only load code necessary for the current app

### Implementation

1. **App Module Structure**:
```
/src/app/dashboard/apps
  /cms
    /components
    /hooks
    /layouts
      AppShell.tsx  # App-specific shell layout
    /lib
    index.tsx       # Entry point
  /mixdb
    ...
  /design
    ...
```

2. **App Registration**:
```tsx
// App registry
const APPS = {
  cms: () => import('@/app/dashboard/apps/cms'),
  mixdb: () => import('@/app/dashboard/apps/mixdb'),
  design: () => import('@/app/dashboard/apps/projects'),
  // Additional apps
};
```

3. **App Shell Template**:
```tsx
// apps/[app-name]/layouts/AppShell.tsx
export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-shell">
      {/* App-specific header elements */}
      <div className="app-content">
        {children}
      </div>
      {/* App-specific footer elements */}
    </div>
  );
}
```

4. **App Loading**:
```tsx
// App loader component
export function AppLoader({ appId }: { appId: string }) {
  const [AppComponent, setAppComponent] = useState<React.ComponentType | null>(null);
  
  useEffect(() => {
    if (APPS[appId]) {
      APPS[appId]().then(module => {
        setAppComponent(() => module.default);
      });
    }
  }, [appId]);
  
  if (!AppComponent) return <LoadingSpinner />;
  
  return <AppComponent />;
}
```

### Mini-App Requirements

Each mini-app must include the following files and features to ensure proper integration with the Mixcore system:

#### Required Files

1. **app-globals.css**: App-specific styles that override or extend the global styles
   ```
   /src/app/dashboard/apps/[app-name]/app-globals.css
   ```

2. **Configuration Files**: Located in the config directory
   ```
   /src/app/dashboard/apps/[app-name]/config/
   ├── app.config.json      # App configuration
   ├── demo-data.json       # Sample data for initialization
   └── mixdb.schema.json    # MixDB schema definition
   ```

3. **App Loader**: For initialization and registration
   ```
   /src/app/dashboard/apps/[app-name]/app-loader.ts
   ```

4. **Documentation**: Basic usage and development guides
   ```
   /src/app/dashboard/apps/[app-name]/README.md
   ```

#### Configuration Schema

The `app.config.json` should follow this structure:

```json
{
  "appId": "[unique-app-id]",
  "version": "1.0.0",
  "displayName": "App Display Name",
  "description": "App description",
  "category": "category",
  "icon": "material_icon_name",
  "author": {
    "name": "Author Name",
    "email": "email@example.com",
    "url": "https://example.com"
  },
  "license": "MIT",
  "entryPoint": "index.tsx",
  "init": {
    "initOnInstall": true,
    "schemaFile": "./mixdb.schema.json",
    "demoDataFile": "./demo-data.json",
    "createDefaultPermissions": true
  },
  "mainStyles": "app-globals.css",
  "navigation": {
    "position": "main",
    "priority": 5,
    "menuItem": {
      "title": "App Name",
      "icon": "icon_name",
      "url": "/dashboard/apps/[app-id]",
      "badge": null,
      "contextId": "[app-id]"
    }
  },
  "permissions": [
    {
      "name": "[app-id].action",
      "displayName": "Action Name",
      "description": "Action description"
    }
  ],
  "settings": {
    // App-specific settings
  },
  "integrations": {
    "cms": {
      "enabled": true,
      "createContentTypes": true
    },
    "mixdb": {
      "enabled": true
    },
    "authentication": {
      "enabled": true,
      "requiredRoles": ["Administrator", "Editor"]
    }
  }
}
```

#### Initialization Process

Each mini-app should initialize itself when first loaded:

```tsx
// In your index.tsx
'use client';

import { useState, useEffect } from 'react';
import { initializeApp } from './app-loader';
import './app-globals.css';

export function MyApp() {
  const [isInitialized, setIsInitialized] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  
  // Initialize app if needed
  useEffect(() => {
    const appInitKey = 'mixcore_[app-id]_initialized';
    const isAppInitialized = localStorage.getItem(appInitKey) === 'true';
    
    if (!isAppInitialized) {
      setIsLoading(true);
      initializeApp()
        .then(success => {
          if (success) {
            localStorage.setItem(appInitKey, 'true');
          }
          setIsInitialized(success);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error initializing app:', error);
          setIsInitialized(false);
          setIsLoading(false);
        });
    }
  }, []);
  
  // Show loading state
  if (isLoading) {
    return <LoadingIndicator />;
  }
  
  // Show error state
  if (!isInitialized) {
    return <InitializationError />;
  }
  
  // Render app
  return (
    <AppShell>
      {/* App content */}
    </AppShell>
  );
}

export default MyApp;
```

#### Container Adaptability

All mini-apps should adapt to their container size properly:

1. Create a `useContainerStatus` hook to detect fluid/container mode
2. Implement responsive layouts for all views
3. Handle both windowed and full-screen modes
4. Use CSS variables for consistent spacing
5. Ensure proper scrolling behavior inside containers

#### Testing Requirements

Before submitting a mini-app, ensure:

1. It initializes correctly with proper database schema and demo data
2. It adapts properly to container size changes
3. All views render correctly in both light and dark theme
4. Permissions are properly applied to UI elements and actions
5. Error states and loading indicators display correctly

## Component Templates

### UI Component Template

```tsx
'use client';

import React from 'react';
import { useState, useEffect } from 'react';

interface ComponentProps {
  // Define props
}

export function Component({ ...props }: ComponentProps) {
  // State and hooks
  
  return (
    <div className="container mx-auto p-4">
      {/* Component content */}
    </div>
  );
}
```

### Page Template

```tsx
'use client';

import { PageLayout } from '@/components/layouts/PageLayout';
import { PageHeader } from '@/components/PageHeader';

export default function PageName() {
  return (
    <PageLayout>
      <PageHeader title="Page Title" />
      <main className="container mx-auto p-4">
        {/* Page content */}
      </main>
    </PageLayout>
  );
}
```

## Additional Resources

For more information, please refer to:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [React Hook Form Documentation](https://react-hook-form.com/get-started)
- [Zod Documentation](https://zod.dev/)

## Current Migration Status

We are currently in **Phase 2: Content Management** with the following priorities:

- Complete the Pages feature (including edit functionality)
- Implement Posts management
- Refine authentication system

For detailed status, see the [Progress Tracker](./tracking/PROGRESS-TRACKER.md). 

## UI Component Standardization

To ensure a consistent user experience across the application, all mini-apps and components should use the UI component library based on shadcn/ui. This helps maintain a cohesive design language throughout the application.

### Key UI Standardization Requirements

1. **Use shadcn/ui Components**: Rather than building custom UI elements, leverage the shadcn/ui components for all common UI needs.
   - Buttons, inputs, selects, and dialogs should use shadcn/ui implementations
   - Toolbars and control panels should be built from shadcn/ui primitives
   
2. **Dark Mode Support**: All components must support both light and dark themes.
   - Use theme tokens instead of hardcoded colors (e.g., `bg-card` instead of `bg-white`)
   - Add `dark:` variants for any custom colors
   - Test all components in both light and dark mode
   
3. **Responsive Design**: Components should adapt gracefully to different screen sizes.
   - Mobile-first approach
   - Use fluid layouts and responsive spacing
   
4. **Accessibility**: Ensure all UI components meet accessibility standards.
   - Proper keyboard navigation
   - Screen reader compatibility
   - Sufficient color contrast

### Example: Toolbar Implementation

When implementing toolbars, such as those in the Gantt chart component:

```tsx
// ❌ Avoid custom implementations
<div className="toolbar">
  <button className="custom-button">
    <span className="icon">+</span>
    Add
  </button>
</div>

// ✅ Use shadcn/ui components
<div className="flex items-center gap-2">
  <Button variant="outline" size="sm">
    <Plus className="h-4 w-4 mr-1" />
    Add
  </Button>
  <Separator orientation="vertical" className="h-6" />
  <ToggleGroup type="single" variant="outline" size="sm">
    <ToggleGroupItem value="day">Day</ToggleGroupItem>
    <ToggleGroupItem value="week">Week</ToggleGroupItem>
    <ToggleGroupItem value="month">Month</ToggleGroupItem>
  </ToggleGroup>
</div>
```

By following these standards, we ensure that all parts of the application look and feel consistent, which improves user experience and makes maintenance easier. 

## Workflow Automation Mini-App

The Workflow Automation mini-app provides no-code/low-code automation capabilities similar to n8n, allowing users to create, edit, and manage automated workflows through a visual editor interface.

### Key Features

- **Visual Workflow Editor**: Drag-and-drop interface for creating complex workflows
- **Node-Based Architecture**: Connect nodes to build automation flows
- **Triggers and Actions**: Support for various event triggers and action types
- **Data Transformation**: Tools for mapping, filtering, and transforming data between nodes
- **Scheduling**: Time-based execution with cron expressions
- **Error Handling**: Built-in retry mechanisms and error paths
- **Execution History**: Track and debug workflow runs
- **Templates**: Pre-built workflow templates for common automation tasks
- **Integration with Mixcore Apps**: Seamless connection with CMS, MixDB, and other mini-apps

### Implementation

The Workflow Automation mini-app follows the standard mini-app architecture with specific focus on the workflow editor component:

1. **App Module Structure**:
```
/src/app/dashboard/apps
  /workflow
    /components
      /editor
        /canvas
          Canvas.tsx         # Main workflow canvas
          NodeComponent.tsx  # Visualization of workflow nodes
          ConnectionLine.tsx # Connection between nodes
          Controls.tsx       # Zoom/pan controls
        /sidebar
          NodePalette.tsx    # Available node types
          Properties.tsx     # Node configuration panel
        /nodes
          TriggerNodes.tsx   # Event trigger node implementations
          ActionNodes.tsx    # Action node implementations
          LogicNodes.tsx     # Flow control node implementations
        WorkflowEditor.tsx   # Main editor component
      /execution
        RunHistory.tsx       # Execution history and logs
        Debugger.tsx         # Real-time debugging tools
      /shared
        NodeIcon.tsx         # Node type icons
        ConnectionPath.tsx   # SVG path generator for connections
    /hooks
      useWorkflow.ts         # Workflow state management
      useNodeTypes.ts        # Node type registry
      useConnections.ts      # Connection handling logic
      useExecutionHistory.ts # Execution history management
    /layouts
      AppShell.tsx           # App-specific shell layout
    /lib
      workflowEngine.ts      # Core workflow execution engine
      nodeRegistry.ts        # Node type registration system
      validationUtils.ts     # Workflow validation utilities
    index.tsx                # Entry point
    /config
      app.config.json        # App configuration
      demo-data.json         # Sample workflows for initialization
      mixdb.schema.json      # MixDB schema for workflow storage
```

2. **Workflow Editor Implementation**:

```tsx
'use client';

import React, { useState, useCallback } from 'react';
import ReactFlow, {
  Background,
  Controls,
  Connection,
  Edge,
  Node,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  useReactFlow,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { NodePalette } from './sidebar/NodePalette';
import { Properties } from './sidebar/Properties';
import { nodeTypes } from './nodes';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Play, Save, Undo, Redo } from 'lucide-react';
import { useWorkflow } from '../../hooks/useWorkflow';

export function WorkflowEditor({ workflowId }: { workflowId?: string }) {
  const { workflow, saveWorkflow, executeWorkflow } = useWorkflow(workflowId);
  const [nodes, setNodes, onNodesChange] = useNodesState(workflow?.nodes || []);
  const [edges, setEdges, onEdgesChange] = useEdgesState(workflow?.edges || []);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const reactFlowInstance = useReactFlow();

  const onConnect = useCallback((connection: Connection) => {
    // Logic to connect nodes
  }, []);

  const onNodeClick = useCallback((_, node: Node) => {
    setSelectedNode(node);
  }, []);

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
  }, []);

  const onDrop = useCallback((event: React.DragEvent) => {
    // Logic to add new nodes from palette
  }, [reactFlowInstance]);

  const handleSave = useCallback(() => {
    saveWorkflow({
      ...workflow,
      nodes,
      edges,
    });
  }, [workflow, nodes, edges, saveWorkflow]);

  const handleExecute = useCallback(() => {
    executeWorkflow();
  }, [executeWorkflow]);

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-2 p-2 border-b">
        <Button variant="outline" size="sm" onClick={handleSave}>
          <Save className="h-4 w-4 mr-1" />
          Save
        </Button>
        <Button variant="outline" size="sm" onClick={handleExecute}>
          <Play className="h-4 w-4 mr-1" />
          Run
        </Button>
      </div>
      
      <div className="flex flex-1 h-full">
        <div className="w-64 border-r p-4 h-full overflow-auto">
          <Tabs defaultValue="nodes">
            <TabsList className="w-full">
              <TabsTrigger value="nodes" className="flex-1">Nodes</TabsTrigger>
              <TabsTrigger value="properties" className="flex-1">Properties</TabsTrigger>
            </TabsList>
            <TabsContent value="nodes" className="mt-2">
              <NodePalette />
            </TabsContent>
            <TabsContent value="properties" className="mt-2">
              <Properties node={selectedNode} onChange={(updated) => {
                // Logic to update node properties
              }} />
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="flex-1 h-full">
          <ReactFlowProvider>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onNodeClick={onNodeClick}
              onDragOver={onDragOver}
              onDrop={onDrop}
              nodeTypes={nodeTypes}
              fitView
              attributionPosition="bottom-right"
            >
              <Background />
              <Controls />
            </ReactFlow>
          </ReactFlowProvider>
        </div>
      </div>
    </div>
  );
}
```

3. **Node Types Registry**:

```tsx
// nodeRegistry.ts
import { NodeType } from './types';

const nodeTypes: Record<string, NodeType> = {};

export function registerNodeType(type: string, nodeConfig: NodeType) {
  nodeTypes[type] = nodeConfig;
}

export function getNodeTypes(): Record<string, NodeType> {
  return nodeTypes;
}

export function getNodeCategories(): string[] {
  const categories = new Set<string>();
  Object.values(nodeTypes).forEach(node => {
    categories.add(node.category);
  });
  return Array.from(categories);
}

// Example node registration
registerNodeType('http.request', {
  type: 'http.request',
  label: 'HTTP Request',
  category: 'HTTP',
  description: 'Make HTTP requests to external services',
  icon: 'globe',
  inputs: [{
    name: 'input',
    label: 'Input',
    multiple: false,
  }],
  outputs: [{
    name: 'output',
    label: 'Output',
    multiple: true,
  }],
  properties: [
    {
      name: 'url',
      label: 'URL',
      type: 'string',
      required: true,
    },
    {
      name: 'method',
      label: 'Method',
      type: 'select',
      options: ['GET', 'POST', 'PUT', 'DELETE'],
      default: 'GET',
    },
    // Additional properties
  ],
  execute: async (inputs, properties) => {
    // Execution logic
  }
});
```

### Workflow Schema

The workflow schema stored in MixDB defines the structure of workflow documents:

```json
{
  "name": "workflow",
  "label": "Workflow",
  "fields": [
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": true
    },
    {
      "name": "description",
      "label": "Description",
      "type": "text"
    },
    {
      "name": "active",
      "label": "Active",
      "type": "boolean",
      "default": false
    },
    {
      "name": "nodes",
      "label": "Nodes",
      "type": "json"
    },
    {
      "name": "edges",
      "label": "Edges",
      "type": "json"
    },
    {
      "name": "schedule",
      "label": "Schedule",
      "type": "object",
      "fields": [
        {
          "name": "enabled",
          "label": "Enabled",
          "type": "boolean",
          "default": false
        },
        {
          "name": "cron",
          "label": "Cron Expression",
          "type": "string"
        }
      ]
    }
  ]
}
```

### Node Type Categories

The Workflow Automation mini-app includes several categories of nodes:

1. **Trigger Nodes**:
   - Webhook: Trigger workflows via HTTP requests
   - Schedule: Time-based triggers using cron expressions
   - Event: React to system events
   - Form Submission: Trigger on form submissions
   - Database Changes: React to data changes in MixDB

2. **Action Nodes**:
   - HTTP Request: Make API calls
   - Database Operations: CRUD operations on MixDB collections
   - File Operations: Read/write files
   - Email: Send emails
   - Notification: Send system notifications

3. **Logic Nodes**:
   - Conditional: Branch based on conditions
   - Switch: Multiple path routing
   - Merge: Combine multiple inputs
   - Iterator: Loop through arrays
   - Delay: Pause execution

4. **Transformation Nodes**:
   - Mapper: Map data between formats
   - Filter: Filter arrays or properties
   - Aggregator: Combine multiple items
   - Code: Custom JavaScript transformations
   - Template: Text template rendering

### Usage Examples

The Workflow Automation mini-app can be used to automate various tasks:

1. **Content Publishing Workflow**:
   - Trigger: Schedule
   - Actions: Query draft content, Publish if approved, Send notification

2. **Form Processing**:
   - Trigger: Form submission
   - Actions: Validate submission, Store in database, Send email confirmation

3. **Data Synchronization**:
   - Trigger: Database change
   - Actions: Transform data, Send to external API, Log result

4. **Report Generation**:
   - Trigger: Schedule
   - Actions: Query analytics data, Generate PDF report, Email to stakeholders

### Integration Points

The Workflow Automation mini-app integrates with other Mixcore apps:

1. **CMS Integration**:
   - Content workflow automation
   - Publishing schedules
   - Content transformation and distribution

2. **MixDB Integration**:
   - Database triggers
   - Data validation and transformation
   - Automated CRUD operations

3. **User System Integration**:
   - User onboarding automation
   - Permission-based workflow execution
   - User notification actions

4. **External Systems**:
   - API integrations with third-party services
   - Webhook connections
   - Data import/export automation

### Accessibility and Responsiveness

The workflow editor maintains accessibility standards while providing a rich interactive experience:

1. **Keyboard Navigation**:
   - Tab navigation between nodes
   - Keyboard shortcuts for common actions
   - Focus indicators for active elements

2. **Screen Reader Support**:
   - ARIA labels for all interactive elements
   - Meaningful node and connection descriptions
   - Status announcements for actions

3. **Responsive Design**:
   - Collapsible sidebars for mobile view
   - Touch-friendly controls
   - Minimap for navigation on small screens

4. **Performance Optimization**:
   - Virtualized rendering for large workflows
   - Lazy loading of node components
   - Optimized SVG rendering for connections
``` 