'use client';

import React, { useState } from 'react';
import { 
  BarChart,
  Calendar,
  Clock,
  Workflow,
  Plus,
  Settings,
  History,
  ChevronRight,
  Play,
  AlertTriangle,
  CheckCircle2,
  FileCode2,
  Activity
} from 'lucide-react';
import { getAppConfig } from '../app-loader';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

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
  
  // Mock data for Automation App
  const stats = [
    { title: 'Active Workflows', value: 8, icon: <Workflow className="h-5 w-5 text-white" />, color: 'bg-blue-500' },
    { title: 'Executions Today', value: 124, icon: <Play className="h-5 w-5 text-white" />, color: 'bg-green-500' },
    { title: 'Success Rate', value: '94.2%', icon: <CheckCircle2 className="h-5 w-5 text-white" />, color: 'bg-emerald-500' },
    { title: 'Failed Executions', value: 7, icon: <AlertTriangle className="h-5 w-5 text-white" />, color: 'bg-red-500' }
  ];
  
  const quickAccess = [
    { 
      id: 'new-workflow', 
      title: 'Create Workflow', 
      description: 'Build a new automation workflow', 
      icon: <Workflow className="h-6 w-6 text-primary" />,
      onClick: () => onItemClick('new-workflow')
    },
    { 
      id: 'new-rule', 
      title: 'Create Rule', 
      description: 'Define a new automation rule', 
      icon: <FileCode2 className="h-6 w-6 text-primary" />,
      onClick: () => onItemClick('new-rule')
    },
    { 
      id: 'logs', 
      title: 'Execution Logs', 
      description: 'View execution history', 
      icon: <History className="h-6 w-6 text-primary" />,
      onClick: () => onItemClick('logs')
    },
    { 
      id: 'monitor', 
      title: 'Monitoring', 
      description: 'Monitor automation performance', 
      icon: <Activity className="h-6 w-6 text-primary" />,
      onClick: () => onItemClick('monitor')
    }
  ];
  
  const recentWorkflows = [
    { id: 'wf_001', title: 'New Content Notification', lastRun: '2 hours ago', status: 'active', success: true },
    { id: 'wf_002', title: 'User Registration Follow-up', lastRun: '1 day ago', status: 'active', success: true },
    { id: 'wf_003', title: 'Database Backup', lastRun: '3 days ago', status: 'active', success: true },
    { id: 'wf_004', title: 'Order Processing', lastRun: 'Never', status: 'draft', success: null }
  ];
  
  const scheduledWorkflows = [
    { id: 'wf_003', title: 'Database Backup', schedule: 'Daily at 12:00 AM', nextRun: 'Today, 12:00 AM' },
    { id: 'wf_005', title: 'Weekly Report', schedule: 'Monday at 8:00 AM', nextRun: 'May 15, 8:00 AM' },
    { id: 'wf_006', title: 'Cleanup Old Data', schedule: 'First day of month', nextRun: 'Jun 1, 12:00 AM' }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome header */}
      <div className="space-y-2 pb-4 border-b section-divider">
        <h1 className="text-3xl font-bold tracking-tight">Automation Dashboard</h1>
        <p className="text-muted-foreground">
          Create, manage and monitor automated workflows and rules to streamline your processes.
        </p>
      </div>
      
      {/* Top level tabs */}
      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-3 md:grid-cols-4 h-auto">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="workflows">Workflows</TabsTrigger>
          <TabsTrigger value="rules">Rules</TabsTrigger>
          <TabsTrigger value="logs">Logs</TabsTrigger>
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
          
          {/* Recent workflows */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold tracking-tight">Recent Workflows</h2>
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
                {recentWorkflows.map((workflow) => (
                  <div 
                    key={workflow.id}
                    className="p-4 flex justify-between items-center hover:bg-accent/50 cursor-pointer transition-colors"
                    onClick={() => onItemClick(workflow.id)}
                  >
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <Workflow className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center">
                          <p className="font-medium">{workflow.title}</p>
                          <Badge 
                            variant={workflow.status === 'active' ? 'default' : 
                                   workflow.status === 'draft' ? 'secondary' : 'outline'} 
                            className="ml-2 text-xs"
                          >
                            {workflow.status}
                          </Badge>
                          {workflow.success !== null && (
                            <Badge 
                              variant={workflow.success ? 'default' : 'destructive'} 
                              className={`ml-2 text-xs ${workflow.success ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : ''}`}
                            >
                              {workflow.success ? 'success' : 'failed'}
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {workflow.lastRun === 'Never' ? 'Never executed' : `Last executed: ${workflow.lastRun}`}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="mr-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          console.log(`Run workflow ${workflow.id}`);
                        }}
                      >
                        <Play className="h-4 w-4" />
                      </Button>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Scheduled workflows */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight">Upcoming Scheduled Workflows</h2>
            <Card className="border">
              <div className="divide-y">
                {scheduledWorkflows.map((workflow) => (
                  <div 
                    key={workflow.id}
                    className="p-4 flex justify-between items-center hover:bg-accent/50 cursor-pointer transition-colors"
                    onClick={() => onItemClick(workflow.id)}
                  >
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{workflow.title}</p>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1 text-muted-foreground" />
                          <p className="text-xs text-muted-foreground">{workflow.schedule}</p>
                        </div>
                        <p className="text-xs text-primary">Next run: {workflow.nextRun}</p>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="workflows" className="mt-6">
          <Card className="border">
            <CardHeader className="border-b">
              <CardTitle>Workflows</CardTitle>
              <CardDescription>
                Create, manage, and monitor workflows that automate tasks across your Mixcore instance.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Workflow Status</h3>
                <Button onClick={() => onItemClick('new-workflow')}>
                  <Plus className="h-4 w-4 mr-2" /> New Workflow
                </Button>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Active</span>
                  <span>8</span>
                </div>
                <Progress value={80} className="h-2" />
                
                <div className="flex justify-between items-center">
                  <span className="font-medium">Draft</span>
                  <span>2</span>
                </div>
                <Progress value={20} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="rules" className="mt-6">
          <Card className="border">
            <CardHeader className="border-b">
              <CardTitle>Automation Rules</CardTitle>
              <CardDescription>
                Create and manage conditional rules that trigger actions automatically.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Rule Status</h3>
                <Button onClick={() => onItemClick('new-rule')}>
                  <Plus className="h-4 w-4 mr-2" /> New Rule
                </Button>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Active</span>
                  <span>5</span>
                </div>
                <Progress value={71} className="h-2" />
                
                <div className="flex justify-between items-center">
                  <span className="font-medium">Draft</span>
                  <span>2</span>
                </div>
                <Progress value={29} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="logs" className="mt-6">
          <Card className="border">
            <CardHeader className="border-b">
              <CardTitle>Execution Logs</CardTitle>
              <CardDescription>View and analyze automation execution history</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Recent Executions</h3>
                <Button variant="outline" onClick={() => onItemClick('logs')}>
                  View All Logs
                </Button>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-md">
                  <div className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 mr-2" />
                    <div>
                      <p className="font-medium">Database Backup</p>
                      <p className="text-xs text-muted-foreground">Today at 12:00 AM</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300">
                    Success
                  </Badge>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-md">
                  <div className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 mr-2" />
                    <div>
                      <p className="font-medium">New Content Notification</p>
                      <p className="text-xs text-muted-foreground">Today at 10:15 AM</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300">
                    Success
                  </Badge>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-red-50 dark:bg-red-900/20 rounded-md">
                  <div className="flex items-center">
                    <AlertTriangle className="h-4 w-4 text-red-600 dark:text-red-400 mr-2" />
                    <div>
                      <p className="font-medium">Order Processing</p>
                      <p className="text-xs text-muted-foreground">Today at 11:30 AM</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300">
                    Failed
                  </Badge>
                </div>
              </div>
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
        <CardContent className="py-4">
          <div className="text-sm text-muted-foreground">
            <p>Version: {appConfig.version}</p>
            <p>Author: {appConfig.author.name}</p>
          </div>
        </CardContent>
        <CardFooter className="bg-muted/50 border-t">
          <p className="text-xs text-muted-foreground">
            Need help? Check out the <a href="#" className="text-primary hover:underline">documentation</a> or contact support.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Dashboard; 