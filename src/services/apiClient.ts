'use client';

// Import only the browser-compatible parts of axios
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || '';

class ApiClient {
    private instance: any;
    private refreshAttempted: boolean = false;

    constructor() {
        this.instance = axios.create({
            baseURL: API_URL,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        this.setupInterceptors();
    }

    private setupInterceptors(): void {
        // Request interceptor
        this.instance.interceptors.request.use(
            (config: any) => {
                const token = this.getAuthToken();
                if (token && config.headers) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            },
            (error: any) => Promise.reject(error)
        );

        // Response interceptor
        this.instance.interceptors.response.use(
            (response: any) => response,
            async (error: any) => {
                const originalRequest = error.config;

                // If we get a 401 and we haven't tried to refresh the token yet
                if (error.response?.status === 401 && !this.refreshAttempted && originalRequest) {
                    this.refreshAttempted = true;
                    originalRequest._retry = true;

                    try {
                        // Try to refresh the token
                        const refreshToken = localStorage.getItem('refreshToken');
                        if (!refreshToken) {
                            this.logout();
                            return Promise.reject(error);
                        }

                        const response = await axios.post(`${API_URL}/rest/security/refresh-token`, {
                            refreshToken,
                        });

                        if (response.data?.success) {
                            const { accessToken, refreshToken: newRefreshToken } = response.data.data;

                            // Store the new tokens
                            localStorage.setItem('authToken', accessToken);
                            localStorage.setItem('refreshToken', newRefreshToken);

                            // Retry the original request with the new token
                            originalRequest.headers = {
                                ...originalRequest.headers,
                                Authorization: `Bearer ${accessToken}`,
                            };

                            this.refreshAttempted = false;
                            return this.instance(originalRequest);
                        } else {
                            this.logout();
                            return Promise.reject(error);
                        }
                    } catch (refreshError) {
                        this.logout();
                        return Promise.reject(error);
                    }
                }

                // If refresh token failed or other error occurred
                if (error.response?.status === 401) {
                    this.logout();
                }

                return Promise.reject(error);
            }
        );
    }

    private getAuthToken(): string | null {
        if (typeof window === 'undefined') return null;
        return localStorage.getItem('authToken');
    }

    private logout(): void {
        if (typeof window === 'undefined') return;
        localStorage.removeItem('authToken');
        localStorage.removeItem('refreshToken');
        window.location.href = '/security/login';
    }

    // Generic API methods
    async get<T>(url: string, config?: any): Promise<T> {
        try {
            const response = await this.instance.get(url, config);
            return response.data;
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async post<T, R = any>(url: string, data?: T, config?: any): Promise<R> {
        try {
            const response = await this.instance.post(url, data, config);
            return response.data;
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async put<T, R = any>(url: string, data?: T, config?: any): Promise<R> {
        try {
            const response = await this.instance.put(url, data, config);
            return response.data;
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async delete<T>(url: string, config?: any): Promise<T> {
        try {
            const response = await this.instance.delete(url, config);
            return response.data;
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    private handleError(error: any): void {
        if (error.response) {
            // The request was made and the server responded with a status code
            // outside of the range of 2xx
            console.error('API Error Response:', error.response.data);
        } else if (error.request) {
            // The request was made but no response was received
            console.error('API Error Request:', error.request);
        } else {
            // Something happened in setting up the request
            console.error('API Error:', error.message);
        }
    }
}

export const apiClient = new ApiClient(); 