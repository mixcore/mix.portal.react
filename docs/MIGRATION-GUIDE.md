# Mixcore Migration Guide

This document serves as the single source of truth for the Mixcore migration from AngularJS to Next.js. It centralizes all migration information and provides clear guidance for developers working on the project.

## Quick Navigation

- [Project Overview](#project-overview)
- [Migration Status](#migration-status)
- [Implementation Strategy](#implementation-strategy)
- [Directory Structure](#directory-structure)
- [Development Workflow](#development-workflow)
- [Component Guidelines](#component-guidelines)
- [Additional Resources](#additional-resources)

## Project Overview

We are migrating the Mixcore application from AngularJS to Next.js, utilizing Tailwind CSS and shadcn/ui for UI components. This migration aims to modernize the codebase, improve developer experience, and enhance user experience.

### Core Technologies

- **Next.js** (App Router) - Modern React framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Accessible component library
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Next.js API Routes** - Backend API endpoints

## Migration Status

Current status: **Phase 2 - Content Management** (See [Implementation Plan](./tracking/IMPLEMENTATION-PLAN.md) for details)

### Recent Progress

- ✅ Completed dashboard layout with responsive sidebar
- ✅ Implemented Pages List view with data table
- ✅ Created reusable table component with pagination
- ✅ Set up basic API client infrastructure
- ⏳ Working on Posts management features

### Current Focus

- Complete Pages feature (including edit functionality)
- Implement Posts management feature
- Refine authentication system

View the [Detailed Progress Tracker](./tracking/PROGRESS-TRACKER.md) for complete status.

## Implementation Strategy

Our migration follows a phased approach:

1. **Phase 1 (Completed)**: Infrastructure & Core Components
   - Project setup, core UI components, layouts, API client

2. **Phase 2 (In Progress)**: Content Management
   - Dashboard, Pages, Posts, Media management

3. **Phase 3 (Pending)**: User & System Management
   - User management, roles, permissions, settings

4. **Phase 4 (Pending)**: Integration & Deployment
   - Final features, optimization, documentation

See the detailed [Implementation Plan](./tracking/IMPLEMENTATION-PLAN.md) for specific tasks and timelines.

## Directory Structure

The new application uses a feature-based organization:

```
src/
├── app/ # Next.js App Router directory
│ ├── (auth)/ # Auth route group
│ ├── (dashboard)/ # Dashboard route group
│ │ ├── layout.tsx
│ │ ├── page.tsx
│ │ ├── pages/
│ │ ├── posts/
│ │ └── ...
│ └── api/ # API routes
│
├── components/ # Shared components
│ ├── ui/ # UI components
│ └── layout/ # Layout components
│
├── features/ # Feature-based modules
│ ├── feature/
│ │ ├── components/ # Feature-specific components
│ │ ├── actions/ # Server actions
│ │ ├── schemas/ # Form validation schemas
│ │ └── utils/ # Feature-specific utilities
│
├── lib/ # Core utilities and configurations
├── hooks/ # Custom hooks
├── stores/ # State management
└── types/ # TypeScript types
```

## Development Workflow

Follow these steps when implementing a new feature:

1. **Check existing components** in [Component Registry](./reference/COMPONENT-REGISTRY.md)
2. **Review API documentation** in [API Guide](./guides/API-GUIDE.md)
3. **Implement the feature** following [Coding Standards](./guides/CODING-STANDARDS.md)
4. **Update progress** in [Progress Tracker](./tracking/PROGRESS-TRACKER.md)
5. **Test** the implementation thoroughly

### Component Migration Pattern

When migrating an AngularJS component:

1. Identify the original component in the AngularJS codebase
2. Reference the [AngularJS-to-React Patterns](./guides/ANGULAR-TO-REACT-PATTERNS.md)
3. Create the equivalent in the Next.js app
4. Implement API integration
5. Update tracking documents

## Component Guidelines

### UI Component Template

```tsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
// Import shadcn components
import { Button } from '@/components/ui/button';

interface ComponentProps {
  // Define props
}

export function ComponentName({ ...props }: ComponentProps) {
  // State management
  const [data, setData] = useState([]);
  const router = useRouter();
  
  // Component render
  return (
    <div className="container mx-auto p-4">
      {/* Component Content */}
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

- [API Documentation Guide](./guides/API-GUIDE.md)
- [AngularJS-to-React Patterns](./guides/ANGULAR-TO-REACT-PATTERNS.md)
- [Coding Standards](./guides/CODING-STANDARDS.md)
- [Component Registry](./reference/COMPONENT-REGISTRY.md)
- [Implementation Plan](./tracking/IMPLEMENTATION-PLAN.md)
- [Progress Tracker](./tracking/PROGRESS-TRACKER.md) 