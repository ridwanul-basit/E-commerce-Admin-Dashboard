// NotificationBell.jsx
import React, { useState, useRef, useEffect } from "react";
import { Bell } from "lucide-react";

const NotificationBell = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Bell Icon */}
      <div onClick={() => setOpen(!open)} className="cursor-pointer relative">
        <Bell size={20} className="hover:text-blue-600" />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
          9
        </span>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-3 w-80 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
          <div className="flex justify-between items-center px-4 py-2 border-b border-gray-200">
            <h3 className="font-semibold">Notifications</h3>
            <button className="text-blue-600 text-sm hover:underline">
              Mark all as read
            </button>
          </div>

          {/* Example notification */}
          <div className="px-4 py-3 flex gap-3 hover:bg-gray-50">
            <img
              src="https://via.placeholder.com/40"
              alt="User"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="text-sm">
              <p>
                <span className="font-semibold">Emma Watson</span> replied to
                your comment:{" "}
                <span className="text-gray-600">"Hello world 😍"</span>
              </p>
              <p className="text-xs text-gray-500 mt-1">💬 Just Now</p>
            </div>
          </div>

          <div className="text-center border-t border-gray-200">
            <button className="w-full py-2 text-blue-600 font-medium hover:bg-gray-50">
              View all
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
