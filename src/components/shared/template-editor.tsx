'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Template } from '@/types/template';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';
import { SaveIcon, EyeIcon, RefreshCwIcon } from 'lucide-react';

// Dynamically import Monaco Editor with no SSR to avoid server/client mismatch
const MonacoEditor = dynamic(
  () => import('@monaco-editor/react').then((mod) => mod.default),
  { ssr: false }
);

interface TemplateEditorProps {
  template: Template | null;
  isReadOnly?: boolean;
  onContentChange?: (content: string) => void;
  onScriptsChange?: (scripts: string) => void;
  onStylesChange?: (styles: string) => void;
  onSave?: () => void;
  isSaving?: boolean;
  onPreview?: () => void;
  fileNameEditable?: boolean;
  onFileNameChange?: (fileName: string) => void;
}

export function TemplateEditor({
  template,
  isReadOnly = false,
  onContentChange,
  onScriptsChange,
  onStylesChange,
  onSave,
  isSaving = false,
  onPreview,
  fileNameEditable = false,
  onFileNameChange
}: TemplateEditorProps) {
  const [activeTab, setActiveTab] = useState('content');
  const [fileName, setFileName] = useState('');
  const [content, setContent] = useState('');
  const [scripts, setScripts] = useState('');
  const [styles, setStyles] = useState('');
  const [editorHeight, setEditorHeight] = useState('70vh');
  const [isEditorReady, setIsEditorReady] = useState(false);

  // Set up editor options
  const editorOptions = {
    minimap: { enabled: false },
    scrollBeyondLastLine: false,
    fontSize: 14,
    wordWrap: 'on' as const,
    lineNumbers: 'on' as const,
    readOnly: isReadOnly,
    automaticLayout: true,
    scrollbar: {
      vertical: 'visible' as const,
      horizontal: 'visible' as const,
      verticalScrollbarSize: 12,
      horizontalScrollbarSize: 12
    }
  };

  // Update local state when template changes
  useEffect(() => {
    if (template) {
      setFileName(template.fileName);
      setContent(template.content || '');
      setScripts(template.scripts || '');
      setStyles(template.styles || '');
    }
  }, [template]);

  // Handle content change
  const handleContentChange = (value: string | undefined) => {
    if (value !== undefined) {
      setContent(value);
      onContentChange?.(value);
    }
  };

  // Handle scripts change
  const handleScriptsChange = (value: string | undefined) => {
    if (value !== undefined) {
      setScripts(value);
      onScriptsChange?.(value);
    }
  };

  // Handle styles change
  const handleStylesChange = (value: string | undefined) => {
    if (value !== undefined) {
      setStyles(value);
      onStylesChange?.(value);
    }
  };

  // Handle file name change
  const handleFileNameChange = (value: string) => {
    setFileName(value);
    onFileNameChange?.(value);
  };

  // Get language for the current tab based on file extension
  const getLanguage = (tab: string) => {
    if (tab === 'content') {
      if (fileName.endsWith('.cshtml')) return 'razor';
      if (fileName.endsWith('.html')) return 'html';
      if (fileName.endsWith('.json')) return 'json';
      if (fileName.endsWith('.js')) return 'javascript';
      if (fileName.endsWith('.css')) return 'css';
      return 'razor'; // Default to razor
    }

    if (tab === 'scripts') return 'javascript';
    if (tab === 'styles') return 'css';

    return 'plaintext';
  };

  return (
    <div className='space-y-4'>
      <div className='flex items-center justify-between'>
        {fileNameEditable ? (
          <Input
            value={fileName}
            onChange={(e) => handleFileNameChange(e.target.value)}
            className='w-64'
            placeholder='Enter file name'
            disabled={isReadOnly}
          />
        ) : (
          <h2 className='text-2xl font-bold'>{fileName}</h2>
        )}

        <div className='space-x-2'>
          {!isReadOnly && (
            <Button
              onClick={onSave}
              disabled={isSaving || !template}
              className='w-24'
            >
              {isSaving ? (
                <RefreshCwIcon className='mr-2 h-4 w-4 animate-spin' />
              ) : (
                <SaveIcon className='mr-2 h-4 w-4' />
              )}
              Save
            </Button>
          )}

          {onPreview && (
            <Button variant='outline' onClick={onPreview} disabled={!template}>
              <EyeIcon className='mr-2 h-4 w-4' />
              Preview
            </Button>
          )}
        </div>
      </div>

      <Card>
        <CardHeader className='border-b px-4 py-2'>
          <Tabs
            defaultValue='content'
            value={activeTab}
            onValueChange={setActiveTab}
            className='w-full'
          >
            <TabsList>
              <TabsTrigger value='content'>Template</TabsTrigger>
              <TabsTrigger value='scripts'>Scripts</TabsTrigger>
              <TabsTrigger value='styles'>Styles</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent className='h-full p-0'>
          <Tabs
            defaultValue='content'
            value={activeTab}
            className='h-full w-full'
          >
            <div className='relative p-0' style={{ height: editorHeight }}>
              <TabsContent value='content' className='m-0 h-full'>
                {!isEditorReady && <Skeleton className='h-full w-full' />}
                <MonacoEditor
                  height='100%'
                  language={getLanguage('content')}
                  value={content}
                  options={editorOptions}
                  onChange={handleContentChange}
                  onMount={() => setIsEditorReady(true)}
                  theme='vs-dark'
                />
              </TabsContent>
              <TabsContent value='scripts' className='m-0 h-full'>
                {!isEditorReady && <Skeleton className='h-full w-full' />}
                <MonacoEditor
                  height='100%'
                  language='javascript'
                  value={scripts}
                  options={editorOptions}
                  onChange={handleScriptsChange}
                  theme='vs-dark'
                />
              </TabsContent>
              <TabsContent value='styles' className='m-0 h-full'>
                {!isEditorReady && <Skeleton className='h-full w-full' />}
                <MonacoEditor
                  height='100%'
                  language='css'
                  value={styles}
                  options={editorOptions}
                  onChange={handleStylesChange}
                  theme='vs-dark'
                />
              </TabsContent>
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
