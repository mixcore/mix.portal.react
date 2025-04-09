import { Node } from 'reactflow';

export interface NodeTypePort {
  name: string;
  label: string;
  multiple?: boolean;
}

export interface NodeTypeProperty {
  name: string;
  label: string;
  type: 'string' | 'number' | 'boolean' | 'select' | 'json' | 'textarea' | 'code';
  required?: boolean;
  default?: any;
  options?: string[] | { label: string; value: string }[];
}

export interface NodeType {
  type: string;
  label: string;
  category: string;
  description: string;
  icon: string;
  inputs: NodeTypePort[];
  outputs: NodeTypePort[];
  properties: NodeTypeProperty[];
  execute?: (inputs: any, properties: any) => Promise<any>;
}

export interface WorkflowNodeData {
  label?: string;
  type: string;
  [key: string]: any;
}

export interface WorkflowNode extends Node {
  data: WorkflowNodeData;
} 