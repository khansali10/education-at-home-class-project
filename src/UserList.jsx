import React, { useState, useCallback, useEffect } from "react";
import ListLayout from "./ListLayout";
import UserDetail from "./UserDetail";
import axios from "axios";
function UserList() {
  const [allUserData, updateAllUserData] = useState([]);
  useEffect(() => {
    const token = axios.get("https://randomuser.me/api/?results=10");
    token.then((response) => {
      updateAllUserData(response.data.results);
    });
  }, []);

  return (
    <>
      <ListLayout>
        {allUserData.map((item) => (
          <UserDetail userDetail={item} key={item.login.username} />
        ))}
      </ListLayout>
    </>
  );
}
export default UserList;
