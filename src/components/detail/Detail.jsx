import React from "react";
import "./detail.scss";
import "./detail.scss";
import { Link } from "react-router-dom";
// import PIZZA_DATA from "./pizza-data";
// import FOOD_ITEM_DATA from '../../pages/menu-page/food-item-data';
import PIZZA_DATA from './pizza-data';
function Detail(props) {


  const pizzaItemArr = PIZZA_DATA;

//   let filteredPizzaArr = pizzaItemArr.filter((food) =>
//   food.locationID.startsWith("PIZZAS")
//   // ["", "PIZZAS", "NEW_PRODUCTS"]
// );

const response = pizzaItemArr.find((res)=>res.id=props.id);
console.log(response);

  // console.log("pizza",response);
 
  return (
    <div className="detail">
      <div className="detail-header">
        <Link to="/menu" className="detail-menu">
          BACK TO MENU
        </Link>
      </div>
      <div className="detail-picture">
        <img
          src={response.imgDetail}
          alt="Pizza"
          className="detail-picture-pizza"
        />
        <img src="" alt="" />
      </div>
      <div className="detail-info">
        <div className="detail-info-box">
          <h1 className="detail-title">
            {response.name}<span className="detail-kjs">{response.calories}^</span>
          </h1>
          <p className="detail-description">
            {response.description}
          </p>
          <Link to="/menu/detail/order-type">
            <button className="detail-button">ORDER NOW</button>
          </Link>
          <Link to="">Nutritional Info</Link>
          <Link to="">Additive&Allergen Info</Link>
        </div>
      </div>
    </div>
  );
}

export default Detail;
