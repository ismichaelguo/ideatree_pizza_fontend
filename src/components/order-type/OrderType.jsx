import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import './order-type.scss';
import {FiStar} from 'react-icons/fi';
import {MdMotorcycle} from 'react-icons/md';
import {FaStore} from 'react-icons/fa';

function OderType (props) {
    const {id}=props.match.params;
    const {status} = props;
    const {pastOrders} = props;
    console.log("props",pastOrders.length)
    // const newStatus = parseInt(status)
    let hasHistory = false;
    let orderHistory = window.sessionStorage.getItem('OrderHistory');
    console.log("orderHistory",orderHistory);
    if(status===true && orderHistory!==undefined){
      hasHistory = true;
    }
    // console.log("status",status)
    // console.log("pastOrder",pastOrders.length)
    // console.log("has",hasHistory)

  return (
    <div className="order-type">
      <h1 className="order-type_title">Select An Order Type</h1>
      <div className="order-type_container">
      
        {status ? <Link to={hasHistory ? `/menu/detail/${id}/order-type/saved-order` : `/menu/detail/${id}/order-type/saved-order-none`} className="order-method type-save">
          <div className="type-icon"><FiStar className="type-icon__content"/></div>
          <div className="type-text">
            <h1 className="type-text_title">Saved Orders</h1>
            <p className="type-text_description">Quickly reorder one of
            <br />your saved Orders</p>
        </div>
        </Link> : <Link to='/account' className="order-method type-save">
        <div className="type-icon"><FiStar className="type-icon__content"/></div>
        <div className="type-text">
          <h1 className="type-text_title">Saved Orders</h1>
          <p className="type-text_description">Quickly reorder one of
          <br />your saved Orders</p>
        </div>
        </Link>
        }   
        
        <Link to={status ? `/menu/detail/${id}/order-type/delivery`:"/account"} className="order-method type-delivery">
          <div className="type-icon">
              <MdMotorcycle className="type-icon__content"/></div>
              <div className="type-text">
                  <h1 className="type-text_title">Delivery</h1>
                  <p className="type-text_description">Have your order delivered 
                  <br />directly to you</p>
          </div>
        </Link>
        <Link to={status? `/menu/detail/${id}/order-type/pick-up` : "/account"} className="order-method type-pickup">
          <div className="type-icon"><FaStore className="type-icon__content"/></div>
          <div className="type-text">
            <h1 className="type-text_title">Pick up</h1>
            <p className="type-text_description">Pick up your order at<br />
            a store</p>
          </div>
        </Link>
      </div>
      <Link to='account' className="log-in">
        Registered Member? Log in / Sign up
            </Link>
    </div>
  )
}

function mapStateToProps(state){
  const {loginInf} = state;
  const {cartReducer}=state
  console.log("state",loginInf)


  return {
      status:loginInf.status,   
      pastOrders:cartReducer.pastOrders,
  }
}

export default connect(mapStateToProps,null)(OderType);