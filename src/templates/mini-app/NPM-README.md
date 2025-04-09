# Mixcore Mini-App Template

[![npm version](https://img.shields.io/npm/v/@mixcore/mini-app-template.svg)](https://www.npmjs.com/package/@mixcore/mini-app-template)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A comprehensive template for creating mini-apps for Mixcore CMS based on Next.js and React. This template provides a complete foundation for building integrated applications within the Mixcore ecosystem.

## Features

- **Modern Design**: Clean, responsive UI with Tailwind CSS
- **Authentication System**: Ready-to-use authentication with role-based access control
- **Internationalization**: Built-in localization with culture-aware formatting
- **API Client**: Type-safe MixDB API client with automatic auth and culture integration
- **Flexible Layout**: Works in both fluid and contained layouts
- **Dashboard Integration**: Seamlessly integrates with the Mixcore dashboard
- **Mobile Responsive**: Optimized for all screen sizes
- **Dark Mode Ready**: Supports both light and dark themes
- **Accessible**: Built with accessibility in mind

## Installation

### Using npm

```bash
npm install @mixcore/mini-app-template
```

### Using yarn

```bash
yarn add @mixcore/mini-app-template
```

### Using the CLI (Coming Soon)

```bash
npx create-mixcore-mini-app my-app
```

### Manual Download

You can also download the template directly from GitHub:

```bash
git clone https://github.com/mixcore/mini-app-template.git
```

## Usage

### As a Template for a New Mini-App

1. Create a new mini-app directory in your Mixcore project:

```bash
mkdir -p src/app/dashboard/apps/your-app-name
```

2. Copy the template files:

```bash
cp -r node_modules/@mixcore/mini-app-template/* src/app/dashboard/apps/your-app-name/
```

Alternatively, use our helper script (if you have Mixcore CLI installed):

```bash
mixcore create-mini-app your-app-name
```

3. Configure your mini-app:

```bash
cd src/app/dashboard/apps/your-app-name
# Edit config/app.config.json with your app details
```

4. Start implementing your features!

### As a Development Dependency

You can also use this package as a development dependency to access its utilities:

```javascript
// Import utilities
import { 
  AuthService, 
  CultureService, 
  MixDbApi,
  initializeCoreServices
} from '@mixcore/mini-app-template/lib';

// Initialize all services
const { api, auth, culture, translate } = initializeCoreServices({
  apiBasePath: '/api/v2/mixdb',
  defaultCulture: 'en-US',
  authEndpoint: '/api/auth'
});

// Use the services in your app
const user = await auth.login('username', 'password');
const products = await api.getItems('product', { page: 1, pageSize: 10 });
```

## Documentation

### Core Services

#### Authentication & Authorization

```javascript
import { AuthService, createPermissionGuard, createRoleGuard } from '@mixcore/mini-app-template/lib';

// Initialize auth service
const auth = new AuthService({
  authEndpoint: '/api/auth',
  persistToken: true
});

// Login a user
const user = await auth.login('username', 'password');

// Check roles and permissions
if (auth.hasRole('Admin') && auth.hasPermission('products.edit')) {
  // Show admin features
}

// Create reusable guards
const canEditProducts = createPermissionGuard(auth, ['products.edit']);
const isAdminOrEditor = createRoleGuard(auth, ['Admin', 'Editor']);

// Use in components
if (canEditProducts()) {
  // Show edit UI
}
```

#### Internationalization

```javascript
import { CultureService, createTranslator } from '@mixcore/mini-app-template/lib';

// Initialize culture service
const culture = new CultureService({
  defaultCulture: 'en-US'
});

// Create translator
const t = createTranslator(culture);

// Translate text
const greeting = t('hello', 'Hello');
const welcome = t('welcome_user', 'Welcome, {name}!', { name: 'John' });

// Format based on culture
const date = culture.formatDate(new Date(), { dateStyle: 'full' });
const price = culture.formatCurrency(99.99, 'EUR');
```

#### API Integration

```javascript
import { MixDbApi } from '@mixcore/mini-app-template/lib';

// Initialize API with auth and culture
const api = new MixDbApi({
  basePath: '/api/v2/mixdb',
  authService: auth,
  cultureService: culture
});

// Get data
const products = await api.getItems('product', {
  page: 1,
  pageSize: 10,
  filter: { status: 'Published' }
});

// Create item
const newProduct = await api.createItem('product', {
  name: 'New Product',
  price: 99.99
});

// Update item
await api.updateItem('product', newProduct.id, {
  price: 129.99
});
```

## Folder Structure

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

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](https://github.com/mixcore/mini-app-template/blob/main/CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

Need help? Join our [Discord community](https://discord.gg/mixcore) or open an issue on GitHub. 