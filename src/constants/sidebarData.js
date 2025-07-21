
export const sidebarMenu = [
  {
    label: "Dashboard",
    icon: "🏠",
    path: "/dashboard",
  },
  {
    label: "Entity",
    icon: "📁",
    path: "/entity",
    submenu: [
      {
        label: "Roriri Software",
        path: "roriri-software",
        submenu: [
          { label: "Dashboard", path: "dashboard" },
          { label: "Enquiry Details", path: "enquiry-details" },
          { label: "Employee", path: "employee" },
        ],
      },
      {
        label: "NexgenIT Academy",
        path: "nexgenit-academy",
        submenu: [
          { label: "Courses", path: "courses" },
        ],
      },
    ],
  },
];
