/**
 * Sample Usage of MixDB API Client
 * 
 * This file contains examples of how to use the MixDB API client
 * with the types defined in the mini-app template.
 */

import { MixDbApi, MixDbHelpers } from './mixdb-api';
import { 
  MixDbEntity, 
  PaginatedResponse, 
  Request, 
  User, 
  AuthToken, 
  Culture, 
  Role, 
  Permission, 
  AppContext 
} from './types';
import { AuthService, createPermissionGuard, createRoleGuard } from './auth';
import { CultureService, createTranslator } from './culture';

/**
 * Example 1: Basic usage with direct QueryOptions
 */
async function basicUsageExample() {
  // Initialize the API client
  const api = new MixDbApi({
    basePath: '/api/v2/mixdb',
    defaultHeaders: {
      // Add your authentication headers if needed
      // 'Authorization': `Bearer ${token}`
    }
  });
  
  // Get paginated data
  const products = await api.getItems('product', {
    page: 1,
    pageSize: 10,
    filter: { status: 'Published' },
    sort: 'name',
    order: 'asc'
  });
  
  console.log(`Found ${products.items.length} products`);
  console.log(`Total products: ${products.pagingData.totalItems}`);
  
  // Get a single item by ID
  const product = await api.getItemById('product', '123');
  console.log(`Product name: ${product.name}`);
  
  // Create a new item
  const newProduct = await api.createItem<MixDbEntity>('product', {
    name: 'New Product',
    price: 99.99,
    status: 'Published'
  });
  console.log(`Created product with ID: ${newProduct.id}`);
  
  // Update an item
  const updatedProduct = await api.updateItem('product', newProduct.id!, {
    price: 129.99
  });
  console.log(`Updated product price: ${updatedProduct.price}`);
  
  // Delete an item
  const deleteResult = await api.deleteItem('product', newProduct.id!);
  console.log(`Deletion successful: ${deleteResult}`);
}

/**
 * Example 2: Using the standard Request type
 */
async function requestTypeExample() {
  const api = new MixDbApi();
  
  // Define a standard request
  const request: Request = {
    pageIndex: 0, // 0-based index
    pageSize: 10,
    searchText: 'chair',
    searchColumns: ['name', 'description'],
    orderBy: 'price',
    direction: 'asc',
    status: 'Published'
  };
  
  // Method 1: Convert the request to QueryOptions manually
  const options = MixDbHelpers.requestToQueryOptions(request);
  const products1 = await api.getItems('product', options);
  
  // Method 2: Use the convenience method
  const products2 = await api.getItemsWithRequest('product', request);
  
  // Results are the same
  console.log(`Products count (method 1): ${products1.items.length}`);
  console.log(`Products count (method 2): ${products2.items.length}`);
}

/**
 * Example 3: Extending the MixDbEntity for typed data
 */
interface Product extends MixDbEntity {
  name: string;
  description?: string;
  price: number;
  sku: string;
  categoryId?: number;
  tags?: string[];
  inStock: boolean;
}

async function typedDataExample() {
  const api = new MixDbApi();
  
  // Get products with type safety
  const response = await api.getItems<Product>('product', {
    page: 1,
    pageSize: 10
  });
  
  // Type-safe access to product properties
  response.items.forEach(product => {
    console.log(`${product.name} - $${product.price}`);
    
    // TypeScript knows about these properties
    if (product.inStock) {
      console.log(`  SKU: ${product.sku}`);
    }
    
    if (product.tags && product.tags.length > 0) {
      console.log(`  Tags: ${product.tags.join(', ')}`);
    }
  });
  
  // Create with type checking
  const newProduct: Partial<Product> = {
    name: 'Ergonomic Chair',
    price: 199.99,
    sku: 'CHAIR-001',
    inStock: true,
    tags: ['furniture', 'office']
  };
  
  await api.createItem<Product>('product', newProduct);
}

/**
 * Example 4: Working with files
 */
async function fileUploadExample() {
  const api = new MixDbApi();
  
  // Assuming you have a file input in your HTML
  const fileInput = document.getElementById('fileInput') as HTMLInputElement;
  const file = fileInput.files?.[0];
  
  if (file) {
    const result = await api.uploadFile('product', '123', 'image', file, {
      alt: 'Product Image',
      isPrimary: true
    });
    
    console.log(`File uploaded successfully: ${result.fileUrl}`);
  }
}

/**
 * Example 5: Authentication and authorization integration
 */
