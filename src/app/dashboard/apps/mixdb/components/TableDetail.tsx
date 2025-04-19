'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useDatabase } from '../contexts/DatabaseContext';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  ArrowLeft, ArrowRight, Database, Filter, Search,
  MoreHorizontal, DownloadCloud, Trash2, Edit, RefreshCw,
  BookOpen, Key, Calendar, Clock, AlignLeft, Hash 
} from 'lucide-react';

interface TableColumn {
  systemName: string;
  displayName: string;
  dataType: string;
  defaultValue?: string;
  id: number;
  priority: number;
  status: string;
  columnConfigurations: {
    editor: string;
    isUnique: boolean;
    isRequire: boolean;
    isEncrypt: boolean;
    upload: {
      arrayAccepts: string[];
      accepts: string;
    }
  };
}

interface TableRelationship {
  parentId: number;
  childId: number;
  displayName: string;
  sourceDatabaseName: string;
  destinateDatabaseName: string;
  type: string;
  id: number;
}

interface DatabaseContext {
  databaseProvider: string;
  connectionString: string;
  schema: string;
  systemName: string;
  displayName: string;
  id: number;
}

interface TableData {
  id: number;
  mixDatabaseContextId: number;
  systemName: string;
  displayName: string;
  type: string;
  tenantId: number;
  columns: TableColumn[];
  relationships: TableRelationship[];
  mixDatabaseContext: DatabaseContext;
  createdDateTime: string;
  lastModified: string;
  createdBy: string;
  modifiedBy: string;
  priority: number;
  status: string;
}

interface TableRecord {
  [key: string]: any;
}

interface TableDetailProps {
  tableName: string;
  tableId: number;
  onBackClick: () => void;
}

