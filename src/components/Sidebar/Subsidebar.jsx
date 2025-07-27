import { Menu } from "lucide-react";
import { sidebarMenu } from "../../constants/sidebarData";
import { Link } from "react-router-dom";

const SubSidebar = ({ activeSubMenu, onClose }) => {
  const entityMenu = sidebarMenu.find((item) => item.label === "Entity");
  const active = entityMenu?.submenu?.find((s) => s.path === activeSubMenu);

  return (
    <aside className="w-64 bg-white relative shadow-md transition-all duration-300">
      <div className="flex justify-between items-center p-2 text-blue-500 shadow-sm">
        <h2 className="font-semibold">{active?.label}</h2>
        <button onClick={onClose} className="cursor-pointer">
          <Menu />
        </button>
      </div>
      <nav className="p-2 space-y-2">
        {active?.submenu?.map((sub) => (
          <Link
            key={sub.label}
            to={`/entity/${activeSubMenu}/${sub.path}`}
            className="block px-2 py-1 hover:bg-gray-100 rounded"
            onClick={() => {
              // Close the subsidebar when navigating
              onClose();
            }}
          >
            <span className="flex gap-3 items-center hover:text-blue-500">
              {sub.icon && <sub.icon className="h-4 w-4" />}
              {sub.label}
            </span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default SubSidebar;