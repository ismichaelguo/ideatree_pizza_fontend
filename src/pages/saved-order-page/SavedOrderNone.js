import React from 'react';
import { Link } from 'react-router-dom';
import './save-order-nohistory.scss';
import Footer from '../../components/footer/Footer';

export default function SavedOrderNone (props){
  const {id}=props.match.params;

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
        <Link to={`/menu/detail/${id}/order-type/delivery`} className="type-container__type delivery">
          Delivery
        </Link>
        <Link to={`/menu/detail/${id}/order-type/pick-up`}  className="type-container__type pick-up">
          Pick up
        </Link>
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