# AngularJS to React/Next.js Migration Patterns

This guide provides a reference for common AngularJS patterns and their equivalent implementations in React/Next.js. Use this as a reference when migrating components and functionality.

## Table of Contents

- [Basic Concepts](#basic-concepts)
- [Component Structure](#component-structure)
- [Data Binding](#data-binding)
- [Directives to Components](#directives-to-components)
- [Services to Hooks](#services-to-hooks)
- [Routing](#routing)
- [Forms](#forms)
- [HTTP Requests](#http-requests)
- [State Management](#state-management)
- [Dependency Injection](#dependency-injection)

## Basic Concepts

| AngularJS | React/Next.js | Notes |
|-----------|---------------|-------|
| Modules | N/A | React doesn't have a direct equivalent to Angular modules. Next.js has a file-based structure |
| Controllers | Components | React uses functional or class components |
| Templates | JSX | Templates are written directly in JavaScript using JSX |
| Scope | Props & State | Component state and props replace Angular's scope |
| Dependency Injection | Imports & Context | React uses ES imports and Context API |
| Two-way Binding | One-way + Handlers | React uses one-way data flow with handlers for updates |

## Component Structure

### AngularJS Component

```javascript
// AngularJS component
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

### React/Next.js Component

```tsx
// React/Next.js component
'use client';

import { useState, useEffect } from 'react';
import { getUser, updateUser } from '@/services/userService';

export default function UserProfile() {
  const [user, setUser] = useState({});
  
  useEffect(() => {
    async function fetchUser() {
      const userData = await getUser();
      setUser(userData);
    }
    fetchUser();
  }, []);
  
  const handleUpdateUser = async () => {
    await updateUser(user);
  };
  
  return (
    <div className="user-profile">
      <h1>{user.name}</h1>
      <button onClick={handleUpdateUser}>Update User</button>
    </div>
  );
}
```

## Data Binding

### AngularJS Data Binding

```html
<!-- AngularJS Template -->
<div>
  <h1>{{user.name}}</h1>
  <input type="text" ng-model="user.name" />
  <button ng-click="updateUser()">Update</button>
</div>
```

### React/Next.js Data Binding

```tsx
// React/Next.js JSX
<div>
  <h1>{user.name}</h1>
  <input 
    type="text" 
    value={user.name} 
    onChange={(e) => setUser({...user, name: e.target.value})} 
  />
  <button onClick={handleUpdateUser}>Update</button>
</div>
```

## Directives to Components

### AngularJS Directives

```javascript
// AngularJS directive
angular.module('app').directive('userCard', function() {
  return {
    restrict: 'E',
    templateUrl: 'user-card.html',
    scope: {
      user: '=',
      onDelete: '&'
    },
    link: function(scope, element, attrs) {
      scope.isAdmin = attrs.admin === 'true';
    }
  };
});
```

### React/Next.js Components

```tsx
// React/Next.js component
interface UserCardProps {
  user: User;
  onDelete: (id: string) => void;
  isAdmin?: boolean;
}

function UserCard({ user, onDelete, isAdmin = false }: UserCardProps) {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      {isAdmin && (
        <button onClick={() => onDelete(user.id)}>Delete</button>
      )}
    </div>
  );
}
```

## Services to Hooks

### AngularJS Service

```javascript
// AngularJS service
angular.module('app').service('UserService', function($http) {
  this.getUsers = function() {
    return $http.get('/api/users');
  };
  
  this.getUser = function(id) {
    return $http.get('/api/users/' + id);
  };
  
  this.updateUser = function(user) {
    return $http.put('/api/users/' + user.id, user);
  };
});
```

### React/Next.js Custom Hook

```tsx
// React hook and API service
import axios from 'axios';

// API service
export const UserApi = {
  getUsers: () => axios.get('/api/users').then(res => res.data),
  getUser: (id: string) => axios.get(`/api/users/${id}`).then(res => res.data),
  updateUser: (user: User) => axios.put(`/api/users/${user.id}`, user).then(res => res.data)
};

// Custom hook
export function useUser(id?: string) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!id) return;
    
    async function fetchUser() {
      try {
        setLoading(true);
        const data = await UserApi.getUser(id);
        setUser(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchUser();
  }, [id]);

  return { user, loading, error, setUser };
}
```

## Routing

### AngularJS Routing

```javascript
// AngularJS routing
angular.module('app').config(function($routeProvider) {
  $routeProvider
    .when('/users', {
      templateUrl: 'users/list.html',
      controller: 'UsersController'
    })
    .when('/users/:id', {
      templateUrl: 'users/detail.html',
      controller: 'UserDetailController'
    })
    .otherwise({
      redirectTo: '/users'
    });
});
```

### Next.js App Router

```tsx
// Next.js uses file-based routing with the App Router

// src/app/users/page.tsx - Users list page (/users)
export default function UsersPage() {
  // ...
}

// src/app/users/[id]/page.tsx - User detail page (/users/123)
export default function UserDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  // ...
}

// src/app/not-found.tsx - 404 page
export default function NotFound() {
  // ...
}
```

## Forms

### AngularJS Forms

```html
<!-- AngularJS Form -->
<form name="userForm" ng-submit="submitForm(userForm.$valid)" novalidate>
  <div class="form-group">
    <label>Name</label>
    <input 
      type="text" 
      name="name" 
      ng-model="user.name" 
      required 
      ng-minlength="2"
    />
    <div ng-if="userForm.name.$error.required && userForm.name.$touched">
      Name is required
    </div>
  </div>
  
  <div class="form-group">
    <label>Email</label>
    <input 
      type="email" 
      name="email" 
      ng-model="user.email" 
      required
    />
    <div ng-if="userForm.email.$error.required && userForm.email.$touched">
      Email is required
    </div>
    <div ng-if="userForm.email.$error.email">
      Invalid email format
    </div>
  </div>
  
  <button type="submit" ng-disabled="userForm.$invalid">Submit</button>
</form>
```

### React with Formik & Yup

```tsx
// React form with Formik and Yup
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name is too short')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
});

export default function UserForm({ onSubmit, initialValues = {} }) {
  return (
    <Formik
      initialValues={{ name: '', email: '', ...initialValues }}
      validationSchema={UserSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, touched, errors }) => (
        <Form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Field
              as={Input}
              id="name"
              name="name"
              className={errors.name && touched.name ? 'border-red-500' : ''}
            />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Field
              as={Input}
              id="email"
              name="email"
              type="email"
              className={errors.email && touched.email ? 'border-red-500' : ''}
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
          </div>
          
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}
```

## HTTP Requests

### AngularJS HTTP

```javascript
// AngularJS HTTP
angular.module('app').controller('UsersController', function($scope, $http) {
  $scope.users = [];
  $scope.loading = true;
  
  $http.get('/api/users')
    .then(function(response) {
      $scope.users = response.data;
      $scope.loading = false;
    })
    .catch(function(error) {
      $scope.error = error;
      $scope.loading = false;
    });
});
```

### React/Next.js with Axios

```tsx
// React with Axios
import { useState, useEffect } from 'react';
import axios from 'axios';

function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/users');
        setUsers(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUsers();
  }, []);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

## State Management

### AngularJS State Management

```javascript
// AngularJS shared service for state management
angular.module('app').service('AppState', function() {
  this.currentUser = null;
  this.settings = {};
  
  this.setCurrentUser = function(user) {
    this.currentUser = user;
  };
  
  this.updateSettings = function(settings) {
    this.settings = { ...this.settings, ...settings };
  };
});

// Using the state service
angular.module('app').controller('AppController', function($scope, AppState) {
  $scope.currentUser = AppState.currentUser;
  
  AppState.setCurrentUser({ id: 1, name: 'John Doe' });
});
```

### React Context API

```tsx
// React Context for state management
import { createContext, useContext, useState, ReactNode } from 'react';

// Types
interface User {
  id: string;
  name: string;
}

interface AppState {
  currentUser: User | null;
  settings: Record<string, any>;
}

interface AppStateContextType extends AppState {
  setCurrentUser: (user: User | null) => void;
  updateSettings: (settings: Record<string, any>) => void;
}

// Create context
const AppStateContext = createContext<AppStateContextType | undefined>(undefined);

// Provider component
export function AppStateProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [settings, setSettings] = useState<Record<string, any>>({});
  
  const updateSettings = (newSettings: Record<string, any>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };
  
  return (
    <AppStateContext.Provider 
      value={{
        currentUser,
        settings,
        setCurrentUser,
        updateSettings
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
}

// Custom hook to use the context
export function useAppState() {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
}

// Using the state hook
function UserProfile() {
  const { currentUser, setCurrentUser } = useAppState();
  
  // Use the state
}
```

## Dependency Injection

### AngularJS Dependency Injection

```javascript
// AngularJS DI
angular.module('app').service('LogService', function() {
  this.log = function(message) {
    console.log(message);
  };
});

angular.module('app').service('UserService', function($http, LogService) {
  this.getUsers = function() {
    LogService.log('Getting users');
    return $http.get('/api/users');
  };
});

angular.module('app').controller('UserController', function($scope, UserService) {
  $scope.users = [];
  
  UserService.getUsers().then(function(response) {
    $scope.users = response.data;
  });
});
```

### React Composition

```tsx
// React composition pattern
// Create services
const createLogService = () => ({
  log: (message: string) => console.log(message),
});

const createUserService = (logService) => ({
  getUsers: async () => {
    logService.log('Getting users');
    const response = await fetch('/api/users');
    return response.json();
  },
});

// Create hooks to use services
function useServices() {
  // You can use singletons or React.memo to avoid recreating services
  const logService = React.useMemo(() => createLogService(), []);
  const userService = React.useMemo(() => createUserService(logService), [logService]);
  
  return { logService, userService };
}

// Using the services in components
function UsersList() {
  const { userService } = useServices();
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    async function fetchUsers() {
      const data = await userService.getUsers();
      setUsers(data);
    }
    fetchUsers();
  }, [userService]);
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

## Additional Resources

- [Official React Documentation](https://reactjs.org/docs/getting-started.html)
- [Next.js Documentation](https://nextjs.org/docs)
- [AngularJS to React Migration Guide](https://reactjs.org/docs/faq-migration.html)
- [shadcn/ui Documentation](https://ui.shadcn.com/docs)
- [Formik Documentation](https://formik.org/docs/overview) 