'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { PageLayout } from '@/components/layouts/PageLayout';
import { PageHeader } from '@/components/PageHeader';
import { PostForm } from '@/components/forms/post-form';
import { useToast } from '@/components/ui/use-toast';
import { postService } from '@/services/postService';
import { Post } from '@/services/postService';

interface PostDetailPageProps {
  params: {
    id: string;
  };
}

export default function PostDetailPage({ params }: PostDetailPageProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [post, setPost] = React.useState<Post | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    loadPost();
  }, [params.id]);

  const loadPost = async () => {
    try {
      setLoading(true);
      const data = await postService.getById(params.id);
      setPost(data);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load post',
        variant: 'destructive'
      });
      router.push('/posts');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (values: any) => {
    try {
      await postService.update(params.id, values);
      toast({
        title: 'Success',
        description: 'Post updated successfully'
      });
      router.push('/posts');
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update post',
        variant: 'destructive'
      });
    }
  };

  if (loading) {
    return (
      <PageLayout>
        <PageHeader title='Edit Post' description='Edit your blog post' />
        <div className='container mx-auto p-4'>Loading...</div>
      </PageLayout>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <PageLayout>
      <PageHeader title='Edit Post' description='Edit your blog post' />
      <div className='container mx-auto p-4'>
        <PostForm
          onSubmit={handleSubmit}
          initialValues={{
            title: post.title,
            content: post.content,
            excerpt: post.excerpt,
            status: post.status,
            isFeatured: post.isFeatured,
            allowComments: post.allowComments
          }}
        />
      </div>
    </PageLayout>
  );
}
