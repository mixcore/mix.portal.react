# AngularJS to React/Next.js Migration Patterns

This guide provides essential patterns and equivalents when migrating components from AngularJS to React/Next.js.

## Core Concept Mapping

| AngularJS | React/Next.js | Notes |
|-----------|---------------|-------|
| Modules | Files/Directories | React uses file-based organization |
| Controllers | Components | Functional components with hooks |
| Templates | JSX | Templates are embedded in JavaScript |
| Scope | Props & State | Component props and state |
| Two-way Binding | One-way + Handlers | One-way data flow with event handlers |
| Services | Custom Hooks | Services become hooks or utility functions |
| Directives | Components | Reusable UI components |
| Filters | Utility Functions | Pure functions for data transformation |

## Component Patterns

### Basic Component

#### AngularJS Component

```javascript
angular.module('app').component('userProfile', {
  templateUrl: 'user-profile.html',
  controller: function($scope, UserService) {
    $scope.user = {};
    
    UserService.getUser().then(function(user) {
      $scope.user = user;
    });
    
    $scope.updateUser = function() {
      UserService.updateUser($scope.user);
    };
  }
});
```

```html
<!-- user-profile.html -->
<div class="user-profile">
  <h2>{{user.name}}</h2>
  <p>{{user.email}}</p>
  <button ng-click="updateUser()">Update</button>
</div>
```

#### React/Next.js Component

```tsx
'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@/hooks/useUser';

export default function UserProfile() {
  const { user, loading, error, updateUser } = useUser();
  
  const handleUpdate = async () => {
    await updateUser(user);
  };
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}
```

## Data Binding Patterns

### Form Input Binding

#### AngularJS Form Binding

```html
<form ng-submit="submitForm()">
  <input type="text" ng-model="user.name" />
  <input type="email" ng-model="user.email" />
  <button type="submit">Save</button>
</form>
```

```javascript
$scope.submitForm = function() {
  UserService.saveUser($scope.user);
};
```

#### React/Next.js Form Binding

```tsx
import { useState } from 'react';

function UserForm({ onSave }) {
  const [user, setUser] = useState({ name: '', email: '' });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(user);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
      />
      <button type="submit">Save</button>
    </form>
  );
}
```

### React Hook Form Implementation

For more complex forms, use React Hook Form:

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const userSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email format'),
});

function UserForm({ onSave }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(userSchema),
  });
  
  return (
    <form onSubmit={handleSubmit(onSave)}>
      <div>
        <input {...register('name')} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <input {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <button type="submit">Save</button>
    </form>
  );
}
```

## Service to Hook Patterns

### API Service

#### AngularJS Service

```javascript
angular.module('app').service('PostService', function($http) {
  this.getPosts = function() {
    return $http.get('/api/posts');
  };
  
  this.getPost = function(id) {
    return $http.get('/api/posts/' + id);
  };
  
  this.createPost = function(post) {
    return $http.post('/api/posts', post);
  };
});
```

#### React API Service + Hook

```typescript
// services/postService.ts
import axios from 'axios';

export interface Post {
  id: string;
  title: string;
  content: string;
}

export const postService = {
  getPosts: async (): Promise<Post[]> => {
    const response = await axios.get('/api/posts');
    return response.data;
  },
  
  getPost: async (id: string): Promise<Post> => {
    const response = await axios.get(`/api/posts/${id}`);
    return response.data;
  },
  
  createPost: async (post: Omit<Post, 'id'>): Promise<Post> => {
    const response = await axios.post('/api/posts', post);
    return response.data;
  }
};

// hooks/usePosts.ts
import { useState, useEffect } from 'react';
import { Post, postService } from '@/services/postService';

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const data = await postService.getPosts();
      setPosts(data);
      setError(null);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchPosts();
  }, []);
  
  return { posts, loading, error, refetch: fetchPosts };
}
```

## Routing Patterns

### AngularJS Route Configuration

```javascript
angular.module('app').config(function($routeProvider) {
  $routeProvider
    .when('/posts', {
      templateUrl: 'posts/list.html',
      controller: 'PostsController'
    })
    .when('/posts/:id', {
      templateUrl: 'posts/detail.html',
      controller: 'PostDetailController'
    })
    .otherwise({
      redirectTo: '/posts'
    });
});
```

### Next.js App Router

Next.js uses file-based routing with the App Router:

```
src/app/
├── posts/
│   ├── page.tsx       # /posts route
│   └── [id]/
│       └── page.tsx   # /posts/:id route
├── layout.tsx
└── not-found.tsx      # 404 fallback
```

```tsx
// src/app/posts/page.tsx
export default function PostsPage() {
  // Fetch and display posts
  return (
    <div>
      <h1>Posts</h1>
      {/* Posts list */}
    </div>
  );
}

