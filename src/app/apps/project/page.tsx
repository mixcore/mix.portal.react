'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import {
  LayoutDashboard,
  CheckSquare,
  Calendar,
  Users,
  FolderKanban,
  FileText,
  Clock,
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  FileSpreadsheet,
  Download,
  Bell,
  Flag,
  AlertCircle,
  CheckCircle,
  ClockIcon,
  PauseCircle
} from 'lucide-react';

// Sample data
const projects = [
  { 
    id: 'PRJ-001', 
    name: 'Website Redesign', 
    client: 'Acme Corp', 
    status: 'in-progress', 
    progress: 65, 
    dueDate: '2023-10-15', 
    assignedTo: [
      { id: '1', name: 'Emma Wilson', avatar: '/avatars/emma.png' },
      { id: '2', name: 'Alex Smith', avatar: '/avatars/alex.png' },
      { id: '3', name: 'Taylor Brown', avatar: '/avatars/taylor.png' }
    ]
  },
  { 
    id: 'PRJ-002', 
    name: 'Mobile App Development', 
    client: 'TechStart Inc', 
    status: 'on-hold', 
    progress: 35, 
    dueDate: '2023-11-30', 
    assignedTo: [
      { id: '2', name: 'Alex Smith', avatar: '/avatars/alex.png' },
      { id: '4', name: 'Jordan Lee', avatar: '/avatars/jordan.png' }
    ]
  },
  { 
    id: 'PRJ-003', 
    name: 'CRM Implementation', 
    client: 'Global Services', 
    status: 'completed', 
    progress: 100, 
    dueDate: '2023-08-20', 
    assignedTo: [
      { id: '1', name: 'Emma Wilson', avatar: '/avatars/emma.png' },
      { id: '5', name: 'Robin Chen', avatar: '/avatars/robin.png' }
    ]
  },
  { 
    id: 'PRJ-004', 
    name: 'Brand Identity Development', 
    client: 'Startup XYZ', 
    status: 'planned', 
    progress: 0, 
    dueDate: '2023-12-10', 
    assignedTo: [
      { id: '3', name: 'Taylor Brown', avatar: '/avatars/taylor.png' }
    ]
  },
  { 
    id: 'PRJ-005', 
    name: 'E-commerce Platform Upgrade', 
    client: 'Fashion Outlet', 
    status: 'in-progress', 
    progress: 45, 
    dueDate: '2023-10-30', 
    assignedTo: [
      { id: '4', name: 'Jordan Lee', avatar: '/avatars/jordan.png' },
      { id: '1', name: 'Emma Wilson', avatar: '/avatars/emma.png' }
    ]
  }
];

const tasks = [
  { id: 'TSK-001', name: 'Design homepage wireframes', project: 'PRJ-001', status: 'completed', priority: 'high', assignee: { id: '1', name: 'Emma Wilson', avatar: '/avatars/emma.png' }, dueDate: '2023-09-10' },
  { id: 'TSK-002', name: 'Develop authentication module', project: 'PRJ-002', status: 'in-progress', priority: 'high', assignee: { id: '2', name: 'Alex Smith', avatar: '/avatars/alex.png' }, dueDate: '2023-10-05' },
  { id: 'TSK-003', name: 'Create product catalog pages', project: 'PRJ-005', status: 'in-progress', priority: 'medium', assignee: { id: '4', name: 'Jordan Lee', avatar: '/avatars/jordan.png' }, dueDate: '2023-10-15' },
  { id: 'TSK-004', name: 'Test checkout flow', project: 'PRJ-005', status: 'planned', priority: 'medium', assignee: { id: '1', name: 'Emma Wilson', avatar: '/avatars/emma.png' }, dueDate: '2023-10-20' },
  { id: 'TSK-005', name: 'Implement payment gateway', project: 'PRJ-002', status: 'on-hold', priority: 'high', assignee: { id: '2', name: 'Alex Smith', avatar: '/avatars/alex.png' }, dueDate: '2023-11-15' },
  { id: 'TSK-006', name: 'Create logo variations', project: 'PRJ-004', status: 'planned', priority: 'low', assignee: { id: '3', name: 'Taylor Brown', avatar: '/avatars/taylor.png' }, dueDate: '2023-12-01' },
  { id: 'TSK-007', name: 'Set up analytics', project: 'PRJ-001', status: 'completed', priority: 'low', assignee: { id: '5', name: 'Robin Chen', avatar: '/avatars/robin.png' }, dueDate: '2023-09-20' }
];

