'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { format } from 'date-fns';
import { Heading } from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import {
  Pencil,
  Trash2,
  ArrowLeft,
  ExternalLink,
  Calendar,
  User,
  Globe,
  Tag,
  FileText,
  Info
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Post } from '@/types/post';
import { MixContentStatus } from '@/types/content';
import { postService } from '@/services/post';
import { AlertModal } from '@/components/modals/alert-modal';
import { RichTextEditor } from '@/components/RichTextEditor';

export default function PostDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { toast } = useToast();

  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [openDeleteAlert, setOpenDeleteAlert] = useState(false);

  useEffect(() => {
    if (params.id) {
      loadPost(Number(params.id));
    }
  }, [params.id]);

  const loadPost = async (id: number) => {
    try {
      setIsLoading(true);
      const postData = await postService.getPost(id);
      setPost(postData);
    } catch (error) {
      console.error('Error loading post:', error);
      toast({
        title: 'Error',
        description: 'Failed to load post details',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      if (post?.id) {
        await postService.deletePost(Number(post.id));
        toast({
          title: 'Success',
          description: 'Post deleted successfully'
        });
        router.push('/dashboard/posts');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete post',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
      setOpenDeleteAlert(false);
    }
  };

  const getStatusBadge = (status?: MixContentStatus) => {
    if (status === undefined) return <Badge>Unknown</Badge>;

    // Use number values instead of direct enum comparison
    const statusValue = Number(status);

    if (statusValue === MixContentStatus.Published) {
      return <Badge className='bg-green-500 text-white'>Published</Badge>;
    } else if (statusValue === MixContentStatus.Draft) {
      return <Badge variant='outline'>Draft</Badge>;
    } else if (statusValue === MixContentStatus.Archived) {
      return <Badge className='bg-yellow-500 text-white'>Archived</Badge>;
    } else if (statusValue === MixContentStatus.Deleted) {
      return <Badge variant='destructive'>Deleted</Badge>;
    } else {
      return <Badge>{status}</Badge>;
    }
  };

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return 'Unknown';
    return format(new Date(dateStr), 'PPP');
  };

  if (isLoading) {
    return (
      <div className='flex h-[400px] w-full items-center justify-center'>
        <div className='border-primary h-10 w-10 animate-spin rounded-full border-b-2'></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className='flex flex-col items-center justify-center space-y-4 pt-10'>
        <p className='text-muted-foreground text-center'>Post not found</p>
        <Button
          variant='outline'
          onClick={() => router.push('/dashboard/posts')}
        >
          <ArrowLeft className='mr-2 h-4 w-4' />
          Return to Posts
        </Button>
      </div>
    );
  }

  return (
    <>
      <AlertModal
        isOpen={openDeleteAlert}
        onClose={() => setOpenDeleteAlert(false)}
        onConfirm={handleDelete}
        loading={isLoading}
      />

      <div className='space-y-8 px-1 py-4 md:px-4 md:py-6'>
        <div className='flex flex-col justify-between gap-4 sm:flex-row sm:items-center'>
          <div className='flex items-start gap-3'>
            <Button
              variant='outline'
              size='icon'
              onClick={() => router.push('/dashboard/posts')}
              className='mt-1'
            >
              <ArrowLeft className='h-4 w-4' />
            </Button>
            <div>
              <h1 className='text-2xl font-bold'>
                {post.title || 'Untitled Post'}
              </h1>
              <div className='mt-1.5 flex flex-wrap items-center gap-2'>
                {getStatusBadge(post.status)}
                <div className='text-muted-foreground flex items-center text-sm'>
                  <Calendar className='mr-1 h-3 w-3' />
                  {formatDate(post.createdDateTime)}
                </div>
              </div>
            </div>
          </div>
          <div className='flex shrink-0 items-center gap-2'>
            <Button
              variant='outline'
              onClick={() => router.push(`/dashboard/posts/${post.id}/edit`)}
            >
              <Pencil className='mr-2 h-4 w-4' />
              Edit
            </Button>
            <Button
              variant='destructive'
              onClick={() => setOpenDeleteAlert(true)}
            >
              <Trash2 className='mr-2 h-4 w-4' />
              Delete
            </Button>
          </div>
        </div>

        <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
          <div className='space-y-6 lg:col-span-2'>
            {/* Main Content Card */}
            <Card>
              {post.image && (
                <div className='aspect-video w-full overflow-hidden'>
                  <img
                    src={post.image}
                    alt={post.title || 'Post image'}
                    className='h-full w-full object-cover transition-all hover:scale-105'
                  />
                </div>
              )}
              <CardHeader className={post.image ? 'pt-5' : ''}>
                <CardTitle className='text-xl'>Content</CardTitle>
                {post.excerpt && (
                  <CardDescription className='text-base'>
                    {post.excerpt}
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent>
                <div className='prose dark:prose-invert max-w-full'>
                  {post.content ? (
                    <RichTextEditor
                      content={post.content}
                      onChange={() => {}}
                      readOnly={true}
                    />
                  ) : (
                    <p className='text-muted-foreground italic'>
                      No content available
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* SEO Card */}
            <Card>
              <CardHeader className='pb-3'>
                <div className='flex items-center gap-2'>
                  <Tag className='h-4 w-4' />
                  <CardTitle className='text-lg'>SEO & Metadata</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className='grid gap-4 sm:grid-cols-2'>
                  <div>
                    <h3 className='mb-1 text-sm font-medium'>SEO Title</h3>
                    <p className='text-muted-foreground bg-muted/50 rounded px-2 py-1 text-sm'>
                      {post.seoTitle || post.title || 'Not set'}
                    </p>
                  </div>
                  <div>
                    <h3 className='mb-1 text-sm font-medium'>SEO Keywords</h3>
                    <p className='text-muted-foreground bg-muted/50 rounded px-2 py-1 text-sm'>
                      {post.seoKeywords || 'Not set'}
                    </p>
                  </div>
                  <div className='sm:col-span-2'>
                    <h3 className='mb-1 text-sm font-medium'>
                      SEO Description
                    </h3>
                    <p className='text-muted-foreground bg-muted/50 rounded px-2 py-1 text-sm'>
                      {post.seoDescription || post.excerpt || 'Not set'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* System Info Card */}
            <Card>
              <CardHeader className='pb-3'>
                <div className='flex items-center gap-2'>
                  <Info className='h-4 w-4' />
                  <CardTitle className='text-lg'>System Information</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                  <div>
                    <h3 className='mb-1 text-sm font-medium'>ID</h3>
                    <p className='text-muted-foreground text-sm'>{post.id}</p>
                  </div>
                  <div>
                    <h3 className='mb-1 text-sm font-medium'>Parent ID</h3>
                    <p className='text-muted-foreground text-sm'>
                      {post.parentId || 'None'}
                    </p>
                  </div>
                  <div>
                    <h3 className='mb-1 text-sm font-medium'>Culture ID</h3>
                    <p className='text-muted-foreground text-sm'>
                      {post.mixCultureId || 'None'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className='space-y-6'>
            {/* Post Details Card */}
            <Card>
              <CardHeader className='pb-3'>
                <div className='flex items-center gap-2'>
                  <FileText className='h-4 w-4' />
                  <CardTitle className='text-lg'>Post Details</CardTitle>
                </div>
              </CardHeader>
              <CardContent className='space-y-5'>
                <div className='space-y-1'>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm font-medium'>Status</span>
                    <div>{getStatusBadge(post.status)}</div>
                  </div>
                  <Separator />
                </div>

                <div className='space-y-1'>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm font-medium'>Creation Date</span>
                    <span className='text-sm'>
                      {formatDate(post.createdDateTime)}
                    </span>
                  </div>
                  <Separator />
                </div>

                {post.modifiedDateTime && (
                  <div className='space-y-1'>
                    <div className='flex items-center justify-between'>
                      <span className='text-sm font-medium'>Last Modified</span>
                      <span className='text-sm'>
                        {formatDate(post.modifiedDateTime)}
                      </span>
                    </div>
                    <Separator />
                  </div>
                )}

                <div className='space-y-1'>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm font-medium'>Created By</span>
                    <span className='text-sm'>
                      {post.createdBy || 'Unknown'}
                    </span>
                  </div>
                  <Separator />
                </div>

                {post.modifiedBy && (
                  <div className='space-y-1'>
                    <div className='flex items-center justify-between'>
                      <span className='text-sm font-medium'>Modified By</span>
                      <span className='text-sm'>{post.modifiedBy}</span>
                    </div>
                    <Separator />
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button
                  variant='outline'
                  className='w-full'
                  onClick={() => window.open(`/posts/${post.id}`, '_blank')}
                >
                  <ExternalLink className='mr-2 h-4 w-4' />
                  View Published Post
                </Button>
              </CardFooter>
            </Card>

            {/* Actions Card */}
            <Card>
              <CardHeader className='pb-3'>
                <CardTitle className='text-lg'>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className='space-y-2'>
                <Button
                  variant='default'
                  className='w-full justify-start'
                  onClick={() =>
                    router.push(`/dashboard/posts/${post.id}/edit`)
                  }
                >
                  <Pencil className='mr-2 h-4 w-4' />
                  Edit This Post
                </Button>
                <Button
                  variant='outline'
                  className='w-full justify-start'
                  onClick={() => router.push('/dashboard/posts/new')}
                >
                  <FileText className='mr-2 h-4 w-4' />
                  Create New Post
                </Button>
                <Button
                  variant='outline'
                  className='text-destructive hover:text-destructive w-full justify-start'
                  onClick={() => setOpenDeleteAlert(true)}
                >
                  <Trash2 className='mr-2 h-4 w-4' />
                  Delete This Post
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
