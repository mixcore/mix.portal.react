'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import DbContextService, { MixDbContext } from '../services/dbContextService';
import { toast } from '@/components/ui/use-toast';

// Define the UI context interface
export interface DbContext {
  id: number;
  name: string;
  type: 'postgres' | 'mysql' | 'mssql' | 'sqlite' | 'oracle' | 'mongodb';
  isDefault?: boolean;
  status: 'connected' | 'disconnected' | 'error';
}

// Map API context data to UI context data
function mapApiContextToUiContext(apiContext: MixDbContext): DbContext {
  return {
    id: apiContext.id,
    name: apiContext.displayName || apiContext.name,
    type: apiContext.type.toLowerCase() as any,
    isDefault: apiContext.isSystem || false,
    status: apiContext.status === 'Published' ? 'connected' : 'disconnected',
  };
}

interface DatabaseContextType {
  activeDbContext: DbContext;
  dbContexts: DbContext[];
  setActiveDbContext: (contextId: number) => Promise<void>;
  addDbContext: (dbContext: Omit<DbContext, 'id'>) => Promise<number>;
  removeDbContext: (contextId: number) => Promise<boolean>;
  isLoading: boolean;
  refreshContexts: () => Promise<void>;
}

const DatabaseContext = createContext<DatabaseContextType | undefined>(undefined);

// Default context for initial loading state
const initialContext: DbContext = {
  id: 1,
  name: 'Default Database',
  type: 'postgres',
  isDefault: true,
  status: 'connected'
};

export function DatabaseProvider({ children }: { children: React.ReactNode }) {
  const [dbContexts, setDbContexts] = useState<DbContext[]>([initialContext]);
  const [activeDbContextId, setActiveDbContextId] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(false);

  // Load contexts from API on mount
  useEffect(() => {
    refreshContexts();
  }, []);

  // Get active context
  const activeDbContext = dbContexts.find(ctx => ctx.id === activeDbContextId) || dbContexts[0];

  // Refresh contexts from API
  const refreshContexts = async () => {
    setIsLoading(true);
    try {
      const response = await DbContextService.getList({ pageSize: 100 });
      
      if (response.isSuccessful && response.data) {
        const contexts = response.data.map(mapApiContextToUiContext);
        setDbContexts(contexts);
        
        // If no active context or active context not found in new list, set to default
        if (!contexts.find(ctx => ctx.id === activeDbContextId)) {
          const defaultContext = contexts.find(ctx => ctx.isDefault) || contexts[0];
          if (defaultContext) {
            setActiveDbContextId(defaultContext.id);
          }
        }
      } else {
        console.error('Failed to load database contexts:', response.errors);
        toast({
          title: 'Error loading database contexts',
          description: response.errors?.join(', ') || 'An unknown error occurred',
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error('Error loading database contexts:', error);
      toast({
        title: 'Error loading database contexts',
        description: 'Failed to load database contexts. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Set active context
  const setActiveDbContext = async (contextId: number) => {
    setIsLoading(true);
    try {
      // Get context data to ensure it exists
      const response = await DbContextService.getById(contextId);
      
      if (response.isSuccessful && response.data) {
        setActiveDbContextId(contextId);
      } else {
        console.error('Failed to load database context:', response.errors);
        toast({
          title: 'Error loading database context',
          description: response.errors?.join(', ') || 'An unknown error occurred',
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error('Error loading database context:', error);
      toast({
        title: 'Error loading database context',
        description: 'Failed to load database context. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Add new context
  const addDbContext = async (dbContext: Omit<DbContext, 'id'>) => {
    // Create API context from UI context
    const apiContext: Partial<MixDbContext> = {
      displayName: dbContext.name,
      name: dbContext.name.toLowerCase().replace(/\s+/g, '_'),
      systemName: dbContext.name.toLowerCase().replace(/\s+/g, '_'),
      type: dbContext.type.toUpperCase(),
      status: 'Published',
      connectionString: '',
      description: '',
      priority: 0,
      specificulture: 'en-us',
    };
    
    try {
      const response = await DbContextService.create(apiContext);
      
      if (response.isSuccessful && response.data) {
        // Add to local state
        const newContext = mapApiContextToUiContext(response.data);
        setDbContexts([...dbContexts, newContext]);
        
        toast({
          title: 'Database context created',
          description: `${newContext.name} has been created successfully.`,
        });
        
        return newContext.id;
      } else {
        console.error('Failed to create database context:', response.errors);
        toast({
          title: 'Error creating database context',
          description: response.errors?.join(', ') || 'An unknown error occurred',
          variant: 'destructive',
        });
        return 0;
      }
    } catch (error) {
      console.error('Error creating database context:', error);
      toast({
        title: 'Error creating database context',
        description: 'Failed to create database context. Please try again later.',
        variant: 'destructive',
      });
      return 0;
    }
  };

  // Remove context
  const removeDbContext = async (contextId: number) => {
    // Don't allow removing the default context
    const contextToRemove = dbContexts.find(ctx => ctx.id === contextId);
    if (!contextToRemove || contextToRemove.isDefault) {
      toast({
        title: 'Cannot delete default context',
        description: 'The default database context cannot be deleted.',
        variant: 'destructive',
      });
      return false;
    }
    
    try {
      const response = await DbContextService.delete(contextId);
      
      if (response.isSuccessful) {
        // Remove from local state
        setDbContexts(dbContexts.filter(ctx => ctx.id !== contextId));
        
        // If removing the active context, switch to default
        if (contextId === activeDbContextId) {
          const defaultContext = dbContexts.find(ctx => ctx.isDefault);
          if (defaultContext) {
            setActiveDbContextId(defaultContext.id);
          } else {
            setActiveDbContextId(dbContexts[0].id);
          }
        }
        
        toast({
          title: 'Database context deleted',
          description: `${contextToRemove.name} has been deleted successfully.`,
        });
        
        return true;
      } else {
        console.error('Failed to delete database context:', response.errors);
        toast({
          title: 'Error deleting database context',
          description: response.errors?.join(', ') || 'An unknown error occurred',
          variant: 'destructive',
        });
        return false;
      }
    } catch (error) {
      console.error('Error deleting database context:', error);
      toast({
        title: 'Error deleting database context',
        description: 'Failed to delete database context. Please try again later.',
        variant: 'destructive',
      });
      return false;
    }
  };

  // Context value
  const value = {
    activeDbContext,
    dbContexts,
    setActiveDbContext,
    addDbContext,
    removeDbContext,
    isLoading,
    refreshContexts
  };

  return (
    <DatabaseContext.Provider value={value}>
      {children}
    </DatabaseContext.Provider>
  );
}

export function useDatabase() {
  const context = useContext(DatabaseContext);
  if (context === undefined) {
    throw new Error('useDatabase must be used within a DatabaseProvider');
  }
  return context;
} 