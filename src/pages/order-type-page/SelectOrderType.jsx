import React from 'react';
import {Link} from 'react-router-dom';
import './select-order-type.scss'
import OderType from '../../components/order-type/OrderType';




export default function SelectOderType (){
    return(
        <section className="order-type-container">
            <header className="banner">
                <Link to='/' className= "banner_logo-image">
                </Link>
                <div className="banner_description">
                    Online Ordering
                </div>
            </header>
            <OderType />

            


        </section>
        
    )
}