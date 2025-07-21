import { useState } from "react";
import { Link } from "react-router-dom";
import { sidebarMenu } from "../../constants/sidebarData";

const MainSidebar = ({ collapsed, setCollapsed, setActiveSubMenu }) => {
  const [expandedMenu, setExpandedMenu] = useState(null);

  const handleExpand = (item) => {
    if (expandedMenu === item.label) {
      setExpandedMenu(null);
    } else {
      setExpandedMenu(item.label);
    }
  };

  return (
    <aside
      className={`bg-white h-full transition-all duration-300 shadow-md ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <nav className="p-2 space-y-1">
        {sidebarMenu.map((item) => {
          const isExpanded = expandedMenu === item.label;

          return (
            <div key={item.label}>
              <button
                onClick={() =>
                  item.submenu ? handleExpand(item) : null
                }
                className="w-full text-left px-2 py-2 hover:bg-gray-100 rounded"
              >
                {collapsed ? item.icon : item.label}
              </button>

              {!collapsed && isExpanded && item.submenu && (
                <ul className="ml-4 mt-1 space-y-1">
                  {item.submenu.map((sub) => (
                    <li key={sub.label}>
                      <button
                        onClick={() => {
                          setCollapsed(true);
                          setActiveSubMenu(sub.path); 
                        }}
                        className="w-full text-left px-2 py-1 hover:bg-gray-200 rounded"
                      >
                        {sub.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default MainSidebar;
