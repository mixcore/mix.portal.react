# Mixcore Migration Documentation

Welcome to the Mixcore Migration Documentation. This repository contains the official documentation for the Mixcore CMS migration project from AngularJS to Next.js.

## Quick Navigation

- [Migration Guide](MIGRATION-GUIDE.md) - The main entry point with migration overview and status
- [Implementation Plan](tracking/IMPLEMENTATION-PLAN.md) - Detailed phase-by-phase migration plan
- [Progress Tracker](tracking/PROGRESS-TRACKER.md) - Component and feature status tracking

## Migration Status

- **Current Phase**: Phase 2 - Content Management
- **Overall Progress**: ~45% Complete
- **Current Focus**: App Contexts, Media Management, MixDB Form Builder

### Recently Completed

- ✅ App Contexts implementation
- ✅ Projects mini-application with Gantt chart
- ✅ Task management with Kanban and Calendar views
- ✅ Authentication service with token management
- ✅ MixDB Data Explorer and API documentation

### In Progress

- 🔄 Media Management implementation
- 🔄 Post Categories and Tags
- 🔄 MixDB Form Builder

## App Contexts Architecture

The App Contexts architecture in Mixcore allows for modular application functionality that can be enabled or disabled based on tenant needs. Each context represents a different functional area of the application:

### Available Contexts

| Context | Description | Status |
|---------|-------------|--------|
| Website | Website, eCommerce, Blog, Forum, Chat, eLearning | ✅ Complete |
| Sales | CRM, Sales, Point of Sale, Subscriptions, Rental | ✅ Complete |
| Finance | Accounting, Invoicing, Expenses, Spreadsheets, Documents | ✅ Complete |
| Supply Chain | Inventory, Manufacturing, PLM, Purchase, Maintenance | ✅ Complete |
| HR | Employees, Recruitment, Time Off, Appraisals, Referrals | ✅ Complete |
| Marketing | Social, Email, SMS, Events, Automation, Surveys | ✅ Complete |
| Services | Project, Timesheets, Field Service, Helpdesk, Planning | ✅ Complete |
| Productivity | Discuss, Approvals, IoT, VoIP, Knowledge, WhatsApp | ✅ Complete |
| Customization | Studio and app customization | ✅ Complete |

### Implementation Details

The App Contexts functionality is implemented through:

1. **AppContextProvider** - A React context provider that manages the active application state
2. **Settings UI** - Admin interface for enabling/disabling contexts globally
3. **Tenant Configuration** - Per-tenant context settings
4. **Context-Aware Navigation** - Navigation that adapts based on enabled contexts

### Usage Example

```tsx
// Using the App Context in a component
import { useAppContext } from '@/providers/AppContextProvider';

function MyComponent() {
  const { activeAppId, setActiveApp, isAppActive } = useAppContext();
  
  return (
    <div>
      {isAppActive('cms') && <CmsFeatures />}
      {isAppActive('mixdb') && <MixDbFeatures />}
      <button onClick={() => setActiveApp('projects')}>
        Switch to Projects
      </button>
    </div>
  );
}
```

## Documentation Structure

We've organized the documentation into a clear, structured format to make it easier to navigate and find the information you need.

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

## Helper Scripts

The documentation includes several helper scripts to facilitate development and maintenance:

### Migration Helper

The `migration.sh` script provides tools for tracking and managing the migration process:

```bash
# View current migration status
./migration.sh status

# Show component implementation status
./migration.sh component-status

# Show API integration status
./migration.sh api-status

# Create a new component from template
./migration.sh create-component ComponentName

# Create a new page from template
./migration.sh create-page path/to/page
```

### Documentation Maintenance

The `doc-maintenance.sh` script helps maintain the documentation itself:

```bash
# Check for broken links in documentation
./doc-maintenance.sh validate

# Generate a table of contents for a markdown file
./doc-maintenance.sh toc path/to/file.md

# Find orphaned documentation files
./doc-maintenance.sh find-orphans

# Show documentation statistics
./doc-maintenance.sh stats
```

### Documentation Cleanup

The `cleanup.sh` script helps remove old documentation files that have been consolidated into the new structure:

```bash
# Remove old documentation files
./cleanup.sh
```

## Documentation Guidelines

When contributing to the documentation:

1. **Use the correct location**: Place new documentation in the appropriate directory based on its purpose.
2. **Follow the style guide**: Use consistent formatting and structure.
3. **Update links**: When moving or renaming documents, update all references to them.
4. **Keep it current**: Outdated documentation is worse than no documentation.
5. **Use helper scripts**: Leverage the provided scripts to maintain documentation quality.

## Getting Started

If you're new to the project or returning after a break, start with these documents:

1. [Migration Guide](MIGRATION-GUIDE.md) - Overview of the migration project and current status
2. [Implementation Plan](tracking/IMPLEMENTATION-PLAN.md) - Current phase and scheduled tasks
3. [Progress Tracker](tracking/PROGRESS-TRACKER.md) - Detailed status of components and features

## Development Workflow

When working on the migration, follow these steps:

1. Check the [Progress Tracker](tracking/PROGRESS-TRACKER.md) to understand what's been completed and what's next
2. Consult the [Component Registry](reference/COMPONENT-REGISTRY.md) to see what components are available for reuse
3. Review the [API Guide](guides/API-GUIDE.md) if implementing API integration
4. Follow the [Coding Standards](guides/CODING-STANDARDS.md) for implementation
5. Use the [AngularJS-to-React Patterns](guides/ANGULAR-TO-REACT-PATTERNS.md) for converting existing components
6. Update the relevant tracking documents as you complete work

## Updating Documentation

As the project evolves, it's important to keep this documentation up to date:

1. Update the [Progress Tracker](tracking/PROGRESS-TRACKER.md) when components or features are completed
2. Add new components to the [Component Registry](reference/COMPONENT-REGISTRY.md)
3. Update the [Implementation Plan](tracking/IMPLEMENTATION-PLAN.md) as phases are completed

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs) - Official Next.js documentation
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Official Tailwind CSS documentation
- [shadcn/ui Documentation](https://ui.shadcn.com/docs) - shadcn/ui component documentation
- [React Hook Form Documentation](https://react-hook-form.com/get-started) - Form handling library docs 