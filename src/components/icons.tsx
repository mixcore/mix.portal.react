import {
  FileText,
  LayoutTemplate,
  Users,
  Settings,
  Menu,
  Moon,
  Sun,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Check,
  ChevronsUpDown,
  X,
  type LucideIcon,
  Image,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  logo: FileText,
  close: X,
  menu: Menu,
  settings: Settings,
  spinner: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="animate-spin"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronsUpDown: ChevronsUpDown,
  check: Check,
  sun: Sun,
  moon: Moon,
  logout: LogOut,
  file: FileText,
  page: LayoutTemplate,
  users: Users,
  media: Image,
} 