export function TableDetail({ tableName, tableId, onBackClick }: TableDetailProps) {
  const { activeDbContext } = useDatabase();
  const [table, setTable] = useState<TableData | null>(null);
  
  const [records, setRecords] = useState<TableRecord[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingRecords, setIsLoadingRecords] = useState(true);
  const recordsPerPage = 10;

  useEffect(() => {
    // Reset state when table or database context changes
    setIsLoading(true);
    setIsLoadingRecords(true);
    setCurrentPage(1);
    setSearchQuery('');
    
    const fetchTableDetails = async () => {
      try {
        setIsLoading(true);
        
        // Fetch from the API
        const response = await fetch(`https://mixcore.net/api/v2/rest/mix-portal/mix-database/${tableId}`, {
          headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${localStorage.getItem('authToken') || ''}`,
          },
        });
        
        if (!response.ok) {
          throw new Error(`Failed to fetch table details: ${response.status}`);
        }
        
        const data = await response.json();
        setTable(data);
      } catch (error) {
        console.error('Error fetching table details:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTableDetails();
  }, [tableId, activeDbContext.id]);

  useEffect(() => {
    // In a real app, this would fetch data from an API endpoint with pagination
    const fetchRecords = async () => {
      try {
        setIsLoadingRecords(true);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 600));
        
        let mockRecords: TableRecord[] = [];
        
        // Generate different mock records based on table name only
        if (tableName === 'analytics_events') {
          mockRecords = [
            { event_id: 'evt123', user_id: 'user456', event_type: 'page_view', timestamp: '2023-10-15T12:34:56Z', data: '{"page":"/home"}' },
            { event_id: 'evt124', user_id: 'user789', event_type: 'click', timestamp: '2023-10-15T12:35:22Z', data: '{"element":"button-signup"}' },
            { event_id: 'evt125', user_id: 'user456', event_type: 'form_submit', timestamp: '2023-10-15T12:36:10Z', data: '{"form":"contact"}' },
            { event_id: 'evt126', user_id: 'user123', event_type: 'page_view', timestamp: '2023-10-15T12:38:42Z', data: '{"page":"/pricing"}' },
            { event_id: 'evt127', user_id: 'user456', event_type: 'click', timestamp: '2023-10-15T12:39:15Z', data: '{"element":"pricing-basic"}' },
          ];
        } else if (tableName === 'legacy_customers') {
          mockRecords = [
            { customer_id: 'CUST001', name: 'Old Corp Inc.', email: 'contact@oldcorp.com', region: 'West', signup_date: '2020-03-15' },
            { customer_id: 'CUST002', name: 'Legacy Systems LLC', email: 'info@legacysystems.com', region: 'East', signup_date: '2020-04-22' },
            { customer_id: 'CUST003', name: 'Vintage Tech', email: 'support@vintagetech.com', region: 'North', signup_date: '2020-05-10' },
            { customer_id: 'CUST004', name: 'Retro Solutions', email: 'hello@retrosolutions.com', region: 'South', signup_date: '2020-06-18' },
            { customer_id: 'CUST005', name: 'Classic Data Inc.', email: 'info@classicdata.com', region: 'West', signup_date: '2020-07-05' },
          ];
        } else if (tableName === 'demo_customers') {
          mockRecords = [
            { id: 'uuid-1', name: 'John Doe', email: 'john@example.com', status: 'active', created_at: '2023-10-01T08:30:00Z' },
            { id: 'uuid-2', name: 'Jane Smith', email: 'jane@example.com', status: 'active', created_at: '2023-10-02T09:15:00Z' },
            { id: 'uuid-3', name: 'Bob Johnson', email: 'bob@example.com', status: 'inactive', created_at: '2023-10-03T10:45:00Z' },
            { id: 'uuid-4', name: 'Alice Williams', email: 'alice@example.com', status: 'active', created_at: '2023-10-04T11:20:00Z' },
            { id: 'uuid-5', name: 'Chris Miller', email: 'chris@example.com', status: 'pending', created_at: '2023-10-05T12:10:00Z' },
          ];
        } else {
          // Default records
          mockRecords = Array(5).fill(0).map((_, i) => ({
            id: `id-${i + 1}`,
            name: `Item ${i + 1}`,
            created_at: new Date(Date.now() - i * 86400000).toISOString()
          }));
        }

        setRecords(mockRecords);
      } catch (error) {
        console.error('Error fetching records:', error);
      } finally {
        setIsLoadingRecords(false);
      }
    };

    if (!isLoading && table) {
      fetchRecords();
    }
  }, [tableName, currentPage, isLoading, table]);

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

  const getTypeIcon = (type: string) => {
    if (type.includes('Int') || type === 'Integer') {
      return <Hash className="h-4 w-4" />;
    } else if (type === 'String' || type === 'Json') {
      return <AlignLeft className="h-4 w-4" />;
    } else if (type === 'DateTime') {
      return <Calendar className="h-4 w-4" />;
    } else if (type.includes('Time')) {
      return <Clock className="h-4 w-4" />;
    } else {
      return <BookOpen className="h-4 w-4" />;
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-2 text-muted-foreground">Loading table details...</p>
        </div>
      </div>
    );
  }

  if (!table) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <p className="text-lg">Table not found</p>
        <Button onClick={onBackClick} variant="secondary" size="sm" className="mt-4 gap-2">
          <ArrowLeft className="h-4 w-4" /> Back to tables
        </Button>
      </div>
    );
  }

  return (
    <div className="table-detail-container space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Button onClick={onBackClick} variant="ghost" size="sm" className="gap-1">
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Button>
          <div className="text-lg font-semibold">{table.displayName}</div>
          <Badge variant="outline" className="ml-2 text-xs">
            {table.mixDatabaseContext?.schema || 'N/A'}
          </Badge>
          <div className="ml-4 text-sm text-muted-foreground flex items-center gap-2">
            <Database className="h-4 w-4 text-muted-foreground" />
            <span>{activeDbContext.name} ({getDbTypeLabel(activeDbContext.type)})</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <Edit className="h-4 w-4" />
            <span>Edit</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-1">
            <DownloadCloud className="h-4 w-4" />
            <span>Export</span>
          </Button>
          <Button variant="destructive" size="sm" className="gap-1">
            <Trash2 className="h-4 w-4" />
            <span>Delete</span>
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>{table.displayName}</CardTitle>
              <CardDescription>{table.systemName}</CardDescription>
            </div>
            <div className="text-sm">
              <div className="text-muted-foreground">Total columns: {table.columns.length}</div>
              <div className="text-muted-foreground">Created: {new Date(table.createdDateTime).toLocaleDateString()}</div>
            </div>
          </div>
        </CardHeader>
      </Card>

      <Tabs defaultValue="records">
        <TabsList>
          <TabsTrigger value="records">Records</TabsTrigger>
          <TabsTrigger value="structure">Structure</TabsTrigger>
          <TabsTrigger value="sql">SQL Definition</TabsTrigger>
        </TabsList>

        <TabsContent value="records">
          <Card>
            <CardHeader className="py-3 border-b">
              <div className="flex justify-between items-center">
                <CardTitle className="text-base">Table Records</CardTitle>
                
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search records..."
                      className="pl-8 h-9 w-[200px]"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  
                  <Button variant="outline" size="sm" className="gap-1">
                    <Filter className="h-4 w-4" />
                    <span>Filter</span>
                  </Button>
                  
                  <Button variant="outline" size="sm" className="gap-1">
                    <RefreshCw className="h-4 w-4" />
                    <span>Refresh</span>
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-0">
              {isLoadingRecords ? (
                <div className="flex items-center justify-center py-10">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900"></div>
                </div>
              ) : records.length > 0 ? (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        {Object.keys(records[0]).map((key) => (
                          <TableHead key={key}>{key}</TableHead>
                        ))}
                        <TableHead className="w-[80px]">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {records.map((record, i) => (
                        <TableRow key={i}>
                          {Object.values(record).map((value, j) => (
                            <TableCell key={j}>
                              {typeof value === 'string' && value.startsWith('{') 
                                ? <Badge variant="outline">JSON</Badge>
                                : String(value)
                              }
                            </TableCell>
                          ))}
                          <TableCell>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              ) : (
                <div className="text-center py-10 text-muted-foreground">
                  No records found
                </div>
              )}
            </CardContent>
            
            <div className="p-4 border-t flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                Showing {records.length} records
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                
                <div className="text-sm">
                  Page {currentPage}
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => prev + 1)}
                  disabled={records.length < recordsPerPage}
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="structure">
          <Card>
            <CardHeader className="py-3 border-b">
              <CardTitle className="text-base">Table Structure</CardTitle>
            </CardHeader>
            
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[30px]">#</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Display Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Required</TableHead>
                    <TableHead>Default</TableHead>
                    <TableHead className="w-[80px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {table.columns.sort((a, b) => a.priority - b.priority).map((column, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        {column.systemName === 'id' && <Key className="h-4 w-4 text-amber-500" aria-label="Primary Key" />}
                      </TableCell>
                      <TableCell className="font-medium">{column.systemName}</TableCell>
                      <TableCell>{column.displayName}</TableCell>
                      <TableCell className="flex items-center gap-1">
                        {getTypeIcon(column.dataType)}
                        <span>{column.dataType}</span>
                      </TableCell>
                      <TableCell>
                        {column.columnConfigurations?.isRequire ? 'Yes' : 'No'}
                      </TableCell>
                      <TableCell>
                        {column.defaultValue || '-'}
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sql">
          <Card>
            <CardHeader className="py-3 border-b">
              <CardTitle className="text-base">SQL Definition</CardTitle>
            </CardHeader>
            
            <CardContent>
              <pre className="text-sm bg-muted p-4 rounded-md overflow-x-auto">
                {`-- Table: ${table.mixDatabaseContext?.schema || 'public'}.${table.systemName}\n\nCREATE TABLE ${table.mixDatabaseContext?.schema || 'public'}.${table.systemName} (\n${table.columns.map(col => `  ${col.systemName} ${col.dataType.toLowerCase()}${col.columnConfigurations?.isRequire ? ' NOT NULL' : ''}${col.defaultValue ? ` DEFAULT ${col.defaultValue}` : ''}`).join(',\n')}\n);`}
              </pre>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}