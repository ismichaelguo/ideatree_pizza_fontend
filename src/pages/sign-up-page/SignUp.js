import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./sign-up.scss";
import SignUpForm from "../../components/sign-up-form/SignUpForm";

const AccountPage = (props) => {
  return (
    <Fragment>
      <section className="pageContainer">
        <header className="pageContainer__banner">
          <Link to="/menu"></Link>
          <div>Sign up</div>
        </header>
        <section className="pageContainer__body">
          <SignUpForm />
        </section>
      </section>
    </Fragment>
  );
};

export default AccountPage;
