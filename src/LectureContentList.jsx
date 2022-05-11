import React, { useEffect, useState } from "react";
import LectureDetailsCard from "./LectureDetailsCard";
import axios from "axios";
import ListLayout from "./ListLayout";
import { lectureData } from "./metaData/LectureData";

function LectureContentList() {
  const [sessionData, updateSessionData] = useState([]);
  useEffect(() => {
    updateSessionData(lectureData);
  }, []);
  return (
    <>
      <ListLayout>
        {sessionData.map((item) => (
          <LectureDetailsCard pass={item} key={item.id}></LectureDetailsCard>
        ))}
      </ListLayout>
    </>
  );
}
export default LectureContentList;
