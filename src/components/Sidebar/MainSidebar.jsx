import { useState } from "react";
import { sidebarMenu } from "../../constants/sidebarData";
import { ChevronDown, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MainSidebar = ({ collapsed, setCollapsed, setActiveSubMenu }) => {
  const [expandedMenu, setExpandedMenu] = useState(null);
  const navigate = useNavigate();

  const handleExpand = (item) => {
    if (expandedMenu === item.label) {
      setExpandedMenu(null);
    } else {
      setExpandedMenu(item.label);
    }
  };

  const handleSubMenuClick = (subPath) => {
    setCollapsed(true);
    setActiveSubMenu(subPath);
  };

  return (
    <aside
      className={`bg-white h-full shadow-lg transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <nav className="p-2 space-y-1">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center justify-center gap-2">
            <img 
              src="image.png" 
              alt="" 
              className={`${collapsed ? "h-8 w-8" : "h-10 w-10"}`}
            />
            {!collapsed && (
              <span className="text-xl text-blue-500 font-medium">RORIRI</span>
            )}
          </div>
          {!collapsed && (
            <button onClick={() => setCollapsed(!collapsed)}>
              <Menu className="text-blue-500 cursor-pointer" />
            </button>
          )}
        </div>

        {sidebarMenu.map((item) => {
          const isExpanded = expandedMenu === item.label;

          return (
            <div key={item.label}>
              <button
                onClick={() => {
                  if (item.submenu) {
                    handleExpand(item);
                  } else {
                    navigate(`/${item.path}`);
                  }
                }}
                className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-500 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                <item.icon className="w-5 h-5" />
                {!collapsed && (
                  <>
                    <span>{item.label}</span>
                    {item.submenu && (
                      <span
                        className={`ml-auto transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      >
                        <ChevronDown size={18} />
                      </span>
                    )}
                  </>
                )}
              </button>

              {!collapsed && item.submenu && (
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="ml-6 mt-1 space-y-1">
                    {item.submenu.map((sub) => (
                      <li key={sub.label}>
                        <button
                          onClick={() => handleSubMenuClick(sub.path)}
                          className="w-full flex items-center gap-2 px-3 py-1.5 rounded-md text-sm text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
                        >
                          {sub.icon && <sub.icon className="w-4 h-4" />}
                          <span>{sub.label}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default MainSidebar;