import { Brain, Building2, Calendar, CheckCircle, Database, DollarSign, FileIcon, FileText, FolderOpen, Globe, GraduationCap, HeartHandshake, Home, HomeIcon, Leaf, MessageSquare, Settings, Share2, Star, TrendingUp, UserCheck, UserPlus, Users } from "lucide-react";

export const sidebarMenu = [
  {
    label: "Dashboard",
    icon: HomeIcon,
    path: "/",
  },
  {
    label: "Entity",
    icon: FileIcon,
    path: "entity",
    submenu: [
      {
        label: "Roriri Software Solutions",
        path: "roriri-software",
        icon: Home,
        submenu: [
          { label: "Dashboard", path: "dashboard" ,icon: Home,},
          { label: "Enquiry Details", path: "enquiry-details",icon: MessageSquare, },
          { label: "Employee", path: "employee",icon: UserCheck, },
          {
    id: 'attendance',
    label: 'Attendance',
    icon: CheckCircle,
    path: 'attendance'
  },
  {
    id: 'clients',
    label: 'Clients',
    icon: UserPlus,
    path: 'clients'
  },
  {
    id: 'project-details',
    label: 'Project Details',
    icon: FolderOpen,
    path: 'project-details',
  },
  {
    id: 'coordinator',
    label: 'Coordinator',
    icon: Settings,
    path: 'coordinator'
  },
  {
    id: 'internship',
    label: 'Internship',
    icon: Star,
    path: 'internship'
  },
  {
    id: 'mou',
    label: 'MOU',
    icon: FileIcon,
    path: 'mou'
  },
  {
    id: 'task-details',
    label: 'Task Details',
    icon: CheckCircle,
    path: 'task-details',
  },
  {
    id: 'meeting-details',
    label: 'Meeting Details',
    icon: Calendar,
    path: 'meeting-details',
  }
        ],
      },
      {
        label: "NexgenIT Academy",
        path: "nexgenit-academy",
        icon: GraduationCap,
        submenu: [
          { label: "Courses", path: "courses" },
        ],
      },
       {
         id: 'nexgen-college',
         label: 'NexGen IT College',
          path: 'nexgen-college', 
          icon: Building2,
        },
        { 
          id: 'nexemy',
           label: 'Nexemy',
            path: 'nexemy',
            icon: Users 
          },
          { 
            id: 'riya-ias',
             label: 'Riya IAS Academy',
              path: 'riya-ias',
              icon: Brain
            },
             { id: 'riya-neet', label: 'Riya NEET Academy', path: 'riya-neet', icon: Globe },
      { id: 'riya-consultancy', label: 'Riya Consultancy', path: 'riya-consultancy', icon: HeartHandshake },
      { id: 'rithish-farms', label: 'Rithish Farms', path: 'rithish-farms', icon: Leaf },
      { id: 'roriri-foundation', label: 'Roriri Foundation', path: 'roriri-foundation', icon: HeartHandshake }
    ],
  },
  {
    id: 'omain',
    label: 'Domain',
    icon: Globe,
    path: '/domain',
  },
  {
    id: 'official-menu',
    label: 'Official Menu',
    icon: FileText,
    path: '/official-menu',
  },
  {
    id: 'asset',
    label: 'Asset',
    icon:   Building2,
    path: '/asset'
  },
  {
    id: 'industrial-visit',
    label: 'Industrial Visit',
    icon: Building2,
    path: '/industrial-visit'
  },
  {
    id: 'expense',
    label: 'Expense',
    icon: DollarSign,
    path: '/expense'
  },
  {
    id: 'database-report',
    label: 'Database Report',
    icon: Database,
    path: '/database-report'
  },
  {
    id: 'social-media',
    label: 'Social Media',
    icon: Share2,
    path: '/social-media'
  },
  {
    id: 'web-tracking',
    label: 'Web Tracking',
    icon: TrendingUp,
    path: '/web-tracking'
  }
];
