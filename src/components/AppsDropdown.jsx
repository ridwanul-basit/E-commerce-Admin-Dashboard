// AppsDropdown.jsx
import React from "react";

const apps = [
  { name: "Account", icon: "https://i.pravatar.cc/40" },
  { name: "Themewagon", icon: "https://img.icons8.com/color/48/000000/unicorn.png" },
  { name: "Mailbluster", icon: "https://img.icons8.com/fluency/48/000000/paper-plane.png" },
  { name: "Google", icon: "https://img.icons8.com/color/48/000000/google-logo.png" },
  { name: "Spotify", icon: "https://img.icons8.com/color/48/000000/spotify--v1.png" },
  { name: "Steam", icon: "https://img.icons8.com/ios-filled/50/000000/steam-logo.png" },
  { name: "Github", icon: "https://img.icons8.com/material-outlined/48/000000/github.png" },
  { name: "Discord", icon: "https://img.icons8.com/color/48/000000/discord--v2.png" },
  { name: "Xbox", icon: "https://img.icons8.com/color/48/000000/xbox.png" },
  { name: "Trello", icon: "https://img.icons8.com/color/48/000000/trello.png" },
  { name: "HP", icon: "https://img.icons8.com/color/48/000000/hp.png" },
];

const AppsDropdown = ({ open }) => {
  if (!open) return null; // ✅ Only render if open

  return (
    <div className="absolute right-0 mt-3 bg-white shadow-xl rounded-2xl p-5 w-72 grid grid-cols-3 gap-6 z-[9999]">
      {apps.map((app, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
        >
          <img src={app.icon} alt={app.name} className="w-10 h-10 rounded-md" />
          <span className="text-sm mt-2 text-gray-700 truncate">{app.name}</span>
        </div>
      ))}
    </div>
  );
};

export default AppsDropdown;
