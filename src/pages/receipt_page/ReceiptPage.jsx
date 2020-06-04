import React from "react";
import MainNav from "../../components/main-nav/MainNav";
import MenuNav from "../../components/menu-nav/MenuNav";
import ItemCardContainer from "../../components/item-card-container/ItemCardContainer";
import Footer from "../../components/footer/Footer";
import FOOD_ITEM_DATA from "./food-item-data";
import ReceiptBasket from '../../components/receipt-basket/ReceiptBasket';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import "./receipt-page.scss";

const ReceiptPage = (props) => {
  const { cartItems, unit, streetNum,
    streetName, suburb, postcode, time, } = props;
  const foodItemArr = FOOD_ITEM_DATA;
  const pathname = props.location.pathname;
  // console.log('pathname', pathname)
  const hashtag = props.location.hash || "#PIZZAS"; // if hash is empty, initialize with '#PIZZAS'

  let filteredFoodArr = foodItemArr.filter((food) =>
    food.locationID.startsWith(hashtag.split("#")[1])
  );

  const sumPrice = (cartItems) => {
    return cartItems.reduce(
      (accumulatedPrice, cartItem) => accumulatedPrice + cartItem.quantity * cartItem.foodPrice
      , 0);
  }

  return (
    <>
      <section className="menu-page__nav">
        <MainNav pathname={pathname} />
        <MenuNav hashtag={hashtag} />
      </section>
      <div className="receipt-page-container">
        <div className="receipt-page">
          <section className="receipt-page__content">
            {filteredFoodArr.length === 0
              ? null
              : filteredFoodArr.map((item) => (
                <ItemCardContainer
                  key={item.itemID}
                  locationID={item.locationID}
                  itemFirstName={item.itemFirstName}
                  itemLastName={item.itemLastName}
                  items={item.items}
                  pathname={pathname}
                />
              ))}
          </section>
        </div>
        <div className="receipt-container">
          <div className="receipt">
            <center className="receipt__top">
              <div className="receipt__top--logo"></div>
            </center>
            <div className="receipt__mid">
              {<ReceiptBasket cartItems={cartItems} />}
            </div>
            <div className="receipt__bottom">
              <h4>Total: ${parseFloat(sumPrice(cartItems).toFixed(2))}</h4>
              <p>Delivery Info</p>
              <p>{`Address: ${unit} ${streetNum} ${streetName} ${suburb} ${postcode}`}</p>
              <p>{`Time: ${time}`}</p>
              <Link to='/checkout' className="checkout-btn">Check Out</Link>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

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

export default connect(mapState)(ReceiptPage);
