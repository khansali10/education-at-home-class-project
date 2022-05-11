import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PopupCardSubmit from "./PopupCardSubmit";
import { DateTime } from "luxon";
import AssignmentDetailSingleRow from "./AssignmentDetailSingleRow";
import Button from "./Button";
import { BiLinkExternal } from "react-icons/bi";
import { assignmentData } from "./metaData/AssignmentData";

function AssignDetail(props) {
  const [submitPopup, updateSubmitPopup] = useState(false);
  const data = useParams();

  const [assignmentDetails, updateAssignmentDetails] = useState([]);
  const [href, updateHref] = useState("");
  let submitButton = "submit";
  //API request
  useEffect(() => {
    updateAssignmentDetails(assignmentData);
    for (let i = 0; i < assignmentDetails.length; i++) {
      if (assignmentDetails[i].submissions.length !== 0) {
        submitButton = "Re-Submit";
      }
    }
    updateHref(assignmentDetails.map((item) => item.submission_link));
  }, []);
  console.log("assignmentData ", assignmentData);
  console.log("assignmentDetails ", assignmentDetails);
  const due_date = DateTime.fromISO(assignmentDetails.due_date).toLocaleString(
    DateTime.DATE_MED_WITH_WEEKDAY
  );
  return (
    <>
      <div className=" py-2 border-b border-b-slate-200">
        <div className="px-4 py-4 bg-white rounded-md w-full">
          <h4 className="text-lg font-semibold  pb-3">Assignment Details</h4>
          <AssignmentDetailSingleRow
            data={assignmentDetails.title}
            tag="Title"
          />
          <AssignmentDetailSingleRow data={due_date} tag="Due Date" />
          <AssignmentDetailSingleRow
            data={assignmentDetails.description}
            tag="Description"
          />
          <div className="flex justify-between items-center p-5">
            <div className=" p-2">
              <Button theme="primary" onclick={updateSubmitPopup}>
                {submitButton}
              </Button>
            </div>
            {/* {showSubmissionButton && (
              <div className="text-center text-indigo-500 font-semibold p-2  ">
                <a href={href} target="_blank" className="p-5">
                  <BiLinkExternal className=" w-6 h-6 inline" />
                  Show Your Submission
                </a>
              </div>
            )} */}
          </div>
        </div>
        <div>
          {submitPopup && (
            <PopupCardSubmit
              id={data.id}
              // submitPopup={submitPopup}
              // updateSubmitPopup={updateSubmitPopup}
            />
          )}
        </div>
      </div>
    </>
  );
}
export default AssignDetail;
