import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { LockClosedIcon } from "@heroicons/react/solid";
import { useFormik } from "formik";
function StudentLogin() {
  const nav = useNavigate();
  const onStudentLogin = (event) => {
    const [errorMsg, setErrorMsg] = useState("");
    try {
      const idValidator = string()
        .email("email is not valid")
        .required("Please enter email");
      const passValidator = string().password("password is not valid");
      isEmailValid = idValidator.isValidSync(formData.email);
      console.log("isEmailValid ", isEmailValid);

      idValidator.validateSync(formData.email);
      isPassValid = passValidator.isValidSync(formData.password);
      console.log("isPasswordValid ", isPassValid);

      passValidator.validateSync(formData.password);
      console.log("validation ", isEmailValid);
      console.log("validation ", isPassValid);
      const data = formData.email;
      console.log("data ", data);
      if (email === "sachin@10" && password === "123") {
        console.log("login successful");
        nav("/student");
      }
      setErrorMsg("");
    } catch (e) {
      console.log("unsuccessful");

      setErrorMsg(e.message);

      return;
    }
  };

  let initialValues = {
    email: "",
    password: "",
  };
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues,
    onStudentLogin,
  });
  return (
    <>
      <div className="min-h-full flex items-center m-auto justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={handleChange}
                  value={values.email}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={handleChange}
                  value={values.password}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default StudentLogin;
