import React, { Component} from "react";
import "./login-form.scss";
import { Link, withRouter } from "react-router-dom";
import {
  getUsername,
  getPassword,
  getLoginInf,
} from "../../redux/actions/index";
import { connect } from "react-redux";
import styled from "styled-components";
import axiosInstance from "../../api/axiosInstance";

const Wrapper = styled.div``;
const BtnFacebook = styled.button``;
const BtnGoogle = styled.button``;
const BtnPaypal = styled.button``;

class LoginForm extends Component {
  getUsername = (e) => {
    this.props.getUsername({
      userName: e.target.value,
    });
  };

  getPassword = (e) => {
    this.props.getPassword({
      logPassword: e.target.value,
    });
  };

  getLoginInf = (e) => {
    e.preventDefault();
    console.log("ax", axiosInstance);
    if (
      //only if the user input the username and password
      this.props.userName !== undefined &&
      this.props.logPassword !== undefined
    ) {
      axiosInstance({
        url: "/user/login",
        method: "POST",
        headers: { "Content-type": "application/json" },
        data: {
          email: this.props.userName,
          password: this.props.logPassword,
        },
      })
        .then((res) => res.data)
        .then((data) => {
          //store order history, user id into session storage, store token into local storage
          window.sessionStorage.setItem("OrderHistory", data.order);
          window.sessionStorage.setItem(data.user, data.id);
          localStorage.setItem("Authorization", `Bearer ${data.token}`);
          //log in status -> true when request successful
          if (data !== null) {
            this.props.getLoginInf({
              status: !this.props.status,
            });

            const HISTORY = this.props.history;
            alert("Log in successful!");
            HISTORY.replace("/menu/detail/:id/order-type");
          } else {
            alert("Invalid username or password!");
          }
        })
        .catch((err) => {
          console.log("err", err);
          alert("Invalid username or password!");
        });
    }
  };

  componentDidMount() {
    //post request to store user inf to mongodb after sign up successful
    if (this.props.name) {
      axiosInstance({
        url: "/user/signup",
        method: "POST",
        headers: { "Content-type": "application/json" },
        data: {
          email: this.props.email,
          name: this.props.name,
          phone: this.props.phoneNumber,
          password: this.props.signPassword,
        },
      })
        .then((res) => console.log("respond", res))
        .catch((err) => console.log("err", err));
    }
  }

  render() {
    return (
      <div className="login-form">
        <div className="form-header">
          <div className="form-header_row-1">LOG IN</div>
          <div className="form-header_row-2">
            <span className="form-header_row-2_thin">
              DON'T HAVE A DOMINO'S ACCOUNT?
            </span>
            <span>
              <Link className="form-header_row-2_link" to="/account/sign-up">
                SIGN UP
              </Link>
            </span>
          </div>
        </div>

        <div className="form-container">
          <div className="form-section left">
            <div className="field-container">
              <h2>
                <span className="field-container_thin">LOG IN </span>WITH EMAIL
              </h2>
            </div>

            <section>
              <div className="field-container input-group">
                <label htmlFor="email" className="field-container_form-label">
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  className="field-container_login-input"
                  // value="username"
                  onChange={this.getUsername}
                />
              </div>

              <div className="field-container input-group">
                <label
                  htmlFor="password"
                  className="field-container_form-label"
                >
                  PASSWORD
                </label>
                <Link id="forgot-password-link" to="">
                  Forgot password?
                </Link>
                <input
                  type="password"
                  name="password"
                  className="field-container_login-input"
                  // value="password"
                  onChange={this.getPassword}
                />
              </div>

              <div className="field-container">
                <input type="checkbox" name="checkbox" />
                <label htmlFor="checkbox">Keep me logged in</label>
              </div>
            </section>
            <br />

            <div>
              <button onClick={this.getLoginInf} className="login-btn">
                LOG IN
              </button>
            </div>
          </div>

          <div className="form-divider">
            <div>OR</div>
          </div>

          <div className="form-section right">
            <div className="field-container">
              <h2>
                <span className="field-container_thin">LOG IN </span>WITH SOCIAL
                MEDIA
              </h2>
            </div>

            {/* <div>
                                    <GoogleBtn/>
                                </div> */}
            <br />

            <div className="socialMedias">
              <Wrapper>
                <BtnFacebook className="socialMedias__fb">
                  &nbsp;&nbsp;Sign In with Facebook
                </BtnFacebook>
                <br />
                <BtnGoogle className="socialMedias__google">
                  &nbsp;&nbsp;Sign In with Google
                </BtnGoogle>
                <br />
                <BtnPaypal className="socialMedias__payPal">
                  &nbsp;&nbsp;Sign In with Paypal
                </BtnPaypal>
              </Wrapper>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loginInf } = state;
  const { SignUpForm } = state;

  return {
    userName: loginInf.userName,
    logPassword: loginInf.logPassword,
    status: loginInf.status,
    cartItems: state.cartReducer.cartItems,
    email: SignUpForm.email,
    name: SignUpForm.name,
    phoneNumber: SignUpForm.phoneNumber,
    signPassword: SignUpForm.signPassword,
  };
}

const mapActionsToProps = {
  getLoginInf,
  getUsername,
  getPassword,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withRouter(LoginForm));
