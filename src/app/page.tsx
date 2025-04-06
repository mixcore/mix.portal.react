"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Icons } from '@/components/icons';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <div className="container mx-auto py-10 px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center mb-12 text-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-3">
            Welcome to Mixcore Next.js
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Your Mixcore application has been migrated to Next.js with Tailwind CSS and shadcn/ui
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="flex flex-col h-full transform transition-transform hover:-translate-y-2 hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Icons.file className="h-6 w-6 text-primary" />
                <CardTitle>Posts</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-4xl font-bold mb-4">0</div>
              <CardDescription>
                Manage your blog posts and content
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/admin/post/list">Go to Posts</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col h-full transform transition-transform hover:-translate-y-2 hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Icons.page className="h-6 w-6 text-primary" />
                <CardTitle>Pages</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-4xl font-bold mb-4">0</div>
              <CardDescription>
                Create and manage your website pages
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/admin/page/list">Go to Pages</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col h-full transform transition-transform hover:-translate-y-2 hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Icons.users className="h-6 w-6 text-primary" />
                <CardTitle>Users</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-4xl font-bold mb-4">0</div>
              <CardDescription>
                Manage users and permissions
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/admin/user/list">Go to Users</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="flex flex-col items-center justify-center mt-8">
          <Button asChild size="lg">
            <Link href="/admin/dashboard">Go to Dashboard</Link>
          </Button>
        </div>
      </div>
    </main>
  );
} 