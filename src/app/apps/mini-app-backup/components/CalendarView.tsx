'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ChevronLeft, ChevronRight, Plus, Calendar } from 'lucide-react';

interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  endDate?: string;
  allDay?: boolean;
  type: 'meeting' | 'task' | 'reminder' | 'event';
  description?: string;
  participants?: {
    id: string;
    name: string;
    avatar?: string;
  }[];
}

interface CalendarViewProps {
  onEventClick: (eventId: string) => void;
}

export function CalendarView({ onEventClick }: CalendarViewProps) {
  // State for current displayed month and year
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  
  // Mock calendar events
  const [events, setEvents] = useState<CalendarEvent[]>([
    {
      id: 'event-1',
      title: 'Team Meeting',
      date: '2023-09-05T10:00:00',
      endDate: '2023-09-05T11:00:00',
      type: 'meeting',
      description: 'Weekly team sync meeting',
      participants: [
        { id: 'user-1', name: 'Alex', avatar: '/avatars/01.png' },
        { id: 'user-2', name: 'Morgan', avatar: '/avatars/02.png' },
        { id: 'user-3', name: 'Jordan', avatar: '/avatars/03.png' }
      ]
    },
    {
      id: 'event-2',
      title: 'Project Deadline',
      date: '2023-09-15T23:59:59',
      type: 'reminder',
      description: 'Submit final deliverables for client review'
    },
    {
      id: 'event-3',
      title: 'Product Demo',
      date: '2023-09-12T14:00:00',
      endDate: '2023-09-12T15:30:00',
      type: 'event',
      description: 'Demo the new product features to stakeholders',
      participants: [
        { id: 'user-1', name: 'Alex', avatar: '/avatars/01.png' },
        { id: 'user-4', name: 'Taylor', avatar: '/avatars/04.png' }
      ]
    },
    {
      id: 'event-4',
      title: 'Client Call',
      date: '2023-09-08T09:30:00',
      endDate: '2023-09-08T10:30:00',
      type: 'meeting',
      description: 'Review project progress with client'
    },
    {
      id: 'event-5',
      title: 'Design Review',
      date: '2023-09-20T13:00:00',
      endDate: '2023-09-20T14:00:00',
      type: 'meeting',
      description: 'Review and approve new designs'
    },
    {
      id: 'event-6',
      title: 'Release v1.0',
      date: '2023-09-30T00:00:00',
      allDay: true,
      type: 'event',
      description: 'Product release day'
    }
  ]);

  // Get days in month
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Get the first day of the month
  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  // Navigate to previous month
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    setSelectedDate(null);
  };

  // Navigate to next month
  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    setSelectedDate(null);
  };

  // Navigate to today
  const goToToday = () => {
    setCurrentDate(new Date());
    setSelectedDate(new Date());
  };

  // Generate calendar grid
  const generateCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    
    // Previous month days to display
    const prevMonthDays = [];
    if (firstDayOfMonth > 0) {
      const prevMonth = month === 0 ? 11 : month - 1;
      const prevMonthYear = month === 0 ? year - 1 : year;
      const daysInPrevMonth = getDaysInMonth(prevMonthYear, prevMonth);
      
      for (let i = firstDayOfMonth - 1; i >= 0; i--) {
        prevMonthDays.push({
          day: daysInPrevMonth - i,
          month: prevMonth,
          year: prevMonthYear,
          isCurrentMonth: false
        });
      }
    }
    
    // Current month days
    const currentMonthDays = [];
    for (let i = 1; i <= daysInMonth; i++) {
      currentMonthDays.push({
        day: i,
        month,
        year,
        isCurrentMonth: true
      });
    }
    
    // Next month days to fill out the rest of the last week
    const calendarDays = [...prevMonthDays, ...currentMonthDays];
    const nextMonthDays = [];
    const remainingDays = 42 - calendarDays.length; // 6 rows of 7 days
    
    if (remainingDays > 0) {
      const nextMonth = month === 11 ? 0 : month + 1;
      const nextMonthYear = month === 11 ? year + 1 : year;
      
      for (let i = 1; i <= remainingDays; i++) {
        nextMonthDays.push({
          day: i,
          month: nextMonth,
          year: nextMonthYear,
          isCurrentMonth: false
        });
      }
    }
    
    return [...calendarDays, ...nextMonthDays];
  };

  // Get events for a specific date
  const getEventsForDate = (year: number, month: number, day: number) => {
    const date = new Date(year, month, day);
    const dateString = date.toISOString().split('T')[0];
    
    return events.filter(event => {
      const eventDate = new Date(event.date);
      const eventDateString = eventDate.toISOString().split('T')[0];
      return eventDateString === dateString;
    });
  };

  // Get event type color
  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'meeting':
        return 'bg-blue-500';
      case 'task':
        return 'bg-amber-500';
      case 'reminder':
        return 'bg-red-500';
      case 'event':
        return 'bg-green-500';
      default:
        return 'bg-slate-500';
    }
  };

  // Format date for display
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return date.toLocaleDateString('en-US', options);
  };

  // Format time for display
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  // Calendar days
  const calendarDays = generateCalendar();
  
  // Month name and year
  const monthName = currentDate.toLocaleString('en-US', { month: 'long' });
  const year = currentDate.getFullYear();
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tight">Calendar</h1>
          <div className="flex items-center space-x-2">
            <Button size="sm" variant="outline" onClick={goToToday}>
              Today
            </Button>
            <Button variant="outline" size="icon" onClick={goToPreviousMonth}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={goToNextMonth}>
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Select defaultValue="month">
              <SelectTrigger className="w-[120px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="month">Month</SelectItem>
                <SelectItem value="week">Week</SelectItem>
                <SelectItem value="day">Day</SelectItem>
                <SelectItem value="agenda">Agenda</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="text-xl font-medium">
          {monthName} {year}
        </div>
      </div>
      
      <div className="bg-background rounded-lg border overflow-hidden">
        {/* Calendar header - days of week */}
        <div className="grid grid-cols-7 border-b">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="text-center p-2 font-medium text-sm">
              {day}
            </div>
          ))}
        </div>
        
        {/* Calendar grid */}
        <div className="grid grid-cols-7 grid-rows-6 h-[600px]">
          {calendarDays.map((day, index) => {
            const dateEvents = getEventsForDate(day.year, day.month, day.day);
            const isToday = (
              new Date().getDate() === day.day &&
              new Date().getMonth() === day.month &&
              new Date().getFullYear() === day.year
            );
            
            const isSelected = selectedDate && (
              selectedDate.getDate() === day.day &&
              selectedDate.getMonth() === day.month &&
              selectedDate.getFullYear() === day.year
            );
            
            return (
              <div 
                key={index}
                className={`p-1 border-r border-b min-h-[100px] ${
                  day.isCurrentMonth ? 'bg-background' : 'bg-secondary/10 text-muted-foreground'
                } ${isToday ? 'bg-primary/5' : ''} ${isSelected ? 'ring-2 ring-primary ring-inset' : ''}`}
                onClick={() => setSelectedDate(new Date(day.year, day.month, day.day))}
              >
                <div className="text-right mb-1">
                  <span className={`text-sm inline-flex items-center justify-center w-6 h-6 ${
                    isToday ? 'bg-primary text-primary-foreground rounded-full font-semibold' : ''
                  }`}>
                    {day.day}
                  </span>
                </div>
                
                <div className="space-y-1 overflow-y-auto max-h-[80px]">
                  {dateEvents.map((event) => (
                    <div 
                      key={event.id}
                      className="text-xs truncate px-1 py-0.5 rounded cursor-pointer"
                      style={{ backgroundColor: `${getEventTypeColor(event.type)}20` }}
                      onClick={(e) => {
                        e.stopPropagation();
                        onEventClick(event.id);
                      }}
                    >
                      <div className="flex items-center">
                        <div 
                          className={`w-2 h-2 rounded-full mr-1 ${getEventTypeColor(event.type)}`}
                        ></div>
                        <span>{event.allDay ? '' : formatTime(event.date)}</span>
                        <span className="ml-1 font-medium">{event.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Event details for selected date */}
      {selectedDate && (
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>{formatDate(selectedDate)}</CardTitle>
            <CardDescription>
              {getEventsForDate(
                selectedDate.getFullYear(),
                selectedDate.getMonth(),
                selectedDate.getDate()
              ).length} events
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {getEventsForDate(
                selectedDate.getFullYear(),
                selectedDate.getMonth(),
                selectedDate.getDate()
              ).length === 0 ? (
                <p className="text-muted-foreground text-sm">No events scheduled</p>
              ) : (
                getEventsForDate(
                  selectedDate.getFullYear(),
                  selectedDate.getMonth(),
                  selectedDate.getDate()
                ).map((event) => (
                  <div 
                    key={event.id}
                    className="p-3 rounded-lg border hover:bg-secondary/10 cursor-pointer"
                    onClick={() => onEventClick(event.id)}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center">
                        <div 
                          className={`w-3 h-3 rounded-full mr-2 ${getEventTypeColor(event.type)}`}
                        ></div>
                        <span className="font-medium">{event.title}</span>
                      </div>
                      <Badge variant="outline">{event.type}</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">
                      {event.allDay ? (
                        'All day'
                      ) : (
                        <>
                          {formatTime(event.date)}
                          {event.endDate && ` - ${formatTime(event.endDate)}`}
                        </>
                      )}
                    </div>
                    {event.description && (
                      <p className="text-sm text-muted-foreground mb-2">{event.description}</p>
                    )}
                    {event.participants && event.participants.length > 0 && (
                      <div className="flex items-center mt-2">
                        <span className="text-xs text-muted-foreground mr-2">Participants:</span>
                        <div className="flex -space-x-2">
                          {event.participants.map((participant) => (
                            <Avatar key={participant.id} className="h-6 w-6 border-2 border-background">
                              <AvatarImage src={participant.avatar} alt={participant.name} />
                              <AvatarFallback>{participant.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Event
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}

export default CalendarView; 