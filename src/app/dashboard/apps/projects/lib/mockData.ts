import { Project } from '../components/ProjectList';
import { GanttTask } from '../components/GanttView';
import { TaskProps } from '../components/Task';

// Sample projects data
export const mockProjects: Project[] = [
  {
    id: 'p1',
    name: 'Website Redesign',
    description: 'Redesign the company website with modern UI/UX',
    startDate: '2023-08-15',
    dueDate: '2023-10-30',
    progress: 65,
    status: 'inProgress',
    members: ['John Doe', 'Jane Smith', 'Robert Johnson', 'Lisa Wong'],
    tasksCount: {
      total: 24,
      completed: 16
    }
  },
  {
    id: 'p2',
    name: 'Mobile App Development',
    description: 'Develop a mobile app for both Android and iOS platforms',
    startDate: '2023-09-01',
    dueDate: '2023-12-15',
    progress: 32,
    status: 'inProgress',
    members: ['Mike Brown', 'Sarah Lee', 'Tom Wilson'],
    tasksCount: {
      total: 36,
      completed: 12
    }
  },
  {
    id: 'p3',
    name: 'Marketing Campaign',
    description: 'Q4 marketing campaign for new product launch',
    startDate: '2023-10-01',
    dueDate: '2023-12-31',
    progress: 15,
    status: 'inProgress',
    members: ['Emily Davis', 'Alex Johnson'],
    tasksCount: {
      total: 18,
      completed: 3
    }
  },
  {
    id: 'p4',
    name: 'Database Migration',
    description: 'Migrate from legacy database to new cloud solution',
    startDate: '2023-07-10',
    dueDate: '2023-08-30',
    progress: 100,
    status: 'completed',
    members: ['David Miller', 'Julia Chen', 'Omar Hassan'],
    tasksCount: {
      total: 12,
      completed: 12
    }
  },
  {
    id: 'p5',
    name: 'Product Training',
    description: 'Train sales team on new product features',
    startDate: '2023-11-05',
    dueDate: '2023-11-15',
    progress: 0,
    status: 'notStarted',
    members: ['Rachel Green', 'Mark Thompson'],
    tasksCount: {
      total: 8,
      completed: 0
    }
  },
  {
    id: 'p6',
    name: 'Office Relocation',
    description: 'Move to new office space downtown',
    startDate: '2023-12-01',
    dueDate: '2024-01-15',
    progress: 5,
    status: 'onHold',
    members: ['Patricia Lopez', 'Steven Taylor', 'Karen White', 'James Martin'],
    tasksCount: {
      total: 20,
      completed: 1
    }
  }
];

// Sample tasks for selected project (Website Redesign)
export const mockTasks: TaskProps[] = [
  {
    id: 't1',
    name: 'Requirements gathering',
    startDate: '2023-08-15',
    dueDate: '2023-08-25',
    assignedTo: 'John Doe',
    progress: 100,
    priority: 'high',
    status: 'completed'
  },
  {
    id: 't2',
    name: 'Wireframing',
    startDate: '2023-08-26',
    dueDate: '2023-09-05',
    assignedTo: 'Jane Smith',
    progress: 100,
    priority: 'high',
    status: 'completed'
  },
  {
    id: 't3',
    name: 'UI Design',
    startDate: '2023-09-06',
    dueDate: '2023-09-25',
    assignedTo: 'Jane Smith',
    progress: 100,
    priority: 'high',
    status: 'completed'
  },
  {
    id: 't4',
    name: 'Frontend Development',
    startDate: '2023-09-26',
    dueDate: '2023-10-15',
    assignedTo: 'Robert Johnson',
    progress: 65,
    priority: 'medium',
    status: 'inProgress'
  },
  {
    id: 't5',
    name: 'Backend Integration',
    startDate: '2023-10-10',
    dueDate: '2023-10-20',
    assignedTo: 'Lisa Wong',
    progress: 30,
    priority: 'medium',
    status: 'inProgress'
  },
  {
    id: 't6',
    name: 'Testing',
    startDate: '2023-10-21',
    dueDate: '2023-10-27',
    assignedTo: 'John Doe',
    progress: 0,
    priority: 'medium',
    status: 'notStarted'
  },
  {
    id: 't7',
    name: 'Deployment',
    startDate: '2023-10-28',
    dueDate: '2023-10-30',
    assignedTo: 'Lisa Wong',
    progress: 0,
    priority: 'high',
    status: 'notStarted'
  }
];

