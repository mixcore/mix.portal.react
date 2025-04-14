'use client';

import { User } from '@/types';
import { fetchClient } from './fetchClient';

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  userId: string;
  roles: string[];
  permissions: string[];
}

export interface LoginUnsecureResponse {
  accessToken: string;
  tokenType: string;
  refreshToken: string;
  expiresIn: number;
  issued: string;
  expires: string;
  isActive: boolean;
  emailConfirmed: boolean;
  info: {
    parentId: string;
    parentType: string;
    username: string;
    email: string;
    phoneNumber: string | null;
  };
}

export interface ExternalLoginData {
  provider: string;
  username: string;
  email: string;
  accessToken: string;
}

export interface AuthResult<T> {
  success: boolean;
  data?: T;
  errors?: string[];
}

// Helper function to decide whether to use proxy or direct API call
const getApiEndpoint = (path: string): string => {
  // Use our local proxy in development or when direct API calls are failing
  const useProxy = true;
  
  if (useProxy) {
    // Remove the common prefix since our proxy already includes it
    const endpoint = path.replace('/api/v2/rest/auth/', '');
    return `/api/auth/${endpoint}`;
  }
  
  return path;
};

// Parse JWT token and extract roles
function parseJwt(token: string): any {
  try {
    // Split the token and get the payload part
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    // Decode the Base64Url-encoded string
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    // Parse the JSON
    return JSON.parse(jsonPayload);
  } catch (e) {
    console.error('Error parsing JWT token:', e);
    return {};
  }
}

