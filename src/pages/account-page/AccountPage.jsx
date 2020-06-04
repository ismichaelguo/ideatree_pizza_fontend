import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import './account-page.scss';
import LoginForm from '../../components/login-form/LoginForm';


const AccountPage = (props) => {
    

    return (
        <section className='login-container'>
            <header className='banner'>
                <Link to='./menu' className="banner__logo-image">
                </Link> 
                <div className="banner__description">
                    LOGIN PAGE
                </div>
            </header>
            <section id='body'>
                
                    <LoginForm />
                
            </section>
            <footer className="page-footer">
                <Footer  />
            </footer>
        </section>
    );
}

export default AccountPage;