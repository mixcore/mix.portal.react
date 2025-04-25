/**
 * Tenant app type definitions
 */

export interface TenantData {
  id: number;
  primaryDomain: string;
  systemName: string;
  displayName: string;
  domains: string[];
  createdDateTime: string;
  priority: number;
  status: string;
  isDeleted: boolean;
  modifiedEntities: any[];
  plan?: string;
  usersCount?: number;
  expiresAt?: string;
}

export interface DomainData {
  id: number;
  host: string;
  displayName: string;
  tenantId: number;
  createdDateTime: string;
  priority: number;
  status: string;
  isDeleted: boolean;
  modifiedEntities: any[];
}

export interface SortColumn {
  direction: 'Asc' | 'Desc';
}

export interface PagingData {
  page: number;
  pageIndex: number;
  pageSize: number;
  sortDirection: string;
  total: number;
  totalPage: number;
  sortByColumns: SortColumn[];
}

export interface ApiResponse<T> {
  items: T[];
  pagingData: PagingData;
}

export interface QueryParams {
  pageSize?: number;
  page?: number;
  status?: string;
  direction?: string;
  compareOperator?: string;
  conjunction?: string;
  columns?: string | string[];
  searchText?: string;
  tenantId?: number;
} 