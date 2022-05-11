import React, { useState } from "react";
import axios from "axios";
import { DateTime } from "luxon";
import { useFormik } from "formik";

function Profile({ myData }) {
  const initialValues = myData;
  //submit profile form
  const SubmitProfileForm = () => {
    console.log("form submitted");
    //code for submitting profile form
  };
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues,
    SubmitProfileForm,
  });
  const lableClassName = "text-sm font-semibold text-slate-500";
  //have not correct date yet
  // console.log("children ", props.children);
  // const date_of_birth = DateTime.fromISO(values.date_of_birth).toLocaleString();
  // const birthDate = DateTime.fromFormat(date_of_birth, "MMMM d yyyy");
  // console.log("birthDate ", birthDate);
  return (
    <>
      <div className=" flex-col bg-white divide-y py-2 px-4	 rounded-md">
        <h3 className="font-semibold text-lg p-3">Personal details</h3>
        <form onSubmit={handleSubmit}>
          <div className="p-7 flex justify-between items-center">
            <label className={lableClassName} htmlFor="first_name">
              First Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              onChange={handleChange}
              value={values.first_name}
              required
              id="first_name"
              placeholder="first name"
              className="w-4/6 rounded-md p-3 bg-slate-50 border border-slate-300"
            ></input>
          </div>
          <div className="p-7 flex justify-between items-center">
            <label className={lableClassName} htmlFor="last_name">
              Last Name
              <span className="text-red-500 block">
                (Skip only if you don't have it in official documents)
              </span>
            </label>
            <input
              type="text"
              onChange={handleChange}
              value={values.last_name}
              id="last_name"
              placeholder="last name"
              className="w-4/6 rounded-md p-3 bg-slate-50 border border-slate-300"
            />
          </div>
          <div className="p-7 flex justify-between items-center">
            <label className={lableClassName} htmlFor="email">
              Email address
            </label>
            <input
              type="email"
              onChange={handleChange}
              value={values.email}
              id="email"
              className="w-4/6 rounded-md p-3 bg-slate-50 border border-slate-300"
            />
          </div>
          <div className="p-7 flex justify-between items-center">
            <label className={lableClassName} htmlFor="institute_name">
              Institute Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              onChange={handleChange}
              value={values.institute_name}
              id="institute_name"
              required
              className="w-4/6 rounded-md p-3 bg-slate-50 border border-slate-300"
            />
          </div>
          <div className="p-7 flex justify-between items-center">
            <label className={lableClassName} htmlFor="year_of_pass_out">
              Year Of Passout
            </label>
            <input
              type="text"
              onChange={handleChange}
              value={values.year_of_pass_out}
              id="year_of_pass_out"
              placeholder="YYYY"
              className="w-4/6 rounded-md p-3 bg-slate-50 border border-slate-300"
            />
          </div>
          <div className="p-7 flex justify-between items-center">
            <label className={lableClassName} htmlFor="phone_no">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              onChange={handleChange}
              value={values.phone_no}
              required
              placeholder="mobile"
              className="w-4/6 rounded-md p-3 bg-slate-50 border border-slate-300"
            />
          </div>
          {/* <div className="p-7 flex justify-between items-center">
            <label className={lableClassName} htmlFor="">
              Date Of Birth<span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              onChange={handleChange}
              value={birthDate}
              required
              placeholder="dd/mm/yyyy"
              className="w-4/6 rounded-md p-3 bg-slate-50 border border-slate-300"
            />
          </div> */}
          <div className="p-7 flex justify-between items-center">
            <label className={lableClassName} htmlFor="work_device">
              Device you are using to do your assignments
              <span className="text-red-500">*</span>
            </label>
            <select
              required
              onChange={handleChange}
              value={values.work_device}
              name="work_device"
              className="w-4/6 rounded-md p-3 bg-slate-50 border border-slate-300"
            >
              <option>Mobile without Computer</option>
              <option>Mobile with Keyboard</option>
              <option>College Computer/Laptop</option>
              <option>Personal Computer/Laptop</option>
            </select>
          </div>
          <div className="p-7 flex justify-between items-center">
            <label className={lableClassName} htmlFor="institute_roll_no">
              Institute roll no.
            </label>
            <input
              type="text"
              onChange={handleChange}
              value={values.institute_roll_no}
              name="institute_roll_no"
              placeholder="roll number"
              className="w-4/6 rounded-md p-3 bg-slate-50 border border-slate-300"
            />
          </div>
          <div className="p-7 flex justify-between items-center">
            <label className={lableClassName} htmlFor="branch">
              Branch
            </label>
            <input
              type="text"
              onChange={handleChange}
              value={myData.branch}
              name="branch"
              placeholder="e.g. IT"
              className="w-4/6 rounded-md p-3 bg-slate-50 border border-slate-300"
            />
          </div>
          <div className="py-6 flex justify-between items-center">
            <button
              type="submit"
              className="py-2 px-8 bg-indigo-600 text-white font-semibold rounded-md "
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Profile;
