import React, { useState, useRef, useEffect } from "react";
import {
  Search,
  Settings,
  ShoppingCart,
  Grid,
  Menu,
  TextAlignStart,
} from "lucide-react";
import { NavLink } from "react-router";
import NotificationBell from "./NotificationBell";
import AppsDropdown from "./AppsDropdown"; // ✅ Import dropdown

const Navbar = ({ collapsed, onToggleSidebar }) => {
  const [appsOpen, setAppsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // ✅ Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setAppsOpen(false);
      }
    };
    if (appsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [appsOpen]);

  return (
    <nav className="px-5 py-4 flex bg-[#EDF2F9] items-center justify-between z-50 sticky top-0">
      {/* Left side */}
      <div className="flex items-center space-x-6">
        <button onClick={onToggleSidebar} className="py-2 rounded-lg">
          {collapsed ? (
            <TextAlignStart size={24} className="text-gray-600" />
          ) : (
            <Menu size={24} className="text-gray-600" />
          )}
        </button>

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

      {/* Search */}
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

      {/* Right side */}
      <div className="flex items-center space-x-5 text-gray-600 relative">
        <Settings size={20} className="cursor-pointer hover:text-blue-600" />
        <NavLink to={"/shoppingCart"}>
          <ShoppingCart size={20} className="cursor-pointer hover:text-blue-600" />
        </NavLink>
        <NotificationBell />

        {/* ✅ Grid dropdown toggle */}
        <div className="relative" ref={dropdownRef}>
          <Grid
            size={24}
            className="cursor-pointer hover:text-blue-600"
            onClick={() => setAppsOpen(!appsOpen)}
          />
          <AppsDropdown open={appsOpen} />
        </div>

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
