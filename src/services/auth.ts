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

export const AuthService = {
  // Login user
  login: async (
    username: string,
    password: string,
    rememberMe: boolean = false
  ): Promise<AuthResult<LoginResponse>> => {
    try {
      const data = {
        UserName: username,
        Password: password,
        RememberMe: rememberMe,
        Email: '',
        ReturnUrl: ''
      };

      const response = await fetchClient.post<{
        success: boolean;
        data: LoginResponse;
        errors?: string[];
      }>('/rest/auth/user/login', {
        message: data
      });

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
        errors: response.errors || ['Login failed']
      };
    } catch (error) {
      console.error('Login error:', error);
      return {
        success: false,
        errors: ['An error occurred during login']
      };
    }
  },

  // External login
  externalLogin: async (
    loginData: ExternalLoginData
  ): Promise<AuthResult<LoginResponse>> => {
    try {
      const response = await fetchClient.post<{
        success: boolean;
        data: LoginResponse;
        errors?: string[];
      }>('/rest/auth/user/external-login', {
        message: loginData
      });

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
      const response = await fetchClient.get<{
        success: boolean;
        data: string[];
      }>('/rest/auth/user/get-external-login-providers');
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
      const response = await fetchClient.get<{
        success: boolean;
        data: User;
        errors?: string[];
      }>('/rest/auth/user/current');

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

      const response = await fetchClient.post<{
        success: boolean;
        data: LoginResponse;
        errors?: string[];
      }>('/rest/auth/user/renew-token', {
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
  }
};
