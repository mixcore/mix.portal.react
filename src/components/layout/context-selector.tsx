'use client';

import { useNavigationContext } from '@/providers/navigation-context-provider';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import { appContexts } from '@/constants/data';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

export function ContextSelector({ className }: { className?: string }) {
  const {
    activeContextId,
    setActiveContextId,
    activePersonaId,
    setActivePersonaId,
    availableContexts,
    availablePersonas
  } = useNavigationContext();

  // Get active context
  const activeContext = availableContexts.find(c => c.id === activeContextId);
  
  // Get active persona
  const activePersona = availablePersonas.find(p => p.id === activePersonaId);

  // Get icon for active context
  const contextIconName = activeContext?.icon as keyof typeof Icons || 'dashboard';
  const ActiveContextIcon = Icons[contextIconName];

  return (
    <div className={cn('flex flex-col space-y-2 w-full', className)}>
      {/* Context Selector */}
      <div className="flex items-center">
        <Select
          value={activeContextId || undefined}
          onValueChange={(value) => {
            setActiveContextId(value);
          }}
        >
          <SelectTrigger className="w-full">
            <div className="flex items-center gap-2">
              {activeContext && <ActiveContextIcon className="h-4 w-4" />}
              <SelectValue placeholder="Select context" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>App Contexts</SelectLabel>
              {availableContexts.map((context) => {
                const iconName = context.icon as keyof typeof Icons || 'dashboard';
                const ContextIcon = Icons[iconName];
                return (
                  <SelectItem key={context.id} value={context.id} className="pl-8 relative">
                    <span className="absolute left-2">
                      <ContextIcon className="h-4 w-4" />
                    </span>
                    {context.name}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Persona Selector */}
      <div className="flex items-center">
        <Select
          value={activePersonaId || undefined}
          onValueChange={(value) => {
            setActivePersonaId(value);
          }}
        >
          <SelectTrigger className="w-full">
            <div className="flex items-center gap-2">
              <Icons.userPen className="h-4 w-4" />
              <SelectValue placeholder="Select persona" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Personas</SelectLabel>
              {availablePersonas.map((persona) => (
                <SelectItem key={persona.id} value={persona.id} className="pl-8 relative">
                  <span className="absolute left-2">
                    <Icons.userPen className="h-4 w-4" />
                  </span>
                  {persona.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
} 