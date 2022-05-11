import React, { useState } from "react";
import UserDetailCard from "./UserDetailCard";

function UserDetail({ userDetail } = props) {
  return (
    <>
      <div className=" inline-block ml-2">
        <UserDetailCard
          profilePicture={userDetail.picture.large}
          title={userDetail.name.title}
          firstName={userDetail.name.first}
          lastName={userDetail.name.last}
          email={userDetail.email}
          phone={userDetail.phone}
          city={userDetail.location.city}
          twitterIcon="twitter_logo_in_userDetail.webp"
          linkdinIcon="linkdin_logo_in_userDetail.webp"
        />
      </div>
    </>
  );
}
export default UserDetail;
