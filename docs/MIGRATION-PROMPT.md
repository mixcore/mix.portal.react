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

### Implementation

Context-specific navigation is implemented through:

1. **NavItem Extensions**: The NavItem interface now includes `contextId`, `appId`, `personaIds`, `roleIds`, etc.
2. **Context Provider**: The `NavigationContextProvider` manages the active context and persona
3. **Context Selector**: Users can switch between contexts and personas via the sidebar
4. **Filtered Items**: The sidebar dynamically renders navigation based on the active context

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