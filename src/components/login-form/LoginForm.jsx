import React, { Component } from "react";
import "./login-form.scss";
import { Link, withRouter } from "react-router-dom";
import {
  getUsername,
  getPassword,
  getLoginInf,
} from "../../redux/actions/index";
import axios from 'axios';
import { connect } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div`
  @media only screen and (max-width: 399px) {
    width: 10%;
  }
`;

const BtnFacebook = styled.button`
  width: 300px;
  height: 40px;
  border-radius: 15px;
  background: #3b5998;
  color: white;
  border: 0px transparent;
  text-align: center;
  margin: 10px;
  display: inline-block;

  &:hover {
    background: #3b5998;
    opacity: 0.6;
  }
`;
const BtnGoogle = styled.button`
  margin: 10px;
  width: 300px;
  height: 40px;
  border-radius: 15px;
  background: #db3236;
  color: white;
  border: 0px transparent;
  text-align: center;

  &:hover {
    background: #3b5998;
    opacity: 0.6;
  }
`;
const BtnPaypal = styled.button`
  margin: 10px;
  width: 300px;
  height: 40px;
  border-radius: 15px;
  background: #1b9ef5;
  color: white;
  border: 0px transparent;
  text-align: center;

  &:hover {
    background: #3b5998;
    opacity: 0.6;
  }
`;

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

  getLoginInf = (e, props) => {
    e.preventDefault();
    if(this.props.userName!==undefined && this.props.logPassword!==undefined){
        axios({
            "method":"POST",
            "url":"http://localhost:8080/user/login",
            "header":{'Content-type':'application/json'},
            "data":{
                "email":this.props.userName,
                "password":this.props.logPassword,
            }
        }).then(res=>res.data.token)
        .then((data)=>{
            localStorage.setItem('Authorization',`Bearer ${data}`);
            if (data !== null) {
                this.props.getLoginInf({
                  status: !this.props.status,
                });
                const { cartItems } = this.props;
          
                if (cartItems.length !== 0) {
                  const HISTORY = this.props.history;
                  alert("Log in successful!");
                  HISTORY.replace("/menu/detail/:id/order-type");
                } else {
                  const HISTORY = this.props.history;
                  alert("Log in successful!");
                  HISTORY.replace("/menu");
                }
              } else {
                alert("Invalid username or password!");
              }
            
        }).catch(err=>{
            console.log("err",err)
            alert("Invalid username or password!");

        })
    }
  };

  componentDidMount(){
      console.log("name!!!",this.props.signPassword)
      if(this.props.name){
        axios({
            "method":"POST",
            "url":"http://localhost:8080/user/signup",
            "header":{'Content-Type':'application/json'},
            "data":{
                "email":this.props.email,
                "name":this.props.name,
                "password":this.props.signPassword,
                "phone":this.props.phoneNumber,
            }
        }).then(res=>console.log("respond",res))
        .catch(err=>console.log("err",err))
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

            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <Wrapper>
                <BtnFacebook
                  style={{ width: "400px", height: "60px", fontSize: "1.5rem" }}
                >
                  &nbsp;&nbsp;Sign In with Facebook
                </BtnFacebook>
                <br />
                <BtnGoogle
                  style={{ width: "400px", height: "60px", fontSize: "1.5rem" }}
                >
                  &nbsp;&nbsp;Sign In with Google
                </BtnGoogle>
                <br />
                <BtnPaypal
                  style={{ width: "400px", height: "60px", fontSize: "1.5rem" }}
                >
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
    email:SignUpForm.email,
    name:SignUpForm.name,
    phoneNumber:SignUpForm.phoneNumber,
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
