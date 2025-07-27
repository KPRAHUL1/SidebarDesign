import React from 'react';
import { Menu, Bell, Search, User } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { sidebarMenu } from '../../constants/sidebarData';

const Navbar = ({ toggleSidebar }) => {
  const location = useLocation();

  const getBreadcrumb = () => {
    const currentPath = location.pathname;
    
    if (currentPath === "/" || currentPath === "") {
      return "Dashboard";
    }

    const pathParts = currentPath.split('/').filter(Boolean);
    
    if (pathParts[0] === 'entity' && pathParts.length >= 3) {
      const entityMenu = sidebarMenu.find(item => item.label === "Entity");
      const company = entityMenu?.submenu?.find(sub => sub.path === pathParts[1]);
      const page = company?.submenu?.find(sub => sub.path === pathParts[2]);
      
      return `${company?.label} / ${page?.label || pathParts[2]}`;
    }

    // For other routes
    const mainMenuItem = sidebarMenu.find(item => 
      item.path && currentPath.includes(item.path)
    );
    
    return mainMenuItem?.label || "Page";
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
          >
            <Menu className="h-5 w-5" />
          </button>
          
          <div className="hidden md:block">
            <nav className="flex items-center space-x-2 text-sm text-gray-500">
              <span className="text-gray-900 font-medium">{getBreadcrumb()}</span>
            </nav>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
            />
          </div>
          
          <button className="p-2 text-gray-400 hover:text-gray-600 relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-700 hidden md:block">
              Admin User
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;