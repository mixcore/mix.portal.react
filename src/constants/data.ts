import { NavItem } from '@/types';

export type Product = {
  photo_url: string;
  name: string;
  description: string;
  created_at: string;
  price: number;
  id: number;
  category: string;
  updated_at: string;
};

//Info: The following data is used for the sidebar navigation and Cmd K bar.
export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    url: '/dashboard/overview',
    icon: 'dashboard',
    isActive: false,
    shortcut: ['d', 'd'],
    items: [] // Empty array as there are no child items for Dashboard
  },
  {
    title: 'Content',
    url: '#', // Placeholder as there is no direct link for the parent
    icon: 'post',
    isActive: false,
    shortcut: ['c', 'm'],
    items: [
      {
        title: 'Posts',
        url: '/dashboard/posts',
        icon: 'post',
        shortcut: ['p', 's']
      },
      {
        title: 'Pages',
        url: '/dashboard/pages',
        icon: 'page',
        shortcut: ['p', 'g']
      },
      {
        title: 'Media',
        url: '/dashboard/media',
        icon: 'media',
        shortcut: ['m', 'd']
      },
      {
        title: 'Tags',
        url: '/dashboard/tags',
        icon: 'tag',
        shortcut: ['t', 'g']
      }
    ]
  },
  {
    title: 'Design',
    url: '#',
    icon: 'palette',
    isActive: false,
    shortcut: ['d', 's'],
    items: [
      {
        title: 'Templates',
        url: '/dashboard/templates',
        icon: 'code',
        shortcut: ['t', 'e']
      },
      {
        title: 'Themes',
        url: '/dashboard/themes',
        icon: 'palette',
        shortcut: ['t', 'h']
      }
    ]
  },
  {
    title: 'MixDb',
    url: '/dashboard/mixdb',
    icon: 'database',
    isActive: false,
    shortcut: ['m', 'd'],
    items: [
      {
        title: 'Dashboard',
        url: '/dashboard/mixdb',
        icon: 'dashboard',
        shortcut: ['m', 'o']
      },
      {
        title: 'Databases',
        url: '/dashboard/mixdb/databases',
        icon: 'database',
        shortcut: ['d', 'b']
      },
      {
        title: 'Form Builder',
        url: '/dashboard/mixdb/forms',
        icon: 'form',
        shortcut: ['f', 'b']
      }
    ]
  },
  {
    title: 'Management',
    url: '#',
    icon: 'settings',
    isActive: false,
    shortcut: ['m', 'g'],
    items: [
      {
        title: 'Tenants',
        url: '/dashboard/tenants',
        icon: 'building',
        shortcut: ['t', 'n']
      }
    ]
  },
  {
    title: 'Product',
    url: '/dashboard/product',
    icon: 'product',
    shortcut: ['p', 'p'],
    isActive: false,
    items: [] // No child items
  },
  {
    title: 'Account',
    url: '#', // Placeholder as there is no direct link for the parent
    icon: 'billing',
    isActive: true,

    items: [
      {
        title: 'Profile',
        url: '/dashboard/profile',
        icon: 'userPen',
        shortcut: ['m', 'm']
      },
      {
        title: 'Login',
        shortcut: ['l', 'l'],
        url: '/',
        icon: 'login'
      }
    ]
  },
  {
    title: 'Kanban',
    url: '/dashboard/kanban',
    icon: 'kanban',
    shortcut: ['k', 'k'],
    isActive: false,
    items: [] // No child items
  }
];

export interface SaleUser {
  id: number;
  name: string;
  email: string;
  amount: string;
  image: string;
  initials: string;
}

export const recentSalesData: SaleUser[] = [
  {
    id: 1,
    name: 'Olivia Martin',
    email: 'olivia.martin@email.com',
    amount: '+$1,999.00',
    image: 'https://api.slingacademy.com/public/sample-users/1.png',
    initials: 'OM'
  },
  {
    id: 2,
    name: 'Jackson Lee',
    email: 'jackson.lee@email.com',
    amount: '+$39.00',
    image: 'https://api.slingacademy.com/public/sample-users/2.png',
    initials: 'JL'
  },
  {
    id: 3,
    name: 'Isabella Nguyen',
    email: 'isabella.nguyen@email.com',
    amount: '+$299.00',
    image: 'https://api.slingacademy.com/public/sample-users/3.png',
    initials: 'IN'
  },
  {
    id: 4,
    name: 'William Kim',
    email: 'will@email.com',
    amount: '+$99.00',
    image: 'https://api.slingacademy.com/public/sample-users/4.png',
    initials: 'WK'
  },
  {
    id: 5,
    name: 'Sofia Davis',
    email: 'sofia.davis@email.com',
    amount: '+$39.00',
    image: 'https://api.slingacademy.com/public/sample-users/5.png',
    initials: 'SD'
  }
];

// App contexts define different application areas
export const appContexts = [
  {
    id: 'cms',
    name: 'Content Management',
    description: 'Manage content, pages, posts and media',
    icon: 'post'
  },
  {
    id: 'mixdb',
    name: 'MixDB',
    description: 'Database management, forms and analytics',
    icon: 'database'
  },
  {
    id: 'design',
    name: 'Design',
    description: 'Templates, themes and UI components',
    icon: 'palette'
  },
  {
    id: 'admin',
    name: 'Administration',
    description: 'System settings, users, roles and permissions',
    icon: 'settings'
  }
];

