import React from "react";
import { Link } from "react-router-dom";
import "./account-page.scss";
import LoginForm from "../../components/login-form/LoginForm";
import { FcManager } from "react-icons/fc";

const AccountPage = (props) => {
  return (
    <div className="pageContainer">
      <header className="pageContainer__banner">
        <Link to="./menu"></Link>
        <div>My Account</div>
      </header>
      <section>
        <LoginForm />
      </section>
      <Link to="/admin" className="pageContainer__admin">
        <p>
          <FcManager />
        </p>
        <h4>Login as Admin</h4>
      </Link>
    </div>
  );
};

export default AccountPage;
