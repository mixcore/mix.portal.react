import { User, Post, Comment, Category, Tag } from './types';

export const mockUsers: User[] = [
  { id: 1, name: 'Alex Johnson', username: 'alexj', avatar: '/avatars/01.png', bio: 'Full-stack developer focused on React and Node.js', joinedAt: '2023-01-15', followersCount: 142, followingCount: 75 },
  { id: 2, name: 'Maria Garcia', username: 'mgarcia', avatar: '/avatars/02.png', bio: 'UI/UX Designer with a passion for accessible interfaces', joinedAt: '2023-02-23', followersCount: 98, followingCount: 43 },
  { id: 3, name: 'Devon Lane', username: 'dlane', avatar: '/avatars/03.png', bio: 'Backend developer specializing in distributed systems', joinedAt: '2023-03-10', followersCount: 176, followingCount: 92 },
  { id: 4, name: 'Jenny Wilson', username: 'jwilson', avatar: '/avatars/04.png', bio: 'DevOps engineer and cloud architecture enthusiast', joinedAt: '2023-04-05', followersCount: 88, followingCount: 51 },
];

export const mockPosts: Post[] = [
  {
    id: 1,
    title: 'How to set up a proper development environment for React?',
    author: mockUsers[0],
    tags: ['react', 'javascript', 'development'],
    content: 'I\'ve been trying to set up a development environment for React that includes hot reloading, ESLint, and TypeScript support. Has anyone got recommendations for the best approach in 2024?\n\nI\'ve tried Create React App but it seems a bit outdated now, and I\'ve heard good things about Vite. Would appreciate any insights from those who have been using it in production.',
    replies: 15,
    likes: 32,
    createdAt: '2 hours ago',
    viewCount: 124,
    isPinned: false,
    isLocked: false,
  },
  {
    id: 2,
    title: 'Thinking about migrating from Angular to React - advice needed',
    author: mockUsers[1],
    tags: ['angular', 'react', 'migration'],
    content: 'Our team is considering migrating our large-scale application from Angular to React. Looking for advice from those who\'ve done it before. What are the pitfalls we should watch out for?\n\nThe application has around 200k lines of code, and we\'re debating whether to do a gradual migration or a complete rewrite. Has anyone had experience with tools like single-spa for micro-frontends approach?',
    replies: 28,
    likes: 45,
    createdAt: '1 day ago',
    viewCount: 256,
    isPinned: true,
    isLocked: false,
  },
  {
    id: 3,
    title: 'Best practices for state management in 2024',
    author: mockUsers[2],
    tags: ['state-management', 'frontend', 'react'],
    content: 'With so many options available (Redux, Zustand, Recoil, Jotai, etc), what are you all using for state management in your React applications in 2024? Looking for real-world experiences.\n\nI\'m particularly interested in hearing about performance comparisons and how well these solutions scale with complex state requirements. Has the React context + hooks combination made dedicated state management libraries less necessary?',
    replies: 42,
    likes: 78,
    createdAt: '3 days ago',
    viewCount: 387,
    isPinned: false,
    isLocked: false,
  },
  {
    id: 4,
    title: 'Styling solutions compared: Tailwind vs. styled-components vs. CSS Modules',
    author: mockUsers[3],
    tags: ['css', 'tailwind', 'styled-components'],
    content: 'I\'m evaluating different styling approaches for a new project and would love to hear about experiences, pros and cons of each approach. Is utility-first CSS like Tailwind CSS really the way to go in 2024?\n\nDoes anyone have metrics on bundle size, performance, and developer productivity when comparing these different approaches? Particularly interested in build times for large projects.',
    replies: 36,
    likes: 63,
    createdAt: '4 days ago',
    viewCount: 298,
    isPinned: false,
    isLocked: false,
  },
];

export const mockComments: Comment[] = [
  {
    id: 1,
    postId: 1,
    author: mockUsers[1],
    content: 'I would recommend using Vite for your React setup. It provides incredibly fast hot module reloading and has built-in TypeScript support. I\'ve been using it for over a year now and the developer experience is far superior to CRA.',
    likes: 12,
    createdAt: '1 hour ago',
  },
  {
    id: 2,
    postId: 1,
    author: mockUsers[3],
    content: 'Don\'t forget to add ESLint and Prettier to your project. They\'re essential for maintaining code quality, especially in a team environment. For Vite, there\'s a plugin called "vite-plugin-eslint" that integrates ESLint nicely.',
    likes: 8,
    createdAt: '45 minutes ago',
  },
  {
    id: 3,
    postId: 1,
    author: mockUsers[2],
    content: 'Another vote for Vite here. Also, consider setting up Vitest for unit testing - it integrates well with the Vite ecosystem and is much faster than Jest for React testing.',
    likes: 5,
    createdAt: '30 minutes ago',
  },
  {
    id: 4,
    postId: 2,
    author: mockUsers[0],
    content: 'We did a similar migration last year. My advice is to go with the micro-frontend approach using single-spa or module federation. Trying to do a complete rewrite in one go is almost always a bad idea for large applications.',
    likes: 15,
    createdAt: '12 hours ago',
  },
  {
    id: 5,
    postId: 2,
    author: mockUsers[2],
    content: 'Consider starting with shared components that can be used in both frameworks. This helps establish patterns for your React code while allowing for incremental migration.',
    likes: 11,
    createdAt: '10 hours ago',
  },
];

export const mockCategories: Category[] = [
  { id: 1, name: 'General', count: 124, description: 'General discussions about programming and technology', icon: 'Globe' },
  { id: 2, name: 'Frontend', count: 86, description: 'Discussions about frontend technologies and frameworks', icon: 'Layout' },
  { id: 3, name: 'Backend', count: 53, description: 'Server-side programming, APIs, and databases', icon: 'Server' },
  { id: 4, name: 'DevOps', count: 38, description: 'CI/CD, deployment, and infrastructure topics', icon: 'Terminal' },
  { id: 5, name: 'Career', count: 29, description: 'Career advice, interviews, and professional development', icon: 'Briefcase' },
  { id: 6, name: 'UI/UX', count: 21, description: 'User interface design, user experience, and accessibility', icon: 'Palette' },
];

export const mockTags: Tag[] = [
  { id: 1, name: 'javascript', count: 215, description: 'JavaScript language and ecosystem' },
  { id: 2, name: 'react', count: 184, description: 'React library and related tools' },
  { id: 3, name: 'node', count: 97, description: 'Node.js and server-side JavaScript' },
  { id: 4, name: 'typescript', count: 88, description: 'TypeScript language and typing system' },
  { id: 5, name: 'css', count: 76, description: 'CSS styling, layouts, and animations' },
  { id: 6, name: 'nextjs', count: 65, description: 'Next.js framework for React applications' },
];

export const forumStats = {
  totalPosts: 1258,
  totalUsers: 7542,
  totalComments: 8945,
  activeUsers: 342,
  postsToday: 78,
}; 