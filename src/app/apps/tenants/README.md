# Tenants Management Application

A micro-frontend application for managing multi-tenant environments in Mixcore.

## Configuration

### API Configuration

The Tenants app uses environment variables for API endpoint configuration:

1. The base API URL is configured via the `NEXT_PUBLIC_API_URL` environment variable
2. API endpoints are configured in `config/app.config.json` as relative paths

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| NEXT_PUBLIC_API_URL | Base URL for API requests | https://mixcore.net |

### Setting up Environment Variables

1. Create or edit `.env.local` in the project root with:
   ```
   NEXT_PUBLIC_API_URL="https://your-api-server.com"
   ```

2. Restart the development server to apply changes

## Authentication

The app uses Bearer token authentication for API requests:

1. The auth token is retrieved from `localStorage.getItem('auth_token')`
2. All API requests include the `Authorization: Bearer {token}` header when a token is available
3. Ensure the user is authenticated before accessing protected endpoints

### Setting Authentication Token

The auth token should be set in local storage upon successful authentication:

```javascript
localStorage.setItem('auth_token', 'your-jwt-token');
```

## Development

The app is structured as a self-contained micro-frontend with its own:
- API services
- Context providers
- Components
- Utilities

## Endpoints

The following API endpoints are used:
- Tenants: `${NEXT_PUBLIC_API_URL}/api/v2/rest/mix-portal/mix-tenant`
- Domains: `${NEXT_PUBLIC_API_URL}/api/v2/rest/mix-portal/mix-domain`

## Components

- `TenantsApp`: Main application component
- `TenantList`: Lists all tenants
- `TenantDetail`: Shows tenant details
- `DomainList`: Lists all domains 