export const AuthService = {
  // Login user
  login: async (
    username: string,
    password: string,
    rememberMe: boolean = false
  ): Promise<AuthResult<LoginResponse>> => {
    try {
      console.log('Starting login process with username:', username);
      
      // Format data according to Mixcore API requirements for login-unsecure
      const data = {
        userName: username,
        email: username,
        phoneNumber: "",
        password: password,
        rememberMe: rememberMe,
        returnUrl: ""
      };

      // Direct API call to login-unsecure endpoint
      const directEndpoint = '/api/v2/rest/auth/user/login-unsecure';
      console.log('Using direct login endpoint:', directEndpoint);
      
      console.log('Sending login request...');
      const response = await fetchClient.post<LoginUnsecureResponse>(directEndpoint, data);

      console.log('Login response received:', response);

      // Handle direct API response format from login-unsecure 
      if (response && response.accessToken) {
        // Extract roles from JWT token
        const decodedToken = parseJwt(response.accessToken);
        const roles = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] || [];
        
        // Map the response to our expected format
        const loginData: LoginResponse = {
          accessToken: response.accessToken,
          refreshToken: response.refreshToken,
          userId: response.info.parentId,
          roles: Array.isArray(roles) ? roles : [roles], // Handle both array and string
          permissions: [] // Need to extract permissions if needed
        };

        console.log('Login successful, storing tokens and roles:', loginData.roles);
        
        // Store tokens in localStorage
        localStorage.setItem('authToken', loginData.accessToken);
        localStorage.setItem('refreshToken', loginData.refreshToken);
        localStorage.setItem('userId', loginData.userId);
        localStorage.setItem('roles', JSON.stringify(loginData.roles));
        localStorage.setItem('permissions', JSON.stringify(loginData.permissions));

        return {
          success: true,
          data: loginData
        };
      }

      console.log('Login failed - invalid response format:', response);
      return {
        success: false,
        errors: ['Login failed - invalid response format']
      };
    } catch (error) {
      console.error('Login error:', error);
      return {
        success: false,
        errors: ['An error occurred during login']
      };
    }
  },

  // Register user
  register: async (
    name: string,
    email: string,
    password: string
  ): Promise<AuthResult<any>> => {
    try {
      const data = {
        DisplayName: name,
        UserName: email,
        Email: email,
        Password: password,
      };

      const endpoint = getApiEndpoint('/api/v2/rest/auth/user/register');
      
      const response = await fetchClient.post<{
        success: boolean;
        data: any;
        errors?: string[];
      }>(endpoint, data);

      if (response && response.success) {
        return {
          success: true,
          data: response.data
        };
      }

      return {
        success: false,
        errors: response.errors || ['Registration failed']
      };
    } catch (error) {
      console.error('Registration error:', error);
      return {
        success: false,
        errors: ['An error occurred during registration']
      };
    }
  },

  // External login
  externalLogin: async (
    loginData: ExternalLoginData
  ): Promise<AuthResult<LoginResponse>> => {
    try {
      const endpoint = getApiEndpoint('/api/v2/rest/auth/user/external-login');
      
      const response = await fetchClient.post<{
        success: boolean;
        data: LoginResponse;
        errors?: string[];
      }>(endpoint, loginData);

      if (response && response.success) {
        const { accessToken, refreshToken, userId, roles, permissions } =
          response.data;

        // Store tokens in localStorage
        localStorage.setItem('authToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('userId', userId);
        localStorage.setItem('roles', JSON.stringify(roles));
        localStorage.setItem('permissions', JSON.stringify(permissions));

        return {
          success: true,
          data: response.data
        };
      }

      return {
        success: false,
        errors: response.errors || ['External login failed']
      };
    } catch (error) {
      console.error('External login error:', error);
      return {
        success: false,
        errors: ['An error occurred during external login']
      };
    }
  },

  // Get external login providers
  getExternalLoginProviders: async (): Promise<string[]> => {
    try {
      const endpoint = getApiEndpoint('/api/v2/rest/auth/user/get-external-login-providers');
      
      const response = await fetchClient.get<{
        success: boolean;
        data: string[];
      }>(endpoint);
      return response.data || [];
    } catch (error) {
      console.error('Error getting external login providers:', error);
      return [];
    }
  },

  // Logout user
  logout: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('roles');
    localStorage.removeItem('permissions');
    window.location.href = '/security/login';
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('authToken') !== null;
  },

  // Get current user
  getCurrentUser: async (): Promise<User | null> => {
    try {
      const endpoint = getApiEndpoint('/api/v2/rest/auth/user/current');
      
      const response = await fetchClient.get<{
        success: boolean;
        data: User;
        errors?: string[];
      }>(endpoint);

      if (response && response.success) {
        return response.data;
      }

      return null;
    } catch (error) {
      console.error('Error getting current user:', error);
      return null;
    }
  },

  // Check if user is in role
  isInRole: (role: string): boolean => {
    if (typeof window === 'undefined') return false;
    const roles = JSON.parse(localStorage.getItem('roles') || '[]');
    return roles.includes(role);
  },

  // Check if user has permission
  hasPermission: (permission: string): boolean => {
    if (typeof window === 'undefined') return false;
    const permissions = JSON.parse(localStorage.getItem('permissions') || '[]');
    return permissions.includes(permission);
  },

  // Refresh token
  refreshToken: async (): Promise<AuthResult<LoginResponse>> => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      const accessToken = localStorage.getItem('authToken');

      if (!refreshToken || !accessToken) {
        return {
          success: false,
          errors: ['No tokens available']
        };
      }

      const endpoint = getApiEndpoint('/api/v2/rest/auth/user/renew-token');
      
      const response = await fetchClient.post<{
        success: boolean;
        data: LoginResponse;
        errors?: string[];
      }>(endpoint, {
        refreshToken,
        accessToken
      });

      if (response && response.success) {
        const {
          accessToken: newAccessToken,
          refreshToken: newRefreshToken,
          userId,
          roles,
          permissions
        } = response.data;

        // Store tokens in localStorage
        localStorage.setItem('authToken', newAccessToken);
        localStorage.setItem('refreshToken', newRefreshToken);
        localStorage.setItem('userId', userId);
        localStorage.setItem('roles', JSON.stringify(roles));
        localStorage.setItem('permissions', JSON.stringify(permissions));

        return {
          success: true,
          data: response.data
        };
      }

      return {
        success: false,
        errors: response.errors || ['Token refresh failed']
      };
    } catch (error) {
      console.error('Token refresh error:', error);
      return {
        success: false,
        errors: ['An error occurred during token refresh']
      };
    }
  },

  // Forgot password
  forgotPassword: async (email: string): Promise<AuthResult<any>> => {
    try {
      const endpoint = getApiEndpoint('/api/v2/rest/auth/user/forgot-password');
      
      const response = await fetchClient.post<{
        success: boolean;
        data: any;
        errors?: string[];
      }>(endpoint, {
        Email: email
      });

      if (response && response.success) {
        return {
          success: true,
          data: response.data
        };
      }

      return {
        success: false,
        errors: response.errors || ['Password reset request failed']
      };
    } catch (error) {
      console.error('Forgot password error:', error);
      return {
        success: false,
        errors: ['An error occurred while requesting password reset']
      };
    }
  },

  // Reset password
  resetPassword: async (
    token: string,
    email: string,
    newPassword: string
  ): Promise<AuthResult<any>> => {
    try {
      const endpoint = getApiEndpoint('/api/v2/rest/auth/user/reset-password');
      
      const response = await fetchClient.post<{
        success: boolean;
        data: any;
        errors?: string[];
      }>(endpoint, {
        Token: token,
        Email: email,
        Password: newPassword
      });

      if (response && response.success) {
        return {
          success: true,
          data: response.data
        };
      }

      return {
        success: false,
        errors: response.errors || ['Password reset failed']
      };
    } catch (error) {
      console.error('Reset password error:', error);
      return {
        success: false,
        errors: ['An error occurred while resetting password']
      };
    }
  }
};
