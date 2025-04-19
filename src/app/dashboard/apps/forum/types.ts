export interface User {
  id: number;
  name: string;
  username: string;
  avatar: string;
  bio?: string;
  joinedAt?: string;
  followersCount?: number;
  followingCount?: number;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  author: User;
  tags: string[];
  replies: number;
  likes: number;
  createdAt: string;
  updatedAt?: string;
  viewCount?: number;
  isPinned?: boolean;
  isLocked?: boolean;
  isDeleted?: boolean;
}

export interface Comment {
  id: number;
  postId: number;
  author: User;
  content: string;
  likes: number;
  createdAt: string;
  updatedAt?: string;
  parentId?: number;
  isDeleted?: boolean;
}

export interface Category {
  id: number;
  name: string;
  count: number;
  slug?: string;
  description?: string;
  color?: string;
  icon?: string;
}

export interface Tag {
  id: number;
  name: string;
  count: number;
  slug?: string;
  description?: string;
}

export interface Notification {
  id: number;
  type: 'mention' | 'reply' | 'like' | 'follow' | 'system';
  message: string;
  createdAt: string;
  isRead: boolean;
  link?: string;
  user?: User;
}

export interface ForumStats {
  totalPosts: number;
  totalUsers: number;
  totalComments: number;
  activeUsers: number;
  postsToday: number;
}

export interface UserPreferences {
  emailNotifications: boolean;
  pushNotifications: boolean;
  darkMode: boolean;
  language: string;
  digestFrequency: 'daily' | 'weekly' | 'never';
} 