'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';

interface DashboardData {
  totalPost: number;
  totalPage: number;
  totalUser: number;
  totalMedia: number;
}

export default function Dashboard() {
  const [data, setData] = useState<DashboardData>({
    totalPost: 0,
    totalPage: 0,
    totalUser: 0,
    totalMedia: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real scenario, you would fetch data from your API
    const fetchDashboardData = async () => {
      try {
        // Simulate API call with mock data
        // In production, replace with actual API call
        setTimeout(() => {
          setData({
            totalPost: 25,
            totalPage: 8,
            totalUser: 12,
            totalMedia: 56,
          });
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      </div>

      {loading ? (
        <div className="flex items-center justify-center p-12">
          <Icons.spinner className="h-12 w-12 text-primary animate-spin" />
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Posts</CardTitle>
              <Icons.file className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{data.totalPost}</div>
              <p className="text-xs text-muted-foreground">
                Total blog posts and articles
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" className="w-full">
                <Link href="/admin/post/list">View all posts</Link>
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Pages</CardTitle>
              <Icons.page className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{data.totalPage}</div>
              <p className="text-xs text-muted-foreground">
                Total website pages
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" className="w-full">
                <Link href="/admin/page/list">View all pages</Link>
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Users</CardTitle>
              <Icons.users className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{data.totalUser}</div>
              <p className="text-xs text-muted-foreground">
                Total registered users
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" className="w-full">
                <Link href="/admin/user/list">View all users</Link>
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Media</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-muted-foreground"
              >
                <path d="M21 15V6" />
                <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                <path d="M12 12H3" />
                <path d="M16 6H3" />
                <path d="M12 18H3" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{data.totalMedia}</div>
              <p className="text-xs text-muted-foreground">
                Total media items
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" className="w-full">
                <Link href="/admin/media/list">View all media</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}

      <div className="grid gap-6 mt-6 md:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Overview of your recent actions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Your recent activity will appear here.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>System Updates</CardTitle>
            <CardDescription>Recent system notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">System updates and notifications will appear here.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 