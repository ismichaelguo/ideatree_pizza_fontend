import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import './pick-up-page.scss';
import PickUpForm from '../../components/pick-up-form/PickUpForm';

const PickUpPage = (props) => {
    
    

    return (
        <section className='delivery-container'>
            <header className='banner'>
                <Link to='' className="banner__logo-image">
                </Link>
                <div className="banner__description">
                    Pick Up Details
                </div>
            </header>
            <section id='body'>
                
                    <PickUpForm props={props}/>
                
            </section>
            <footer className="page-footer">
                <Footer  />
            </footer>
        </section>
    );
}

export default PickUpPage;