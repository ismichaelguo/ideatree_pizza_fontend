import React from "react";
import "./admin-user.scss";

export default function Pagination(props) {
  const { pageUpdate, currentPage, pageSize, totalPages } = props;

  let pageArray = [];
  for (let i = 0; i < totalPages; i++) {
    pageArray.push(i + 1);
  }

  const handleNextPage = () => {
    pageUpdate(currentPage + 1, pageSize);
  };
  const handlePrevPage = () => {
    pageUpdate(currentPage - 1, pageSize);
  };
  const handleUniqPage = (index) => {
    pageUpdate(index, pageSize);
  };

  const checkFirstPage = (currentPage) => {
    return currentPage === 1 ? (
      <li className="cursor-disabled">Pre</li>
    ) : (
      <li onClick={handlePrevPage}>Pre</li>
    );
  };

  const checkLastPage = (currentPage) => {
    return currentPage === pageArray.length ? (
      <li className="cursor-disabled">Next</li>
    ) : (
      <li onClick={handleNextPage}>Next</li>
    );
  };

  const checkUniqPage = pageArray.map((page) => {
    return page === currentPage ? (
      <li key={page} className="active" onClick={() => handleUniqPage(page)}>
        {page}
      </li>
    ) : (
      <li key={page} onClick={() => handleUniqPage(page)}>
        {page}
      </li>
    );
  });

  return (
    <div className="admin-user-page__table-pagination">
      {checkFirstPage(currentPage)}
      {checkUniqPage}
      {checkLastPage(currentPage)}
    </div>
  );
}
