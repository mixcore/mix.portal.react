import { AxiosRequestConfig } from 'axios';
import { ApiResponse, PaginationResult, Post, Page, User, Media } from '@/types';
import { apiClient } from './apiClient';

// Generic fetch data function with apiClient
async function fetchData<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try {
        const response = await apiClient.get<ApiResponse<T>>(url, config);
        return response;
    } catch (error) {
        console.error('Fetch data error:', error);
        return {
            data: {} as T,
            success: false,
            errors: ['An error occurred while fetching data'],
            status: 500,
        };
    }
}

// Generic post data function with apiClient
async function postData<T, R = T>(url: string, data: T, config?: AxiosRequestConfig): Promise<ApiResponse<R>> {
    try {
        const response = await apiClient.post<T, ApiResponse<R>>(url, data, config);
        return response;
    } catch (error) {
        console.error('Post data error:', error);
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
        return apiClient.delete<ApiResponse<boolean>>(`/rest/mix-post/${id}`);
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
        return apiClient.delete<ApiResponse<boolean>>(`/rest/mix-page/${id}`);
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
    },
    createUser: (user: Partial<User>) => {
        return postData<Partial<User>, User>('/rest/mix-user', user);
    },
    updateUser: (id: string, user: Partial<User>) => {
        return postData<Partial<User>, User>(`/rest/mix-user/${id}`, user);
    },
    deleteUser: (id: string) => {
        return apiClient.delete<ApiResponse<boolean>>(`/rest/mix-user/${id}`);
    }
};

// Media API
export const MediaApi = {
    getMedia: (pageIndex: number = 0, pageSize: number = 10, searchText?: string) => {
        const params = { pageIndex, pageSize, searchText };
        return fetchData<PaginationResult<Media>>('/rest/mix-media/search', { params });
    },
    getMediaItem: (id: string) => {
        return fetchData<Media>(`/rest/mix-media/${id}`);
    },
    uploadMedia: (file: File) => {
        const formData = new FormData();
        formData.append('file', file);
        return apiClient.post<FormData, ApiResponse<Media>>('/rest/mix-media/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    },
    deleteMedia: (id: string) => {
        return apiClient.delete<ApiResponse<boolean>>(`/rest/mix-media/${id}`);
    }
}; 