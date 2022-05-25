import React, { useEffect, useState } from "react";
import LectureDetailsCard from "./LectureDetailsCard";
import axios from "axios";
import ListLayout from "./ListLayout";

function LectureContentList() {
  const [lectureData, updateLectureData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.codeyogi.io/batches/1/sessions", {
        withCredentials: true,
      })
      .then((response) => {
        updateLectureData(response.data);
      });
  }, []);
  return (
    <>
      <ListLayout>
        {lectureData.map((item) => (
          <LectureDetailsCard pass={item} key={item.id}></LectureDetailsCard>
        ))}
      </ListLayout>
    </>
  );
}
export default LectureContentList;
