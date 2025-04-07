'use client';

import { useParams } from 'next/navigation';
import { TemplateEditLayout } from '@/components/shared/template-edit-layout';

export default function EditTemplatePage() {
  const params = useParams();
  const id = params.id as string;

  return (
    <TemplateEditLayout
      title='Edit Template'
      templateId={id}
      backPath='/dashboard/templates'
    />
  );
}
