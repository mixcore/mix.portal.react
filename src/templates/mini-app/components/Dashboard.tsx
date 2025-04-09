'use client';

import React, { useState } from 'react';
import { 
  BarChart,
  Calendar, 
  Clock, 
  ListTodo, 
  Plus,
  Settings,
  Users
} from 'lucide-react';
import { getAppConfig } from '../app-loader';

interface DashboardProps {
  onItemClick: (itemId: string) => void;
}

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: React.ReactNode;
  color: string;
}

interface QuickAccessItemProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, description, icon, color }) => (
  <div className="flex flex-col space-y-3 bg-card p-6 rounded-lg border shadow-sm">
    <div className={`${color} rounded-full w-10 h-10 flex items-center justify-center`}>
      {icon}
    </div>
    <div>
      <p className="text-sm font-medium text-muted-foreground">{title}</p>
      <h3 className="text-2xl font-bold tracking-tight">{value}</h3>
      {description && <p className="text-xs text-muted-foreground">{description}</p>}
    </div>
  </div>
);

const QuickAccessItem: React.FC<QuickAccessItemProps> = ({ id, title, description, icon, onClick }) => (
  <button
    className="flex flex-col items-center p-4 rounded-lg border shadow-sm bg-card hover:bg-accent/50 transition-colors text-center"
    onClick={onClick}
  >
    <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-3">
      {icon}
    </div>
    <h3 className="font-medium text-sm">{title}</h3>
    <p className="text-xs text-muted-foreground mt-1">{description}</p>
  </button>
);

export function Dashboard({ onItemClick }: DashboardProps) {
  const appConfig = getAppConfig();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock data
  const stats = [
    { title: 'Total Items', value: 42, icon: <ListTodo className="h-5 w-5 text-white" />, color: 'bg-blue-500' },
    { title: 'Active Users', value: 18, icon: <Users className="h-5 w-5 text-white" />, color: 'bg-green-500' },
    { title: 'Avg. Completion Time', value: '2.4 days', icon: <Clock className="h-5 w-5 text-white" />, color: 'bg-amber-500' },
    { title: 'Upcoming Events', value: 7, icon: <Calendar className="h-5 w-5 text-white" />, color: 'bg-purple-500' }
  ];
  
  const quickAccess = [
    { 
      id: 'new-item', 
      title: 'Create New Item', 
      description: 'Add a new item to your list', 
      icon: <Plus className="h-6 w-6 text-primary" />,
      onClick: () => console.log('Create new item')
    },
    { 
      id: 'list-view', 
      title: 'View All Items', 
      description: 'See all your items in a list', 
      icon: <ListTodo className="h-6 w-6 text-primary" />,
      onClick: () => onItemClick('list')
    },
    { 
      id: 'stats', 
      title: 'Statistics', 
      description: 'View detailed analytics', 
      icon: <BarChart className="h-6 w-6 text-primary" />,
      onClick: () => console.log('Open statistics')
    },
    { 
      id: 'settings', 
      title: 'Settings', 
      description: 'Configure your preferences', 
      icon: <Settings className="h-6 w-6 text-primary" />,
      onClick: () => console.log('Open settings')
    }
  ];
  
  const recentItems = [
    { id: '1', title: 'Sample Item 1', lastModified: 'Today' },
    { id: '2', title: 'Sample Item 2', lastModified: 'Yesterday' },
    { id: '3', title: 'Sample Item 3', lastModified: '3 days ago' },
    { id: '4', title: 'Sample Item 4', lastModified: '1 week ago' }
  ];
  
  return (
    <div className="space-y-8">
      {/* Welcome header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Welcome to {appConfig.displayName}</h1>
        <p className="text-muted-foreground">
          This dashboard provides an overview of your items and quick access to common actions.
        </p>
      </div>
      
      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            color={stat.color}
          />
        ))}
      </div>
      
      {/* Quick access section */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Quick Access</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {quickAccess.map((item) => (
            <QuickAccessItem
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              icon={item.icon}
              onClick={item.onClick}
            />
          ))}
        </div>
      </div>
      
      {/* Recent items */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Recent Items</h2>
        <div className="bg-card border rounded-lg overflow-hidden">
          <div className="divide-y">
            {recentItems.map((item) => (
              <div 
                key={item.id}
                className="p-4 flex justify-between items-center hover:bg-accent/50 cursor-pointer transition-colors"
                onClick={() => onItemClick(item.id)}
              >
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <ListTodo className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-xs text-muted-foreground">Last modified: {item.lastModified}</p>
                  </div>
                </div>
                <button className="text-muted-foreground hover:text-foreground">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
          <div className="p-4 bg-muted/50 text-center">
            <button 
              className="text-sm text-primary font-medium hover:underline"
              onClick={() => onItemClick('list')}
            >
              View all items
            </button>
          </div>
        </div>
      </div>
      
      {/* App information */}
      <div className="bg-card border rounded-lg p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">{appConfig.displayName}</h2>
            <p className="text-sm text-muted-foreground mt-1">{appConfig.description}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
              Documentation
            </button>
            <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors">
              Get Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard; 