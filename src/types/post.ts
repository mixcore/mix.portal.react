import { MixContentStatus } from './content';

export interface Post {
  id: number;
  createdDateTime: string;
  lastModified?: string;
  createdBy?: string;
  modifiedBy?: string;
  priority: number;
  status: MixContentStatus;
  isDeleted: boolean;
  tenantId: number;
  specificulture?: string;
  icon?: string;
  isPublic: boolean;
  parentId: number;
  mixCultureId: number;
  title?: string;
  excerpt?: string;
  content?: string;
  layoutId?: number;
  templateId?: number;
  image?: string;
  source?: string;
  seoDescription?: string;
  seoKeywords?: string;
  seoName?: string;
  seoTitle?: string;
}

export interface PostListResponse {
  items: Post[];
  totalItems: number;
  totalPages: number;
  pageIndex: number;
  pageSize: number;
}

export interface PostQueryParams {
  pageIndex?: number;
  pageSize?: number;
  search?: string;
  status?: MixContentStatus;
  from?: string;
  to?: string;
  orderBy?: string;
  direction?: 'asc' | 'desc';
}
