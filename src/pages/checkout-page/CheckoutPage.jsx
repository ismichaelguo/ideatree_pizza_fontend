import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import MainNav from "../../components/main-nav/MainNav";
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import { genPastOrder } from '../../redux/actions/cart/cartActions';
import { clearDeliveryForm } from '../../redux/actions/DeliveryForm';
import { clearStoreHistory } from '../../redux/actions/PickUpForm';
import { sumPrice } from '../../redux/actions/cart/cartUtils';
import axiosInstance from "../../api/axiosInstance";
import './checkout-page.scss';

const CheckOutPage = (props) => {
  const { cartItems, totalPrice, unit, streetNum,
    streetName, suburb, postcode, deliveryTime, pickUpTime,
    pickUpAddress, pickUpSuburb, pickUpPCode, } = props;
  return (
    <div className="checkout-page">
      <div className="checkout-page__container">
        <header className='banner'>

          <Link to='' className="banner__logo-image">
          </Link>
          <div className="banner__description">
            Check Out
        </div>
        </header>
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
              <p>{deliveryTime ? "Delivery Info" : "Pickup Info"}</p>
              <p>{`Address: ${deliveryTime ? `${unit} ${streetNum} ${streetName} ${suburb} ${postcode}`
                : `${pickUpAddress} ${pickUpSuburb} ${pickUpPCode}`}`}</p>
              <p>{`Time: ${deliveryTime ? `${deliveryTime}` : `${pickUpTime}`}`}</p>
            </>
          )}
        </div>
        <Link to='/thanks' className="checkout-page__pay-btn" onClick={() => handlePay(props)}>Pay Now</Link>
      </div>
    </div>
  );
}

const handlePay = (props) => {
  const { cartItems, totalPrice, unit, streetNum,
    streetName, suburb, postcode, deliveryTime, pickUpTime,
    pickUpAddress, pickUpSuburb, pickUpPCode, genPastOrder,
    clearStoreHistory, clearDeliveryForm } = props;
  console.log('==handlePay==');
  // console.log('props.cartItems', props.cartItems)
  axiosInstance({
    method: "POST",
    url: `/order`,
    header: { 'Content-type': 'application/json' },
    data: {
      "orderTime": (new Date()).toLocaleString(),
      "DeliverPickupTime": deliveryTime ? deliveryTime : pickUpTime,
      "orderItems": cartItems,
      "totalPrice": parseFloat(totalPrice.toFixed(2)),
      "address": deliveryTime ? `${unit} ${streetNum} ${streetName} ${suburb} ${postcode}`
        : `${pickUpAddress} ${pickUpSuburb} ${pickUpPCode}`,
      "type": deliveryTime ? "Delivery" : "Pickup",
    }
  }).then(res => {
    console.log('order generated.');
    console.log("order-id",res)
    window.sessionStorage.setItem("OrderId",res.data.id)
  })
    .catch(err => console.log('failed to generate order.', err))
  const userId = window.sessionStorage.getItem('Username');
  axiosInstance({
    method:"PUT",
    url:`/user/${userId}`,
    header: { 'Content-type': 'application/json' },
    data:{
      "order":window.sessionStorage.getItem("OrderId")
    }
  }).then(res=>console.log(res))
  .catch(err=>console.log(err));

  genPastOrder();
  clearStoreHistory();
  clearDeliveryForm();
}

const mapState = (state) => ({
  cartItems: state.cartReducer.cartItems,
  totalPrice: sumPrice(state.cartReducer.cartItems),
  unit: state.DeliveryForm.unit,
  streetNum: state.DeliveryForm.streetNum,
  streetName: state.DeliveryForm.streetName,
  suburb: state.DeliveryForm.suburb,
  postcode: state.DeliveryForm.postcode,
  time: state.DeliveryForm.time,
  pastOrders: state.cartReducer.pastOrders,
  deliveryTime: state.DeliveryForm.time,
  pickUpTime: state.PickUpForm.pickUpTime,
  pickUpAddress: state.PickUpForm.store.address,
  pickUpSuburb: state.PickUpForm.store.suburb,
  pickUpPCode: state.PickUpForm.store.postcode,
});

const mapAction = { genPastOrder, clearStoreHistory, clearDeliveryForm }

export default connect(mapState, mapAction)(CheckOutPage);