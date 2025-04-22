# Mixcore Automation App

A powerful automation system for Mixcore CMS that allows you to create workflows and rules to automate tasks and processes.

## Features

- Create and manage automated workflows
- Define conditional rules for triggering actions
- Schedule tasks to run at specific times
- Trigger automation based on system events
- Track execution history and performance
- Build complex automation with a visual builder
- Integrate with other Mixcore apps and external systems

## Installation

```bash
npm install @mixcore/automation
```

## Usage

### As part of Mixcore CMS

The Automation App is automatically available in your Mixcore dashboard at `/dashboard/apps/automation`.

### As a standalone component

```jsx
import { AutomationApp } from '@mixcore/automation';

function MyComponent() {
  return (
    <AutomationApp 
      standalone={true}
      apiBaseUrl="https://your-api-endpoint.com"
    />
  );
}
```

## Configuration

The Automation App can be configured through the `app.config.json` file:

```json
{
  "enableFullScreenByDefault": false,
  "enableNotifications": true,
  "defaultSortField": "createdDate",
  "defaultSortDirection": "desc"
}
```

## API

The Automation App exposes an API for programmatic control:

```typescript
import { createWorkflow, triggerWorkflow } from '@mixcore/automation';

// Create a new workflow
const workflow = await createWorkflow({
  name: 'My Workflow',
  description: 'A sample workflow',
  triggerType: 'event',
  triggerConfig: {
    event: 'content.published'
  },
  steps: [
    // Workflow steps
  ]
});

// Trigger a workflow manually
await triggerWorkflow('workflow-id', {
  inputData: {
    // Input data for the workflow
  }
});
```

## Documentation

For detailed documentation, visit the [Mixcore Documentation](https://docs.mixcore.org/automation).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please contact support@mixcore.org or visit our [forums](https://community.mixcore.org). 