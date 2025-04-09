'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { WorkflowEditor } from '../components/editor/WorkflowEditor';
import useContainerStatus from '../hooks/useContainerStatus';

export default function WorkflowEditorPage() {
  const searchParams = useSearchParams();
  const workflowId = searchParams.get('id');
  const isFluidLayout = useContainerStatus();
  
  return (
    <div className="h-full flex flex-col">
      <div className="h-full flex-1 overflow-hidden">
        <WorkflowEditor workflowId={workflowId || undefined} />
      </div>
    </div>
  );
} 