import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ApiResponse, PaginationResult, Post, Page, User, Media } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || '';

// Create axios instance
const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add request interceptor for auth token
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken');
    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Generic fetch data function
async function fetchData<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try {
        const response: AxiosResponse<ApiResponse<T>> = await axiosInstance.get(url, config);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response?.data) {
            return error.response.data as ApiResponse<T>;
        }
        return {
            data: {} as T,
            success: false,
            errors: ['An error occurred while fetching data'],
            status: 500,
        };
    }
}

// Generic post data function
async function postData<T, R = T>(url: string, data: T, config?: AxiosRequestConfig): Promise<ApiResponse<R>> {
    try {
        const response: AxiosResponse<ApiResponse<R>> = await axiosInstance.post(url, data, config);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response?.data) {
            return error.response.data as ApiResponse<R>;
        }
        return {
            data: {} as R,
            success: false,
            errors: ['An error occurred while posting data'],
            status: 500,
        };
    }
}

// Posts API
export const PostsApi = {
    getPosts: (pageIndex: number = 0, pageSize: number = 10, searchText?: string) => {
        const params = { pageIndex, pageSize, searchText };
        return fetchData<PaginationResult<Post>>('/rest/mix-post/search', { params });
    },
    getPost: (id: string) => {
        return fetchData<Post>(`/rest/mix-post/${id}`);
    },
    createPost: (post: Partial<Post>) => {
        return postData<Partial<Post>, Post>('/rest/mix-post', post);
    },
    updatePost: (id: string, post: Partial<Post>) => {
        return postData<Partial<Post>, Post>(`/rest/mix-post/${id}`, post);
    },
    deletePost: (id: string) => {
        return axiosInstance.delete(`/rest/mix-post/${id}`).then(res => res.data);
    }
};

// Pages API
export const PagesApi = {
    getPages: (pageIndex: number = 0, pageSize: number = 10, searchText?: string) => {
        const params = { pageIndex, pageSize, searchText };
        return fetchData<PaginationResult<Page>>('/rest/mix-page/search', { params });
    },
    getPage: (id: string) => {
        return fetchData<Page>(`/rest/mix-page/${id}`);
    },
    createPage: (page: Partial<Page>) => {
        return postData<Partial<Page>, Page>('/rest/mix-page', page);
    },
    updatePage: (id: string, page: Partial<Page>) => {
        return postData<Partial<Page>, Page>(`/rest/mix-page/${id}`, page);
    },
    deletePage: (id: string) => {
        return axiosInstance.delete(`/rest/mix-page/${id}`).then(res => res.data);
    }
};

// User API
export const UsersApi = {
    getUsers: (pageIndex: number = 0, pageSize: number = 10, searchText?: string) => {
        const params = { pageIndex, pageSize, searchText };
        return fetchData<PaginationResult<User>>('/rest/mix-user/search', { params });
    },
    getUser: (id: string) => {
        return fetchData<User>(`/rest/mix-user/${id}`);
    },
    getCurrentUser: () => {
        return fetchData<User>('/rest/mix-user/current');
    }
};

// Media API
export const MediaApi = {
    getMedia: (pageIndex: number = 0, pageSize: number = 10, searchText?: string) => {
        const params = { pageIndex, pageSize, searchText };
        return fetchData<PaginationResult<Media>>('/rest/mix-media/search', { params });
    },
    uploadMedia: (file: File) => {
        const formData = new FormData();
        formData.append('file', file);
        return axiosInstance.post('/rest/mix-media/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }).then(res => res.data);
    }
}; 