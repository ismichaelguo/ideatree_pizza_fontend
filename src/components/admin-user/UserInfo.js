import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./admin-user.scss";

export default function UserInfo(props) {
  const { users } = props;
  return (
    <>
      {users.map((user) => (
        <div className="table-content" key={user._id}>
          <span>{user.name}</span>
          <span>{user.email}</span>
          <span>{user.phone}</span>
          <span className="icon">
            <FontAwesomeIcon icon={faTrashAlt} />
          </span>
        </div>
      ))}
    </>
  );
}
