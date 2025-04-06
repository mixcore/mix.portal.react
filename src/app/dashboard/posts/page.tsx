'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';
import { Edit, Trash, Eye, MoreHorizontal } from 'lucide-react';

import { DataTable } from '@/components/ui/data-table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Heading } from '@/components/ui/heading';
import { postService } from '@/services/post';
import { Post, PostQueryParams } from '@/types/post';
import { MixContentStatus } from '@/types/content';

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Parse search params with defaults
  const pageIndex = Number(searchParams.get('page') || '0');
  const pageSize = Number(searchParams.get('pageSize') || '10');
  const search = searchParams.get('search') || '';

  // Create status label component
  const StatusBadge = ({ status }: { status: MixContentStatus }) => {
    switch (status) {
      case MixContentStatus.Published:
        return <Badge className='bg-green-500'>Published</Badge>;
      case MixContentStatus.Draft:
        return <Badge variant='outline'>Draft</Badge>;
      case MixContentStatus.Schedule:
        return <Badge className='bg-yellow-500'>Scheduled</Badge>;
      case MixContentStatus.Preview:
        return <Badge variant='secondary'>Preview</Badge>;
      case MixContentStatus.Deleted:
        return <Badge variant='destructive'>Deleted</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  // Define table columns
  const columns: ColumnDef<Post>[] = [
    {
      accessorKey: 'id',
      header: 'ID'
    },
    {
      accessorKey: 'title',
      header: 'Title',
      cell: ({ row }) => <div className='font-medium'>{row.original.title}</div>
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => <StatusBadge status={row.original.status} />
    },
    {
      accessorKey: 'createdDateTime',
      header: 'Created',
      cell: ({ row }) =>
        format(new Date(row.original.createdDateTime), 'MMM dd, yyyy')
    },
    {
      accessorKey: 'lastModified',
      header: 'Modified',
      cell: ({ row }) =>
        row.original.lastModified
          ? format(new Date(row.original.lastModified), 'MMM dd, yyyy')
          : '-'
    },
    {
      id: 'actions',
      cell: ({ row }) => {
        const post = row.original;

        return (
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
                onClick={() => router.push(`/dashboard/posts/${post.id}/edit`)}
              >
                <Edit className='mr-2 h-4 w-4' />
                Edit
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className='text-destructive focus:text-destructive'
                onClick={() => handleDelete(post.id)}
              >
                <Trash className='mr-2 h-4 w-4' />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      }
    }
  ];

  // Fetch posts with query params
  const fetchPosts = async (params: PostQueryParams) => {
    try {
      setIsLoading(true);
      const data = await postService.getPosts(params);
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

  // Handle post deletion
  const handleDelete = async (id: number) => {
    // TODO: Add confirmation dialog
    try {
      await postService.deletePost(id);

      // Refetch posts after deletion
      fetchPosts({
        pageIndex,
        pageSize,
        search
      });
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  // Fetch posts when params change
  useEffect(() => {
    fetchPosts({
      pageIndex,
      pageSize,
      search
    });
  }, [pageIndex, pageSize, search]);

  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <Heading
          title='Post Management'
          description='Manage your blog posts and content.'
        />
        <Button onClick={() => router.push('/dashboard/posts/new')}>
          Add New Post
        </Button>
      </div>

      <DataTable
        columns={columns}
        data={posts}
        totalItems={totalItems}
        pageCount={pageCount}
        pageIndex={pageIndex}
        pageSize={pageSize}
        searchKey='title'
        searchPlaceholder='Search posts...'
        onPaginationChange={handlePaginationChange}
        onSearchChange={handleSearchChange}
        isLoading={isLoading}
      />
    </div>
  );
}
