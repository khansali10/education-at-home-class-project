import React from "react";
import ReactMarkdown from "react-markdown";
function AssignmentDetailSingleRow(props) {
  return (
    <>
      <div className="border-y border-y-slate-200 py-5 flex justify-between">
        <span className="font-semibold text-slate-500 text-sm w-1/3">
          {props.tag}
        </span>
        <span className="grow  w-2/3">
          <ReactMarkdown>{props.data}</ReactMarkdown>
        </span>
      </div>
    </>
  );
}
export default AssignmentDetailSingleRow;
