'use client';

import appConfig from '../config/app.config.json';
import { ApiResponse, TenantData, DomainData, QueryParams } from '../types/tenants';
import { buildQueryString } from '../utils/url-helpers';

/**
 * API service for tenants application
 */

/**
 * TenantApiService - Helper class for API operations
 */
class TenantApiService {
  /**
   * Get base API URL from environment variable
   */
  static getBaseApiUrl(): string {
    return process.env.NEXT_PUBLIC_API_URL || 'https://mixcore.net';
  }

  /**
   * Get authentication token from localStorage
   * Checks multiple possible token storage keys and ensures clean token format
   */
  static getAuthToken(): string | null {
    if (typeof window !== 'undefined') {
      // Check various possible token storage keys
      const possibleKeys = [
        'auth_token',
        'token',
        'accessToken',
        'access_token',
        'authToken',
        'mixcore_token',
        'mixcore_auth_token'
      ];
      
      let token = null;
      
      // Try each possible key until we find a token
      for (const key of possibleKeys) {
        const storedToken = localStorage.getItem(key);
        if (storedToken) {
          // Store this token and log which key we found it in
          token = storedToken;
          console.log(`Found auth token using key: ${key}`);
          break;
        }
      }
      
      // Clean up token if we found one
      if (token) {
        // Check for duplicated tokens (e.g., "Bearer token, Bearer token")
        if (token.includes(',') && token.split('Bearer').length > 2) {
          console.warn('Found duplicated token - cleaning up');
          // Take the first token part
          token = token.split(',')[0].trim();
        }
        
        // Log token info for debugging
        if (process.env.NODE_ENV !== 'production') {
          console.log(`Auth token is available`);
          console.log(`Token format: ${token.substring(0, Math.min(10, token.length))}...`);
          
          // Check if actual token (without Bearer) is duplicated in localStorage
          const tokenWithoutBearer = token.replace('Bearer ', '').trim();
          let tokenCount = 0;
          
          // Check if token is stored multiple times in different keys
          for (const key of possibleKeys) {
            const storedValue = localStorage.getItem(key);
            if (storedValue && storedValue.includes(tokenWithoutBearer)) {
              tokenCount++;
            }
          }
          
          if (tokenCount > 1) {
            console.warn(`Token appears to be stored ${tokenCount} times in localStorage, which may cause duplication issues`);
          }
        }
      } else if (process.env.NODE_ENV !== 'production') {
        console.log(`Auth token is NOT available`);
      }
      
      return token;
    }
    return null;
  }

  /**
   * Get common headers for all requests
   * Ensures Authorization header is included when token is available
   */
  static getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      'Accept': 'application/json, text/plain, */*',
      'cache-control': 'no-cache',
      'pragma': 'no-cache',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin'
    };

    const token = this.getAuthToken();
    if (token) {
      // Fix: Detect if token already has "Bearer" prefix or if it already contains another token
      if (token.includes('Bearer') && token.includes(',')) {
        console.warn('Found multiple tokens or malformed token - cleaning up');
        // Get the first token if multiple are present
        const firstToken = token.split(',')[0].trim();
        headers['Authorization'] = firstToken;
      } else if (token.startsWith('Bearer ')) {
        // Token already has Bearer prefix
        headers['Authorization'] = token;
      } else {
        // Add Bearer prefix
        headers['Authorization'] = `Bearer ${token}`;
      }
      
      // Debug: Confirm header was added and show format
      if (process.env.NODE_ENV !== 'production') {
        console.log('Authorization header added to request');
        const authHeader = headers['Authorization'] as string;
        console.log(`Auth header format: ${authHeader.substring(0, 15)}...`);
      }
    } else {
      // Debug: Warning when token is missing
      if (process.env.NODE_ENV !== 'production') {
        console.warn('No auth token available for API request - request may fail if endpoint requires authentication');
        // Log localStorage content for debugging (except sensitive data)
        if (typeof window !== 'undefined') {
          console.log('localStorage keys:', Object.keys(localStorage));
        }
      }
    }

    return headers;
  }

  /**
   * Build a full API URL with parameters
   */
  static buildApiUrl(endpoint: string, params: QueryParams = {}): string {
    // Start with default parameters from config
    const queryParams = {
      ...appConfig.defaultQueryParams,
      ...params,
    };
    
    // Handle columns array specially
    if (Array.isArray(queryParams.columns)) {
      // Join array with comma but don't URL encode the commas
      queryParams.columns = queryParams.columns.join(',');
    }
    
    // Log query parameters for debugging
    if (process.env.NODE_ENV !== 'production') {
      console.log('API request params:', queryParams);
    }
    
    // Build the query string
    const queryString = buildQueryString(queryParams as Record<string, string | number | boolean>);
    
    // Get base URL from environment
    let baseUrl = this.getBaseApiUrl();
    
    // Ensure we don't get double slashes by removing trailing slash from base URL if endpoint starts with slash
    if (baseUrl.endsWith('/') && endpoint.startsWith('/')) {
      baseUrl = baseUrl.slice(0, -1);
    }
    
    // If baseUrl doesn't end with slash and endpoint doesn't start with slash, add a slash
    if (!baseUrl.endsWith('/') && !endpoint.startsWith('/')) {
      baseUrl = `${baseUrl}/`;
    }
    
    const fullUrl = `${baseUrl}${endpoint}?${queryString}`;
    
    // Log the constructed URL for debugging
    if (process.env.NODE_ENV !== 'production') {
      console.log('API request URL:', fullUrl);
    }
    
    return fullUrl;
  }
}

