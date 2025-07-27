import { Menu } from "lucide-react";
import { sidebarMenu } from "../../constants/sidebarData";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const SubSidebar = ({ activeSubMenu, onClose }) => {
  const [activeSubMenuItem, setActiveSubMenuItem] = useState("");
  const location = useLocation();
  
  const entityMenu = sidebarMenu.find((item) => item.label === "Entity");
  const active = entityMenu?.submenu?.find((s) => s.path === activeSubMenu);

  useEffect(() => {
    const currentPath = location.pathname;
    const pathParts = currentPath.split('/');
    
    if (pathParts.length >= 4) {
      const currentPage = pathParts[3];
      setActiveSubMenuItem(currentPage);
    } else {
      setActiveSubMenuItem("dashboard");
    }
  }, [location.pathname]);

  return (
    <aside className="w-64 bg-white relative shadow-md transition-all duration-300">
      <div className="flex justify-between items-center p-2 py-4 text-blue-500 shadow-sm border-b border-gray-100">
        <h2 className="font-semibold text-lg">{active?.label}</h2>
        <button onClick={onClose} className="cursor-pointer hover:bg-blue-50 p-1 rounded">
          <Menu className="h-5 w-5" />
        </button>
      </div>
      
      <nav className="p-2 space-y-1">
        {active?.submenu?.map((sub) => {
          const isActiveSubItem = activeSubMenuItem === sub.path;
          
          return (
            <Link
              key={sub.label}
              to={`/entity/${activeSubMenu}/${sub.path}`}
              className={`block px-3 py-2 rounded-md transition-colors duration-200 ${
                isActiveSubItem
                  ? "bg-blue-100 text-blue-600 shadow-sm"
                  : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
              }`}
              onClick={() => {
                setActiveSubMenuItem(sub.path);
                // Optional: Close the subsidebar when navigating
                // onClose();
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
          );
        })}
      </nav>
    </aside>
  );
};

export default SubSidebar;
