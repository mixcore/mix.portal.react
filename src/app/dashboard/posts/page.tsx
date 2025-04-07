'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';
import {
  Edit,
  Trash,
  Eye,
  MoreHorizontal,
  Plus,
  Filter,
  Table,
  Grid,
  Tag,
  Calendar
} from 'lucide-react';

import { DataTable } from '@/components/ui/data-table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem
} from '@/components/ui/dropdown-menu';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { postService } from '@/services/post';
import { Post, PostQueryParams } from '@/types/post';
import { MixContentStatus } from '@/types/content';
import { Separator } from '@/components/ui/separator';
import { AlertModal } from '@/components/modals/alert-modal';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { ApiDiagnosticsButton } from '@/utils/apiDiagnostics';

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<string>('table');

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Parse search params with defaults
  const pageIndex = Number(searchParams.get('page') || '0');
  const pageSize = Number(searchParams.get('pageSize') || '10');
  const search = searchParams.get('search') || '';

  // Create status label component
  const StatusBadge = ({ status }: { status: MixContentStatus }) => {
    switch (Number(status)) {
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

  // Define table columns
  const columns: ColumnDef<Post>[] = [
    {
      accessorKey: 'title',
      header: 'Title',
      cell: ({ row }) => (
        <div className='flex items-center gap-2'>
          <div className='font-medium'>{row.original.title}</div>
        </div>
      )
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => (
        <StatusBadge status={row.original.status || MixContentStatus.Draft} />
      )
    },
    {
      accessorKey: 'createdDateTime',
      header: 'Created',
      cell: ({ row }) =>
        row.original.createdDateTime
          ? format(new Date(row.original.createdDateTime), 'MMM dd, yyyy')
          : '-'
    },
    {
      accessorKey: 'modifiedDateTime',
      header: 'Modified',
      cell: ({ row }) =>
        row.original.modifiedDateTime
          ? format(new Date(row.original.modifiedDateTime), 'MMM dd, yyyy')
          : '-'
    },
    {
      id: 'actions',
      cell: ({ row }) => {
        const post = row.original;

        return (
          <div className='text-right'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='ghost' className='h-8 w-8 p-0'>
                  <span className='sr-only'>Open menu</span>
                  <MoreHorizontal className='h-4 w-4' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => router.push(`/dashboard/posts/${post.id}`)}
                >
                  <Eye className='mr-2 h-4 w-4' />
                  View
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    router.push(`/dashboard/posts/${post.id}/edit`)
                  }
                >
                  <Edit className='mr-2 h-4 w-4' />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className='text-destructive focus:text-destructive'
                  onClick={() => setDeleteId(Number(post.id))}
                >
                  <Trash className='mr-2 h-4 w-4' />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        );
      }
    }
  ];

  // Fetch posts with query params
  const fetchPosts = async (params: PostQueryParams) => {
    try {
      setIsLoading(true);

      // Add status filter if not 'all'
      let queryParams = { ...params };
      if (statusFilter !== 'all') {
        queryParams.status = Number(statusFilter);
      }

      const data = await postService.getPosts(queryParams);
      setPosts(data.items);
      setTotalItems(data.totalItems);
      setPageCount(data.totalPages);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle pagination change
  const handlePaginationChange = (
    newPageIndex: number,
    newPageSize: number
  ) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', newPageIndex.toString());
    params.set('pageSize', newPageSize.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  // Handle search change
  const handleSearchChange = (newSearch: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('search', newSearch);
    params.set('page', '0'); // Reset to first page on search
    router.push(`${pathname}?${params.toString()}`);
  };

  // Handle status filter change
  const handleStatusFilterChange = (value: string) => {
    setStatusFilter(value);
    fetchPosts({
      pageIndex,
      pageSize,
      search,
      status: value !== 'all' ? Number(value) : undefined
    });
  };

  // Handle post deletion
  const handleDelete = async () => {
    if (!deleteId) return;

    try {
      setIsDeleteLoading(true);
      await postService.deletePost(deleteId);

      // Refetch posts after deletion
      fetchPosts({
        pageIndex,
        pageSize,
        search,
        status: statusFilter !== 'all' ? Number(statusFilter) : undefined
      });
    } catch (error) {
      console.error('Error deleting post:', error);
    } finally {
      setIsDeleteLoading(false);
      setDeleteId(null);
    }
  };

  // Fetch posts when params change
  useEffect(() => {
    fetchPosts({
      pageIndex,
      pageSize,
      search,
      status: statusFilter !== 'all' ? Number(statusFilter) : undefined
    });
  }, [pageIndex, pageSize, search]);

  // Card view for posts
  const PostCard = ({ post }: { post: Post }) => (
    <Card className='flex h-full flex-col'>
      {post.image && (
        <div className='aspect-video w-full overflow-hidden rounded-t-lg'>
          <img
            src={post.image}
            alt={post.title || 'Post'}
            className='h-full w-full object-cover transition-all hover:scale-105'
          />
        </div>
      )}
      <CardHeader className={post.image ? 'pt-3' : ''}>
        <div className='flex items-start justify-between gap-2'>
          <CardTitle className='line-clamp-1'>{post.title}</CardTitle>
          <StatusBadge status={post.status || MixContentStatus.Draft} />
        </div>
        <CardDescription>
          {post.excerpt ? (
            <span className='line-clamp-2'>{post.excerpt}</span>
          ) : (
            <span className='text-muted-foreground italic'>No excerpt</span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className='flex-grow'>
        <div className='text-muted-foreground text-sm'>
          <div className='flex items-center gap-1'>
            <Calendar className='h-3 w-3' />
            <span>
              Created:{' '}
              {post.createdDateTime
                ? format(new Date(post.createdDateTime), 'MMM dd, yyyy')
                : '-'}
            </span>
          </div>
          {post.modifiedDateTime && (
            <div className='mt-1 flex items-center gap-1'>
              <Calendar className='h-3 w-3' />
              <span>
                Updated:{' '}
                {format(new Date(post.modifiedDateTime), 'MMM dd, yyyy')}
              </span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className='flex justify-between pt-0'>
        <Button
          variant='outline'
          size='sm'
          onClick={() => router.push(`/dashboard/posts/${post.id}`)}
        >
          <Eye className='mr-1 h-3 w-3' />
          View
        </Button>
        <Button
          variant='default'
          size='sm'
          onClick={() => router.push(`/dashboard/posts/${post.id}/edit`)}
        >
          <Edit className='mr-1 h-3 w-3' />
          Edit
        </Button>
      </CardFooter>
    </Card>
  );

  return (
    <>
      <AlertModal
        isOpen={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={handleDelete}
        loading={isDeleteLoading}
        title='Delete Post'
        description='Are you sure you want to delete this post? This action cannot be undone.'
      />

      <div className='px-1 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4'>
        <div className='mb-6 flex items-center justify-between'>
          <Heading
            title='Post Management'
            description='Manage your blog posts and content'
          />
          <Button onClick={() => router.push('/dashboard/posts/new')}>
            <Plus className='mr-2 h-4 w-4' />
            Add New Post
          </Button>
        </div>

        <Separator className='my-4' />

        <div className='mb-6 flex flex-col gap-4 sm:flex-row'>
          <div className='flex flex-1 items-center gap-2'>
            <Input
              placeholder='Search posts...'
              className='max-w-xs'
              value={search}
              onChange={(e) => handleSearchChange(e.target.value)}
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='outline' size='icon'>
                  <Filter className='h-4 w-4' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end' className='w-56'>
                <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={statusFilter}
                  onValueChange={handleStatusFilterChange}
                >
                  <DropdownMenuRadioItem value='all'>All</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem
                    value={MixContentStatus.Published.toString()}
                  >
                    Published
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem
                    value={MixContentStatus.Draft.toString()}
                  >
                    Draft
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem
                    value={MixContentStatus.Archived.toString()}
                  >
                    Archived
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem
                    value={MixContentStatus.Deleted.toString()}
                  >
                    Deleted
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className='flex items-center space-x-2'>
            <Select
              value={String(pageSize)}
              onValueChange={(value) =>
                handlePaginationChange(0, Number(value))
              }
            >
              <SelectTrigger className='w-[120px]'>
                <SelectValue placeholder='Items per page' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='5'>5 per page</SelectItem>
                <SelectItem value='10'>10 per page</SelectItem>
                <SelectItem value='20'>20 per page</SelectItem>
                <SelectItem value='50'>50 per page</SelectItem>
              </SelectContent>
            </Select>

            <div className='overflow-hidden rounded-md border'>
              <Button
                variant={viewMode === 'table' ? 'default' : 'ghost'}
                size='sm'
                className='rounded-none'
                onClick={() => setViewMode('table')}
              >
                <Table className='h-4 w-4' />
              </Button>
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size='sm'
                className='rounded-none'
                onClick={() => setViewMode('grid')}
              >
                <Grid className='h-4 w-4' />
              </Button>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className='flex w-full justify-center p-12'>
            <div className='border-primary h-10 w-10 animate-spin rounded-full border-b-2'></div>
          </div>
        ) : (
          <>
            {posts.length === 0 ? (
              <Card className='flex flex-col items-center justify-center p-12 text-center'>
                <div className='bg-muted mb-4 rounded-full p-4'>
                  <Tag className='text-muted-foreground h-8 w-8' />
                </div>
                <h3 className='mb-2 text-xl font-semibold'>No posts found</h3>
                <p className='text-muted-foreground mb-6 max-w-sm'>
                  {search
                    ? `No posts matching "${search}"`
                    : "You haven't created any posts yet."}
                  {statusFilter !== 'all'
                    ? ' with the selected status filter.'
                    : '.'}
                </p>
                <Button onClick={() => router.push('/dashboard/posts/new')}>
                  <Plus className='mr-2 h-4 w-4' />
                  Create a new post
                </Button>
                <div className='mt-4'>
                  <ApiDiagnosticsButton
                    endpoint='/rest/posts/list'
                    label='Diagnose API Connection Issue'
                  />
                </div>
              </Card>
            ) : (
              <>
                {viewMode === 'table' ? (
                  <div className='bg-card rounded-md border'>
                    <DataTable
                      columns={columns}
                      data={posts}
                      totalItems={totalItems}
                      pageCount={pageCount}
                      pageIndex={pageIndex}
                      pageSize={pageSize}
                      onPaginationChange={handlePaginationChange}
                      isLoading={isLoading}
                    />
                  </div>
                ) : (
                  <div>
                    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                      {posts.map((post) => (
                        <PostCard key={post.id} post={post} />
                      ))}
                    </div>

                    {totalItems > pageSize && (
                      <div className='mt-8 flex justify-center'>
                        <div className='flex items-center space-x-2'>
                          <Button
                            variant='outline'
                            size='sm'
                            onClick={() =>
                              handlePaginationChange(
                                Math.max(0, pageIndex - 1),
                                pageSize
                              )
                            }
                            disabled={pageIndex === 0}
                          >
                            Previous
                          </Button>
                          <span className='text-muted-foreground text-sm'>
                            Page {pageIndex + 1} of {pageCount}
                          </span>
                          <Button
                            variant='outline'
                            size='sm'
                            onClick={() =>
                              handlePaginationChange(
                                Math.min(pageCount - 1, pageIndex + 1),
                                pageSize
                              )
                            }
                            disabled={pageIndex === pageCount - 1}
                          >
                            Next
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}
