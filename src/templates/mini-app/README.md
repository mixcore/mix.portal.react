# Mixcore Mini App Template

A comprehensive template for creating mini-apps for Mixcore CMS based on Next.js and React. This template follows the Mixcore design system and provides a complete foundation for building integrated applications within the Mixcore ecosystem.

## Features

- **Modern Design**: Clean, responsive UI with Tailwind CSS
- **Flexible Layout**: Works in both fluid and contained layouts
- **Dashboard Integration**: Seamlessly integrates with the Mixcore dashboard
- **Breadcrumb Support**: URL-friendly navigation with breadcrumb integration
- **Standalone Mode**: Can function as a standalone application without the dashboard shell
- **Mobile Responsive**: Optimized for all screen sizes
- **Dark Mode Ready**: Supports both light and dark themes
- **Accessible**: Built with accessibility in mind

## Structure

The mini-app template follows a modular structure:

```
mini-app/
├── app-globals.css        # App-specific styles
├── app-loader.ts          # Initialization and registration
├── index.tsx              # Main entry point
├── components/            # UI components
│   └── Dashboard.tsx      # Main dashboard component
├── config/                # Configuration files
│   ├── app.config.json    # App configuration
│   ├── demo-data.json     # Demo data
│   └── mixdb.schema.json  # Database schema
├── hooks/                 # Custom hooks
│   ├── useBreadcrumb.ts   # Breadcrumb integration
│   └── useContainerStatus.ts # Layout detection
├── layouts/               # Layout components
│   └── AppShell.tsx       # Main app shell layout
└── lib/                   # Utility functions and types
    ├── mixdb-api.ts       # MixDB API client for data access
    ├── auth.ts            # Authentication and authorization
    ├── culture.ts         # Localization and culture handling
    ├── types.ts           # Common types for API interaction
    ├── sample-usage.ts    # Example usage of the API client
    └── index.ts           # Exports all components for easy importing
```

## Getting Started

### Prerequisites

- Node.js 16.x or later
- Next.js 13.x or later
- Mixcore CMS setup

### Creating a New Mini-App

1. Copy the mini-app template directory to your project:
   ```
   cp -r src/templates/mini-app src/app/dashboard/apps/your-app-name
   ```

2. Update the configuration files in the `config` directory:
   - Edit `app.config.json` with your app's information
   - Modify `mixdb.schema.json` with your database schema
   - Customize `demo-data.json` with your sample data

3. Initialize the MixDB API client in your components:
   ```typescript
   import { MixDbApi } from '../lib/mixdb-api';
   import { MixDbEntity } from '../lib/types';
   
   // Create a new API client instance
   const api = new MixDbApi({
     basePath: '/api/v2/mixdb',
     defaultHeaders: {
       // Add your authentication headers if needed
     }
   });
   
   // See lib/sample-usage.ts for complete examples
   ```

4. Alternatively, use the simplified initialization helper:
   ```typescript
   import { initializeCoreServices } from '../lib';
   
   // Initialize all core services at once
   const { api, auth, culture, translate } = initializeCoreServices({
     apiBasePath: '/api/v2/mixdb',
     defaultCulture: 'en-US',
     authEndpoint: '/api/auth'
   });
   
   // Now you can use all services together
   const t = translate;
   
   async function init() {
     await auth.login('username', 'password');
     const products = await api.getItems('product', { page: 1, pageSize: 10 });
     console.log(t('found_items', 'Found {count} items', { count: String(products.items.length) }));
   }
   ```

5. Update imports and paths throughout the application:
   - Replace references to "mini-app" with your app name
   - Update navigation paths in `AppShell.tsx`
   - Update app ID references in `app-loader.ts`

## Key Components

### AppShell

The `AppShell` component provides the main layout for your mini-app. It includes:

- Header with toolbar and navigation tabs
- Collapsible sidebar
- Main content area
- Responsive design
- Breadcrumb integration
- Full-screen toggle
- Share functionality

### Dashboard

The `Dashboard` component serves as the main landing page for your mini-app. It includes:

- Summary statistics
- Quick access cards
- Recent items list
- Status information

### Hooks

- `useBreadcrumb`: Integrates with the dashboard's breadcrumb system
- `useContainerStatus`: Detects if the app is running in fluid or contained layout

## Customization

### Styling

The mini-app uses a combination of Tailwind CSS and custom styles:

- `app-globals.css`: App-specific styles
- Tailwind utility classes: For layout and components
- Shadcn/UI-compatible: Works with Mixcore's component library

### Configuration

The `app.config.json` file contains all app-specific configuration:

- App metadata: name, version, description
- Navigation settings
- Permissions
- UI preferences
- Integration points

### Database Schema

The `mixdb.schema.json` file defines your app's database collections:

- Items: Main data objects
- Comments: User feedback
- Attachments: File uploads

## URL Routing

The mini-app uses URL parameters for navigation:

- `?view=dashboard`: Show the main dashboard
- `?view=list`: Show the list view
- `?view=detail&id=123`: Show details for a specific item
- `?view=settings`: Show settings

## Standalone Mode

The mini-app can run independently of the Mixcore dashboard by using the `standalone` prop:

```tsx
// Example of using standalone mode
<MiniApp standalone={true} />
```

In standalone mode, the app provides its own header, navigation, and footer.

## Integration with Mixcore

### Event System

The mini-app communicates with the Mixcore dashboard using custom events:

- `mixcore:context:set`: Updates dashboard context
- `mixcore:breadcrumbs:update`: Updates breadcrumbs
- `mixcore:layout:change`: Responds to layout changes

