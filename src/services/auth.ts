import { User } from '@/types';
import { apiClient } from './apiClient';

export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
    user: User;
}

export interface AuthResult<T = any> {
    success: boolean;
    data?: T;
    errors?: string[];
}

export const AuthService = {
    // Login user
    login: async (username: string, password: string): Promise<AuthResult<LoginResponse>> => {
        try {
            const response = await apiClient.post<{ username: string; password: string }, { success: boolean; data: LoginResponse; errors?: string[] }>('/rest/security/login', {
                username,
                password,
            });

            if (response && response.success) {
                const { accessToken, refreshToken } = response.data;

                // Store tokens in localStorage
                localStorage.setItem('authToken', accessToken);
                localStorage.setItem('refreshToken', refreshToken);

                return {
                    success: true,
                    data: response.data,
                };
            }

            return {
                success: false,
                errors: response.errors || ['Login failed'],
            };
        } catch (error) {
            console.error('Login error:', error);
            return {
                success: false,
                errors: ['An error occurred during login'],
            };
        }
    },

    // Logout user
    logout: () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('refreshToken');
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
            const response = await apiClient.get<{ success: boolean; data: User; errors?: string[] }>('/rest/security/user/current');

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
    isInRole: async (role: string): Promise<boolean> => {
        const user = await AuthService.getCurrentUser();

        if (!user) return false;

        return user.roles.includes(role);
    },

    // Refresh token
    refreshToken: async (): Promise<AuthResult<LoginResponse>> => {
        try {
            const refreshToken = localStorage.getItem('refreshToken');

            if (!refreshToken) {
                return {
                    success: false,
                    errors: ['No refresh token available'],
                };
            }

            const response = await apiClient.post<{ refreshToken: string }, { success: boolean; data: LoginResponse; errors?: string[] }>('/rest/security/refresh-token', {
                refreshToken,
            });

            if (response && response.success) {
                const { accessToken, refreshToken: newRefreshToken } = response.data;

                // Store tokens in localStorage
                localStorage.setItem('authToken', accessToken);
                localStorage.setItem('refreshToken', newRefreshToken);

                return {
                    success: true,
                    data: response.data,
                };
            }

            return {
                success: false,
                errors: response.errors || ['Token refresh failed'],
            };
        } catch (error) {
            console.error('Token refresh error:', error);
            return {
                success: false,
                errors: ['An error occurred while refreshing token'],
            };
        }
    },
}; 