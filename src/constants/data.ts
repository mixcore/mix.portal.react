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
    name: 'Websites',
    description: 'Website, eCommerce, Blog, Forum, Chat and eLearning',
    icon: 'fileText'
  },
  {
    id: 'sales',
    name: 'Sales',
    description: 'CRM, Sales, Point of Sale, Subscriptions and Rental',
    icon: 'product'
  },
  {
    id: 'finance',
    name: 'Finance',
    description: 'Accounting, Invoicing, Expenses, Spreadsheets, Documents and Sign',
    icon: 'billing'
  },
  {
    id: 'inventory',
    name: 'Supply Chain',
    description: 'Inventory, Manufacturing, PLM, Purchase, Maintenance and Quality',
    icon: 'folder'
  },
  {
    id: 'hr',
    name: 'Human Resources',
    description: 'Employees, Recruitment, Time Off, Appraisals, Referrals and Fleet',
    icon: 'user'
  },
  {
    id: 'marketing',
    name: 'Marketing',
    description: 'Social, Email, SMS, Events, Automation and Surveys',
    icon: 'file'
  },
  {
    id: 'services',
    name: 'Services',
    description: 'Project, Timesheets, Field Service, Helpdesk, Planning and Appointments',
    icon: 'help'
  },
  {
    id: 'productivity',
    name: 'Productivity',
    description: 'Discuss, Approvals, IoT, VoIP, Knowledge, WhatsApp and Automation',
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
  // My Feeds - Available in all contexts for internal company social engagement
  {
    title: 'My Feeds',
    url: '/dashboard/feeds',
    icon: 'post',
    isActive: false,
    shortcut: ['m', 'f'],
    items: [],
    priority: -1 // Lower priority to appear above Dashboard
  },
  
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
  
  // Moved second-level items to first level (Websites context)
  {
    title: 'Website Builder',
    url: '/dashboard/apps/website',
    icon: 'fileText',
    shortcut: ['w', 'b'],
    contextId: 'website',
    appId: 'website',
    priority: 10,
    items: [
      {
        title: 'Pages',
        url: '/dashboard/apps/website?view=pages',
        contextId: 'website',
        appId: 'website',
        items: [
          {
            title: 'Published Pages',
            url: '/dashboard/website/pages/published',
            contextId: 'website',
            appId: 'website'
          },
          {
            title: 'Draft Pages',
            url: '/dashboard/website/pages/drafts',
            contextId: 'website',
            appId: 'website'
          },
          {
            title: 'Archived Pages',
            url: '/dashboard/website/pages/archived',
            contextId: 'website',
            appId: 'website'
          }
        ]
      },
      {
        title: 'Design',
        url: '/dashboard/website/design',
        contextId: 'website',
        appId: 'website',
        items: [
          {
            title: 'Themes',
            url: '/dashboard/website/design/themes',
            contextId: 'website',
            appId: 'website'
          },
          {
            title: 'Colors',
            url: '/dashboard/website/design/colors',
            contextId: 'website',
            appId: 'website'
          },
          {
            title: 'Typography',
            url: '/dashboard/website/design/typography',
            contextId: 'website',
            appId: 'website'
          }
        ]
      },
      {
        title: 'Sections',
        url: '/dashboard/website/sections',
        contextId: 'website',
        appId: 'website',
        items: [
          {
            title: 'Headers',
            url: '/dashboard/website/sections/headers',
            contextId: 'website',
            appId: 'website'
          },
          {
            title: 'Footers',
            url: '/dashboard/website/sections/footers',
            contextId: 'website',
            appId: 'website'
          },
          {
            title: 'Content Blocks',
            url: '/dashboard/website/sections/blocks',
            contextId: 'website',
            appId: 'website'
          }
        ]
      },
      {
        title: 'Navigation',
        url: '/dashboard/website/nav',
        contextId: 'website',
        appId: 'website',
      },
      {
        title: 'Settings',
        url: '/dashboard/website/settings',
        contextId: 'website',
        appId: 'website',
        items: [
          {
            title: 'SEO',
            url: '/dashboard/website/settings/seo',
            contextId: 'website',
            appId: 'website'
          },
          {
            title: 'Analytics',
            url: '/dashboard/website/settings/analytics',
            contextId: 'website',
            appId: 'website'
          },
          {
            title: 'Domain',
            url: '/dashboard/website/settings/domain',
            contextId: 'website',
            appId: 'website'
          }
        ]
      }
    ]
  },
  {
    title: 'eCommerce',
    url: '/dashboard/apps/ecommerce',
    icon: 'product',
    shortcut: ['e', 'c'],
    contextId: 'website',
    appId: 'ecommerce',
    priority: 11,
    items: [
      {
        title: 'Products',
        url: '/dashboard/apps/ecommerce?view=products',
        contextId: 'website',
        appId: 'ecommerce',
        items: [
          {
            title: 'Physical Products',
            url: '/dashboard/ecommerce/products/physical',
            contextId: 'website',
            appId: 'ecommerce'
          },
          {
            title: 'Digital Products',
            url: '/dashboard/ecommerce/products/digital',
            contextId: 'website',
            appId: 'ecommerce'
          },
          {
            title: 'Product Categories',
            url: '/dashboard/ecommerce/products/categories',
            contextId: 'website',
            appId: 'ecommerce'
          }
        ]
      },
      {
        title: 'Orders',
        url: '/dashboard/ecommerce/orders',
        contextId: 'website',
        appId: 'ecommerce',
        items: [
          {
            title: 'Pending Orders',
            url: '/dashboard/ecommerce/orders/pending',
            contextId: 'website',
            appId: 'ecommerce'
          },
          {
            title: 'Completed Orders',
            url: '/dashboard/ecommerce/orders/completed',
            contextId: 'website',
            appId: 'ecommerce'
          },
          {
            title: 'Returned Orders',
            url: '/dashboard/ecommerce/orders/returned',
            contextId: 'website',
            appId: 'ecommerce'
          }
        ]
      },
      {
        title: 'Customers',
        url: '/dashboard/ecommerce/customers',
        contextId: 'website',
        appId: 'ecommerce',
        items: [
          {
            title: 'All Customers',
            url: '/dashboard/ecommerce/customers/all',
            contextId: 'website',
            appId: 'ecommerce'
          },
          {
            title: 'Segments',
            url: '/dashboard/ecommerce/customers/segments',
            contextId: 'website',
            appId: 'ecommerce'
          },
          {
            title: 'Reviews',
            url: '/dashboard/ecommerce/customers/reviews',
            contextId: 'website',
            appId: 'ecommerce'
          }
        ]
      },
      {
        title: 'Payments',
        url: '/dashboard/ecommerce/payments',
        contextId: 'website',
        appId: 'ecommerce',
      },
      {
        title: 'Shipping',
        url: '/dashboard/ecommerce/shipping',
        contextId: 'website',
        appId: 'ecommerce',
      },
      {
        title: 'Promotions',
        url: '/dashboard/ecommerce/promos',
        contextId: 'website',
        appId: 'ecommerce',
        items: [
          {
            title: 'Discounts',
            url: '/dashboard/ecommerce/promos/discounts',
            contextId: 'website',
            appId: 'ecommerce'
          },
          {
            title: 'Coupon Codes',
            url: '/dashboard/ecommerce/promos/coupons',
            contextId: 'website',
            appId: 'ecommerce'
          },
          {
            title: 'Gift Cards',
            url: '/dashboard/ecommerce/promos/gift-cards',
            contextId: 'website',
            appId: 'ecommerce'
          }
        ]
      }
    ]
  },
  {
    title: 'Blog',
    url: '/dashboard/apps/blog',
    icon: 'post',
    shortcut: ['b', 'l'],
    contextId: 'website',
    appId: 'blog',
    priority: 12,
    items: [
      {
        title: 'All Posts',
        url: '/dashboard/apps/blog?view=posts',
        contextId: 'website',
        appId: 'blog',
      },
      {
        title: 'New Post',
        url: '/dashboard/blog/new',
        contextId: 'website',
        appId: 'blog',
      },
      {
        title: 'Categories',
        url: '/dashboard/blog/categories',
        contextId: 'website',
        appId: 'blog',
      },
      {
        title: 'Tags',
        url: '/dashboard/blog/tags',
        contextId: 'website',
        appId: 'blog',
      },
      {
        title: 'Settings',
        url: '/dashboard/blog/settings',
        contextId: 'website',
        appId: 'blog',
        items: [
          {
            title: 'General',
            url: '/dashboard/blog/settings/general',
            contextId: 'website',
            appId: 'blog'
          },
          {
            title: 'Comments',
            url: '/dashboard/blog/settings/comments',
            contextId: 'website',
            appId: 'blog'
          },
          {
            title: 'SEO',
            url: '/dashboard/blog/settings/seo',
            contextId: 'website',
            appId: 'blog'
          }
        ]
      }
    ]
  },
  {
    title: 'Forum',
    url: '/dashboard/apps/forum',
    icon: 'help',
    shortcut: ['f', 'o'],
    contextId: 'website',
    appId: 'forum',
    priority: 13,
    items: [
      {
        title: 'All Forums',
        url: '/dashboard/apps/forum?view=all',
        contextId: 'website',
        appId: 'forum',
      },
      {
        title: 'Categories',
        url: '/dashboard/forum/categories',
        contextId: 'website',
        appId: 'forum',
      },
      {
        title: 'Recent Discussions',
        url: '/dashboard/forum/recent',
        contextId: 'website',
        appId: 'forum',
      },
      {
        title: 'My Posts',
        url: '/dashboard/forum/my-posts',
        contextId: 'website',
        appId: 'forum',
      },
      {
        title: 'Settings',
        url: '/dashboard/forum/settings',
        contextId: 'website',
        appId: 'forum',
        items: [
          {
            title: 'Permissions',
            url: '/dashboard/forum/settings/permissions',
            contextId: 'website',
            appId: 'forum'
          },
          {
            title: 'Moderation',
            url: '/dashboard/forum/settings/moderation',
            contextId: 'website',
            appId: 'forum'
          },
          {
            title: 'Notifications',
            url: '/dashboard/forum/settings/notifications',
            contextId: 'website',
            appId: 'forum'
          }
        ]
      }
    ]
  },
  {
    title: 'Live Chat',
    url: '/dashboard/apps/livechat',
    icon: 'help',
    shortcut: ['l', 'c'],
    contextId: 'website',
    appId: 'livechat',
    priority: 14,
    items: [
      {
        title: 'Active Chats',
        url: '/dashboard/apps/livechat?view=active',
        contextId: 'website',
        appId: 'livechat',
      },
      {
        title: 'Chat History',
        url: '/dashboard/livechat/history',
        contextId: 'website',
        appId: 'livechat',
      },
      {
        title: 'Operators',
        url: '/dashboard/livechat/operators',
        contextId: 'website',
        appId: 'livechat',
      },
      {
        title: 'Configuration',
        url: '/dashboard/livechat/config',
        contextId: 'website',
        appId: 'livechat',
      },
      {
        title: 'Canned Responses',
        url: '/dashboard/livechat/canned',
        contextId: 'website',
        appId: 'livechat',
      }
    ]
  },
  {
    title: 'eLearning',
    url: '/dashboard/apps/elearning',
    icon: 'file',
    shortcut: ['e', 'l'],
    contextId: 'website',
    appId: 'elearning',
    priority: 15,
    items: [
      {
        title: 'All Courses',
        url: '/dashboard/apps/elearning?view=courses',
        contextId: 'website',
        appId: 'elearning',
      },
      {
        title: 'My Courses',
        url: '/dashboard/elearning/my-courses',
        contextId: 'website',
        appId: 'elearning',
      },
      {
        title: 'Create Course',
        url: '/dashboard/elearning/create',
        contextId: 'website',
        appId: 'elearning',
      },
      {
        title: 'Modules',
        url: '/dashboard/elearning/modules',
        contextId: 'website',
        appId: 'elearning',
      },
      {
        title: 'Quizzes',
        url: '/dashboard/elearning/quizzes',
        contextId: 'website',
        appId: 'elearning',
        items: [
          {
            title: 'All Quizzes',
            url: '/dashboard/elearning/quizzes/all',
            contextId: 'website',
            appId: 'elearning'
          },
          {
            title: 'Question Bank',
            url: '/dashboard/elearning/quizzes/questions',
            contextId: 'website',
            appId: 'elearning'
          },
          {
            title: 'Results',
            url: '/dashboard/elearning/quizzes/results',
            contextId: 'website',
            appId: 'elearning'
          }
        ]
      }
    ]
  },
  
  // Moved second-level items to first level (Sales context)
  {
    title: 'CRM',
    url: '/dashboard/apps/crm',
    icon: 'user',
    shortcut: ['c', 'r'],
    contextId: 'sales',
    appId: 'crm',
    priority: 20,
    items: [
      {
        title: 'Dashboard',
        url: '/dashboard/apps/crm?view=dashboard',
        contextId: 'sales',
        appId: 'crm',
      },
      {
        title: 'Leads',
        url: '/dashboard/crm/leads',
        contextId: 'sales',
        appId: 'crm',
        items: [
          {
            title: 'New Leads',
            url: '/dashboard/crm/leads/new',
            contextId: 'sales',
            appId: 'crm'
          },
          {
            title: 'Qualified Leads',
            url: '/dashboard/crm/leads/qualified',
            contextId: 'sales',
            appId: 'crm'
          },
          {
            title: 'Lead Scoring',
            url: '/dashboard/crm/leads/scoring',
            contextId: 'sales',
            appId: 'crm'
          }
        ]
      },
      {
        title: 'Opportunities',
        url: '/dashboard/crm/opportunities',
        contextId: 'sales',
        appId: 'crm',
        items: [
          {
            title: 'Pipeline View',
            url: '/dashboard/crm/opportunities/pipeline',
            contextId: 'sales',
            appId: 'crm'
          },
          {
            title: 'Forecasting',
            url: '/dashboard/crm/opportunities/forecasting',
            contextId: 'sales',
            appId: 'crm'
          },
          {
            title: 'Won/Lost Analysis',
            url: '/dashboard/crm/opportunities/analysis',
            contextId: 'sales',
            appId: 'crm'
          }
        ]
      },
      {
        title: 'Customers',
        url: '/dashboard/crm/customers',
        contextId: 'sales',
        appId: 'crm',
        items: [
          {
            title: 'All Customers',
            url: '/dashboard/crm/customers/all',
            contextId: 'sales',
            appId: 'crm'
          },
          {
            title: 'Segments',
            url: '/dashboard/crm/customers/segments',
            contextId: 'sales',
            appId: 'crm'
          },
          {
            title: 'Lifetime Value',
            url: '/dashboard/crm/customers/ltv',
            contextId: 'sales',
            appId: 'crm'
          }
        ]
      },
      {
        title: 'Activities',
        url: '/dashboard/crm/activities',
        contextId: 'sales',
        appId: 'crm',
        items: [
          {
            title: 'Calendar',
            url: '/dashboard/crm/activities/calendar',
            contextId: 'sales',
            appId: 'crm'
          },
          {
            title: 'Calls',
            url: '/dashboard/crm/activities/calls',
            contextId: 'sales',
            appId: 'crm'
          },
          {
            title: 'Meetings',
            url: '/dashboard/crm/activities/meetings',
            contextId: 'sales',
            appId: 'crm'
          }
        ]
      },
      {
        title: 'Reports',
        url: '/dashboard/crm/reports',
        contextId: 'sales',
        appId: 'crm',
        items: [
          {
            title: 'Sales Pipeline',
            url: '/dashboard/crm/reports/pipeline',
            contextId: 'sales',
            appId: 'crm'
          },
          {
            title: 'Conversion Rates',
            url: '/dashboard/crm/reports/conversion',
            contextId: 'sales',
            appId: 'crm'
          },
          {
            title: 'Activity Analysis',
            url: '/dashboard/crm/reports/activity',
            contextId: 'sales',
            appId: 'crm'
          }
        ]
      }
    ]
  },
  {
    title: 'Sales',
    url: '/dashboard/apps/sales',
    icon: 'billing',
    shortcut: ['s', 'o'],
    contextId: 'sales',
    appId: 'sales',
    priority: 21,
    items: [
      {
        title: 'Quotations',
        url: '/dashboard/apps/sales?view=quotes',
        contextId: 'sales',
        appId: 'sales',
        items: [
          {
            title: 'Draft Quotes',
            url: '/dashboard/sales/quotations/draft',
            contextId: 'sales',
            appId: 'sales'
          },
          {
            title: 'Sent Quotes',
            url: '/dashboard/sales/quotations/sent',
            contextId: 'sales',
            appId: 'sales'
          },
          {
            title: 'Quote Templates',
            url: '/dashboard/sales/quotations/templates',
            contextId: 'sales',
            appId: 'sales'
          }
        ]
      },
      {
        title: 'Orders',
        url: '/dashboard/sales/orders',
        contextId: 'sales',
        appId: 'sales',
        items: [
          {
            title: 'New Orders',
            url: '/dashboard/sales/orders/new',
            contextId: 'sales',
            appId: 'sales'
          },
          {
            title: 'Processing',
            url: '/dashboard/sales/orders/processing',
            contextId: 'sales',
            appId: 'sales'
          },
          {
            title: 'Completed',
            url: '/dashboard/sales/orders/completed',
            contextId: 'sales',
            appId: 'sales'
          }
        ]
      },
      {
        title: 'Deliveries',
        url: '/dashboard/sales/deliveries',
        contextId: 'sales',
        appId: 'sales',
        items: [
          {
            title: 'Pending',
            url: '/dashboard/sales/deliveries/pending',
            contextId: 'sales',
            appId: 'sales'
          },
          {
            title: 'Shipped',
            url: '/dashboard/sales/deliveries/shipped',
            contextId: 'sales',
            appId: 'sales'
          },
          {
            title: 'Delivered',
            url: '/dashboard/sales/deliveries/delivered',
            contextId: 'sales',
            appId: 'sales'
          }
        ]
      },
      {
        title: 'Invoices',
        url: '/dashboard/sales/invoices',
        contextId: 'sales',
        appId: 'sales',
        items: [
          {
            title: 'Outstanding',
            url: '/dashboard/sales/invoices/outstanding',
            contextId: 'sales',
            appId: 'sales'
          },
          {
            title: 'Paid',
            url: '/dashboard/sales/invoices/paid',
            contextId: 'sales',
            appId: 'sales'
          },
          {
            title: 'Overdue',
            url: '/dashboard/sales/invoices/overdue',
            contextId: 'sales',
            appId: 'sales'
          }
        ]
      },
      {
        title: 'Products',
        url: '/dashboard/sales/products',
        contextId: 'sales',
        appId: 'sales',
        items: [
          {
            title: 'All Products',
            url: '/dashboard/sales/products/all',
            contextId: 'sales',
            appId: 'sales'
          },
          {
            title: 'Categories',
            url: '/dashboard/sales/products/categories',
            contextId: 'sales',
            appId: 'sales'
          },
          {
            title: 'Pricing',
            url: '/dashboard/sales/products/pricing',
            contextId: 'sales',
            appId: 'sales'
          }
        ]
      }
    ]
  },
  {
    title: 'POS Shop',
    url: '/dashboard/apps/pos-shop',
    icon: 'product',
    shortcut: ['p', 's'],
    contextId: 'sales',
    appId: 'pos-shop',
    priority: 22,
    items: [
      {
        title: 'Point of Sale',
        url: '/dashboard/apps/pos-shop?view=pos',
        contextId: 'sales',
        appId: 'pos-shop',
      },
      {
        title: 'Products',
        url: '/dashboard/pos-shop/products',
        contextId: 'sales',
        appId: 'pos-shop',
        items: [
          {
            title: 'All Products',
            url: '/dashboard/pos-shop/products/all',
            contextId: 'sales',
            appId: 'pos-shop'
          },
          {
            title: 'Categories',
            url: '/dashboard/pos-shop/products/categories',
            contextId: 'sales',
            appId: 'pos-shop'
          },
          {
            title: 'Inventory',
            url: '/dashboard/pos-shop/products/inventory',
            contextId: 'sales',
            appId: 'pos-shop'
          }
        ]
      },
      {
        title: 'Orders',
        url: '/dashboard/pos-shop/orders',
        contextId: 'sales',
        appId: 'pos-shop',
      },
      {
        title: 'Configuration',
        url: '/dashboard/pos-shop/config',
        contextId: 'sales',
        appId: 'pos-shop',
      },
      {
        title: 'Reports',
        url: '/dashboard/pos-shop/reports',
        contextId: 'sales',
        appId: 'pos-shop',
        items: [
          {
            title: 'Sales Reports',
            url: '/dashboard/pos-shop/reports/sales',
            contextId: 'sales',
            appId: 'pos-shop'
          },
          {
            title: 'Product Reports',
            url: '/dashboard/pos-shop/reports/products',
            contextId: 'sales',
            appId: 'pos-shop'
          },
          {
            title: 'Cashier Reports',
            url: '/dashboard/pos-shop/reports/cashiers',
            contextId: 'sales',
            appId: 'pos-shop'
          }
        ]
      }
    ]
  },
  {
    title: 'POS Restaurant',
    url: '/dashboard/apps/pos-resto',
    icon: 'product',
    shortcut: ['p', 'r'],
    contextId: 'sales',
    appId: 'pos-resto',
    priority: 23,
    items: [
      {
        title: 'Tables',
        url: '/dashboard/apps/pos-resto?view=tables',
        contextId: 'sales',
        appId: 'pos-resto',
      },
      {
        title: 'Order',
        url: '/dashboard/pos-resto/order',
        contextId: 'sales',
        appId: 'pos-resto',
      },
      {
        title: 'Kitchen',
        url: '/dashboard/pos-resto/kitchen',
        contextId: 'sales',
        appId: 'pos-resto',
      },
      {
        title: 'Menu',
        url: '/dashboard/pos-resto/menu',
        contextId: 'sales',
        appId: 'pos-resto',
        items: [
          {
            title: 'Items',
            url: '/dashboard/pos-resto/menu/items',
            contextId: 'sales',
            appId: 'pos-resto'
          },
          {
            title: 'Categories',
            url: '/dashboard/pos-resto/menu/categories',
            contextId: 'sales',
            appId: 'pos-resto'
          },
          {
            title: 'Modifiers',
            url: '/dashboard/pos-resto/menu/modifiers',
            contextId: 'sales',
            appId: 'pos-resto'
          }
        ]
      },
      {
        title: 'Billing',
        url: '/dashboard/pos-resto/billing',
        contextId: 'sales',
        appId: 'pos-resto',
      }
    ]
  },
  {
    title: 'Subscriptions',
    url: '/dashboard/apps/subscriptions',
    icon: 'refresh',
    shortcut: ['s', 'u'],
    contextId: 'sales',
    appId: 'subscriptions',
    priority: 24,
    items: [
      {
        title: 'Active',
        url: '/dashboard/apps/subscriptions?view=active',
        contextId: 'sales',
        appId: 'subscriptions',
      },
      {
        title: 'Drafts',
        url: '/dashboard/subscriptions/drafts',
        contextId: 'sales',
        appId: 'subscriptions',
      },
      {
        title: 'Expired',
        url: '/dashboard/subscriptions/expired',
        contextId: 'sales',
        appId: 'subscriptions',
      },
      {
        title: 'Products',
        url: '/dashboard/subscriptions/products',
        contextId: 'sales',
        appId: 'subscriptions',
        items: [
          {
            title: 'All Products',
            url: '/dashboard/subscriptions/products/all',
            contextId: 'sales',
            appId: 'subscriptions'
          },
          {
            title: 'Plans',
            url: '/dashboard/subscriptions/products/plans',
            contextId: 'sales',
            appId: 'subscriptions'
          },
          {
            title: 'Add-ons',
            url: '/dashboard/subscriptions/products/addons',
            contextId: 'sales',
            appId: 'subscriptions'
          }
        ]
      },
      {
        title: 'Reports',
        url: '/dashboard/subscriptions/reports',
        contextId: 'sales',
        appId: 'subscriptions',
        items: [
          {
            title: 'Revenue',
            url: '/dashboard/subscriptions/reports/revenue',
            contextId: 'sales',
            appId: 'subscriptions'
          },
          {
            title: 'Churn',
            url: '/dashboard/subscriptions/reports/churn',
            contextId: 'sales',
            appId: 'subscriptions'
          },
          {
            title: 'Growth',
            url: '/dashboard/subscriptions/reports/growth',
            contextId: 'sales',
            appId: 'subscriptions'
          }
        ]
      }
    ]
  },
  {
    title: 'Rental',
    url: '/dashboard/apps/rental',
    icon: 'dashboard',
    shortcut: ['r', 'e'],
    contextId: 'sales',
    appId: 'rental',
    priority: 25,
    items: [
      {
        title: 'Products',
        url: '/dashboard/apps/rental?view=products',
        contextId: 'sales',
        appId: 'rental',
        items: [
          {
            title: 'All Products',
            url: '/dashboard/rental/products/all',
            contextId: 'sales',
            appId: 'rental'
          },
          {
            title: 'Available',
            url: '/dashboard/rental/products/available',
            contextId: 'sales',
            appId: 'rental'
          },
          {
            title: 'Rented',
            url: '/dashboard/rental/products/rented',
            contextId: 'sales',
            appId: 'rental'
          }
        ]
      },
      {
        title: 'Quotes',
        url: '/dashboard/rental/quotes',
        contextId: 'sales',
        appId: 'rental',
      },
      {
        title: 'Orders',
        url: '/dashboard/rental/orders',
        contextId: 'sales',
        appId: 'rental',
      },
      {
        title: 'Returns',
        url: '/dashboard/rental/returns',
        contextId: 'sales',
        appId: 'rental',
      },
      {
        title: 'Calendar',
        url: '/dashboard/rental/calendar',
        contextId: 'sales',
        appId: 'rental',
      }
    ]
  },
  
  // Moved second-level items to first level (Finance context)
  {
    title: 'Accounting',
    url: '/dashboard/apps/accounting',
    icon: 'chart',
    shortcut: ['a', 'c'],
    contextId: 'finance',
    appId: 'accounting',
    priority: 30,
    items: [
      {
        title: 'Dashboard',
        url: '/dashboard/apps/accounting?view=dashboard',
        contextId: 'finance',
        appId: 'accounting',
      },
      {
        title: 'Chart of Accounts',
        url: '/dashboard/accounting/accounts',
        contextId: 'finance',
        appId: 'accounting',
        items: [
          {
            title: 'Asset Accounts',
            url: '/dashboard/accounting/accounts/assets',
            contextId: 'finance',
            appId: 'accounting'
          },
          {
            title: 'Liability Accounts',
            url: '/dashboard/accounting/accounts/liabilities',
            contextId: 'finance',
            appId: 'accounting'
          },
          {
            title: 'Equity Accounts',
            url: '/dashboard/accounting/accounts/equity',
            contextId: 'finance',
            appId: 'accounting'
          }
        ]
      },
      {
        title: 'Journal Entries',
        url: '/dashboard/accounting/journals',
        contextId: 'finance',
        appId: 'accounting',
        items: [
          {
            title: 'Create Entry',
            url: '/dashboard/accounting/journals/create',
            contextId: 'finance',
            appId: 'accounting'
          },
          {
            title: 'Review Entries',
            url: '/dashboard/accounting/journals/review',
            contextId: 'finance',
            appId: 'accounting'
          },
          {
            title: 'Entry Templates',
            url: '/dashboard/accounting/journals/templates',
            contextId: 'finance',
            appId: 'accounting'
          }
        ]
      },
      {
        title: 'Bank & Cash',
        url: '/dashboard/accounting/bank',
        contextId: 'finance',
        appId: 'accounting',
        items: [
          {
            title: 'Accounts',
            url: '/dashboard/accounting/bank/accounts',
            contextId: 'finance',
            appId: 'accounting'
          },
          {
            title: 'Transactions',
            url: '/dashboard/accounting/bank/transactions',
            contextId: 'finance',
            appId: 'accounting'
          },
          {
            title: 'Reconciliation',
            url: '/dashboard/accounting/bank/reconciliation',
            contextId: 'finance',
            appId: 'accounting'
          }
        ]
      },
      {
        title: 'Financial Reports',
        url: '/dashboard/accounting/reports',
        contextId: 'finance',
        appId: 'accounting',
        items: [
          {
            title: 'Income Statement',
            url: '/dashboard/accounting/reports/income',
            contextId: 'finance',
            appId: 'accounting'
          },
          {
            title: 'Balance Sheet',
            url: '/dashboard/accounting/reports/balance',
            contextId: 'finance',
            appId: 'accounting'
          },
          {
            title: 'Cash Flow',
            url: '/dashboard/accounting/reports/cashflow',
            contextId: 'finance',
            appId: 'accounting'
          }
        ]
      }
    ]
  },
  {
    title: 'Invoicing',
    url: '/dashboard/apps/invoicing',
    icon: 'billing',
    shortcut: ['i', 'n'],
    contextId: 'finance',
    appId: 'invoicing',
    priority: 31,
    items: [
      {
        title: 'Drafts',
        url: '/dashboard/apps/invoicing?view=drafts',
        contextId: 'finance',
        appId: 'invoicing',
      },
      {
        title: 'Sent',
        url: '/dashboard/invoicing/sent',
        contextId: 'finance',
        appId: 'invoicing',
      },
      {
        title: 'Paid',
        url: '/dashboard/invoicing/paid',
        contextId: 'finance',
        appId: 'invoicing',
      },
      {
        title: 'Recurring',
        url: '/dashboard/invoicing/recurring',
        contextId: 'finance',
        appId: 'invoicing',
        items: [
          {
            title: 'Active Subscriptions',
            url: '/dashboard/invoicing/recurring/active',
            contextId: 'finance',
            appId: 'invoicing'
          },
          {
            title: 'Upcoming Renewals',
            url: '/dashboard/invoicing/recurring/upcoming',
            contextId: 'finance',
            appId: 'invoicing'
          },
          {
            title: 'Subscription Plans',
            url: '/dashboard/invoicing/recurring/plans',
            contextId: 'finance',
            appId: 'invoicing'
          }
        ]
      },
      {
        title: 'Products',
        url: '/dashboard/invoicing/products',
        contextId: 'finance',
        appId: 'invoicing',
        items: [
          {
            title: 'All Products',
            url: '/dashboard/invoicing/products/all',
            contextId: 'finance',
            appId: 'invoicing'
          },
          {
            title: 'Categories',
            url: '/dashboard/invoicing/products/categories',
            contextId: 'finance',
            appId: 'invoicing'
          },
          {
            title: 'Pricing',
            url: '/dashboard/invoicing/products/pricing',
            contextId: 'finance',
            appId: 'invoicing'
          }
        ]
      }
    ]
  },
  {
    title: 'Expenses',
    url: '/dashboard/apps/expenses',
    icon: 'billing',
    shortcut: ['e', 'x'],
    contextId: 'finance',
    appId: 'expenses',
    priority: 32,
    items: [
      {
        title: 'Reports',
        url: '/dashboard/apps/expenses?view=reports',
        contextId: 'finance',
        appId: 'expenses',
      },
      {
        title: 'All Expenses',
        url: '/dashboard/expenses/all',
        contextId: 'finance',
        appId: 'expenses',
      },
      {
        title: 'Categories',
        url: '/dashboard/expenses/categories',
        contextId: 'finance',
        appId: 'expenses',
      },
      {
        title: 'Payment Methods',
        url: '/dashboard/expenses/methods',
        contextId: 'finance',
        appId: 'expenses',
      },
      {
        title: 'Reimbursements',
        url: '/dashboard/expenses/reimburse',
        contextId: 'finance',
        appId: 'expenses',
        items: [
          {
            title: 'Pending',
            url: '/dashboard/expenses/reimburse/pending',
            contextId: 'finance',
            appId: 'expenses'
          },
          {
            title: 'Approved',
            url: '/dashboard/expenses/reimburse/approved',
            contextId: 'finance',
            appId: 'expenses'
          },
          {
            title: 'Paid',
            url: '/dashboard/expenses/reimburse/paid',
            contextId: 'finance',
            appId: 'expenses'
          }
        ]
      }
    ]
  },
  {
    title: 'Spreadsheet',
    url: '/dashboard/apps/spreadsheet',
    icon: 'table',
    shortcut: ['s', 'p'],
    contextId: 'finance',
    appId: 'spreadsheet',
    priority: 33,
    items: [
      {
        title: 'Data',
        url: '/dashboard/apps/spreadsheet?view=data',
        contextId: 'finance',
        appId: 'spreadsheet',
      },
      {
        title: 'Reports',
        url: '/dashboard/spreadsheet/reports',
        contextId: 'finance',
        appId: 'spreadsheet',
      },
      {
        title: 'Pivot Tables',
        url: '/dashboard/spreadsheet/pivot',
        contextId: 'finance',
        appId: 'spreadsheet',
      },
      {
        title: 'Charts',
        url: '/dashboard/spreadsheet/charts',
        contextId: 'finance',
        appId: 'spreadsheet',
      },
      {
        title: 'Formulas',
        url: '/dashboard/spreadsheet/formulas',
        contextId: 'finance',
        appId: 'spreadsheet',
      }
    ]
  },
  {
    title: 'Documents',
    url: '/dashboard/apps/documents',
    icon: 'file',
    shortcut: ['d', 'o'],
    contextId: 'finance',
    appId: 'documents',
    priority: 34,
    items: [
      {
        title: 'All Documents',
        url: '/dashboard/apps/documents?view=all',
        contextId: 'finance',
        appId: 'documents',
      },
      {
        title: 'By Category',
        url: '/dashboard/documents/categories',
        contextId: 'finance',
        appId: 'documents',
      },
      {
        title: 'Upload',
        url: '/dashboard/documents/upload',
        contextId: 'finance',
        appId: 'documents',
      },
      {
        title: 'Shared',
        url: '/dashboard/documents/shared',
        contextId: 'finance',
        appId: 'documents',
      },
      {
        title: 'Templates',
        url: '/dashboard/documents/templates',
        contextId: 'finance',
        appId: 'documents',
      }
    ]
  },
  {
    title: 'Sign',
    url: '/dashboard/apps/sign',
    icon: 'file',
    shortcut: ['s', 'i'],
    contextId: 'finance',
    appId: 'sign',
    priority: 35,
    items: [
      {
        title: 'Send for Signature',
        url: '/dashboard/apps/sign?view=send',
        contextId: 'finance',
        appId: 'sign',
      },
      {
        title: 'My Documents',
        url: '/dashboard/sign/my-docs',
        contextId: 'finance',
        appId: 'sign',
      },
      {
        title: 'Templates',
        url: '/dashboard/sign/templates',
        contextId: 'finance',
        appId: 'sign',
      },
      {
        title: 'Settings',
        url: '/dashboard/sign/settings',
        contextId: 'finance',
        appId: 'sign',
      },
      {
        title: 'Audit Trail',
        url: '/dashboard/sign/audit',
        contextId: 'finance',
        appId: 'sign',
      }
    ]
  },
  
  // Moved second-level items to first level (HR context)
  {
    title: 'Employees',
    url: '/dashboard/apps/employees',
    icon: 'user',
    shortcut: ['e', 'm'],
    contextId: 'hr',
    appId: 'employees',
    priority: 50,
    items: [
      {
        title: 'Directory',
        url: '/dashboard/apps/employees?view=directory',
        contextId: 'hr',
        appId: 'employees',
        items: [
          {
            title: 'Active Employees',
            url: '/dashboard/employees/directory/active',
            contextId: 'hr',
            appId: 'employees'
          },
          {
            title: 'Contractors',
            url: '/dashboard/employees/directory/contractors',
            contextId: 'hr',
            appId: 'employees'
          },
          {
            title: 'Alumni',
            url: '/dashboard/employees/directory/alumni',
            contextId: 'hr',
            appId: 'employees'
          }
        ]
      },
      {
        title: 'Onboarding',
        url: '/dashboard/employees/onboarding',
        contextId: 'hr',
        appId: 'employees',
        items: [
          {
            title: 'New Hires',
            url: '/dashboard/employees/onboarding/new',
            contextId: 'hr',
            appId: 'employees'
          },
          {
            title: 'Paperwork',
            url: '/dashboard/employees/onboarding/paperwork',
            contextId: 'hr',
            appId: 'employees'
          },
          {
            title: 'Training',
            url: '/dashboard/employees/onboarding/training',
            contextId: 'hr',
            appId: 'employees'
          }
        ]
      },
      {
        title: 'Performance',
        url: '/dashboard/employees/performance',
        contextId: 'hr',
        appId: 'employees',
        items: [
          {
            title: 'Reviews',
            url: '/dashboard/employees/performance/reviews',
            contextId: 'hr',
            appId: 'employees'
          },
          {
            title: 'Goals',
            url: '/dashboard/employees/performance/goals',
            contextId: 'hr',
            appId: 'employees'
          },
          {
            title: 'Feedback',
            url: '/dashboard/employees/performance/feedback',
            contextId: 'hr',
            appId: 'employees'
          }
        ]
      }
    ]
  },
  {
    title: 'Recruitment',
    url: '/dashboard/apps/recruitment',
    icon: 'userCircle',
    shortcut: ['r', 'c'],
    contextId: 'hr',
    appId: 'recruitment',
    priority: 51,
    items: [
      {
        title: 'Job Postings',
        url: '/dashboard/apps/recruitment?view=jobs',
        contextId: 'hr',
        appId: 'recruitment',
        items: [
          {
            title: 'Active Postings',
            url: '/dashboard/recruitment/jobs/active',
            contextId: 'hr',
            appId: 'recruitment'
          },
          {
            title: 'Draft Postings',
            url: '/dashboard/recruitment/jobs/draft',
            contextId: 'hr',
            appId: 'recruitment'
          },
          {
            title: 'Job Templates',
            url: '/dashboard/recruitment/jobs/templates',
            contextId: 'hr',
            appId: 'recruitment'
          }
        ]
      },
      {
        title: 'Candidates',
        url: '/dashboard/recruitment/candidates',
        contextId: 'hr',
        appId: 'recruitment',
        items: [
          {
            title: 'All Applications',
            url: '/dashboard/recruitment/candidates/all',
            contextId: 'hr',
            appId: 'recruitment'
          },
          {
            title: 'Shortlisted',
            url: '/dashboard/recruitment/candidates/shortlisted',
            contextId: 'hr',
            appId: 'recruitment'
          },
          {
            title: 'Interviews',
            url: '/dashboard/recruitment/candidates/interviews',
            contextId: 'hr',
            appId: 'recruitment'
          }
        ]
      },
      {
        title: 'Hiring Pipeline',
        url: '/dashboard/recruitment/pipeline',
        contextId: 'hr',
        appId: 'recruitment',
        items: [
          {
            title: 'Pipeline View',
            url: '/dashboard/recruitment/pipeline/view',
            contextId: 'hr',
            appId: 'recruitment'
          },
          {
            title: 'Analytics',
            url: '/dashboard/recruitment/pipeline/analytics',
            contextId: 'hr',
            appId: 'recruitment'
          },
          {
            title: 'Hiring Team',
            url: '/dashboard/recruitment/pipeline/team',
            contextId: 'hr',
            appId: 'recruitment'
          }
        ]
      }
    ]
  },
  {
    title: 'Time Off',
    url: '/dashboard/apps/timeoff',
    icon: 'userPen',
    shortcut: ['t', 'o'],
    contextId: 'hr',
    appId: 'timeoff',
    priority: 52,
    items: [
      {
        title: 'Requests',
        url: '/dashboard/apps/timeoff?view=requests',
        contextId: 'hr',
        appId: 'timeoff',
        items: [
          {
            title: 'Pending Approval',
            url: '/dashboard/timeoff/requests/pending',
            contextId: 'hr',
            appId: 'timeoff'
          },
          {
            title: 'Approved Requests',
            url: '/dashboard/timeoff/requests/approved',
            contextId: 'hr',
            appId: 'timeoff'
          },
          {
            title: 'Denied Requests',
            url: '/dashboard/timeoff/requests/denied',
            contextId: 'hr',
            appId: 'timeoff'
          }
        ]
      },
      {
        title: 'Calendar',
        url: '/dashboard/timeoff/calendar',
        contextId: 'hr',
        appId: 'timeoff',
        items: [
          {
            title: 'Team Calendar',
            url: '/dashboard/timeoff/calendar/team',
            contextId: 'hr',
            appId: 'timeoff'
          },
          {
            title: 'Department Calendar',
            url: '/dashboard/timeoff/calendar/department',
            contextId: 'hr',
            appId: 'timeoff'
          },
          {
            title: 'Company Calendar',
            url: '/dashboard/timeoff/calendar/company',
            contextId: 'hr',
            appId: 'timeoff'
          }
        ]
      },
      {
        title: 'Policies',
        url: '/dashboard/timeoff/policies',
        contextId: 'hr',
        appId: 'timeoff',
        items: [
          {
            title: 'Vacation Policy',
            url: '/dashboard/timeoff/policies/vacation',
            contextId: 'hr',
            appId: 'timeoff'
          },
          {
            title: 'Sick Leave Policy',
            url: '/dashboard/timeoff/policies/sick',
            contextId: 'hr',
            appId: 'timeoff'
          },
          {
            title: 'Holiday Schedule',
            url: '/dashboard/timeoff/policies/holidays',
            contextId: 'hr',
            appId: 'timeoff'
          }
        ]
      }
    ]
  },
  {
    title: 'Appraisals',
    url: '/dashboard/apps/appraisals',
    icon: 'chart',
    shortcut: ['a', 'p'],
    contextId: 'hr',
    appId: 'appraisals',
    priority: 53,
    items: [
      {
        title: 'Review Cycles',
        url: '/dashboard/apps/appraisals?view=cycles',
        contextId: 'hr',
        appId: 'appraisals',
        items: [
          {
            title: 'Current Cycle',
            url: '/dashboard/appraisals/cycles/current',
            contextId: 'hr',
            appId: 'appraisals'
          },
          {
            title: 'Past Cycles',
            url: '/dashboard/appraisals/cycles/past',
            contextId: 'hr',
            appId: 'appraisals'
          },
          {
            title: 'Upcoming Cycles',
            url: '/dashboard/appraisals/cycles/upcoming',
            contextId: 'hr',
            appId: 'appraisals'
          }
        ]
      },
      {
        title: 'Templates',
        url: '/dashboard/appraisals/templates',
        contextId: 'hr',
        appId: 'appraisals',
        items: [
          {
            title: 'Performance Templates',
            url: '/dashboard/appraisals/templates/performance',
            contextId: 'hr',
            appId: 'appraisals'
          },
          {
            title: '360 Feedback Templates',
            url: '/dashboard/appraisals/templates/360',
            contextId: 'hr',
            appId: 'appraisals'
          },
          {
            title: 'Self-Assessment Templates',
            url: '/dashboard/appraisals/templates/self',
            contextId: 'hr',
            appId: 'appraisals'
          }
        ]
      },
      {
        title: 'Reports',
        url: '/dashboard/appraisals/reports',
        contextId: 'hr',
        appId: 'appraisals',
        items: [
          {
            title: 'Individual Reports',
            url: '/dashboard/appraisals/reports/individual',
            contextId: 'hr',
            appId: 'appraisals'
          },
          {
            title: 'Team Reports',
            url: '/dashboard/appraisals/reports/team',
            contextId: 'hr',
            appId: 'appraisals'
          },
          {
            title: 'Trend Analysis',
            url: '/dashboard/appraisals/reports/trends',
            contextId: 'hr',
            appId: 'appraisals'
          }
        ]
      }
    ]
  },
  {
    title: 'Marketing Automation',
    url: '/dashboard/apps/marketing',
    icon: 'refresh',
    shortcut: ['m', 'a'],
    contextId: 'marketing',
    appId: 'marketing',
    priority: 60,
    items: [
      {
        title: 'Campaigns',
        url: '/dashboard/apps/marketing?view=campaigns',
        contextId: 'marketing',
        appId: 'marketing',
        items: [
          {
            title: 'Active Campaigns',
            url: '/dashboard/marketing/automation/campaigns/active',
            contextId: 'marketing',
            appId: 'marketing'
          },
          {
            title: 'Scheduled Campaigns',
            url: '/dashboard/marketing/automation/campaigns/scheduled',
            contextId: 'marketing',
            appId: 'marketing'
          },
          {
            title: 'Completed Campaigns',
            url: '/dashboard/marketing/automation/campaigns/completed',
            contextId: 'marketing',
            appId: 'marketing'
          }
        ]
      },
      {
        title: 'Workflows',
        url: '/dashboard/marketing/automation/workflows',
        contextId: 'marketing',
        appId: 'marketing',
        items: [
          {
            title: 'Lead Nurturing',
            url: '/dashboard/marketing/automation/workflows/lead',
            contextId: 'marketing',
            appId: 'marketing'
          },
          {
            title: 'Customer Onboarding',
            url: '/dashboard/marketing/automation/workflows/onboarding',
            contextId: 'marketing',
            appId: 'marketing'
          },
          {
            title: 'Re-engagement',
            url: '/dashboard/marketing/automation/workflows/reengagement',
            contextId: 'marketing',
            appId: 'marketing'
          }
        ]
      },
      {
        title: 'Analytics',
        url: '/dashboard/marketing/automation/analytics',
        contextId: 'marketing',
        appId: 'marketing',
        items: [
          {
            title: 'Performance Metrics',
            url: '/dashboard/marketing/automation/analytics/performance',
            contextId: 'marketing',
            appId: 'marketing'
          },
          {
            title: 'Conversion Rates',
            url: '/dashboard/marketing/automation/analytics/conversion',
            contextId: 'marketing',
            appId: 'marketing'
          },
          {
            title: 'ROI Reporting',
            url: '/dashboard/marketing/automation/analytics/roi',
            contextId: 'marketing',
            appId: 'marketing'
          }
        ]
      }
    ]
  },
  {
    title: 'Discuss',
    url: '/dashboard/apps/discuss',
    icon: 'help',
    shortcut: ['d', 'i'],
    contextId: 'productivity',
    appId: 'discuss',
    priority: 80,
    items: [
      {
        title: 'Channels',
        url: '/dashboard/apps/discuss?view=channels',
        contextId: 'productivity',
        appId: 'discuss',
        items: [
          {
            title: 'Team Channels',
            url: '/dashboard/discuss/channels/team',
            contextId: 'productivity',
            appId: 'discuss'
          },
          {
            title: 'Project Channels',
            url: '/dashboard/discuss/channels/project',
            contextId: 'productivity',
            appId: 'discuss'
          },
          {
            title: 'Private Channels',
            url: '/dashboard/discuss/channels/private',
            contextId: 'productivity',
            appId: 'discuss'
          }
        ]
      },
      {
        title: 'Direct Messages',
        url: '/dashboard/discuss/direct',
        contextId: 'productivity',
        appId: 'discuss',
      },
      {
        title: 'Mentions',
        url: '/dashboard/discuss/mentions',
        contextId: 'productivity',
        appId: 'discuss',
      },
      {
        title: 'Files',
        url: '/dashboard/discuss/files',
        contextId: 'productivity',
        appId: 'discuss',
      },
      {
        title: 'Settings',
        url: '/dashboard/discuss/settings',
        contextId: 'productivity',
        appId: 'discuss',
        items: [
          {
            title: 'Notifications',
            url: '/dashboard/discuss/settings/notifications',
            contextId: 'productivity',
            appId: 'discuss'
          },
          {
            title: 'Integrations',
            url: '/dashboard/discuss/settings/integrations',
            contextId: 'productivity',
            appId: 'discuss'
          },
          {
            title: 'Privacy',
            url: '/dashboard/discuss/settings/privacy',
            contextId: 'productivity',
            appId: 'discuss'
          }
        ]
      }
    ]
  },
  {
    title: 'Approvals',
    url: '/dashboard/apps/approvals',
    icon: 'check',
    shortcut: ['a', 'a'],
    contextId: 'productivity',
    appId: 'approvals',
    priority: 81,
    items: [
      {
        title: 'Requests',
        url: '/dashboard/apps/approvals?view=requests',
        contextId: 'productivity',
        appId: 'approvals',
      },
      {
        title: 'My Requests',
        url: '/dashboard/approvals/my-req',
        contextId: 'productivity',
        appId: 'approvals',
      },
      {
        title: 'Configuration',
        url: '/dashboard/approvals/config',
        contextId: 'productivity',
        appId: 'approvals',
      },
      {
        title: 'History',
        url: '/dashboard/approvals/history',
        contextId: 'productivity',
        appId: 'approvals',
      },
      {
        title: 'Settings',
        url: '/dashboard/approvals/settings',
        contextId: 'productivity',
        appId: 'approvals',
      }
    ]
  },
  {
    title: 'IoT',
    url: '/dashboard/apps/iot',
    icon: 'settings',
    shortcut: ['i', 'o'],
    contextId: 'productivity',
    appId: 'iot',
    priority: 82,
    items: [
      {
        title: 'Devices',
        url: '/dashboard/apps/iot?view=devices',
        contextId: 'productivity',
        appId: 'iot',
        items: [
          {
            title: 'All Devices',
            url: '/dashboard/iot/devices/all',
            contextId: 'productivity',
            appId: 'iot'
          },
          {
            title: 'Groups',
            url: '/dashboard/iot/devices/groups',
            contextId: 'productivity',
            appId: 'iot'
          },
          {
            title: 'Status',
            url: '/dashboard/iot/devices/status',
            contextId: 'productivity',
            appId: 'iot'
          }
        ]
      },
      {
        title: 'Data',
        url: '/dashboard/iot/data',
        contextId: 'productivity',
        appId: 'iot',
      },
      {
        title: 'Rules',
        url: '/dashboard/iot/rules',
        contextId: 'productivity',
        appId: 'iot',
      },
      {
        title: 'Dashboards',
        url: '/dashboard/iot/dashboards',
        contextId: 'productivity',
        appId: 'iot',
      },
      {
        title: 'Settings',
        url: '/dashboard/iot/settings',
        contextId: 'productivity',
        appId: 'iot',
      }
    ]
  },
  {
    title: 'VoIP',
    url: '/dashboard/apps/voip',
    icon: 'help',
    shortcut: ['v', 'o'],
    contextId: 'productivity',
    appId: 'voip',
    priority: 83,
    items: [
      {
        title: 'Calls',
        url: '/dashboard/apps/voip?view=calls',
        contextId: 'productivity',
        appId: 'voip',
      },
      {
        title: 'History',
        url: '/dashboard/voip/history',
        contextId: 'productivity',
        appId: 'voip',
      },
      {
        title: 'Contacts',
        url: '/dashboard/voip/contacts',
        contextId: 'productivity',
        appId: 'voip',
      },
      {
        title: 'Configuration',
        url: '/dashboard/voip/config',
        contextId: 'productivity',
        appId: 'voip',
      },
      {
        title: 'Voicemail',
        url: '/dashboard/voip/voicemail',
        contextId: 'productivity',
        appId: 'voip',
      }
    ]
  },
  {
    title: 'Knowledge',
    url: '/dashboard/apps/knowledge',
    icon: 'book',
    shortcut: ['k', 'b'],
    contextId: 'productivity',
    appId: 'knowledge',
    priority: 84,
    items: [
      {
        title: 'Articles',
        url: '/dashboard/apps/knowledge?view=articles',
        contextId: 'productivity',
        appId: 'knowledge',
      },
      {
        title: 'Categories',
        url: '/dashboard/knowledge/cats',
        contextId: 'productivity',
        appId: 'knowledge',
      },
      {
        title: 'Contribute',
        url: '/dashboard/knowledge/contribute',
        contextId: 'productivity',
        appId: 'knowledge',
      },
      {
        title: 'Feedback',
        url: '/dashboard/knowledge/feedback',
        contextId: 'productivity',
        appId: 'knowledge',
      },
      {
        title: 'Settings',
        url: '/dashboard/knowledge/settings',
        contextId: 'productivity',
        appId: 'knowledge',
      }
    ]
  },
  {
    title: 'WhatsApp',
    url: '/dashboard/apps/whatsapp',
    icon: 'help',
    shortcut: ['w', 'a'],
    contextId: 'productivity',
    appId: 'whatsapp',
    priority: 85,
    items: [
      {
        title: 'Chats',
        url: '/dashboard/apps/whatsapp?view=chats',
        contextId: 'productivity',
        appId: 'whatsapp',
      },
      {
        title: 'Contacts',
        url: '/dashboard/whatsapp/contacts',
        contextId: 'productivity',
        appId: 'whatsapp',
      },
      {
        title: 'Broadcast',
        url: '/dashboard/whatsapp/broadcast',
        contextId: 'productivity',
        appId: 'whatsapp',
      },
      {
        title: 'Templates',
        url: '/dashboard/whatsapp/templates',
        contextId: 'productivity',
        appId: 'whatsapp',
      },
      {
        title: 'Settings',
        url: '/dashboard/whatsapp/settings',
        contextId: 'productivity',
        appId: 'whatsapp',
      }
    ]
  },
  {
    title: 'Automation',
    url: '/dashboard/apps/automation',
    icon: 'refresh',
    shortcut: ['a', 'u'],
    contextId: 'productivity',
    appId: 'automation',
    priority: 86,
    items: [
      {
        title: 'Workflows',
        url: '/dashboard/apps/automation?view=workflows',
        contextId: 'productivity',
        appId: 'automation',
        items: [
          {
            title: 'Active Workflows',
            url: '/dashboard/automation/workflows/active',
            contextId: 'productivity',
            appId: 'automation'
          },
          {
            title: 'Drafts',
            url: '/dashboard/automation/workflows/drafts',
            contextId: 'productivity',
            appId: 'automation'
          },
          {
            title: 'Templates',
            url: '/dashboard/automation/workflows/templates',
            contextId: 'productivity',
            appId: 'automation'
          }
        ]
      },
      {
        title: 'Nodes',
        url: '/dashboard/automation/nodes',
        contextId: 'productivity',
        appId: 'automation',
      },
      {
        title: 'Triggers',
        url: '/dashboard/automation/triggers',
        contextId: 'productivity',
        appId: 'automation',
      },
      {
        title: 'Executions',
        url: '/dashboard/automation/executions',
        contextId: 'productivity',
        appId: 'automation',
      },
      {
        title: 'Credentials',
        url: '/dashboard/automation/credentials',
        contextId: 'productivity',
        appId: 'automation',
      }
    ]
  },
  {
    title: 'Studio',
    url: '/dashboard/apps/studio',
    icon: 'settings',
    shortcut: ['s', 't'],
    contextId: 'customization',
    appId: 'studio',
    priority: 90,
    items: [
      {
        title: 'App Builder',
        url: '/dashboard/apps/studio?view=app-builder',
        contextId: 'customization',
        appId: 'studio',
        items: [
          {
            title: 'My Apps',
            url: '/dashboard/studio/app-builder/my-apps',
            contextId: 'customization',
            appId: 'studio'
          },
          {
            title: 'Templates',
            url: '/dashboard/studio/app-builder/templates',
            contextId: 'customization',
            appId: 'studio'
          },
          {
            title: 'Components',
            url: '/dashboard/studio/app-builder/components',
            contextId: 'customization',
            appId: 'studio'
          }
        ]
      },
      {
        title: 'Automation',
        url: '/dashboard/studio/automation',
        contextId: 'customization',
        appId: 'studio',
        items: [
          {
            title: 'Workflows',
            url: '/dashboard/studio/automation/workflows',
            contextId: 'customization',
            appId: 'studio'
          },
          {
            title: 'Actions',
            url: '/dashboard/studio/automation/actions',
            contextId: 'customization',
            appId: 'studio'
          },
          {
            title: 'Triggers',
            url: '/dashboard/studio/automation/triggers',
            contextId: 'customization',
            appId: 'studio'
          }
        ]
      },
      {
        title: 'Code Studio',
        url: '/dashboard/studio/code',
        contextId: 'customization',
        appId: 'studio',
        items: [
          {
            title: 'Scripts',
            url: '/dashboard/studio/code/scripts',
            contextId: 'customization',
            appId: 'studio'
          },
          {
            title: 'API Integration',
            url: '/dashboard/studio/code/api',
            contextId: 'customization',
            appId: 'studio'
          },
          {
            title: 'Custom Widgets',
            url: '/dashboard/studio/code/widgets',
            contextId: 'customization',
            appId: 'studio'
          }
        ]
      }
    ]
  },
  {
    title: 'Inventory',
    url: '/dashboard/apps/inventory',
    icon: 'folder',
    shortcut: ['i', 'v'],
    contextId: 'inventory',
    appId: 'inventory',
    priority: 40,
    items: [
      {
        title: 'Products',
        url: '/dashboard/apps/inventory?view=products',
        contextId: 'inventory',
        appId: 'inventory',
        items: [
          {
            title: 'All Products',
            url: '/dashboard/inventory/products/all',
            contextId: 'inventory',
            appId: 'inventory'
          },
          {
            title: 'Categories',
            url: '/dashboard/inventory/products/categories',
            contextId: 'inventory',
            appId: 'inventory'
          },
          {
            title: 'Variants',
            url: '/dashboard/inventory/products/variants',
            contextId: 'inventory',
            appId: 'inventory'
          }
        ]
      },
      {
        title: 'Stock',
        url: '/dashboard/inventory/stock',
        contextId: 'inventory',
        appId: 'inventory',
        items: [
          {
            title: 'Stock Levels',
            url: '/dashboard/inventory/stock/levels',
            contextId: 'inventory',
            appId: 'inventory'
          },
          {
            title: 'Locations',
            url: '/dashboard/inventory/stock/locations',
            contextId: 'inventory',
            appId: 'inventory'
          },
          {
            title: 'Reorder Points',
            url: '/dashboard/inventory/stock/reorder',
            contextId: 'inventory',
            appId: 'inventory'
          }
        ]
      },
      {
        title: 'Transfers',
        url: '/dashboard/inventory/transfers',
        contextId: 'inventory',
        appId: 'inventory',
      },
      {
        title: 'Adjustments',
        url: '/dashboard/inventory/adjust',
        contextId: 'inventory',
        appId: 'inventory',
      },
      {
        title: 'Reports',
        url: '/dashboard/inventory/reports',
        contextId: 'inventory',
        appId: 'inventory',
        items: [
          {
            title: 'Inventory Valuation',
            url: '/dashboard/inventory/reports/valuation',
            contextId: 'inventory',
            appId: 'inventory'
          },
          {
            title: 'Movement Analysis',
            url: '/dashboard/inventory/reports/movement',
            contextId: 'inventory',
            appId: 'inventory'
          },
          {
            title: 'Forecasting',
            url: '/dashboard/inventory/reports/forecast',
            contextId: 'inventory',
            appId: 'inventory'
          }
        ]
      }
    ]
  },
  {
    title: 'Manufacturing',
    url: '/dashboard/apps/manufacturing',
    icon: 'settings',
    shortcut: ['m', 'f'],
    contextId: 'inventory',
    appId: 'manufacturing',
    priority: 41,
    items: [
      {
        title: 'Bills of Materials',
        url: '/dashboard/apps/manufacturing?view=boms',
        contextId: 'inventory',
        appId: 'manufacturing',
        items: [
          {
            title: 'All BOMs',
            url: '/dashboard/manufacturing/boms/all',
            contextId: 'inventory',
            appId: 'manufacturing'
          },
          {
            title: 'Components',
            url: '/dashboard/manufacturing/boms/components',
            contextId: 'inventory',
            appId: 'manufacturing'
          },
          {
            title: 'Versions',
            url: '/dashboard/manufacturing/boms/versions',
            contextId: 'inventory',
            appId: 'manufacturing'
          }
        ]
      },
      {
        title: 'Work Orders',
        url: '/dashboard/manufacturing/orders',
        contextId: 'inventory',
        appId: 'manufacturing',
        items: [
          {
            title: 'Pending',
            url: '/dashboard/manufacturing/orders/pending',
            contextId: 'inventory',
            appId: 'manufacturing'
          },
          {
            title: 'In Progress',
            url: '/dashboard/manufacturing/orders/progress',
            contextId: 'inventory',
            appId: 'manufacturing'
          },
          {
            title: 'Completed',
            url: '/dashboard/manufacturing/orders/completed',
            contextId: 'inventory',
            appId: 'manufacturing'
          }
        ]
      },
      {
        title: 'Work Centers',
        url: '/dashboard/manufacturing/centers',
        contextId: 'inventory',
        appId: 'manufacturing',
      },
      {
        title: 'Production Planning',
        url: '/dashboard/manufacturing/planning',
        contextId: 'inventory',
        appId: 'manufacturing',
      },
      {
        title: 'Reports',
        url: '/dashboard/manufacturing/reports',
        contextId: 'inventory',
        appId: 'manufacturing',
        items: [
          {
            title: 'Efficiency',
            url: '/dashboard/manufacturing/reports/efficiency',
            contextId: 'inventory',
            appId: 'manufacturing'
          },
          {
            title: 'Cost Analysis',
            url: '/dashboard/manufacturing/reports/cost',
            contextId: 'inventory',
            appId: 'manufacturing'
          },
          {
            title: 'Production Schedule',
            url: '/dashboard/manufacturing/reports/schedule',
            contextId: 'inventory',
            appId: 'manufacturing'
          }
        ]
      }
    ]
  },
  {
    title: 'PLM',
    url: '/dashboard/apps/plm',
    icon: 'settings',
    shortcut: ['p', 'l'],
    contextId: 'inventory',
    appId: 'plm',
    priority: 42,
    items: [
      {
        title: 'Products',
        url: '/dashboard/apps/plm?view=products',
        contextId: 'inventory',
        appId: 'plm',
      },
      {
        title: 'Engineering',
        url: '/dashboard/plm/engineer',
        contextId: 'inventory',
        appId: 'plm',
      },
      {
        title: 'Change Management',
        url: '/dashboard/plm/changes',
        contextId: 'inventory',
        appId: 'plm',
        items: [
          {
            title: 'Change Requests',
            url: '/dashboard/plm/changes/requests',
            contextId: 'inventory',
            appId: 'plm'
          },
          {
            title: 'Change Orders',
            url: '/dashboard/plm/changes/orders',
            contextId: 'inventory',
            appId: 'plm'
          },
          {
            title: 'Implementation',
            url: '/dashboard/plm/changes/implementation',
            contextId: 'inventory',
            appId: 'plm'
          }
        ]
      },
      {
        title: 'Documentation',
        url: '/dashboard/plm/docs',
        contextId: 'inventory',
        appId: 'plm',
      },
      {
        title: 'Quality',
        url: '/dashboard/plm/quality',
        contextId: 'inventory',
        appId: 'plm',
      }
    ]
  },
  {
    title: 'Purchase',
    url: '/dashboard/apps/purchase',
    icon: 'product',
    shortcut: ['p', 'u'],
    contextId: 'inventory',
    appId: 'purchase',
    priority: 43,
    items: [
      {
        title: 'Requests',
        url: '/dashboard/apps/purchase?view=requests',
        contextId: 'inventory',
        appId: 'purchase',
      },
      {
        title: 'Orders',
        url: '/dashboard/purchase/orders',
        contextId: 'inventory',
        appId: 'purchase',
        items: [
          {
            title: 'Request for Quotation',
            url: '/dashboard/purchase/orders/rfq',
            contextId: 'inventory',
            appId: 'purchase'
          },
          {
            title: 'Purchase Orders',
            url: '/dashboard/purchase/orders/po',
            contextId: 'inventory',
            appId: 'purchase'
          },
          {
            title: 'Blanket Orders',
            url: '/dashboard/purchase/orders/blanket',
            contextId: 'inventory',
            appId: 'purchase'
          }
        ]
      },
      {
        title: 'Receipts',
        url: '/dashboard/purchase/receipts',
        contextId: 'inventory',
        appId: 'purchase',
      },
      {
        title: 'Vendors',
        url: '/dashboard/purchase/vendors',
        contextId: 'inventory',
        appId: 'purchase',
        items: [
          {
            title: 'All Vendors',
            url: '/dashboard/purchase/vendors/all',
            contextId: 'inventory',
            appId: 'purchase'
          },
          {
            title: 'Vendor Performance',
            url: '/dashboard/purchase/vendors/performance',
            contextId: 'inventory',
            appId: 'purchase'
          },
          {
            title: 'Agreements',
            url: '/dashboard/purchase/vendors/agreements',
            contextId: 'inventory',
            appId: 'purchase'
          }
        ]
      },
      {
        title: 'Reports',
        url: '/dashboard/purchase/reports',
        contextId: 'inventory',
        appId: 'purchase',
      }
    ]
  },
  {
    title: 'Maintenance',
    url: '/dashboard/apps/maintenance',
    icon: 'settings',
    shortcut: ['m', 'n'],
    contextId: 'inventory',
    appId: 'maintenance',
    priority: 44,
    items: [
      {
        title: 'Equipment',
        url: '/dashboard/apps/maintenance?view=equipment',
        contextId: 'inventory',
        appId: 'maintenance',
      },
      {
        title: 'Requests',
        url: '/dashboard/maintenance/requests',
        contextId: 'inventory',
        appId: 'maintenance',
      },
      {
        title: 'Planned Maintenance',
        url: '/dashboard/maintenance/planned',
        contextId: 'inventory',
        appId: 'maintenance',
      },
      {
        title: 'Work Orders',
        url: '/dashboard/maintenance/orders',
        contextId: 'inventory',
        appId: 'maintenance',
      },
      {
        title: 'Reports',
        url: '/dashboard/maintenance/reports',
        contextId: 'inventory',
        appId: 'maintenance',
        items: [
          {
            title: 'Equipment History',
            url: '/dashboard/maintenance/reports/history',
            contextId: 'inventory',
            appId: 'maintenance'
          },
          {
            title: 'Downtime Analysis',
            url: '/dashboard/maintenance/reports/downtime',
            contextId: 'inventory',
            appId: 'maintenance'
          },
          {
            title: 'Cost Reports',
            url: '/dashboard/maintenance/reports/cost',
            contextId: 'inventory',
            appId: 'maintenance'
          }
        ]
      }
    ]
  },
  {
    title: 'Quality',
    url: '/dashboard/apps/quality',
    icon: 'check',
    shortcut: ['q', 'a'],
    contextId: 'inventory',
    appId: 'quality',
    priority: 45,
    items: [
      {
        title: 'Quality Checks',
        url: '/dashboard/apps/quality?view=checks',
        contextId: 'inventory',
        appId: 'quality',
      },
      {
        title: 'Inspections',
        url: '/dashboard/quality/inspect',
        contextId: 'inventory',
        appId: 'quality',
      },
      {
        title: 'Issues',
        url: '/dashboard/quality/issues',
        contextId: 'inventory',
        appId: 'quality',
      },
      {
        title: 'Corrective Actions',
        url: '/dashboard/quality/actions',
        contextId: 'inventory',
        appId: 'quality',
      },
      {
        title: 'Reports',
        url: '/dashboard/quality/reports',
        contextId: 'inventory',
        appId: 'quality',
      }
    ]
  },
  {
    title: 'Project',
    url: '/dashboard/apps/project',
    icon: 'folder',
    shortcut: ['p', 'j'],
    contextId: 'services',
    appId: 'project',
    priority: 70,
    items: [
      {
        title: 'All Projects',
        url: '/dashboard/apps/project?view=all',
        contextId: 'services',
        appId: 'project',
      },
      {
        title: 'Tasks',
        url: '/dashboard/project/tasks',
        contextId: 'services',
        appId: 'project',
        items: [
          {
            title: 'My Tasks',
            url: '/dashboard/project/tasks/my',
            contextId: 'services',
            appId: 'project'
          },
          {
            title: 'All Tasks',
            url: '/dashboard/project/tasks/all',
            contextId: 'services',
            appId: 'project'
          },
          {
            title: 'Kanban View',
            url: '/dashboard/project/tasks/kanban',
            contextId: 'services',
            appId: 'project'
          }
        ]
      },
      {
        title: 'Planning',
        url: '/dashboard/project/plan',
        contextId: 'services',
        appId: 'project',
        items: [
          {
            title: 'Gantt Chart',
            url: '/dashboard/project/plan/gantt',
            contextId: 'services',
            appId: 'project'
          },
          {
            title: 'Milestones',
            url: '/dashboard/project/plan/milestones',
            contextId: 'services',
            appId: 'project'
          },
          {
            title: 'Timeline',
            url: '/dashboard/project/plan/timeline',
            contextId: 'services',
            appId: 'project'
          }
        ]
      },
      {
        title: 'Resources',
        url: '/dashboard/project/resources',
        contextId: 'services',
        appId: 'project',
      },
      {
        title: 'Reports',
        url: '/dashboard/project/reports',
        contextId: 'services',
        appId: 'project',
        items: [
          {
            title: 'Project Status',
            url: '/dashboard/project/reports/status',
            contextId: 'services',
            appId: 'project'
          },
          {
            title: 'Time Tracking',
            url: '/dashboard/project/reports/time',
            contextId: 'services',
            appId: 'project'
          },
          {
            title: 'Budget vs Actual',
            url: '/dashboard/project/reports/budget',
            contextId: 'services',
            appId: 'project'
          }
        ]
      }
    ]
  },
  {
    title: 'Timesheets',
    url: '/dashboard/apps/timesheets',
    icon: 'dashboard',
    shortcut: ['t', 's'],
    contextId: 'services',
    appId: 'timesheets',
    priority: 71,
    items: [
      {
        title: 'My Timesheets',
        url: '/dashboard/apps/timesheets?view=my',
        contextId: 'services',
        appId: 'timesheets',
      },
      {
        title: 'All Timesheets',
        url: '/dashboard/timesheets/all',
        contextId: 'services',
        appId: 'timesheets',
      },
      {
        title: 'Validation',
        url: '/dashboard/timesheets/validate',
        contextId: 'services',
        appId: 'timesheets',
      },
      {
        title: 'Reports',
        url: '/dashboard/timesheets/reports',
        contextId: 'services',
        appId: 'timesheets',
        items: [
          {
            title: 'By Employee',
            url: '/dashboard/timesheets/reports/employee',
            contextId: 'services',
            appId: 'timesheets'
          },
          {
            title: 'By Project',
            url: '/dashboard/timesheets/reports/project',
            contextId: 'services',
            appId: 'timesheets'
          },
          {
            title: 'By Client',
            url: '/dashboard/timesheets/reports/client',
            contextId: 'services',
            appId: 'timesheets'
          }
        ]
      },
      {
        title: 'Configuration',
        url: '/dashboard/timesheets/config',
        contextId: 'services',
        appId: 'timesheets',
      }
    ]
  },
  {
    title: 'Field Service',
    url: '/dashboard/apps/field-service',
    icon: 'file',
    shortcut: ['f', 's'],
    contextId: 'services',
    appId: 'field-service',
    priority: 72,
    items: [
      {
        title: 'Work Orders',
        url: '/dashboard/apps/field-service?view=orders',
        contextId: 'services',
        appId: 'field-service',
        items: [
          {
            title: 'New Orders',
            url: '/dashboard/field-service/orders/new',
            contextId: 'services',
            appId: 'field-service'
          },
          {
            title: 'Scheduled',
            url: '/dashboard/field-service/orders/scheduled',
            contextId: 'services',
            appId: 'field-service'
          },
          {
            title: 'Completed',
            url: '/dashboard/field-service/orders/completed',
            contextId: 'services',
            appId: 'field-service'
          }
        ]
      },
      {
        title: 'Technicians',
        url: '/dashboard/field-service/techs',
        contextId: 'services',
        appId: 'field-service',
      },
      {
        title: 'Planning',
        url: '/dashboard/field-service/plan',
        contextId: 'services',
        appId: 'field-service',
        items: [
          {
            title: 'Dispatch Board',
            url: '/dashboard/field-service/plan/dispatch',
            contextId: 'services',
            appId: 'field-service'
          },
          {
            title: 'Calendar View',
            url: '/dashboard/field-service/plan/calendar',
            contextId: 'services',
            appId: 'field-service'
          },
          {
            title: 'Map View',
            url: '/dashboard/field-service/plan/map',
            contextId: 'services',
            appId: 'field-service'
          }
        ]
      },
      {
        title: 'Products',
        url: '/dashboard/field-service/products',
        contextId: 'services',
        appId: 'field-service',
      },
      {
        title: 'Reports',
        url: '/dashboard/field-service/reports',
        contextId: 'services',
        appId: 'field-service',
      }
    ]
  },
  {
    title: 'Helpdesk',
    url: '/dashboard/apps/helpdesk',
    icon: 'help',
    shortcut: ['h', 'd'],
    contextId: 'services',
    appId: 'helpdesk',
    priority: 73,
    items: [
      {
        title: 'Open Tickets',
        url: '/dashboard/apps/helpdesk?view=open',
        contextId: 'services',
        appId: 'helpdesk',
      },
      {
        title: 'All Tickets',
        url: '/dashboard/helpdesk/all',
        contextId: 'services',
        appId: 'helpdesk',
        items: [
          {
            title: 'By Priority',
            url: '/dashboard/helpdesk/all/priority',
            contextId: 'services',
            appId: 'helpdesk'
          },
          {
            title: 'By Status',
            url: '/dashboard/helpdesk/all/status',
            contextId: 'services',
            appId: 'helpdesk'
          },
          {
            title: 'By Category',
            url: '/dashboard/helpdesk/all/category',
            contextId: 'services',
            appId: 'helpdesk'
          }
        ]
      },
      {
        title: 'Teams',
        url: '/dashboard/helpdesk/teams',
        contextId: 'services',
        appId: 'helpdesk',
      },
      {
        title: 'Knowledge Base',
        url: '/dashboard/helpdesk/knowledge',
        contextId: 'services',
        appId: 'helpdesk',
        items: [
          {
            title: 'Articles',
            url: '/dashboard/helpdesk/knowledge/articles',
            contextId: 'services',
            appId: 'helpdesk'
          },
          {
            title: 'Categories',
            url: '/dashboard/helpdesk/knowledge/categories',
            contextId: 'services',
            appId: 'helpdesk'
          },
          {
            title: 'Search Analytics',
            url: '/dashboard/helpdesk/knowledge/search',
            contextId: 'services',
            appId: 'helpdesk'
          }
        ]
      },
      {
        title: 'Reports',
        url: '/dashboard/helpdesk/reports',
        contextId: 'services',
        appId: 'helpdesk',
      }
    ]
  },
  {
    title: 'Planning',
    url: '/dashboard/apps/planning',
    icon: 'dashboard',
    shortcut: ['p', 'l'],
    contextId: 'services',
    appId: 'planning',
    priority: 74,
    items: [
      {
        title: 'Schedule',
        url: '/dashboard/apps/planning?view=schedule',
        contextId: 'services',
        appId: 'planning',
      },
      {
        title: 'Resources',
        url: '/dashboard/planning/resources',
        contextId: 'services',
        appId: 'planning',
        items: [
          {
            title: 'People',
            url: '/dashboard/planning/resources/people',
            contextId: 'services',
            appId: 'planning'
          },
          {
            title: 'Equipment',
            url: '/dashboard/planning/resources/equipment',
            contextId: 'services',
            appId: 'planning'
          },
          {
            title: 'Rooms',
            url: '/dashboard/planning/resources/rooms',
            contextId: 'services',
            appId: 'planning'
          }
        ]
      },
      {
        title: 'Shifts',
        url: '/dashboard/planning/shifts',
        contextId: 'services',
        appId: 'planning',
      },
      {
        title: 'Absences',
        url: '/dashboard/planning/absences',
        contextId: 'services',
        appId: 'planning',
      },
      {
        title: 'Reports',
        url: '/dashboard/planning/reports',
        contextId: 'services',
        appId: 'planning',
      }
    ]
  },
  {
    title: 'Appointments',
    url: '/dashboard/apps/appointments',
    icon: 'dashboard',
    shortcut: ['a', 'p'],
    contextId: 'services',
    appId: 'appointments',
    priority: 75,
    items: [
      {
        title: 'Calendar',
        url: '/dashboard/apps/appointments?view=calendar',
        contextId: 'services',
        appId: 'appointments',
      },
      {
        title: 'Schedule',
        url: '/dashboard/appointments/schedule',
        contextId: 'services',
        appId: 'appointments',
      },
      {
        title: 'Reminders',
        url: '/dashboard/appointments/reminders',
        contextId: 'services',
        appId: 'appointments',
      },
      {
        title: 'Resources',
        url: '/dashboard/appointments/resources',
        contextId: 'services',
        appId: 'appointments',
        items: [
          {
            title: 'Staff',
            url: '/dashboard/appointments/resources/staff',
            contextId: 'services',
            appId: 'appointments'
          },
          {
            title: 'Rooms',
            url: '/dashboard/appointments/resources/rooms',
            contextId: 'services',
            appId: 'appointments'
          },
          {
            title: 'Equipment',
            url: '/dashboard/appointments/resources/equipment',
            contextId: 'services',
            appId: 'appointments'
          }
        ]
      },
      {
        title: 'Reports',
        url: '/dashboard/appointments/reports',
        contextId: 'services',
        appId: 'appointments',
      }
    ]
  }
];
