import React from "react";
import MainNav from "../../components/main-nav/MainNav";
import MenuNav from "../../components/menu-nav/MenuNav";
import ItemCardContainer from "../../components/item-card-container/ItemCardContainer";
import Footer from "../../components/footer/Footer";
import ReceiptBasket from '../../components/receipt-basket/ReceiptBasket';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadPizzaData } from '../../redux/actions/index';
import "./receipt-page.scss";

class ReceiptPage extends React.Component {


  componentDidMount () {
    const { loadPizzaData } = this.props;
    loadPizzaData();
  }

  // sessionTest
  // componentDidUpdate (prevProps) {
  //   console.log('prevProps', prevProps);
  //   // set sessionStorage when cartItems changed
  //   if (prevProps.cartItems !== this.props.cartItems) {
  //     if (prevProps.cartItems !== 0) {
  //       sessionStorage.setItem('cartItems', JSON.stringify(this.props.cartItems));
  //     }
  //   }
  // }

  getPizzaData = () => {
    const foodItemArr = this.props.pizzaData;
    const pathname = this.props.location.pathname;
    const hashtag = this.props.location.hash || "#PIZZAS";

    let filteredFoodArr = foodItemArr.filter((food) =>
      food.locationID.startsWith(hashtag.split("#")[1])
    );
    console.log("pizza", filteredFoodArr)
    if (filteredFoodArr.length === 0) {
      return null;
    } else {
      return (
        filteredFoodArr.map((item) => (
          <ItemCardContainer
            key={item.itemID}
            locationID={item.locationID}
            itemFirstName={item.itemFirstName}
            itemLastName={item.itemLastName}
            items={item.items}
            pathname={pathname}
          />
        )))
    }
  }

  sumPrice = (cartItems) => {
    return cartItems.reduce(
      (accumulatedPrice, cartItem) => accumulatedPrice + cartItem.quantity * cartItem.foodPrice
      , 0);
  }

  render () {
    const { cartItems, unit, streetNum,
      streetName, suburb, postcode, time, } = this.props;

    // sessionTest
    // const { unit, streetNum,
    //   streetName, suburb, postcode, time, } = this.props;
    // const cartItems = this.props.cartItems.length !== 0 ?
    //   this.props.cartItems
    //   :
    //   JSON.parse(sessionStorage.getItem('cartItems'));

    const pathname = this.props.location.pathname;
    const hashtag = this.props.location.hash || "#PIZZAS"; // if hash is empty, initialize with '#PIZZAS'

    return (
      <>
        <section className="menu-page__nav">
          <MainNav pathname={pathname} />
          <MenuNav hashtag={hashtag} />
        </section>
        <div className="receipt-page-container">
          <div className="receipt-page">
            <section className="receipt-page__content">
              {this.getPizzaData()}
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
        <div className="page-footer">
          <Footer />
        </div>
      </>
    );
  };
}


const sumPrice = (cartItems) => {
  return cartItems.reduce(
    (accumulatedPrice, cartItem) => accumulatedPrice + cartItem.quantity * cartItem.foodPrice
    , 0);
}

const mapState = (state) => ({
  pizzaData: state.pizzaData.pizzaData,
  cartItems: state.cartReducer.cartItems,
  totalPrice: sumPrice(state.cartReducer.cartItems),
  unit: state.DeliveryForm.unit,
  streetNum: state.DeliveryForm.streetNum,
  streetName: state.DeliveryForm.streetName,
  suburb: state.DeliveryForm.suburb,
  postcode: state.DeliveryForm.postcode,
  time: state.DeliveryForm.time,
});

const mapActions = {
  loadPizzaData,
}

export default connect(mapState, mapActions)(ReceiptPage);
