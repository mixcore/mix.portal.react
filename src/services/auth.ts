import axios from 'axios';
import { User } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || '';

export const AuthService = {
    // Login user
    login: async (username: string, password: string) => {
        try {
            const response = await axios.post(`${API_URL}/rest/security/login`, {
                username,
                password,
            });

            if (response.data && response.data.success) {
                const { accessToken, refreshToken } = response.data.data;

                // Store tokens in localStorage
                localStorage.setItem('authToken', accessToken);
                localStorage.setItem('refreshToken', refreshToken);

                return {
                    success: true,
                    data: response.data.data,
                };
            }

            return {
                success: false,
                errors: response.data?.errors || ['Login failed'],
            };
        } catch (error) {
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
            const token = localStorage.getItem('authToken');

            if (!token) return null;

            const response = await axios.get(`${API_URL}/rest/security/user/current`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.data && response.data.success) {
                return response.data.data;
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
}; 