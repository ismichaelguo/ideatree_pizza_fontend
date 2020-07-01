import React from "react";
import MainNav from "../../components/main-nav/MainNav";
import MenuNav from "../../components/menu-nav/MenuNav";
import ItemCardContainer from "../../components/item-card-container/ItemCardContainer";
import ReceiptBasket from '../../components/receipt-basket/ReceiptBasket';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadPizzaData } from '../../redux/actions/index';
import { sumPrice } from '../../redux/actions/cart/cartUtils';
import "./receipt-page.scss";

class ReceiptPage extends React.Component {


  componentDidMount () {
    const { loadPizzaData } = this.props;
    loadPizzaData();
  }

  // sessionTest
  // componentDidUpdate (prevProps) {
  //   // console.log('prevProps', prevProps);
  //   console.log('did update')
  //   // set sessionStorage when cartItems changed
  //   if (prevProps.cartItems !== this.props.cartItems) {
  //     console.log('did update if1')
  //     // if (this.props.cartItems !== 0) {
  //     //   console.log('did update if2')
  //     //   sessionStorage.setItem('cartItems', JSON.stringify(this.props.cartItems));
  //     // }
  //     // sessionStorage.setItem('cartItems', JSON.stringify(this.props.cartItems));
  //   }
  //   sessionStorage.setItem('cartItems', JSON.stringify(this.props.cartItems));
  // }

  getPizzaData = () => {
    const foodItemArr = this.props.pizzaData;
    const pathname = this.props.location.pathname;
    const hashtag = this.props.location.hash || "#PIZZAS";

    let filteredFoodArr = foodItemArr.filter((food) =>
      food.locationID.startsWith(hashtag.split("#")[1])
    );
    // console.log("pizza", filteredFoodArr)
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

  readSessionData = (paraName) => {
    if (this.props[paraName].length === 0 && sessionStorage.getItem(paraName) !== "[]") {
      // page refresh
      return JSON.parse(sessionStorage.getItem(paraName));
    } else {
      return this.props[paraName];
    }
  }

  render () {
    const { cartItems, unit, streetNum, streetName, suburb, postcode, deliveryTime, pickUpTime,
      pickUpAddress, pickUpSuburb, pickUpPCode, } = this.props;

    // sessionTest
    // const { unit, streetNum, streetName, suburb, postcode, deliveryTime, pickUpTime,
    //   pickUpAddress, pickUpSuburb, pickUpPCode, } = this.props;
    // sessionStorage.setItem('cartItems', JSON.stringify(this.props.cartItems));
    // sessionStorage.setItem('unit', JSON.stringify(this.props.unit));
    // sessionStorage.setItem('streetNum', JSON.stringify(this.props.streetNum));
    // sessionStorage.setItem('streetName', JSON.stringify(this.props.streetName));
    // sessionStorage.setItem('suburb', JSON.stringify(this.props.suburb));
    // sessionStorage.setItem('postcode', JSON.stringify(this.props.postcode));
    // sessionStorage.setItem('time', JSON.stringify(this.props.time));

    // const cartItems = this.readSessionData('cartItems');
    // const unit = this.readSessionData('unit');
    // const streetNum = this.readSessionData('streetNum');
    // const streetName = this.readSessionData('streetName');
    // const suburb = this.readSessionData('suburb');
    // const postcode = this.readSessionData('postcode');
    // const time = this.readSessionData('time');

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
                <p>{deliveryTime ? "Delivery Info" : "Pickup Info"}</p>
                <p>{`Address: ${deliveryTime ? `${unit} ${streetNum} ${streetName} ${suburb} ${postcode}`
                  : `${pickUpAddress} ${pickUpSuburb} ${pickUpPCode}`}`}</p>
                <p>{`Time: ${deliveryTime ? `${deliveryTime}` : `${pickUpTime}`}`}</p>
                <Link to='/checkout' className="checkout-btn">Check Out</Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
}

//TODO: obtain pickupTime and make a determination
const mapState = (state) => ({
  pizzaData: state.pizzaData.pizzaData,
  cartItems: state.cartReducer.cartItems,
  totalPrice: sumPrice(state.cartReducer.cartItems),
  unit: state.DeliveryForm.unit,
  streetNum: state.DeliveryForm.streetNum,
  streetName: state.DeliveryForm.streetName,
  suburb: state.DeliveryForm.suburb,
  postcode: state.DeliveryForm.postcode,
  deliveryTime: state.DeliveryForm.time,
  pickUpTime: state.PickUpForm.pickUpTime,
  pickUpAddress: state.PickUpForm.store.address,
  pickUpSuburb: state.PickUpForm.store.suburb,
  pickUpPCode: state.PickUpForm.store.postcode,
});

const mapActions = {
  loadPizzaData,
}

export default connect(mapState, mapActions)(ReceiptPage);
