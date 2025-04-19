/**
 * URL Helper functions for MixDB application
 * Provides utility functions for URL-friendly paths and navigation
 */

/**
 * Generate URL-friendly slug from a string
 * @param input The string to convert to a slug
 * @returns URL-friendly slug
 */
export function slugify(input: string): string {
  return input
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')       // Replace spaces with -
    .replace(/&/g, '-and-')     // Replace & with 'and'
    .replace(/[^\w\-]+/g, '')   // Remove all non-word characters
    .replace(/\-\-+/g, '-');    // Replace multiple - with single -
}

/**
 * Generate a URL-friendly path for a specific view and optional table
 * @param view The view type (tables, detail, query, etc.)
 * @param tableName Optional table name for detail view
 * @returns URL-friendly path with query parameters
 */
export function getViewUrl(view: string, tableName?: string): string {
  // Base URL with view parameter
  let url = `?view=${view}`;
  
  // Add table parameter if provided
  if (tableName) {
    const tableSlug = slugify(tableName);
    url += `&tableId=${tableSlug}`;
  }
  
  return url;
}

/**
 * Get friendly display name from a URL slug
 * @param slug The URL slug to convert
 * @returns User-friendly display name
 */
export function getDisplayNameFromSlug(slug: string): string {
  return slug
    .replace(/-/g, ' ')     // Replace hyphens with spaces
    .replace(/\b\w/g, l => l.toUpperCase()); // Capitalize first letter of each word
}

/**
 * Get table name from URL parameter
 * This helps with maintaining both friendly URLs and actual table names
 * @param tableSlug The URL slug from the tableId parameter
 * @param tableMapping Optional mapping between slugs and actual table names
 * @returns The actual table name
 */
export function getTableNameFromSlug(
  tableSlug: string,
  tableMapping?: Record<string, string>
): string {
  // If a mapping exists, use it
  if (tableMapping && tableMapping[tableSlug]) {
    return tableMapping[tableSlug];
  }
  
  // Otherwise, assume the slug is a direct representation of the table name
  return tableSlug;
} 