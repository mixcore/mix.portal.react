'use client';

import React, { useState } from 'react';
import { ItemList } from '../../components/ItemList';
import { ItemDetail } from '../../components/ItemDetail';
import { Separator } from '@/components/ui/separator';
import { PageHeader } from '@/components/PageHeader';

export default function ItemsPage() {
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  const handleViewItem = (itemId: string) => {
    setSelectedItemId(itemId);
  };

  const handleBackToList = () => {
    setSelectedItemId(null);
  };

  return (
    <div className="flex flex-col w-full">
      <PageHeader title="Items" description="Manage your items with this simple CRUD interface." />
      <Separator className="mb-4" />
      
      {selectedItemId ? (
        <ItemDetail
          itemId={selectedItemId}
          onBack={handleBackToList}
        />
      ) : (
        <ItemList onItemClick={handleViewItem} />
      )}
    </div>
  );
} 