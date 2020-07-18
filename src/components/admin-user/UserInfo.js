import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import axiosInstance from "../../api/axiosInstance";
import "./admin-user.scss";

export default function UserInfo(props) {
  const { users, pageUpdate, currentPage, pageSize } = props;
  const classTrigger = useRef();

  const handleDelete = (id) => {
    axiosInstance({
      url: `/user/${id}`,
      method: "DELETE",
    })
      .then((res) => {
        console.log("res.data", res);
        pageUpdate(currentPage, pageSize);
      })
      .catch((err) => console.log("err", err));
  };

  const handleAddClass = () => {
    classTrigger.current.classList.toggle("show");
  };
  const handleRemoveClass = () => {
    classTrigger.current.classList.remove("show");
  };

  return (
    <>
      {users.map((user) => (
        <div className="admin-user-page__table-content" key={user._id}>
          <span>{user.name}</span>
          <span>{user.email}</span>
          <span>{user.phone}</span>
          <span className="icon" onClick={handleAddClass}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </span>
          <div className="popup-window" ref={classTrigger}>
            <FontAwesomeIcon
              icon={faTimesCircle}
              className="closeIcon"
              onClick={handleRemoveClass}
            />
            <div className="content">
              <p>Are you sure you want to delete this user</p>
              <div className="button">
                <button onClick={() => handleDelete(user._id)}>Yes</button>
                <button onClick={handleRemoveClass}>No</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
