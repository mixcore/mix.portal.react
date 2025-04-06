"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PublicLayout } from '@/components/layout/public-layout';
import { Icons } from '@/components/icons';

export default function Home() {
  return (
    <PublicLayout>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
        <div className="max-w-3xl mx-auto text-center">
          <Icons.logo className="mx-auto h-20 w-20 text-primary" />
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Welcome to Mixcore CMS
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A powerful, open-source CMS platform built on .NET Core and now with
            a modern Next.js frontend using Tailwind CSS.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href="/admin/dashboard">
                Go to Dashboard
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="/security/login">
                Sign In
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
} 