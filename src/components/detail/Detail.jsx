import React from "react";
import "./detail.scss";
import "./detail.scss";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { addItem } from '../../redux/actions/cart/cartActions';

// import PIZZA_DATA from "./pizza-data";
import FOOD_ITEM_DATA from '../../pages/menu-page/food-item-data';

function Detail (props) {


  // handleOrder = (curItem) => {
  //   this.props.addItem({ item: curItem });
  // }

  // console.log("Detail props", this.props)
  const { id } = props.props.match.params
  let foodName, foodDes, foodPrice, foodCal, imgDetail, imgAlt;
  FOOD_ITEM_DATA.forEach(item => {
    for (let food of item.items) {
      // console.log(food.id, +props.foodId)
      if (food.id === +id) {
        foodName = food.name;
        foodDes = food.description;
        foodPrice = food.price;
        foodCal = food.calories;
        imgDetail = food.imgDetail;
        imgAlt = food.imgAlt;
      }
    }
  })
  let curItem = { id, foodName, foodPrice, imgDetail, imgAlt };

  return (
    <div className="detail">
      <div className="detail-header">
        <Link to="/menu" className="detail-menu">
          MENU
        </Link>
      </div>
      <div className="detail-picture">
        <img
          src={imgDetail}
          alt={imgAlt}
          className="detail-picture-pizza"
        />
        <img src="" alt="" />
      </div>
      <div className="detail-info">
        <div className="detail-info-box">
          <h1 className="detail-title">
            {foodName}<span className="detail-kjs">{foodCal}kj^</span>
          </h1>
          <p className="detail-description">
            {foodDes}
          </p>
          <Link to={`/menu/detail/${id}/order-type`}>
            <button className="detail-button" onClick={() => props.addItem({ item: curItem })}>
              ORDER NOW</button>
          </Link>
          <Link to="">Nutritional Info</Link>
          <Link to="">Additive&Allergen Info</Link>
        </div>
      </div>
    </div>
  )
}

const mapAction = { addItem }

export default connect(null, mapAction)(Detail);
