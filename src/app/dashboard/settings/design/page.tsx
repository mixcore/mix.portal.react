'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { toast } from 'sonner';
import { CheckIcon } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { RadioGroup } from '@/components/ui/radio-group';
import { useThemeSettings, colorOptions, ThemeSettings } from '@/hooks/use-theme-settings';

// Theme customization form schema
const formSchema = z.object({
  primaryColor: z.string(),
  borderRadius: z.string(),
  fontFamily: z.string(),
  darkMode: z.boolean().default(false),
  animationsEnabled: z.boolean().default(true)
});

// Border radius options
const radiusOptions = [
  { name: 'None (0px)', value: '0' },
  { name: 'Small (0.25rem)', value: '0.25' },
  { name: 'Medium (0.5rem)', value: '0.5' },
  { name: 'Large (0.75rem)', value: '0.75' },
  { name: 'Extra Large (1rem)', value: '1' },
  { name: 'Full (9999px)', value: '9999' },
];

// Font family options
const fontOptions = [
  { name: 'Inter (Default)', value: 'inter' },
  { name: 'Roboto', value: 'roboto' },
  { name: 'Open Sans', value: 'open-sans' },
  { name: 'Montserrat', value: 'montserrat' },
  { name: 'Poppins', value: 'poppins' },
  { name: 'Lato', value: 'lato' },
];

