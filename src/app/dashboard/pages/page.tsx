'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import { PlusIcon, SearchIcon, EyeIcon, PencilIcon, TrashIcon, CheckIcon, XIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Heading } from '@/components/ui/heading';
import { useToast } from '@/components/ui/use-toast';
import { AlertModal } from '@/components/modals/alert-modal';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

import { MixContentStatus } from '@/types/content';

// Mock data for pages - this will be replaced with actual API calls
interface Page {
  id: string;
  title: string;
  slug: string;
  createdDateTime: string;
  modifiedDateTime?: string;
  status: MixContentStatus;
  excerpt?: string;
  author?: string;
}

// Temporary mock data - replace with API call later
const mockPages: Page[] = [
  {
    id: '1',
    title: 'Home Page',
    slug: 'home',
    createdDateTime: '2023-10-01T08:00:00Z',
    modifiedDateTime: '2023-11-15T14:30:00Z',
    status: MixContentStatus.Published,
    excerpt: 'Welcome to our website',
    author: 'Admin'
  },
  {
    id: '2',
    title: 'About Us',
    slug: 'about-us',
    createdDateTime: '2023-10-05T09:15:00Z',
    modifiedDateTime: '2023-11-10T11:45:00Z',
    status: MixContentStatus.Published,
    excerpt: 'Learn more about our company',
    author: 'Admin'
  },
  {
    id: '3',
    title: 'Contact',
    slug: 'contact',
    createdDateTime: '2023-10-10T14:20:00Z',
    status: MixContentStatus.Published,
    excerpt: 'Get in touch with us',
    author: 'Admin'
  },
  {
    id: '4',
    title: 'Terms of Service',
    slug: 'terms-of-service',
    createdDateTime: '2023-11-01T10:00:00Z',
    status: MixContentStatus.Published,
    excerpt: 'Our terms and conditions',
    author: 'Legal'
  },
  {
    id: '5',
    title: 'Privacy Policy',
    slug: 'privacy-policy',
    createdDateTime: '2023-11-01T10:30:00Z',
    status: MixContentStatus.Published,
    excerpt: 'Our privacy policies',
    author: 'Legal'
  },
  {
    id: '6',
    title: 'New Features (Draft)',
    slug: 'new-features',
    createdDateTime: '2023-12-01T09:00:00Z',
    status: MixContentStatus.Draft,
    excerpt: 'Upcoming features preview',
    author: 'Marketing'
  },
];

