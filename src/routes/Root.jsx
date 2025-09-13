import React, { useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import LeftSide from "../components/LeftSide";

const Root = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="w-9/12 mx-auto ">
      <Navbar collapsed={collapsed} onToggleSidebar={() => setCollapsed(!collapsed)} />

      <main className="my-3 grid grid-cols-12 gap-5">
        <aside className={`${collapsed ? "col-span-2" : "col-span-4"}`}>
          <LeftSide collapsed={collapsed} />
        </aside>

        <section className={`${collapsed ? "col-span-10" : "col-span-8"}`}>
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default Root;
