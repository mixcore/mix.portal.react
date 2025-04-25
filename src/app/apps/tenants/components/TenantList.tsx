'use client';

import React, { useState } from 'react';
import { format } from 'date-fns';
import { 
  Building, 
  Plus, 
  Search, 
  MoreHorizontal, 
  Calendar, 
  Users, 
  Globe, 
  Edit, 
  Trash, 
  Check 
} from 'lucide-react';
import { useTenantContext } from '../contexts/TenantContext';
import { TenantData } from '../types/tenants';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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

interface TenantListProps {
  onTenantClick: (tenantId: string) => void;
}

export function TenantList({ onTenantClick }: TenantListProps) {
  const router = useRouter();
  const { toast } = useToast();
  const { tenants, isLoading, error, refreshTenants } = useTenantContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [planFilter, setPlanFilter] = useState<string>('all');
  const [deleteTenantId, setDeleteTenantId] = useState<string | null>(null);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('table');
  
  // Delete tenant handler
  const handleDelete = async () => {
    if (!deleteTenantId) return;

    try {
      setIsDeleteLoading(true);
      // This would be an API call in the real implementation
      await new Promise(resolve => setTimeout(resolve, 500));
      
      toast({
        title: 'Success',
        description: 'Tenant deleted successfully',
      });
      
      // Refresh the tenant list
      refreshTenants();
    } catch (error) {
      console.error('Error deleting tenant:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete tenant',
        variant: 'destructive',
      });
    } finally {
      setIsDeleteLoading(false);
      setDeleteTenantId(null);
    }
  };
  
  // Filter tenants based on search query, status and plan
  const filteredTenants = tenants.filter(tenant => {
    const matchesSearch = searchQuery === '' || 
      tenant.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tenant.systemName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tenant.primaryDomain.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || tenant.status === statusFilter;
    
    // Match on plan when we have plan data, for now just pass through
    const matchesPlan = true;
    
    return matchesSearch && matchesStatus && matchesPlan;
  });
  
  // Get unique statuses for filter dropdown
  const uniqueStatuses = Array.from(new Set(tenants.map(tenant => tenant.status)));
  
  // Analytics data for dashboard cards
  const analytics = {
    totalTenants: tenants.length,
    activeTenants: tenants.filter(t => t.status === 'Published').length,
    inactiveTenants: tenants.filter(t => t.status !== 'Published' && t.status !== 'Deleted').length,
    suspendedTenants: tenants.filter(t => t.status === 'Deleted').length,
    // This would use real user count data when available
    totalUsers: 0
  };
  
  // Status badge UI component
  const StatusBadge = ({ status }: { status: string }) => {
    switch (status) {
      case 'Published':
        return <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>;
      case 'Draft':
        return <Badge variant="secondary">Draft</Badge>;
      case 'Deleted':
        return <Badge variant="destructive">Deleted</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };
  
  // Loading state
  if (isLoading && tenants.length === 0) {
    return <TenantListSkeleton />;
  }
  
  // Error state
  if (error && !isLoading) {
    return (
      <div className="p-6 bg-destructive/10 text-destructive rounded-md">
        <h3 className="text-xl font-semibold mb-2">Error Loading Tenants</h3>
        <p>{error}</p>
        <Button 
          variant="outline" 
          className="mt-4" 
          onClick={() => refreshTenants()}
        >
          Retry
        </Button>
      </div>
    );
  }
  
  return (
    <>
      <AlertModal
        isOpen={!!deleteTenantId}
        onClose={() => setDeleteTenantId(null)}
        onConfirm={handleDelete}
        loading={isDeleteLoading}
        title="Delete Tenant"
        description="Are you sure you want to delete this tenant? All data associated with this tenant will be permanently removed. This action cannot be undone."
      />

      <div className="space-y-6">
        {/* Top section with title and actions */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Tenants</h2>
            <p className="text-muted-foreground">
              Manage your multi-tenant environment
            </p>
          </div>
          <Button 
            className="self-start"
            onClick={() => router.push('/dashboard/tenants/new')}
          >
            <Plus className="mr-2 h-4 w-4" />
            New Tenant
          </Button>
        </div>
        
        <Separator />
        
        {/* Analytics Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5 mb-6">
          <Card>
            <CardContent className="p-4 flex flex-col items-center justify-center">
              <div className="text-sm font-medium text-muted-foreground mb-1">Total Tenants</div>
              <div className="text-3xl font-bold">{analytics.totalTenants}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex flex-col items-center justify-center">
              <div className="text-sm font-medium text-muted-foreground mb-1">Active</div>
              <div className="text-3xl font-bold text-green-500">{analytics.activeTenants}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex flex-col items-center justify-center">
              <div className="text-sm font-medium text-muted-foreground mb-1">Inactive</div>
              <div className="text-3xl font-bold text-gray-500">{analytics.inactiveTenants}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex flex-col items-center justify-center">
              <div className="text-sm font-medium text-muted-foreground mb-1">Deleted</div>
              <div className="text-3xl font-bold text-red-500">{analytics.suspendedTenants}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex flex-col items-center justify-center">
              <div className="text-sm font-medium text-muted-foreground mb-1">Total Users</div>
              <div className="text-3xl font-bold">{analytics.totalUsers}</div>
            </CardContent>
          </Card>
        </div>
        
        {/* Filters */}
        <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 mb-4">
          <div className="flex items-center space-x-2">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search tenants..."
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
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm">View:</span>
              <select
                className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                value={viewMode}
                onChange={(e) => setViewMode(e.target.value as 'cards' | 'table')}
              >
                <option value="table">Table</option>
                <option value="cards">Cards</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Empty state */}
        {filteredTenants.length === 0 ? (
          <div className="flex h-[400px] w-full flex-col items-center justify-center rounded-md border border-dashed p-8 text-center">
            <Building className="h-10 w-10 text-muted-foreground" />
            <h3 className="mt-4 text-lg font-medium">No tenants found</h3>
            <p className="text-sm text-muted-foreground">
              {searchQuery || statusFilter !== 'all'
                ? 'Try changing your search or filter criteria'
                : 'Get started by creating a new tenant'}
            </p>
            {!searchQuery && statusFilter === 'all' && (
              <Button
                className="mt-4"
                onClick={() => router.push('/dashboard/tenants/new')}
              >
                <Plus className="mr-2 h-4 w-4" />
                New Tenant
              </Button>
            )}
          </div>
        ) : viewMode === 'table' ? (
          // Table View
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Domain</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTenants.map((tenant) => (
                  <TableRow key={tenant.id}>
                    <TableCell className="font-medium">
                      <div className="flex flex-col">
                        <span>{tenant.displayName}</span>
                        <span className="text-xs text-muted-foreground">{tenant.systemName}</span>
                      </div>
                    </TableCell>
                    <TableCell>{tenant.primaryDomain}</TableCell>
                    <TableCell>
                      <StatusBadge status={tenant.status} />
                    </TableCell>
                    <TableCell>{format(new Date(tenant.createdDateTime), 'MMM dd, yyyy')}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem 
                            onClick={() => onTenantClick(tenant.id.toString())}
                          >
                            <Building className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          {tenant.status !== 'Published' && (
                            <DropdownMenuItem>
                              <Check className="mr-2 h-4 w-4" />
                              Activate
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuSeparator />
                          <DropdownMenuItem 
                            className="text-destructive focus:text-destructive"
                            onClick={() => setDeleteTenantId(tenant.id.toString())}
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
        ) : (
          // Card View
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTenants.map((tenant) => (
              <TenantCard 
                key={tenant.id} 
                tenant={tenant}
                onClick={() => onTenantClick(tenant.id.toString())}
                onDelete={() => setDeleteTenantId(tenant.id.toString())}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

// Single tenant card component
interface TenantCardProps {
  tenant: TenantData;
  onClick: () => void;
  onDelete: () => void;
}

function TenantCard({ tenant, onClick, onDelete }: TenantCardProps) {
  const formattedDate = format(new Date(tenant.createdDateTime), 'MMM d, yyyy');
  
  return (
    <Card className="tenant-card cursor-pointer hover:shadow-md transition-all">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="space-y-1" onClick={onClick}>
            <CardTitle className="text-xl">{tenant.displayName}</CardTitle>
            <CardDescription>{tenant.systemName}</CardDescription>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={onClick}>
                <Building className="mr-2 h-4 w-4" />
                View details
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Edit className="mr-2 h-4 w-4" />
                Edit tenant
              </DropdownMenuItem>
              {tenant.status !== 'Published' && (
                <DropdownMenuItem>
                  <Check className="mr-2 h-4 w-4" />
                  Activate
                </DropdownMenuItem>
              )}
              <DropdownMenuSeparator />
              <DropdownMenuItem 
                className="text-destructive focus:text-destructive"
                onClick={onDelete}
              >
                <Trash className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent onClick={onClick}>
        <div className="space-y-4">
          <div className="flex items-center text-sm">
            <Globe className="mr-2 h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">{tenant.primaryDomain}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm">
              <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">{formattedDate}</span>
            </div>
            <StatusBadge status={tenant.status} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Loading skeleton
function TenantListSkeleton() {
  return (
    <div className="tenants-container space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <Skeleton className="h-9 w-36" />
          <Skeleton className="h-4 w-72 mt-2" />
        </div>
        <Skeleton className="h-9 w-32" />
      </div>
      
      <Separator />
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
        {Array(5).fill(0).map((_, i) => (
          <Card key={i}>
            <CardContent className="p-4 flex flex-col items-center justify-center">
              <Skeleton className="h-4 w-24 mb-1" />
              <Skeleton className="h-8 w-8" />
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="flex justify-between">
        <Skeleton className="h-10 w-64" />
        <div className="flex gap-2">
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-10 w-24" />
        </div>
      </div>
      
      <Skeleton className="h-[400px] w-full" />
    </div>
  );
} 