/**
 * Route Mapping Configuration for MixDB
 * 
 * This file manages the mapping between URL-friendly slugs and actual database table names.
 * It helps maintain clean URLs while preserving the actual database table identifiers.
 */

/**
 * Table Mapping Interface
 * Maps URL slugs to actual table names and IDs
 */
export interface TableMapping {
  slug: string;   // URL-friendly slug (e.g., 'customer-orders')
  name: string;   // Actual table name in the database (e.g., 'customer_orders')
  id: string;     // Actual table ID in the database (e.g., '123')
  dbContextId?: string; // Optional database context ID
}

/**
 * Global mapping store
 * This will be populated dynamically as the application is used
 */
let tableMappings: TableMapping[] = [];

/**
 * Add a table mapping
 * @param mapping Table mapping object
 */
export function addTableMapping(mapping: TableMapping): void {
  // Check if mapping already exists
  const existingIndex = tableMappings.findIndex(m => m.slug === mapping.slug);
  
  if (existingIndex >= 0) {
    // Update existing mapping
    tableMappings[existingIndex] = mapping;
  } else {
    // Add new mapping
    tableMappings.push(mapping);
  }
}

/**
 * Get table mapping by slug
 * @param slug URL-friendly slug
 * @returns Table mapping object or undefined if not found
 */
export function getTableMappingBySlug(slug: string): TableMapping | undefined {
  return tableMappings.find(m => m.slug === slug);
}

/**
 * Get table mapping by name
 * @param name Actual table name
 * @returns Table mapping object or undefined if not found
 */
export function getTableMappingByName(name: string): TableMapping | undefined {
  return tableMappings.find(m => m.name === name);
}

/**
 * Get table mapping by ID
 * @param id Actual table ID
 * @returns Table mapping object or undefined if not found
 */
export function getTableMappingById(id: string): TableMapping | undefined {
  return tableMappings.find(m => m.id === id);
}

/**
 * Get all table mappings
 * @returns Array of all table mappings
 */
export function getAllTableMappings(): TableMapping[] {
  return [...tableMappings];
}

/**
 * Clear all table mappings
 * Useful when switching database contexts
 */
export function clearTableMappings(): void {
  tableMappings = [];
}

/**
 * Get table ID from slug
 * @param slug URL-friendly slug
 * @returns Table ID or undefined if not found
 */
export function getTableIdFromSlug(slug: string): string | undefined {
  const mapping = getTableMappingBySlug(slug);
  return mapping?.id;
}

/**
 * Get table name from slug
 * @param slug URL-friendly slug
 * @returns Table name or the slug itself if not found
 */
export function getTableNameFromSlug(slug: string): string {
  const mapping = getTableMappingBySlug(slug);
  return mapping?.name || slug;
}

/**
 * Get slug from table ID or name
 * @param idOrName Table ID or name
 * @returns URL-friendly slug or undefined if not found
 */
export function getSlugFromTable(idOrName: string): string | undefined {
  const mappingById = getTableMappingById(idOrName);
  if (mappingById) return mappingById.slug;
  
  const mappingByName = getTableMappingByName(idOrName);
  return mappingByName?.slug;
} 