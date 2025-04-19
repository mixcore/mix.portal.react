'use client';

import { useState, useEffect } from 'react';
import { TenantData } from '@/app/dashboard/apps/tenants/types/tenants';

// Import the API service
import { fetchTenants } from '@/app/dashboard/apps/tenants/services/api';

interface UseTenantOptions {
  autoFetch?: boolean;
}

interface UseTenantResult {
  tenants: TenantData[];
  isLoading: boolean;
  error: string | null;
  refreshTenants: () => Promise<void>;
  activeTenant: TenantData | null;
  setActiveTenant: (tenant: TenantData) => void;
}

/**
 * Hook to fetch and manage tenants
 */
export function useTenants(options: UseTenantOptions = {}): UseTenantResult {
  const { autoFetch = true } = options;
  
  const [tenants, setTenants] = useState<TenantData[]>([]);
  const [activeTenant, setActiveTenant] = useState<TenantData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Function to refresh tenants data
  const refreshTenants = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      if (process.env.NODE_ENV !== 'production') {
        console.log('Fetching tenants for sidebar...');
      }
      
      const response = await fetchTenants();
      const tenantsList = response.items;
      
      if (process.env.NODE_ENV !== 'production') {
        console.log(`Loaded ${tenantsList.length} tenants for sidebar`);
      }
      
      setTenants(tenantsList);
      
      // Set active tenant to the first one if none is selected yet
      if (!activeTenant && tenantsList.length > 0) {
        setActiveTenant(tenantsList[0]);
      }
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load tenants';
      console.error('Error fetching tenants:', err);
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // Set active tenant
  const handleSetActiveTenant = (tenant: TenantData) => {
    setActiveTenant(tenant);
    // Save active tenant to localStorage for persistence
    if (typeof window !== 'undefined') {
      localStorage.setItem('activeTenantId', tenant.id.toString());
    }
  };

  // Load tenants on initial render if autoFetch is true
  useEffect(() => {
    if (autoFetch) {
      refreshTenants();
    }
    
    // Check for active tenant in localStorage
    if (typeof window !== 'undefined') {
      const savedTenantId = localStorage.getItem('activeTenantId');
      if (savedTenantId && tenants.length > 0) {
        const savedTenant = tenants.find(t => t.id.toString() === savedTenantId);
        if (savedTenant) {
          setActiveTenant(savedTenant);
        }
      }
    }
  }, [autoFetch]);

  return {
    tenants,
    isLoading,
    error,
    refreshTenants,
    activeTenant,
    setActiveTenant: handleSetActiveTenant
  };
} 