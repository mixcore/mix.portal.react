'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { fetchTenants, fetchDomains } from '../services/api';
import { TenantData, DomainData, PagingData } from '../types/tenants';

interface TenantContextType {
  tenants: TenantData[];
  domains: DomainData[];
  isLoading: boolean;
  error: string | null;
  tenantPagingData: PagingData | null;
  domainPagingData: PagingData | null;
  refreshTenants: () => Promise<void>;
  refreshDomains: () => Promise<void>;
  getTenantById: (id: string | number) => TenantData | undefined;
  getDomainsByTenantId: (tenantId: string | number) => DomainData[];
}

// Create the context with default values
const TenantContext = createContext<TenantContextType>({
  tenants: [],
  domains: [],
  isLoading: false,
  error: null,
  tenantPagingData: null,
  domainPagingData: null,
  refreshTenants: async () => {},
  refreshDomains: async () => {},
  getTenantById: () => undefined,
  getDomainsByTenantId: () => [],
});

export const useTenantContext = () => useContext(TenantContext);

interface TenantProviderProps {
  children: ReactNode;
}

export function TenantProvider({ children }: TenantProviderProps) {
  const [tenants, setTenants] = useState<TenantData[]>([]);
  const [domains, setDomains] = useState<DomainData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [tenantPagingData, setTenantPagingData] = useState<PagingData | null>(null);
  const [domainPagingData, setDomainPagingData] = useState<PagingData | null>(null);

  // Load tenants and domains on initial render
  useEffect(() => {
    refreshTenants();
    refreshDomains();
  }, []);

  // Function to refresh tenants data
  const refreshTenants = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetchTenants();
      setTenants(response.items);
      setTenantPagingData(response.pagingData);
    } catch (err) {
      console.error('Error fetching tenants:', err);
      setError('Failed to load tenants');
    } finally {
      setIsLoading(false);
    }
  };

  // Function to refresh domains data
  const refreshDomains = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Log that we're fetching domains for debugging
      if (process.env.NODE_ENV !== 'production') {
        console.log('Fetching domains data...');
      }
      
      const response = await fetchDomains();
      
      if (process.env.NODE_ENV !== 'production') {
        console.log(`Loaded ${response.items.length} domains`);
      }
      
      setDomains(response.items);
      setDomainPagingData(response.pagingData);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load domains';
      console.error('Error fetching domains:', err);
      setError(errorMessage);
      
      // Log more details about the error for debugging
      if (process.env.NODE_ENV !== 'production') {
        console.error('Domains fetch error details:', {
          timestamp: new Date().toISOString(),
          error: err
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Get a specific tenant by ID
  const getTenantById = (id: string | number): TenantData | undefined => {
    return tenants.find(tenant => tenant.id.toString() === id.toString());
  };

  // Get domains by tenant ID
  const getDomainsByTenantId = (tenantId: string | number): DomainData[] => {
    return domains.filter(domain => domain.tenantId === Number(tenantId));
  };

  return (
    <TenantContext.Provider 
      value={{
        tenants,
        domains,
        isLoading,
        error,
        tenantPagingData,
        domainPagingData,
        refreshTenants,
        refreshDomains,
        getTenantById,
        getDomainsByTenantId,
      }}
    >
      {children}
    </TenantContext.Provider>
  );
} 