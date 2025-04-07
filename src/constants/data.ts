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
    id: 'website',
    name: 'Website',
    description: 'Website, eCommerce and online content',
    icon: 'fileText'
  },
  {
    id: 'sales',
    name: 'Sales',
    description: 'CRM, Sales and Point of Sale',
    icon: 'product'
  },
  {
    id: 'finance',
    name: 'Finance',
    description: 'Accounting, Invoicing and Documents',
    icon: 'billing'
  },
  {
    id: 'inventory',
    name: 'Inventory & Manufacturing',
    description: 'Manage stock, manufacturing and purchases',
    icon: 'folder'
  },
  {
    id: 'hr',
    name: 'Human Resources',
    description: 'Employees, Recruitment and Time Off',
    icon: 'user'
  },
  {
    id: 'marketing',
    name: 'Marketing',
    description: 'Marketing, Email campaigns and Events',
    icon: 'file'
  },
  {
    id: 'services',
    name: 'Services',
    description: 'Projects, Timesheet and Helpdesk',
    icon: 'help'
  },
  {
    id: 'productivity',
    name: 'Productivity',
    description: 'Discuss, Approvals and Knowledge',
    icon: 'check'
  },
  {
    id: 'customization',
    name: 'Customization',
    description: 'Studio and app customization',
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
    id: 'website-manager',
    name: 'Website Manager',
    description: 'Manage website, blog, pages and eCommerce'
  },
  {
    id: 'sales-manager',
    name: 'Sales Manager',
    description: 'Manage CRM, sales and POS'
  },
  {
    id: 'finance-manager',
    name: 'Finance Manager',
    description: 'Manage accounting, invoicing and documents'
  },
  {
    id: 'inventory-manager',
    name: 'Inventory Manager',
    description: 'Manage inventory, manufacturing and purchases'
  },
  {
    id: 'hr-manager',
    name: 'HR Manager',
    description: 'Manage employees, recruitment and time off'
  },
  {
    id: 'marketing-manager',
    name: 'Marketing Manager',
    description: 'Manage marketing, email campaigns and events'
  },
  {
    id: 'service-manager',
    name: 'Service Manager',
    description: 'Manage projects, helpdesk and appointments'
  },
  {
    id: 'developer',
    name: 'Developer',
    description: 'Technical development and customization'
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
  
  // Website Category
  {
    title: 'Website',
    url: '/dashboard/website',
    icon: 'fileText',
    isActive: false,
    shortcut: ['w', 'b'],
    contextId: 'website',
    appId: 'website',
    priority: 10,
    items: [
      {
        title: 'Pages',
        url: '/dashboard/pages',
        icon: 'page',
        shortcut: ['p', 'g'],
        contextId: 'website',
        appId: 'website'
      },
      {
        title: 'eCommerce',
        url: '/dashboard/ecommerce',
        icon: 'product',
        shortcut: ['e', 'c'],
        contextId: 'website',
        appId: 'ecommerce'
      },
      {
        title: 'Blog',
        url: '/dashboard/posts',
        icon: 'post',
        shortcut: ['b', 'l'],
        contextId: 'website',
        appId: 'blog'
      },
      {
        title: 'Forum',
        url: '/dashboard/forum',
        icon: 'form',
        shortcut: ['f', 'r'],
        contextId: 'website',
        appId: 'forum'
      },
      {
        title: 'eLearning',
        url: '/dashboard/learning',
        icon: 'book',
        shortcut: ['e', 'l'],
        contextId: 'website',
        appId: 'learning'
      },
      {
        title: 'Live Chat',
        url: '/dashboard/chat',
        icon: 'help',
        shortcut: ['l', 'c'],
        contextId: 'website',
        appId: 'chat'
      }
    ]
  },
  
  // Sales Category
  {
    title: 'Sales',
    url: '/dashboard/sales',
    icon: 'product',
    isActive: false,
    shortcut: ['s', 'l'],
    contextId: 'sales',
    appId: 'sales',
    priority: 20,
    items: [
      {
        title: 'CRM',
        url: '/dashboard/crm',
        icon: 'user',
        shortcut: ['c', 'r'],
        contextId: 'sales',
        appId: 'crm'
      },
      {
        title: 'Sales',
        url: '/dashboard/sales/orders',
        icon: 'billing',
        shortcut: ['s', 'o'],
        contextId: 'sales',
        appId: 'sales'
      },
      {
        title: 'Point of Sale',
        url: '/dashboard/pos',
        icon: 'product',
        shortcut: ['p', 'o'],
        contextId: 'sales',
        appId: 'pos'
      },
      {
        title: 'Subscriptions',
        url: '/dashboard/subscriptions',
        icon: 'refresh',
        shortcut: ['s', 'u'],
        contextId: 'sales',
        appId: 'subscriptions'
      }
    ]
  },
  
  // Finance Category
  {
    title: 'Finance',
    url: '/dashboard/finance',
    icon: 'billing',
    isActive: false,
    shortcut: ['f', 'n'],
    contextId: 'finance',
    appId: 'finance',
    priority: 30,
    items: [
      {
        title: 'Accounting',
        url: '/dashboard/accounting',
        icon: 'chart',
        shortcut: ['a', 'c'],
        contextId: 'finance',
        appId: 'accounting'
      },
      {
        title: 'Invoicing',
        url: '/dashboard/invoicing',
        icon: 'billing',
        shortcut: ['i', 'n'],
        contextId: 'finance',
        appId: 'invoicing'
      },
      {
        title: 'Expenses',
        url: '/dashboard/expenses',
        icon: 'billing',
        shortcut: ['e', 'x'],
        contextId: 'finance',
        appId: 'expenses'
      },
      {
        title: 'Documents',
        url: '/dashboard/documents',
        icon: 'file',
        shortcut: ['d', 'o'],
        contextId: 'finance',
        appId: 'documents'
      },
      {
        title: 'Spreadsheets',
        url: '/dashboard/spreadsheets',
        icon: 'table',
        shortcut: ['s', 'p'],
        contextId: 'finance',
        appId: 'spreadsheets'
      }
    ]
  },
  
  // Inventory & Manufacturing Category
  {
    title: 'Inventory',
    url: '/dashboard/inventory',
    icon: 'folder',
    isActive: false,
    shortcut: ['i', 'v'],
    contextId: 'inventory',
    appId: 'inventory',
    priority: 40,
    items: [
      {
        title: 'Inventory',
        url: '/dashboard/inventory/stock',
        icon: 'folder',
        shortcut: ['i', 's'],
        contextId: 'inventory',
        appId: 'inventory'
      },
      {
        title: 'Manufacturing',
        url: '/dashboard/manufacturing',
        icon: 'settings',
        shortcut: ['m', 'f'],
        contextId: 'inventory',
        appId: 'manufacturing'
      },
      {
        title: 'Purchase',
        url: '/dashboard/purchase',
        icon: 'product',
        shortcut: ['p', 'u'],
        contextId: 'inventory',
        appId: 'purchase'
      },
      {
        title: 'Maintenance',
        url: '/dashboard/maintenance',
        icon: 'settings',
        shortcut: ['m', 't'],
        contextId: 'inventory',
        appId: 'maintenance'
      }
    ]
  },
  
  // Human Resources Category
  {
    title: 'HR',
    url: '/dashboard/hr',
    icon: 'user',
    isActive: false,
    shortcut: ['h', 'r'],
    contextId: 'hr',
    appId: 'hr',
    priority: 50,
    items: [
      {
        title: 'Employees',
        url: '/dashboard/employees',
        icon: 'user',
        shortcut: ['e', 'm'],
        contextId: 'hr',
        appId: 'employees'
      },
      {
        title: 'Recruitment',
        url: '/dashboard/recruitment',
        icon: 'userCircle',
        shortcut: ['r', 'c'],
        contextId: 'hr',
        appId: 'recruitment'
      },
      {
        title: 'Time Off',
        url: '/dashboard/timeoff',
        icon: 'userPen',
        shortcut: ['t', 'o'],
        contextId: 'hr',
        appId: 'timeoff'
      },
      {
        title: 'Appraisals',
        url: '/dashboard/appraisals',
        icon: 'chart',
        shortcut: ['a', 'p'],
        contextId: 'hr',
        appId: 'appraisals'
      }
    ]
  },
  
  // Marketing Category
  {
    title: 'Marketing',
    url: '/dashboard/marketing',
    icon: 'file',
    isActive: false,
    shortcut: ['m', 'k'],
    contextId: 'marketing',
    appId: 'marketing',
    priority: 60,
    items: [
      {
        title: 'Marketing Automation',
        url: '/dashboard/marketing/automation',
        icon: 'refresh',
        shortcut: ['m', 'a'],
        contextId: 'marketing',
        appId: 'marketing'
      },
      {
        title: 'Email Marketing',
        url: '/dashboard/email',
        icon: 'file',
        shortcut: ['e', 'm'],
        contextId: 'marketing',
        appId: 'email'
      },
      {
        title: 'Events',
        url: '/dashboard/events',
        icon: 'fileText',
        shortcut: ['e', 'v'],
        contextId: 'marketing',
        appId: 'events'
      },
      {
        title: 'Social Marketing',
        url: '/dashboard/social',
        icon: 'twitter',
        shortcut: ['s', 'm'],
        contextId: 'marketing',
        appId: 'social'
      }
    ]
  },
  
  // Services Category
  {
    title: 'Services',
    url: '/dashboard/services',
    icon: 'help',
    isActive: false,
    shortcut: ['s', 'v'],
    contextId: 'services',
    appId: 'services',
    priority: 70,
    items: [
      {
        title: 'Project',
        url: '/dashboard/projects',
        icon: 'folder',
        shortcut: ['p', 'r'],
        contextId: 'services',
        appId: 'projects'
      },
      {
        title: 'Timesheet',
        url: '/dashboard/timesheet',
        icon: 'check',
        shortcut: ['t', 's'],
        contextId: 'services',
        appId: 'timesheet'
      },
      {
        title: 'Helpdesk',
        url: '/dashboard/helpdesk',
        icon: 'help',
        shortcut: ['h', 'd'],
        contextId: 'services',
        appId: 'helpdesk'
      },
      {
        title: 'Appointments',
        url: '/dashboard/appointments',
        icon: 'media',
        shortcut: ['a', 't'],
        contextId: 'services',
        appId: 'appointments'
      }
    ]
  },
  
  // Productivity Category
  {
    title: 'Productivity',
    url: '/dashboard/productivity',
    icon: 'check',
    isActive: false,
    shortcut: ['p', 'd'],
    contextId: 'productivity',
    appId: 'productivity',
    priority: 80,
    items: [
      {
        title: 'Discuss',
        url: '/dashboard/discuss',
        icon: 'help',
        shortcut: ['d', 'i'],
        contextId: 'productivity',
        appId: 'discuss'
      },
      {
        title: 'Approvals',
        url: '/dashboard/approvals',
        icon: 'check',
        shortcut: ['a', 'p'],
        contextId: 'productivity',
        appId: 'approvals'
      },
      {
        title: 'Knowledge',
        url: '/dashboard/knowledge',
        icon: 'book',
        shortcut: ['k', 'n'],
        contextId: 'productivity',
        appId: 'knowledge'
      }
    ]
  },
  
  // Customization Category
  {
    title: 'Customization',
    url: '/dashboard/customization',
    icon: 'settings',
    isActive: false,
    shortcut: ['c', 'u'],
    contextId: 'customization',
    appId: 'customization',
    priority: 90,
    items: [
      {
        title: 'Studio',
        url: '/dashboard/studio',
        icon: 'settings',
        shortcut: ['s', 't'],
        contextId: 'customization',
        appId: 'studio'
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
