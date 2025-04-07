# Mixcore Migration Guide

This document serves as the single source of truth for the Mixcore migration from AngularJS to Next.js. It centralizes all migration information and provides clear guidance for developers working on the project.

## Quick Navigation

- [Project Overview](#project-overview)
- [Migration Status](#migration-status)
- [Implementation Strategy](#implementation-strategy)
- [Directory Structure](#directory-structure)
- [Development Workflow](#development-workflow)
- [Component Guidelines](#component-guidelines)
- [Shared Component Architecture](#shared-component-architecture)
- [Template Management Architecture](#template-management-architecture)
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
- ✅ Implemented Ghost-inspired post editor with distraction-free writing experience
- ✅ Created shared components for content list, detail, and edit views
- ✅ Completed MixDB interface with schema management and settings pages
- ✅ Implemented database API documentation and settings management

### Current Focus

- Complete Data Explorer for MixDB databases
- Continue work on media management features
- Refine search and filtering functionality
- Enhance localization support
- Implement template management system

View the [Detailed Progress Tracker](./tracking/PROGRESS-TRACKER.md) for complete status.

## User Experience Design Principles

Our migration isn't just about technological updates, but also about embracing modern UX principles inspired by best-in-class content management systems like Ghost.

### Content-First Philosophy

We've adopted the "content-first" philosophy that puts writing and content creation at the center of the experience:

- **Distraction-Free Writing** - Clean, focused editor interfaces that minimize UI clutter
- **Contextual Settings** - Settings and options appear only when needed, avoiding overwhelming users
- **Progressive Disclosure** - Complex features are accessible but don't interfere with common workflows

### Key UX Improvements

1. **Modernized Post Editor**
   - Ghost-inspired distraction-free writing environment
   - Settings placed in slide-out drawer to keep focus on content
   - Visual status indicators with quick-access status changes
   - Improved content hierarchy with clear information architecture
   
2. **Simplified Workflows**
   - Reduced clicks for common operations
   - Intuitive navigation patterns
   - Mobile-responsive interfaces

3. **Consistent Design Language**
   - Unified component library based on shadcn/ui
   - Consistent spacing, typography, and interaction patterns
   - Reduced cognitive load through familiarity

These UX improvements help content creators focus on creating rather than navigating a complex UI, significantly improving productivity and user satisfaction.

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

## Shared Component Architecture

To maximize code reuse and ensure UI consistency, we've implemented a set of shared layout components for content management:

### Content List Layout

`ContentListLayout` provides a standardized layout for list pages (posts, pages, media, etc.) with:

- Consistent header with title, description, and create button
- Search and filter functionality
- View mode toggle (grid/table)
- Empty state handling
- Loading state
- Delete confirmation modal

Usage example:
```tsx
<ContentListLayout
  title="Posts"
  description="Manage your blog posts"
  createNewPath="/dashboard/posts/new"
  createNewLabel="Add Post"
  // Additional props...
>
  {/* Table or grid view */}
</ContentListLayout>
```

### Content Detail Layout

`ContentDetailLayout` creates a consistent view for content detail pages with:

- Back navigation
- Title and description
- Action buttons (edit, preview, delete)
- Status badge
- Loading and not-found states

Usage example:
```tsx
<ContentDetailLayout
  title={post?.title || 'Post Details'}
  description={post?.excerpt}
  backPath="/dashboard/posts"
  editPath={post ? `/dashboard/posts/${post.id}/edit` : undefined}
  // Additional props...
>
  {/* Content detail view */}
</ContentDetailLayout>
```

### Content Edit Layout 

`ContentEditLayout` standardizes the editing experience with:

- Consistent header with navigation and actions
- Form layout with main content and sidebar structure
- Cancel and delete confirmation modals
- Loading and saving states
- Standard action buttons

Usage example:
```tsx
<ContentEditLayout
  title={`Edit Post: ${title}`}
  backPath="/dashboard/posts"
  isLoading={isLoading}
  isSaving={isSaving}
  onSubmit={handleSubmit}
  // Additional props...
>
  <ContentFormGrid>
    <ContentMainColumn>
      {/* Main content */}
    </ContentMainColumn>
    <ContentSideColumn>
      {/* Settings and metadata */}
    </ContentSideColumn>
  </ContentFormGrid>
</ContentEditLayout>
```

### Benefits of This Architecture

1. **Consistency**: Ensures uniform UI/UX across all content types
2. **Reduced Duplication**: Core layout logic is written once and reused
3. **Maintainability**: Changes to layout need to be made in only one place
4. **Faster Development**: New content types can be added quickly by reusing layouts
5. **Better Testing**: Core layout logic can be comprehensively tested in one place

## Template Management Architecture

The template management system is a crucial part of Mixcore CMS, allowing users to create, edit, and manage website templates. The migration from AngularJS to Next.js includes a complete redesign of the template editor interface while maintaining all functionality.

### Key Components

1. **TemplateListLayout**: A specialized layout for browsing and managing templates
   - Template filtering by theme and type
   - Template preview functionality
   - Template creation and duplication
   - Template organization by folders (Pages, Posts, Masters, etc.)

2. **TemplateEditor**: A modern code editor for template files
   - Syntax highlighting for HTML, CSS, and JavaScript
   - Live preview capabilities
   - Version history
   - Responsive design preview

3. **ThemeManager**: Interface for managing themes
   - Theme installation and activation
   - Theme settings
   - Asset management (scripts, styles, images)

### Implementation Plan

The template management system will be implemented using:

- Monaco Editor for code editing (used by VS Code)
- React-based preview system
- File-system-like navigation for template organization
- Expandable panel design for efficient workspace utilization

Example template management interface:

```tsx
<TemplateManagementLayout
  currentTheme={theme}
  templateType="page"
>
  <TemplatesSidebar 
    templates={templates}
    onSelect={selectTemplate}
    onCreate={createTemplate}
  />
  <TemplateEditor
    template={currentTemplate}
    onChange={handleTemplateChange}
    language="html"
    theme="vs-dark"
  />
  <TemplatePreview
    template={currentTemplate}
    previewMode={previewMode}
    viewportSize={viewportSize}
  />
</TemplateManagementLayout>
```

### Data Structure

Templates in the new system will follow this data structure:

```typescript
interface Template {
  id: string;
  name: string;
  folderType: 'Pages' | 'Posts' | 'Masters' | 'Layouts' | 'Modules';
  themeId: string;
  content: string;
  scripts?: string;
  styles?: string;
  metadata?: {
    description?: string;
    thumbnail?: string;
    author?: string;
    version?: string;
  };
  lastModified: Date;
  createdDate: Date;
}
```

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
│ ├── layout/ # Layout components
│ └── shared/ # Shared feature components
│     ├── content-list-layout.tsx
│     ├── content-detail-layout.tsx
│     └── content-edit-layout.tsx
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

### Content Feature Implementation Pattern

When implementing a new content type:

1. Define the data model in `src/types/`
2. Create API service in `src/services/`
3. Implement list view using `ContentListLayout`
4. Implement detail view using `ContentDetailLayout` 
5. Implement edit view using `ContentEditLayout`

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

## MixDB Architecture

The MixDB system is a powerful database management interface, similar to Supabase, that enables users to create, configure, and manage custom databases and forms without writing code. Our migration enhances this system with a modern, intuitive interface while maintaining full functionality.

### Implementation Status

We have made significant progress in implementing the MixDB system:

1. **Database Management Interface**: ✅ Complete
   - Database listing, creation, and management
   - Tabs-based interface for managing different aspects (Schema, Data, API, Settings)
   - Modern, clean UI inspired by Supabase

2. **Schema Management**: ✅ Complete
   - Column creation and configuration
   - Data type selection and validation
   - Schema visualization and editing

3. **Settings Page**: ✅ Complete
   - General database configuration
   - Access control and security settings
   - Advanced configuration options
   - Danger zone for destructive operations

4. **API Documentation**: ✅ Complete
   - Auto-generated API documentation for each database
   - Code examples in multiple languages
   - Request/response format documentation
   - API security configuration

5. **Data Explorer**: 🔄 In Progress
   - Data viewing and editing interface
   - Filtering and sorting capabilities
   - Import/export functionality

6. **Form Builder**: 📅 Planned
   - Visual form designer
   - Form field configuration
   - Form publishing and embedding

### Key Features and Similarities to Supabase

1. **Database Management Dashboard**: An analytics dashboard providing an overview of your database usage, activity, and performance metrics, similar to the Supabase dashboard.

2. **Visual Database Builder**: Create and modify database schemas without writing SQL:
   - Table/collection management 
   - Column/field type configuration
   - Relationship definition
   - Index management
   - Constraints and validation rules

3. **Form Builder**: Create customized forms connected to databases:
   - Drag-and-drop interface
   - Field validation configuration
   - Form layout customization
   - Multi-step form support
   - Conditional logic

4. **Data Explorer**: Browse, search, filter, and modify data with an intuitive interface:
   - Table and card view options
   - Advanced filtering and sorting
   - Bulk operations
   - Data export/import functionality
   - JSON data visualization for complex data types

5. **API Integration**: Automatic REST API endpoints for all databases:
   - API key management
   - Request/response logging
   - Endpoint performance metrics
   - API documentation

### Implementation Approach

The MixDB interface follows Supabase's clean, developer-friendly design principles:

- **Dashboard-First Design**: Comprehensive dashboard with key metrics and recent activity
- **Intuitive Navigation**: Clear hierarchy with tabs for different operations
- **Progressive Disclosure**: Complex options hidden until needed
- **Consistent Feedback**: Clear success/error messaging for all operations
- **Responsive Design**: Full functionality on all device sizes

### Technical Architecture

The MixDB frontend is structured with:

1. **Core Layouts**:
   - `MixDbLayout`: Base layout with tabs for Dashboard, Databases, Forms
   - `DatabaseLayout`: Layout for database details with tabs for Schema, Data, API, Settings

2. **Key Components**:
   - `DatabaseBuilder`: Visual schema designer
   - `FormBuilder`: Drag-and-drop form designer
   - `DataTable`: Advanced data viewing and editing interface
   - `ApiExplorer`: API testing and documentation interface

3. **Shared Components**:
   - `FieldTypeSelector`: Reusable component for selecting data types
   - `RelationshipManager`: Interface for managing database relationships
   - `QueryBuilder`: Visual query building interface
   - `DataVisualizer`: Component for visualizing complex data

Example MixDB database schema editor:

```tsx
<DatabaseSchemaEditor
  database={currentDatabase}
  onChange={handleSchemaChange}
  onSave={saveSchema}
>
  <SchemaToolbar
    onAddField={addField}
    onAddIndex={addIndex}
    onAddRelationship={addRelationship}
  />
  <SchemaTable
    fields={currentDatabase.fields}
    onFieldUpdate={updateField}
    onFieldDelete={deleteField}
  />
  <RelationshipsPanel
    relationships={currentDatabase.relationships}
    onRelationshipUpdate={updateRelationship}
    onRelationshipDelete={deleteRelationship}
  />
</DatabaseSchemaEditor>
``` 