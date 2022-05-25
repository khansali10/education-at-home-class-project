import React, { createContext, useEffect, useState } from "react";
import { BiLinkExternal } from "react-icons/bi";
import { Link, Routes, Route } from "react-router-dom";
import { BsCheckCircle } from "react-icons/bs";
import PopupCardSubmit from "./PopupCardSubmit";
import { DateTime } from "luxon";
import AssignDetail from "./AssignDetail";

// import { useFormikContext, Formik, Form, Field } from "formik";
// export const popup = { submitPopup, updateSubmitPopup };

function AssignContentDetailsCard(params) {
  const [submitPopup, updateSubmitPopup] = useState(false);
  const { id, title, due_date, created_at, submissions } = params.pass;
  const [showSubmissionButton, updateShowSubmissionButton] = useState(false);
  const [submitButton, changeSubmitButton] = useState("Submit");
  const [isSubmitted, changeIsSubmitted] = useState(
    <span className="text-red-600 font-semibold">Not-Submitted</span>
  );
  //PoPUP view Context

  const [href, updateHref] = useState("");
  useEffect(() => {
    submissions.map((item) => {
      updateHref(item.submission_link);
    });
  }, []);
  useEffect(() => {
    if (submissions.length === 0) {
      updateShowSubmissionButton(false);
    } else {
      changeIsSubmitted(
        <span className="text-green-600 font-semibold">Submitted</span>
      );
      changeSubmitButton("Re-Submit");
      updateShowSubmissionButton(true);
    }
  }, []);

  //Date and time format
  const createdDate = DateTime.fromISO(created_at);
  const createdAt = createdDate.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);
  const date = DateTime.fromISO(due_date);
  const dueDate = date.toLocaleString(DateTime.DATETIME_MED);

  return (
    <>
      <div className="w-full px-3 py-2 bg-white rounded-md shadow-lg mb-4">
        <Link to={`/assignment/${id}/assignmentdetail`}>
          <div className="flex justify-between items-center ">
            <div className="flex flex-col ">
              <div className="font-semibold">
                <span>#</span>
                {id}
                <span className="ml-1">{title}</span>
                <span className="text-slate-500 ml-3">({createdAt})</span>
              </div>
              <span className="mt-2 text-stale-300">Due Date: {dueDate}</span>
            </div>
            <div>{isSubmitted}</div>
          </div>
        </Link>
        <div className="flex items-center mt-4 divide-x">
          <button
            className="w-full p-4 flex justify-center items-center text-green-600 font-semibold bg-white"
            onClick={() => updateSubmitPopup(true)}
          >
            <BsCheckCircle className="w-6 h-6 mr-2 inline" /> {submitButton}
          </button>
          {showSubmissionButton && (
            <div className="text-center text-indigo-500 font-semibold mt-2 w-full bg-red-200 flex">
              <a href={href} target="_blank" className="p-4 w-full bg-white">
                <BiLinkExternal className="inline w-6 h-6 mr-2" />
                Show Your Submission
              </a>
            </div>
          )}
        </div>
      </div>
      <div>{submitPopup && <PopupCardSubmit id={id} />}</div>
    </>
  );
}
export default AssignContentDetailsCard;
