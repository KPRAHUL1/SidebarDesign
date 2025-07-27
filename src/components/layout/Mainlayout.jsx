import React, { useState, useEffect } from "react";
import MainSidebar from "../Sidebar/MainSidebar";
import SubSidebar from "../Sidebar/Subsidebar";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    
    if (currentPath.includes('/entity/')) {
      const pathParts = currentPath.split('/');
      if (pathParts.length >= 3) {
        const company = pathParts[2]; 
        setActiveSubMenu(company);
        setCollapsed(true);
      }
    } else {
      setActiveSubMenu(null);
      setCollapsed(false);
    }
  }, [location.pathname]);

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  const handleCloseSubSidebar = () => {
    setActiveSubMenu(null);
    setCollapsed(false);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-white dark:bg-gray-900">
      <MainSidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        setActiveSubMenu={setActiveSubMenu}
      />

      {activeSubMenu && (
        <SubSidebar
          activeSubMenu={activeSubMenu}
          onClose={handleCloseSubSidebar}
        />
      )}

      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar
          collapsed={collapsed}
          toggleSidebar={toggleSidebar}
        />

        <main className="flex-1 overflow-auto bg-gray-100 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