// src/app/posts/[id]/page.tsx
export default function PostDetailPage({ params }: { params: { id: string } }) {
  // Access id from params and fetch post
  return (
    <div>
      <h1>Post {params.id}</h1>
      {/* Post details */}
    </div>
  );
}
```

## Conditional Rendering

### AngularJS Conditional Rendering

```html
<div ng-if="isLoggedIn">
  Welcome, {{user.name}}
</div>
<div ng-if="!isLoggedIn">
  Please log in
</div>

<ul>
  <li ng-repeat="item in items">
    {{item.name}}
  </li>
</ul>

<div ng-show="isVisible">This is visible</div>
```

### React/Next.js Conditional Rendering

```tsx
{isLoggedIn ? (
  <div>Welcome, {user.name}</div>
) : (
  <div>Please log in</div>
)}

<ul>
  {items.map(item => (
    <li key={item.id}>{item.name}</li>
  ))}
</ul>

{isVisible && <div>This is visible</div>}
```

## State Management Patterns

### AngularJS State Service

```javascript
angular.module('app').service('StateService', function() {
  this.currentUser = null;
  
  this.setCurrentUser = function(user) {
    this.currentUser = user;
  };
  
  this.isLoggedIn = function() {
    return !!this.currentUser;
  };
});
```

### React Context API

```tsx
import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  
  return (
    <AuthContext.Provider 
      value={{
        user,
        setUser,
        isLoggedIn: !!user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
```

## Event Handling Patterns

### AngularJS Event Handling

```html
<button ng-click="handleClick($event)">Click me</button>
<input ng-change="handleChange()" ng-model="inputValue" />
```

```javascript
$scope.handleClick = function(event) {
  console.log('Button clicked', event);
};

$scope.handleChange = function() {
  console.log('Input changed', $scope.inputValue);
};
```

### React/Next.js Event Handling

```tsx
function MyComponent() {
  const [inputValue, setInputValue] = useState('');
  
  const handleClick = (event: React.MouseEvent) => {
    console.log('Button clicked', event);
  };
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    console.log('Input changed', event.target.value);
  };
  
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <input
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
}
```

## Lifecycle Method Patterns

### AngularJS Lifecycle Hooks

```javascript
angular.module('app').controller('MyController', function($scope) {
  $scope.$onInit = function() {
    console.log('Component initialized');
  };
  
  $scope.$onChanges = function(changes) {
    console.log('Props changed', changes);
  };
  
  $scope.$onDestroy = function() {
    console.log('Component destroyed');
  };
});
```

### React/Next.js Lifecycle with useEffect

```tsx
import { useEffect, useState } from 'react';

function MyComponent({ id }) {
  const [data, setData] = useState(null);
  
  // On mount (similar to $onInit)
  useEffect(() => {
    console.log('Component mounted');
    
    // Cleanup function (similar to $onDestroy)
    return () => {
      console.log('Component unmounted');
    };
  }, []);
  
  // On prop change (similar to $onChanges)
  useEffect(() => {
    console.log('ID prop changed', id);
    fetchData(id);
  }, [id]);
  
  const fetchData = async (id) => {
    // Fetch data with the ID
  };
  
  return <div>{/* Component JSX */}</div>;
}
```

## Migration Strategy Tips

1. **Start with stateless components**: Begin with simpler components that don't manage complex state
2. **Migrate services to hooks**: Convert Angular services to React hooks and API services
3. **Use React context for global state**: Replace Angular services used for global state with React Context
4. **Leverage TypeScript**: Add strong typing to improve code quality and catch errors
5. **Implement one feature at a time**: Complete the migration of one feature before moving to the next
6. **Rewrite templates in JSX**: Convert Angular templates to JSX, adapting directives to React patterns
7. **Test thoroughly**: Ensure the migrated components work as expected before proceeding 