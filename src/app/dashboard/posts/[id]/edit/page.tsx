'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Heading } from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { ArrowLeft, Save } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { postService } from '@/services/post';
import { MixContentStatus } from '@/types/content';
import { Post } from '@/types/post';

// Define form schema with Zod
const formSchema = z.object({
  id: z.number(),
  title: z.string().min(1, 'Title is required'),
  excerpt: z.string().optional(),
  content: z.string().optional(),
  status: z.nativeEnum(MixContentStatus, {
    required_error: 'Please select a status',
  }),
  isPublic: z.boolean().default(true),
  image: z.string().optional(),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  seoKeywords: z.string().optional(),
  specificulture: z.string().optional(),
  priority: z.coerce.number().min(0).default(0),
});

type PostFormValues = z.infer<typeof formSchema>;

export default function EditPostPage() {
  const router = useRouter();
  const params = useParams();
  const { toast } = useToast();
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Default values for the form
  const defaultValues: PostFormValues = {
    id: 0,
    title: '',
    excerpt: '',
    content: '',
    status: MixContentStatus.Draft,
    isPublic: true,
    image: '',
    seoTitle: '',
    seoDescription: '',
    seoKeywords: '',
    specificulture: 'en-US',
    priority: 0,
  };
  
  const form = useForm<PostFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });
  
  // Load post data on component mount
  useEffect(() => {
    const fetchPost = async () => {
      if (params?.id) {
        try {
          setIsLoading(true);
          const postData = await postService.getPost(Number(params.id));
          setPost(postData);
          
          // Set form values from fetched post data
          form.reset({
            id: postData.id,
            title: postData.title || '',
            excerpt: postData.excerpt || '',
            content: postData.content || '',
            status: postData.status,
            isPublic: postData.isPublic,
            image: postData.image || '',
            seoTitle: postData.seoTitle || '',
            seoDescription: postData.seoDescription || '',
            seoKeywords: postData.seoKeywords || '',
            specificulture: postData.specificulture || 'en-US',
            priority: postData.priority,
          });
        } catch (error) {
          console.error('Error loading post:', error);
          toast({
            title: 'Error',
            description: 'Failed to load post data',
            variant: 'destructive',
          });
        } finally {
          setIsLoading(false);
        }
      }
    };
    
    fetchPost();
  }, [form, params, toast]);
  
  const onSubmit = async (data: PostFormValues) => {
    try {
      setIsLoading(true);
      await postService.updatePost(data.id, data);
      toast({
        title: 'Success',
        description: 'Post updated successfully',
      });
      router.push(`/dashboard/posts/${data.id}`);
    } catch (error) {
      console.error('Error updating post:', error);
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  if (isLoading) {
    return (
      <div className="flex h-[400px] w-full items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-b-2 border-primary"></div>
      </div>
    );
  }
  
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => router.push(`/dashboard/posts/${params?.id}`)}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Heading 
            title={`Edit Post${post?.title ? `: ${post.title}` : ''}`} 
            description="Edit your blog post" 
          />
        </div>
        <Button 
          type="submit" 
          disabled={isLoading}
          onClick={form.handleSubmit(onSubmit)}
        >
          <Save className="mr-2 h-4 w-4" />
          {isLoading ? 'Saving...' : 'Save Changes'}
        </Button>
      </div>
      
      <Separator className="my-4" />
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <Card>
            <CardContent className="pt-6 space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Post title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="excerpt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Excerpt</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Brief summary of the post" 
                        className="resize-none" 
                        rows={3} 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Content</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Post content" 
                        className="resize-none" 
                        rows={10} 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <Select
                        disabled={isLoading}
                        onValueChange={(value) => field.onChange(Number(value))}
                        value={field.value.toString()}
                        defaultValue={field.value.toString()}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value={MixContentStatus.Draft.toString()}>Draft</SelectItem>
                          <SelectItem value={MixContentStatus.Published.toString()}>Published</SelectItem>
                          <SelectItem value={MixContentStatus.Schedule.toString()}>Scheduled</SelectItem>
                          <SelectItem value={MixContentStatus.Preview.toString()}>Preview</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="isPublic"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
                      <div className="space-y-0.5">
                        <FormLabel>Public</FormLabel>
                        <div className="text-sm text-muted-foreground">
                          Make this post publicly accessible
                        </div>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          disabled={isLoading}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="priority"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Priority</FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          min={0}
                          placeholder="0" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Featured Image URL</FormLabel>
                      <FormControl>
                        <Input placeholder="https://example.com/image.jpg" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 space-y-4">
                <FormField
                  control={form.control}
                  name="seoTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>SEO Title</FormLabel>
                      <FormControl>
                        <Input placeholder="SEO optimized title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="seoDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>SEO Description</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Meta description for SEO" 
                          className="resize-none" 
                          rows={3} 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="seoKeywords"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>SEO Keywords</FormLabel>
                      <FormControl>
                        <Input placeholder="keyword1, keyword2, keyword3" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="specificulture"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Culture</FormLabel>
                      <FormControl>
                        <Input placeholder="en-US" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </div>
          
          <CardFooter className="flex justify-between border rounded-lg">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push(`/dashboard/posts/${params?.id}`)}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Saving...' : 'Save Changes'}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </>
  );
} 