export default function DesignSettingsPage() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [activeColor, setActiveColor] = useState('default');
  const [isMounted, setIsMounted] = useState(false);
  
  // Use our custom hook
  const { themeSettings, saveSettings, isInitialized } = useThemeSettings();

  // Set mounted state
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Initialize form with values from our hook
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      primaryColor: 'default',
      borderRadius: '0.5',
      fontFamily: 'inter',
      darkMode: false, // Start with a known value for SSR
      animationsEnabled: true
    }
  });

  // Update form when theme settings are loaded - only on client side
  useEffect(() => {
    if (isMounted && isInitialized && themeSettings) {
      form.reset({
        ...themeSettings,
        darkMode: theme === 'dark' // Use the current theme value
      });
      setActiveColor(themeSettings.primaryColor);
    }
  }, [isInitialized, themeSettings, form, theme, isMounted]);

  // Handle dark mode toggle
  const handleDarkModeChange = (checked: boolean) => {
    if (!isMounted) return;
    
    setTheme(checked ? 'dark' : 'light');
    form.setValue('darkMode', checked);
  };

  // Handle color change
  const handleColorChange = (colorValue: string) => {
    form.setValue('primaryColor', colorValue);
    setActiveColor(colorValue);
    
    // Preview the color change immediately
    const currentValues = form.getValues();
    const updatedSettings: ThemeSettings = {
      ...currentValues,
      primaryColor: colorValue
    };
    
    // Don't save to localStorage yet, just preview
    saveSettings(updatedSettings);
  };

  // Handle form submission
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      // Save settings using our hook
      saveSettings(values as ThemeSettings);
      
      toast.success('Theme settings updated successfully');
    } catch (error) {
      console.error('Error saving theme settings:', error);
      toast.error('Failed to update theme settings');
    } finally {
      setIsLoading(false);
    }
  };

  // Conditionally render the Switch to avoid hydration issues
  const renderSwitch = (field: any, onChange: (checked: boolean) => void) => {
    if (!isMounted) {
      return null; // Don't render until client-side
    }
    
    return (
      <Switch
        id="dark-mode"
        checked={field.value}
        onCheckedChange={onChange}
      />
    );
  };

  return (
    <div className="container mx-auto py-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Design Settings</h2>
        <p className="text-muted-foreground">
          Customize the appearance of your Mixcore portal
        </p>
      </div>

      <Tabs defaultValue="theme" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="theme">Theme</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>
        
        <TabsContent value="theme">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Theme Customization</CardTitle>
                  <CardDescription>
                    Adjust the visual appearance of your Mixcore portal
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Color Scheme */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium">Color Scheme</h3>
                      <p className="text-sm text-muted-foreground">
                        Choose a primary color for buttons, links, and accents
                      </p>
                    </div>
                    <FormField
                      control={form.control}
                      name="primaryColor"
                      render={({ field }) => (
                        <FormItem>
                          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3">
                            {colorOptions.map((color) => (
                              <div key={color.value} className="text-center">
                                <Button
                                  type="button"
                                  onClick={() => handleColorChange(color.value)}
                                  variant="outline"
                                  className={`w-full p-0 h-12 relative ${
                                    activeColor === color.value ? 'ring-2 ring-primary ring-offset-2' : ''
                                  }`}
                                >
                                  <div className={`absolute inset-1 rounded-sm ${color.class}`}></div>
                                  {activeColor === color.value && (
                                    <CheckIcon className="h-4 w-4 text-white absolute" />
                                  )}
                                </Button>
                                <span className="text-xs mt-1 block">{color.name}</span>
                              </div>
                            ))}
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Border Radius */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium">Border Radius</h3>
                      <p className="text-sm text-muted-foreground">
                        Adjust the roundness of UI elements like buttons and cards
                      </p>
                    </div>
                    <FormField
                      control={form.control}
                      name="borderRadius"
                      render={({ field }) => (
                        <FormItem>
                          <Select
                            onValueChange={(value) => {
                              field.onChange(value);
                              // Preview radius change
                              const currentValues = form.getValues();
                              saveSettings({
                                ...currentValues,
                                borderRadius: value
                              } as ThemeSettings);
                            }}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select border radius" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {radiusOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                  {option.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Font Family */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium">Typography</h3>
                      <p className="text-sm text-muted-foreground">
                        Choose a font family for your portal
                      </p>
                    </div>
                    <FormField
                      control={form.control}
                      name="fontFamily"
                      render={({ field }) => (
                        <FormItem>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select font family" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {fontOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                  {option.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Dark Mode Toggle */}
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="dark-mode">Dark Mode</Label>
                      <FormDescription>
                        Enable dark mode for the entire portal
                      </FormDescription>
                    </div>
                    <FormField
                      control={form.control}
                      name="darkMode"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            {isMounted ? (
                              <Switch
                                id="dark-mode"
                                checked={field.value}
                                onCheckedChange={handleDarkModeChange}
                              />
                            ) : (
                              <div className="h-[1.15rem] w-8"></div> // Placeholder during SSR
                            )}
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Animations Toggle */}
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="animations">Animations</Label>
                      <FormDescription>
                        Enable UI animations and transitions
                      </FormDescription>
                    </div>
                    <FormField
                      control={form.control}
                      name="animationsEnabled"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            {isMounted ? (
                              <Switch
                                id="animations"
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            ) : (
                              <div className="h-[1.15rem] w-8"></div> // Placeholder during SSR
                            )}
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button 
                    variant="outline" 
                    onClick={() => router.back()}
                    disabled={isLoading}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? 'Saving...' : 'Save Changes'}
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </Form>
        </TabsContent>
        
        <TabsContent value="advanced">
          <Card>
            <CardHeader>
              <CardTitle>Advanced Theme Settings</CardTitle>
              <CardDescription>
                Configure advanced theme and design settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Theme Preview */}
                <div className="rounded-md border p-4">
                  <h3 className="font-medium mb-2">Theme Preview</h3>
                  <div className="grid gap-4">
                    <div className="flex gap-2">
                      <Button size="sm">Primary Button</Button>
                      <Button size="sm" variant="secondary">Secondary</Button>
                      <Button size="sm" variant="outline">Outline</Button>
                      <Button size="sm" variant="destructive">Destructive</Button>
                    </div>
                    <div className="flex gap-2 items-center">
                      {isMounted ? (
                        <Switch id="preview-switch" />
                      ) : (
                        <div className="h-[1.15rem] w-8"></div> // Placeholder during SSR
                      )}
                      <Label htmlFor="preview-switch">Switch Example</Label>
                    </div>
                    <div>
                      <Input placeholder="Input field example" className="max-w-sm" />
                    </div>
                  </div>
                </div>

                {/* CSS Variables */}
                <div>
                  <h3 className="font-medium mb-2">CSS Variables</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    These variables control your theme's appearance
                  </p>
                  <div className="rounded-md bg-muted p-4 font-mono text-sm">
                    <pre className="whitespace-pre-wrap break-all">
                      {`--background: hsl(0 0% 100%);
--foreground: hsl(222.2 84% 4.9%);
--card: hsl(0 0% 100%);
--card-foreground: hsl(222.2 84% 4.9%);
--popover: hsl(0 0% 100%);
--popover-foreground: hsl(222.2 84% 4.9%);
--primary: hsl(222.2 47.4% 11.2%);
--primary-foreground: hsl(210 40% 98%);
--secondary: hsl(210 40% 96.1%);
--secondary-foreground: hsl(222.2 47.4% 11.2%);
--muted: hsl(210 40% 96.1%);
--muted-foreground: hsl(215.4 16.3% 46.9%);
--accent: hsl(210 40% 96.1%);
--accent-foreground: hsl(222.2 47.4% 11.2%);
--destructive: hsl(0 84.2% 60.2%);
--destructive-foreground: hsl(210 40% 98%);
--border: hsl(214.3 31.8% 91.4%);
--input: hsl(214.3 31.8% 91.4%);
--ring: hsl(222.2 84% 4.9%);
--radius: 0.5rem;`}
                    </pre>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 