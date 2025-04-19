'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RedirectToTenantsApp() {
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to the tenants micro-app
    router.push('/dashboard/apps/tenants?view=tenants');
  }, [router]);

  // Display a simple loading message while redirecting
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
        <p>Redirecting to Tenants App...</p>
      </div>
    </div>
  );
} 