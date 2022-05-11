import React from "react";
import UserList from "./UserList";
function UserPage() {
  return (
    <>
      <h2 className="font-semibold pb-5 text-xl">Users List</h2>
      <div className="max-w-5xl bg-slate-50 flex">
        <UserList />
      </div>
    </>
  );
}
export default UserPage;
