import React from 'react';
import { connect } from 'react-redux';
import { clearItem, addItem, removeItem } from '../../redux/actions/cart/cartActions';
import './receipt-basket.scss';

const ReceiptBasket = (props) => {
  return (
    <div className="receipt-table">
      <div className="receipt-table__content">
        {props.cartItems.length === 0 ?
          (<p class="item__name">empty basket</p>)
          :
          (props.cartItems.map((cartItem) => (
            <div className="receipt-table__item">
              <span class="receipt-table__item-name">{cartItem.foodName}</span>
              <span class="receipt-table__item-price">${parseFloat((cartItem.quantity * cartItem.foodPrice).toFixed(2))}</span>
              <p class="receipt-table__item-quantity">
                Qty : <span className="minus" onClick={() => props.removeItem({ item: cartItem })}>- </span>
                {cartItem.quantity}
                <span className="plus" onClick={() => props.addItem({ item: cartItem })}> +</span>
              </p>
              <button className="receipt-table__item-remove" onClick={() => props.clearItem({ item: cartItem })}>REMOVE</button>
            </div>
          )))
        }
      </div >
    </div >
  );
}

const mapAction = {
  clearItem,
  addItem,
  removeItem,
}

export default connect(null, mapAction)(ReceiptBasket);