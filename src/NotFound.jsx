import React from "react";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-900 grow">
      <Link to="/" className="">
        <div className="bg-[linear-gradient(90deg,white,red,red)] p-1">
          <div className="bg-slate-900 p-5">
            <span className="text-5xl font-semibold mr-3 text-[red]">
              SOMETHING IS BROKEN
            </span>

            <span className="text-white">click to go to Lectures</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
export default NotFound;
