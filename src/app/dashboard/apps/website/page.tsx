'use client';

import dynamic from 'next/dynamic';
import { Loader2 } from 'lucide-react';

// Dynamically import the WebsiteApp main component
const WebsiteApp = dynamic(() => import('./components/index.js'), {
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin" />
      <span className="ml-2 text-muted-foreground">Loading Website App...</span>
    </div>
  ),
  ssr: false
});

export default function WebsitePage() {
  return <WebsiteApp />;
} 