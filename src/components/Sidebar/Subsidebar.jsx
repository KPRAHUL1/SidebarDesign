// src/components/SubSidebar.tsx
import { X } from "lucide-react";
import { sidebarMenu } from "../../constants/sidebarData";
import { Link } from "react-router-dom";

const SubSidebar = ({ activeSubMenu, onClose }) => {
  const entityMenu = sidebarMenu.find((item) => item.label === "Entity");
  const active = entityMenu?.submenu?.find((s) => s.path === activeSubMenu);

  return (
    <aside className="w-64 bg-white border-l shadow-md transition-all duration-300">
      <div className="flex justify-between items-center p-2 border-b">
        <h2 className="font-semibold">{active?.label}</h2>
        <button onClick={onClose}><X/></button>
      </div>
      <nav className="p-2 space-y-2">
        {active?.submenu?.map((sub) => (
          <Link
            key={sub.label}
            to={`/entity/${activeSubMenu}/${sub.path}`}
            className="block px-2 py-1 hover:bg-gray-100 rounded"
          >
            {sub.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default SubSidebar;
