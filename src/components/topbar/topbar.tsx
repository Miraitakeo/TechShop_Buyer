import React from "react";
import { Bell, User, Menu } from "lucide-react";

interface TopbarProps {
  toggleSidebar: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ toggleSidebar }) => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow px-4 py-3 flex items-center justify-between">
      {/* Sidebar Toggle (for mobile) */}
      <button
        onClick={toggleSidebar}
        className="md:hidden text-gray-500 dark:text-gray-300"
      >
        <Menu size={24} />
      </button>

      {/* Page Title or Logo */}
      <div className="text-xl font-semibold text-gray-800 dark:text-white">
        Dashboard
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-4">
        {/* Notification Bell */}
        <button className="relative text-gray-600 dark:text-gray-300 hover:text-gray-900">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
            3
          </span>
        </button>

        {/* Profile Avatar */}
        <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-white">
          <User size={18} />
        </div>
      </div>
    </header>
  );
};

export default Topbar;
