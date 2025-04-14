'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const financialData = [
  { month: 'Jan', income: 12000, expenses: 10000 },
  { month: 'Feb', income: 15000, expenses: 12000 },
  { month: 'Mar', income: 18000, expenses: 14000 },
  { month: 'Apr', income: 14000, expenses: 13000 },
  { month: 'May', income: 21000, expenses: 15000 },
  { month: 'Jun', income: 19000, expenses: 16000 },
];

const recentTransactions = [
  { id: 'TRX-1234', account: 'Operating Account', amount: '$2,750.00', type: 'Debit', date: '2023-07-20' },
  { id: 'TRX-1233', account: 'Payroll Account', amount: '$8,500.00', type: 'Credit', date: '2023-07-19' },
  { id: 'TRX-1232', account: 'Tax Account', amount: '$3,200.00', type: 'Debit', date: '2023-07-18' },
  { id: 'TRX-1231', account: 'Operating Account', amount: '$1,750.00', type: 'Credit', date: '2023-07-17' },
  { id: 'TRX-1230', account: 'Marketing Account', amount: '$4,200.00', type: 'Debit', date: '2023-07-16' },
];

export default function AccountingApp() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-grow p-4 md:p-6 space-y-6 overflow-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Accounting</h1>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Settings</Button>
            <Button size="sm">New Transaction</Button>
          </div>
        </div>
        
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="general-ledger">General Ledger</TabsTrigger>
            <TabsTrigger value="accounts">Accounts</TabsTrigger>
            <TabsTrigger value="reports">Financial Reports</TabsTrigger>
            <TabsTrigger value="tax">Tax Management</TabsTrigger>
          </TabsList>
          <TabsContent value="dashboard" className="mt-4">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Revenue (YTD)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">$99,000</p>
                    <p className="text-xs text-muted-foreground">+15.3% from last year</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Expenses (YTD)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">$80,000</p>
                    <p className="text-xs text-muted-foreground">+8.7% from last year</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Profit (YTD)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">$19,000</p>
                    <p className="text-xs text-muted-foreground">+24.6% from last year</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Cash Balance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">$42,500</p>
                    <p className="text-xs text-muted-foreground">As of today</p>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Income vs Expenses</CardTitle>
                  <CardDescription>Monthly financial performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={financialData}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="income" fill="#8884d8" name="Income" />
                        <Bar dataKey="expenses" fill="#82ca9d" name="Expenses" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                  <CardDescription>Latest financial transactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Transaction ID</TableHead>
                        <TableHead>Account</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentTransactions.map((transaction) => (
                        <TableRow key={transaction.id}>
                          <TableCell className="font-medium">{transaction.id}</TableCell>
                          <TableCell>{transaction.account}</TableCell>
                          <TableCell>{transaction.amount}</TableCell>
                          <TableCell>{transaction.type}</TableCell>
                          <TableCell>{transaction.date}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="ml-auto">View All Transactions</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="general-ledger" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>General Ledger</CardTitle>
                <CardDescription>View and manage your general ledger entries</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">General ledger content will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="accounts" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Chart of Accounts</CardTitle>
                <CardDescription>Manage your accounting accounts</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Accounts management content will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reports" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Financial Reports</CardTitle>
                <CardDescription>Generate and view financial reports</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Financial reports content will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="tax" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Tax Management</CardTitle>
                <CardDescription>Manage tax settings and reports</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Tax management content will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
