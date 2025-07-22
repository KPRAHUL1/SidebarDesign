import {
  Menu,
  Sun,
  Moon,
  LayoutGrid,
  CircleUserRound,
  X,
} from "lucide-react";

const Navbar = ({ toggleSidebar, collapsed }) => {
  return (
    <nav className="bg-white shadow-sm  px-4 lg:px-6 py-3">
      <div className="flex items-center justify-between">

    
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSidebar}
            className={` rounded-md hover:bg-gray-100 ${collapsed?"":"lg:hidden"}`}
          >
            <X size={20} className="text-blue-500 font-bold transition-all duration-300" />
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
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
              <Moon size={20} />
          </button>

 
          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <LayoutGrid size={20} />
          </button>

     
          <div className="flex items-center space-x-2 pl-2 border-l">
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
              <CircleUserRound size={16} className="text-white" />
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
