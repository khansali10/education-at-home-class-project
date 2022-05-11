import React from "react";
import LectureContentList from "./LectureContentList";

function LecturePage() {
  return (
    <>
      <h2 className="font-semibold pb-5 text-xl">Lecture List</h2>
      <div className="bg-slate-50 ">
        <LectureContentList />
      </div>
    </>
  );
}
export default LecturePage;
