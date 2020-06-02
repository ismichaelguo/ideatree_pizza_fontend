import React from 'react';
import { connect } from 'react-redux';
import { clearItem, addItem, removeItem } from '../../redux/actions/cart/cartActions';
import './checkout-item.scss';

const CheckoutItem = (props) => {
  const { foodName, foodPrice, imgDetail, imgAlt, quantity } = props.cartItem;

  return (
    <div className="checkout-item">
      <div className="item__img">
        <img src={imgDetail} alt={imgAlt} />
      </div>
      <span className="item__name">{foodName}</span>
      <span className="item__quantity">
        <div className="item__arrow" onClick={() => props.removeItem({ item: props.cartItem })}>&#10094;</div>
        <span className="item__value">{quantity}</span>
        <div className="item__arrow" onClick={() => props.addItem({ item: props.cartItem })}>&#10095;</div>
      </span>
      <span className="item__price">{parseFloat((quantity * foodPrice).toFixed(2))}</span>
      <div className="item__remove-btn" onClick={() => props.clearItem({ item: props.cartItem })}>&#10005;</div>
    </div>
  );
}

const mapAction = {
  clearItem,
  addItem,
  removeItem,
}

export default connect(null, mapAction)(CheckoutItem);