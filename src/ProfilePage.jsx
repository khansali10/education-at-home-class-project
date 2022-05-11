import React from "react";
import Profile from "./Profile";
export default function ProfilePage() {
  const myData = {
    id: 280,
    first_name: "Sachin",
    last_name: "khansali",
    email: "sachinkhansali200@gmail.com",
    remember_me_token: null,
    active: false,
    role: "student",

    created_at: "2021-12-15T13:34:56.705+00:00",
    updated_at: "2022-04-26T09:37:29.292+00:00",
    institute_id: 5,
    institute_roll_no: "20014052004",
    branch: "Computer Science and Engineering",
    year_of_pass_out: 2022,
    meta: {},
    date_of_birth: "2000-08-11T00:00:00.000Z",
    work_device: "Personal Computer/Laptop",
    phone_no: "8392999013",
    deleted_at: null,
    institute_name: "Government Polytechnic Srinagar Garhwal",
    tags: [],
  };
  return (
    <>
      <Profile myData={myData}></Profile>
    </>
  );
}
