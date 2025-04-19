'use client';

import { getTenantSlug, getViewSlug, getTenantNameFromId } from '../config/route-mapping';

/**
 * URL generation helpers for tenant app navigation
 */

// Base URL for the application
const BASE_URL = '/dashboard/apps/tenants';

/**
 * Generate a URL for a specific view, optionally with a tenant ID
 */
export function getViewUrl(view: string, tenantId?: string): string {
  let url = `${BASE_URL}?view=${getViewSlug(view)}`;
  
  if (tenantId) {
    url += `&tenantId=${getTenantSlug(tenantId)}`;
  }
  
  return url;
}

/**
 * Get a display name from a tenant slug
 */
export function getDisplayNameFromSlug(slug: string): string {
  return getTenantNameFromId(slug);
}

/**
 * Parse query parameters from URL
 */
export function parseQueryParams(url: string): Record<string, string> {
  const params: Record<string, string> = {};
  const queryString = url.split('?')[1];
  
  if (!queryString) return params;
  
  const pairs = queryString.split('&');
  for (const pair of pairs) {
    const [key, value] = pair.split('=');
    params[decodeURIComponent(key)] = decodeURIComponent(value || '');
  }
  
  return params;
}

/**
 * Build a query string from parameters
 * Special handling for 'columns' to avoid encoding commas
 */
export function buildQueryString(params: Record<string, string | number | boolean>): string {
  return Object.entries(params)
    .map(([key, value]) => {
      // Special handling for columns parameter - don't encode commas
      if (key === 'columns' && typeof value === 'string') {
        // Replace encoded commas with regular commas
        const processedValue = encodeURIComponent(String(value)).replace(/%2C/g, ',');
        return `${encodeURIComponent(key)}=${processedValue}`;
      }
      
      // Normal handling for other parameters
      return `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`;
    })
    .join('&');
} 