'use client';

import React, { useState } from 'react';
import { format } from 'date-fns';
import { Globe, Plus, Search, MoreHorizontal, Calendar, Building, Edit, Trash } from 'lucide-react';
import { useTenantContext } from '../contexts/TenantContext';
import { DomainData } from '../types/tenants';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { AlertModal } from '@/components/modals/alert-modal';
import { useToast } from '@/components/ui/use-toast';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export function DomainList() {
  const router = useRouter();
  const { toast } = useToast();
  const { domains, tenants, isLoading, error, refreshDomains } = useTenantContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [deleteDomainId, setDeleteDomainId] = useState<string | null>(null);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);
  
  // Delete domain handler
  const handleDelete = async () => {
    if (!deleteDomainId) return;

    try {
      setIsDeleteLoading(true);
      // This would be an API call in the real implementation
      await new Promise(resolve => setTimeout(resolve, 500));
      
      toast({
        title: 'Success',
        description: 'Domain deleted successfully',
      });
      
      // Refresh the domain list
      refreshDomains();
    } catch (error) {
      console.error('Error deleting domain:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete domain',
        variant: 'destructive',
      });
    } finally {
      setIsDeleteLoading(false);
      setDeleteDomainId(null);
    }
  };
  
  // Filter domains based on search query and status
  const filteredDomains = domains.filter(domain => {
    const matchesSearch = searchQuery === '' || 
      domain.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      domain.host.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || domain.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });
  
  // Get unique statuses for filter dropdown
  const uniqueStatuses = Array.from(new Set(domains.map(domain => domain.status)));
  
  // Get tenant name by ID
  const getTenantName = (tenantId: number): string => {
    const tenant = tenants.find(t => t.id === tenantId);
    return tenant ? tenant.displayName : 'Unknown';
  };
  
  // Loading state
  if (isLoading && domains.length === 0) {
    return <DomainListSkeleton />;
  }
  
  // Error state
  if (error && !isLoading) {
    return (
      <div className="p-6 bg-destructive/10 text-destructive rounded-md">
        <h3 className="text-xl font-semibold mb-2">Error Loading Domains</h3>
        <p>{error}</p>
        <Button 
          variant="outline" 
          className="mt-4" 
          onClick={() => refreshDomains()}
        >
          Retry
        </Button>
      </div>
    );
  }
  
  return (
    <>
      <AlertModal
        isOpen={!!deleteDomainId}
        onClose={() => setDeleteDomainId(null)}
        onConfirm={handleDelete}
        loading={isDeleteLoading}
        title="Delete Domain"
        description="Are you sure you want to delete this domain? This action cannot be undone."
      />
    
      <div className="space-y-6">
        {/* Top section with title and actions */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Domains</h2>
            <p className="text-muted-foreground">
              Manage domains for your multi-tenant environment
            </p>
          </div>
          <Button className="self-start">
            <Plus className="mr-2 h-4 w-4" />
            Add Domain
          </Button>
        </div>
        
        <Separator />
        
        {/* Analytics card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4 flex flex-col items-center justify-center">
              <div className="text-sm font-medium text-muted-foreground mb-1">Total Domains</div>
              <div className="text-3xl font-bold">{domains.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex flex-col items-center justify-center">
              <div className="text-sm font-medium text-muted-foreground mb-1">Active Domains</div>
              <div className="text-3xl font-bold text-green-500">{domains.filter(d => d.status === 'Published').length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex flex-col items-center justify-center">
              <div className="text-sm font-medium text-muted-foreground mb-1">Total Tenants</div>
              <div className="text-3xl font-bold">{tenants.length}</div>
            </CardContent>
          </Card>
        </div>
        
        {/* Filters */}
        <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 mb-4">
          <div className="flex items-center space-x-2">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search domains..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <span className="text-sm">Status:</span>
              <select
                className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All</option>
                {uniqueStatuses.map(status => (
                  <option key={status} value={status}>{status === 'Published' ? 'Active' : status}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        {/* Domains table */}
        {filteredDomains.length === 0 ? (
          <div className="flex h-[400px] w-full flex-col items-center justify-center rounded-md border border-dashed p-8 text-center">
            <Globe className="h-10 w-10 text-muted-foreground" />
            <h3 className="mt-4 text-lg font-medium">No domains found</h3>
            <p className="text-sm text-muted-foreground">
              {searchQuery || statusFilter !== 'all'
                ? 'Try changing your search or filter criteria'
                : 'Get started by adding a domain'}
            </p>
            {!searchQuery && statusFilter === 'all' && (
              <Button
                className="mt-4"
              >
                <Plus className="mr-2 h-4 w-4" />
                Add Domain
              </Button>
            )}
          </div>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Domains</CardTitle>
              <CardDescription>All domains across tenants</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Domain</TableHead>
                      <TableHead>Display Name</TableHead>
                      <TableHead>Tenant</TableHead>
                      <TableHead>Created Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredDomains.map((domain) => (
                      <TableRow key={domain.id}>
                        <TableCell className="font-medium">{domain.host}</TableCell>
                        <TableCell>{domain.displayName}</TableCell>
                        <TableCell 
                          className="cursor-pointer text-primary hover:underline"
                          onClick={() => router.push(`/dashboard/apps/tenants?view=detail&tenantId=${domain.tenantId}`)}
                        >
                          {getTenantName(domain.tenantId)}
                        </TableCell>
                        <TableCell>{format(new Date(domain.createdDateTime), 'MMM d, yyyy')}</TableCell>
                        <TableCell>
                          <Badge variant={domain.status === 'Published' ? 'default' : 'secondary'}>
                            {domain.status === 'Published' ? 'Active' : domain.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                <Edit className="mr-2 h-4 w-4" />
                                Edit domain
                              </DropdownMenuItem>
                              <DropdownMenuItem 
                                onClick={() => router.push(`/dashboard/apps/tenants?view=detail&tenantId=${domain.tenantId}`)}
                              >
                                <Building className="mr-2 h-4 w-4" />
                                View tenant
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem 
                                className="text-destructive focus:text-destructive"
                                onClick={() => setDeleteDomainId(domain.id.toString())}
                              >
                                <Trash className="mr-2 h-4 w-4" />
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
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
}

// Loading skeleton
function DomainListSkeleton() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <Skeleton className="h-9 w-36" />
          <Skeleton className="h-4 w-72 mt-2" />
        </div>
        <Skeleton className="h-9 w-32" />
      </div>
      
      <Separator />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array(3).fill(0).map((_, i) => (
          <Card key={i}>
            <CardContent className="p-4 flex flex-col items-center justify-center">
              <Skeleton className="h-4 w-24 mb-1" />
              <Skeleton className="h-8 w-12" />
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="flex justify-between">
        <Skeleton className="h-10 w-64" />
        <Skeleton className="h-10 w-24" />
      </div>
      
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-4 w-48" />
        </CardHeader>
        <CardContent>
          <div className="rounded-md border p-4">
            <Skeleton className="h-10 w-full mb-4" />
            {Array(5).fill(0).map((_, i) => (
              <div key={i} className="flex items-center justify-between py-3">
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-5 w-1/3" />
                  <Skeleton className="h-4 w-1/4" />
                </div>
                <Skeleton className="h-8 w-8 rounded-full" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 