export default function ProjectApp() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');

  // Get status badge variant and icon
  const getStatusInfo = (status: string): { variant: 'default' | 'secondary' | 'outline' | 'destructive'; icon: React.ReactNode } => {
    switch(status) {
      case 'completed':
        return { variant: 'default', icon: <CheckCircle className="h-4 w-4 mr-1" /> };
      case 'in-progress':
        return { variant: 'secondary', icon: <ClockIcon className="h-4 w-4 mr-1" /> };
      case 'on-hold':
        return { variant: 'outline', icon: <PauseCircle className="h-4 w-4 mr-1" /> };
      case 'planned':
        return { variant: 'secondary', icon: <Calendar className="h-4 w-4 mr-1" /> };
      default:
        return { variant: 'outline', icon: null };
    }
  };

  // Get priority badge variant and color
  const getPriorityInfo = (priority: string): { variant: 'default' | 'secondary' | 'outline' | 'destructive'; color: string } => {
    switch(priority) {
      case 'high':
        return { variant: 'destructive', color: 'text-destructive' };
      case 'medium':
        return { variant: 'secondary', color: 'text-orange-500' };
      case 'low':
        return { variant: 'outline', color: 'text-slate-500' };
      default:
        return { variant: 'outline', color: 'text-slate-500' };
    }
  };

  // Filter projects/tasks based on search query
  const filteredProjects = projects.filter(project => 
    project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTasks = tasks.filter(task => 
    task.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    projects.find(p => p.id === task.project)?.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-full flex flex-col">
      <div className="flex-grow p-6 space-y-6 overflow-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Project Management</h1>
          <div className="flex gap-2">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Project
            </Button>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search projects or tasks..." 
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList>
            <TabsTrigger value="dashboard" className="flex items-center gap-1">
              <LayoutDashboard className="h-4 w-4" />
              <span>Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center gap-1">
              <FolderKanban className="h-4 w-4" />
              <span>Projects</span>
            </TabsTrigger>
            <TabsTrigger value="tasks" className="flex items-center gap-1">
              <CheckSquare className="h-4 w-4" />
              <span>Tasks</span>
            </TabsTrigger>
            <TabsTrigger value="team" className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>Team</span>
            </TabsTrigger>
            <TabsTrigger value="calendar" className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>Calendar</span>
            </TabsTrigger>
            <TabsTrigger value="reports" className="flex items-center gap-1">
              <FileSpreadsheet className="h-4 w-4" />
              <span>Reports</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="dashboard" className="mt-6">
            <div className="grid gap-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Total Projects</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <FolderKanban className="h-5 w-5 mr-3 text-primary" />
                      <p className="text-2xl font-bold">12</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">3 new this month</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Open Tasks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <CheckSquare className="h-5 w-5 mr-3 text-blue-500" />
                      <p className="text-2xl font-bold">43</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">15 due this week</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Overdue Tasks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <AlertCircle className="h-5 w-5 mr-3 text-destructive" />
                      <p className="text-2xl font-bold">7</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">2 critically delayed</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Hours Logged</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-3 text-green-500" />
                      <p className="text-2xl font-bold">187</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">This week</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Project Status</CardTitle>
                    <CardDescription>Overview of active projects</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {filteredProjects.slice(0, 3).map(project => (
                        <div key={project.id} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="font-medium">{project.name}</h3>
                              <p className="text-sm text-muted-foreground">{project.client}</p>
                            </div>
                            <Badge variant={getStatusInfo(project.status).variant} className="flex items-center">
                              {getStatusInfo(project.status).icon}
                              {project.status.replace('-', ' ')}
                            </Badge>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <div className="flex -space-x-1">
                              {project.assignedTo.map(user => (
                                <Avatar key={user.id} className="h-6 w-6 border-2 border-background">
                                  <AvatarImage src={user.avatar} alt={user.name} />
                                  <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
                                </Avatar>
                              ))}
                            </div>
                            <span className="text-muted-foreground">Due: {project.dueDate}</span>
                          </div>
                          <div>
                            <div className="flex justify-between items-center text-sm mb-1">
                              <span>Progress</span>
                              <span>{project.progress}%</span>
                            </div>
                            <Progress value={project.progress} className="h-2" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" onClick={() => setActiveTab('projects')}>
                      View All Projects
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Deadlines</CardTitle>
                    <CardDescription>Tasks due soon</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {filteredTasks.slice(0, 5).map(task => (
                        <div key={task.id} className="flex justify-between items-start pb-4 last:pb-0 border-b last:border-0">
                          <div>
                            <h4 className="font-medium text-sm">{task.name}</h4>
                            <p className="text-xs text-muted-foreground">{projects.find(p => p.id === task.project)?.name}</p>
                            <div className="flex items-center mt-1">
                              <Avatar className="h-5 w-5 mr-1">
                                <AvatarImage src={task.assignee.avatar} alt={task.assignee.name} />
                                <AvatarFallback>{task.assignee.name.substring(0, 2)}</AvatarFallback>
                              </Avatar>
                              <span className="text-xs">{task.dueDate}</span>
                            </div>
                          </div>
                          <Badge variant={getPriorityInfo(task.priority).variant} className="capitalize">
                            {task.priority}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" onClick={() => setActiveTab('tasks')}>
                      View All Tasks
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="projects" className="mt-6">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-center">
                  <CardTitle>All Projects</CardTitle>
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    New Project
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Project Name</TableHead>
                      <TableHead>Client</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Team</TableHead>
                      <TableHead>Progress</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredProjects.map(project => (
                      <TableRow key={project.id}>
                        <TableCell className="font-medium">
                          <div className="flex flex-col">
                            {project.name}
                            <span className="text-xs text-muted-foreground">{project.id}</span>
                          </div>
                        </TableCell>
                        <TableCell>{project.client}</TableCell>
                        <TableCell>
                          <Badge variant={getStatusInfo(project.status).variant} className="flex items-center capitalize">
                            {getStatusInfo(project.status).icon}
                            {project.status.replace('-', ' ')}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex -space-x-1">
                            {project.assignedTo.map(user => (
                              <Avatar key={user.id} className="h-6 w-6 border-2 border-background">
                                <AvatarImage src={user.avatar} alt={user.name} />
                                <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
                              </Avatar>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={project.progress} className="h-2 w-24" />
                            <span className="text-sm">{project.progress}%</span>
                          </div>
                        </TableCell>
                        <TableCell>{project.dueDate}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                    {filteredProjects.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center py-6 text-muted-foreground">
                          No projects found.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="tasks" className="mt-6">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-center">
                  <CardTitle>All Tasks</CardTitle>
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Task
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Task</TableHead>
                      <TableHead>Project</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Assignee</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredTasks.map(task => (
                      <TableRow key={task.id}>
                        <TableCell className="font-medium">
                          <div className="flex flex-col">
                            {task.name}
                            <span className="text-xs text-muted-foreground">{task.id}</span>
                          </div>
                        </TableCell>
                        <TableCell>{projects.find(p => p.id === task.project)?.name}</TableCell>
                        <TableCell>
                          <Badge variant={getStatusInfo(task.status).variant} className="flex items-center capitalize">
                            {getStatusInfo(task.status).icon}
                            {task.status.replace('-', ' ')}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={getPriorityInfo(task.priority).variant} className="capitalize">
                            {task.priority}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={task.assignee.avatar} alt={task.assignee.name} />
                              <AvatarFallback>{task.assignee.name.substring(0, 2)}</AvatarFallback>
                            </Avatar>
                            <span className="text-sm">{task.assignee.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>{task.dueDate}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                    {filteredTasks.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center py-6 text-muted-foreground">
                          No tasks found.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="team" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Team Management</CardTitle>
                <CardDescription>View and manage team members</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border p-8 text-center rounded-md bg-muted/30">
                  <Users className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  <h3 className="text-lg font-medium">Team Members</h3>
                  <p className="text-muted-foreground">View and manage your team's workload and assignments</p>
                  <Button className="mt-4">View Team</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="calendar" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Project Calendar</CardTitle>
                <CardDescription>View deadlines and schedules</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border p-8 text-center rounded-md bg-muted/30">
                  <Calendar className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  <h3 className="text-lg font-medium">Project Timeline</h3>
                  <p className="text-muted-foreground">View project schedules and deadlines</p>
                  <Button className="mt-4">View Calendar</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reports" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Project Reports</CardTitle>
                <CardDescription>Generate and view project reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border p-8 text-center rounded-md bg-muted/30">
                  <FileSpreadsheet className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  <h3 className="text-lg font-medium">Generate Reports</h3>
                  <p className="text-muted-foreground">Create detailed reports on project progress and resource allocation</p>
                  <Button className="mt-4">Generate Report</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 