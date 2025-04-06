# Mixcore Next.js Migration with Tailwind CSS and shadcn/ui

This project is a migration of the Mixcore application from AngularJS to Next.js, enhanced with Tailwind CSS and shadcn/ui components.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app` - Next.js App Router pages and layouts
- `src/components` - Reusable React components
  - `src/components/ui` - shadcn/ui components
  - `src/components/layout` - Layout components like Header, Sidebar, etc.
- `src/lib` - Utility functions and helpers
- `src/services` - API services and utilities
- `src/styles` - Tailwind CSS and global styles
- `src/types` - TypeScript type definitions

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret-key-here
```

## Tech Stack

- **Next.js**: React framework with App Router
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: UI components built with Radix UI and Tailwind CSS
- **TypeScript**: Type safety
- **Axios**: HTTP client for API requests
- **NextAuth.js**: Authentication for Next.js
- **Formik & Yup**: Form handling and validation

## Migration Notes

This project migrates from AngularJS to Next.js with the following changes:

1. Replaced AngularJS controllers with React components
2. Migrated Angular services to React hooks and API services
3. Converted Angular templates to JSX
4. Moved from UI Bootstrap to Tailwind CSS and shadcn/ui
5. Implemented Next.js App Router for routing
6. Added TypeScript for type safety

## Features

- Modern React-based architecture with Next.js App Router
- Server-side rendering and Static Site Generation for improved SEO and performance
- Dark mode support via next-themes
- Responsive design with Tailwind CSS
- Accessible UI components from shadcn/ui
- Component-based architecture for better maintainability
- Type safety with TypeScript

## Next Steps

- Complete the implementation of authentication with NextAuth.js
- Add more admin pages for all existing functionality
- Improve API integration
- Add unit and integration tests
- Implement additional shadcn/ui components as needed