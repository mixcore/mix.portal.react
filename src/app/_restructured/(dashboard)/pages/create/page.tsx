'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
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
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { pageService } from '@/services/page';
import { useToast } from '@/components/ui/use-toast';
import { AlertCircle, ArrowLeft } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

// Define form schema
const pageSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  content: z.string().optional(),
  excerpt: z.string().optional(),
  thumbnailUrl: z.string().optional(),
  status: z.enum(['Published', 'Draft', 'Archived']),
  pageType: z.string().min(1, 'Page type is required'),
  template: z.string().optional(),
  seoName: z.string().optional(),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  seoKeywords: z.string().optional()
});

type PageFormValues = z.infer<typeof pageSchema>;

export default function CreatePage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  // Default values for the form
  const defaultValues: Partial<PageFormValues> = {
    title: '',
    content: '',
    excerpt: '',
    status: 'Draft',
    pageType: 'Standard',
    template: 'Default'
  };

  const form = useForm<PageFormValues>({
    resolver: zodResolver(pageSchema),
    defaultValues
  });

  const onSubmit = async (data: PageFormValues) => {
    try {
      setIsSubmitting(true);
      setError(null);

      await pageService.createPage(data);

      toast({
        title: 'Success',
        description: 'Page created successfully'
      });

      router.push('/pages');
    } catch (error) {
      console.error('Error creating page:', error);
      setError('Failed to create page. Please try again later.');
      toast({
        title: 'Error',
        description: 'Failed to create page',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageHeader
        title='Create Page'
        description='Create a new page for your website'
      />

      <div className='container mx-auto py-6'>
        <Button
          variant='outline'
          className='mb-6'
          onClick={() => router.push('/pages')}
        >
          <ArrowLeft className='mr-2 h-4 w-4' />
          Back to Pages
        </Button>

        {error && (
          <Alert variant='destructive' className='mb-6'>
            <AlertCircle className='h-4 w-4' />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Card>
          <CardContent className='pt-6'>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-6'
              >
                <div className='grid gap-6 md:grid-cols-2'>
                  <FormField
                    control={form.control}
                    name='title'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input placeholder='Page Title' {...field} />
                        </FormControl>
                        <FormDescription>
                          The title of your page.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name='status'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Status</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder='Select a status' />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value='Published'>Published</SelectItem>
                            <SelectItem value='Draft'>Draft</SelectItem>
                            <SelectItem value='Archived'>Archived</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          The publishing status of your page.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name='content'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Content</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder='Page content'
                          className='min-h-[200px] resize-y'
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        The main content of your page.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='excerpt'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Excerpt</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder='Brief summary of the page'
                          className='resize-y'
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        A short summary that appears in search results.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className='grid gap-6 md:grid-cols-2'>
                  <FormField
                    control={form.control}
                    name='pageType'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Page Type</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder='Select a page type' />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value='Standard'>Standard</SelectItem>
                            <SelectItem value='Blog'>Blog</SelectItem>
                            <SelectItem value='Landing'>Landing</SelectItem>
                            <SelectItem value='Product'>Product</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>The type of page.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name='template'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Template</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder='Select a template' />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value='Default'>Default</SelectItem>
                            <SelectItem value='Full Width'>
                              Full Width
                            </SelectItem>
                            <SelectItem value='Sidebar'>Sidebar</SelectItem>
                            <SelectItem value='Custom'>Custom</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          The template to use for this page.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name='thumbnailUrl'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Thumbnail URL</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='https://example.com/image.jpg'
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        URL for the page thumbnail image.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <h3 className='text-lg font-medium'>SEO Settings</h3>
                <div className='grid gap-6 md:grid-cols-2'>
                  <FormField
                    control={form.control}
                    name='seoName'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>SEO URL Slug</FormLabel>
                        <FormControl>
                          <Input placeholder='page-url-slug' {...field} />
                        </FormControl>
                        <FormDescription>
                          The URL-friendly name for this page.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name='seoTitle'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>SEO Title</FormLabel>
                        <FormControl>
                          <Input placeholder='SEO Title' {...field} />
                        </FormControl>
                        <FormDescription>
                          Title used for search engine optimization.
                        </FormDescription>
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
                          <Textarea placeholder='SEO Description' {...field} />
                        </FormControl>
                        <FormDescription>
                          Description used for search engine optimization.
                        </FormDescription>
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
                        <FormDescription>
                          Keywords for search engine optimization (comma
                          separated).
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className='flex justify-end space-x-2'>
                  <Button
                    variant='outline'
                    onClick={() => router.push('/pages')}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                  <Button type='submit' disabled={isSubmitting}>
                    {isSubmitting ? 'Creating...' : 'Create Page'}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
