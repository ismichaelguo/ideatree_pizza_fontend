import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import './delivery-page.scss';
import DeliveryForm from '../../components/delivery-form/DeliveryForm';

const DeliveryPage = (props) => {
    const footerColor = "#ffffff";
    return (
        <section className='delivery-container'>
            <header className='banner'>
                <Link to='/' className="banner_logo-image">
                </Link>
                <div className="banner_description">
                   Delivery Details
                </div>
            </header>
            <section id='body'>
                <DeliveryForm />
            </section>
            <footer className="page-footer">
                <Footer color={footerColor} />
            </footer>
        </section>
    );
}

export default DeliveryPage;