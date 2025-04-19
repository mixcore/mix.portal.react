'use client';

import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { 
  ChevronLeft, 
  Building, 
  Calendar, 
  Shield, 
  Settings, 
  Globe, 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  Plus, 
  Users, 
  Edit, 
  Trash 
} from 'lucide-react';
import { useTenantContext } from '../contexts/TenantContext';
import { TenantData, DomainData } from '../types/tenants';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { fetchDomainsByTenantId } from '../services/api';
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

interface TenantDetailProps {
  tenantId: string;
  onBackClick: () => void;
}

export function TenantDetail({ tenantId, onBackClick }: TenantDetailProps) {
  const { toast } = useToast();
  const { getTenantById, refreshTenants, isLoading } = useTenantContext();
  const [tenant, setTenant] = useState<TenantData | undefined>(getTenantById(tenantId));
  const [domains, setDomains] = useState<DomainData[]>([]);
  const [domainsLoading, setDomainsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);
  
  // Fetch tenant-specific domains
  useEffect(() => {
    if (tenantId) {
      loadDomains();
    }
  }, [tenantId]);
  
  const loadDomains = async () => {
    setDomainsLoading(true);
    try {
      const response = await fetchDomainsByTenantId(tenantId);
      setDomains(response.items);
    } catch (error) {
      console.error('Error loading domains:', error);
    } finally {
      setDomainsLoading(false);
    }
  };

  // Delete handler
  const handleDelete = async () => {
    try {
      setIsDeleteLoading(true);
      // This would be an API call in the real implementation
      await new Promise(resolve => setTimeout(resolve, 500));
      
      toast({
        title: 'Success',
        description: 'Tenant deleted successfully',
      });
      
      onBackClick(); // Go back to tenant list
    } catch (error) {
      console.error('Error deleting tenant:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete tenant',
        variant: 'destructive',
      });
    } finally {
      setIsDeleteLoading(false);
      setIsDeleteModalOpen(false);
    }
  };
  
  // Loading state
  if (isLoading || !tenant) {
    return <TenantDetailSkeleton onBackClick={onBackClick} />;
  }
  
  // Format dates
  const formattedCreatedDate = format(new Date(tenant.createdDateTime), 'MMM d, yyyy');
  
  // Map status to UI variant
  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'Published':
        return 'default';
      case 'Draft':
        return 'secondary';
      case 'Deleted':
        return 'destructive';
      default:
        return 'outline';
    }
  };
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Published':
        return <CheckCircle className="mr-2 h-5 w-5 text-green-500" />;
      case 'Draft':
        return <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />;
      case 'Deleted':
        return <XCircle className="mr-2 h-5 w-5 text-red-500" />;
      default:
        return <AlertCircle className="mr-2 h-5 w-5 text-muted-foreground" />;
    }
  };
  
  return (
    <>
      <AlertModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        loading={isDeleteLoading}
        title="Delete Tenant"
        description="Are you sure you want to delete this tenant? All data associated with this tenant will be permanently removed. This action cannot be undone."
      />
      
      <div className="space-y-6">
        {/* Header with back button */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              className="mr-2" 
              onClick={onBackClick}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div>
              <h2 className="text-2xl font-bold tracking-tight">{tenant.displayName}</h2>
              <p className="text-muted-foreground">{tenant.systemName}</p>
            </div>
          </div>
          <div className="flex gap-2 mt-2 sm:mt-0">
            <Button variant="outline">
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </Button>
            <Button variant="default">
              <Shield className="mr-2 h-4 w-4" />
              Manage
            </Button>
            <Button variant="destructive" onClick={() => setIsDeleteModalOpen(true)}>
              <Trash className="mr-2 h-4 w-4" />
              Delete
            </Button>
          </div>
        </div>
        
        <div className="flex items-center">
          <Badge 
            variant={getStatusVariant(tenant.status)}
            className="text-sm py-1 px-3"
          >
            {getStatusIcon(tenant.status)}
            <span>{tenant.status === 'Published' ? 'Active' : tenant.status}</span>
          </Badge>
          
          {tenant.plan && (
            <Badge 
              variant="outline"
              className="ml-2 text-sm py-1 px-3"
            >
              Plan: {tenant.plan}
            </Badge>
          )}
          
          {tenant.usersCount !== undefined && (
            <div className="ml-4 flex items-center text-sm text-muted-foreground">
              <Users className="h-4 w-4 mr-1" />
              {tenant.usersCount} users
            </div>
          )}
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="domains">Domains</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Primary Domain</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center">
                  <Globe className="mr-2 h-5 w-5 text-muted-foreground" />
                  <span className="text-lg font-medium">{tenant.primaryDomain}</span>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Status</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center">
                  {getStatusIcon(tenant.status)}
                  <Badge variant={getStatusVariant(tenant.status)}>
                    {tenant.status === 'Published' ? 'Active' : tenant.status}
                  </Badge>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Created Date</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-muted-foreground" />
                  <span className="text-lg font-medium">{formattedCreatedDate}</span>
                </CardContent>
              </Card>

              {tenant.expiresAt && (
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Expires</CardTitle>
                  </CardHeader>
                  <CardContent className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-muted-foreground" />
                    <span className="text-lg font-medium">
                      {format(new Date(tenant.expiresAt), 'MMM d, yyyy')}
                    </span>
                  </CardContent>
                </Card>
              )}
              
              {tenant.plan && (
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Plan</CardTitle>
                  </CardHeader>
                  <CardContent className="flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-muted-foreground" />
                    <span className="text-lg font-medium">{tenant.plan}</span>
                  </CardContent>
                </Card>
              )}
              
              {tenant.usersCount !== undefined && (
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Users</CardTitle>
                  </CardHeader>
                  <CardContent className="flex items-center">
                    <Users className="mr-2 h-5 w-5 text-muted-foreground" />
                    <span className="text-lg font-medium">{tenant.usersCount}</span>
                  </CardContent>
                </Card>
              )}
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Tenant Information</CardTitle>
                <CardDescription>Detailed information about this tenant</CardDescription>
              </CardHeader>
              <CardContent>
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <dt className="font-medium">System Name</dt>
                    <dd className="text-muted-foreground mt-1">{tenant.systemName}</dd>
                  </div>
                  <div>
                    <dt className="font-medium">Display Name</dt>
                    <dd className="text-muted-foreground mt-1">{tenant.displayName}</dd>
                  </div>
                  <div>
                    <dt className="font-medium">Primary Domain</dt>
                    <dd className="text-muted-foreground mt-1">{tenant.primaryDomain}</dd>
                  </div>
                  <div>
                    <dt className="font-medium">Status</dt>
                    <dd className="mt-1">
                      <Badge variant={getStatusVariant(tenant.status)}>
                        {tenant.status === 'Published' ? 'Active' : tenant.status}
                      </Badge>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium">Created Date</dt>
                    <dd className="text-muted-foreground mt-1">{formattedCreatedDate}</dd>
                  </div>
                  {tenant.expiresAt && (
                    <div>
                      <dt className="font-medium">Expires</dt>
                      <dd className="text-muted-foreground mt-1">
                        {format(new Date(tenant.expiresAt), 'MMM d, yyyy')}
                      </dd>
                    </div>
                  )}
                  <div>
                    <dt className="font-medium">ID</dt>
                    <dd className="text-muted-foreground mt-1">{tenant.id}</dd>
                  </div>
                </dl>
              </CardContent>
              <CardFooter className="border-t pt-4 pb-2">
                <Button variant="outline" className="ml-auto" onClick={() => setActiveTab('domains')}>
                  <Globe className="mr-2 h-4 w-4" />
                  Manage Domains
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="domains" className="mt-4">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Domains</CardTitle>
                    <CardDescription>Domains associated with this tenant</CardDescription>
                  </div>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Domain
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {domainsLoading ? (
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex justify-between items-center py-2">
                        <Skeleton className="h-6 w-48" />
                        <Skeleton className="h-6 w-24" />
                      </div>
                    ))}
                  </div>
                ) : domains.length === 0 ? (
                  <div className="text-center py-8">
                    <Globe className="mx-auto h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-semibold">No domains found</h3>
                    <p className="text-muted-foreground">
                      Add a domain to this tenant
                    </p>
                  </div>
                ) : (
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Domain</TableHead>
                          <TableHead>Display Name</TableHead>
                          <TableHead>Created</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {domains.map((domain) => (
                          <TableRow key={domain.id}>
                            <TableCell className="font-medium">{domain.host}</TableCell>
                            <TableCell>{domain.displayName}</TableCell>
                            <TableCell>{format(new Date(domain.createdDateTime), 'MMM dd, yyyy')}</TableCell>
                            <TableCell>
                              <Badge variant={domain.status === 'Published' ? 'default' : 'secondary'}>
                                {domain.status === 'Published' ? 'Active' : domain.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="text-destructive">
                                <Trash className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="users" className="mt-4">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Users</CardTitle>
                    <CardDescription>Users with access to this tenant</CardDescription>
                  </div>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add User
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Users className="mx-auto h-12 w-12 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-semibold">Coming Soon</h3>
                  <p className="text-muted-foreground">
                    User management will be available soon
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="settings" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>Tenant configuration settings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Settings className="mx-auto h-12 w-12 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-semibold">Coming Soon</h3>
                  <p className="text-muted-foreground">
                    Tenant settings will be available soon
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}

// Loading skeleton
function TenantDetailSkeleton({ onBackClick }: { onBackClick: () => void }) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            className="mr-2" 
            onClick={onBackClick}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <div>
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-4 w-36 mt-1" />
          </div>
        </div>
        <div className="flex gap-2 mt-2 sm:mt-0">
          <Skeleton className="h-9 w-24" />
          <Skeleton className="h-9 w-24" />
          <Skeleton className="h-9 w-24" />
        </div>
      </div>
      
      <Skeleton className="h-6 w-32" />
      
      <Skeleton className="h-10 w-full max-w-md" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i}>
            <CardHeader className="pb-2">
              <Skeleton className="h-4 w-24" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-8 w-32" />
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-36" />
          <Skeleton className="h-4 w-64 mt-1" />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i}>
                <Skeleton className="h-4 w-24 mb-1" />
                <Skeleton className="h-6 w-32" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 