// Personas define different user types
export const personas = [
  {
    id: 'admin',
    name: 'Administrator',
    description: 'Full access to all system features'
  },
  {
    id: 'content-manager',
    name: 'Content Manager',
    description: 'Manage content, posts, pages and media'
  },
  {
    id: 'designer',
    name: 'Designer',
    description: 'Manage templates and themes'
  },
  {
    id: 'developer',
    name: 'Developer',
    description: 'Technical development features'
  },
  {
    id: 'analyst',
    name: 'Analyst',
    description: 'Data analytics and reporting'
  }
];

// Extended navigation items with context, app and persona information
export const contextNavItems: NavItem[] = [
  // Dashboard - Available in all contexts
  {
    title: 'Dashboard',
    url: '/dashboard/overview',
    icon: 'dashboard',
    isActive: false,
    shortcut: ['d', 'd'],
    items: [],
    priority: 0
  },
  
  // Content Management App
  {
    title: 'Content',
    url: '#',
    icon: 'post',
    isActive: false,
    shortcut: ['c', 'm'],
    contextId: 'cms',
    appId: 'cms',
    personaIds: ['admin', 'content-manager'],
    priority: 10,
    items: [
      {
        title: 'Posts',
        url: '/dashboard/posts',
        icon: 'post',
        shortcut: ['p', 's'],
        contextId: 'cms',
        appId: 'cms'
      },
      {
        title: 'Pages',
        url: '/dashboard/pages',
        icon: 'page',
        shortcut: ['p', 'g'],
        contextId: 'cms',
        appId: 'cms'
      },
      {
        title: 'Media',
        url: '/dashboard/media',
        icon: 'media',
        shortcut: ['m', 'd'],
        contextId: 'cms',
        appId: 'cms'
      },
      {
        title: 'Tags',
        url: '/dashboard/tags',
        icon: 'tag',
        shortcut: ['t', 'g'],
        contextId: 'cms',
        appId: 'cms'
      }
    ]
  },
  
  // Design App
  {
    title: 'Design',
    url: '#',
    icon: 'palette',
    isActive: false,
    shortcut: ['d', 's'],
    contextId: 'design',
    appId: 'design',
    personaIds: ['admin', 'designer', 'developer'],
    priority: 20,
    items: [
      {
        title: 'Templates',
        url: '/dashboard/templates',
        icon: 'code',
        shortcut: ['t', 'e'],
        contextId: 'design',
        appId: 'design'
      },
      {
        title: 'Themes',
        url: '/dashboard/themes',
        icon: 'palette',
        shortcut: ['t', 'h'],
        contextId: 'design',
        appId: 'design'
      }
    ]
  },
  
  // MixDb App
  {
    title: 'MixDb',
    url: '/dashboard/mixdb',
    icon: 'database',
    isActive: false,
    shortcut: ['m', 'd'],
    contextId: 'mixdb',
    appId: 'mixdb',
    personaIds: ['admin', 'developer', 'analyst'],
    priority: 30,
    items: [
      {
        title: 'Dashboard',
        url: '/dashboard/mixdb',
        icon: 'dashboard',
        shortcut: ['m', 'o'],
        contextId: 'mixdb',
        appId: 'mixdb'
      },
      {
        title: 'Databases',
        url: '/dashboard/mixdb/databases',
        icon: 'database',
        shortcut: ['d', 'b'],
        contextId: 'mixdb',
        appId: 'mixdb'
      },
      {
        title: 'Form Builder',
        url: '/dashboard/mixdb/forms',
        icon: 'form',
        shortcut: ['f', 'b'],
        contextId: 'mixdb',
        appId: 'mixdb'
      }
    ]
  },
  
  // Management - Admin context
  {
    title: 'Management',
    url: '#',
    icon: 'settings',
    isActive: false,
    shortcut: ['m', 'g'],
    contextId: 'admin',
    appId: 'admin',
    personaIds: ['admin'],
    priority: 40,
    items: [
      {
        title: 'Tenants',
        url: '/dashboard/tenants',
        icon: 'building',
        shortcut: ['t', 'n'],
        contextId: 'admin',
        appId: 'admin'
      },
      {
        title: 'Users',
        url: '/dashboard/users',
        icon: 'user',
        shortcut: ['u', 's'],
        contextId: 'admin',
        appId: 'admin'
      },
      {
        title: 'Roles',
        url: '/dashboard/roles',
        icon: 'settings',
        shortcut: ['r', 's'],
        contextId: 'admin',
        appId: 'admin'
      }
    ]
  },
  
  // Account - Available in all contexts
  {
    title: 'Account',
    url: '#',
    icon: 'userPen',
    isActive: false,
    shortcut: ['a', 'c'],
    priority: 100,
    items: [
      {
        title: 'Profile',
        url: '/dashboard/profile',
        icon: 'userPen',
        shortcut: ['p', 'f']
      },
      {
        title: 'Settings',
        url: '/dashboard/settings',
        icon: 'settings',
        shortcut: ['s', 't']
      },
      {
        title: 'Logout',
        url: '/logout',
        icon: 'logout',
        shortcut: ['l', 'o']
      }
    ]
  }
];
