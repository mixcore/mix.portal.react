'use client';

import ApiService, { ApiResponse, PaginatedResponse } from './api';

// MixDB Relationship types
export interface MixDbRelationship {
  id: string;
  parentId: string;
  parentType: string;
  childId: string;
  childType: string;
  displayName?: string;
  description?: string;
  status: 'Published' | 'Draft' | 'Deleted';
  createdDateTime: string;
  createdBy?: string;
  priority: number;
  specificulture: string;
}

export interface MixDbRelationshipFilterRequest {
  pageIndex?: number;
  pageSize?: number;
  status?: string;
  keyword?: string;
  parentId?: string;
  parentType?: string;
  childId?: string;
  childType?: string;
  orderBy?: string;
  direction?: 'Asc' | 'Desc';
}

/**
 * Database Relationship Service
 * 
 * This service handles all API calls related to database relationships
 */
export default class DbRelationshipService {
  private static endpoint = '/mix-database-relationship';
  
  /**
   * Get all database relationships with pagination and filtering
   */
  static async getList(request: MixDbRelationshipFilterRequest = {}): Promise<PaginatedResponse<MixDbRelationship>> {
    const defaultRequest: MixDbRelationshipFilterRequest = {
      pageIndex: 0,
      pageSize: 10,
      status: 'Published',
      orderBy: 'priority',
      direction: 'Asc',
      ...request
    };
    
    const response = await ApiService.post<MixDbRelationship[]>(`${this.endpoint}/filter`, defaultRequest);
    return response as PaginatedResponse<MixDbRelationship>;
  }
  
  /**
   * Get a database relationship by ID
   */
  static async getById(id: string): Promise<ApiResponse<MixDbRelationship>> {
    return ApiService.get<MixDbRelationship>(`${this.endpoint}/${id}`);
  }
  
  /**
   * Get the default database relationship
   */
  static async getDefault(): Promise<ApiResponse<MixDbRelationship>> {
    return ApiService.get<MixDbRelationship>(`${this.endpoint}/default`);
  }
  
  /**
   * Create a new database relationship
   */
  static async create(relationship: Partial<MixDbRelationship>): Promise<ApiResponse<MixDbRelationship>> {
    return ApiService.post<MixDbRelationship>(this.endpoint, relationship);
  }
  
  /**
   * Update a database relationship
   */
  static async update(id: string, relationship: Partial<MixDbRelationship>): Promise<ApiResponse<MixDbRelationship>> {
    return ApiService.put<MixDbRelationship>(`${this.endpoint}/${id}`, relationship);
  }
  
  /**
   * Patch a database relationship (partial update)
   */
  static async patch(relationship: Partial<MixDbRelationship>): Promise<ApiResponse<MixDbRelationship>> {
    return ApiService.patch<MixDbRelationship>(this.endpoint, relationship);
  }
  
  /**
   * Patch multiple database relationships at once
   */
  static async patchMany(relationships: Partial<MixDbRelationship>[]): Promise<ApiResponse<MixDbRelationship[]>> {
    return ApiService.patch<MixDbRelationship[]>(`${this.endpoint}/patch-many`, relationships);
  }
  
  /**
   * Delete a database relationship
   */
  static async delete(id: string): Promise<ApiResponse<boolean>> {
    return ApiService.delete<boolean>(`${this.endpoint}/${id}`);
  }
  
  /**
   * Remove a database relationship from cache
   */
  static async removeCache(id: string): Promise<ApiResponse<boolean>> {
    return ApiService.delete<boolean>(`${this.endpoint}/remove-cache/${id}`);
  }
  
  /**
   * Save multiple database relationships at once
   */
  static async saveMany(relationships: Partial<MixDbRelationship>[]): Promise<ApiResponse<MixDbRelationship[]>> {
    return ApiService.post<MixDbRelationship[]>(`${this.endpoint}/save-many`, relationships);
  }
} 