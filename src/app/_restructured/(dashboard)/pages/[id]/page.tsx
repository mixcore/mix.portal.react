'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { pageService } from '@/services/page';
import { Page } from '@/types/page';
import { ArrowLeft, Edit, Trash2, Eye, Calendar } from 'lucide-react';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import { formatDate } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import { useToast } from '@/components/ui/use-toast';

export default function PageDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { toast } = useToast();
  const { id } = params;

  const [page, setPage] = React.useState<Page | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const fetchPage = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await pageService.getPage(id);
        setPage(response);
      } catch (error) {
        console.error('Error fetching page:', error);
        setError('Failed to load page. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPage();
  }, [id]);

  const handleDeleteClick = () => {
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      setIsDeleting(true);
      await pageService.deletePage(id);

      toast({
        title: 'Success',
        description: 'Page deleted successfully'
      });

      router.push('/pages');
    } catch (error) {
      console.error('Error deleting page:', error);
      setError('Failed to delete page. Please try again later.');
      toast({
        title: 'Error',
        description: 'Failed to delete page',
        variant: 'destructive'
      });
    } finally {
      setIsDeleting(false);
      setDeleteDialogOpen(false);
    }
  };

  if (isLoading) {
    return (
      <>
        <PageHeader
          title='Page Details'
          description='Loading page information...'
        />
        <div className='container mx-auto py-6'>
          <Skeleton className='h-[600px] w-full' />
        </div>
      </>
    );
  }

  if (error || !page) {
    return (
      <>
        <PageHeader title='Page Details' description='View page information' />
        <div className='container mx-auto py-6'>
          <Alert variant='destructive'>
            <AlertCircle className='h-4 w-4' />
            <AlertDescription>{error || 'Page not found'}</AlertDescription>
          </Alert>
          <Button
            variant='outline'
            className='mt-4'
            onClick={() => router.push('/pages')}
          >
            <ArrowLeft className='mr-2 h-4 w-4' />
            Back to Pages
          </Button>
        </div>
      </>
    );
  }

  return (
    <>
      <PageHeader title={page.title} description={`${page.pageType} page`} />

      <div className='container mx-auto py-6'>
        <div className='mb-6 flex items-center justify-between'>
          <Button variant='outline' onClick={() => router.push('/pages')}>
            <ArrowLeft className='mr-2 h-4 w-4' />
            Back to Pages
          </Button>

          <div className='flex space-x-2'>
            <Button
              variant='outline'
              onClick={() => router.push(`/pages/${page.id}/edit`)}
            >
              <Edit className='mr-2 h-4 w-4' />
              Edit
            </Button>
            <Button variant='destructive' onClick={handleDeleteClick}>
              <Trash2 className='mr-2 h-4 w-4' />
              Delete
            </Button>
          </div>
        </div>

        <div className='grid gap-6 md:grid-cols-3'>
          <div className='space-y-6 md:col-span-2'>
            <Card>
              <CardHeader>
                <CardTitle>Content</CardTitle>
                <CardDescription>Page content and excerpt</CardDescription>
              </CardHeader>
              <CardContent className='space-y-6'>
                <div>
                  <h3 className='mb-2 font-medium'>Main Content</h3>
                  <div className='bg-background rounded-md border p-4'>
                    {page.content || (
                      <span className='text-muted-foreground'>No content</span>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className='mb-2 font-medium'>Excerpt</h3>
                  <div className='bg-background rounded-md border p-4'>
                    {page.excerpt || (
                      <span className='text-muted-foreground'>No excerpt</span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>SEO Information</CardTitle>
                <CardDescription>
                  Search engine optimization details
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='grid gap-2'>
                  <div className='text-sm font-medium'>SEO URL</div>
                  <div className='bg-background rounded border p-2'>
                    {page.seoName || (
                      <span className='text-muted-foreground'>Not set</span>
                    )}
                  </div>
                </div>

                <div className='grid gap-2'>
                  <div className='text-sm font-medium'>SEO Title</div>
                  <div className='bg-background rounded border p-2'>
                    {page.seoTitle || (
                      <span className='text-muted-foreground'>Not set</span>
                    )}
                  </div>
                </div>

                <div className='grid gap-2'>
                  <div className='text-sm font-medium'>SEO Description</div>
                  <div className='bg-background rounded border p-2'>
                    {page.seoDescription || (
                      <span className='text-muted-foreground'>Not set</span>
                    )}
                  </div>
                </div>

                <div className='grid gap-2'>
                  <div className='text-sm font-medium'>SEO Keywords</div>
                  <div className='bg-background rounded border p-2'>
                    {page.seoKeywords || (
                      <span className='text-muted-foreground'>Not set</span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className='space-y-6'>
            <Card>
              <CardHeader>
                <CardTitle>Page Information</CardTitle>
                <CardDescription>Details and metadata</CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='grid grid-cols-2 gap-2'>
                  <div className='text-sm font-medium'>Status</div>
                  <div>
                    <Badge
                      variant={
                        page.status === 'Published'
                          ? 'default'
                          : page.status === 'Draft'
                            ? 'secondary'
                            : 'destructive'
                      }
                    >
                      {page.status}
                    </Badge>
                  </div>
                </div>

                <div className='grid grid-cols-2 gap-2'>
                  <div className='text-sm font-medium'>Page Type</div>
                  <div>{page.pageType}</div>
                </div>

                <div className='grid grid-cols-2 gap-2'>
                  <div className='text-sm font-medium'>Template</div>
                  <div>{page.template}</div>
                </div>

                <Separator />

                <div className='grid grid-cols-2 gap-2'>
                  <div className='text-sm font-medium'>Created</div>
                  <div className='flex items-center'>
                    <Calendar className='mr-1 h-3 w-3' />
                    {formatDate(page.createdDateTime)}
                  </div>
                </div>

                <div className='grid grid-cols-2 gap-2'>
                  <div className='text-sm font-medium'>Modified</div>
                  <div className='flex items-center'>
                    <Calendar className='mr-1 h-3 w-3' />
                    {formatDate(page.lastModified)}
                  </div>
                </div>

                <div className='grid grid-cols-2 gap-2'>
                  <div className='text-sm font-medium'>ID</div>
                  <div className='text-muted-foreground truncate text-xs'>
                    {page.id}
                  </div>
                </div>
              </CardContent>
            </Card>

            {page.thumbnailUrl && (
              <Card>
                <CardHeader>
                  <CardTitle>Thumbnail</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='aspect-video overflow-hidden rounded-md'>
                    <img
                      src={page.thumbnailUrl}
                      alt={page.title}
                      className='h-full w-full object-cover'
                    />
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Page</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete "{page.title}"? This action cannot
              be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant='outline'
              onClick={() => setDeleteDialogOpen(false)}
              disabled={isDeleting}
            >
              Cancel
            </Button>
            <Button
              variant='destructive'
              onClick={handleDeleteConfirm}
              disabled={isDeleting}
            >
              {isDeleting ? 'Deleting...' : 'Delete'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
