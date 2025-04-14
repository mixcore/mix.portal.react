'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  Package, 
  Search, 
  Filter, 
  Plus, 
  BarChart3, 
  TrendingDown, 
  TrendingUp, 
  AlertCircle, 
  Warehouse, 
  Truck, 
  ArchiveRestore,
  ArrowUpDown,
  Download,
  Menu
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Sample inventory data
const inventoryItems = [
  { id: '1', name: 'Classic T-Shirt', sku: 'TS-1001', category: 'Apparel', inStock: 342, reserved: 50, available: 292, reorderPoint: 100, status: 'In Stock', location: 'Warehouse A' },
  { id: '2', name: 'Leather Wallet', sku: 'AC-3452', category: 'Accessories', inStock: 156, reserved: 20, available: 136, reorderPoint: 50, status: 'In Stock', location: 'Warehouse B' },
  { id: '3', name: 'Wireless Headphones', sku: 'EL-9834', category: 'Electronics', inStock: 78, reserved: 15, available: 63, reorderPoint: 30, status: 'In Stock', location: 'Warehouse A' },
  { id: '4', name: 'Canvas Backpack', sku: 'BG-4567', category: 'Bags', inStock: 23, reserved: 10, available: 13, reorderPoint: 25, status: 'Low Stock', location: 'Warehouse C' },
  { id: '5', name: 'Stainless Water Bottle', sku: 'HG-7823', category: 'Home Goods', inStock: 5, reserved: 2, available: 3, reorderPoint: 20, status: 'Low Stock', location: 'Warehouse B' },
  { id: '6', name: 'Desk Lamp', sku: 'HG-1934', category: 'Home Goods', inStock: 0, reserved: 0, available: 0, reorderPoint: 15, status: 'Out of Stock', location: 'Warehouse A' },
  { id: '7', name: 'Running Shoes', sku: 'FW-2845', category: 'Footwear', inStock: 89, reserved: 12, available: 77, reorderPoint: 30, status: 'In Stock', location: 'Warehouse C' },
  { id: '8', name: 'Coffee Mug', sku: 'HG-3561', category: 'Home Goods', inStock: 134, reserved: 5, available: 129, reorderPoint: 40, status: 'In Stock', location: 'Warehouse B' },
];

