'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ChevronLeft, PencilIcon, ArrowUpRightIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Heading } from '@/components/ui/heading';
import { useToast } from '@/components/ui/use-toast';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { MixContentStatus } from '@/types/content';

// Mock data for pages - this would be replaced with actual API call
interface Page {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  createdDateTime: string;
  modifiedDateTime?: string;
  status: MixContentStatus;
  author?: string;
}

// Mock pages data - would come from an API
const mockPages: Page[] = [
  {
    id: '1',
    title: 'Home Page',
    slug: 'home',
    content: 'Welcome to our website. This is the home page content.',
    excerpt: 'Welcome to our website',
    createdDateTime: '2023-10-01T08:00:00Z',
    modifiedDateTime: '2023-11-15T14:30:00Z',
    status: MixContentStatus.Published,
    author: 'Admin'
  },
  {
    id: '2',
    title: 'About Us',
    slug: 'about-us',
    content: 'Learn more about our company and our mission.',
    excerpt: 'Learn more about our company',
    createdDateTime: '2023-10-05T09:15:00Z',
    modifiedDateTime: '2023-11-10T11:45:00Z',
    status: MixContentStatus.Published,
    author: 'Admin'
  },
];

export default function ViewPagePage() {
  const router = useRouter();
  const params = useParams();
  const { toast } = useToast();
  const pageId = params.id as string;
  
  const [page, setPage] = useState<Page | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Fetch page data
  useEffect(() => {
    const fetchPage = async () => {
      try {
        setIsLoading(true);
        
        // This would be an API call in the real implementation
        // Mock implementation using the pageId
        const foundPage = mockPages.find(p => p.id === pageId);
        
        if (!foundPage) {
          toast({
            title: 'Error',
            description: 'Page not found',
            variant: 'destructive',
          });
          router.push('/dashboard/pages');
          return;
        }
        
        setPage(foundPage);
        
      } catch (error) {
        console.error('Error fetching page:', error);
        toast({
          title: 'Error',
          description: 'Failed to load page',
          variant: 'destructive',
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchPage();
  }, [pageId, router, toast]);
  
  // Status badge UI component
  const StatusBadge = ({ status }: { status: MixContentStatus }) => {
    switch (status) {
      case MixContentStatus.Published:
        return <Badge className="bg-green-500 hover:bg-green-600">Published</Badge>;
      case MixContentStatus.Draft:
        return <Badge variant="secondary">Draft</Badge>;
      case MixContentStatus.Archived:
        return <Badge variant="outline">Archived</Badge>;
      case MixContentStatus.Deleted:
        return <Badge variant="destructive">Deleted</Badge>;
      default:
        return null;
    }
  };
  
  if (isLoading) {
    return (
      <div className="px-1 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4">
        <div className="flex h-[400px] w-full items-center justify-center">
          <div className="h-10 w-10 animate-spin rounded-full border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }
  
  if (!page) {
    return (
      <div className="px-1 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4">
        <div className="flex h-[400px] w-full flex-col items-center justify-center">
          <h3 className="text-lg font-medium">Page not found</h3>
          <p className="text-sm text-muted-foreground mt-2">The requested page could not be found.</p>
          <Button
            className="mt-4"
            onClick={() => router.push('/dashboard/pages')}
          >
            Back to Pages
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="px-1 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => router.push('/dashboard/pages')}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Heading
            title={page.title}
            description={`Page details for ${page.slug}`}
          />
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            onClick={() => window.open(`/${page.slug}`, '_blank')}
          >
            <ArrowUpRightIcon className="mr-2 h-4 w-4" />
            View Live
          </Button>
          <Button 
            onClick={() => router.push(`/dashboard/pages/${pageId}/edit`)}
          >
            <PencilIcon className="mr-2 h-4 w-4" />
            Edit Page
          </Button>
        </div>
      </div>
      
      <Separator className="my-4" />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Column */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Page Content</CardTitle>
                <StatusBadge status={page.status} />
              </div>
              {page.excerpt && (
                <CardDescription>
                  {page.excerpt}
                </CardDescription>
              )}
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                {/* Would use a Markdown renderer here in a real implementation */}
                <div dangerouslySetInnerHTML={{ __html: page.content.replace(/\n/g, '<br/>') }} />
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Sidebar Column */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Page Details</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Slug</dt>
                  <dd className="mt-1 text-sm">{page.slug}</dd>
                </div>
                
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Status</dt>
                  <dd className="mt-1 text-sm">
                    <StatusBadge status={page.status} />
                  </dd>
                </div>
                
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Created</dt>
                  <dd className="mt-1 text-sm">
                    {new Date(page.createdDateTime).toLocaleString()}
                  </dd>
                </div>
                
                {page.modifiedDateTime && (
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">Last Modified</dt>
                    <dd className="mt-1 text-sm">
                      {new Date(page.modifiedDateTime).toLocaleString()}
                    </dd>
                  </div>
                )}
                
                {page.author && (
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">Author</dt>
                    <dd className="mt-1 text-sm">{page.author}</dd>
                  </div>
                )}
                
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">URL</dt>
                  <dd className="mt-1 text-sm">
                    <a
                      href={`/${page.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      /{page.slug}
                    </a>
                  </dd>
                </div>
              </dl>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <Button
                className="w-full" 
                onClick={() => router.push(`/dashboard/pages/${pageId}/edit`)}
              >
                <PencilIcon className="mr-2 h-4 w-4" />
                Edit Page
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>SEO Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 border rounded-md p-4">
                <h3 className="text-blue-600 hover:underline text-lg font-medium">
                  {page.title}
                </h3>
                <p className="text-green-700 text-xs">
                  example.com/{page.slug}
                </p>
                <p className="text-sm text-gray-700">
                  {page.excerpt || page.content.substring(0, 160)}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 