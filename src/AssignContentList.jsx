import React, { useEffect, useState } from "react";
import AssignContentDetailsCard from "./AssignContentDetailsCard";
import ListLayout from "./ListLayout";
import axios from "axios";
import { Link } from "react-router-dom";
import { assignmentData } from "./metaData/AssignmentData";
function AssignContentList(props) {
  const [assignData, updateAssignmentData] = useState([]);

  useEffect(() => {
    updateAssignmentData(assignmentData);
  }, []);
  console.log("assignData ", assignData);
  return (
    <>
      <ListLayout>
        {assignData.map((item) => (
          <AssignContentDetailsCard
            key={item}
            pass={item}
          ></AssignContentDetailsCard>
        ))}
      </ListLayout>
    </>
  );
}
export default AssignContentList;
