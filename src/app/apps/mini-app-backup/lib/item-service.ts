import { Item } from './types';
import { sampleItems } from './sample-data';

// Simulate a backend service with some delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

class ItemService {
  private items: Item[] = [...sampleItems];

  // Get all items with optional filtering
  async getItems(filter?: { status?: string; search?: string }): Promise<Item[]> {
    await delay(300); // Simulate network delay
    
    let filteredItems = [...this.items];
    
    if (filter) {
      if (filter.status) {
        filteredItems = filteredItems.filter(item => item.status === filter.status);
      }
      
      if (filter.search) {
        const searchTerm = filter.search.toLowerCase();
        filteredItems = filteredItems.filter(item => 
          item.title.toLowerCase().includes(searchTerm) || 
          item.description.toLowerCase().includes(searchTerm) ||
          item.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
      }
    }
    
    return filteredItems;
  }

  // Get a single item by ID
  async getItem(id: string): Promise<Item | null> {
    await delay(200);
    const item = this.items.find(item => item.id === id);
    return item || null;
  }

  // Create a new item
  async createItem(itemData: Omit<Item, 'id' | 'createdAt' | 'updatedAt'>): Promise<Item> {
    await delay(400);
    
    const newItem: Item = {
      id: `${Date.now()}`, // Generate a unique ID
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      ...itemData
    };
    
    this.items.unshift(newItem);
    return newItem;
  }

  // Update an existing item
  async updateItem(id: string, itemData: Partial<Omit<Item, 'id' | 'createdAt' | 'updatedAt'>>): Promise<Item | null> {
    await delay(300);
    
    const index = this.items.findIndex(item => item.id === id);
    if (index === -1) return null;
    
    const updatedItem: Item = {
      ...this.items[index],
      ...itemData,
      updatedAt: new Date().toISOString()
    };
    
    this.items[index] = updatedItem;
    return updatedItem;
  }

  // Delete an item
  async deleteItem(id: string): Promise<boolean> {
    await delay(300);
    
    const index = this.items.findIndex(item => item.id === id);
    if (index === -1) return false;
    
    this.items.splice(index, 1);
    return true;
  }
}

// Create a singleton instance
export const itemService = new ItemService(); 