'use client';

import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { PlusCircle, UploadCloud, Download, Search, Database, Settings, ChevronRight, ExternalLink, Trash2, Copy, Edit } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useDatabase } from '../contexts/DatabaseContext';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Skeleton } from '@/components/ui/skeleton';

interface TableItem {
  id: string;
  name: string;
  displayName: string;
  description: string;
  createdDate: string;
  isSystem: boolean;
  rowCount: number;
}

interface TableListProps {
  onTableClick: (tableId: string) => void;
}

export function TableList({ onTableClick }: TableListProps) {
  const { activeDbContext } = useDatabase();
  const [tables, setTables] = useState<TableItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // In a real implementation, this would fetch data from an API for the specific context
    const fetchTables = async () => {
      setIsLoading(true);
      try {
        // Simulate API call with demo data
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Different tables for different contexts
        if (activeDbContext.id === 'analytics') {
          setTables([
            {
              id: 'analytics_events',
              name: 'analytics_events',
              displayName: 'Events',
              description: 'User event tracking data',
              createdDate: '2023-07-15T00:00:00Z',
              isSystem: false,
              rowCount: 15782
            },
            {
              id: 'analytics_users',
              name: 'analytics_users',
              displayName: 'Users',
              description: 'User profile data for analytics',
              createdDate: '2023-07-15T00:00:00Z',
              isSystem: false,
              rowCount: 5423
            },
            {
              id: 'analytics_sessions',
              name: 'analytics_sessions',
              displayName: 'Sessions',
              description: 'User session data',
              createdDate: '2023-07-16T00:00:00Z',
              isSystem: false,
              rowCount: 28941
            }
          ]);
        } else if (activeDbContext.id === 'legacy') {
          setTables([
            {
              id: 'legacy_customers',
              name: 'legacy_customers',
              displayName: 'Legacy Customers',
              description: 'Customer data from legacy system',
              createdDate: '2022-01-05T00:00:00Z',
              isSystem: false,
              rowCount: 1205
            },
            {
              id: 'legacy_orders',
              name: 'legacy_orders',
              displayName: 'Legacy Orders',
              description: 'Order data from legacy system',
              createdDate: '2022-01-05T00:00:00Z',
              isSystem: false,
              rowCount: 8456
            }
          ]);
        } else {
          // Default database
          setTables([
            {
              id: 'demo_customers',
              name: 'demo_customers',
              displayName: 'Customers',
              description: 'Sample customer data for demonstration',
              createdDate: '2023-08-01T00:00:00Z',
              isSystem: false,
              rowCount: 25
            },
            {
              id: 'demo_products',
              name: 'demo_products',
              displayName: 'Products',
              description: 'Sample product data for demonstration',
              createdDate: '2023-08-01T00:00:00Z',
              isSystem: false,
              rowCount: 18
            },
            {
              id: 'mixdb_tables',
              name: 'mixdb_tables',
              displayName: 'Database Tables',
              description: 'Stores the database tables created in MixDB',
              createdDate: '2023-07-01T00:00:00Z',
              isSystem: true,
              rowCount: 3
            },
            {
              id: 'mixdb_fields',
              name: 'mixdb_fields',
              displayName: 'Table Fields',
              description: 'Stores the fields for each database table',
              createdDate: '2023-07-01T00:00:00Z',
              isSystem: true,
              rowCount: 24
            }
          ]);
        }
      } catch (error) {
        console.error('Error fetching tables:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTables();
  }, [activeDbContext.id]);

  const filteredTables = tables.filter(table => 
    table.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    table.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalRecords = tables.reduce((sum, table) => sum + table.rowCount, 0);
  const systemTables = tables.filter(t => t.isSystem).length;
  const customTables = tables.filter(t => !t.isSystem).length;

  const getDbTypeLabel = (type: string) => {
    switch (type) {
      case 'postgres': return 'PostgreSQL';
      case 'mysql': return 'MySQL';
      case 'mssql': return 'SQL Server';
      case 'sqlite': return 'SQLite';
      case 'oracle': return 'Oracle';
      case 'mongodb': return 'MongoDB';
      default: return type;
    }
  };

  return (
    <div className="space-y-6">
      {/* Database Context Info Card */}
      <Card className="border-0 shadow-sm bg-gradient-to-r from-primary/5 to-primary/10">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Database className="h-5 w-5 text-primary" />
                {activeDbContext.name}
              </CardTitle>
              <CardDescription className="text-sm">
                {getDbTypeLabel(activeDbContext.type)} database
                {activeDbContext.isDefault && " (default)"}
              </CardDescription>
            </div>
            <Badge variant={activeDbContext.status === 'connected' ? 'outline' : 'destructive'} className="flex items-center gap-1">
              <span className={`h-2 w-2 rounded-full ${activeDbContext.status === 'connected' ? 'bg-green-500' : 'bg-red-500'}`}></span>
              {activeDbContext.status === 'connected' ? 'Connected' : 'Disconnected'}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
            <div>
              <div className="text-sm text-muted-foreground">Tables</div>
              <div className="text-2xl font-bold">{tables.length}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Records</div>
              <div className="text-2xl font-bold">{totalRecords.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Storage</div>
              <div className="text-2xl font-bold">2.4 GB</div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Actions and Search Bar */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex gap-2">
          <Button className="bg-primary hover:bg-primary/90" size="sm">
            <PlusCircle className="mr-2 h-4 w-4" />
            New Table
          </Button>
          <Button variant="outline" size="sm">
            <UploadCloud className="mr-2 h-4 w-4" />
            Import
          </Button>
        </div>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search tables..."
            className="pl-8 w-full sm:w-[260px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      {/* Tables List Card */}
      <Card className="border">
        <CardContent className="p-0">
          {isLoading ? (
            <div className="p-4 space-y-4">
              <Skeleton className="h-16 w-full rounded-md" />
              <Skeleton className="h-16 w-full rounded-md" />
              <Skeleton className="h-16 w-full rounded-md" />
            </div>
          ) : filteredTables.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
              <Database className="h-12 w-12 text-muted-foreground mb-4 opacity-20" />
              <h3 className="text-lg font-medium">No tables found</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-4">
                {searchQuery ? `No tables matching "${searchQuery}"` : "This database doesn't have any tables yet"}
              </p>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Create a new table
              </Button>
            </div>
          ) : (
            <ScrollArea className="h-[480px]">
              <Table>
                <TableHeader className="bg-muted/40 sticky top-0">
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Records</TableHead>
                    <TableHead className="hidden md:table-cell">Description</TableHead>
                    <TableHead className="hidden lg:table-cell">Created</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTables.map((table) => (
                    <TableRow 
                      key={table.id} 
                      className="cursor-pointer hover:bg-muted/50"
                      onClick={() => onTableClick(table.id)}
                    >
                      <TableCell className="font-medium">
                        <div className="flex items-center">
                          <div className="mr-2">
                            <Database className="h-4 w-4 text-primary opacity-70" />
                          </div>
                          <div>
                            <div className="font-medium text-sm">{table.displayName}</div>
                            <div className="text-xs text-muted-foreground">{table.name}</div>
                          </div>
                          {table.isSystem && (
                            <Badge variant="outline" className="ml-2 text-xs">System</Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm font-medium">{table.rowCount.toLocaleString()}</div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        <div className="text-sm truncate max-w-xs">{table.description}</div>
                      </TableCell>
                      <TableCell className="hidden lg:table-cell">
                        <div className="text-sm text-muted-foreground">
                          {new Date(table.createdDate).toLocaleDateString()}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                            <Button variant="ghost" className="h-8 w-8 p-0" aria-label="Open menu">
                              <Settings className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-[200px]">
                            <DropdownMenuItem onClick={(e) => {
                              e.stopPropagation();
                              onTableClick(table.id);
                            }}>
                              <ExternalLink className="mr-2 h-4 w-4" />
                              <span>View table</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={(e) => e.stopPropagation()}>
                              <Edit className="mr-2 h-4 w-4" />
                              <span>Edit structure</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={(e) => e.stopPropagation()}>
                              <Download className="mr-2 h-4 w-4" />
                              <span>Export data</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={(e) => e.stopPropagation()}>
                              <Copy className="mr-2 h-4 w-4" />
                              <span>Duplicate</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={(e) => e.stopPropagation()} className="text-destructive focus:text-destructive">
                              <Trash2 className="mr-2 h-4 w-4" />
                              <span>Delete table</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          )}
        </CardContent>
      </Card>
    </div>
  );
} 