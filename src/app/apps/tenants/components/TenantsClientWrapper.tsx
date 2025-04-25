'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import the TenantsApp component
const TenantsApp = dynamic(() => import('../index'), { ssr: false });

export function TenantsClientWrapper() {
  return (
    <Suspense fallback={<TenantsLoadingState />}>
      <TenantsApp />
    </Suspense>
  );
}

function TenantsLoadingState() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
        <p>Loading Tenants App...</p>
      </div>
    </div>
  );
} 