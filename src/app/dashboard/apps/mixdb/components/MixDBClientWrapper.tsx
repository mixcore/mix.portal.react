'use client';

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamic import the MixDBApp component in a client component
const MixDBApp = dynamic(() => import('../index'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
        <p>Loading MixDB...</p>
      </div>
    </div>
  ),
});

export function MixDBClientWrapper() {
  return <MixDBApp />;
} 