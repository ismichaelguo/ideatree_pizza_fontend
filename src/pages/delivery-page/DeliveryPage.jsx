import React from 'react';
import { Link } from 'react-router-dom';
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
            <section>
                <DeliveryForm props={props}/>
            </section>
        </section>
    );
}

export default DeliveryPage;