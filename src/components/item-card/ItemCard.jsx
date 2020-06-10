import React from "react";
import "./item-card.scss";
import { connect } from "react-redux";
import { addItem } from "../../redux/actions/cart/cartActions";
import { Link } from "react-router-dom";

function ItemCard(props) {
  // console.log('itemcard props', props);
  function getLink() {
    if (props.pathname.startsWith("/menu" || "/receipt")) {
      if (props.id === 17) {
        return `/menu/detail/${props.id}/diy-pizza`;
      } else {
        return `/menu/detail/${props.id}`;
      }
    }
    if (props.pathname.startsWith("/receipt")) {
      if (props.id === 17) {
        return `/menu/detail/${props.id}/diy-pizza`;
      } else {
        return `/menu/detail/${props.id}`;
      }
    }
  }
  return (
    <div className="productContainer">
      <div className="product">
        <Link className="productSelect" to={getLink()}>
          <div className="product_imageContainer">
            <img alt={props.imgAlt} src={props.imgSrc} className="image"></img>
          </div>
          <div className="product_details">
            <div className="product_details_nameContainer">
              <span className="name"> {props.name}</span>
            </div>
            <span className="description">{props.description}</span>
            <div className="product_details_priceCaloriesContainer">
              <span className="price">From ${props.price}*</span>
              <span className="calories">{props.calories}kJ^</span>
            </div>
          </div>
          <div className="product_button">{getButton(props)}</div>
        </Link>
      </div>
    </div>
  );
}

function getButton(props) {
  if (props.pathname.startsWith("/menu")) {
    return <button className="btn_select">SELECT</button>;
  }
  if (props.pathname.startsWith("/receipt")) {
    if (props.id === 17) {
      return <button className="btn_select">SELECT</button>;
    } else {
      return (
        <button className="btn_select" onClick={() => handleClick(props)}>
          ADD
        </button>
      );
    }
  }
}

const handleClick = (props) => {
  let curItem = {
    // format obj of current item, the same way in Detail.jsx
    id: props.id,
    foodName: props.name,
    foodPrice: props.price,
    imgDetail: props.imgSrc,
    imgAlt: props.imgAlt,
  };
  // console.log('typeof props.id', typeof props.id)
  if (props.pathname.startsWith("/receipt")) {
    props.addItem({ item: curItem });
  }
};

const mapAction = {
  addItem,
};

export default connect(null, mapAction)(ItemCard);
