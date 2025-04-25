import { CanvasProject, CanvasElement } from './types';
import { sampleCanvasProject } from './sample-data';

// Simulate a backend service with some delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

class CanvasService {
  private projects: CanvasProject[] = [sampleCanvasProject];

  // Get all projects
  async getProjects(): Promise<CanvasProject[]> {
    await delay(300);
    return [...this.projects];
  }

  // Get a project by ID
  async getProject(id: string): Promise<CanvasProject | null> {
    await delay(200);
    const project = this.projects.find(project => project.id === id);
    return project ? { ...project } : null;
  }

  // Create a new project
  async createProject(projectData: Pick<CanvasProject, 'name' | 'description' | 'width' | 'height' | 'background'>): Promise<CanvasProject> {
    await delay(400);
    
    const newProject: CanvasProject = {
      id: `project-${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      elements: [],
      ...projectData
    };
    
    this.projects.push(newProject);
    return { ...newProject };
  }

  // Update a project
  async updateProject(id: string, projectData: Partial<Omit<CanvasProject, 'id' | 'createdAt'>>): Promise<CanvasProject | null> {
    await delay(300);
    
    const index = this.projects.findIndex(project => project.id === id);
    if (index === -1) return null;
    
    const updatedProject: CanvasProject = {
      ...this.projects[index],
      ...projectData,
      updatedAt: new Date().toISOString()
    };
    
    this.projects[index] = updatedProject;
    return { ...updatedProject };
  }

  // Delete a project
  async deleteProject(id: string): Promise<boolean> {
    await delay(300);
    
    const index = this.projects.findIndex(project => project.id === id);
    if (index === -1) return false;
    
    this.projects.splice(index, 1);
    return true;
  }
  
  // Add an element to a project
  async addElement(projectId: string, element: Omit<CanvasElement, 'id' | 'zIndex'>): Promise<CanvasElement | null> {
    await delay(200);
    
    const projectIndex = this.projects.findIndex(project => project.id === projectId);
    if (projectIndex === -1) return null;
    
    const project = this.projects[projectIndex];
    const maxZIndex = project.elements.length > 0 
      ? Math.max(...project.elements.map(el => el.zIndex)) 
      : 0;
      
    const newElement: CanvasElement = {
      id: `element-${Date.now()}`,
      zIndex: maxZIndex + 1,
      ...element
    };
    
    project.elements.push(newElement);
    project.updatedAt = new Date().toISOString();
    
    return { ...newElement };
  }
  
  // Update an element in a project
  async updateElement(projectId: string, elementId: string, elementData: Partial<Omit<CanvasElement, 'id'>>): Promise<CanvasElement | null> {
    await delay(200);
    
    const projectIndex = this.projects.findIndex(project => project.id === projectId);
    if (projectIndex === -1) return null;
    
    const project = this.projects[projectIndex];
    const elementIndex = project.elements.findIndex(element => element.id === elementId);
    if (elementIndex === -1) return null;
    
    const updatedElement: CanvasElement = {
      ...project.elements[elementIndex],
      ...elementData
    };
    
    project.elements[elementIndex] = updatedElement;
    project.updatedAt = new Date().toISOString();
    
    return { ...updatedElement };
  }
  
  // Delete an element from a project
  async deleteElement(projectId: string, elementId: string): Promise<boolean> {
    await delay(200);
    
    const projectIndex = this.projects.findIndex(project => project.id === projectId);
    if (projectIndex === -1) return false;
    
    const project = this.projects[projectIndex];
    const elementIndex = project.elements.findIndex(element => element.id === elementId);
    if (elementIndex === -1) return false;
    
    project.elements.splice(elementIndex, 1);
    project.updatedAt = new Date().toISOString();
    
    return true;
  }
}

// Create a singleton instance
export const canvasService = new CanvasService(); 