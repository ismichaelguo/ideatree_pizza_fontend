import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import './delivery-page.scss';
import DeliveryForm from '../../components/delivery-form/DeliveryForm';


const DeliveryPage = (props) => {
    
    

    return (
        <section className='delivery-container'>
            <header className='banner'>
                <Link to='' className="banner__logo-image">
                </Link>
                <div className="banner__description">
                    Delivery Details
                </div>
            </header>
            <section id='body'>
                
                    <DeliveryForm props={props}/>
                
            </section>
            <footer className="page-footer">
                <Footer  />
            </footer>
        </section>
    );
}

export default DeliveryPage;