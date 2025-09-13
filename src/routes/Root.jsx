import React, { useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import LeftSide from "../components/LeftSide";

const Root = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="h-screen flex flex-col md:mx-16 lg:mx-40">
      {/* Fixed Navbar */}
      <div className="sticky top-0 z-50 bg-white">
        <Navbar
          collapsed={collapsed}
          onToggleSidebar={() => setCollapsed(!collapsed)}
        />
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`${
            collapsed ? "w-20" : "w-64"
          }  h-full sticky top-0`}
        >
          <LeftSide collapsed={collapsed} />
        </aside>

        {/* Main content */}
        <main className="flex-1 h-full overflow-y-auto p-4 scrollbar-hide">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Root;
