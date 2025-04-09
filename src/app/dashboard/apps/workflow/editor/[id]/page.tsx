'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { WorkflowEditor } from '../../components/editor/WorkflowEditor';

export default function WorkflowEditorWithIdPage({ params }: { params: { id: string } }) {
  const { id } = params;
  
  return (
    <div className="h-full flex flex-col">
      <div className="border-b p-2">
        <Link 
          href="/dashboard/apps?app=workflow" 
          className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Workflow App
        </Link>
      </div>
      <div className="h-full flex-1 overflow-hidden">
        <WorkflowEditor workflowId={id} />
      </div>
    </div>
  );
} 