'use client';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

class FetchClient {
  private refreshAttempted: boolean = false;

  private getAuthToken(): string | null {
    // Check if window is available (client-side only)
    if (typeof window !== 'undefined') {
      try {
        return localStorage.getItem('authToken');
      } catch (error) {
        console.error('Error accessing localStorage:', error);
        return null;
      }
    }
    return null;
  }

  private logout(): void {
    // Check if window is available (client-side only)
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem('authToken');
        localStorage.removeItem('refreshToken');
        window.location.href = '/security/login';
      } catch (error) {
        console.error('Error accessing localStorage during logout:', error);
      }
    }
  }

  private createHeaders(customHeaders?: HeadersInit): Headers {
    const headers = new Headers(customHeaders);

    if (!headers.has('Content-Type')) {
      headers.set('Content-Type', 'application/json');
    }

    const token = this.getAuthToken();
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  }

  private async handleResponse(response: Response) {
    if (response.status === 401 && !this.refreshAttempted) {
      // Attempt to refresh the token
      this.refreshAttempted = true;

      try {
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) {
          this.logout();
          throw new Error('No refresh token available');
        }

        const refreshResponse = await fetch(
          `${API_URL}/rest/security/refresh-token`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ refreshToken })
          }
        );

        const refreshData = await refreshResponse.json();

        if (refreshResponse.ok && refreshData.success) {
          const { accessToken, refreshToken: newRefreshToken } =
            refreshData.data;

          // Store the new tokens
          localStorage.setItem('authToken', accessToken);
          localStorage.setItem('refreshToken', newRefreshToken);

          this.refreshAttempted = false;

          // Retry the original request with the new token
          const originalRequest = {
            url: response.url,
            options: {
              method: 'GET', // Default to GET as we can't access original method
              headers: this.createHeaders()
            }
          };

          return this.fetchWithInterceptor(
            originalRequest.url,
            originalRequest.options
          );
        } else {
          this.logout();
          throw new Error('Token refresh failed');
        }
      } catch (error) {
        this.logout();
        throw error;
      }
    }

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || `HTTP error! status: ${response.status}`
      );
    }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return response.json();
    }

    return response.text();
  }

  private async fetchWithInterceptor(
    url: string,
    options: RequestInit = {}
  ): Promise<any> {
    try {
      const response = await fetch(url, options);
      return this.handleResponse(response);
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  }

  async get<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = endpoint.startsWith('http')
      ? endpoint
      : `${API_URL}${endpoint}`;

    return this.fetchWithInterceptor(url, {
      method: 'GET',
      headers: this.createHeaders(options.headers),
      ...options
    });
  }

  async post<T>(
    endpoint: string,
    data?: any,
    options: RequestInit = {}
  ): Promise<T> {
    const url = endpoint.startsWith('http')
      ? endpoint
      : `${API_URL}${endpoint}`;

    return this.fetchWithInterceptor(url, {
      method: 'POST',
      headers: this.createHeaders(options.headers),
      body: JSON.stringify(data),
      ...options
    });
  }

  async put<T>(
    endpoint: string,
    data?: any,
    options: RequestInit = {}
  ): Promise<T> {
    const url = endpoint.startsWith('http')
      ? endpoint
      : `${API_URL}${endpoint}`;

    return this.fetchWithInterceptor(url, {
      method: 'PUT',
      headers: this.createHeaders(options.headers),
      body: JSON.stringify(data),
      ...options
    });
  }

  async delete<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = endpoint.startsWith('http')
      ? endpoint
      : `${API_URL}${endpoint}`;

    return this.fetchWithInterceptor(url, {
      method: 'DELETE',
      headers: this.createHeaders(options.headers),
      ...options
    });
  }
}

export const fetchClient = new FetchClient();
