'use client';

// Import the default export from the mini-app template
import MiniApp from '@/templates/mini-app';

// Import the WebApp component for standalone use
import WebApp from './web-app';

// Export all hooks
export * from './hooks';

// Re-export the components
export default MiniApp;
export { WebApp }; 