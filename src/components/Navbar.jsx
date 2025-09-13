// Navbar.jsx
import React from "react";
import {
  Search,
  Settings,
  ShoppingCart,
  Bell,
  Grid,
  Menu,
  TextAlignStart,
} from "lucide-react";

const Navbar = ({ collapsed, onToggleSidebar }) => {
  return (
    <nav className="px-5 py-4 flex bg-[#EDF2F9] items-center justify-between z-50 sticky top-0">
      {/* Left side: Menu + Logo */}
      <div className="flex items-center space-x-6">
        {/* Menu Button */}
        <button
          onClick={onToggleSidebar}
          className="py-2 rounded-lg "
        >
          {collapsed ? (
            <TextAlignStart size={24} className="text-gray-600 " />
           
          ) : (
             <Menu size={24} className="text-gray-600" />
          )}
        </button>

        {/* Logo (hide text when collapsed) */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
  <img
    src="https://frlive.prium.me/assets/falcon-DyLXFfhF.png"
    alt="F Icon"
    className="w-full h-full object-cover"
  />
</div>

          
            <span className="text-3xl font-bold text-blue-600">falcon</span>
         
        </div>
      </div>

      {/* Search bar */}
      <div className="flex-1 max-w-lg mx-8">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search..."
            className="w-4/6 border bg-white text-lg text-gray-400 rounded-3xl pl-10 pr-8 py-2 focus:outline-none focus:ring-1 focus:ring-blue-200"
          />
        </div>
      </div>

      {/* Icons + Profile */}
      <div className="flex items-center space-x-5 text-gray-600">
        <Settings size={20} className="cursor-pointer hover:text-blue-600" />
        <ShoppingCart size={20} className="cursor-pointer hover:text-blue-600" />
        

        {/* Notification with badge */}
        <div className="relative">
          <Bell size={20} className="cursor-pointer hover:text-blue-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
            9
          </span>
        </div>

        <Grid size={20} className="cursor-pointer hover:text-blue-600" />

        {/* Profile Image */}
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-8 h-8 rounded-full cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;
