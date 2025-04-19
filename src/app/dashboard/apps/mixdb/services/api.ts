/**
 * MixDB API Service
 * 
 * Base service for making API calls to MixDB endpoints
 */

const API_BASE_PATH = 'api/v2/rest/mix-portal/';
const API_BASE_URL = (process.env.NEXT_PUBLIC_API_URL || '') + API_BASE_PATH;

// API response types
export interface ApiResponse<T> {
  isSuccessful: boolean;
  responseKey?: string;
  data?: T;
  errors?: string[];
  status?: number;
  title?: string;
  detail?: string;
}

export interface PaginationMetadata {
  pageIndex: number;
  pageSize: number;
  totalPage: number;
  totalItems: number;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  paging?: PaginationMetadata;
}

// Base API methods
export default class ApiService {
  // Get the auth token from localStorage or cookies
  private static getAuthToken(): string | null {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('authToken') || localStorage.getItem('mixcore_token');
      return token;
    }
    return null;
  }

  // Get common headers for all requests
  private static getHeaders(): HeadersInit {
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
      headers['Authorization'] = `Bearer ${token}`;
    }

    return headers;
  }
  
  // Get common fetch options
  private static getFetchOptions(method: string, body?: any): RequestInit {
    return {
      method,
      headers: this.getHeaders(),
      body: body ? JSON.stringify(body) : undefined,
      credentials: 'include',
      mode: 'cors'
    };
  }
  
  /**
   * Set the authentication token after login
   * @param token The JWT token to store
   */
  static setAuthToken(token: string): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('authToken', token);
    }
  }
  
  /**
   * Check if user is authenticated
   * @returns boolean indicating if token exists
   */
  static isAuthenticated(): boolean {
    return !!this.getAuthToken();
  }
  
  /**
   * Remove authentication token on logout
   */
  static removeAuthToken(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('authToken');
    }
  }

  static async get<T>(endpoint: string, params?: Record<string, any>): Promise<ApiResponse<T>> {
    try {
      let urlString;
      
      // Check if the API_BASE_URL is an absolute URL or a relative path
      if (API_BASE_URL.startsWith('http')) {
        // For absolute URLs
        urlString = `${API_BASE_URL}${endpoint}`;
      } else {
        // For relative paths, prepend with the current origin
        urlString = `${typeof window !== 'undefined' ? window.location.origin : ''}${API_BASE_URL}${endpoint}`;
      }
      
      // Build URL with parameters
      if (params && Object.keys(params).length > 0) {
        // Start with question mark for the first parameter
        urlString += '?';
        
        // Add each parameter
        const paramStrings = Object.keys(params)
          .filter(key => params[key] !== undefined && params[key] !== null)
          .map(key => {
            // Don't encode the value if it contains commas
            const value = params[key].toString();
            return `${encodeURIComponent(key)}=${value}`;
          });
        
        urlString += paramStrings.join('&');
      }
      
      const response = await fetch(urlString, this.getFetchOptions('GET'));
      
      if (!response.ok) {
        const errorData = await response.json();
        return {
          isSuccessful: false,
          status: response.status,
          errors: [errorData.detail || 'Failed to fetch data'],
          title: errorData.title || 'Error',
          detail: errorData.detail || 'An error occurred while fetching data',
        };
      }
      
      const data = await response.json();
      return {
        isSuccessful: true,
        data: data.data || data,
        status: response.status,
      };
    } catch (error) {
      console.error('API GET error:', error);
      return {
        isSuccessful: false,
        errors: [(error as Error).message || 'Failed to fetch data'],
        title: 'Error',
        detail: 'An error occurred while fetching data',
      };
    }
  }
  
  static async post<T>(endpoint: string, body?: any): Promise<ApiResponse<T>> {
    try {
      let urlString;
      
      // Check if the API_BASE_URL is an absolute URL or a relative path
      if (API_BASE_URL.startsWith('http')) {
        // For absolute URLs
        urlString = `${API_BASE_URL}${endpoint}`;
      } else {
        // For relative paths, prepend with the current origin
        urlString = `${typeof window !== 'undefined' ? window.location.origin : ''}${API_BASE_URL}${endpoint}`;
      }
      
      const response = await fetch(urlString, this.getFetchOptions('POST', body));
      
      if (!response.ok) {
        const errorData = await response.json();
        return {
          isSuccessful: false,
          status: response.status,
          errors: [errorData.detail || 'Failed to post data'],
          title: errorData.title || 'Error',
          detail: errorData.detail || 'An error occurred while posting data',
        };
      }
      
      const data = await response.json();
      return {
        isSuccessful: true,
        data: data.data || data,
        status: response.status,
      };
    } catch (error) {
      console.error('API POST error:', error);
      return {
        isSuccessful: false,
        errors: [(error as Error).message || 'Failed to post data'],
        title: 'Error',
        detail: 'An error occurred while posting data',
      };
    }
  }
  
  static async put<T>(endpoint: string, body: any): Promise<ApiResponse<T>> {
    try {
      let urlString;
      
      // Check if the API_BASE_URL is an absolute URL or a relative path
      if (API_BASE_URL.startsWith('http')) {
        // For absolute URLs
        urlString = `${API_BASE_URL}${endpoint}`;
      } else {
        // For relative paths, prepend with the current origin
        urlString = `${typeof window !== 'undefined' ? window.location.origin : ''}${API_BASE_URL}${endpoint}`;
      }
      
      const response = await fetch(urlString, this.getFetchOptions('PUT', body));
      
      if (!response.ok) {
        const errorData = await response.json();
        return {
          isSuccessful: false,
          status: response.status,
          errors: [errorData.detail || 'Failed to update data'],
          title: errorData.title || 'Error',
          detail: errorData.detail || 'An error occurred while updating data',
        };
      }
      
      const data = await response.json();
      return {
        isSuccessful: true,
        data: data.data || data,
        status: response.status,
      };
    } catch (error) {
      console.error('API PUT error:', error);
      return {
        isSuccessful: false,
        errors: [(error as Error).message || 'Failed to update data'],
        title: 'Error',
        detail: 'An error occurred while updating data',
      };
    }
  }
  
  static async patch<T>(endpoint: string, body: any): Promise<ApiResponse<T>> {
    try {
      let urlString;
      
      // Check if the API_BASE_URL is an absolute URL or a relative path
      if (API_BASE_URL.startsWith('http')) {
        // For absolute URLs
        urlString = `${API_BASE_URL}${endpoint}`;
      } else {
        // For relative paths, prepend with the current origin
        urlString = `${typeof window !== 'undefined' ? window.location.origin : ''}${API_BASE_URL}${endpoint}`;
      }
      
      const response = await fetch(urlString, this.getFetchOptions('PATCH', body));
      
      if (!response.ok) {
        const errorData = await response.json();
        return {
          isSuccessful: false,
          status: response.status,
          errors: [errorData.detail || 'Failed to patch data'],
          title: errorData.title || 'Error',
          detail: errorData.detail || 'An error occurred while patching data',
        };
      }
      
      const data = await response.json();
      return {
        isSuccessful: true,
        data: data.data || data,
        status: response.status,
      };
    } catch (error) {
      console.error('API PATCH error:', error);
      return {
        isSuccessful: false,
        errors: [(error as Error).message || 'Failed to patch data'],
        title: 'Error',
        detail: 'An error occurred while patching data',
      };
    }
  }
  
  static async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      let urlString;
      
      // Check if the API_BASE_URL is an absolute URL or a relative path
      if (API_BASE_URL.startsWith('http')) {
        // For absolute URLs
        urlString = `${API_BASE_URL}${endpoint}`;
      } else {
        // For relative paths, prepend with the current origin
        urlString = `${typeof window !== 'undefined' ? window.location.origin : ''}${API_BASE_URL}${endpoint}`;
      }
      
      const response = await fetch(urlString, this.getFetchOptions('DELETE'));
      
      if (!response.ok) {
        const errorData = await response.json();
        return {
          isSuccessful: false,
          status: response.status,
          errors: [errorData.detail || 'Failed to delete data'],
          title: errorData.title || 'Error',
          detail: errorData.detail || 'An error occurred while deleting data',
        };
      }
      
      const data = await response.json();
      return {
        isSuccessful: true,
        data: data.data || data,
        status: response.status,
      };
    } catch (error) {
      console.error('API DELETE error:', error);
      return {
        isSuccessful: false,
        errors: [(error as Error).message || 'Failed to delete data'],
        title: 'Error',
        detail: 'An error occurred while deleting data',
      };
    }
  }
} 