'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';
import { Search, Plus, Edit, Trash2, Database, ExternalLink, RefreshCw } from 'lucide-react';
import { useDatabase } from '../contexts/DatabaseContext';
import DbContextService, { MixDbContext } from '../services/dbContextService';
import { ScrollArea } from '@/components/ui/scroll-area';

export interface MicroAppDbConfig {
  appId: string;
  displayName: string;
  icon: string;
  dbContextId: number;
}

export function DbContextSettings() {
  const { dbContexts, refreshContexts } = useDatabase();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [microApps, setMicroApps] = useState<MicroAppDbConfig[]>([]);
  const [isAppDbDialogOpen, setIsAppDbDialogOpen] = useState(false);
  const [selectedApp, setSelectedApp] = useState<MicroAppDbConfig | null>(null);
  const [selectedDbContextId, setSelectedDbContextId] = useState<number | null>(null);
  const [isNewContextOpen, setIsNewContextOpen] = useState(false);
  const [newConnection, setNewConnection] = useState({
    name: '',
    displayName: '',
    type: 'postgres' as string,
    connectionString: '',
    systemName: '',
    description: ''
  });

  // Fetch micro-apps list
  useEffect(() => {
    fetchMicroApps();
  }, []);

  const fetchMicroApps = async () => {
    setIsLoading(true);
    try {
      // Mock data for now - in a real implementation, this would call an API
      // to get the list of micro-apps that can use MixDB
      const mockMicroApps: MicroAppDbConfig[] = [
        { appId: 'blog', displayName: 'Blog', icon: 'file-text', dbContextId: 1 },
        { appId: 'shop', displayName: 'Shop', icon: 'shopping-bag', dbContextId: 2 },
        { appId: 'crm', displayName: 'CRM', icon: 'users', dbContextId: 1 },
        { appId: 'analytics', displayName: 'Analytics', icon: 'bar-chart', dbContextId: 3 },
        { appId: 'forms', displayName: 'Forms', icon: 'clipboard', dbContextId: 1 },
      ];
      
      setMicroApps(mockMicroApps);
    } catch (error) {
      console.error('Error fetching micro-apps:', error);
      toast({
        title: 'Error',
        description: 'Failed to load micro-apps list',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const filteredDbContexts = dbContexts.filter(context => 
    context.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredMicroApps = microApps.filter(app => 
    app.displayName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddConnection = async () => {
    try {
      // Prepare the new context data
      const newContextData: Partial<MixDbContext> = {
        name: newConnection.name,
        displayName: newConnection.displayName || newConnection.name,
        systemName: newConnection.systemName || newConnection.name.toLowerCase().replace(/\s+/g, '-'),
        type: newConnection.type,
        connectionString: newConnection.connectionString,
        description: newConnection.description,
        status: 'Published'
      };
      
      const response = await DbContextService.create(newContextData);
      
      if (response.isSuccessful && response.data) {
        setIsNewContextOpen(false);
        
        toast({
          title: "Success",
          description: "Database connection added successfully",
        });
        
        // Reset form
        setNewConnection({
          name: '',
          displayName: '',
          type: 'postgres',
          connectionString: '',
          systemName: '',
          description: ''
        });
        
        // Refresh the contexts list to include the new one
        refreshContexts();
      } else {
        toast({
          title: "Error creating database connection",
          description: response.errors?.join(', ') || 'Failed to create connection',
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Failed to create database connection:', error);
      toast({
        title: "Error",
        description: "Failed to create database connection",
        variant: "destructive"
      });
    }
  };

  const openAppDbDialog = (app: MicroAppDbConfig) => {
    setSelectedApp(app);
    setSelectedDbContextId(app.dbContextId);
    setIsAppDbDialogOpen(true);
  };

  const saveAppDbContext = async () => {
    if (!selectedApp || !selectedDbContextId) return;
    
    setIsLoading(true);
    try {
      // In a real implementation, this would call an API to update the micro-app's DB context
      // For now, we just update the local state
      const updatedApps = microApps.map(app => 
        app.appId === selectedApp.appId 
          ? { ...app, dbContextId: selectedDbContextId } 
          : app
      );
      
      setMicroApps(updatedApps);
      setIsAppDbDialogOpen(false);
      
      toast({
        title: 'Success',
        description: `Database context for ${selectedApp.displayName} has been updated`,
      });
    } catch (error) {
      console.error('Error updating app DB context:', error);
      toast({
        title: 'Error',
        description: 'Failed to update database context for the app',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getDbContextName = (contextId: number) => {
    const context = dbContexts.find(ctx => ctx.id === contextId);
    return context ? context.name : 'Unknown';
  };

  const getDbTypeName = (type: string) => {
    switch (type) {
      case 'postgres': return 'PostgreSQL';
      case 'mysql': return 'MySQL';
      case 'mssql': return 'SQL Server';
      case 'sqlite': return 'SQLite';
      case 'oracle': return 'Oracle';
      case 'mongodb': return 'MongoDB';
      default: return type;
    }
  };

  const getIconForApp = (iconName: string) => {
    // This is a simplified version - in a real implementation you'd use your icon system
    switch (iconName) {
      case 'file-text': return <span>📄</span>;
      case 'shopping-bag': return <span>🛍️</span>;
      case 'users': return <span>👥</span>;
      case 'bar-chart': return <span>📊</span>;
      case 'clipboard': return <span>📋</span>;
      default: return <span>📱</span>;
    }
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Database Context Settings</CardTitle>
          <CardDescription>
            Manage database connections for your Mixcore micro-apps
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="microapps" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="microapps">Micro-App Connections</TabsTrigger>
              <TabsTrigger value="contexts">Database Contexts</TabsTrigger>
            </TabsList>
            
            <TabsContent value="microapps">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="relative w-64">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search micro-apps..."
                      className="pl-8"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => refreshContexts()}
                    disabled={isLoading}
                  >
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Refresh
                  </Button>
                </div>
                
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[50px]"></TableHead>
                        <TableHead>App Name</TableHead>
                        <TableHead>Database Context</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {isLoading ? (
                        <TableRow>
                          <TableCell colSpan={4} className="text-center py-4">
                            <div className="flex justify-center items-center">
                              <RefreshCw className="h-4 w-4 animate-spin mr-2" />
                              <span>Loading...</span>
                            </div>
                          </TableCell>
                        </TableRow>
                      ) : filteredMicroApps.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={4} className="text-center py-4">
                            No micro-apps found
                          </TableCell>
                        </TableRow>
                      ) : (
                        filteredMicroApps.map((app) => (
                          <TableRow key={app.appId}>
                            <TableCell>
                              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10">
                                {getIconForApp(app.icon)}
                              </div>
                            </TableCell>
                            <TableCell className="font-medium">
                              {app.displayName}
                              <div className="text-xs text-muted-foreground">
                                ID: {app.appId}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Database className="h-4 w-4 text-muted-foreground" />
                                <span>{getDbContextName(app.dbContextId)}</span>
                              </div>
                            </TableCell>
                            <TableCell className="text-right">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => openAppDbDialog(app)}
                              >
                                <Edit className="h-4 w-4 mr-2" />
                                Change
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="contexts">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="relative w-64">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search contexts..."
                      className="pl-8"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-2">
                    <Dialog open={isNewContextOpen} onOpenChange={setIsNewContextOpen}>
                      <DialogTrigger asChild>
                        <Button size="sm">
                          <Plus className="h-4 w-4 mr-2" />
                          Add Context
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Add Database Connection</DialogTitle>
                          <DialogDescription>
                            Create a new database connection to manage multiple data sources.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                              Name
                            </Label>
                            <Input
                              id="name"
                              value={newConnection.name}
                              onChange={(e) => setNewConnection({...newConnection, name: e.target.value})}
                              className="col-span-3"
                              placeholder="Production Database"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="displayName" className="text-right">
                              Display Name
                            </Label>
                            <Input
                              id="displayName"
                              value={newConnection.displayName}
                              onChange={(e) => setNewConnection({...newConnection, displayName: e.target.value})}
                              className="col-span-3"
                              placeholder="My Production DB"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="type" className="text-right">
                              Type
                            </Label>
                            <select 
                              id="type"
                              value={newConnection.type}
                              onChange={(e) => setNewConnection({...newConnection, type: e.target.value})}
                              className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                              <option value="postgres">PostgreSQL</option>
                              <option value="mysql">MySQL</option>
                              <option value="mssql">SQL Server</option>
                              <option value="sqlite">SQLite</option>
                              <option value="oracle">Oracle</option>
                              <option value="mongodb">MongoDB</option>
                            </select>
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="connection" className="text-right">
                              Connection
                            </Label>
                            <Input
                              id="connection"
                              value={newConnection.connectionString}
                              onChange={(e) => setNewConnection({...newConnection, connectionString: e.target.value})}
                              className="col-span-3"
                              placeholder="postgresql://user:password@localhost:5432/db"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right">
                              Description
                            </Label>
                            <Input
                              id="description"
                              value={newConnection.description}
                              onChange={(e) => setNewConnection({...newConnection, description: e.target.value})}
                              className="col-span-3"
                              placeholder="Optional description"
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button variant="outline" onClick={() => setIsNewContextOpen(false)} className="mr-2">
                            Cancel
                          </Button>
                          <Button onClick={handleAddConnection} disabled={!newConnection.name || !newConnection.connectionString}>
                            Add Connection
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => refreshContexts()}
                      disabled={isLoading}
                    >
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Refresh
                    </Button>
                  </div>
                </div>
                
                <ScrollArea className="h-[500px] rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {isLoading ? (
                        <TableRow>
                          <TableCell colSpan={4} className="text-center py-4">
                            <div className="flex justify-center items-center">
                              <RefreshCw className="h-4 w-4 animate-spin mr-2" />
                              <span>Loading...</span>
                            </div>
                          </TableCell>
                        </TableRow>
                      ) : filteredDbContexts.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={4} className="text-center py-4">
                            No database contexts found
                          </TableCell>
                        </TableRow>
                      ) : (
                        filteredDbContexts.map((context) => (
                          <TableRow key={context.id}>
                            <TableCell className="font-medium">
                              <div className="flex items-center gap-2">
                                <Database className="h-4 w-4 text-muted-foreground" />
                                <span>{context.name}</span>
                                {context.isDefault && (
                                  <Badge variant="secondary" className="ml-1 text-xs px-1">Default</Badge>
                                )}
                              </div>
                            </TableCell>
                            <TableCell>{getDbTypeName(context.type)}</TableCell>
                            <TableCell>
                              <Badge variant={context.status === 'connected' ? 'outline' : 'destructive'} className="flex items-center gap-1 w-fit">
                                <span className={`h-2 w-2 rounded-full ${context.status === 'connected' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                {context.status === 'connected' ? 'Connected' : 'Disconnected'}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end gap-2">
                                <Button variant="ghost" size="sm">
                                  <Edit className="h-4 w-4" />
                                  <span className="sr-only">Edit</span>
                                </Button>
                                <Button variant="ghost" size="sm" className="text-destructive">
                                  <Trash2 className="h-4 w-4" />
                                  <span className="sr-only">Delete</span>
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </ScrollArea>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="border-t pt-6">
          <p className="text-sm text-muted-foreground">
            Each micro-app can be configured to use a specific database context. This helps organize your data and keep it separated between different applications.
          </p>
        </CardFooter>
      </Card>
      
      <Dialog open={isAppDbDialogOpen} onOpenChange={setIsAppDbDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Change Database Context</DialogTitle>
            <DialogDescription>
              {selectedApp && `Select which database context to use for ${selectedApp.displayName}`}
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="db-context">Database Context</Label>
                <Select 
                  value={selectedDbContextId?.toString()} 
                  onValueChange={(value) => setSelectedDbContextId(parseInt(value))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a database context" />
                  </SelectTrigger>
                  <SelectContent>
                    {dbContexts.map(context => (
                      <SelectItem key={context.id} value={context.id.toString()}>
                        <div className="flex items-center gap-2">
                          <Database className="h-4 w-4" />
                          <span>{context.name}</span>
                          {context.isDefault && (
                            <Badge variant="secondary" className="ml-1 text-xs px-1">Default</Badge>
                          )}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAppDbDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={saveAppDbContext} disabled={!selectedDbContextId}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
} 