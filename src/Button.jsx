import React from "react";
function Button({ type, onclick, children, theme }) {
  let className;
  if (theme === "secondary") {
    className = "bg-slate-200  hover:bg-slate-300 text-black";
  } else {
    className = "bg-indigo-600 hover:bg-indigo-700 text-white";
  }
  return (
    <>
      <button
        type={"text" || { type }}
        onClick={onclick}
        className={"px-4 py-2 font-semibold rounded-md " + className}
      >
        {children}
      </button>
    </>
  );
}
export default Button;
