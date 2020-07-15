import React from "react";
import { Link } from "react-router-dom";
import "./thanks-page.scss";

const ThanksPage = (props) => {
  return (
    <>
      <div className="pageContainer">
        <header className="pageContainer__banner">
          <Link to="/"></Link>
          <div>Thanks</div>
        </header>
        <div className="pageContainer__content">
          <p>Thanks for your ordering!</p>
        </div>
      </div>
    </>
  );
};

export default ThanksPage;
