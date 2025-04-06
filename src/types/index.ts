export interface User {
    id: string;
    username: string;
    email: string;
    firstName?: string;
    lastName?: string;
    avatarUrl?: string;
    roles: string[];
}

export interface Post {
    id: string;
    title: string;
    excerpt?: string;
    content?: string;
    thumbnail?: string;
    createdDate: string;
    createdBy: string;
    status: number;
    type: string;
    template?: string;
    tags?: string[];
    categories?: Category[];
}

export interface Page {
    id: string;
    title: string;
    excerpt?: string;
    content?: string;
    thumbnail?: string;
    createdDate: string;
    createdBy: string;
    status: number;
    template?: string;
}

export interface Category {
    id: string;
    name: string;
    description?: string;
    parentId?: string;
}

export interface Media {
    id: string;
    fileName: string;
    fileSize: number;
    fileType: string;
    url: string;
    createdDate: string;
    createdBy: string;
}

export interface PaginationResult<T> {
    items: T[];
    totalItems: number;
    pageSize: number;
    pageIndex: number;
    totalPages: number;
}

export interface ApiResponse<T> {
    data: T;
    success: boolean;
    errors?: string[];
    status: number;
} 