export default function InventoryApp() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [filterStatus, setFilterStatus] = useState('all');
  
  // Handle sort
  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortDirection('asc');
    }
  };
  
  // Filter and sort items
  const filteredItems = inventoryItems.filter(item => {
    // Filter by search query
    if (searchQuery && !item.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !item.sku.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Filter by status
    if (filterStatus !== 'all' && item.status !== filterStatus) {
      return false;
    }
    
    return true;
  }).sort((a, b) => {
    let comparison = 0;
    
    // Sort by column
    switch (sortBy) {
      case 'name':
        comparison = a.name.localeCompare(b.name);
        break;
      case 'sku':
        comparison = a.sku.localeCompare(b.sku);
        break;
      case 'inStock':
        comparison = a.inStock - b.inStock;
        break;
      case 'available':
        comparison = a.available - b.available;
        break;
      default:
        comparison = 0;
    }
    
    return sortDirection === 'asc' ? comparison : -comparison;
  });
  
  // Get badge variant based on status
  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'In Stock':
        return 'default';
      case 'Low Stock':
        return 'secondary';
      case 'Out of Stock':
        return 'destructive';
      default:
        return 'outline';
    }
  };
  
  return (
    <div className="h-full flex flex-col">
      <div className="flex-grow p-6 space-y-6 overflow-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Inventory Management</h1>
          <div className="flex gap-2">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Product
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Total Items</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Package className="h-5 w-5 mr-3 text-primary" />
                <p className="text-2xl font-bold">827</p>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Across all warehouses</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Low Stock Items</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <TrendingDown className="h-5 w-5 mr-3 text-amber-500" />
                <p className="text-2xl font-bold">28</p>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Items below reorder point</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Out of Stock</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <AlertCircle className="h-5 w-5 mr-3 text-destructive" />
                <p className="text-2xl font-bold">12</p>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Items to reorder</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Incoming Shipments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Truck className="h-5 w-5 mr-3 text-green-500" />
                <p className="text-2xl font-bold">8</p>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Arriving this week</p>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="products" className="w-full">
          <TabsList>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="warehouses">Warehouses</TabsTrigger>
            <TabsTrigger value="transfers">Transfers</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          
          <TabsContent value="products" className="mt-6">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 w-full max-w-sm">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Search products..." 
                      className="pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  
                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger className="w-36">
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Filter" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Items</SelectItem>
                      <SelectItem value="In Stock">In Stock</SelectItem>
                      <SelectItem value="Low Stock">Low Stock</SelectItem>
                      <SelectItem value="Out of Stock">Out of Stock</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                  <Button variant="outline" size="icon" className="h-9 w-9">
                    <Menu className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="cursor-pointer" onClick={() => handleSort('name')}>
                        <div className="flex items-center gap-1">
                          Product Name
                          {sortBy === 'name' && (
                            <ArrowUpDown className="h-4 w-4" />
                          )}
                        </div>
                      </TableHead>
                      <TableHead className="cursor-pointer" onClick={() => handleSort('sku')}>
                        <div className="flex items-center gap-1">
                          SKU
                          {sortBy === 'sku' && (
                            <ArrowUpDown className="h-4 w-4" />
                          )}
                        </div>
                      </TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead className="cursor-pointer" onClick={() => handleSort('inStock')}>
                        <div className="flex items-center gap-1">
                          In Stock
                          {sortBy === 'inStock' && (
                            <ArrowUpDown className="h-4 w-4" />
                          )}
                        </div>
                      </TableHead>
                      <TableHead>Reserved</TableHead>
                      <TableHead className="cursor-pointer" onClick={() => handleSort('available')}>
                        <div className="flex items-center gap-1">
                          Available
                          {sortBy === 'available' && (
                            <ArrowUpDown className="h-4 w-4" />
                          )}
                        </div>
                      </TableHead>
                      <TableHead>Reorder Point</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Location</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.name}</TableCell>
                        <TableCell>{item.sku}</TableCell>
                        <TableCell>{item.category}</TableCell>
                        <TableCell>{item.inStock}</TableCell>
                        <TableCell>{item.reserved}</TableCell>
                        <TableCell>{item.available}</TableCell>
                        <TableCell>{item.reorderPoint}</TableCell>
                        <TableCell>
                          <Badge variant={getStatusBadge(item.status)}>
                            {item.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{item.location}</TableCell>
                      </TableRow>
                    ))}
                    {filteredItems.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={9} className="text-center py-6 text-muted-foreground">
                          No products found.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="warehouses" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Warehouse Management</CardTitle>
                <CardDescription>View and manage your warehouses and storage locations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Warehouse A</CardTitle>
                      <CardDescription>Main Storage Facility</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Total Items:</span>
                          <span className="font-medium">432</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Capacity Used:</span>
                          <span className="font-medium">76%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Low Stock Items:</span>
                          <span className="font-medium">12</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">View Details</Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Warehouse B</CardTitle>
                      <CardDescription>Secondary Storage Facility</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Total Items:</span>
                          <span className="font-medium">295</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Capacity Used:</span>
                          <span className="font-medium">52%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Low Stock Items:</span>
                          <span className="font-medium">8</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">View Details</Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Warehouse C</CardTitle>
                      <CardDescription>Distribution Center</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Total Items:</span>
                          <span className="font-medium">112</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Capacity Used:</span>
                          <span className="font-medium">34%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Low Stock Items:</span>
                          <span className="font-medium">3</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">View Details</Button>
                    </CardFooter>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="transfers" className="mt-6">
            <div className="border rounded-md p-8 text-center bg-muted/50">
              <Warehouse className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
              <h3 className="text-lg font-medium">Inventory Transfers</h3>
              <p className="text-muted-foreground">Track and manage transfers between warehouses</p>
              <Button className="mt-4">Create Transfer</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="reports" className="mt-6">
            <div className="border rounded-md p-8 text-center bg-muted/50">
              <BarChart3 className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
              <h3 className="text-lg font-medium">Inventory Reports</h3>
              <p className="text-muted-foreground">Generate detailed inventory reports and analytics</p>
              <Button className="mt-4">Generate Report</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 