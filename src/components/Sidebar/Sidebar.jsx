import { useState } from "react";
import { sidebarData, roririSoftwareData } from "../../constants/sidebarItems";
import { ChevronRight, X } from "lucide-react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [expandedItems, setExpandedItems] = useState({});
  const [activeItem, setActiveItem] = useState("dashboard");
  const [selectedEntity, setSelectedEntity] = useState(null);

  const toggleExpanded = (itemId) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const handleItemClick = (item) => {
    setActiveItem(item.id);
    if (item.hasSubmenu) toggleExpanded(item.id);
    setSelectedEntity(item.id === "roriri-software" ? "roriri-software" : null);
  };

  const isCollapsed = Boolean(selectedEntity);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={toggleSidebar} />
      )}

      <div
        className={`
          fixed left-0 top-0 h-full bg-white shadow-lg z-50 transition-all duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          ${isCollapsed ? "w-16" : "w-64"}
          lg:translate-x-0 lg:static lg:shadow-none
        `}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8  rounded-lg flex items-center justify-center">
                <img src="image.png" alt="" />
              </div>
              {!isCollapsed && <span className="font-bold  text-blue-600">RORIRI</span>}
            </div>
            {!isCollapsed && (
              <button onClick={toggleSidebar} className="lg:hidden p-1 rounded-md hover:bg-gray-100">
                <X size={20} />
              </button>
            )}
          </div>
          <div className="flex-1 overflow-y-auto py-4">
            <nav className="space-y-1 px-3">
              {sidebarData.map((item) => {
                const Icon = item.icon;
                const isActive = activeItem === item.id;
                const isExpanded = expandedItems[item.id];

                return (
                  <div key={item.id}>
                    <button
                      onClick={() => handleItemClick(item)}
                      className={`
                        w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left
                        ${isActive ? "bg-blue-50 text-blue-700 border-l-4 border-blue-500" : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"}
                      `}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon size={18} className={`${isActive ? "text-blue-600" : "text-gray-500"}`} />
                        {!isCollapsed && <span className="font-medium">{item.title}</span>}
                      </div>
                      {item.hasSubmenu && !isCollapsed && (
                        <div className={`transition-transform duration-200 ${isExpanded ? "rotate-90" : ""}`}>
                          <ChevronRight size={16} />
                        </div>
                      )}
                    </button>

                    {item.hasSubmenu && !isCollapsed && (
                      <div
                        className={`${
                          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        } overflow-hidden transition-all duration-300`}
                      >
                        <div className="ml-6 mt-1 space-y-1">
                          {item.submenu?.map((subItem) => (
                            <button
                              key={subItem.id}
                              onClick={() => handleItemClick(subItem)}
                              className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                                activeItem === subItem.id
                                  ? "bg-blue-50 text-blue-700"
                                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
                              }`}
                            >
                              <div className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                                <span>{subItem.title}</span>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>

          {!isCollapsed && (
            <div className="p-4 border-t text-xs text-center text-gray-500">
              Copyright © 2024. All rights reserved.
            </div>
          )}
        </div>
      </div>

      {selectedEntity === "roriri-software" && (
        <div className="fixed left-16  top-0 h-full w-64 bg-gray-50 border-l shadow-md z-40 transition-all duration-300">
          <div className="p-4 border-b font-semibold text-gray-800">Roriri Software</div>
          <nav className="px-4 py-2 space-y-1">
            {roririSoftwareData.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={item.path}
                  className="flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-100 text-sm text-gray-700"
                >
                  <Icon size={16} className="text-gray-500" />
                  {item.title}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
};

export default Sidebar;
