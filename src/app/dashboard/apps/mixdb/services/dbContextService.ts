'use client';

import ApiService, { ApiResponse, PaginatedResponse } from './api';

// MixDB Context types
export interface MixDbContext {
  id: number;
  name: string;
  displayName: string;
  description?: string;
  type: string;
  connectionString?: string;
  status: 'Published' | 'Draft' | 'Deleted';
  createdDateTime: string;
  createdBy?: string;
  systemName: string;
  priority: number;
  specificulture: string;
  isSystem?: boolean;
}

export interface MixDbContextFilterRequest {
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
  columns?: string;
  sortBy?: string;
}

/**
 * Database Context Service
 * 
 * This service handles all API calls related to database contexts (mixdb-context)
 */
export default class DbContextService {
  private static endpoint = 'mixdb-context';
  
  /**
   * Get all database contexts with pagination and filtering
   */
  static async getList(request: MixDbContextFilterRequest = {}): Promise<PaginatedResponse<MixDbContext>> {
    const defaultRequest: MixDbContextFilterRequest = {
      pageSize: 10,
      status: 'Published',
      sortBy: 'createdDateTime',
      direction: 'Desc',
      searchColumns: 'displayName,systemName,description',
      compareOperator: 'Like',
      conjunction: 'Or',
      columns: 'id,createdDateTime,displayName,systemName,description,seoName',
      ...request
    };
    
    return ApiService.get<MixDbContext[]>(this.endpoint, defaultRequest) as Promise<PaginatedResponse<MixDbContext>>;
  }
  
  /**
   * Get a database context by ID
   */
  static async getById(id: number): Promise<ApiResponse<MixDbContext>> {
    return ApiService.get<MixDbContext>(`${this.endpoint}/${id}`);
  }
  
  /**
   * Get the default database context
   */
  static async getDefault(): Promise<ApiResponse<MixDbContext>> {
    return ApiService.get<MixDbContext>(`${this.endpoint}/default`);
  }
  
  /**
   * Create a new database context
   */
  static async create(context: Partial<MixDbContext>): Promise<ApiResponse<MixDbContext>> {
    return ApiService.post<MixDbContext>(this.endpoint, context);
  }
  
  /**
   * Update a database context
   */
  static async update(id: number, context: Partial<MixDbContext>): Promise<ApiResponse<MixDbContext>> {
    return ApiService.put<MixDbContext>(`${this.endpoint}/${id}`, context);
  }
  
  /**
   * Patch a database context (partial update)
   */
  static async patch(context: Partial<MixDbContext>): Promise<ApiResponse<MixDbContext>> {
    return ApiService.patch<MixDbContext>(this.endpoint, context);
  }
  
  /**
   * Patch multiple database contexts at once
   */
  static async patchMany(contexts: Partial<MixDbContext>[]): Promise<ApiResponse<MixDbContext[]>> {
    return ApiService.patch<MixDbContext[]>(`${this.endpoint}/patch-many`, contexts);
  }
  
  /**
   * Delete a database context
   */
  static async delete(id: number): Promise<ApiResponse<boolean>> {
    return ApiService.delete<boolean>(`${this.endpoint}/${id}`);
  }
  
  /**
   * Remove a database context from cache
   */
  static async removeCache(id: number): Promise<ApiResponse<boolean>> {
    return ApiService.delete<boolean>(`${this.endpoint}/remove-cache/${id}`);
  }
  
  /**
   * Save multiple database contexts at once
   */
  static async saveMany(contexts: Partial<MixDbContext>[]): Promise<ApiResponse<MixDbContext[]>> {
    return ApiService.post<MixDbContext[]>(`${this.endpoint}/save-many`, contexts);
  }
  
  /**
   * Migrate database context
   */
  static async migrate(data: any): Promise<ApiResponse<any>> {
    return ApiService.post<any>(`${this.endpoint}/migrate`, data);
  }
} 