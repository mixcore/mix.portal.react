# Mixcore Migration Prompt

This document serves as a prompt reference to help continue the migration from AngularJS to Next.js at any point in the process. Use this to quickly resume work on the migration.

## Project Overview

We are migrating the Mixcore application from AngularJS to Next.js, utilizing Tailwind CSS and shadcn/ui for UI components. This migration aims to modernize the codebase, improve developer experience, and enhance user experience.

## Required Dependencies

Make sure the following dependencies are installed:

```bash
# Core shadcn UI dependencies
npm install @radix-ui/react-tooltip
npm install @radix-ui/react-dropdown-menu
npm install @radix-ui/react-avatar
npm install @radix-ui/react-dialog
npm install @radix-ui/react-select
npm install @radix-ui/react-popover
npm install @radix-ui/react-slot
npm install @radix-ui/react-tabs

# Icon libraries
npm install lucide-react

# Data fetching and form libraries
# Note: We're using fetch API instead of axios to avoid Node.js compatibility issues
npm install formik
npm install yup
```

## Known Issues and Solutions

### Module not found: Can't resolve './db.json'

If you encounter this error with axios:
```
Module not found: Can't resolve './db.json'
```

This is due to Node.js specific modules being used by axios in a browser environment. The solution is to:

1. Use the built-in fetch API instead of axios for API calls
2. Implement a custom fetchClient service (see `src/services/fetchClient.ts`) 
3. Add the 'use client' directive to API-related files

## Migration Files

- **MIGRATION-CHECKLIST.md**: High-level tracking of migration progress across all aspects of the application
- **PAGES-DETAIL-TRACKING.md**: Detailed tracking of each page's migration status
- **MIGRATION-PLAN.md**: Phase-by-phase plan with tasks, priorities, and timeline
- **ANGULAR-TO-REACT-PATTERNS.md**: Reference guide for converting AngularJS patterns to React/Next.js
- **API-DOCUMENTATION-GUIDE.md**: Guide for using the API documentation during migration

## Core Technologies

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Axios for API requests

## Current Migration Status Prompt

To continue migration work at any point, follow these steps:

1. **Review current status**: Check the above tracking files to understand what's been completed and what's next.

2. **Identify next priority**: Based on the MIGRATION-PLAN.md, identify the next highest priority task that's not yet started or in progress.

3. **Review relevant patterns**: If converting an AngularJS component, reference the ANGULAR-TO-REACT-PATTERNS.md file for guidance.

4. **Check API documentation**: For implementing API integrations, refer to the API-DOCUMENTATION-GUIDE.md and api-docs directory.

5. **Follow this migration workflow**:
   - Study the original AngularJS component/page
   - Identify the React/Next.js pattern to use
   - Review the API endpoints needed for the component/page
   - Create the new component/page following Next.js best practices
   - Implement the UI using Tailwind CSS and shadcn/ui
   - Implement functionality and API integration
   - Test the component/page
   - Update tracking documents

## Component Migration Template

When migrating a component, use this template:

```tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
// Import shadcn components
import { Button } from '@/components/ui/button';
// Import services and utilities
import { exampleService } from '@/services/exampleService';

interface Props {
  // Define props
}

export default function ComponentName({ props }: Props) {
  // State management
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  
  // Data fetching
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const result = await exampleService.getData();
        setData(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, []);
  
  // Event handlers
  const handleAction = async () => {
    // Implement handler
  };
  
  // Conditional rendering
  if (loading) return <div>Loading...</div>;
  
  // Component render
  return (
    <div className="container mx-auto p-4">
      {/* Component UI */}
    </div>
  );
}
```

## Page Migration Template

When migrating a page, use this template:

```tsx
// For static/non-interactive pages
export default function PageName() {
  return (
    <div className="container mx-auto p-4">
      {/* Page content */}
    </div>
  );
}

// For interactive pages with client components
'use client';

import { PageLayout } from '@/components/layouts/PageLayout';
import { PageHeader } from '@/components/PageHeader';
// Import other components and services

export default function PageName() {
  // Page state and logic
  
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

## API Service Template

When creating an API service, use this template:

```typescript
// services/apiServiceName.ts
import axios from 'axios';
import { apiClient } from './apiClient';

// Define interfaces based on API schemas
interface DataModel {
  // Properties from API schema
}

interface QueryParams {
  // Query parameters
}

// Create the service
export const serviceName = {
  // Get list
  getList: async (params?: QueryParams) => {
    return apiClient.get<DataModel[]>('/api/endpoint', { params });
  },
  
  // Get single item
  getById: async (id: string) => {
    return apiClient.get<DataModel>(`/api/endpoint/${id}`);
  },
  
  // Create
  create: async (data: DataModel) => {
    return apiClient.post<DataModel>('/api/endpoint', data);
  },
  
  // Update
  update: async (id: string, data: Partial<DataModel>) => {
    return apiClient.put<DataModel>(`/api/endpoint/${id}`, data);
  },
  
  // Delete
  delete: async (id: string) => {
    return apiClient.delete(`/api/endpoint/${id}`);
  }
};
```

## Common Migration Patterns

### 1. Service Conversion

Convert AngularJS services to React custom hooks:

**Original AngularJS Service:**
```javascript
angular.module('app').service('PostService', function($http) {
  this.getPosts = function() {
    return $http.get('/api/posts');
  };
});
```

**New React Hook:**
```typescript
// services/postService.ts
import axios from 'axios';

export const postApi = {
  getPosts: () => axios.get('/api/posts').then(res => res.data)
};

// hooks/usePosts.ts
import { useState, useEffect } from 'react';
import { postApi } from '@/services/postService';

export function usePosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const data = await postApi.getPosts();
        setPosts(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    
    fetchPosts();
  }, []);
  
  return { posts, loading, error };
}
```

### 2. Form Conversion

Convert AngularJS forms to React forms with Formik:

**Original AngularJS Form:**
```html
<form name="form" ng-submit="submit()" novalidate>
  <input type="text" ng-model="user.name" required />
  <button type="submit" ng-disabled="form.$invalid">Submit</button>
</form>
```

**New React Form:**
```tsx
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required')
});

export function UserForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{ name: '' }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, isValid }) => (
        <Form className="space-y-4">
          <Field name="name" as={Input} placeholder="Name" />
          <Button type="submit" disabled={!isValid || isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}
```

## Update Tracking After Completion

After completing a component or page migration:

1. Update PAGES-DETAIL-TRACKING.md:
   - Change the status from ❌ or 🔄 to ✅ for both UI and API integration columns
   - Add any relevant notes

2. Update MIGRATION-CHECKLIST.md:
   - Check off completed items
   - Update sections as needed

3. Update MIGRATION-PLAN.md:
   - Update task status
   - Note any dependencies or challenges encountered

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

## Next Steps

Based on the current migration status, here are the next highest priority items to focus on:

1. Complete any "🔄 In Progress" items first
2. Focus on high-priority "❌ Not Started" items
3. Address critical dependencies to unblock other work
4. Prioritize core user flows (authentication, content management)

Refer to MIGRATION-PLAN.md for the current phase and scheduled tasks. 