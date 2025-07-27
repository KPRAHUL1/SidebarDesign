import { Brain, Building2, Calendar, CheckCircle, Database, DollarSign, FileIcon, FileText, FolderOpen, Globe, GraduationCap, HeartHandshake, Home, HomeIcon, Leaf, MessageSquare, Settings, Share2, Star, TrendingUp, UserCheck, UserPlus, Users } from "lucide-react";

export const sidebarMenu = [
  {
    label: "Dashboard",
    icon: HomeIcon,
    path: "",  // Changed from "/" to "" for nested routing
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
          { label: "Dashboard", path: "dashboard", icon: Home },
          { label: "Enquiry Details", path: "enquiry-details", icon: MessageSquare },
          { label: "Employee", path: "employee", icon: UserCheck },
          { label: 'Attendance', path: 'attendance', icon: CheckCircle },
          { label: 'Clients', path: 'clients', icon: UserPlus },
          { label: 'Project Details', path: 'project-details', icon: FolderOpen },
          { label: 'Coordinator', path: 'coordinator', icon: Settings },
          { label: 'Internship', path: 'internship', icon: Star },
          { label: 'MOU', path: 'mou', icon: FileIcon },
          { label: 'Task Details', path: 'task-details', icon: CheckCircle },
          { label: 'Meeting Details', path: 'meeting-details', icon: Calendar }
        ],
      },
      {
        label: "NexgenIT Academy",
        path: "nexgenit-academy",
        icon: GraduationCap,
        submenu: [
          { label: "Courses", path: "courses", icon: GraduationCap },
        ],
      },
      {
        label: 'NexGen IT College',
        path: 'nexgen-college',
        icon: Building2,
        submenu: [
          { label: "Dashboard", path: "dashboard", icon: Home },
        ]
      },
      {
        label: 'Nexemy',
        path: 'nexemy',
        icon: Users,
        submenu: [
          { label: "Dashboard", path: "dashboard", icon: Home },
        ]
      },
      {
        label: 'Riya IAS Academy',
        path: 'riya-ias',
        icon: Brain,
        submenu: [
          { label: "Dashboard", path: "dashboard", icon: Home },
        ]
      },
      {
        label: 'Riya NEET Academy',
        path: 'riya-neet',
        icon: Globe,
        submenu: [
          { label: "Dashboard", path: "dashboard", icon: Home },
        ]
      },
      {
        label: 'Riya Consultancy',
        path: 'riya-consultancy',
        icon: HeartHandshake,
        submenu: [
          { label: "Dashboard", path: "dashboard", icon: Home },
        ]
      },
      {
        label: 'Rithish Farms',
        path: 'rithish-farms',
        icon: Leaf,
        submenu: [
          { label: "Dashboard", path: "dashboard", icon: Home },
        ]
      },
      {
        label: 'Roriri Foundation',
        path: 'roriri-foundation',
        icon: HeartHandshake,
        submenu: [
          { label: "Dashboard", path: "dashboard", icon: Home },
        ]
      }
    ],
  },
  {
    label: 'Domain',
    icon: Globe,
    path: 'domain',
  },
  {
    label: 'Official Menu',
    icon: FileText,
    path: 'official-menu',
  },
  {
    label: 'Asset',
    icon: Building2,
    path: 'asset'
  },
  {
    label: 'Industrial Visit',
    icon: Building2,
    path: 'industrial-visit'
  },
  {
    label: 'Expense',
    icon: DollarSign,
    path: 'expense'
  },
  {
    label: 'Database Report',
    icon: Database,
    path: 'database-report'
  },
  {
    label: 'Social Media',
    icon: Share2,
    path: 'social-media'
  },
  {
    label: 'Web Tracking',
    icon: TrendingUp,
    path: 'web-tracking'
  }
];