/**
 * Fetch tenants from API
 * Uses Authorization header from TenantApiService.getHeaders()
 */
export async function fetchTenants(params: QueryParams = {}): Promise<ApiResponse<TenantData>> {
  // Use columns from config if not specified
  if (!params.columns) {
    params.columns = appConfig.tenantColumns;
  }
  
  const endpoint = appConfig.apiEndpoints.tenants;
  const url = TenantApiService.buildApiUrl(endpoint, params);
  
  try {
    // Get headers with Authorization token
    const headers = TenantApiService.getHeaders();
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      cache: 'no-cache',
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch tenants: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching tenants:', error);
    throw error;
  }
}

/**
 * Fetch domains from API
 * Uses Authorization header from TenantApiService.getHeaders()
 */
export async function fetchDomains(params: QueryParams = {}): Promise<ApiResponse<DomainData>> {
  // Use columns from config if not specified
  if (!params.columns) {
    params.columns = appConfig.domainColumns;
  }
  
  // Add debug for domains API call
  if (process.env.NODE_ENV !== 'production') {
    console.log('Fetching domains with params:', params);
  }
  
  const endpoint = appConfig.apiEndpoints.domains;
  const url = TenantApiService.buildApiUrl(endpoint, params);
  
  try {
    // Get headers with Authorization token
    const headers = TenantApiService.getHeaders();
    
    // Log domain-specific request details
    if (process.env.NODE_ENV !== 'production') {
      console.log('Domain API request:', {
        url,
        hasAuthHeader: headers && typeof headers === 'object' && 'Authorization' in headers
      });
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      cache: 'no-cache',
    });
    
    if (!response.ok) {
      const errorText = await response.text().catch(() => 'No error text');
      throw new Error(`Failed to fetch domains: ${response.statusText}. ${errorText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching domains:', error);
    throw error;
  }
}

/**
 * Get a specific tenant by ID
 * Uses Authorization header from TenantApiService.getHeaders()
 */
export async function fetchTenantById(id: string | number): Promise<TenantData> {
  const baseEndpoint = appConfig.apiEndpoints.tenants;
  const url = `${TenantApiService.getBaseApiUrl()}${baseEndpoint}/${id}`;
  
  try {
    // Get headers with Authorization token
    const headers = TenantApiService.getHeaders();
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      cache: 'no-cache',
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch tenant: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching tenant ${id}:`, error);
    throw error;
  }
}

/**
 * Get domains for a specific tenant
 * Uses Authorization header from TenantApiService.getHeaders()
 */
export async function fetchDomainsByTenantId(tenantId: string | number): Promise<ApiResponse<DomainData>> {
  // Log domain retrieval for specific tenant
  if (process.env.NODE_ENV !== 'production') {
    console.log(`Fetching domains for tenant ID: ${tenantId}`);
  }

  return fetchDomains({ 
    columns: appConfig.domainColumns,
    // Add filter for tenant ID
    tenantId: Number(tenantId)
  });
} 