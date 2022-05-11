import React from "react";
import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { MdOutlineWatchLater } from "react-icons/md";
import WebsiteTitle from "./WebsiteTitle";
function QuizPage(params) {
  return (
    <>
      <div className="flex flex-col  h-screen grow bg-white">
        <div className="py-1 px-16 bg-gray-800 flex justify-between items-center text-white text-md">
          <div className="space-x-3 flex">
            <Link
              to="/lecture"
              className="font-semibold inline px-2 border-r-2 border-r-white"
            >
              <WebsiteTitle />
            </Link>
            <span className="">Welcome, {params.username}</span>
          </div>
          <div className="flex space-x-2">
            <span className="p-3 flex items-center bg-blue-700">
              <div className="text-xl  mr-2">
                <MdOutlineWatchLater />
              </div>
              00:00
            </span>
            <Link to="/logout" className="flex items-center bg-blue-700 p-3">
              <div className="text-xl  mr-2">
                <BiLogOut />
              </div>{" "}
              Logout
            </Link>
          </div>
        </div>
        <div className="text-black place-self-center">No Active Questions</div>
      </div>
    </>
  );
}
export default QuizPage;
