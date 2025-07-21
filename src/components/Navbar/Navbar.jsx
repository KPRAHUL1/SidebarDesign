import { Grid2X2, Menu, Moon, Sun, User } from "lucide-react";

const Navbar = ({ toggleSidebar, isDark, toggleTheme }) => {
  return (
    <nav className="bg-white shadow-sm border-b px-4 lg:px-6 py-3">
      <div className="flex items-center justify-between">

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          >
            <Menu size={20} />
          </button>
          
       
          <div className="flex items-center space-x-2 lg:hidden">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="font-bold text-xl text-blue-600">RORIRI</span>
          </div>
        </div>


        <div className="flex items-center space-x-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <Grid2X2 size={20} />
          </button>
          
          <div className="flex items-center space-x-2 pl-2 border-l">
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
              <User size={16} className="text-white" />
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-medium text-gray-900">Admin</div>
              <div className="text-xs text-gray-500">Admin</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;