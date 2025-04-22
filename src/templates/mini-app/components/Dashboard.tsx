'use client';

import React, { useState } from 'react';
import { 
  BarChart,
  Calendar, 
  Clock, 
  ListTodo, 
  Plus,
  Settings,
  Users,
  ChevronRight
} from 'lucide-react';
import { getAppConfig } from '../app-loader';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

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
  <Card>
    <CardContent className="pt-6">
      <div className="flex flex-col space-y-3">
        <div className={`${color} rounded-full w-10 h-10 flex items-center justify-center`}>
          {icon}
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold tracking-tight">{value}</h3>
          {description && <p className="text-xs text-muted-foreground">{description}</p>}
        </div>
      </div>
    </CardContent>
  </Card>
);

const QuickAccessItem: React.FC<QuickAccessItemProps> = ({ id, title, description, icon, onClick }) => (
  <Card className="overflow-hidden h-full">
    <button
      className="h-full w-full text-left"
      onClick={onClick}
    >
      <CardHeader className="pb-2">
        <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-2">
          {icon}
        </div>
        <CardTitle className="text-base">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </button>
  </Card>
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
      onClick: () => onItemClick('list')
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
    { id: '1', title: 'Sample Item 1', lastModified: 'Today', status: 'active' },
    { id: '2', title: 'Sample Item 2', lastModified: 'Yesterday', status: 'draft' },
    { id: '3', title: 'Sample Item 3', lastModified: '3 days ago', status: 'active' },
    { id: '4', title: 'Sample Item 4', lastModified: '1 week ago', status: 'archived' }
  ];
  
  return (
    <div className="space-y-8 flex flex-col flex-grow">
      {/* Welcome header */}
      <div className="space-y-2 pb-4 border-b section-divider">
        <h1 className="text-3xl font-bold tracking-tight">Welcome to {appConfig.displayName}</h1>
        <p className="text-muted-foreground">
          This dashboard provides an overview of your items and quick access to common actions.
        </p>
      </div>
      
      {/* Top level tabs */}
      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-2 md:grid-cols-3 h-auto">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-8 mt-6">
          {/* Stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-6 border-b section-divider">
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
          <div className="space-y-4 pb-6 border-b section-divider">
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
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold tracking-tight">Recent Items</h2>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => onItemClick('list')}
                className="text-sm text-primary"
              >
                View all
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
            <Card className="border">
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
                        <div className="flex items-center">
                          <p className="font-medium">{item.title}</p>
                          <Badge 
                            variant={item.status === 'active' ? 'default' : 
                                   item.status === 'draft' ? 'secondary' : 'outline'} 
                            className="ml-2 text-xs"
                          >
                            {item.status}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">Last modified: {item.lastModified}</p>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="analytics" className="mt-6">
          <Card className="border">
            <CardHeader className="border-b">
              <CardTitle>Analytics</CardTitle>
              <CardDescription>View detailed analytics for your items and usage</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-muted-foreground">Analytics content will appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings" className="mt-6">
          <Card className="border">
            <CardHeader className="border-b">
              <CardTitle>Settings</CardTitle>
              <CardDescription>Configure your app preferences</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-muted-foreground">Settings content will appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      {/* App information */}
      <Card className="border mt-8">
        <CardHeader className="border-b">
          <CardTitle>{appConfig.displayName}</CardTitle>
          <CardDescription>{appConfig.description}</CardDescription>
        </CardHeader>
        <CardFooter className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-6">
          <div className="text-sm text-muted-foreground">
            Version {appConfig.version}
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="default" size="sm">
              Documentation
            </Button>
            <Button variant="outline" size="sm">
              Get Support
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Dashboard; 