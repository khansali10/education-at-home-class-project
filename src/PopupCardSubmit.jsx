import axios from "axios";
import React, { useState } from "react";
import { string } from "yup";
import Button from "./Button";
import useForm from "./useForm";
function PopupCardSubmit({ id }, props) {
  let isUrlValid = false;
  const [errorMsg, setErrorMsg] = useState("");
  const submitAssignment = (event) => {
    console.log(formData);
    try {
      const websiteValidator = string()
        .url("url is not valid")
        .matches(
          /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
          "Enter correct url!"
        )
        .required("Please enter website");
      isUrlValid = websiteValidator.isValidSync(formData.submission_url);
      console.log("isUrlValid ", isUrlValid);

      websiteValidator.validateSync(formData.submission_url);
      const data = formData.submission_url;
      console.log("data ", data);
      axios
        .put(
          `https://api.codeyogi.io/assignment/${id}/submit`,

          { submissionLink: data },
          { withCredentials: true }
        )
        .then((Response) => {
          console.log(data);
        });
      setErrorMsg("");
    } catch (e) {
      console.log("unsuccessful");

      setErrorMsg(e.message);

      return;
    }
  };
  const { formData, handleChangeInput, onFormSubmit } = useForm(
    { submission_url: " " },
    submitAssignment
  );

  return (
    <>
      <div className="min-h-screen w-full flex justify-center items-center fixed top-0 left-0 p-5 backdrop-opacity-30 backdrop-invert">
        <div className="absolute top-0 right-0 p-5">
          <button theme="secondary">Back</button>
        </div>
        <div className=" w-4/6 bg-white opacity-100 rounded-lg px-3 py-7  bg-blur text-sm text-slate-500">
          <div>
            <div className="py-5 border-y border-y-slate-200  flex justify-between items-center">
              <form
                onSubmit={onFormSubmit}
                method="POST"
                className=" flex w-full  items-center"
              >
                <label className="font-semibold w-1/4" htmlFor="submission_url">
                  Submission Link
                </label>
                <input
                  type="text"
                  name="submission_url"
                  value={formData.submission_url}
                  id="submission_url"
                  className="w-3/4 p-3 border border-slate-400 bg-slate-50 placeholder:text-lg"
                  placeholder="Submission Link"
                  onChange={handleChangeInput}
                />
                <Button type="submit">Submit</Button>
              </form>
            </div>
            <div className="text-red-600  h-12 text-center">
              {errorMsg && errorMsg}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PopupCardSubmit;
