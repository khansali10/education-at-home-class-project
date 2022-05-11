import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function MainLayout() {
  return (
    <>
      <div className="flex  grow">
        <div className="sticky top-0 bg-indigo-800">
          <Sidebar />
        </div>
        <div className="px-12 py-16 grow bg-slate-100 ">
          <Outlet />
        </div>
      </div>
    </>
  );
}
export default MainLayout;
