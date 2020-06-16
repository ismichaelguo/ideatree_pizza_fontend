import React from 'react';
import { Link } from 'react-router-dom';
import './pick-up-page.scss';
import PickUpForm from '../../components/pick-up-form/PickUpForm';

const PickUpPage = (props) => {
    
    

    return (
        <section className='pick-up-container'>
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
        </section>
    );
}

export default PickUpPage;