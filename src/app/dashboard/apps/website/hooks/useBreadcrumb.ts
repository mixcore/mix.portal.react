'use client';

import { useState, useEffect } from 'react';

// Breadcrumb item interface
export interface BreadcrumbItem {
  label: string;
  href: string;
}

/**
 * Hook for managing breadcrumb navigation
 * 
 * @returns {Object} Functions to set and get breadcrumbs
 */
export function useBreadcrumb() {
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([]);
  
  useEffect(() => {
    // Dispatch event to update breadcrumbs in parent container
    const event = new CustomEvent('mixcore:breadcrumbs:update', { 
      detail: { breadcrumbs } 
    });
    window.dispatchEvent(event);
  }, [breadcrumbs]);
  
  return {
    breadcrumbs,
    setBreadcrumbs
  };
}

export default useBreadcrumb; 