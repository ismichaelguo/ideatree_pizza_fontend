import React, { useRef } from "react";
import "./admin-user.scss";

export default function Pagination(props) {
  const { pageUpdate, currentPage, pageSize, totalPages } = props;
  const classActive = useRef();
  const handleNextPage = () => {
    pageUpdate(currentPage + 1, pageSize);
  };
  const handlePrevPage = () => {
    pageUpdate(currentPage - 1, pageSize);
  };
  const handleUniqPage = (index) => {
    // classActive.current.classList.toggle("active");
    pageUpdate(index + 1, pageSize);
  };

  let pageArray = [];
  for (let i = 0; i < totalPages; i++) {
    pageArray.push(i + 1);
  }

  return (
    <div className="table-pagination">
      <li onClick={handlePrevPage}>pre</li>
      {pageArray.map((page, index) => (
        <li key={index} onClick={() => handleUniqPage(index)}>
          {page}
        </li>
      ))}
      <li onClick={handleNextPage}>Next</li>
    </div>
  );
}
