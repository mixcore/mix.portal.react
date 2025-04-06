# Mixcore API Documentation Guide

This guide explains how to use the split API documentation to implement API integrations during the Next.js migration project.

## API Documentation Structure

The Mixcore API documentation has been organized into smaller, more manageable files in the `api-docs` directory:

- **api-docs/index.html**: Main navigation page for browsing the API documentation
- **api-docs/index.json**: Base OpenAPI definition with metadata
- **api-docs/auth/**: Authentication and authorization API endpoints
- **api-docs/automation/**: Workflow and automation API endpoints
- **api-docs/mixservices/**: General MixCore services API endpoints
- **api-docs/schemas/**: API schema definitions

## Using the API Documentation

### Getting Started

1. Browse to `api-docs/index.html` to view the navigation interface
2. Use the categories to find relevant API endpoints for your current task
3. Reference the schema definitions in `api-docs/schemas/all-schemas.json` for data models

### Implementation Workflow

When implementing API integration for a component or page:

1. **Identify Required Endpoints**:
   - Determine which API endpoints are needed for your component/page
   - Locate these endpoints in the appropriate category files

2. **Define Data Models**:
   - Create TypeScript interfaces based on the schemas referenced in the API docs
   - Example: For a User model, check `api-docs/schemas/all-schemas.json` for the User schema

3. **Create API Service**:
   - Implement a service for the API category you're working with
   - Use Axios or fetch for HTTP requests
   - Handle error cases appropriately

4. **Implement in Components**:
   - Use React hooks to call the API services
   - Manage loading, error, and success states

### Example: Implementing User Authentication

To implement user authentication:

1. Check `api-docs/auth/index.json` or `api-docs/auth/part-1.json` for login endpoints
2. Create the authentication service:

```typescript
// services/authService.ts
import axios from 'axios';

interface LoginPayload {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
  refreshToken: string;
  userId: string;
  // other fields as defined in the API schema
}

export const authService = {
  login: async (payload: LoginPayload): Promise<LoginResponse> => {
    const response = await axios.post('/api/v2/rest/auth/login', payload);
    return response.data;
  },
  
  // Add other auth-related methods here
};
```

3. Implement the login component using this service

## Tips for API Integration

1. **Create Base API Client**:
   - Implement a centralized API client with default configurations
   - Handle common errors, authentication, and retry logic

2. **TypeScript Interfaces**:
   - Define interfaces that match the API schemas
   - Use partial types for update operations

3. **Error Handling**:
   - Create standardized error handling
   - Map API error codes to user-friendly messages

4. **Token Management**:
   - Store authentication tokens securely
   - Implement token refresh logic

5. **Request Caching**:
   - Consider implementing request caching for frequently accessed data
   - Use SWR or React Query for automatic cache management

## Common API Categories

| Category | Files | Description |
|----------|-------|-------------|
| Authentication | api-docs/auth/* | User authentication, roles, permissions |
| Posts | api-docs/mixservices/* | Blog posts and content management |
| Pages | api-docs/mixservices/* | Static pages and templates |
| Media | api-docs/mixservices/* | Media files and assets |
| Settings | api-docs/mixservices/* | Application configuration |
| Database | api-docs/mixservices/* | Database management |

## Tracking API Integration Progress

As you implement API integrations:

1. Update `PAGES-DETAIL-TRACKING.md` to reflect the API integration status
2. Update `MIGRATION-CHECKLIST.md` to check off completed API integrations
3. Document any API integration challenges or workarounds in the Notes section

## Need Help?

If you need to quickly find specific API endpoints or data structures:

1. Use the `api-docs/index.html` navigation page
2. Or run a text search across the API documentation files for specific endpoints or schemas 