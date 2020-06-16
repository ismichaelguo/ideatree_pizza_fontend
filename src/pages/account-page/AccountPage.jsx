import React from 'react';
import { Link } from 'react-router-dom';
import './account-page.scss';
import LoginForm from '../../components/login-form/LoginForm';


const AccountPage = (props) => {
    

    return (
        <section className='login-container'>
            <header className='banner'>
                <Link to='./menu' className="banner__logo-image">
                </Link> 
                <div className="banner__description">
                    My Account
                </div>
            </header>
            <section id='body'>
                <LoginForm />
            </section>
        </section>
    );
}

export default AccountPage;