'use client';

import ApiService, { ApiResponse, PaginatedResponse } from './api';

// MixDB types
export interface MixDbData {
  id: string;
  specificulture: string;
  cultures: any[];
  mixDatabaseId: string;
  mixDatabaseName: string;
  dataId: string;
  parentId?: string;
  parentType?: string;
  relatedData?: any[];
  fields?: MixDbField[];
  values?: Record<string, any>;
  priority: number;
  status: 'Published' | 'Draft' | 'Deleted';
  createdDateTime: string;
  createdBy?: string;
  modifiedDateTime?: string;
  modifiedBy?: string;
}

export interface MixDbField {
  id: string;
  mixDatabaseId: string;
  mixDatabaseName: string;
  name: string;
  displayName: string;
  dataType: string;
  isRequired: boolean;
  isEncrypt: boolean;
  defaultValue?: string;
  options?: string;
  priority: number;
  isSelect: boolean;
  isUnique: boolean;
  status: 'Published' | 'Draft' | 'Deleted';
  referenceId?: string;
  referenceName?: string;
}

export interface MixDbFilterRequest {
  pageIndex?: number;
  pageSize?: number;
  status?: string;
  keyword?: string;
  fromDate?: string;
  toDate?: string;
  orderBy?: string;
  direction?: 'Asc' | 'Desc';
  mixDatabaseId?: string;
  mixDatabaseName?: string;
  parentId?: string;
  parentType?: string;
  fieldName?: string;
  fieldValue?: string;
  fieldValues?: Record<string, any>;
}

/**
 * MixDB Service
 * 
 * This service handles all API calls related to MixDB data operations
 */
export default class MixDbService {
  private static baseEndpoint = '/mix-db';
  
  /**
   * Get all records from a database with pagination and filtering
   */
  static async getList(dbName: string, request: MixDbFilterRequest = {}): Promise<PaginatedResponse<MixDbData>> {
    const defaultRequest: MixDbFilterRequest = {
      pageIndex: 0,
      pageSize: 10,
      status: 'Published',
      orderBy: 'priority',
      direction: 'Asc',
      ...request
    };
    
    const response = await ApiService.post<MixDbData[]>(`${this.baseEndpoint}/${dbName}/filter`, defaultRequest);
    return response as PaginatedResponse<MixDbData>;
  }
  
  /**
   * Get nested data with pagination and filtering
   */
  static async getNestedData(dbName: string, request: MixDbFilterRequest = {}): Promise<PaginatedResponse<MixDbData>> {
    const defaultRequest: MixDbFilterRequest = {
      pageIndex: 0,
      pageSize: 10,
      status: 'Published',
      orderBy: 'priority',
      direction: 'Asc',
      ...request
    };
    
    const response = await ApiService.post<MixDbData[]>(`${this.baseEndpoint}/${dbName}/nested-data/filter`, defaultRequest);
    return response as PaginatedResponse<MixDbData>;
  }
  
  /**
   * Get a record by ID
   */
  static async getById(dbName: string, id: string): Promise<ApiResponse<MixDbData>> {
    return ApiService.get<MixDbData>(`${this.baseEndpoint}/${dbName}/${id}`);
  }
  
  /**
   * Get records by parent ID and type
   */
  static async getByParent(dbName: string, parentType: string, parentId: string): Promise<ApiResponse<MixDbData[]>> {
    return ApiService.get<MixDbData[]>(`${this.baseEndpoint}/${dbName}/get-by-parent/${parentType}/${parentId}`);
  }
  
  /**
   * Get records by GUID parent ID and type
   */
  static async getByGuidParent(dbName: string, parentType: string, parentId: string): Promise<ApiResponse<MixDbData[]>> {
    return ApiService.get<MixDbData[]>(`${this.baseEndpoint}/${dbName}/get-by-guid-parent/${parentType}/${parentId}`);
  }
  
  /**
   * Create a new record
   */
  static async create(dbName: string, data: Partial<MixDbData>): Promise<ApiResponse<MixDbData>> {
    return ApiService.post<MixDbData>(`${this.baseEndpoint}/${dbName}`, data);
  }
  
  /**
   * Update a record
   */
  static async update(dbName: string, id: string, data: Partial<MixDbData>): Promise<ApiResponse<MixDbData>> {
    return ApiService.put<MixDbData>(`${this.baseEndpoint}/${dbName}/${id}`, data);
  }
  
  /**
   * Delete a record
   */
  static async delete(dbName: string, id: string): Promise<ApiResponse<boolean>> {
    return ApiService.delete<boolean>(`${this.baseEndpoint}/${dbName}/${id}`);
  }
  
  /**
   * Patch multiple records at once
   */
  static async patchMany(dbName: string, data: Partial<MixDbData>[]): Promise<ApiResponse<MixDbData[]>> {
    return ApiService.patch<MixDbData[]>(`${this.baseEndpoint}/${dbName}/patch-many`, data);
  }
  
  /**
   * Export data from a database
   */
  static async exportData(dbName: string, request: MixDbFilterRequest = {}): Promise<ApiResponse<any>> {
    return ApiService.post<any>(`${this.baseEndpoint}/${dbName}/export`, request);
  }
  
  /**
   * Import data into a database
   */
  static async importData(dbName: string, data: any): Promise<ApiResponse<any>> {
    return ApiService.post<any>(`${this.baseEndpoint}/${dbName}/import`, data);
  }
  
  /**
   * Get records by multiple IDs
   */
  static async getByIds(dbName: string, ids: string[]): Promise<ApiResponse<MixDbData[]>> {
    return ApiService.post<MixDbData[]>(`${this.baseEndpoint}/${dbName}/by-ids`, { ids });
  }
  
  /**
   * Create a data relationship
   */
  static async createDataRelationship(dbName: string, relationship: any): Promise<ApiResponse<any>> {
    return ApiService.post<any>(`${this.baseEndpoint}/${dbName}/data-relationship`, relationship);
  }
  
  /**
   * Delete a data relationship
   */
  static async deleteDataRelationship(dbName: string, id: string): Promise<ApiResponse<boolean>> {
    return ApiService.delete<boolean>(`${this.baseEndpoint}/${dbName}/data-relationship/${id}`);
  }
  
  /**
   * Patch a record (partial update)
   */
  static async patch(dbName: string, data: Partial<MixDbData>): Promise<ApiResponse<MixDbData>> {
    return ApiService.patch<MixDbData>(`${this.baseEndpoint}/${dbName}`, data);
  }
  
  /**
   * API Hub - Special endpoint for advanced operations
   */
  static async hub(dbName: string, payload: any): Promise<ApiResponse<any>> {
    return ApiService.post<any>(`${this.baseEndpoint}/${dbName}/hub`, payload);
  }
} 