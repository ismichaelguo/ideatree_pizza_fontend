import React, { Component, Fragment } from 'react';
import './login-form.scss';
import GoogleBtn from './GoogleBtn';
import {Link, withRouter,Redirect} from "react-router-dom";
// import FacebookBtn from './FacebookBtn';
import {getUsername,getPassword,getLoginInf} from '../../redux/actions/index';
import {connect} from 'react-redux';
class LoginForm extends Component {
    getUsername=(e)=>{
        this.props.getUsername({
            userName:e.target.value
        })
    }

    getPassword=(e)=>{
        this.props.getPassword({
            password:e.target.value
        })
    }

    getLoginInf=(e,props)=>{
        e.preventDefault();
        const userInf = {
            userName:"123",
            password:"123",
        }
        if(this.props.userName === userInf.userName && this.props.password === userInf.password ){
             this.props.getLoginInf({
                status:!this.props.status,
            })
            // sessionStorage.setItem('Login Status',!this.props.status)
            const HISTORY = this.props.history;
            console.log("1111",HISTORY)
            HISTORY.replace('/menu')

        }else{
            alert("Invalid username or password!")
        }
        
    }





    
    render(){ 

            return (
                <Fragment> 

                    <div className="form-container">

                        {/* header部分  */}
                        <div className="form-header">
                            <div className="row-1">LOG IN</div>
                            <div className="row-2">
                                <span className="thin">DON'T HAVE A DOMINO'S ACCOUNT?</span>
                                <span className="link"><Link to="">SIGN UP</Link></span>
                            </div>
                        </div>


                        <div className="inner-container">

                            {/* 左边的登陆提交表格  */}
                            <div className="form-section left">

                                <div id="login-form" >
                                    <section>

                                    <div className="field-container label-container">
                                        <h2><span className="thin">LOG IN </span>WITH EMAIL</h2>
                                    </div>

                                    <div className="field-container input-group" id="email-container">
                                        <label htmlFor="email" className="form-label">EMAIL</label>
                                        <input 
                                            type="email"
                                            name="email" 
                                            className="login-input"
                                            // value="username"
                                            onChange={this.getUsername}/>
                                    </div>

                                    <div className="field-container input-group" id="email-container">
                                        <label htmlFor="password" className="form-label">PASSWORD</label>
                                        <Link id="forgot-password-link" to=''>Forgot password?</Link>
                                        <input 
                                            type="password"
                                            name="password" 
                                            className="login-input"
                                            // value="password"
                                            onChange={this.getPassword}/>
                                    </div>

                                    <div className="field-container">
                                        {/* <div className="input-group checkbox-container"> */}
                                            <input 
                                                type="checkbox"
                                                name="checkbox" />
                                                <label htmlFor="checkbox">Keep me logged in</label>
                                        {/* </div> */}
                                    </div>
                                    </section>

                                    <Link to={this.props.status ? "./menu" : "./account"} className="button-row">
                                        <button id="login-button" onClick={this.getLoginInf} className="login-btn">LOG IN</button>
                                    </Link>

                                </div>
                            </div>
                            {/* 左边的登陆提交表格完结  */}
                            
                            <div className="form-divider">
                                <div>OR</div>
                            </div>
                            
                            {/* 右边的登陆提交表格  */}
                            <div className="form-section right">
                                <div className="field-container label-container">
                                    <h2><span className="thin">LOG IN </span>WITH</h2>
                                </div>

                                <div>
                                    <GoogleBtn/>
                                </div>

                                {/* <div>
                                    <FacebookBtn/>
                                </div> */}

                            </div>
                        </div>
                    </div>
            </Fragment>   
            )
    }

        
}


function mapStateToProps(state){
    const {loginInf} = state;

    return {
        userName:loginInf.userName,
        password:loginInf.password,
        status:loginInf.status,
       
    }

}

const mapActionsToProps = {
    getLoginInf,
    getUsername,
    getPassword
    
}

export default connect(mapStateToProps,mapActionsToProps)(withRouter(LoginForm));