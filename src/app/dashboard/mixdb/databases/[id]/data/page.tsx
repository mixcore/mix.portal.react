'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { MixDbService } from '@/lib/services/mixdb-service';
import {
  MixDatabase,
  MixDatabaseColumn,
  MixDatabaseData,
  MixDatabaseDataValue
} from '@/types/mixdb';
import { Icons } from '@/components/icons';
import { LoadingSection } from '@/components/loading-section';
import { Request } from '@/types';

const formatValue = (
  value: string | null,
  dataType: string
): React.ReactNode => {
  if (value === null || value === undefined) {
    return <span className='text-muted-foreground italic'>null</span>;
  }

  switch (dataType) {
    case 'Boolean':
      return <Checkbox checked={value === 'true'} disabled />;
    case 'Json':
      try {
        const jsonObj = JSON.parse(value);
        return (
          <Badge variant='outline' className='font-mono'>
            {`{${Object.keys(jsonObj).length} fields}`}
          </Badge>
        );
      } catch {
        return value;
      }
    case 'DateTime':
    case 'Date':
      try {
        return new Date(value).toLocaleString();
      } catch {
        return value;
      }
    case 'ImageUrl':
      return (
        <div className='flex items-center gap-2'>
          <div className='bg-muted h-6 w-6 overflow-hidden rounded-full'>
            <img
              src={value}
              alt='Thumbnail'
              className='h-full w-full object-cover'
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://via.placeholder.com/40';
              }}
            />
          </div>
          <span className='max-w-[120px] truncate text-xs'>{value}</span>
        </div>
      );
    default:
      return value;
  }
};