export default function PagesPage() {
  const router = useRouter();
  const { toast } = useToast();
  
  const [pages, setPages] = useState<Page[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<MixContentStatus | 'all'>('all');
  const [deletePageId, setDeletePageId] = useState<string | null>(null);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  // Fetch pages (currently using mock data)
  const fetchPages = async () => {
    try {
      setIsLoading(true);
      // This would be an API call in the real implementation
      // For now, we'll use the mock data
      setTimeout(() => {
        setPages(mockPages);
        setIsLoading(false);
      }, 500);
    } catch (error) {
      console.error('Error fetching pages:', error);
      toast({
        title: 'Error',
        description: 'Failed to load pages',
        variant: 'destructive',
      });
      setIsLoading(false);
    }
  };

  // Delete page handler
  const handleDelete = async () => {
    if (!deletePageId) return;

    try {
      setIsDeleteLoading(true);
      // This would be an API call in the real implementation
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Remove from local state
      setPages(pages.filter(page => page.id !== deletePageId));
      
      toast({
        title: 'Success',
        description: 'Page deleted successfully',
      });
    } catch (error) {
      console.error('Error deleting page:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete page',
        variant: 'destructive',
      });
    } finally {
      setIsDeleteLoading(false);
      setDeletePageId(null);
    }
  };

  // Filter pages based on search query and status
  const filteredPages = pages.filter(page => {
    const matchesSearch = searchQuery === '' || 
      page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      page.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (page.excerpt && page.excerpt.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesStatus = statusFilter === 'all' || page.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  // Status badge UI component
  const StatusBadge = ({ status }: { status: MixContentStatus }) => {
    switch (status) {
      case MixContentStatus.Published:
        return <Badge className="bg-green-500 hover:bg-green-600">Published</Badge>;
      case MixContentStatus.Draft:
        return <Badge variant="secondary">Draft</Badge>;
      case MixContentStatus.Archived:
        return <Badge variant="outline">Archived</Badge>;
      case MixContentStatus.Deleted:
        return <Badge variant="destructive">Deleted</Badge>;
      default:
        return null;
    }
  };

  // Load pages on initial render
  useEffect(() => {
    fetchPages();
  }, []);

  return (
    <>
      <AlertModal
        isOpen={!!deletePageId}
        onClose={() => setDeletePageId(null)}
        onConfirm={handleDelete}
        loading={isDeleteLoading}
        title="Delete Page"
        description="Are you sure you want to delete this page? This action cannot be undone."
      />

      <div className="px-1 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4">
        <div className="flex items-center justify-between">
          <Heading
            title="Pages"
            description="Manage your website pages"
          />
          <Button onClick={() => router.push('/dashboard/pages/new')}>
            <PlusIcon className="mr-2 h-4 w-4" />
            New Page
          </Button>
        </div>
        
        <Separator className="my-4" />
        
        <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 mb-4">
          <div className="flex items-center space-x-2">
            <div className="relative w-full md:w-64">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search pages..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Label htmlFor="status-filter" className="text-sm font-medium">
              Status:
            </Label>
            <select
              id="status-filter"
              className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              value={statusFilter === 'all' ? 'all' : statusFilter.toString()}
              onChange={(e) => setStatusFilter(e.target.value === 'all' ? 'all' : Number(e.target.value) as MixContentStatus)}
            >
              <option value="all">All</option>
              <option value={MixContentStatus.Published}>Published</option>
              <option value={MixContentStatus.Draft}>Draft</option>
              <option value={MixContentStatus.Archived}>Archived</option>
            </select>
          </div>
        </div>
        
        {isLoading ? (
          <div className="flex h-[400px] w-full items-center justify-center">
            <div className="h-10 w-10 animate-spin rounded-full border-b-2 border-primary"></div>
          </div>
        ) : filteredPages.length === 0 ? (
          <div className="flex h-[400px] w-full flex-col items-center justify-center rounded-md border border-dashed p-8 text-center">
            <h3 className="mt-4 text-lg font-medium">No pages found</h3>
            <p className="text-sm text-muted-foreground">
              {searchQuery || statusFilter !== 'all'
                ? 'Try changing your search or filter criteria'
                : 'Get started by creating a new page'}
            </p>
            {!searchQuery && statusFilter === 'all' && (
              <Button
                className="mt-4"
                onClick={() => router.push('/dashboard/pages/new')}
              >
                <PlusIcon className="mr-2 h-4 w-4" />
                New Page
              </Button>
            )}
          </div>
        ) : (
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Slug</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Modified</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPages.map((page) => (
                  <TableRow key={page.id}>
                    <TableCell className="font-medium">{page.title}</TableCell>
                    <TableCell>{page.slug}</TableCell>
                    <TableCell>
                      <StatusBadge status={page.status} />
                    </TableCell>
                    <TableCell>{format(new Date(page.createdDateTime), 'MMM dd, yyyy')}</TableCell>
                    <TableCell>
                      {page.modifiedDateTime 
                        ? format(new Date(page.modifiedDateTime), 'MMM dd, yyyy') 
                        : '—'}
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <EyeIcon className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem 
                            onClick={() => router.push(`/dashboard/pages/${page.id}`)}
                          >
                            <EyeIcon className="mr-2 h-4 w-4" />
                            View
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            onClick={() => router.push(`/dashboard/pages/${page.id}/edit`)}
                          >
                            <PencilIcon className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          {page.status !== MixContentStatus.Published && (
                            <DropdownMenuItem>
                              <CheckIcon className="mr-2 h-4 w-4" />
                              Publish
                            </DropdownMenuItem>
                          )}
                          {page.status === MixContentStatus.Published && (
                            <DropdownMenuItem>
                              <XIcon className="mr-2 h-4 w-4" />
                              Unpublish
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuSeparator />
                          <DropdownMenuItem 
                            className="text-destructive focus:text-destructive"
                            onClick={() => setDeletePageId(page.id)}
                          >
                            <TrashIcon className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </>
  );
} 