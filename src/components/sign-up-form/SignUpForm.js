import React, { Component } from 'react';
import './sign-up-form.scss';
import {Link, withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import styled from 'styled-components';
import {getSignUpInf} from '../../redux/actions/index';

const Wrapper = styled.div`
    @media only screen and (max-width : 399px) {
        width: 10%
    }
`

const BtnFacebook = styled.button`
    width: 300px;
    height:40px;  
    border-radius: 15px;
    background: #3b5998;
    color:white;
    border:0px transparent;  
    text-align: center;
    margin:10px;
    display: inline-block;

    &:hover{
        background: #3b5998;
        opacity: 0.6;
    }
`
const BtnGoogle = styled.button`
    margin:10px;
    width: 300px;
    height:40px;
    border-radius: 15px;
    background: #db3236;
    color:white;
    border:0px transparent;
    text-align: center;

    &:hover{
        background: #3b5998;
        opacity: 0.6;
    }
`
const BtnPaypal = styled.button`
    margin:10px;
    width: 300px;
    height:40px;
    border-radius: 15px;
    background: #1B9EF5;
    color:white;
    border:0px transparent;
    text-align: center;

    &:hover{
        background: #3b5998;
        opacity: 0.6;
    }
`

class SignUpForm extends Component {


    getSignUpInf=(e)=>{
        e.preventDefault();
        console.log("element",e)
        const email = e.target.elements[0].value;
        const name = e.target.elements[1].value;
        const phoneNumber = e.target.elements[2].value;
        const firstPassword = e.target.elements[3].value;
        const secondPassword = e.target.elements[4].value;

        let emailTest = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        let nameTest = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
        let phoneNumberTest = /^(\+?61|0)4\d{8}$/;
        let PasswordTest = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;

        let isEmail = emailTest.test(email);
        let isName = nameTest.test(name);
        console.log("name",name)
        console.log("rightname",isName)
        let isPhoneNumber = phoneNumberTest.test(phoneNumber)

        const emailError = document.getElementById('customer-email-error');
        const nameError = document.getElementById('customer-name-error');
        const phoneError = document.getElementById('customer-phone-error');
        const firstPasswordError = document.getElementById('customer-password-error');
        const secondPasswordError = document.getElementById('customer-re-password-error');


        let isPassword = false;        
        if(
            firstPassword === secondPassword && 
            PasswordTest.test(firstPassword)===true && 
            PasswordTest.test(secondPassword)===true){
                isPassword = true;
        }

        if(isEmail===false){
            emailError.style.display = "block";
        }else{
            emailError.style.display = "none";
        }

        if(isName===false){
            nameError.style.display = "block";
        }

        if(isPhoneNumber===false){
            phoneError.style.display = "block";
        }

        if(isPassword === false){
            firstPasswordError.style.display = "block";
            secondPasswordError.style.display = "block";
        }

        if(isEmail && isName && isPhoneNumber && isPassword){
            const History = this.props.history;
            console.log("password",History)

            this.props.getSignUpInf({
                email:email,
                name:name,
                phoneNumber:phoneNumber,
                password:firstPassword,
            })
            alert("Sign up successful! Please log in!")
            History.replace('/account');

        }
        






    }

   
    
    render(){ 
        console.log("match",this.props)

            return (
                    <div className="login-form">
                        <div className="form-header">
                            
                            <div className="form-header_row-1">Account</div>
                            <div className="form-header_row-2">
                                <span className="form-header_row-2_thin">Already got an account?</span>
                                <span><Link className="form-header_row-2_link" to="/account">Log in</Link></span>
                            </div>
                        </div>


                        <div className="form-container">

                            <div onSubmit={this.getSignUpInf} className="form-section left">

                                <div className="field-container">
                                    <h2><span className="field-container_thin"> SIGN UP </span>WITH EMAIL</h2>
                                </div>
                                    <section>
                                    <form className="field-container input-group">
                                        <label className="field-container_form-label">EMAIL</label>
                                        <input 
                                            type="email"
                                            name="email" 
                                            className="field-container_login-input"
                                            // value="username"
                                            onChange={this.setEmail}/>
                                        <div className="inline-error" id='customer-email-error'>Email address not Valid!</div>

                                 
                                        <label className="field-container_form-label">NAME</label>
                                        <input 
                                            type="text"
                                            name="name" 
                                            className="field-container_login-input"
                                            // value="password"
                                            onChange={this.setName}/>
                                        <div className="inline-error" id='customer-name-error'>Name not Valid!</div>


                                        <label className="field-container_form-label">PHONE</label>
                                        <input 
                                            type="number"
                                            name="phone" 
                                            className="field-container_login-input"
                                                // value="password"
                                            onChange={this.setPhoneNumber}/>
                                        <div className="inline-error" id='customer-phone-error'>Phone number not Valid!</div>


                                        <label className="field-container_form-label">PASSWORD</label>
                                        <input 
                                            type="password"
                                            name="password" 
                                            className="field-container_login-input"
                                                // value="password"
                                            onChange={this.setPassword}/>
                                        <div className="inline-error" id='customer-password-error'>Password not Valid!</div>


                                        <label className="field-container_form-label">CONFIRM PASSWORD</label>
                                        <input 
                                            type="password"
                                            name="re-password" 
                                            className="field-container_login-input"
                                                // value="password"
                                            onChange={this.confirmPassword}/>
                                        <div className="inline-error" id='customer-re-password-error'>Password not Valid!</div>


                                        <button className="login-btn">LOG IN</button>


                                    </form>
                                    <div className="field-container">
                                    </div>
                                    </section>
                                    <br/>

                            </div>
                            
                            <div className="form-divider">
                                <div>OR</div>
                            </div>
                            

                            <div className="form-section right">
                                <div className="field-container">
                                    <h2><span className="field-container_thin">LOG IN </span>WITH SOCIAL MEDIA</h2>
                                </div>

                                {/* <div>
                                    <GoogleBtn/>
                                </div> */}
                                <br/>

                                <div style={{ display: 'flex', flexWrap: 'wrap',flexDirection:"column",justifyContent:"space-around",alignItems:"center" }} >
                                    <Wrapper>
                                        <BtnFacebook style={{ width:"400px",height:"60px",fontSize:"1.5rem" }}>
                                            &nbsp;&nbsp;Sign In with Facebook
                                        </BtnFacebook >
                                        <br/>
                                        <BtnGoogle style={{ width:"400px" ,height:"60px",fontSize:"1.5rem" }}>
                                            &nbsp;&nbsp;Sign In with Google
                                        </BtnGoogle >
                                        <br/>
                                        <BtnPaypal style={{ width:"400px" ,height:"60px" ,fontSize:"1.5rem"}}>
                                            &nbsp;&nbsp;Sign In with Paypal
                                        </BtnPaypal >
                                    </Wrapper>
                                </div>

                            </div>
                        </div>
                    </div>
            )
    }     
}


function mapStateToProps(state){
    const {loginInf} = state;

    return {
        userName:loginInf.userName,
        password:loginInf.password,
        status:loginInf.status,
        cartItems: state.cartReducer.cartItems,
       
    }

}

const mapActionsToProps = {

    getSignUpInf
    
}

export default connect(mapStateToProps,mapActionsToProps)(withRouter(SignUpForm));