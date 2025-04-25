'use client';

import ApiService, { ApiResponse, PaginatedResponse } from './api';
import { MixDbContext } from './dbContextService';

export interface MixDbColumn {
  id: string;
  name: string;
  displayName: string;
  dataType: string;
  isRequired: boolean;
  defaultValue?: string;
  options?: string;
  isEncrypt: boolean;
  isMultiple: boolean;
  isSelect: boolean;
  isUnique: boolean;
  referenceId?: string;
  referenceName?: string;
  relatedId?: string;
  relatedTableName?: string;
  mixDatabaseId: string;
  status: string;
  priority: number;
  createdDateTime: string;
  modifiedDateTime?: string;
  createdBy?: string;
  modifiedBy?: string;
  mixDatabaseName: string;
}

export interface MixTable {
  id: string;
  name: string;
  displayName: string;
  description?: string;
  systemName?: string;
  mixDatabaseContextId: number;
  mixDatabaseContextName?: string;
  type: string;
  source?: string;
  status: string;
  priority: number;
  createdDateTime: string;
  modifiedDateTime?: string;
  createdBy?: string;
  modifiedBy?: string;
  isSystem?: boolean;
  icon?: string;
  columns?: MixDbColumn[];
  specificulture?: string;
  rowCount?: number;
  fields?: MixDbColumn[]; // Keeping for backward compatibility
}

export interface MixTableFilterRequest {
  pageIndex?: number;
  pageSize?: number;
  status?: string;
  keyword?: string;
  fromDate?: string;
  toDate?: string;
  orderBy?: string;
  direction?: 'Asc' | 'Desc';
  searchColumns?: string;
  compareOperator?: string;
  conjunction?: string;
  mixDatabaseContextId?: number;
  sortBy?: string;
  columns?: string;
}

/**
 * Table Service
 * 
 * This service handles all API calls related to database tables (mix-database)
 */
export default class TableService {
  private static endpoint = 'mix-database';
  
  /**
   * Get all database tables with pagination and filtering
   */
  static async getList(request: MixTableFilterRequest = {}): Promise<ApiResponse<PaginatedResponse<MixTable>>> {
    const defaultRequest: MixTableFilterRequest = {
      pageSize: 20,
      status: 'Published',
      sortBy: 'id',
      direction: 'Desc',
      searchColumns: 'displayName,systemName',
      compareOperator: 'Like',
      conjunction: 'Or',
      columns: 'id,displayName,systemName,type,createdDatetime',
      ...request
    };
    
    return ApiService.get<PaginatedResponse<MixTable>>(this.endpoint, defaultRequest);
  }
  
  /**
   * Get single database table by ID
   */
  static async getById(id: string): Promise<ApiResponse<MixTable>> {
    return ApiService.get<MixTable>(`${this.endpoint}/${id}`);
  }
  
  /**
   * Get database tables by context ID with pagination and filtering
   */
  static async getByContext(contextId: number, request: MixTableFilterRequest = {}): Promise<ApiResponse<PaginatedResponse<MixTable>>> {
    const defaultRequest: MixTableFilterRequest = {
      pageSize: 20,
      status: 'Published',
      sortBy: 'id',
      direction: 'Desc',
      searchColumns: 'displayName,systemName',
      compareOperator: 'Like',
      conjunction: 'Or',
      columns: 'id,displayName,systemName,type,createdDatetime',
      mixDatabaseContextId: contextId,
      ...request
    };
    
    return ApiService.get<PaginatedResponse<MixTable>>(this.endpoint, defaultRequest);
  }
  
  /**
   * Create a new table
   */
  static async create(data: Partial<MixTable>): Promise<ApiResponse<MixTable>> {
    return ApiService.post<MixTable>(this.endpoint, data);
  }
  
  /**
   * Update a table
   */
  static async update(id: string, data: Partial<MixTable>): Promise<ApiResponse<MixTable>> {
    return ApiService.put<MixTable>(`${this.endpoint}/${id}`, data);
  }
  
  /**
   * Delete a table
   */
  static async delete(id: string): Promise<ApiResponse<boolean>> {
    return ApiService.delete<boolean>(`${this.endpoint}/${id}`);
  }
  
  /**
   * Batch update tables
   */
  static async saveMany(data: Partial<MixTable>[]): Promise<ApiResponse<MixTable[]>> {
    return ApiService.post<MixTable[]>(`${this.endpoint}/save-many`, data);
  }
  
  /**
   * Update table field
   */
  static async patch(data: Partial<MixTable>): Promise<ApiResponse<MixTable>> {
    return ApiService.patch<MixTable>(this.endpoint, data);
  }
  
  /**
   * Get the default database table
   */
  static async getDefault(): Promise<ApiResponse<MixTable>> {
    return ApiService.get<MixTable>(`${this.endpoint}/default`);
  }
  
  /**
   * Duplicate a database table
   */
  static async duplicate(id: string): Promise<ApiResponse<MixTable>> {
    return ApiService.post<MixTable>(`${this.endpoint}/duplicate/${id}`, {});
  }
  
  /**
   * Get row count for a database table
   */
  static async getRowCount(id: string): Promise<ApiResponse<number>> {
    return ApiService.get<number>(`${this.endpoint}/${id}/count`);
  }
  
  /**
   * Get fields for a database table
   */
  static async getFields(id: string): Promise<ApiResponse<MixDbColumn[]>> {
    return ApiService.get<MixDbColumn[]>(`${this.endpoint}/${id}/fields`);
  }
} 