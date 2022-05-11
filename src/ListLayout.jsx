import React from "react";
function ListLayout(props) {
  return (
    <div className=" w-full px-12 sm:py-5 xl:px-36 space-y-5">
      {props.children}
    </div>
  );
}
export default ListLayout;
