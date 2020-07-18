import React from "react";
import "./admin-user.scss";

export default function UserInfo() {
  return (
    <>
      <h3>Admin User</h3>
      <div className="admin-user-page__table-title">
        <span>Name</span>
        <span>Email</span>
        <span>Phone</span>
        <span>Operation</span>
      </div>
    </>
  );
}
