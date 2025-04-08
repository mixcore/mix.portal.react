# Mixcore Projects Mini-App

A Microsoft Project-like project management application for Mixcore CMS.

## Features

- Project management with task tracking and status monitoring
- Multiple views: Projects list, Task list, Gantt chart, Kanban board, Calendar
- Fluid layout that adapts to the dashboard container size
- Full-screen mode for detailed planning
- Critical path analysis and dependency management
- Team member assignment and progress tracking

## Installation

The Projects mini-app comes bundled with Mixcore CMS. It will be automatically initialized when first accessed.

## Configuration

The app can be configured through the `app.config.json` file in the `config` directory. Key configuration options include:

- `enableFullScreenByDefault`: Whether to open in full-screen mode by default
- `ganttDefaultView`: Default view mode for the Gantt chart
- `calendarFirstDayOfWeek`: First day of the week for the calendar view (0 = Sunday)
- Various UI and display settings

## Development

### Directory Structure

```
/src/app/dashboard/apps/projects
├── app-globals.css          # App-specific styles
├── app-loader.ts            # App initialization module
├── index.tsx                # Main entry point
├── config/                  # Configuration files
│   ├── app.config.json      # App configuration
│   ├── demo-data.json       # Sample data for initialization
│   └── mixdb.schema.json    # MixDB schema definition
├── components/              # UI components
│   ├── GanttView.tsx        # Gantt chart view
│   ├── ProjectList.tsx      # Projects list view
│   ├── Task.tsx             # Task component
│   └── ...
├── hooks/                   # Custom React hooks
│   └── useContainerStatus.ts # Container status detection
├── layouts/                 # Layout components
│   └── AppShell.tsx         # Main app shell layout
└── lib/                     # Utilities and data
    ├── mockData.ts          # Sample data for development
    └── types.ts             # TypeScript type definitions
```

### Adding New Features

1. Create new components in the `components` directory
2. Update the schema in `config/mixdb.schema.json` if adding new data structures
3. Add new views by extending the `ViewType` type and adding a new case in the `renderView` function

### Styling

- App-specific styles are defined in `app-globals.css`
- The app uses Tailwind CSS for styling
- Dark mode is supported through CSS variables

## MixDB Integration

The app creates the following collections in MixDB:

- `projects`: Project records
- `tasks`: Task records
- `team_members`: Team member assignments

## Permissions

The app registers the following permissions:

- `projects.view`: View project listings and details
- `projects.create`: Create new projects
- `projects.edit`: Edit existing projects
- `projects.delete`: Delete projects
- `tasks.view`: View task listings and details
- `tasks.create`: Create new tasks
- `tasks.edit`: Edit existing tasks
- `tasks.delete`: Delete tasks

## License

MIT 