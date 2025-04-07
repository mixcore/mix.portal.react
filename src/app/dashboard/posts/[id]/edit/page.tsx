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
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import {
  ArrowLeft,
  Save,
  Eye,
  Image,
  Settings,
  ChevronLeft,
  Calendar,
  Globe,
  ChevronDown,
  X
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { postService } from '@/services/post';
import { MixContentStatus } from '@/types/content';
import { Post } from '@/types/post';
import { FormRichTextEditor } from '@/components/forms/FormRichTextEditor';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger
} from '@/components/ui/drawer';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';

// Define form schema with Zod
const formSchema = z.object({
  id: z.number(),
  title: z.string().min(1, 'Title is required'),
  excerpt: z.string().optional(),
  content: z.string().optional(),
  status: z.nativeEnum(MixContentStatus, {
    required_error: 'Please select a status'
  }),
  isPublic: z.boolean().default(true),
  image: z.string().optional(),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  seoKeywords: z.string().optional(),
  specificulture: z.string().optional(),
  priority: z.coerce.number().min(0).default(0)
});

type PostFormValues = z.infer<typeof formSchema>;

export default function EditPostPage() {
  const router = useRouter();
  const params = useParams();
  const { toast } = useToast();
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [settingsOpen, setSettingsOpen] = useState(false);

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
    priority: 0
  };

  const form = useForm<PostFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues
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
            priority: postData.priority
          });
        } catch (error) {
          console.error('Error loading post:', error);
          toast({
            title: 'Error',
            description: 'Failed to load post data',
            variant: 'destructive'
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
        description: 'Post updated successfully'
      });
      router.push(`/dashboard/posts/${data.id}`);
    } catch (error) {
      console.error('Error updating post:', error);
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusBadge = (status: MixContentStatus) => {
    switch (status) {
      case MixContentStatus.Published:
        return <Badge className='bg-green-500 text-white'>Published</Badge>;
      case MixContentStatus.Draft:
        return <Badge variant='outline'>Draft</Badge>;
      case MixContentStatus.Archived:
        return <Badge className='bg-yellow-500 text-white'>Archived</Badge>;
      case MixContentStatus.Deleted:
        return <Badge variant='destructive'>Deleted</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  if (isLoading) {
    return (
      <div className='flex h-[400px] w-full items-center justify-center'>
        <div className='border-primary h-10 w-10 animate-spin rounded-full border-b-2'></div>
      </div>
    );
  }

  return (
    <div className='flex max-h-screen min-h-screen flex-col overflow-hidden'>
      {/* Top header - Ghost style top bar */}
      <header className='flex h-16 shrink-0 items-center justify-between border-b px-4 py-2'>
        <div className='flex items-center space-x-3'>
          <Button
            variant='ghost'
            size='sm'
            onClick={() => router.push('/dashboard/posts')}
            className='text-muted-foreground flex items-center gap-1'
          >
            <ChevronLeft className='h-4 w-4' />
            Posts
          </Button>

          {/* Status and last modified info */}
          <div className='hidden items-center gap-3 md:flex'>
            <Separator orientation='vertical' className='h-4' />
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant='ghost'
                  size='sm'
                  className='flex items-center gap-2'
                >
                  {getStatusBadge(form.watch('status'))}
                  <ChevronDown className='text-muted-foreground h-3 w-3' />
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-52 p-2'>
                <div className='grid gap-1'>
                  <Button
                    variant='ghost'
                    size='sm'
                    className='justify-start font-normal'
                    onClick={() =>
                      form.setValue('status', MixContentStatus.Draft)
                    }
                  >
                    <Badge variant='outline' className='mr-2'>
                      Draft
                    </Badge>
                    Set to Draft
                  </Button>
                  <Button
                    variant='ghost'
                    size='sm'
                    className='justify-start font-normal'
                    onClick={() =>
                      form.setValue('status', MixContentStatus.Published)
                    }
                  >
                    <Badge className='mr-2 bg-green-500 text-white'>
                      Published
                    </Badge>
                    Publish
                  </Button>
                  <Button
                    variant='ghost'
                    size='sm'
                    className='justify-start font-normal'
                    onClick={() =>
                      form.setValue('status', MixContentStatus.Archived)
                    }
                  >
                    <Badge className='mr-2 bg-yellow-500 text-white'>
                      Archived
                    </Badge>
                    Archive
                  </Button>
                </div>
              </PopoverContent>
            </Popover>

            <div className='text-muted-foreground flex items-center text-sm'>
              <Calendar className='mr-1 h-3 w-3' />
              {post?.modifiedDateTime
                ? format(new Date(post.modifiedDateTime), 'MMM d, yyyy')
                : 'Never modified'}
            </div>
          </div>
        </div>

        <div className='flex items-center gap-2'>
          <Button
            variant='ghost'
            size='sm'
            onClick={() => router.push(`/dashboard/posts/${params?.id}`)}
            className='mr-1 hidden md:flex'
          >
            <Eye className='mr-2 h-4 w-4' />
            Preview
          </Button>

          <Drawer open={settingsOpen} onOpenChange={setSettingsOpen}>
            <DrawerTrigger asChild>
              <Button variant='ghost' size='sm' className='mr-2'>
                <Settings className='mr-1 h-4 w-4' />
                <span className='hidden md:inline'>Settings</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent className='h-[85%]'>
              <div className='flex items-center justify-between p-4 pb-0'>
                <h3 className='text-lg font-semibold'>Post Settings</h3>
                <DrawerClose asChild>
                  <Button variant='ghost' size='icon'>
                    <X className='h-4 w-4' />
                  </Button>
                </DrawerClose>
              </div>
              <div className='overflow-y-auto p-4'>
                <div className='space-y-6'>
                  {/* Featured Image */}
                  <div className='space-y-2'>
                    <h4 className='text-sm font-medium'>Featured Image</h4>
                    <FormField
                      control={form.control}
                      name='image'
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className='space-y-3'>
                              <Input
                                placeholder='https://example.com/image.jpg'
                                {...field}
                              />
                              {field.value ? (
                                <div className='bg-muted/50 flex aspect-video w-full items-center justify-center overflow-hidden rounded-md border'>
                                  <img
                                    src={field.value}
                                    alt='Featured image'
                                    className='max-h-full max-w-full object-contain'
                                    onError={(e) => {
                                      (e.target as HTMLImageElement).src =
                                        'https://placehold.co/600x400?text=Image+Not+Found';
                                    }}
                                  />
                                </div>
                              ) : (
                                <div className='bg-muted/50 flex aspect-video w-full items-center justify-center rounded-md border'>
                                  <Image className='text-muted-foreground h-8 w-8' />
                                </div>
                              )}
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Separator />

                  {/* Excerpt */}
                  <div className='space-y-2'>
                    <h4 className='text-sm font-medium'>Excerpt</h4>
                    <FormField
                      control={form.control}
                      name='excerpt'
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea
                              placeholder='Brief summary of the post'
                              className='resize-none'
                              rows={3}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Separator />

                  {/* Status and Visibility */}
                  <div className='space-y-4'>
                    <h4 className='text-sm font-medium'>Status & Visibility</h4>
                    <FormField
                      control={form.control}
                      name='status'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Status</FormLabel>
                          <Select
                            disabled={isLoading}
                            onValueChange={(value) =>
                              field.onChange(Number(value))
                            }
                            value={field.value.toString()}
                            defaultValue={field.value.toString()}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder='Select a status' />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem
                                value={MixContentStatus.Published.toString()}
                              >
                                Published
                              </SelectItem>
                              <SelectItem
                                value={MixContentStatus.Draft.toString()}
                              >
                                Draft
                              </SelectItem>
                              <SelectItem
                                value={MixContentStatus.Archived.toString()}
                              >
                                Archived
                              </SelectItem>
                              <SelectItem
                                value={MixContentStatus.Deleted.toString()}
                              >
                                Deleted
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name='isPublic'
                      render={({ field }) => (
                        <FormItem className='flex flex-row items-center justify-between rounded-lg border p-3'>
                          <div className='space-y-0.5'>
                            <FormLabel className='flex items-center gap-1'>
                              <Globe className='h-4 w-4' />
                              Public
                            </FormLabel>
                            <div className='text-muted-foreground text-sm'>
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
                  </div>

                  <Separator />

                  {/* SEO Settings */}
                  <div className='space-y-4'>
                    <h4 className='text-sm font-medium'>SEO Settings</h4>
                    <FormField
                      control={form.control}
                      name='seoTitle'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>SEO Title</FormLabel>
                          <FormControl>
                            <Input
                              placeholder='SEO optimized title'
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name='seoDescription'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>SEO Description</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder='Meta description for SEO'
                              className='resize-none'
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
                      name='seoKeywords'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>SEO Keywords</FormLabel>
                          <FormControl>
                            <Input
                              placeholder='keyword1, keyword2, keyword3'
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Separator />

                  {/* Advanced Settings */}
                  <div className='space-y-4'>
                    <h4 className='text-sm font-medium'>Advanced Settings</h4>
                    <FormField
                      control={form.control}
                      name='priority'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Priority</FormLabel>
                          <FormControl>
                            <Input
                              type='number'
                              min={0}
                              placeholder='0'
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name='specificulture'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Culture</FormLabel>
                          <FormControl>
                            <Input placeholder='en-US' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
            </DrawerContent>
          </Drawer>

          <Button
            type='submit'
            onClick={form.handleSubmit(onSubmit)}
            disabled={isLoading}
          >
            <Save className='mr-2 h-4 w-4' />
            {isLoading ? 'Saving...' : 'Save'}
          </Button>
        </div>
      </header>

      {/* Main content area */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex-1 overflow-auto'
        >
          <div className='mx-auto max-w-3xl px-4 py-6'>
            {/* Title */}
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder='Post title'
                      {...field}
                      className='text-foreground mb-6 border-none px-0 text-3xl font-bold focus-visible:ring-0 focus-visible:ring-offset-0'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Content editor */}
            <div className='min-h-[500px]'>
              <FormRichTextEditor
                name='content'
                label=''
                placeholder='Begin writing your post...'
              />
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
