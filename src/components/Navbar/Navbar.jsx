import React from 'react';
import { Menu, X, Bell, Search, User, ChevronRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { sidebarMenu } from '../../constants/sidebarData';

const Navbar = () => {
  // const [isToggled, setIsToggled] = useState(false);
  const location = useLocation();

  // const handleToggle = () => {
  //   setIsToggled(!isToggled);
  //   toggleSidebar(); // Call the parent's toggle function
  // };

  const getBreadcrumb = () => {
    const currentPath = location.pathname;
    
    if (currentPath === "/" || currentPath === "") {
      return [{ label: "Dashboard", path: "/" }];
    }

    const pathParts = currentPath.split('/').filter(Boolean);
    
    if (pathParts[0] === 'entity' && pathParts.length >= 3) {
      const entityMenu = sidebarMenu.find(item => item.label === "Entity");
      const company = entityMenu?.submenu?.find(sub => sub.path === pathParts[1]);
      const page = company?.submenu?.find(sub => sub.path === pathParts[2]);
      
      const breadcrumbs = [
        { label: "Entity", path: "/entity" },
        { label: company?.label || pathParts[1], path: `/entity/${pathParts[1]}` }
      ];

      if (page) {
        breadcrumbs.push({ 
          label: page.label, 
          path: `/entity/${pathParts[1]}/${pathParts[2]}` 
        });
      }

      // Handle nested submenu (like enquiry-details/project-enquiry)
      if (pathParts.length >= 4) {
        const parentPage = company?.submenu?.find(sub => sub.path === pathParts[2]);
        const nestedPage = parentPage?.submenu?.find(sub => sub.path === pathParts[3]);
        
        if (nestedPage) {
          breadcrumbs.push({
            label: nestedPage.label,
            path: `/entity/${pathParts[1]}/${pathParts[2]}/${pathParts[3]}`
          });
        }
      }

      return breadcrumbs;
    }

    // For other routes
    const mainMenuItem = sidebarMenu.find(item => 
      item.path && currentPath.includes(item.path)
    );
    
    return [{ label: mainMenuItem?.label || "Page", path: currentPath }];
  };

  const breadcrumbs = getBreadcrumb();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* <button
            onClick={handleToggle}
            className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all duration-200"
          >
            {isToggled ? (
              <X className="h-5 w-5 transform transition-transform duration-200 rotate-180" />
            ) : (
              <Menu className="h-5 w-5 transform transition-transform duration-200" />
            )}
          </button> */}
          
          <div className="hidden md:block">
            <nav className="flex items-center space-x-2 text-sm">
              {breadcrumbs.map((crumb, index) => (
                <div key={crumb.path} className="flex items-center">
                  {index > 0 && (
                    <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />
                  )}
                  <span 
                    className={`transition-colors duration-200 ${
                      index === breadcrumbs.length - 1 
                        ? "text-blue-600 font-medium" 
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {crumb.label}
                  </span>
                </div>
              ))}
            </nav>
          </div>

          {/* Mobile breadcrumb - show only current page */}
          <div className="block md:hidden">
            <span className="text-blue-600 font-medium text-sm">
              {breadcrumbs[breadcrumbs.length - 1]?.label}
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64 transition-all duration-200"
            />
          </div>
          
          {/* Mobile search button */}
          <button className="p-2 text-gray-400 hover:text-gray-600 sm:hidden">
            <Search className="h-5 w-5" />
          </button>
          
          <button className="p-2 text-gray-400 hover:text-gray-600 relative transition-colors duration-200">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          </button>
          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-sm">
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