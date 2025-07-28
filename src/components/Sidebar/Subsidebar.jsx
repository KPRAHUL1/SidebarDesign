import { Menu, ChevronDown, ChevronRight } from "lucide-react";
import { sidebarMenu } from "../../constants/sidebarData";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const SubSidebar = ({ activeSubMenu, onClose }) => {
  const [activeSubMenuItem, setActiveSubMenuItem] = useState("");
  const [expandedItems, setExpandedItems] = useState(new Set());
  const location = useLocation();
  
  const entityMenu = sidebarMenu.find((item) => item.label === "Entity");
  const active = entityMenu?.submenu?.find((s) => s.path === activeSubMenu);

  useEffect(() => {
    const currentPath = location.pathname;
    const pathParts = currentPath.split('/');
    
    if (pathParts.length >= 4) {
      const currentPage = pathParts[3];
      setActiveSubMenuItem(currentPage);
      
      // Auto-expand parent menu if we're on a nested route
      if (pathParts.length >= 5) {
        const parentPath = pathParts[3];
        setExpandedItems(prev => new Set(prev).add(parentPath));
      }
    } else {
      setActiveSubMenuItem("dashboard");
    }
  }, [location.pathname]);

  const toggleExpanded = (itemPath) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemPath)) {
        newSet.delete(itemPath);
      } else {
        newSet.add(itemPath);
      }
      return newSet;
    });
  };

  const renderSubMenuItem = (sub, level = 0) => {
    const hasSubMenu = sub.submenu && sub.submenu.length > 0;
    const isExpanded = expandedItems.has(sub.path);
    const isActiveSubItem = activeSubMenuItem === sub.path;
    const paddingLeft = level === 0 ? "px-3" : "px-6";

    return (
      <div key={sub.label}>
        {hasSubMenu ? (
          <button
            className={`w-full flex items-center justify-between ${paddingLeft} py-2 rounded-md transition-all duration-200 ${
              isActiveSubItem
                ? "bg-blue-100 text-blue-600 shadow-sm"
                : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
            }`}
            onClick={() => toggleExpanded(sub.path)}
          >
            <span className={`flex gap-3 items-center transition-all duration-200 ${
              isActiveSubItem ? "font-medium" : ""
            }`}>
              {sub.icon && (
                <sub.icon className={`h-5 w-5 transition-all duration-200 ${
                  isActiveSubItem ? "text-blue-600" : ""
                }`} />
              )}
              <span className="">{sub.label}</span>
            </span>
            <div className="transition-transform duration-300 ease-in-out">
              {isExpanded ? (
                <ChevronDown className="h-4 w-4 transform transition-transform duration-300" />
              ) : (
                <ChevronRight className="h-4 w-4 transform transition-transform duration-300" />
              )}
            </div>
          </button>
        ) : (
          <Link
            to={`/entity/${activeSubMenu}/${sub.path}`}
            className={`block ${paddingLeft} py-2 rounded-md transition-colors duration-200 ${
              isActiveSubItem
                ? "bg-blue-100 text-blue-600 shadow-sm"
                : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
            }`}
            onClick={() => {
              setActiveSubMenuItem(sub.path);
            }}
          >
            <span className={`flex gap-3 items-center ${
              isActiveSubItem ? "font-medium" : ""
            }`}>
              {sub.icon && (
                <sub.icon className={`h-4 w-4 ${
                  isActiveSubItem ? "text-blue-600" : ""
                }`} />
              )}
              <span>{sub.label}</span>
            </span>
          </Link>
        )}
        
        {/* Render nested submenu with smooth animation */}
        {hasSubMenu && (
          <div 
            className={`ml-4 overflow-hidden transition-all duration-300 ease-in-out ${
              isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
            style={{
              transform: isExpanded ? 'translateY(0)' : 'translateY(-10px)',
            }}
          >
            <div className="space-y-1 mt-1 pb-1">
              {sub.submenu.map((nestedSub, index) => (
                <Link
                  key={nestedSub.label}
                  to={`/entity/${activeSubMenu}/${sub.path}/${nestedSub.path}`}
                  className={`block px-6 py-2 rounded-md transition-all duration-200 text-sm transform ${
                    activeSubMenuItem === nestedSub.path
                      ? "bg-blue-50 text-blue-600 border-l-2 border-blue-600 scale-[1.02]"
                      : "text-gray-500 hover:bg-gray-50 hover:text-blue-600 hover:scale-[1.01]"
                  }`}
                  style={{
                    transitionDelay: isExpanded ? `${index * 50}ms` : '0ms',
                    animationDelay: isExpanded ? `${index * 50}ms` : '0ms'
                  }}
                  onClick={() => {
                    setActiveSubMenuItem(nestedSub.path);
                  }}
                >
                  <span className={`flex gap-2 items-center transition-all duration-200 ${
                    activeSubMenuItem === nestedSub.path ? "font-medium" : ""
                  }`}>
                    {nestedSub.icon && (
                      <nestedSub.icon className={`h-4 w-4 transition-all duration-200 ${
                        activeSubMenuItem === nestedSub.path ? "text-blue-600 scale-110" : ""
                      }`} />
                    )}
                    <span className="text-md">{nestedSub.label}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className="w-64 bg-white relative shadow-md transition-all duration-300">
      <div className="flex justify-between items-center p-2 py-4 text-blue-500 shadow-sm border-b border-gray-100">
        <h2 className="font-semibold text-lg">{active?.label}</h2>
        <button onClick={onClose} className="cursor-pointer hover:bg-blue-50 p-1 rounded">
          <Menu className="h-5 w-5" />
        </button>
      </div>
      
      <nav className="p-2 space-y-1">
        {active?.submenu?.map((sub) => renderSubMenuItem(sub))}
      </nav>
    </aside>
  );
};

export default SubSidebar;