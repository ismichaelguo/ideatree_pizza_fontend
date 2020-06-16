import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './sign-up.scss';
import SignUpForm from '../../components/sign-up-form/SignUpForm';

const AccountPage = (props) => {
    

    return (
        <Fragment>
            <section className='signUp-container'>
                <header className='signUp-container__banner'>
                    <Link to='/menu' className="banner__logo-image">
                    </Link> 
                    <div>
                        Sign up
                    </div>
                </header>
                <section className='signUp-container__body'>
                    <SignUpForm />
                </section>
            </section>



        </Fragment>

    );
}

export default AccountPage;