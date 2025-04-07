'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { format } from 'date-fns';
import { Heading } from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Pencil, Trash2, ArrowLeft, ExternalLink } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Post } from '@/types/post';
import { MixContentStatus } from '@/types/content';
import { postService } from '@/services/post';
import { AlertModal } from '@/components/modals/alert-modal';

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
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      if (post?.id) {
        await postService.deletePost(post.id);
        toast({
          title: 'Success',
          description: 'Post deleted successfully',
        });
        router.push('/dashboard/posts');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete post',
        variant: 'destructive',
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
      return <Badge className="bg-green-500">Published</Badge>;
    } else if (statusValue === MixContentStatus.Draft) {
      return <Badge variant="outline">Draft</Badge>;
    } else if (statusValue === MixContentStatus.Schedule) {
      return <Badge className="bg-yellow-500">Scheduled</Badge>;
    } else if (statusValue === MixContentStatus.Preview) {
      return <Badge variant="secondary">Preview</Badge>;
    } else if (statusValue === MixContentStatus.Deleted) {
      return <Badge variant="destructive">Deleted</Badge>;
    } else {
      return <Badge>{status}</Badge>;
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-[400px] w-full items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 pt-10">
        <p className="text-muted-foreground text-center">Post not found</p>
        <Button variant="outline" onClick={() => router.push('/dashboard/posts')}>
          <ArrowLeft className="mr-2 h-4 w-4" />
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
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" onClick={() => router.push('/dashboard/posts')}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Heading title={post.title || 'Untitled Post'} description="View and manage post details" />
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            onClick={() => router.push(`/dashboard/posts/${post.id}/edit`)}
          >
            <Pencil className="mr-2 h-4 w-4" />
            Edit
          </Button>
          <Button
            variant="destructive"
            onClick={() => setOpenDeleteAlert(true)}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </Button>
        </div>
      </div>
      
      <Separator className="my-4" />
      
      <Tabs defaultValue="content" className="mt-6">
        <TabsList>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="metadata">Metadata & SEO</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>
        
        <TabsContent value="content" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Post Content</CardTitle>
                {getStatusBadge(post.status)}
              </div>
              <CardDescription>
                Created {post.createdDateTime ? format(new Date(post.createdDateTime), 'PPP') : 'Unknown'} 
                {post.lastModified && ` • Updated ${format(new Date(post.lastModified), 'PPP')}`}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {post.image && (
                <div className="mb-4 overflow-hidden rounded-md">
                  <img 
                    src={post.image} 
                    alt={post.title || 'Post image'} 
                    className="aspect-video w-full object-cover"
                  />
                </div>
              )}
              
              <div className="prose dark:prose-invert max-w-full">
                <h1 className="text-3xl font-bold">{post.title}</h1>
                {post.excerpt && <p className="text-lg text-muted-foreground">{post.excerpt}</p>}
                {post.content && (
                  <div className="mt-4 whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: post.content }} />
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="metadata" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>SEO & Metadata</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 font-medium">SEO Title</h3>
                  <p className="text-muted-foreground">{post.seoTitle || post.title || 'Not set'}</p>
                </div>
                <div>
                  <h3 className="mb-2 font-medium">SEO Description</h3>
                  <p className="text-muted-foreground">{post.seoDescription || post.excerpt || 'Not set'}</p>
                </div>
              </div>
              
              <div>
                <h3 className="mb-2 font-medium">Additional Properties</h3>
                <div className="rounded-md border p-4">
                  <div className="grid gap-3">
                    <div className="grid grid-cols-2 items-center gap-4">
                      <span className="font-medium">Priority:</span>
                      <span>{post.priority || 0}</span>
                    </div>
                    <div className="grid grid-cols-2 items-center gap-4">
                      <span className="font-medium">Public:</span>
                      <span>{post.isPublic ? 'Yes' : 'No'}</span>
                    </div>
                    <div className="grid grid-cols-2 items-center gap-4">
                      <span className="font-medium">Created By:</span>
                      <span>{post.createdBy || 'Unknown'}</span>
                    </div>
                    <div className="grid grid-cols-2 items-center gap-4">
                      <span className="font-medium">Modified By:</span>
                      <span>{post.modifiedBy || 'N/A'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="advanced" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Advanced Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 font-medium">Culture</h3>
                  <p className="text-muted-foreground">{post.specificulture || 'Default'}</p>
                </div>
                <div>
                  <h3 className="mb-2 font-medium">Template</h3>
                  <p className="text-muted-foreground">Default Template</p>
                </div>
              </div>
              
              <div>
                <h3 className="mb-2 font-medium">System Information</h3>
                <div className="rounded-md border p-4">
                  <div className="grid gap-3">
                    <div className="grid grid-cols-2 items-center gap-4">
                      <span className="font-medium">ID:</span>
                      <span>{post.id}</span>
                    </div>
                    <div className="grid grid-cols-2 items-center gap-4">
                      <span className="font-medium">Parent ID:</span>
                      <span>{post.parentId || 'None'}</span>
                    </div>
                    <div className="grid grid-cols-2 items-center gap-4">
                      <span className="font-medium">Mix Culture ID:</span>
                      <span>{post.mixCultureId || 'None'}</span>
                    </div>
                    <div className="grid grid-cols-2 items-center gap-4">
                      <span className="font-medium">Tenant ID:</span>
                      <span>{post.tenantId || 'None'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
} 