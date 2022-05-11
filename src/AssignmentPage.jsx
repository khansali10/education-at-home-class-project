import React from "react";
import AssignContentList from "./AssignContentList";

function AssignmentPage() {
  return (
    <>
      <h2 className="font-semibold pb-5 text-xl">Assignment List</h2>
      <div className="bg-slate-50">
        <AssignContentList />
      </div>
    </>
  );
}
export default AssignmentPage;