// Enhanced Gantt data with dependencies, critical paths, and milestones
export const mockGanttTasks: GanttTask[] = [
  {
    id: 't1',
    name: 'Project Kickoff',
    startDate: new Date('2023-08-15'),
    endDate: new Date('2023-08-15'),
    progress: 100,
    assignedTo: 'John Doe',
    isMilestone: true,
    isCritical: true
  },
  {
    id: 't2',
    name: 'Requirements Gathering',
    startDate: new Date('2023-08-16'),
    endDate: new Date('2023-08-25'),
    progress: 100,
    assignedTo: 'John Doe',
    dependencies: ['t1'],
    isCritical: true
  },
  {
    id: 't3',
    name: 'Wireframing',
    startDate: new Date('2023-08-26'),
    endDate: new Date('2023-09-05'),
    progress: 100,
    assignedTo: 'Jane Smith',
    dependencies: ['t2'],
    isCritical: true
  },
  {
    id: 't4',
    name: 'Review Wireframes',
    startDate: new Date('2023-09-06'),
    endDate: new Date('2023-09-06'),
    progress: 100,
    isMilestone: true,
    dependencies: ['t3'],
    isCritical: true
  },
  {
    id: 't5',
    name: 'UI Design',
    startDate: new Date('2023-09-07'),
    endDate: new Date('2023-09-25'),
    progress: 100,
    assignedTo: 'Jane Smith',
    dependencies: ['t4'],
    isCritical: true
  },
  {
    id: 't6',
    name: 'Design Approval',
    startDate: new Date('2023-09-26'),
    endDate: new Date('2023-09-26'),
    progress: 100,
    isMilestone: true,
    dependencies: ['t5'],
    isCritical: true
  },
  {
    id: 't7',
    name: 'Frontend Development',
    startDate: new Date('2023-09-27'),
    endDate: new Date('2023-10-15'),
    progress: 65,
    assignedTo: 'Robert Johnson',
    dependencies: ['t6'],
    isCritical: true
  },
  {
    id: 't8',
    name: 'Backend Integration',
    startDate: new Date('2023-10-10'),
    endDate: new Date('2023-10-20'),
    progress: 30,
    assignedTo: 'Lisa Wong',
    dependencies: ['t6'],
    isCritical: false
  },
  {
    id: 't9',
    name: 'Content Creation',
    startDate: new Date('2023-09-27'),
    endDate: new Date('2023-10-10'),
    progress: 100,
    assignedTo: 'Emily Davis',
    dependencies: ['t6'],
    isCritical: false
  },
  {
    id: 't10',
    name: 'Testing',
    startDate: new Date('2023-10-16'),
    endDate: new Date('2023-10-27'),
    progress: 0,
    assignedTo: 'John Doe',
    dependencies: ['t7', 't8'],
    isCritical: true
  },
  {
    id: 't11',
    name: 'Client Review',
    startDate: new Date('2023-10-20'),
    endDate: new Date('2023-10-25'),
    progress: 0,
    assignedTo: 'Jane Smith',
    dependencies: ['t9'],
    isCritical: false
  },
  {
    id: 't12',
    name: 'Final Adjustments',
    startDate: new Date('2023-10-26'),
    endDate: new Date('2023-10-28'),
    progress: 0,
    assignedTo: 'Robert Johnson',
    dependencies: ['t11'],
    isCritical: false
  },
  {
    id: 't13',
    name: 'Deployment',
    startDate: new Date('2023-10-28'),
    endDate: new Date('2023-10-30'),
    progress: 0,
    assignedTo: 'Lisa Wong',
    dependencies: ['t10', 't12'],
    isCritical: true
  },
  {
    id: 't14',
    name: 'Website Launch',
    startDate: new Date('2023-10-30'),
    endDate: new Date('2023-10-30'),
    progress: 0,
    isMilestone: true,
    dependencies: ['t13'],
    isCritical: true
  }
];

export const ganttStartDate = new Date('2023-08-15');
export const ganttEndDate = new Date('2023-11-05'); 