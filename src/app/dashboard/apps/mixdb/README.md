# MixDB - Modern Database Management

MixDB is a modern, intuitive database management micro-app for Mixcore. It allows you to manage multiple database connections, create and modify tables, execute SQL queries, and manage data with a UI inspired by tools like Supabase and Firebase.

## Features

- **Multiple Database Support**: Connect to PostgreSQL, MySQL, SQLite, SQL Server, Oracle, and MongoDB databases
- **Table Management**: Create, edit, delete, and clone database tables with an intuitive UI
- **Data Operations**: Add, edit, filter, sort, and delete data records
- **SQL Editor**: Execute custom SQL queries with syntax highlighting and result preview
- **Import/Export**: Import data from various formats and export query results
- **Modern UI**: Clean, responsive interface with dark mode support
- **URL-Friendly Navigation**: Clean, readable URLs for sharing and bookmarking

## Getting Started

MixDB is available in the Mixcore dashboard under the "Apps" section. To start using MixDB:

1. Navigate to Dashboard > Apps > MixDB
2. Connect to your database or use the default Mixcore database
3. Start managing your database tables and data

## URL Structure

MixDB now supports URL-friendly paths for all views and tables:

- `/dashboard/apps/mixdb?view=tables` - Main tables list
- `/dashboard/apps/mixdb?view=detail&tableId=customer-orders` - View a specific table (using a URL-friendly slug)
- `/dashboard/apps/mixdb?view=query` - SQL Editor
- `/dashboard/apps/mixdb?view=import-export` - Import/Export tools
- `/dashboard/apps/mixdb?view=settings` - MixDB Settings

This makes it easy to bookmark specific tables or share links with your team.

## Development

This micro-app is built using:

- React and Next.js for the frontend framework
- shadcn/ui for the UI components
- Context API for state management
- Dynamic imports for optimal loading

### Project Structure

```
mixdb/
├── app-globals.css         # App-specific global styles
├── app-loader.ts           # Initialization logic
├── components/             # UI components
│   ├── DbContextSelector.tsx   # Database connection selector
│   ├── TableDetail.tsx         # Table details and data view
│   ├── TableList.tsx           # Database tables list
│   └── QueryEditor.tsx         # SQL query editor
├── config/                 # Configuration files
│   └── route-mapping.ts        # URL slug to table mapping
├── contexts/               # React contexts
│   └── DatabaseContext.tsx     # Database state management
├── hooks/                  # Custom React hooks
├── index.tsx               # Main app component
├── layouts/                # Layout components
│   └── AppShell.tsx            # App shell layout
├── page.tsx                # Next.js page component
└── utils/                  # Utility functions
    └── url-helpers.ts          # URL generation helpers
```

## Inspiration

The UI and functionality of MixDB were inspired by modern database management tools like:

- Supabase
- Firebase
- Retool
- Airtable
- Notion databases

## Migrated from AngularJS

This app is a modern rewrite of the following AngularJS components:

- mixdb-context
- mix-database
- mix-database-data

The new implementation follows Mixcore migration best practices and adopts modern React patterns. 