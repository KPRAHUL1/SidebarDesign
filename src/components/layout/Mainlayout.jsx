// import React from "react";
// import Navbar from "../Navbar/Navbar";
// import Sidebar from "../Sidebar/Sidebar";

// const MainLayout = ({ children }) => {
//   return (
//     <div className="flex h-screen">
//       <Sidebar />
//       <div className="flex flex-col flex-1">
//         <Navbar />
//         <main className="p-4 overflow-y-auto">{children}</main>
//       </div>
//     </div>
//   );
// };

// export default MainLayout;

import React, { useState } from "react";
import MainSidebar from "../Sidebar/MainSidebar";
import SubSidebar from "../Sidebar/Subsidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const MainLayout = () => {
   const [collapsed, setCollapsed] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
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
          onClose={() => {
            setActiveSubMenu(null);
            setCollapsed(false);
          }}
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
