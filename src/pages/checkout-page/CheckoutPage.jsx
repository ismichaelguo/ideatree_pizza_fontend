import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MainNav from "../../components/main-nav/MainNav";
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import './checkout-page.scss';

const CheckOutPage = ({ cartItems, totalPrice, unit, streetNum,
  streetName, suburb, postcode, time, }) => {
  return (
    <>
      <MainNav />
      <div className="checkout-page">
        <div className="checkout-page__container">
          <strong>CheckOut</strong>
          <div className="checkout-page__header">
            <div className="checkout-page__header-item">
              <span>Product</span>
            </div>
            <div className="checkout-page__header-item">
              <span>Name</span>
            </div>
            <div className="checkout-page__header-item">
              <span>Quantity</span>
            </div>
            <div className="checkout-page__header-item">
              <span>Price</span>
            </div>
            <div className="checkout-page__header-item">
              <span>Remove</span>
            </div>
          </div>
          <div className="checkout-page__items">
            {cartItems.map((cartItem => (
              <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )))}
          </div>
          <div className="checkout-page__total-info">
            <p>Total Price: ${parseFloat(totalPrice.toFixed(2))}</p>
            {cartItems.length === 0 ? null : (
              <>
                <p>{`Delivery Address: ${unit} ${streetNum} ${streetName} ${suburb} ${postcode}`}</p>
                <p>{`Delivery Time: ${time}`}</p>
              </>
            )}
            {console.log('time', time)}
          </div>
          <Link to='/thanks' className="checkout-page__pay-btn">Pay Now</Link>
        </div>
      </div>
    </>
  );
}

const sumPrice = (cartItems) => {
  return cartItems.reduce(
    (accumulatedPrice, cartItem) => accumulatedPrice + cartItem.quantity * cartItem.foodPrice
    , 0);
}

const mapState = (state) => ({
  cartItems: state.cart.cartItems,
  totalPrice: sumPrice(state.cart.cartItems),
  unit: state.DeliveryForm.unit,
  streetNum: state.DeliveryForm.streetNum,
  streetName: state.DeliveryForm.streetName,
  suburb: state.DeliveryForm.suburb,
  postcode: state.DeliveryForm.postcode,
  time: state.DeliveryForm.time,
});

export default connect(mapState)(CheckOutPage);