async function authenticationExample() {
  // Initialize the auth service
  const authService = new AuthService({
    authEndpoint: '/api/auth',
    persistToken: true,
    onAuthError: (error) => {
      console.error('Authentication error:', error);
    }
  });
  
  // Initialize the API client with auth service integration
  const api = new MixDbApi({
    basePath: '/api/v2/mixdb',
    authService
  });
  
  // Login the user
  try {
    const user = await authService.login('admin', 'password123', true);
    console.log(`Logged in as: ${user.displayName}`);
    
    // Check if user has specific role
    if (authService.hasRole('Admin')) {
      console.log('User has Admin role');
    }
    
    // Check if user has specific permission
    if (authService.hasPermission('products.edit')) {
      console.log('User can edit products');
    }
    
    // Create permission guards for UI rendering
    const canManageUsers = createPermissionGuard(authService, ['users.manage']);
    const isAdminOrEditor = createRoleGuard(authService, ['Admin', 'Editor']);
    
    // Use guards to conditionally show UI elements
    if (canManageUsers()) {
      console.log('Show user management UI');
    }
    
    if (isAdminOrEditor()) {
      console.log('Show admin/editor controls');
    }
    
    // API calls now automatically include auth headers
    const products = await api.getItems('product', {
      page: 1,
      pageSize: 10
    });
    console.log(`Found ${products.items.length} products`);
    
    // Logout user
    await authService.logout();
    console.log('User logged out');
  } catch (error) {
    console.error('Login failed:', error);
  }
}

/**
 * Example 6: Culture and localization integration
 */
async function cultureExample() {
  // Initialize the culture service
  const cultureService = new CultureService({
    defaultCulture: 'en-US',
    persistPreference: true,
    onCultureChange: (culture) => {
      console.log(`Culture changed to: ${culture.displayName}`);
      // Update app UI language
    }
  });
  
  // Initialize the API client with culture service integration
  const api = new MixDbApi({
    basePath: '/api/v2/mixdb',
    cultureService,
    includeCulture: true
  });
  
  // Get available cultures
  const cultures = cultureService.getAvailableCultures();
  console.log(`Available cultures: ${cultures.map(c => c.code).join(', ')}`);
  
  // Change the current culture
  const newCulture = cultureService.setCulture('fr-FR');
  if (newCulture) {
    console.log(`Active culture: ${newCulture.displayName}`);
  }
  
  // Create a translator function
  const t = createTranslator(cultureService);
  
  // Translate UI strings
  console.log(t('welcome', 'Welcome to Mixcore'));
  console.log(t('hello_user', 'Hello, {name}!', { name: 'John' }));
  
  // Format dates and numbers according to the culture
  const today = new Date();
  console.log('Date:', cultureService.formatDate(today, { dateStyle: 'full' }));
  console.log('Number:', cultureService.formatNumber(1234567.89));
  console.log('Currency:', cultureService.formatCurrency(1234.56, 'EUR'));
  
  // API calls now automatically include culture headers
  // This ensures data is returned in the correct language
  const products = await api.getItems('product', {
    page: 1,
    pageSize: 10
  });
  console.log(`Found ${products.items.length} products in ${cultureService.getCurrentCultureCode()}`);
}

/**
 * Example 7: Complete integration with auth, culture, and typed entities
 */
async function completeIntegrationExample() {
  // Initialize services
  const authService = new AuthService();
  const cultureService = new CultureService();
  
  // Initialize the API client with both services
  const api = new MixDbApi({
    basePath: '/api/v2/mixdb',
    authService,
    cultureService,
    includeCulture: true
  });
  
  // Login and set culture
  try {
    await authService.login('admin', 'password123');
    cultureService.setCulture('en-US');
    
    // Define a typed product entity with multilingual properties
    interface MultilingualProduct extends MixDbEntity {
      name: string;              // Current culture name
      nameTranslations?: Record<string, string>; // All translations
      description?: string;      // Current culture description
      descriptionTranslations?: Record<string, string>; // All translations
      price: number;
      sku: string;
      categoryId?: number;
      inStock: boolean;
    }
    
    // Get products with the current culture
    const products = await api.getItems<MultilingualProduct>('product', {
      page: 1,
      pageSize: 10
    });
    
    // Display products in the current culture
    for (const product of products.items) {
      console.log(`${product.name} - ${cultureService.formatCurrency(product.price)}`);
      
      // Check user permissions for each item
      if (authService.hasPermission('product.edit')) {
        console.log('  [Edit]');
      }
    }
    
    // Create a new product with translations
    if (authService.hasPermission('product.create')) {
      const newProduct: Partial<MultilingualProduct> = {
        name: 'Ergonomic Chair',
        nameTranslations: {
          'en-US': 'Ergonomic Chair',
          'fr-FR': 'Chaise Ergonomique',
          'es-ES': 'Silla Ergonómica',
          'ar-SA': 'كرسي مريح'
        },
        description: 'A comfortable office chair',
        descriptionTranslations: {
          'en-US': 'A comfortable office chair',
          'fr-FR': 'Une chaise de bureau confortable',
          'es-ES': 'Una cómoda silla de oficina',
          'ar-SA': 'كرسي مكتب مريح'
        },
        price: 199.99,
        sku: 'CHAIR-001',
        inStock: true,
        status: 'Published'
      };
      
      await api.createItem<MultilingualProduct>('product', newProduct);
      console.log('Product created with translations');
    }
    
    // Switch culture and get products again
    cultureService.setCulture('fr-FR');
    const frenchProducts = await api.getItems<MultilingualProduct>('product', {
      page: 1,
      pageSize: 10
    });
    
    // Product names should now be in French
    for (const product of frenchProducts.items) {
      console.log(`${product.name} - ${cultureService.formatCurrency(product.price, 'EUR')}`);
    }
  } catch (error) {
    console.error('Error:', error);
  }
} 