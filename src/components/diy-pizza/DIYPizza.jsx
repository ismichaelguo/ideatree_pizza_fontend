import React, { Component } from "react";
import "./DIYPizza.scss";
import Combination from "./Combination";
import remove from "../../asset/Images/Build-Own-Pizza/remove.png";
import diyImage from "../../asset/Images/Build-Own-Pizza/build_own_pizza.png";

import PIZZA_SELECTION_DATA from "./diy-pizza-data";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { getToppingData, deleteTopping } from "../../redux/actions/index";
import { addItem } from "../../redux/actions/cart/cartActions";

class DIYPizza extends React.Component {
  componentDidMount() {
    const { getToppingData } = this.props;
    const toppingData = PIZZA_SELECTION_DATA;
    getToppingData(toppingData);
  }

  render() {
    const {
      toppingData,
      currentSelection,
      deleteTopping,
      pizzaData,
      DIYPageData,
      DeliveryForm,
    } = this.props;

    const pageId = DIYPageData.match.params.id;
    let foodName, foodPrice, imgDetail, imgAlt;
    pizzaData.forEach((item) => {
      for (let food of item.items) {
        // console.log(food.id)
        if (food.id === 17) {
          foodName = food.name;
          imgDetail = food.imgSrc;
          imgAlt = food.imgAlt;
        }
      }
    });

    //calculate the price of custom pizza
    let toppingPrice = 0;
    let toppingDes = [];
    for (let i = 0; i < currentSelection.length; i++) {
      toppingPrice = toppingPrice + currentSelection[i].price;
      toppingDes.push(currentSelection[i].name);
    }
    foodPrice = toppingPrice;

    let curItem = {
      id: parseInt(pageId),
      foodName,
      foodPrice,
      imgDetail,
      imgAlt,
      toppingDes,
    };

    return (
      <div className="diy-pizza-container">
        <div className="diy-pizza-title">
          <h2>Build Your Own Pizza</h2>
        </div>
        <div className="diy-pizza-box1"></div>
        <img src={diyImage} alt="diyPizza" className="image" />
        <div className="heading">Customize Toppings</div>
        <div className="customize-toppings">
          <h4>Current Toppings</h4>
          <div className="current-toppings">
            {currentSelection.map((item) => (
              <div className="current-toppings-container" key={item.id}>
                <img
                  className="remove"
                  src={remove}
                  alt="remove"
                  onClick={() => deleteTopping(item.id)}
                />
                <img src={item.imgSrc} alt={item.imgAlt} />
                <p>{item.name}</p>
                <p>${item.price}</p>
              </div>
            ))}
          </div>
          <div className="add-toppings">
            <h4>Add Toppings (click to add)</h4>
            {toppingData.map((selection) => (
              <Combination selection={selection} key={selection.selectionId} />
            ))}
          </div>
        </div>
        <Link to={getLink(DeliveryForm, pageId)}>
          <button
            className="add-to-order"
            onClick={() => this.props.addItem({ item: curItem })}
          >
            Add To Order
          </button>
        </Link>
      </div>
    );
  }
}

const getLink = (DeliveryForm, pageId) => {
  if (DeliveryForm.streetNum) {
    return `/receipt`;
  } else {
    return `/menu/detail/${pageId}/order-type`;
  }
};

const mapStateToProps = (state) => {
  return {
    toppingData: state.toppingData.toppingData,
    currentSelection: state.toppingData.currentSelection,
    pizzaData: state.pizzaData.pizzaData,
    DeliveryForm: state.DeliveryForm,
  };
};

const mapActionsToProps = {
  getToppingData,
  deleteTopping,
  addItem,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withRouter(DIYPizza));
