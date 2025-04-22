import { Item, CanvasProject, CanvasElement } from './types';

// Sample items for CRUD demo
export const sampleItems: Item[] = [
  {
    id: '1',
    title: 'Getting Started Guide',
    description: 'Learn how to use the mini-app features and capabilities',
    status: 'active',
    createdAt: '2023-09-15T10:30:00Z',
    updatedAt: '2023-09-15T10:30:00Z',
    tags: ['documentation', 'guide'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97'
  },
  {
    id: '2',
    title: 'User Dashboard Overview',
    description: 'Detailed explanation of the dashboard and its components',
    status: 'active',
    createdAt: '2023-09-12T14:15:00Z',
    updatedAt: '2023-09-14T09:20:00Z',
    tags: ['dashboard', 'tutorial', 'features']
  },
  {
    id: '3',
    title: 'Integration API Documentation',
    description: 'Technical documentation for integrating with external systems',
    status: 'draft',
    createdAt: '2023-09-10T11:45:00Z',
    updatedAt: '2023-09-13T16:30:00Z',
    tags: ['api', 'integration', 'technical']
  },
  {
    id: '4',
    title: 'Release Notes v1.2',
    description: 'Details about the latest features and bug fixes in version 1.2',
    status: 'archived',
    createdAt: '2023-08-30T08:20:00Z',
    updatedAt: '2023-09-01T15:10:00Z',
    tags: ['release', 'changelog']
  },
  {
    id: '5',
    title: 'Customization Options',
    description: 'Learn how to customize the application to fit your needs',
    status: 'active',
    createdAt: '2023-09-05T09:15:00Z',
    updatedAt: '2023-09-08T14:30:00Z',
    tags: ['customization', 'settings', 'tutorial']
  },
  {
    id: '6',
    title: 'Admin User Guide',
    description: 'Special features and capabilities available to admin users',
    status: 'draft',
    createdAt: '2023-09-07T10:25:00Z',
    updatedAt: '2023-09-09T11:40:00Z',
    tags: ['admin', 'guide', 'permissions']
  },
  {
    id: '7',
    title: 'Troubleshooting Common Issues',
    description: 'Solutions to frequently encountered problems and errors',
    status: 'active',
    createdAt: '2023-09-02T13:05:00Z',
    updatedAt: '2023-09-10T17:15:00Z',
    tags: ['troubleshooting', 'help', 'support']
  },
  {
    id: '8',
    title: 'Mobile App Companion Guide',
    description: 'How to use the mobile app companion with the main application',
    status: 'archived',
    createdAt: '2023-08-25T14:55:00Z',
    updatedAt: '2023-08-28T12:20:00Z',
    tags: ['mobile', 'guide', 'companion']
  }
];

// Sample canvas elements for the editor demo
export const sampleCanvasElements: CanvasElement[] = [
  {
    id: 'rect-1',
    type: 'rectangle',
    x: 100,
    y: 100,
    width: 200,
    height: 150,
    angle: 0,
    fill: '#4C6EF5',
    stroke: '#1E40AF',
    strokeWidth: 2,
    opacity: 1,
    zIndex: 1
  },
  {
    id: 'circle-1',
    type: 'circle',
    x: 400,
    y: 200,
    width: 100,
    height: 100,
    angle: 0,
    fill: '#F59E0B',
    opacity: 0.8,
    zIndex: 2
  },
  {
    id: 'text-1',
    type: 'text',
    x: 250,
    y: 350,
    width: 200,
    height: 50,
    angle: 0,
    fill: '#111827',
    text: 'Sample Text Element',
    fontSize: 18,
    fontFamily: 'Arial',
    opacity: 1,
    zIndex: 3
  },
  {
    id: 'line-1',
    type: 'line',
    x: 150,
    y: 400,
    width: 300,
    height: 1,
    angle: 0,
    fill: 'transparent',
    stroke: '#374151',
    strokeWidth: 2,
    opacity: 1,
    zIndex: 4
  }
];

// Sample canvas project
export const sampleCanvasProject: CanvasProject = {
  id: 'project-1',
  name: 'Sample Design',
  description: 'A demonstration of the canvas editor capabilities',
  createdAt: '2023-09-10T08:00:00Z',
  updatedAt: '2023-09-12T15:30:00Z',
  elements: sampleCanvasElements,
  width: 800,
  height: 600,
  background: '#FFFFFF'
}; 