export default function DatabaseDataPage() {
  const params = useParams();
  const router = useRouter();
  const databaseId = Number(params.id);

  const [database, setDatabase] = useState<MixDatabase | null>(null);
  const [columns, setColumns] = useState<MixDatabaseColumn[]>([]);
  const [data, setData] = useState<MixDatabaseData[]>([]);
  const [loading, setLoading] = useState(true);
  const [paging, setPaging] = useState({
    pageIndex: 0,
    pageSize: 10,
    totalItems: 0,
    totalPage: 0
  });

  const [request, setRequest] = useState<Request>({
    pageIndex: 0,
    pageSize: 10,
    orderBy: 'createdDateTime',
    direction: 'desc'
  });

  const [viewMode, setViewMode] = useState<'table' | 'json'>('table');
  const [selectedItem, setSelectedItem] = useState<MixDatabaseData | null>(
    null
  );
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [newItem, setNewItem] = useState<Record<string, any>>({});
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    if (databaseId) {
      fetchDatabase();
    }
  }, [databaseId]);

  useEffect(() => {
    if (database?.name) {
      fetchData();
    }
  }, [database, request]);

  const fetchDatabase = async () => {
    try {
      setLoading(true);
      const data = await MixDbService.getDatabase(databaseId);
      setDatabase(data);
      setColumns(data.columns || []);
    } catch (error) {
      console.error('Error fetching database schema:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchData = async () => {
    if (!database?.name) return;

    try {
      setLoading(true);
      const response = await MixDbService.getDatabaseData(
        database.name,
        request
      );
      setData(response.items);
      setPaging(response.pagingData);
    } catch (error) {
      console.error('Error fetching database data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    setRequest((prev) => ({ ...prev, pageIndex: page }));
  };

  const handleSort = (column: string) => {
    setRequest((prev) => ({
      ...prev,
      orderBy: column,
      direction:
        prev.orderBy === column && prev.direction === 'desc' ? 'asc' : 'desc'
    }));
  };

  const handleAddItem = () => {
    // Prepare a new item with default values for each column
    const defaultValues: Record<string, any> = {};
    columns.forEach((column) => {
      switch (column.dataType) {
        case 'Boolean':
          defaultValues[column.name] = false;
          break;
        case 'Integer':
        case 'Double':
          defaultValues[column.name] = 0;
          break;
        case 'DateTime':
        case 'Date':
          defaultValues[column.name] = new Date().toISOString();
          break;
        case 'Json':
          defaultValues[column.name] = '{}';
          break;
        default:
          defaultValues[column.name] = '';
      }
    });

    setNewItem(defaultValues);
    setShowAddDialog(true);
  };

  const handleNewItemChange = (columnName: string, value: any) => {
    setNewItem((prev) => ({ ...prev, [columnName]: value }));
  };

  const saveNewItem = async () => {
    if (!database?.name) return;

    try {
      // Convert the flat object to MixDatabaseData with dataValues
      const dataValues: MixDatabaseDataValue[] = [];

      Object.entries(newItem).forEach(([key, value]) => {
        const column = columns.find((c) => c.name === key);
        if (column) {
          dataValues.push({
            id: 0, // This will be assigned by the server
            specificulture: 'en-us', // Default culture
            mixDatabaseColumnId: column.id,
            mixDatabaseColumnName: column.name,
            dataType: column.dataType,
            value: String(value),
            status: 'Published',
            priority: 0,
            createdDateTime: new Date().toISOString()
          });
        }
      });

      const newData: Partial<MixDatabaseData> = {
        mixDatabaseId: databaseId,
        mixDatabaseName: database.name,
        status: 'Published',
        priority: 0,
        data: dataValues,
        specificulture: 'en-us', // Default culture
        cultures: ['en-us'] // Default culture
      };

      // In a real implementation, we would call the API here
      // For now, we'll just close the dialog and refresh the data
      setShowAddDialog(false);
      fetchData();
    } catch (error) {
      console.error('Error saving new item:', error);
    }
  };

  const exportData = async (format: 'csv' | 'json' | 'excel') => {
    if (!database?.name) return;

    try {
      // In a real implementation, we would call the API here
      // For now, we'll just simulate a download
      alert(`Exporting data as ${format.toUpperCase()}...`);
    } catch (error) {
      console.error(`Error exporting data as ${format}:`, error);
    }
  };

  const applyFilter = () => {
    // For now, we'll just update the request to include the filter
    // In a real implementation, we would need a more sophisticated filter builder
    setRequest((prev) => ({
      ...prev,
      pageIndex: 0,
      searchText: filter
    }));
  };

  if (loading && !database) {
    return <LoadingSection />;
  }

  if (!database) {
    return (
      <div className='flex flex-col items-center justify-center py-8 text-center'>
        <Icons.database className='text-muted-foreground/50 h-12 w-12' />
        <h3 className='mt-4 text-lg font-medium'>Database Not Found</h3>
        <p className='text-muted-foreground mt-2 text-sm'>
          The database you're looking for doesn't exist or you don't have
          permission to access it.
        </p>
        <Button
          className='mt-4'
          onClick={() => router.push('/dashboard/mixdb/databases')}
        >
          <Icons.arrowLeft className='mr-2 h-4 w-4' />
          Go Back to Databases
        </Button>
      </div>
    );
  }

  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col gap-4 md:flex-row md:items-center'>
          <div className='relative'>
            <Input
              placeholder='Filter records...'
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className='h-9 w-[200px] lg:w-[300px]'
              onKeyDown={(e) => e.key === 'Enter' && applyFilter()}
            />
            <Button
              variant='ghost'
              size='sm'
              className='absolute top-0 right-0 h-full px-3'
              onClick={applyFilter}
            >
              <Icons.search className='h-4 w-4' />
            </Button>
          </div>

          <Select
            value={String(request.pageSize)}
            onValueChange={(value) =>
              setRequest((prev) => ({
                ...prev,
                pageSize: Number(value),
                pageIndex: 0
              }))
            }
          >
            <SelectTrigger className='h-9 w-[110px]'>
              <SelectValue placeholder='Rows' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='10'>10 rows</SelectItem>
              <SelectItem value='20'>20 rows</SelectItem>
              <SelectItem value='50'>50 rows</SelectItem>
              <SelectItem value='100'>100 rows</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className='flex items-center gap-2'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='outline' size='sm'>
                <Icons.download className='mr-2 h-4 w-4' />
                Export
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuItem onClick={() => exportData('csv')}>
                <Icons.fileText className='mr-2 h-4 w-4' />
                Export as CSV
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => exportData('json')}>
                <Icons.code className='mr-2 h-4 w-4' />
                Export as JSON
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => exportData('excel')}>
                <Icons.fileText className='mr-2 h-4 w-4' />
                Export as Excel
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Tabs
            value={viewMode}
            onValueChange={(v) => setViewMode(v as 'table' | 'json')}
          >
            <TabsList className='h-9'>
              <TabsTrigger value='table' className='px-3'>
                <Icons.table className='h-4 w-4' />
              </TabsTrigger>
              <TabsTrigger value='json' className='px-3'>
                <Icons.code className='h-4 w-4' />
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <Button onClick={handleAddItem}>
            <Icons.plus className='mr-2 h-4 w-4' />
            Add Record
          </Button>
        </div>
      </div>

      {loading ? (
        <LoadingSection />
      ) : data.length === 0 ? (
        <div className='flex flex-col items-center justify-center rounded-md border py-8 text-center'>
          <Icons.database className='text-muted-foreground/50 h-12 w-12' />
          <h3 className='mt-4 text-lg font-medium'>No Records Found</h3>
          <p className='text-muted-foreground mt-2 text-sm'>
            This database doesn't have any records yet.
          </p>
          <Button className='mt-4' onClick={handleAddItem}>
            <Icons.plus className='mr-2 h-4 w-4' />
            Add Record
          </Button>
        </div>
      ) : (
        <>
          <div className='overflow-hidden rounded-md border'>
            <TabsContent value='table' className='m-0'>
              <div className='overflow-x-auto'>
                <Table>
                  <TableHeader>
                    <TableRow>
                      {columns.map((column) => (
                        <TableHead
                          key={column.id}
                          className='cursor-pointer'
                          onClick={() => handleSort(column.name)}
                        >
                          <div className='flex items-center gap-1'>
                            {column.displayName || column.name}
                            {request.orderBy === column.name &&
                              (request.direction === 'asc' ? (
                                <Icons.arrowUp className='h-3 w-3' />
                              ) : (
                                <Icons.arrowDown className='h-3 w-3' />
                              ))}
                          </div>
                          <div className='text-muted-foreground text-[10px] font-normal'>
                            {column.dataType}
                          </div>
                        </TableHead>
                      ))}
                      <TableHead className='w-[80px]'>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data.map((item) => (
                      <TableRow key={item.id}>
                        {columns.map((column) => {
                          const dataValue = item.data.find(
                            (d) => d.mixDatabaseColumnName === column.name
                          );
                          return (
                            <TableCell key={`${item.id}-${column.id}`}>
                              {dataValue ? (
                                formatValue(dataValue.value, dataValue.dataType)
                              ) : (
                                <span className='text-muted-foreground italic'>
                                  null
                                </span>
                              )}
                            </TableCell>
                          );
                        })}
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant='ghost'
                                size='sm'
                                className='h-8 w-8 p-0'
                              >
                                <span className='sr-only'>Open menu</span>
                                <Icons.ellipsisVertical className='h-4 w-4' />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align='end'>
                              <DropdownMenuItem
                                onClick={() => setSelectedItem(item)}
                              >
                                <Icons.view className='mr-2 h-4 w-4' />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Icons.pencil className='mr-2 h-4 w-4' />
                                Edit Record
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className='text-red-600'>
                                <Icons.trash className='mr-2 h-4 w-4' />
                                Delete Record
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value='json' className='m-0 p-0'>
              <div className='bg-muted max-h-[500px] overflow-auto p-4 font-mono text-sm'>
                <pre>{JSON.stringify(data, null, 2)}</pre>
              </div>
            </TabsContent>
          </div>

          <div className='flex items-center justify-between'>
            <div className='text-muted-foreground text-sm'>
              Showing {data.length} of {paging.totalItems} records
            </div>

            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() =>
                      request.pageIndex !== undefined &&
                      request.pageIndex > 0 &&
                      handlePageChange(request.pageIndex - 1)
                    }
                    className={
                      request.pageIndex === 0
                        ? 'pointer-events-none opacity-50'
                        : ''
                    }
                  />
                </PaginationItem>

                {Array.from(
                  { length: Math.min(5, paging.totalPage) },
                  (_, i) => {
                    // Calculate the page numbers to show
                    let pageNumber = i;
                    if (paging.totalPage > 5) {
                      if (request.pageIndex && request.pageIndex > 2) {
                        pageNumber = request.pageIndex + i - 2;
                      }
                      if (
                        request.pageIndex &&
                        request.pageIndex > paging.totalPage - 3
                      ) {
                        pageNumber = paging.totalPage - 5 + i;
                      }
                    }

                    // Ensure page number is within valid range
                    if (pageNumber >= 0 && pageNumber < paging.totalPage) {
                      return (
                        <PaginationItem key={pageNumber}>
                          <PaginationLink
                            isActive={request.pageIndex === pageNumber}
                            onClick={() => handlePageChange(pageNumber)}
                          >
                            {pageNumber + 1}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    }
                    return null;
                  }
                )}

                <PaginationItem>
                  <PaginationNext
                    onClick={() =>
                      request.pageIndex !== undefined &&
                      request.pageIndex < paging.totalPage - 1 &&
                      handlePageChange(request.pageIndex + 1)
                    }
                    className={
                      request.pageIndex !== undefined &&
                      request.pageIndex >= paging.totalPage - 1
                        ? 'pointer-events-none opacity-50'
                        : ''
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </>
      )}

      {/* Add Record Dialog */}
      <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
        <DialogContent className='sm:max-w-[600px]'>
          <DialogHeader>
            <DialogTitle>Add New Record</DialogTitle>
            <DialogDescription>
              Create a new record for the {database.name} database.
            </DialogDescription>
          </DialogHeader>
          <div className='grid max-h-[60vh] gap-4 overflow-y-auto py-4'>
            {columns.map((column) => (
              <div
                key={column.id}
                className='grid grid-cols-4 items-center gap-4'
              >
                <Label htmlFor={column.name} className='text-right'>
                  {column.displayName || column.name}
                  {column.isRequire && (
                    <span className='ml-1 text-red-500'>*</span>
                  )}
                </Label>
                <div className='col-span-3'>
                  {column.dataType === 'Boolean' ? (
                    <Switch
                      id={column.name}
                      checked={Boolean(newItem[column.name])}
                      onCheckedChange={(checked) =>
                        handleNewItemChange(column.name, checked)
                      }
                    />
                  ) : column.dataType === 'Text' ||
                    column.dataType === 'MultilineText' ? (
                    <Input
                      id={column.name}
                      value={newItem[column.name] || ''}
                      onChange={(e) =>
                        handleNewItemChange(column.name, e.target.value)
                      }
                      placeholder={`Enter ${column.displayName || column.name}`}
                      required={column.isRequire}
                    />
                  ) : column.dataType === 'Integer' ||
                    column.dataType === 'Double' ? (
                    <Input
                      id={column.name}
                      type='number'
                      value={newItem[column.name] || 0}
                      onChange={(e) =>
                        handleNewItemChange(column.name, e.target.value)
                      }
                      required={column.isRequire}
                    />
                  ) : column.dataType === 'DateTime' ||
                    column.dataType === 'Date' ? (
                    <Input
                      id={column.name}
                      type='datetime-local'
                      value={
                        newItem[column.name]
                          ? new Date(newItem[column.name])
                              .toISOString()
                              .slice(0, 16)
                          : ''
                      }
                      onChange={(e) =>
                        handleNewItemChange(column.name, e.target.value)
                      }
                      required={column.isRequire}
                    />
                  ) : column.dataType === 'Reference' ? (
                    <Select
                      value={newItem[column.name] || ''}
                      onValueChange={(value) =>
                        handleNewItemChange(column.name, value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder='Select reference' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='placeholder'>
                          Placeholder Reference
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  ) : (
                    <Input
                      id={column.name}
                      value={newItem[column.name] || ''}
                      onChange={(e) =>
                        handleNewItemChange(column.name, e.target.value)
                      }
                      placeholder={`Enter ${column.displayName || column.name}`}
                      required={column.isRequire}
                    />
                  )}
                  {column.regexPattern && (
                    <p className='text-muted-foreground mt-1 text-xs'>
                      {column.regexErrorMessage ||
                        `Must match pattern: ${column.regexPattern}`}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <DialogFooter>
            <Button variant='outline' onClick={() => setShowAddDialog(false)}>
              Cancel
            </Button>
            <Button type='submit' onClick={saveNewItem}>
              Save Record
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* View Record Dialog */}
      {selectedItem && (
        <Dialog
          open={!!selectedItem}
          onOpenChange={() => setSelectedItem(null)}
        >
          <DialogContent className='sm:max-w-[600px]'>
            <DialogHeader>
              <DialogTitle>Record Details</DialogTitle>
              <DialogDescription>
                Viewing record #{selectedItem.id} from {database.name} database.
              </DialogDescription>
            </DialogHeader>
            <div className='grid max-h-[60vh] gap-4 overflow-y-auto py-4'>
              {columns.map((column) => {
                const dataValue = selectedItem.data.find(
                  (d) => d.mixDatabaseColumnName === column.name
                );
                return (
                  <div
                    key={column.id}
                    className='grid grid-cols-4 items-center gap-4'
                  >
                    <Label className='text-right font-medium'>
                      {column.displayName || column.name}
                    </Label>
                    <div className='col-span-3'>
                      {dataValue ? (
                        dataValue.dataType === 'Json' ? (
                          <pre className='bg-muted max-h-[120px] overflow-auto rounded-md p-2 text-xs'>
                            {JSON.stringify(
                              JSON.parse(dataValue.value || '{}'),
                              null,
                              2
                            )}
                          </pre>
                        ) : dataValue.dataType === 'Boolean' ? (
                          <Checkbox
                            checked={dataValue.value === 'true'}
                            disabled
                          />
                        ) : dataValue.dataType === 'ImageUrl' ? (
                          <div className='flex flex-col gap-2'>
                            <img
                              src={dataValue.value || ''}
                              alt='Image'
                              className='max-h-[150px] rounded-md object-contain'
                              onError={(e) => {
                                (e.target as HTMLImageElement).src =
                                  'https://via.placeholder.com/200';
                              }}
                            />
                            <Input value={dataValue.value || ''} readOnly />
                          </div>
                        ) : (
                          <Input value={dataValue.value || ''} readOnly />
                        )
                      ) : (
                        <span className='text-muted-foreground italic'>
                          null
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}

              <Alert>
                <AlertDescription>
                  <div className='flex flex-col gap-2 text-xs'>
                    <div className='flex justify-between'>
                      <span className='text-muted-foreground'>Created:</span>
                      <span>
                        {new Date(
                          selectedItem.createdDateTime
                        ).toLocaleString()}
                      </span>
                    </div>
                    {selectedItem.modifiedDateTime && (
                      <div className='flex justify-between'>
                        <span className='text-muted-foreground'>Modified:</span>
                        <span>
                          {new Date(
                            selectedItem.modifiedDateTime
                          ).toLocaleString()}
                        </span>
                      </div>
                    )}
                    <div className='flex justify-between'>
                      <span className='text-muted-foreground'>Status:</span>
                      <Badge
                        variant={
                          selectedItem.status === 'Published'
                            ? 'default'
                            : 'outline'
                        }
                      >
                        {selectedItem.status}
                      </Badge>
                    </div>
                  </div>
                </AlertDescription>
              </Alert>
            </div>
            <DialogFooter className='flex justify-between sm:justify-between'>
              <Button variant='destructive' size='sm' className='mr-auto'>
                <Icons.trash className='mr-2 h-4 w-4' />
                Delete
              </Button>
              <div className='flex gap-2'>
                <Button variant='outline' onClick={() => setSelectedItem(null)}>
                  Close
                </Button>
                <Button>
                  <Icons.pencil className='mr-2 h-4 w-4' />
                  Edit
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
