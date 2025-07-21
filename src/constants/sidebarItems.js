import { 
  Menu, 
  X, 
  Home, 
  Users, 
  Globe, 
  FileText, 
  Building, 
  DollarSign, 
  Database, 
  Share2, 
  TrendingUp,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  MessageSquare,
  UserCheck,
  CheckCircle,
  UserPlus,
  FolderOpen,
  Settings,
  Star,
  FileText as FileIcon,
  Calendar,
  Sun,
  Moon,
  Grid3X3,
  User
} from 'lucide-react';

const roririSoftwareData = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: Home,
    path: '/roriri-software/dashboard'
  },
  {
    id: 'enquiry-details',
    title: 'Enquiry Details',
    icon: MessageSquare,
    path: '/roriri-software/enquiry-details',
    hasSubmenu: true
  },
  {
    id: 'employee',
    title: 'Employee',
    icon: UserCheck,
    path: '/roriri-software/employee'
  },
  {
    id: 'attendance',
    title: 'Attendance',
    icon: CheckCircle,
    path: '/roriri-software/attendance'
  },
  {
    id: 'clients',
    title: 'Clients',
    icon: UserPlus,
    path: '/roriri-software/clients'
  },
  {
    id: 'project-details',
    title: 'Project Details',
    icon: FolderOpen,
    path: '/roriri-software/project-details',
    hasSubmenu: true
  },
  {
    id: 'coordinator',
    title: 'Coordinator',
    icon: Settings,
    path: '/roriri-software/coordinator'
  },
  {
    id: 'internship',
    title: 'Internship',
    icon: Star,
    path: '/roriri-software/internship'
  },
  {
    id: 'mou',
    title: 'MOU',
    icon: FileIcon,
    path: '/roriri-software/mou'
  },
  {
    id: 'task-details',
    title: 'Task Details',
    icon: CheckCircle,
    path: '/roriri-software/task-details',
    hasSubmenu: true
  },
  {
    id: 'meeting-details',
    title: 'Meeting Details',
    icon: Calendar,
    path: '/roriri-software/meeting-details',
    hasSubmenu: true
  }
];
 const sidebarData = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: Home,
    path: '/dashboard'
  },
  {
    id: 'entity',
    title: 'Entity',
    icon: Users,
    path: '/entity',
    hasSubmenu: true,
    submenu: [
      { id: 'roriri-software', title: 'Roriri Software Solution', path: '/entity/roriri-software' },
      { id: 'nexgen-academy', title: 'NexGen IT Academy', path: '/entity/nexgen-academy' },
      { id: 'nexgen-college', title: 'NexGen IT College', path: '/entity/nexgen-college' },
      { id: 'nexemy', title: 'Nexemy', path: '/entity/nexemy' },
      { id: 'riya-ias', title: 'Riya IAS Academy', path: '/entity/riya-ias' },
      { id: 'riya-neet', title: 'Riya NEET Academy', path: '/entity/riya-neet' },
      { id: 'riya-consultancy', title: 'Riya Consultancy', path: '/entity/riya-consultancy' },
      { id: 'rithish-farms', title: 'Rithish Farms', path: '/entity/rithish-farms' },
      { id: 'roriri-foundation', title: 'Roriri Foundation', path: '/entity/roriri-foundation' }
    ]
  },
  {
    id: 'domain',
    title: 'Domain',
    icon: Globe,
    path: '/domain',
    hasSubmenu: true
  },
  {
    id: 'official-menu',
    title: 'Official Menu',
    icon: FileText,
    path: '/official-menu',
    hasSubmenu: true
  },
  {
    id: 'asset',
    title: 'Asset',
    icon: Building,
    path: '/asset'
  },
  {
    id: 'industrial-visit',
    title: 'Industrial Visit',
    icon: Building,
    path: '/industrial-visit'
  },
  {
    id: 'expense',
    title: 'Expense',
    icon: DollarSign,
    path: '/expense'
  },
  {
    id: 'database-report',
    title: 'Database Report',
    icon: Database,
    path: '/database-report'
  },
  {
    id: 'social-media',
    title: 'Social Media',
    icon: Share2,
    path: '/social-media'
  },
  {
    id: 'web-tracking',
    title: 'Web Tracking',
    icon: TrendingUp,
    path: '/web-tracking'
  }
];

export  {sidebarData, roririSoftwareData};