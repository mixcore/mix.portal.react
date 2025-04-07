'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { PageLayout } from '@/components/layouts/PageLayout';
import { PageHeader } from '@/components/PageHeader';
import { PostForm } from '@/components/forms/post-form';
import { useToast } from '@/components/ui/use-toast';
import { postService } from '@/services/postService';

export default function CreatePostPage() {
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (values: any) => {
    try {
      await postService.create(values);
      toast({
        title: 'Success',
        description: 'Post created successfully'
      });
      router.push('/posts');
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to create post',
        variant: 'destructive'
      });
    }
  };

  return (
    <PageLayout>
      <PageHeader title='Create Post' description='Create a new blog post' />
      <div className='container mx-auto p-4'>
        <PostForm onSubmit={handleSubmit} />
      </div>
    </PageLayout>
  );
}
