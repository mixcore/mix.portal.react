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
import { toast } from '@/components/ui/use-toast';
import TableService, { MixTable } from '../services/tableService';
import { slugify } from '../utils/url-helpers';
import { addTableMapping, getSlugFromTable } from '../config/route-mapping';

// Map API table to UI table item
function mapApiTableToTableItem(apiTable: MixTable): TableItem {
  return {
    id: typeof apiTable.id === 'string' ? parseInt(apiTable.id, 10) : apiTable.id,
    name: apiTable.systemName || apiTable.name,
    displayName: apiTable.displayName,
    description: apiTable.description || '',
    createdDate: apiTable.createdDateTime || new Date().toISOString(),
    isSystem: apiTable.isSystem || apiTable.type === 'System',
    rowCount: apiTable.rowCount || 0
  };
}

interface TableItem {
  id: number;
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
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch tables when active db context changes
  useEffect(() => {
    fetchTables();
  }, [activeDbContext.id]);

  // Fetch tables from API
  const fetchTables = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Call the API using the service
      const response = await TableService.getList({
        mixDatabaseContextId: activeDbContext.id,
        pageSize: 100,
        status: 'Published'
      });
      
      if (response.isSuccessful && response.data) {
        // Get tables from items array in the paginated response
        const tableData = response.data.items || [];
        
        // Map API tables to UI table items
        const tableItems = tableData.map(mapApiTableToTableItem);
        
        // Update the route mappings for URL-friendly paths
        tableItems.forEach(table => {
          const tableSlug = slugify(table.displayName || table.name);
          addTableMapping({
            slug: tableSlug,
            name: table.name,
            id: table.id.toString(),
            dbContextId: activeDbContext.id.toString()
          });
        });
        
        // Set tables without fetching individual row counts
        setTables(tableItems);
      } else {
        console.error('Failed to fetch tables:', response.errors);
        setError(response.errors?.join(', ') || 'An unknown error occurred');
        toast({
          title: 'Error loading tables',
          description: response.errors?.join(', ') || 'An unknown error occurred',
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error('Error fetching tables:', error);
      setError('Failed to fetch tables. Please try again later.');
      toast({
        title: 'Error loading tables',
        description: 'Failed to fetch tables. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle clicking on a table
  const handleTableClick = (table: TableItem) => {
    // Generate a slug from the table display name
    const tableSlug = table.id.toString();
    
    // Store the mapping between slug and actual table ID
    addTableMapping({
      slug: tableSlug,
      name: table.name,
      id: table.id.toString(),
      dbContextId: activeDbContext.id.toString()
    });
    
    // Call the onTableClick handler with the table ID
    onTableClick(tableSlug);
  };

  // Create a new table
  const createTable = async () => {
    toast({
      title: 'Creating new table',
      description: 'This functionality will be implemented soon.',
    });
    // Implementation for table creation will go here
  };

  // Duplicate a table
  const duplicateTable = async (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    
    try {
      const response = await TableService.duplicate(id.toString());
      
      if (response.isSuccessful && response.data) {
        const newTable = mapApiTableToTableItem(response.data);
        setTables([...tables, newTable]);
        
        toast({
          title: 'Table duplicated',
          description: `${newTable.displayName} has been created as a duplicate.`,
        });
      } else {
        console.error('Failed to duplicate table:', response.errors);
        toast({
          title: 'Error duplicating table',
          description: response.errors?.join(', ') || 'An unknown error occurred',
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error('Error duplicating table:', error);
      toast({
        title: 'Error duplicating table',
        description: 'Failed to duplicate table. Please try again later.',
        variant: 'destructive',
      });
    }
  };

  // Delete a table
  const deleteTable = async (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (!confirm('Are you sure you want to delete this table? This action cannot be undone.')) {
      return;
    }
    
    try {
      const response = await TableService.delete(id.toString());
      
      if (response.isSuccessful) {
        setTables(tables.filter(table => table.id !== id));
        
        toast({
          title: 'Table deleted',
          description: 'The table has been deleted successfully.',
        });
      } else {
        console.error('Failed to delete table:', response.errors);
        toast({
          title: 'Error deleting table',
          description: response.errors?.join(', ') || 'An unknown error occurred',
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error('Error deleting table:', error);
      toast({
        title: 'Error deleting table',
        description: 'Failed to delete table. Please try again later.',
        variant: 'destructive',
      });
    }
  };

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
              <div className="text-2xl font-bold">{(totalRecords * 0.001).toFixed(1)} MB</div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Actions and Search Bar */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex gap-2">
          <Button className="bg-primary hover:bg-primary/90" size="sm" onClick={createTable}>
            <PlusCircle className="mr-2 h-4 w-4" />
            New Table
          </Button>
          <Button variant="outline" size="sm">
            <UploadCloud className="mr-2 h-4 w-4" />
            Import
          </Button>
          <Button variant="outline" size="sm" onClick={fetchTables}>
            <Database className="mr-2 h-4 w-4" />
            Refresh
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
          ) : error ? (
            <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
              <Database className="h-12 w-12 text-destructive mb-4 opacity-50" />
              <h3 className="text-lg font-medium text-destructive">Error loading tables</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-4">{error}</p>
              <Button onClick={fetchTables}>
                Try Again
              </Button>
            </div>
          ) : filteredTables.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
              <Database className="h-12 w-12 text-muted-foreground mb-4 opacity-20" />
              <h3 className="text-lg font-medium">No tables found</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-4">
                {searchQuery ? `No tables matching "${searchQuery}"` : "This database doesn't have any tables yet"}
              </p>
              <Button onClick={createTable}>
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
                      onClick={() => handleTableClick(table)}
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
                              handleTableClick(table);
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
                            <DropdownMenuItem onClick={(e) => duplicateTable(table.id, e)}>
                              <Copy className="mr-2 h-4 w-4" />
                              <span>Duplicate</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={(e) => deleteTable(table.id, e)} className="text-destructive focus:text-destructive">
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