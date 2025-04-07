'use client';

import * as React from 'react';
import { PageHeader } from '@/components/PageHeader';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  Activity,
  FileText,
  Users,
  BookOpen,
  Package,
  BarChart
} from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
}

function StatCard({ title, value, description, icon }: StatCardProps) {
  return (
    <Card>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-sm font-medium'>{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className='text-2xl font-bold'>{value}</div>
        <p className='text-muted-foreground text-xs'>{description}</p>
      </CardContent>
    </Card>
  );
}

export default function DashboardPage() {
  // This would be fetched from an API in a real implementation
  const stats = [
    {
      title: 'Total Pages',
      value: '142',
      description: '12 new this month',
      icon: <FileText className='text-muted-foreground h-4 w-4' />
    },
    {
      title: 'Total Posts',
      value: '358',
      description: '24 published today',
      icon: <BookOpen className='text-muted-foreground h-4 w-4' />
    },
    {
      title: 'Total Products',
      value: '86',
      description: '3 added this week',
      icon: <Package className='text-muted-foreground h-4 w-4' />
    },
    {
      title: 'Active Users',
      value: '2,854',
      description: '320 active now',
      icon: <Users className='text-muted-foreground h-4 w-4' />
    }
  ];

  return (
    <>
      <PageHeader
        title='Dashboard'
        description='Overview of your content and activity'
      />

      <div className='container mx-auto py-6'>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              description={stat.description}
              icon={stat.icon}
            />
          ))}
        </div>

        <div className='mt-6 grid gap-4 md:grid-cols-2'>
          <Card className='col-span-1'>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your recent content changes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='space-y-4'>
                <div className='flex items-center'>
                  <div className='bg-primary/10 mr-2 rounded-full p-1'>
                    <Activity className='text-primary h-4 w-4' />
                  </div>
                  <div className='flex-1 space-y-1'>
                    <p className='text-sm leading-none font-medium'>
                      Updated Homepage
                    </p>
                    <p className='text-muted-foreground text-xs'>2 hours ago</p>
                  </div>
                </div>
                <div className='flex items-center'>
                  <div className='bg-primary/10 mr-2 rounded-full p-1'>
                    <Activity className='text-primary h-4 w-4' />
                  </div>
                  <div className='flex-1 space-y-1'>
                    <p className='text-sm leading-none font-medium'>
                      Published new blog post
                    </p>
                    <p className='text-muted-foreground text-xs'>5 hours ago</p>
                  </div>
                </div>
                <div className='flex items-center'>
                  <div className='bg-primary/10 mr-2 rounded-full p-1'>
                    <Activity className='text-primary h-4 w-4' />
                  </div>
                  <div className='flex-1 space-y-1'>
                    <p className='text-sm leading-none font-medium'>
                      Added new product
                    </p>
                    <p className='text-muted-foreground text-xs'>Yesterday</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className='col-span-1'>
            <CardHeader>
              <CardTitle>Traffic Overview</CardTitle>
              <CardDescription>Website visitors this month</CardDescription>
            </CardHeader>
            <CardContent className='flex h-[200px] items-center justify-center'>
              <div className='flex flex-col items-center text-center'>
                <BarChart className='text-muted-foreground mb-2 h-10 w-10' />
                <p className='text-muted-foreground text-sm'>
                  Traffic visualization will appear here
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
