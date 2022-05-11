import React from "react";
import { Link } from "react-router-dom";

function SidebarContentLink(params) {
  return (
    <>
      <div className="">
        <Link
          to={params.linkTo}
          className="flex p-2 focus:bg-slate-900 hover:bg-slate-700 hover:text-white text-slate-300 text-sm font-semibold rounded-lg bg-slate-800"
        >
          <div className="text-2xl  mr-4">{params.icon}</div>
          {params.linkText}
        </Link>
      </div>
    </>
  );
}
export default SidebarContentLink;