## API Integration

The mini-app template includes a comprehensive MixDB API client for interacting with Mixcore's data services:

### MixDB API Client

Located in `lib/mixdb-api.ts`, this client provides type-safe methods for CRUD operations, filtering, pagination, and file uploads:

```typescript
// Initialize the API client with auth and culture services
const api = new MixDbApi({
  basePath: '/api/v2/mixdb',
  authService,          // Automatic auth integration
  cultureService,       // Automatic culture integration
  includeCulture: true  // Include culture in requests
});

// Get paginated data (auth headers and culture are automatically included)
const products = await api.getItems('product', {
  page: 1,
  pageSize: 10,
  filter: { status: 'Published' }
});

// Get a single item
const product = await api.getItemById('product', '123');

// Create a new item
const newProduct = await api.createItem('product', { 
  name: 'New Product',
  price: 99.99
});
```

### Type System

The template includes a robust type system in `lib/types.ts` for working with Mixcore APIs:

- `Request`: Standard request parameters with pagination and filtering
- `PaginatedResponse`: Response structure for lists of items
- `MixDbEntity`: Base entity interface for database items
- `User`, `AuthToken`, `Role`, `Permission`: Authentication types
- `Culture`, `AppContext`: Localization and application context types
- Helper utilities for converting between types

### Authentication Integration

The MixDB API client automatically handles authentication:

- Adds authentication headers to all requests
- Refreshes tokens when they expire
- Handles 401 unauthorized responses
- Provides role and permission checks

### Culture Integration

The MixDB API client supports localization:

- Adds culture headers to requests
- Returns data in the correct language
- Handles right-to-left formatting
- Provides translation and formatting utilities

### Example Usage

The `lib/sample-usage.ts` file contains complete examples of:

- Basic API operations (get, create, update, delete)
- Working with the Request type
- Using type extensions for more specific entities
- Authentication and role-based access control
- Localization and multilingual content
- File uploads and handling

### Core Integration

The app-loader includes functions for:

- Registering the app with Mixcore
- Setting up database collections
- Loading demo data
- Managing permissions

## Authentication & Authorization

The mini-app template includes a comprehensive authentication system that integrates with Mixcore Dashboard's authentication:

### Authentication Service

Located in `lib/auth.ts`, this service provides:

```typescript
// Initialize the auth service
const authService = new AuthService({
  authEndpoint: '/api/auth',
  persistToken: true
});

// Login a user
const user = await authService.login('username', 'password');

// Check authentication status
if (authService.isAuthenticated()) {
  // User is logged in
}

// Get current user
const currentUser = authService.getUser();

// Logout
await authService.logout();
```

### Role-Based Access Control

The authentication service supports roles and permissions:

```typescript
// Check if user has a role
if (authService.hasRole('Admin')) {
  // Show admin features
}

// Check if user has a permission
if (authService.hasPermission('products.edit')) {
  // Show edit button
}

// Create reusable permission guards
const canEditProducts = createPermissionGuard(authService, ['products.edit']);
const isAdminOrEditor = createRoleGuard(authService, ['Admin', 'Editor']);

// Use in components
if (canEditProducts()) {
  // Show edit UI
}
```

### Dashboard Shell Integration

The authentication service automatically synchronizes with the Mixcore Dashboard shell:

- Token management and automatic refresh
- Role and permission synchronization
- Seamless login/logout across the app

## Localization & Cultures

The mini-app template includes full internationalization support:

### Culture Service

Located in `lib/culture.ts`, this service provides:

```typescript
// Initialize the culture service
const cultureService = new CultureService({
  defaultCulture: 'en-US'
});

// Get available cultures
const cultures = cultureService.getAvailableCultures();

// Change the current culture
cultureService.setCulture('fr-FR');

// Create a translator function
const t = createTranslator(cultureService);
const greeting = t('hello', 'Hello');

// Format dates and numbers
const formattedDate = cultureService.formatDate(new Date());
const formattedNumber = cultureService.formatNumber(1234.56);
const formattedCurrency = cultureService.formatCurrency(99.99, 'EUR');
```

### Translation Support

The culture service supports loading translations from JSON files or objects:

```typescript
// Add translations
cultureService.addTranslations('fr-FR', {
  'welcome': 'Bienvenue',
  'hello_user': 'Bonjour, {name}!'
});

// Use translations with parameters
const message = t('hello_user', 'Hello, {name}!', { name: 'John' });
```

### RTL Support

The culture service automatically handles right-to-left languages by setting the appropriate HTML direction attributes.

### Dashboard Shell Integration

The culture service synchronizes with the Mixcore Dashboard shell:

- Culture preferences are shared between mini-app and dashboard
- Language switching affects both simultaneously
- Culture-specific formatting is consistent across the entire application

## Deployment

1. Build your mini-app as part of the Mixcore CMS:
   ```
   npm run build
   ```

2. Deploy the entire Mixcore application to your hosting environment.

## Best Practices

- Keep components small and focused
- Use hooks for shared logic
- Follow Mixcore design patterns
- Test in both fluid and contained layouts
- Support both light and dark themes
- Ensure mobile compatibility

## Performance Considerations

- Lazy load components when possible
- Optimize image assets
- Use client-side pagination for large datasets
- Implement proper loading states

## Accessibility

- Use semantic HTML
- Ensure keyboard navigation
- Include proper ARIA labels
- Maintain sufficient color contrast

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Mixcore Team
- Next.js
- Tailwind CSS
- Shadcn/UI

## Support

For support, please contact support@mixcore.org or visit our [forums](https://community.mixcore.org). 