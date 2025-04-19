'use client';

/**
 * Tenant route mapping and slug handling
 */

// Convert tenant ID to URL-friendly slug
export function getTenantSlug(tenantId: string | number): string {
  return `${tenantId}`;
}

// Extract tenant ID from slug
export function getTenantIdFromSlug(slug: string): string {
  return slug;
}

// Get tenant name from ID for display purposes
export function getTenantNameFromId(id: string): string {
  // In a real implementation, this would look up the name from a store or context
  return `Tenant ${id}`;
}

// Convert view name to URL-friendly format
export function getViewSlug(viewName: string): string {
  return viewName.toLowerCase();
}

// Extract view name from slug
export function getViewNameFromSlug(slug: string): string {
  return slug;
} 