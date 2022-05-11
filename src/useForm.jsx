import { useState } from "react";
export const useForm = (initialValues, submitAssignment) => {
  const [formData, updateFormData] = useState(initialValues);
  console.log("useForm called");
  const handleChangeInput = (event) => {
    console.log("handle change function called");
    updateFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    submitAssignment(event);
  };
  return { formData, handleChangeInput, onFormSubmit };
};
export default useForm;
