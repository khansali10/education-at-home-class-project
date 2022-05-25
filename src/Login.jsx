import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className=" ">
        <Link to={"/student"}>
          <h1>Student login</h1>
        </Link>

        <Link to={"/admin"}>
          <h1>Admin login</h1>
        </Link>
      </div>
    </>
  );
}

export default Login;
