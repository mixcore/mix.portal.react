# IoT Micro-App

This is the IoT platform micro-app for Mixcore portal. It provides device management, automation, analytics, and security features for IoT devices.

## Structure

The IoT micro-app follows a modular structure for better maintainability and scalability:

```
iot/
├── page.tsx                  # Main entry point
├── layout.tsx                # Layout container
├── types/                    # Type definitions
│   ├── index.ts              # Re-exports all types
│   ├── devices.ts            # Device-related types
│   ├── automation.ts         # Automation-related types
│   ├── analytics.ts          # Analytics-related types
│   └── api.ts                # API-related types
├── lib/                      # Utility functions and services
│   ├── api.ts                # API client for IoT services
│   ├── hooks/                # Custom hooks
│   │   ├── useDevices.ts     # Device data hooks
│   │   └── useAutomation.ts  # Automation hooks
│   └── utils.ts              # Helper functions
├── components/               # Organized by component type
│   ├── ui/                   # Reusable UI components
│   │   ├── device-card.tsx   # Small card component
│   │   ├── status-badge.tsx  # Status indicators
│   │   └── chart.tsx         # Common chart component
│   ├── dashboard/            # Dashboard-specific components
│   │   ├── stats-card.tsx    # Dashboard statistics
│   │   └── overview.tsx      # Dashboard overview
│   ├── devices/              # Device-related components
│   │   ├── list.tsx          # Device list component
│   │   ├── details.tsx       # Device details view
│   │   └── registration.tsx  # Device registration form
│   ├── automation/           # Automation components
│   │   └── rules-builder.tsx # Rules builder
│   └── analytics/            # Analytics components
│       ├── data-explorer.tsx # Data explorer
│       └── sensor-monitoring.tsx # Sensor monitoring
└── context/                  # React context providers
    ├── DeviceContext.tsx     # Device state management
    └── AutomationContext.tsx # Automation state management
```

## Key Features

- **Device Management**: Register, monitor, and control IoT devices
- **Automation**: Create rules and automations for device actions
- **Analytics**: View data analytics and visualizations
- **Security**: Manage device security and access control

## Best Practices

1. **Component Structure**: 
   - Each component should focus on a single responsibility
   - Larger components should be broken down into smaller ones
   - Use composition to build complex UIs

2. **State Management**:
   - Use React Context for app-wide state
   - Use local state for component-specific state
   - Move business logic to custom hooks

3. **Type Safety**:
   - Define clear interfaces for all data structures
   - Use TypeScript for better code quality and autocomplete

4. **Code Organization**:
   - Group related code together
   - Use consistent naming conventions (kebab-case for files, PascalCase for components)
   - Keep components small and focused

## Development Guidelines

1. When adding new features, follow the existing structure and patterns
2. Place new components in the appropriate directories based on their purpose
3. Keep the page.tsx file lightweight, primarily composing other components
4. Extract business logic into hooks or service files
5. Use context providers for shared state
6. Ensure all components have proper TypeScript typing 