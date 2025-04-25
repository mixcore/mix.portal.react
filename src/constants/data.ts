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
    url: '/overview',
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
        url: '/posts',
        icon: 'post',
        shortcut: ['p', 's']
      },
      {
        title: 'Pages',
        url: '/pages',
        icon: 'page',
        shortcut: ['p', 'g']
      },
      {
        title: 'Media',
        url: '/media',
        icon: 'media',
        shortcut: ['m', 'd']
      },
      {
        title: 'Tags',
        url: '/tags',
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
        url: '/templates',
        icon: 'code',
        shortcut: ['t', 'e']
      },
      {
        title: 'Themes',
        url: '/themes',
        icon: 'palette',
        shortcut: ['t', 'h']
      }
    ]
  },
  {
    title: 'MixDb',
    url: '/mixdb',
    icon: 'database',
    isActive: false,
    shortcut: ['m', 'd'],
    items: [
      {
        title: 'Dashboard',
        url: '/mixdb',
        icon: 'dashboard',
        shortcut: ['m', 'o']
      },
      {
        title: 'Databases',
        url: '/mixdb/databases',
        icon: 'database',
        shortcut: ['d', 'b']
      },
      {
        title: 'Form Builder',
        url: '/mixdb/forms',
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
        url: '/tenants',
        icon: 'building',
        shortcut: ['t', 'n']
      }
    ]
  },
  {
    title: 'Product',
    url: '/product',
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
        url: '/profile',
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
    url: '/kanban',
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
    icon: 'fileText',
    appId: 'website'
  },
  {
    id: 'sales',
    name: 'Sales',
    description: 'CRM, Sales, Point of Sale, Subscriptions and Rental',
    icon: 'product',
    appId: 'sales'
  },
  {
    id: 'finance',
    name: 'Finance',
    description: 'Accounting, Invoicing, Expenses, Spreadsheets, Documents and Sign',
    icon: 'billing',
    appId: 'finance'
  },
  {
    id: 'inventory',
    name: 'Supply Chain',
    description: 'Inventory, Manufacturing, PLM, Purchase, Maintenance and Quality',
    icon: 'folder',
    appId: 'inventory'
  },
  {
    id: 'hr',
    name: 'Human Resources',
    description: 'Employees, Recruitment, Time Off, Appraisals, Referrals and Fleet',
    icon: 'user',
    appId: 'hr'
  },
  {
    id: 'marketing',
    name: 'Marketing',
    description: 'Social, Email, SMS, Events, Automation and Surveys',
    icon: 'file',
    appId: 'marketing'
  },
  {
    id: 'services',
    name: 'Services',
    description: 'Project, Timesheets, Field Service, Helpdesk, Planning and Appointments',
    icon: 'help',
    appId: 'services'
  },
  {
    id: 'productivity',
    name: 'Productivity',
    description: 'Discuss, Approvals, IoT, VoIP, Knowledge, WhatsApp and Automation',
    icon: 'check',
    appId: 'productivity'
  },
  {
    id: 'customization',
    name: 'Customization',
    description: 'Studio and app customization',
    icon: 'settings',
    appId: 'customization'
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
    url: '/feeds',
    icon: 'post',
    isActive: false,
    shortcut: ['m', 'f'],
    items: [],
    priority: -1 // Lower priority to appear above Dashboard
  },
  
  // Dashboard - Available in all contexts
  {
    title: 'Dashboard',
    url: '/overview',
    icon: 'dashboard',
    isActive: false,
    shortcut: ['d', 'd'],
    items: [],
    priority: 0
  },
  
  // Moved second-level items to first level (Websites context)
  {
    title: 'Website Builder',
    url: '/apps/website',
    icon: 'fileText',
    shortcut: ['w', 'b'],
    contextId: 'website',
    appId: 'website',
    priority: 10,
    items: [
      {
        title: 'Pages',
        url: '/apps/website?view=pages',
        contextId: 'website',
        appId: 'website',
        items: [
          {
            title: 'Published Pages',
            url: '/website/pages/published',
            contextId: 'website',
            appId: 'website'
          },
          {
            title: 'Draft Pages',
            url: '/website/pages/drafts',
            contextId: 'website',
            appId: 'website'
          },
          {
            title: 'Archived Pages',
            url: '/website/pages/archived',
            contextId: 'website',
            appId: 'website'
          }
        ]
      },
      {
        title: 'Design',
        url: '/website/design',
        contextId: 'website',
        appId: 'website',
        items: [
          {
            title: 'Themes',
            url: '/website/design/themes',
            contextId: 'website',
            appId: 'website'
          },
          {
            title: 'Colors',
            url: '/website/design/colors',
            contextId: 'website',
            appId: 'website'
          },
          {
            title: 'Typography',
            url: '/website/design/typography',
            contextId: 'website',
            appId: 'website'
          }
        ]
      },
      {
        title: 'Sections',
        url: '/website/sections',
        contextId: 'website',
        appId: 'website',
        items: [
          {
            title: 'Headers',
            url: '/website/sections/headers',
            contextId: 'website',
            appId: 'website'
          },
          {
            title: 'Footers',
            url: '/website/sections/footers',
            contextId: 'website',
            appId: 'website'
          },
          {
            title: 'Content Blocks',
            url: '/website/sections/blocks',
            contextId: 'website',
            appId: 'website'
          }
        ]
      },
      {
        title: 'Navigation',
        url: '/website/nav',
        contextId: 'website',
        appId: 'website',
      },
      {
        title: 'Settings',
        url: '/website/settings',
        contextId: 'website',
        appId: 'website',
        items: [
          {
            title: 'SEO',
            url: '/website/settings/seo',
            contextId: 'website',
            appId: 'website'
          },
          {
            title: 'Analytics',
            url: '/website/settings/analytics',
            contextId: 'website',
            appId: 'website'
          },
          {
            title: 'Domain',
            url: '/website/settings/domain',
            contextId: 'website',
            appId: 'website'
          }
        ]
      }
    ]
  },
  {
    title: 'eCommerce',
    url: '/apps/ecommerce',
    icon: 'product',
    shortcut: ['e', 'c'],
    contextId: 'website',
    appId: 'ecommerce',
    priority: 11,
    items: [
      {
        title: 'Products',
        url: '/apps/ecommerce?view=products',
        contextId: 'website',
        appId: 'ecommerce',
        items: [
          {
            title: 'Physical Products',
            url: '/ecommerce/products/physical',
            contextId: 'website',
            appId: 'ecommerce'
          },
          {
            title: 'Digital Products',
            url: '/ecommerce/products/digital',
            contextId: 'website',
            appId: 'ecommerce'
          },
          {
            title: 'Product Categories',
            url: '/ecommerce/products/categories',
            contextId: 'website',
            appId: 'ecommerce'
          }
        ]
      },
      {
        title: 'Orders',
        url: '/ecommerce/orders',
        contextId: 'website',
        appId: 'ecommerce',
        items: [
          {
            title: 'Pending Orders',
            url: '/ecommerce/orders/pending',
            contextId: 'website',
            appId: 'ecommerce'
          },
          {
            title: 'Completed Orders',
            url: '/ecommerce/orders/completed',
            contextId: 'website',
            appId: 'ecommerce'
          },
          {
            title: 'Returned Orders',
            url: '/ecommerce/orders/returned',
            contextId: 'website',
            appId: 'ecommerce'
          }
        ]
      },
      {
        title: 'Customers',
        url: '/ecommerce/customers',
        contextId: 'website',
        appId: 'ecommerce',
        items: [
          {
            title: 'All Customers',
            url: '/ecommerce/customers/all',
            contextId: 'website',
            appId: 'ecommerce'
          },
          {
            title: 'Segments',
            url: '/ecommerce/customers/segments',
            contextId: 'website',
            appId: 'ecommerce'
          },
          {
            title: 'Reviews',
            url: '/ecommerce/customers/reviews',
            contextId: 'website',
            appId: 'ecommerce'
          }
        ]
      },
      {
        title: 'Payments',
        url: '/ecommerce/payments',
        contextId: 'website',
        appId: 'ecommerce',
      },
      {
        title: 'Shipping',
        url: '/ecommerce/shipping',
        contextId: 'website',
        appId: 'ecommerce',
      },
      {
        title: 'Promotions',
        url: '/ecommerce/promos',
        contextId: 'website',
        appId: 'ecommerce',
        items: [
          {
            title: 'Discounts',
            url: '/ecommerce/promos/discounts',
            contextId: 'website',
            appId: 'ecommerce'
          },
          {
            title: 'Coupon Codes',
            url: '/ecommerce/promos/coupons',
            contextId: 'website',
            appId: 'ecommerce'
          },
          {
            title: 'Gift Cards',
            url: '/ecommerce/promos/gift-cards',
            contextId: 'website',
            appId: 'ecommerce'
          }
        ]
      }
    ]
  },
  {
    title: 'Blog',
    url: '/apps/blog',
    icon: 'post',
    shortcut: ['b', 'l'],
    contextId: 'website',
    appId: 'blog',
    priority: 12,
    items: [
      {
        title: 'All Posts',
        url: '/apps/blog?view=posts',
        contextId: 'website',
        appId: 'blog',
      },
      {
        title: 'New Post',
        url: '/blog/new',
        contextId: 'website',
        appId: 'blog',
      },
      {
        title: 'Categories',
        url: '/blog/categories',
        contextId: 'website',
        appId: 'blog',
      },
      {
        title: 'Tags',
        url: '/blog/tags',
        contextId: 'website',
        appId: 'blog',
      },
      {
        title: 'Settings',
        url: '/blog/settings',
        contextId: 'website',
        appId: 'blog',
        items: [
          {
            title: 'General',
            url: '/blog/settings/general',
            contextId: 'website',
            appId: 'blog'
          },
          {
            title: 'Comments',
            url: '/blog/settings/comments',
            contextId: 'website',
            appId: 'blog'
          },
          {
            title: 'SEO',
            url: '/blog/settings/seo',
            contextId: 'website',
            appId: 'blog'
          }
        ]
      }
    ]
  },
  {
    title: 'Forum',
    url: '/apps/forum',
    icon: 'help',
    shortcut: ['f', 'o'],
    contextId: 'website',
    appId: 'forum',
    priority: 13,
    items: [
      {
        title: 'All Forums',
        url: '/apps/forum?view=all',
        contextId: 'website',
        appId: 'forum',
      },
      {
        title: 'Categories',
        url: '/forum/categories',
        contextId: 'website',
        appId: 'forum',
      },
      {
        title: 'Recent Discussions',
        url: '/forum/recent',
        contextId: 'website',
        appId: 'forum',
      },
      {
        title: 'My Posts',
        url: '/forum/my-posts',
        contextId: 'website',
        appId: 'forum',
      },
      {
        title: 'Settings',
        url: '/forum/settings',
        contextId: 'website',
        appId: 'forum',
        items: [
          {
            title: 'Permissions',
            url: '/forum/settings/permissions',
            contextId: 'website',
            appId: 'forum'
          },
          {
            title: 'Moderation',
            url: '/forum/settings/moderation',
            contextId: 'website',
            appId: 'forum'
          },
          {
            title: 'Notifications',
            url: '/forum/settings/notifications',
            contextId: 'website',
            appId: 'forum'
          }
        ]
      }
    ]
  },
  {
    title: 'Live Chat',
    url: '/apps/livechat',
    icon: 'help',
    shortcut: ['l', 'c'],
    contextId: 'website',
    appId: 'livechat',
    priority: 14,
    items: [
      {
        title: 'Active Chats',
        url: '/apps/livechat?view=active',
        contextId: 'website',
        appId: 'livechat',
      },
      {
        title: 'Chat History',
        url: '/livechat/history',
        contextId: 'website',
        appId: 'livechat',
      },
      {
        title: 'Operators',
        url: '/livechat/operators',
        contextId: 'website',
        appId: 'livechat',
      },
      {
        title: 'Configuration',
        url: '/livechat/config',
        contextId: 'website',
        appId: 'livechat',
      },
      {
        title: 'Canned Responses',
        url: '/livechat/canned',
        contextId: 'website',
        appId: 'livechat',
      }
    ]
  },
  {
    title: 'eLearning',
    url: '/apps/elearning',
    icon: 'file',
    shortcut: ['e', 'l'],
    contextId: 'website',
    appId: 'elearning',
    priority: 15,
    items: [
      {
        title: 'All Courses',
        url: '/apps/elearning?view=courses',
        contextId: 'website',
        appId: 'elearning',
      },
      {
        title: 'My Courses',
        url: '/elearning/my-courses',
        contextId: 'website',
        appId: 'elearning',
      },
      {
        title: 'Create Course',
        url: '/elearning/create',
        contextId: 'website',
        appId: 'elearning',
      },
      {
        title: 'Modules',
        url: '/elearning/modules',
        contextId: 'website',
        appId: 'elearning',
      },
      {
        title: 'Quizzes',
        url: '/elearning/quizzes',
        contextId: 'website',
        appId: 'elearning',
        items: [
          {
            title: 'All Quizzes',
            url: '/elearning/quizzes/all',
            contextId: 'website',
            appId: 'elearning'
          },
          {
            title: 'Question Bank',
            url: '/elearning/quizzes/questions',
            contextId: 'website',
            appId: 'elearning'
          },
          {
            title: 'Results',
            url: '/elearning/quizzes/results',
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
    url: '/apps/crm',
    icon: 'user',
    shortcut: ['c', 'r'],
    contextId: 'sales',
    appId: 'crm',
    priority: 20,
    items: [
      {
        title: 'Dashboard',
        url: '/apps/crm?view=dashboard',
        contextId: 'sales',
        appId: 'crm',
      },
      {
        title: 'Leads',
        url: '/crm/leads',
        contextId: 'sales',
        appId: 'crm',
        items: [
          {
            title: 'New Leads',
            url: '/crm/leads/new',
            contextId: 'sales',
            appId: 'crm'
          },
          {
            title: 'Qualified Leads',
            url: '/crm/leads/qualified',
            contextId: 'sales',
            appId: 'crm'
          },
          {
            title: 'Lead Scoring',
            url: '/crm/leads/scoring',
            contextId: 'sales',
            appId: 'crm'
          }
        ]
      },
      {
        title: 'Opportunities',
        url: '/crm/opportunities',
        contextId: 'sales',
        appId: 'crm',
        items: [
          {
            title: 'Pipeline View',
            url: '/crm/opportunities/pipeline',
            contextId: 'sales',
            appId: 'crm'
          },
          {
            title: 'Forecasting',
            url: '/crm/opportunities/forecasting',
            contextId: 'sales',
            appId: 'crm'
          },
          {
            title: 'Won/Lost Analysis',
            url: '/crm/opportunities/analysis',
            contextId: 'sales',
            appId: 'crm'
          }
        ]
      },
      {
        title: 'Customers',
        url: '/crm/customers',
        contextId: 'sales',
        appId: 'crm',
        items: [
          {
            title: 'All Customers',
            url: '/crm/customers/all',
            contextId: 'sales',
            appId: 'crm'
          },
          {
            title: 'Segments',
            url: '/crm/customers/segments',
            contextId: 'sales',
            appId: 'crm'
          },
          {
            title: 'Lifetime Value',
            url: '/crm/customers/ltv',
            contextId: 'sales',
            appId: 'crm'
          }
        ]
      },
      {
        title: 'Activities',
        url: '/crm/activities',
        contextId: 'sales',
        appId: 'crm',
        items: [
          {
            title: 'Calendar',
            url: '/crm/activities/calendar',
            contextId: 'sales',
            appId: 'crm'
          },
          {
            title: 'Calls',
            url: '/crm/activities/calls',
            contextId: 'sales',
            appId: 'crm'
          },
          {
            title: 'Meetings',
            url: '/crm/activities/meetings',
            contextId: 'sales',
            appId: 'crm'
          }
        ]
      },
      {
        title: 'Reports',
        url: '/crm/reports',
        contextId: 'sales',
        appId: 'crm',
        items: [
          {
            title: 'Sales Pipeline',
            url: '/crm/reports/pipeline',
            contextId: 'sales',
            appId: 'crm'
          },
          {
            title: 'Conversion Rates',
            url: '/crm/reports/conversion',
            contextId: 'sales',
            appId: 'crm'
          },
          {
            title: 'Activity Analysis',
            url: '/crm/reports/activity',
            contextId: 'sales',
            appId: 'crm'
          }
        ]
      }
    ]
  },
  {
    title: 'Sales',
    url: '/apps/sales',
    icon: 'billing',
    shortcut: ['s', 'o'],
    contextId: 'sales',
    appId: 'sales',
    priority: 21,
    items: [
      {
        title: 'Quotations',
        url: '/apps/sales?view=quotes',
        contextId: 'sales',
        appId: 'sales',
        items: [
          {
            title: 'Draft Quotes',
            url: '/sales/quotations/draft',
            contextId: 'sales',
            appId: 'sales'
          },
          {
            title: 'Sent Quotes',
            url: '/sales/quotations/sent',
            contextId: 'sales',
            appId: 'sales'
          },
          {
            title: 'Quote Templates',
            url: '/sales/quotations/templates',
            contextId: 'sales',
            appId: 'sales'
          }
        ]
      },
      {
        title: 'Orders',
        url: '/sales/orders',
        contextId: 'sales',
        appId: 'sales',
        items: [
          {
            title: 'New Orders',
            url: '/sales/orders/new',
            contextId: 'sales',
            appId: 'sales'
          },
          {
            title: 'Processing',
            url: '/sales/orders/processing',
            contextId: 'sales',
            appId: 'sales'
          },
          {
            title: 'Completed',
            url: '/sales/orders/completed',
            contextId: 'sales',
            appId: 'sales'
          }
        ]
      },
      {
        title: 'Deliveries',
        url: '/sales/deliveries',
        contextId: 'sales',
        appId: 'sales',
        items: [
          {
            title: 'Pending',
            url: '/sales/deliveries/pending',
            contextId: 'sales',
            appId: 'sales'
          },
          {
            title: 'Shipped',
            url: '/sales/deliveries/shipped',
            contextId: 'sales',
            appId: 'sales'
          },
          {
            title: 'Delivered',
            url: '/sales/deliveries/delivered',
            contextId: 'sales',
            appId: 'sales'
          }
        ]
      },
      {
        title: 'Invoices',
        url: '/sales/invoices',
        contextId: 'sales',
        appId: 'sales',
        items: [
          {
            title: 'Outstanding',
            url: '/sales/invoices/outstanding',
            contextId: 'sales',
            appId: 'sales'
          },
          {
            title: 'Paid',
            url: '/sales/invoices/paid',
            contextId: 'sales',
            appId: 'sales'
          },
          {
            title: 'Overdue',
            url: '/sales/invoices/overdue',
            contextId: 'sales',
            appId: 'sales'
          }
        ]
      },
      {
        title: 'Products',
        url: '/sales/products',
        contextId: 'sales',
        appId: 'sales',
        items: [
          {
            title: 'All Products',
            url: '/sales/products/all',
            contextId: 'sales',
            appId: 'sales'
          },
          {
            title: 'Categories',
            url: '/sales/products/categories',
            contextId: 'sales',
            appId: 'sales'
          },
          {
            title: 'Pricing',
            url: '/sales/products/pricing',
            contextId: 'sales',
            appId: 'sales'
          }
        ]
      }
    ]
  },
  {
    title: 'POS Shop',
    url: '/apps/pos-shop',
    icon: 'product',
    shortcut: ['p', 's'],
    contextId: 'sales',
    appId: 'pos-shop',
    priority: 22,
    items: [
      {
        title: 'Point of Sale',
        url: '/apps/pos-shop?view=pos',
        contextId: 'sales',
        appId: 'pos-shop',
      },
      {
        title: 'Products',
        url: '/pos-shop/products',
        contextId: 'sales',
        appId: 'pos-shop',
        items: [
          {
            title: 'All Products',
            url: '/pos-shop/products/all',
            contextId: 'sales',
            appId: 'pos-shop'
          },
          {
            title: 'Categories',
            url: '/pos-shop/products/categories',
            contextId: 'sales',
            appId: 'pos-shop'
          },
          {
            title: 'Inventory',
            url: '/pos-shop/products/inventory',
            contextId: 'sales',
            appId: 'pos-shop'
          }
        ]
      },
      {
        title: 'Orders',
        url: '/pos-shop/orders',
        contextId: 'sales',
        appId: 'pos-shop',
      },
      {
        title: 'Configuration',
        url: '/pos-shop/config',
        contextId: 'sales',
        appId: 'pos-shop',
      },
      {
        title: 'Reports',
        url: '/pos-shop/reports',
        contextId: 'sales',
        appId: 'pos-shop',
        items: [
          {
            title: 'Sales Reports',
            url: '/pos-shop/reports/sales',
            contextId: 'sales',
            appId: 'pos-shop'
          },
          {
            title: 'Product Reports',
            url: '/pos-shop/reports/products',
            contextId: 'sales',
            appId: 'pos-shop'
          },
          {
            title: 'Cashier Reports',
            url: '/pos-shop/reports/cashiers',
            contextId: 'sales',
            appId: 'pos-shop'
          }
        ]
      }
    ]
  },
  {
    title: 'POS Restaurant',
    url: '/apps/pos-resto',
    icon: 'product',
    shortcut: ['p', 'r'],
    contextId: 'sales',
    appId: 'pos-resto',
    priority: 23,
    items: [
      {
        title: 'Tables',
        url: '/apps/pos-resto?view=tables',
        contextId: 'sales',
        appId: 'pos-resto',
      },
      {
        title: 'Order',
        url: '/pos-resto/order',
        contextId: 'sales',
        appId: 'pos-resto',
      },
      {
        title: 'Kitchen',
        url: '/pos-resto/kitchen',
        contextId: 'sales',
        appId: 'pos-resto',
      },
      {
        title: 'Menu',
        url: '/pos-resto/menu',
        contextId: 'sales',
        appId: 'pos-resto',
        items: [
          {
            title: 'Items',
            url: '/pos-resto/menu/items',
            contextId: 'sales',
            appId: 'pos-resto'
          },
          {
            title: 'Categories',
            url: '/pos-resto/menu/categories',
            contextId: 'sales',
            appId: 'pos-resto'
          },
          {
            title: 'Modifiers',
            url: '/pos-resto/menu/modifiers',
            contextId: 'sales',
            appId: 'pos-resto'
          }
        ]
      },
      {
        title: 'Billing',
        url: '/pos-resto/billing',
        contextId: 'sales',
        appId: 'pos-resto',
      }
    ]
  },
  {
    title: 'Subscriptions',
    url: '/apps/subscriptions',
    icon: 'refresh',
    shortcut: ['s', 'u'],
    contextId: 'sales',
    appId: 'subscriptions',
    priority: 24,
    items: [
      {
        title: 'Active',
        url: '/apps/subscriptions?view=active',
        contextId: 'sales',
        appId: 'subscriptions',
      },
      {
        title: 'Drafts',
        url: '/subscriptions/drafts',
        contextId: 'sales',
        appId: 'subscriptions',
      },
      {
        title: 'Expired',
        url: '/subscriptions/expired',
        contextId: 'sales',
        appId: 'subscriptions',
      },
      {
        title: 'Products',
        url: '/subscriptions/products',
        contextId: 'sales',
        appId: 'subscriptions',
        items: [
          {
            title: 'All Products',
            url: '/subscriptions/products/all',
            contextId: 'sales',
            appId: 'subscriptions'
          },
          {
            title: 'Plans',
            url: '/subscriptions/products/plans',
            contextId: 'sales',
            appId: 'subscriptions'
          },
          {
            title: 'Add-ons',
            url: '/subscriptions/products/addons',
            contextId: 'sales',
            appId: 'subscriptions'
          }
        ]
      },
      {
        title: 'Reports',
        url: '/subscriptions/reports',
        contextId: 'sales',
        appId: 'subscriptions',
        items: [
          {
            title: 'Revenue',
            url: '/subscriptions/reports/revenue',
            contextId: 'sales',
            appId: 'subscriptions'
          },
          {
            title: 'Churn',
            url: '/subscriptions/reports/churn',
            contextId: 'sales',
            appId: 'subscriptions'
          },
          {
            title: 'Growth',
            url: '/subscriptions/reports/growth',
            contextId: 'sales',
            appId: 'subscriptions'
          }
        ]
      }
    ]
  },
  {
    title: 'Rental',
    url: '/apps/rental',
    icon: 'dashboard',
    shortcut: ['r', 'e'],
    contextId: 'sales',
    appId: 'rental',
    priority: 25,
    items: [
      {
        title: 'Products',
        url: '/apps/rental?view=products',
        contextId: 'sales',
        appId: 'rental',
        items: [
          {
            title: 'All Products',
            url: '/rental/products/all',
            contextId: 'sales',
            appId: 'rental'
          },
          {
            title: 'Available',
            url: '/rental/products/available',
            contextId: 'sales',
            appId: 'rental'
          },
          {
            title: 'Rented',
            url: '/rental/products/rented',
            contextId: 'sales',
            appId: 'rental'
          }
        ]
      },
      {
        title: 'Quotes',
        url: '/rental/quotes',
        contextId: 'sales',
        appId: 'rental',
      },
      {
        title: 'Orders',
        url: '/rental/orders',
        contextId: 'sales',
        appId: 'rental',
      },
      {
        title: 'Returns',
        url: '/rental/returns',
        contextId: 'sales',
        appId: 'rental',
      },
      {
        title: 'Calendar',
        url: '/rental/calendar',
        contextId: 'sales',
        appId: 'rental',
      }
    ]
  },
  
  // Moved second-level items to first level (Finance context)
  {
    title: 'Accounting',
    url: '/apps/accounting',
    icon: 'chart',
    shortcut: ['a', 'c'],
    contextId: 'finance',
    appId: 'accounting',
    priority: 30,
    items: [
      {
        title: 'Dashboard',
        url: '/apps/accounting?view=dashboard',
        contextId: 'finance',
        appId: 'accounting',
      },
      {
        title: 'Chart of Accounts',
        url: '/accounting/accounts',
        contextId: 'finance',
        appId: 'accounting',
        items: [
          {
            title: 'Asset Accounts',
            url: '/accounting/accounts/assets',
            contextId: 'finance',
            appId: 'accounting'
          },
          {
            title: 'Liability Accounts',
            url: '/accounting/accounts/liabilities',
            contextId: 'finance',
            appId: 'accounting'
          },
          {
            title: 'Equity Accounts',
            url: '/accounting/accounts/equity',
            contextId: 'finance',
            appId: 'accounting'
          }
        ]
      },
      {
        title: 'Journal Entries',
        url: '/accounting/journals',
        contextId: 'finance',
        appId: 'accounting',
        items: [
          {
            title: 'Create Entry',
            url: '/accounting/journals/create',
            contextId: 'finance',
            appId: 'accounting'
          },
          {
            title: 'Review Entries',
            url: '/accounting/journals/review',
            contextId: 'finance',
            appId: 'accounting'
          },
          {
            title: 'Entry Templates',
            url: '/accounting/journals/templates',
            contextId: 'finance',
            appId: 'accounting'
          }
        ]
      },
      {
        title: 'Bank & Cash',
        url: '/accounting/bank',
        contextId: 'finance',
        appId: 'accounting',
        items: [
          {
            title: 'Accounts',
            url: '/accounting/bank/accounts',
            contextId: 'finance',
            appId: 'accounting'
          },
          {
            title: 'Transactions',
            url: '/accounting/bank/transactions',
            contextId: 'finance',
            appId: 'accounting'
          },
          {
            title: 'Reconciliation',
            url: '/accounting/bank/reconciliation',
            contextId: 'finance',
            appId: 'accounting'
          }
        ]
      },
      {
        title: 'Financial Reports',
        url: '/accounting/reports',
        contextId: 'finance',
        appId: 'accounting',
        items: [
          {
            title: 'Income Statement',
            url: '/accounting/reports/income',
            contextId: 'finance',
            appId: 'accounting'
          },
          {
            title: 'Balance Sheet',
            url: '/accounting/reports/balance',
            contextId: 'finance',
            appId: 'accounting'
          },
          {
            title: 'Cash Flow',
            url: '/accounting/reports/cashflow',
            contextId: 'finance',
            appId: 'accounting'
          }
        ]
      }
    ]
  },
  {
    title: 'Invoicing',
    url: '/apps/invoicing',
    icon: 'billing',
    shortcut: ['i', 'n'],
    contextId: 'finance',
    appId: 'invoicing',
    priority: 31,
    items: [
      {
        title: 'Drafts',
        url: '/apps/invoicing?view=drafts',
        contextId: 'finance',
        appId: 'invoicing',
      },
      {
        title: 'Sent',
        url: '/invoicing/sent',
        contextId: 'finance',
        appId: 'invoicing',
      },
      {
        title: 'Paid',
        url: '/invoicing/paid',
        contextId: 'finance',
        appId: 'invoicing',
      },
      {
        title: 'Recurring',
        url: '/invoicing/recurring',
        contextId: 'finance',
        appId: 'invoicing',
        items: [
          {
            title: 'Active Subscriptions',
            url: '/invoicing/recurring/active',
            contextId: 'finance',
            appId: 'invoicing'
          },
          {
            title: 'Upcoming Renewals',
            url: '/invoicing/recurring/upcoming',
            contextId: 'finance',
            appId: 'invoicing'
          },
          {
            title: 'Subscription Plans',
            url: '/invoicing/recurring/plans',
            contextId: 'finance',
            appId: 'invoicing'
          }
        ]
      },
      {
        title: 'Products',
        url: '/invoicing/products',
        contextId: 'finance',
        appId: 'invoicing',
        items: [
          {
            title: 'All Products',
            url: '/invoicing/products/all',
            contextId: 'finance',
            appId: 'invoicing'
          },
          {
            title: 'Categories',
            url: '/invoicing/products/categories',
            contextId: 'finance',
            appId: 'invoicing'
          },
          {
            title: 'Pricing',
            url: '/invoicing/products/pricing',
            contextId: 'finance',
            appId: 'invoicing'
          }
        ]
      }
    ]
  },
  {
    title: 'Expenses',
    url: '/apps/expenses',
    icon: 'billing',
    shortcut: ['e', 'x'],
    contextId: 'finance',
    appId: 'expenses',
    priority: 32,
    items: [
      {
        title: 'Reports',
        url: '/apps/expenses?view=reports',
        contextId: 'finance',
        appId: 'expenses',
      },
      {
        title: 'All Expenses',
        url: '/expenses/all',
        contextId: 'finance',
        appId: 'expenses',
      },
      {
        title: 'Categories',
        url: '/expenses/categories',
        contextId: 'finance',
        appId: 'expenses',
      },
      {
        title: 'Payment Methods',
        url: '/expenses/methods',
        contextId: 'finance',
        appId: 'expenses',
      },
      {
        title: 'Reimbursements',
        url: '/expenses/reimburse',
        contextId: 'finance',
        appId: 'expenses',
        items: [
          {
            title: 'Pending',
            url: '/expenses/reimburse/pending',
            contextId: 'finance',
            appId: 'expenses'
          },
          {
            title: 'Approved',
            url: '/expenses/reimburse/approved',
            contextId: 'finance',
            appId: 'expenses'
          },
          {
            title: 'Paid',
            url: '/expenses/reimburse/paid',
            contextId: 'finance',
            appId: 'expenses'
          }
        ]
      }
    ]
  },
  {
    title: 'Spreadsheet',
    url: '/apps/spreadsheet',
    icon: 'table',
    shortcut: ['s', 'p'],
    contextId: 'finance',
    appId: 'spreadsheet',
    priority: 33,
    items: [
      {
        title: 'Data',
        url: '/apps/spreadsheet?view=data',
        contextId: 'finance',
        appId: 'spreadsheet',
      },
      {
        title: 'Reports',
        url: '/spreadsheet/reports',
        contextId: 'finance',
        appId: 'spreadsheet',
      },
      {
        title: 'Pivot Tables',
        url: '/spreadsheet/pivot',
        contextId: 'finance',
        appId: 'spreadsheet',
      },
      {
        title: 'Charts',
        url: '/spreadsheet/charts',
        contextId: 'finance',
        appId: 'spreadsheet',
      },
      {
        title: 'Formulas',
        url: '/spreadsheet/formulas',
        contextId: 'finance',
        appId: 'spreadsheet',
      }
    ]
  },
  {
    title: 'Documents',
    url: '/apps/documents',
    icon: 'file',
    shortcut: ['d', 'o'],
    contextId: 'finance',
    appId: 'documents',
    priority: 34,
    items: [
      {
        title: 'All Documents',
        url: '/apps/documents?view=all',
        contextId: 'finance',
        appId: 'documents',
      },
      {
        title: 'By Category',
        url: '/documents/categories',
        contextId: 'finance',
        appId: 'documents',
      },
      {
        title: 'Upload',
        url: '/documents/upload',
        contextId: 'finance',
        appId: 'documents',
      },
      {
        title: 'Shared',
        url: '/documents/shared',
        contextId: 'finance',
        appId: 'documents',
      },
      {
        title: 'Templates',
        url: '/documents/templates',
        contextId: 'finance',
        appId: 'documents',
      }
    ]
  },
  {
    title: 'Sign',
    url: '/apps/sign',
    icon: 'file',
    shortcut: ['s', 'i'],
    contextId: 'finance',
    appId: 'sign',
    priority: 35,
    items: [
      {
        title: 'Send for Signature',
        url: '/apps/sign?view=send',
        contextId: 'finance',
        appId: 'sign',
      },
      {
        title: 'My Documents',
        url: '/sign/my-docs',
        contextId: 'finance',
        appId: 'sign',
      },
      {
        title: 'Templates',
        url: '/sign/templates',
        contextId: 'finance',
        appId: 'sign',
      },
      {
        title: 'Settings',
        url: '/sign/settings',
        contextId: 'finance',
        appId: 'sign',
      },
      {
        title: 'Audit Trail',
        url: '/sign/audit',
        contextId: 'finance',
        appId: 'sign',
      }
    ]
  },
  
  // Moved second-level items to first level (HR context)
  {
    title: 'Employees',
    url: '/apps/employees',
    icon: 'user',
    shortcut: ['e', 'm'],
    contextId: 'hr',
    appId: 'employees',
    priority: 50,
    items: [
      {
        title: 'Directory',
        url: '/apps/employees?view=directory',
        contextId: 'hr',
        appId: 'employees',
        items: [
          {
            title: 'Active Employees',
            url: '/employees/directory/active',
            contextId: 'hr',
            appId: 'employees'
          },
          {
            title: 'Contractors',
            url: '/employees/directory/contractors',
            contextId: 'hr',
            appId: 'employees'
          },
          {
            title: 'Alumni',
            url: '/employees/directory/alumni',
            contextId: 'hr',
            appId: 'employees'
          }
        ]
      },
      {
        title: 'Onboarding',
        url: '/employees/onboarding',
        contextId: 'hr',
        appId: 'employees',
        items: [
          {
            title: 'New Hires',
            url: '/employees/onboarding/new',
            contextId: 'hr',
            appId: 'employees'
          },
          {
            title: 'Paperwork',
            url: '/employees/onboarding/paperwork',
            contextId: 'hr',
            appId: 'employees'
          },
          {
            title: 'Training',
            url: '/employees/onboarding/training',
            contextId: 'hr',
            appId: 'employees'
          }
        ]
      },
      {
        title: 'Performance',
        url: '/employees/performance',
        contextId: 'hr',
        appId: 'employees',
        items: [
          {
            title: 'Reviews',
            url: '/employees/performance/reviews',
            contextId: 'hr',
            appId: 'employees'
          },
          {
            title: 'Goals',
            url: '/employees/performance/goals',
            contextId: 'hr',
            appId: 'employees'
          },
          {
            title: 'Feedback',
            url: '/employees/performance/feedback',
            contextId: 'hr',
            appId: 'employees'
          }
        ]
      }
    ]
  },
  {
    title: 'Recruitment',
    url: '/apps/recruitment',
    icon: 'userCircle',
    shortcut: ['r', 'c'],
    contextId: 'hr',
    appId: 'recruitment',
    priority: 51,
    items: [
      {
        title: 'Job Postings',
        url: '/apps/recruitment?view=jobs',
        contextId: 'hr',
        appId: 'recruitment',
        items: [
          {
            title: 'Active Postings',
            url: '/recruitment/jobs/active',
            contextId: 'hr',
            appId: 'recruitment'
          },
          {
            title: 'Draft Postings',
            url: '/recruitment/jobs/draft',
            contextId: 'hr',
            appId: 'recruitment'
          },
          {
            title: 'Job Templates',
            url: '/recruitment/jobs/templates',
            contextId: 'hr',
            appId: 'recruitment'
          }
        ]
      },
      {
        title: 'Candidates',
        url: '/recruitment/candidates',
        contextId: 'hr',
        appId: 'recruitment',
        items: [
          {
            title: 'All Applications',
            url: '/recruitment/candidates/all',
            contextId: 'hr',
            appId: 'recruitment'
          },
          {
            title: 'Shortlisted',
            url: '/recruitment/candidates/shortlisted',
            contextId: 'hr',
            appId: 'recruitment'
          },
          {
            title: 'Interviews',
            url: '/recruitment/candidates/interviews',
            contextId: 'hr',
            appId: 'recruitment'
          }
        ]
      },
      {
        title: 'Hiring Pipeline',
        url: '/recruitment/pipeline',
        contextId: 'hr',
        appId: 'recruitment',
        items: [
          {
            title: 'Pipeline View',
            url: '/recruitment/pipeline/view',
            contextId: 'hr',
            appId: 'recruitment'
          },
          {
            title: 'Analytics',
            url: '/recruitment/pipeline/analytics',
            contextId: 'hr',
            appId: 'recruitment'
          },
          {
            title: 'Hiring Team',
            url: '/recruitment/pipeline/team',
            contextId: 'hr',
            appId: 'recruitment'
          }
        ]
      }
    ]
  },
  {
    title: 'Time Off',
    url: '/apps/timeoff',
    icon: 'userPen',
    shortcut: ['t', 'o'],
    contextId: 'hr',
    appId: 'timeoff',
    priority: 52,
    items: [
      {
        title: 'Requests',
        url: '/apps/timeoff?view=requests',
        contextId: 'hr',
        appId: 'timeoff',
        items: [
          {
            title: 'Pending Approval',
            url: '/timeoff/requests/pending',
            contextId: 'hr',
            appId: 'timeoff'
          },
          {
            title: 'Approved Requests',
            url: '/timeoff/requests/approved',
            contextId: 'hr',
            appId: 'timeoff'
          },
          {
            title: 'Denied Requests',
            url: '/timeoff/requests/denied',
            contextId: 'hr',
            appId: 'timeoff'
          }
        ]
      },
      {
        title: 'Calendar',
        url: '/timeoff/calendar',
        contextId: 'hr',
        appId: 'timeoff',
        items: [
          {
            title: 'Team Calendar',
            url: '/timeoff/calendar/team',
            contextId: 'hr',
            appId: 'timeoff'
          },
          {
            title: 'Department Calendar',
            url: '/timeoff/calendar/department',
            contextId: 'hr',
            appId: 'timeoff'
          },
          {
            title: 'Company Calendar',
            url: '/timeoff/calendar/company',
            contextId: 'hr',
            appId: 'timeoff'
          }
        ]
      },
      {
        title: 'Policies',
        url: '/timeoff/policies',
        contextId: 'hr',
        appId: 'timeoff',
        items: [
          {
            title: 'Vacation Policy',
            url: '/timeoff/policies/vacation',
            contextId: 'hr',
            appId: 'timeoff'
          },
          {
            title: 'Sick Leave Policy',
            url: '/timeoff/policies/sick',
            contextId: 'hr',
            appId: 'timeoff'
          },
          {
            title: 'Holiday Schedule',
            url: '/timeoff/policies/holidays',
            contextId: 'hr',
            appId: 'timeoff'
          }
        ]
      }
    ]
  },
  {
    title: 'Appraisals',
    url: '/apps/appraisals',
    icon: 'chart',
    shortcut: ['a', 'p'],
    contextId: 'hr',
    appId: 'appraisals',
    priority: 53,
    items: [
      {
        title: 'Review Cycles',
        url: '/apps/appraisals?view=cycles',
        contextId: 'hr',
        appId: 'appraisals',
        items: [
          {
            title: 'Current Cycle',
            url: '/appraisals/cycles/current',
            contextId: 'hr',
            appId: 'appraisals'
          },
          {
            title: 'Past Cycles',
            url: '/appraisals/cycles/past',
            contextId: 'hr',
            appId: 'appraisals'
          },
          {
            title: 'Upcoming Cycles',
            url: '/appraisals/cycles/upcoming',
            contextId: 'hr',
            appId: 'appraisals'
          }
        ]
      },
      {
        title: 'Templates',
        url: '/appraisals/templates',
        contextId: 'hr',
        appId: 'appraisals',
        items: [
          {
            title: 'Performance Templates',
            url: '/appraisals/templates/performance',
            contextId: 'hr',
            appId: 'appraisals'
          },
          {
            title: '360 Feedback Templates',
            url: '/appraisals/templates/360',
            contextId: 'hr',
            appId: 'appraisals'
          },
          {
            title: 'Self-Assessment Templates',
            url: '/appraisals/templates/self',
            contextId: 'hr',
            appId: 'appraisals'
          }
        ]
      },
      {
        title: 'Reports',
        url: '/appraisals/reports',
        contextId: 'hr',
        appId: 'appraisals',
        items: [
          {
            title: 'Individual Reports',
            url: '/appraisals/reports/individual',
            contextId: 'hr',
            appId: 'appraisals'
          },
          {
            title: 'Team Reports',
            url: '/appraisals/reports/team',
            contextId: 'hr',
            appId: 'appraisals'
          },
          {
            title: 'Trend Analysis',
            url: '/appraisals/reports/trends',
            contextId: 'hr',
            appId: 'appraisals'
          }
        ]
      }
    ]
  },
  {
    title: 'Marketing Automation',
    url: '/apps/marketing',
    icon: 'refresh',
    shortcut: ['m', 'a'],
    contextId: 'marketing',
    appId: 'marketing',
    priority: 60,
    items: [
      {
        title: 'Campaigns',
        url: '/apps/marketing?view=campaigns',
        contextId: 'marketing',
        appId: 'marketing',
        items: [
          {
            title: 'Active Campaigns',
            url: '/marketing/automation/campaigns/active',
            contextId: 'marketing',
            appId: 'marketing'
          },
          {
            title: 'Scheduled Campaigns',
            url: '/marketing/automation/campaigns/scheduled',
            contextId: 'marketing',
            appId: 'marketing'
          },
          {
            title: 'Completed Campaigns',
            url: '/marketing/automation/campaigns/completed',
            contextId: 'marketing',
            appId: 'marketing'
          }
        ]
      },
      {
        title: 'Workflows',
        url: '/marketing/automation/workflows',
        contextId: 'marketing',
        appId: 'marketing',
        items: [
          {
            title: 'Lead Nurturing',
            url: '/marketing/automation/workflows/lead',
            contextId: 'marketing',
            appId: 'marketing'
          },
          {
            title: 'Customer Onboarding',
            url: '/marketing/automation/workflows/onboarding',
            contextId: 'marketing',
            appId: 'marketing'
          },
          {
            title: 'Re-engagement',
            url: '/marketing/automation/workflows/reengagement',
            contextId: 'marketing',
            appId: 'marketing'
          }
        ]
      },
      {
        title: 'Analytics',
        url: '/marketing/automation/analytics',
        contextId: 'marketing',
        appId: 'marketing',
        items: [
          {
            title: 'Performance Metrics',
            url: '/marketing/automation/analytics/performance',
            contextId: 'marketing',
            appId: 'marketing'
          },
          {
            title: 'Conversion Rates',
            url: '/marketing/automation/analytics/conversion',
            contextId: 'marketing',
            appId: 'marketing'
          },
          {
            title: 'ROI Reporting',
            url: '/marketing/automation/analytics/roi',
            contextId: 'marketing',
            appId: 'marketing'
          }
        ]
      }
    ]
  },
  {
    title: 'Discuss',
    url: '/apps/discuss',
    icon: 'help',
    shortcut: ['d', 'i'],
    contextId: 'productivity',
    appId: 'discuss',
    priority: 80,
    items: [
      {
        title: 'Channels',
        url: '/apps/discuss?view=channels',
        contextId: 'productivity',
        appId: 'discuss',
        items: [
          {
            title: 'Team Channels',
            url: '/discuss/channels/team',
            contextId: 'productivity',
            appId: 'discuss'
          },
          {
            title: 'Project Channels',
            url: '/discuss/channels/project',
            contextId: 'productivity',
            appId: 'discuss'
          },
          {
            title: 'Private Channels',
            url: '/discuss/channels/private',
            contextId: 'productivity',
            appId: 'discuss'
          }
        ]
      },
      {
        title: 'Direct Messages',
        url: '/discuss/direct',
        contextId: 'productivity',
        appId: 'discuss',
      },
      {
        title: 'Mentions',
        url: '/discuss/mentions',
        contextId: 'productivity',
        appId: 'discuss',
      },
      {
        title: 'Files',
        url: '/discuss/files',
        contextId: 'productivity',
        appId: 'discuss',
      },
      {
        title: 'Settings',
        url: '/discuss/settings',
        contextId: 'productivity',
        appId: 'discuss',
        items: [
          {
            title: 'Notifications',
            url: '/discuss/settings/notifications',
            contextId: 'productivity',
            appId: 'discuss'
          },
          {
            title: 'Integrations',
            url: '/discuss/settings/integrations',
            contextId: 'productivity',
            appId: 'discuss'
          },
          {
            title: 'Privacy',
            url: '/discuss/settings/privacy',
            contextId: 'productivity',
            appId: 'discuss'
          }
        ]
      }
    ]
  },
  {
    title: 'Approvals',
    url: '/apps/approvals',
    icon: 'check',
    shortcut: ['a', 'a'],
    contextId: 'productivity',
    appId: 'approvals',
    priority: 81,
    items: [
      {
        title: 'Requests',
        url: '/apps/approvals?view=requests',
        contextId: 'productivity',
        appId: 'approvals',
      },
      {
        title: 'My Requests',
        url: '/approvals/my-req',
        contextId: 'productivity',
        appId: 'approvals',
      },
      {
        title: 'Configuration',
        url: '/approvals/config',
        contextId: 'productivity',
        appId: 'approvals',
      },
      {
        title: 'History',
        url: '/approvals/history',
        contextId: 'productivity',
        appId: 'approvals',
      },
      {
        title: 'Settings',
        url: '/approvals/settings',
        contextId: 'productivity',
        appId: 'approvals',
      }
    ]
  },
  {
    title: 'IoT',
    url: '/apps/iot',
    icon: 'settings',
    shortcut: ['i', 'o'],
    contextId: 'productivity',
    appId: 'iot',
    priority: 82,
    items: [
      {
        title: 'Devices',
        url: '/apps/iot?view=devices',
        contextId: 'productivity',
        appId: 'iot',
        items: [
          {
            title: 'All Devices',
            url: '/iot/devices/all',
            contextId: 'productivity',
            appId: 'iot'
          },
          {
            title: 'Groups',
            url: '/iot/devices/groups',
            contextId: 'productivity',
            appId: 'iot'
          },
          {
            title: 'Status',
            url: '/iot/devices/status',
            contextId: 'productivity',
            appId: 'iot'
          }
        ]
      },
      {
        title: 'Data',
        url: '/iot/data',
        contextId: 'productivity',
        appId: 'iot',
      },
      {
        title: 'Rules',
        url: '/iot/rules',
        contextId: 'productivity',
        appId: 'iot',
      },
      {
        title: 'Dashboards',
        url: '/iot/dashboards',
        contextId: 'productivity',
        appId: 'iot',
      },
      {
        title: 'Settings',
        url: '/iot/settings',
        contextId: 'productivity',
        appId: 'iot',
      }
    ]
  },
  {
    title: 'VoIP',
    url: '/apps/voip',
    icon: 'help',
    shortcut: ['v', 'o'],
    contextId: 'productivity',
    appId: 'voip',
    priority: 83,
    items: [
      {
        title: 'Calls',
        url: '/apps/voip?view=calls',
        contextId: 'productivity',
        appId: 'voip',
      },
      {
        title: 'History',
        url: '/voip/history',
        contextId: 'productivity',
        appId: 'voip',
      },
      {
        title: 'Contacts',
        url: '/voip/contacts',
        contextId: 'productivity',
        appId: 'voip',
      },
      {
        title: 'Configuration',
        url: '/voip/config',
        contextId: 'productivity',
        appId: 'voip',
      },
      {
        title: 'Voicemail',
        url: '/voip/voicemail',
        contextId: 'productivity',
        appId: 'voip',
      }
    ]
  },
  {
    title: 'Knowledge',
    url: '/apps/knowledge',
    icon: 'book',
    shortcut: ['k', 'b'],
    contextId: 'productivity',
    appId: 'knowledge',
    priority: 84,
    items: [
      {
        title: 'Articles',
        url: '/apps/knowledge?view=articles',
        contextId: 'productivity',
        appId: 'knowledge',
      },
      {
        title: 'Categories',
        url: '/knowledge/cats',
        contextId: 'productivity',
        appId: 'knowledge',
      },
      {
        title: 'Contribute',
        url: '/knowledge/contribute',
        contextId: 'productivity',
        appId: 'knowledge',
      },
      {
        title: 'Feedback',
        url: '/knowledge/feedback',
        contextId: 'productivity',
        appId: 'knowledge',
      },
      {
        title: 'Settings',
        url: '/knowledge/settings',
        contextId: 'productivity',
        appId: 'knowledge',
      }
    ]
  },
  {
    title: 'WhatsApp',
    url: '/apps/whatsapp',
    icon: 'help',
    shortcut: ['w', 'a'],
    contextId: 'productivity',
    appId: 'whatsapp',
    priority: 85,
    items: [
      {
        title: 'Chats',
        url: '/apps/whatsapp?view=chats',
        contextId: 'productivity',
        appId: 'whatsapp',
      },
      {
        title: 'Contacts',
        url: '/whatsapp/contacts',
        contextId: 'productivity',
        appId: 'whatsapp',
      },
      {
        title: 'Broadcast',
        url: '/whatsapp/broadcast',
        contextId: 'productivity',
        appId: 'whatsapp',
      },
      {
        title: 'Templates',
        url: '/whatsapp/templates',
        contextId: 'productivity',
        appId: 'whatsapp',
      },
      {
        title: 'Settings',
        url: '/whatsapp/settings',
        contextId: 'productivity',
        appId: 'whatsapp',
      }
    ]
  },
  {
    title: 'Automation',
    url: '/apps/automation',
    icon: 'refresh',
    shortcut: ['a', 'u'],
    contextId: 'productivity',
    appId: 'automation',
    priority: 86,
    items: [
      {
        title: 'Workflows',
        url: '/apps/automation?view=workflows',
        contextId: 'productivity',
        appId: 'automation',
        items: [
          {
            title: 'Active Workflows',
            url: '/automation/workflows/active',
            contextId: 'productivity',
            appId: 'automation'
          },
          {
            title: 'Drafts',
            url: '/automation/workflows/drafts',
            contextId: 'productivity',
            appId: 'automation'
          },
          {
            title: 'Templates',
            url: '/automation/workflows/templates',
            contextId: 'productivity',
            appId: 'automation'
          }
        ]
      },
      {
        title: 'Nodes',
        url: '/automation/nodes',
        contextId: 'productivity',
        appId: 'automation',
      },
      {
        title: 'Triggers',
        url: '/automation/triggers',
        contextId: 'productivity',
        appId: 'automation',
      },
      {
        title: 'Executions',
        url: '/automation/executions',
        contextId: 'productivity',
        appId: 'automation',
      },
      {
        title: 'Credentials',
        url: '/automation/credentials',
        contextId: 'productivity',
        appId: 'automation',
      }
    ]
  },
  {
    title: 'Studio',
    url: '/apps/studio',
    icon: 'settings',
    shortcut: ['s', 't'],
    contextId: 'customization',
    appId: 'studio',
    priority: 90,
    items: [
      {
        title: 'App Builder',
        url: '/apps/studio?view=app-builder',
        contextId: 'customization',
        appId: 'studio',
        items: [
          {
            title: 'My Apps',
            url: '/studio/app-builder/my-apps',
            contextId: 'customization',
            appId: 'studio'
          },
          {
            title: 'Templates',
            url: '/studio/app-builder/templates',
            contextId: 'customization',
            appId: 'studio'
          },
          {
            title: 'Components',
            url: '/studio/app-builder/components',
            contextId: 'customization',
            appId: 'studio'
          }
        ]
      },
      {
        title: 'Automation',
        url: '/studio/automation',
        contextId: 'customization',
        appId: 'studio',
        items: [
          {
            title: 'Workflows',
            url: '/studio/automation/workflows',
            contextId: 'customization',
            appId: 'studio'
          },
          {
            title: 'Actions',
            url: '/studio/automation/actions',
            contextId: 'customization',
            appId: 'studio'
          },
          {
            title: 'Triggers',
            url: '/studio/automation/triggers',
            contextId: 'customization',
            appId: 'studio'
          }
        ]
      },
      {
        title: 'Code Studio',
        url: '/studio/code',
        contextId: 'customization',
        appId: 'studio',
        items: [
          {
            title: 'Scripts',
            url: '/studio/code/scripts',
            contextId: 'customization',
            appId: 'studio'
          },
          {
            title: 'API Integration',
            url: '/studio/code/api',
            contextId: 'customization',
            appId: 'studio'
          },
          {
            title: 'Custom Widgets',
            url: '/studio/code/widgets',
            contextId: 'customization',
            appId: 'studio'
          }
        ]
      },
      {
        title: 'Mini App',
        url: '/apps/mini-app',
        contextId: 'customization',
        appId: 'mini-app',
        items: [
          {
            title: 'Scripts',
            url: '/studio/code/scripts',
            contextId: 'customization',
            appId: 'studio'
          },
          {
            title: 'API Integration',
            url: '/studio/code/api',
            contextId: 'customization',
            appId: 'studio'
          },
          {
            title: 'Custom Widgets',
            url: '/studio/code/widgets',
            contextId: 'customization',
            appId: 'studio'
          }
        ]
      }
    ]
  },
  {
    title: 'Inventory',
    url: '/apps/inventory',
    icon: 'folder',
    shortcut: ['i', 'v'],
    contextId: 'inventory',
    appId: 'inventory',
    priority: 40,
    items: [
      {
        title: 'Products',
        url: '/apps/inventory?view=products',
        contextId: 'inventory',
        appId: 'inventory',
        items: [
          {
            title: 'All Products',
            url: '/inventory/products/all',
            contextId: 'inventory',
            appId: 'inventory'
          },
          {
            title: 'Categories',
            url: '/inventory/products/categories',
            contextId: 'inventory',
            appId: 'inventory'
          },
          {
            title: 'Variants',
            url: '/inventory/products/variants',
            contextId: 'inventory',
            appId: 'inventory'
          }
        ]
      },
      {
        title: 'Stock',
        url: '/inventory/stock',
        contextId: 'inventory',
        appId: 'inventory',
        items: [
          {
            title: 'Stock Levels',
            url: '/inventory/stock/levels',
            contextId: 'inventory',
            appId: 'inventory'
          },
          {
            title: 'Locations',
            url: '/inventory/stock/locations',
            contextId: 'inventory',
            appId: 'inventory'
          },
          {
            title: 'Reorder Points',
            url: '/inventory/stock/reorder',
            contextId: 'inventory',
            appId: 'inventory'
          }
        ]
      },
      {
        title: 'Transfers',
        url: '/inventory/transfers',
        contextId: 'inventory',
        appId: 'inventory',
      },
      {
        title: 'Adjustments',
        url: '/inventory/adjust',
        contextId: 'inventory',
        appId: 'inventory',
      },
      {
        title: 'Reports',
        url: '/inventory/reports',
        contextId: 'inventory',
        appId: 'inventory',
        items: [
          {
            title: 'Inventory Valuation',
            url: '/inventory/reports/valuation',
            contextId: 'inventory',
            appId: 'inventory'
          },
          {
            title: 'Movement Analysis',
            url: '/inventory/reports/movement',
            contextId: 'inventory',
            appId: 'inventory'
          },
          {
            title: 'Forecasting',
            url: '/inventory/reports/forecast',
            contextId: 'inventory',
            appId: 'inventory'
          }
        ]
      }
    ]
  },
  {
    title: 'Manufacturing',
    url: '/apps/manufacturing',
    icon: 'settings',
    shortcut: ['m', 'f'],
    contextId: 'inventory',
    appId: 'manufacturing',
    priority: 41,
    items: [
      {
        title: 'Bills of Materials',
        url: '/apps/manufacturing?view=boms',
        contextId: 'inventory',
        appId: 'manufacturing',
        items: [
          {
            title: 'All BOMs',
            url: '/manufacturing/boms/all',
            contextId: 'inventory',
            appId: 'manufacturing'
          },
          {
            title: 'Components',
            url: '/manufacturing/boms/components',
            contextId: 'inventory',
            appId: 'manufacturing'
          },
          {
            title: 'Versions',
            url: '/manufacturing/boms/versions',
            contextId: 'inventory',
            appId: 'manufacturing'
          }
        ]
      },
      {
        title: 'Work Orders',
        url: '/manufacturing/orders',
        contextId: 'inventory',
        appId: 'manufacturing',
        items: [
          {
            title: 'Pending',
            url: '/manufacturing/orders/pending',
            contextId: 'inventory',
            appId: 'manufacturing'
          },
          {
            title: 'In Progress',
            url: '/manufacturing/orders/progress',
            contextId: 'inventory',
            appId: 'manufacturing'
          },
          {
            title: 'Completed',
            url: '/manufacturing/orders/completed',
            contextId: 'inventory',
            appId: 'manufacturing'
          }
        ]
      },
      {
        title: 'Work Centers',
        url: '/manufacturing/centers',
        contextId: 'inventory',
        appId: 'manufacturing',
      },
      {
        title: 'Production Planning',
        url: '/manufacturing/planning',
        contextId: 'inventory',
        appId: 'manufacturing',
      },
      {
        title: 'Reports',
        url: '/manufacturing/reports',
        contextId: 'inventory',
        appId: 'manufacturing',
        items: [
          {
            title: 'Efficiency',
            url: '/manufacturing/reports/efficiency',
            contextId: 'inventory',
            appId: 'manufacturing'
          },
          {
            title: 'Cost Analysis',
            url: '/manufacturing/reports/cost',
            contextId: 'inventory',
            appId: 'manufacturing'
          },
          {
            title: 'Production Schedule',
            url: '/manufacturing/reports/schedule',
            contextId: 'inventory',
            appId: 'manufacturing'
          }
        ]
      }
    ]
  },
  {
    title: 'PLM',
    url: '/apps/plm',
    icon: 'settings',
    shortcut: ['p', 'l'],
    contextId: 'inventory',
    appId: 'plm',
    priority: 42,
    items: [
      {
        title: 'Products',
        url: '/apps/plm?view=products',
        contextId: 'inventory',
        appId: 'plm',
      },
      {
        title: 'Engineering',
        url: '/plm/engineer',
        contextId: 'inventory',
        appId: 'plm',
      },
      {
        title: 'Change Management',
        url: '/plm/changes',
        contextId: 'inventory',
        appId: 'plm',
        items: [
          {
            title: 'Change Requests',
            url: '/plm/changes/requests',
            contextId: 'inventory',
            appId: 'plm'
          },
          {
            title: 'Change Orders',
            url: '/plm/changes/orders',
            contextId: 'inventory',
            appId: 'plm'
          },
          {
            title: 'Implementation',
            url: '/plm/changes/implementation',
            contextId: 'inventory',
            appId: 'plm'
          }
        ]
      },
      {
        title: 'Documentation',
        url: '/plm/docs',
        contextId: 'inventory',
        appId: 'plm',
      },
      {
        title: 'Quality',
        url: '/plm/quality',
        contextId: 'inventory',
        appId: 'plm',
      }
    ]
  },
  {
    title: 'Purchase',
    url: '/apps/purchase',
    icon: 'product',
    shortcut: ['p', 'u'],
    contextId: 'inventory',
    appId: 'purchase',
    priority: 43,
    items: [
      {
        title: 'Requests',
        url: '/apps/purchase?view=requests',
        contextId: 'inventory',
        appId: 'purchase',
      },
      {
        title: 'Orders',
        url: '/purchase/orders',
        contextId: 'inventory',
        appId: 'purchase',
        items: [
          {
            title: 'Request for Quotation',
            url: '/purchase/orders/rfq',
            contextId: 'inventory',
            appId: 'purchase'
          },
          {
            title: 'Purchase Orders',
            url: '/purchase/orders/po',
            contextId: 'inventory',
            appId: 'purchase'
          },
          {
            title: 'Blanket Orders',
            url: '/purchase/orders/blanket',
            contextId: 'inventory',
            appId: 'purchase'
          }
        ]
      },
      {
        title: 'Receipts',
        url: '/purchase/receipts',
        contextId: 'inventory',
        appId: 'purchase',
      },
      {
        title: 'Vendors',
        url: '/purchase/vendors',
        contextId: 'inventory',
        appId: 'purchase',
        items: [
          {
            title: 'All Vendors',
            url: '/purchase/vendors/all',
            contextId: 'inventory',
            appId: 'purchase'
          },
          {
            title: 'Vendor Performance',
            url: '/purchase/vendors/performance',
            contextId: 'inventory',
            appId: 'purchase'
          },
          {
            title: 'Agreements',
            url: '/purchase/vendors/agreements',
            contextId: 'inventory',
            appId: 'purchase'
          }
        ]
      },
      {
        title: 'Reports',
        url: '/purchase/reports',
        contextId: 'inventory',
        appId: 'purchase',
      }
    ]
  },
  {
    title: 'Maintenance',
    url: '/apps/maintenance',
    icon: 'settings',
    shortcut: ['m', 'n'],
    contextId: 'inventory',
    appId: 'maintenance',
    priority: 44,
    items: [
      {
        title: 'Equipment',
        url: '/apps/maintenance?view=equipment',
        contextId: 'inventory',
        appId: 'maintenance',
      },
      {
        title: 'Requests',
        url: '/maintenance/requests',
        contextId: 'inventory',
        appId: 'maintenance',
      },
      {
        title: 'Planned Maintenance',
        url: '/maintenance/planned',
        contextId: 'inventory',
        appId: 'maintenance',
      },
      {
        title: 'Work Orders',
        url: '/maintenance/orders',
        contextId: 'inventory',
        appId: 'maintenance',
      },
      {
        title: 'Reports',
        url: '/maintenance/reports',
        contextId: 'inventory',
        appId: 'maintenance',
        items: [
          {
            title: 'Equipment History',
            url: '/maintenance/reports/history',
            contextId: 'inventory',
            appId: 'maintenance'
          },
          {
            title: 'Downtime Analysis',
            url: '/maintenance/reports/downtime',
            contextId: 'inventory',
            appId: 'maintenance'
          },
          {
            title: 'Cost Reports',
            url: '/maintenance/reports/cost',
            contextId: 'inventory',
            appId: 'maintenance'
          }
        ]
      }
    ]
  },
  {
    title: 'Quality',
    url: '/apps/quality',
    icon: 'check',
    shortcut: ['q', 'a'],
    contextId: 'inventory',
    appId: 'quality',
    priority: 45,
    items: [
      {
        title: 'Quality Checks',
        url: '/apps/quality?view=checks',
        contextId: 'inventory',
        appId: 'quality',
      },
      {
        title: 'Inspections',
        url: '/quality/inspect',
        contextId: 'inventory',
        appId: 'quality',
      },
      {
        title: 'Issues',
        url: '/quality/issues',
        contextId: 'inventory',
        appId: 'quality',
      },
      {
        title: 'Corrective Actions',
        url: '/quality/actions',
        contextId: 'inventory',
        appId: 'quality',
      },
      {
        title: 'Reports',
        url: '/quality/reports',
        contextId: 'inventory',
        appId: 'quality',
      }
    ]
  },
  {
    title: 'Project',
    url: '/apps/project',
    icon: 'folder',
    shortcut: ['p', 'j'],
    contextId: 'services',
    appId: 'project',
    priority: 70,
    items: [
      {
        title: 'All Projects',
        url: '/apps/project?view=all',
        contextId: 'services',
        appId: 'project',
      },
      {
        title: 'Tasks',
        url: '/project/tasks',
        contextId: 'services',
        appId: 'project',
        items: [
          {
            title: 'My Tasks',
            url: '/project/tasks/my',
            contextId: 'services',
            appId: 'project'
          },
          {
            title: 'All Tasks',
            url: '/project/tasks/all',
            contextId: 'services',
            appId: 'project'
          },
          {
            title: 'Kanban View',
            url: '/project/tasks/kanban',
            contextId: 'services',
            appId: 'project'
          }
        ]
      },
      {
        title: 'Planning',
        url: '/project/plan',
        contextId: 'services',
        appId: 'project',
        items: [
          {
            title: 'Gantt Chart',
            url: '/project/plan/gantt',
            contextId: 'services',
            appId: 'project'
          },
          {
            title: 'Milestones',
            url: '/project/plan/milestones',
            contextId: 'services',
            appId: 'project'
          },
          {
            title: 'Timeline',
            url: '/project/plan/timeline',
            contextId: 'services',
            appId: 'project'
          }
        ]
      },
      {
        title: 'Resources',
        url: '/project/resources',
        contextId: 'services',
        appId: 'project',
      },
      {
        title: 'Reports',
        url: '/project/reports',
        contextId: 'services',
        appId: 'project',
        items: [
          {
            title: 'Project Status',
            url: '/project/reports/status',
            contextId: 'services',
            appId: 'project'
          },
          {
            title: 'Time Tracking',
            url: '/project/reports/time',
            contextId: 'services',
            appId: 'project'
          },
          {
            title: 'Budget vs Actual',
            url: '/project/reports/budget',
            contextId: 'services',
            appId: 'project'
          }
        ]
      }
    ]
  },
  {
    title: 'Timesheets',
    url: '/apps/timesheets',
    icon: 'dashboard',
    shortcut: ['t', 's'],
    contextId: 'services',
    appId: 'timesheets',
    priority: 71,
    items: [
      {
        title: 'My Timesheets',
        url: '/apps/timesheets?view=my',
        contextId: 'services',
        appId: 'timesheets',
      },
      {
        title: 'All Timesheets',
        url: '/timesheets/all',
        contextId: 'services',
        appId: 'timesheets',
      },
      {
        title: 'Validation',
        url: '/timesheets/validate',
        contextId: 'services',
        appId: 'timesheets',
      },
      {
        title: 'Reports',
        url: '/timesheets/reports',
        contextId: 'services',
        appId: 'timesheets',
        items: [
          {
            title: 'By Employee',
            url: '/timesheets/reports/employee',
            contextId: 'services',
            appId: 'timesheets'
          },
          {
            title: 'By Project',
            url: '/timesheets/reports/project',
            contextId: 'services',
            appId: 'timesheets'
          },
          {
            title: 'By Client',
            url: '/timesheets/reports/client',
            contextId: 'services',
            appId: 'timesheets'
          }
        ]
      },
      {
        title: 'Configuration',
        url: '/timesheets/config',
        contextId: 'services',
        appId: 'timesheets',
      }
    ]
  },
  {
    title: 'Field Service',
    url: '/apps/field-service',
    icon: 'file',
    shortcut: ['f', 's'],
    contextId: 'services',
    appId: 'field-service',
    priority: 72,
    items: [
      {
        title: 'Work Orders',
        url: '/apps/field-service?view=orders',
        contextId: 'services',
        appId: 'field-service',
        items: [
          {
            title: 'New Orders',
            url: '/field-service/orders/new',
            contextId: 'services',
            appId: 'field-service'
          },
          {
            title: 'Scheduled',
            url: '/field-service/orders/scheduled',
            contextId: 'services',
            appId: 'field-service'
          },
          {
            title: 'Completed',
            url: '/field-service/orders/completed',
            contextId: 'services',
            appId: 'field-service'
          }
        ]
      },
      {
        title: 'Technicians',
        url: '/field-service/techs',
        contextId: 'services',
        appId: 'field-service',
      },
      {
        title: 'Planning',
        url: '/field-service/plan',
        contextId: 'services',
        appId: 'field-service',
        items: [
          {
            title: 'Dispatch Board',
            url: '/field-service/plan/dispatch',
            contextId: 'services',
            appId: 'field-service'
          },
          {
            title: 'Calendar View',
            url: '/field-service/plan/calendar',
            contextId: 'services',
            appId: 'field-service'
          },
          {
            title: 'Map View',
            url: '/field-service/plan/map',
            contextId: 'services',
            appId: 'field-service'
          }
        ]
      },
      {
        title: 'Products',
        url: '/field-service/products',
        contextId: 'services',
        appId: 'field-service',
      },
      {
        title: 'Reports',
        url: '/field-service/reports',
        contextId: 'services',
        appId: 'field-service',
      }
    ]
  },
  {
    title: 'Helpdesk',
    url: '/apps/helpdesk',
    icon: 'help',
    shortcut: ['h', 'd'],
    contextId: 'services',
    appId: 'helpdesk',
    priority: 73,
    items: [
      {
        title: 'Open Tickets',
        url: '/apps/helpdesk?view=open',
        contextId: 'services',
        appId: 'helpdesk',
      },
      {
        title: 'All Tickets',
        url: '/helpdesk/all',
        contextId: 'services',
        appId: 'helpdesk',
        items: [
          {
            title: 'By Priority',
            url: '/helpdesk/all/priority',
            contextId: 'services',
            appId: 'helpdesk'
          },
          {
            title: 'By Status',
            url: '/helpdesk/all/status',
            contextId: 'services',
            appId: 'helpdesk'
          },
          {
            title: 'By Category',
            url: '/helpdesk/all/category',
            contextId: 'services',
            appId: 'helpdesk'
          }
        ]
      },
      {
        title: 'Teams',
        url: '/helpdesk/teams',
        contextId: 'services',
        appId: 'helpdesk',
      },
      {
        title: 'Knowledge Base',
        url: '/helpdesk/knowledge',
        contextId: 'services',
        appId: 'helpdesk',
        items: [
          {
            title: 'Articles',
            url: '/helpdesk/knowledge/articles',
            contextId: 'services',
            appId: 'helpdesk'
          },
          {
            title: 'Categories',
            url: '/helpdesk/knowledge/categories',
            contextId: 'services',
            appId: 'helpdesk'
          },
          {
            title: 'Search Analytics',
            url: '/helpdesk/knowledge/search',
            contextId: 'services',
            appId: 'helpdesk'
          }
        ]
      },
      {
        title: 'Reports',
        url: '/helpdesk/reports',
        contextId: 'services',
        appId: 'helpdesk',
      }
    ]
  },
  {
    title: 'Planning',
    url: '/apps/planning',
    icon: 'dashboard',
    shortcut: ['p', 'l'],
    contextId: 'services',
    appId: 'planning',
    priority: 74,
    items: [
      {
        title: 'Schedule',
        url: '/apps/planning?view=schedule',
        contextId: 'services',
        appId: 'planning',
      },
      {
        title: 'Resources',
        url: '/planning/resources',
        contextId: 'services',
        appId: 'planning',
        items: [
          {
            title: 'People',
            url: '/planning/resources/people',
            contextId: 'services',
            appId: 'planning'
          },
          {
            title: 'Equipment',
            url: '/planning/resources/equipment',
            contextId: 'services',
            appId: 'planning'
          },
          {
            title: 'Rooms',
            url: '/planning/resources/rooms',
            contextId: 'services',
            appId: 'planning'
          }
        ]
      },
      {
        title: 'Shifts',
        url: '/planning/shifts',
        contextId: 'services',
        appId: 'planning',
      },
      {
        title: 'Absences',
        url: '/planning/absences',
        contextId: 'services',
        appId: 'planning',
      },
      {
        title: 'Reports',
        url: '/planning/reports',
        contextId: 'services',
        appId: 'planning',
      }
    ]
  },
  {
    title: 'Appointments',
    url: '/apps/appointments',
    icon: 'dashboard',
    shortcut: ['a', 'p'],
    contextId: 'services',
    appId: 'appointments',
    priority: 75,
    items: [
      {
        title: 'Calendar',
        url: '/apps/appointments?view=calendar',
        contextId: 'services',
        appId: 'appointments',
      },
      {
        title: 'Schedule',
        url: '/appointments/schedule',
        contextId: 'services',
        appId: 'appointments',
      },
      {
        title: 'Reminders',
        url: '/appointments/reminders',
        contextId: 'services',
        appId: 'appointments',
      },
      {
        title: 'Resources',
        url: '/appointments/resources',
        contextId: 'services',
        appId: 'appointments',
        items: [
          {
            title: 'Staff',
            url: '/appointments/resources/staff',
            contextId: 'services',
            appId: 'appointments'
          },
          {
            title: 'Rooms',
            url: '/appointments/resources/rooms',
            contextId: 'services',
            appId: 'appointments'
          },
          {
            title: 'Equipment',
            url: '/appointments/resources/equipment',
            contextId: 'services',
            appId: 'appointments'
          }
        ]
      },
      {
        title: 'Reports',
        url: '/appointments/reports',
        contextId: 'services',
        appId: 'appointments',
      }
    ]
  }
];
