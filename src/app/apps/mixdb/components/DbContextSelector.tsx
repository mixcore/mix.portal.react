'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator 
} from '@/components/ui/dropdown-menu';
import { Check, ChevronDown, Database, Plus, Loader2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { DbContext, useDatabase } from '../contexts/DatabaseContext';
import DbContextService, { MixDbContext } from '../services/dbContextService';
import { useToast } from '@/components/ui/use-toast';

export function DbContextSelector() {
  const { activeDbContext, dbContexts, setActiveDbContext, refreshContexts, isLoading } = useDatabase();
  const { toast } = useToast();
  const [isNewConnectionOpen, setIsNewConnectionOpen] = useState(false);
  const [newConnection, setNewConnection] = useState({
    name: '',
    displayName: '',
    type: 'postgres' as string,
    connectionString: '',
    systemName: '',
    description: ''
  });

  // Refresh contexts when the component mounts
  useEffect(() => {
    refreshContexts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleContextChange = (contextId: number) => {
    setActiveDbContext(contextId);
  };

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
        setIsNewConnectionOpen(false);
        
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
        
        // Set the new context as active
        setActiveDbContext(response.data.id);
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

  return (
    <div className="db-context-selector">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2">
            <Database className="h-4 w-4" />
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Loading...</span>
              </>
            ) : activeDbContext ? (
              <>
                <span>{activeDbContext.name}</span>
                {activeDbContext.isDefault && (
                  <Badge variant="secondary" className="ml-1 text-xs px-1">Default</Badge>
                )}
              </>
            ) : (
              <span>No database contexts</span>
            )}
            <ChevronDown className="h-4 w-4 opacity-70" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-[240px]">
          <DropdownMenuLabel>Database Contexts</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {isLoading ? (
            <div className="flex items-center justify-center py-2">
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
              <span>Loading...</span>
            </div>
          ) : dbContexts.length > 0 ? (
            dbContexts.map(context => (
              <DropdownMenuItem 
                key={context.id}
                onClick={() => handleContextChange(context.id)}
                className="flex items-center justify-between gap-2 cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Database className="h-4 w-4 text-muted-foreground" />
                  <span>{context.name}</span>
                </div>
                {activeDbContext && context.id === activeDbContext.id && (
                  <Check className="h-4 w-4" />
                )}
              </DropdownMenuItem>
            ))
          ) : (
            <div className="px-2 py-1.5 text-sm">No database contexts found</div>
          )}
          <DropdownMenuSeparator />
          <Dialog open={isNewConnectionOpen} onOpenChange={setIsNewConnectionOpen}>
            <DialogTrigger asChild>
              <DropdownMenuItem onSelect={(e) => e.preventDefault()} className="gap-2 cursor-pointer">
                <Plus className="h-4 w-4" />
                <span>Add Connection</span>
              </DropdownMenuItem>
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
                <Button variant="outline" onClick={() => setIsNewConnectionOpen(false)} className="mr-2">
                  Cancel
                </Button>
                <Button onClick={handleAddConnection} disabled={!newConnection.name || !newConnection.connectionString}>
                  Add Connection
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
} 