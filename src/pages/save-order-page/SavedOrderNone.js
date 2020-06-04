import React from 'react';
import { Link } from 'react-router-dom';
import './save-order-nohistory.scss';
import Footer from '../../components/footer/Footer';




export default function SavedOrderNone (props){


  return (
    <section className="order-type-container">
      <header className="banner">
        <Link to='/' className="banner_logo-image">
        </Link>
        <div className="banner_description">
          Saved Orders
                </div>
            </header>

      <div className="type-container">
        <p className="type-container__message">Sorry! We can't find any previous orders.<br/>
        Place a new order and we will remember it for Quick Ordering next time.<br/> 
        For even faster ordering, save your favorite order.</p>
        <div className="type-container__type delivery">
          Delivery
        </div>
        <div className="type-container__type pick-up">
          Pick&nbsp;up
        </div>
        <Link className="btn-container">
        previous
        </Link>
      </div>

            
      <footer className="page-footer">
        <Footer  />
      </footer>
        
        </section>
        
    )
}