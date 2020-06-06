import React from "react";
import "./detail.scss";
import "./detail.scss";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { addItem } from '../../redux/actions/cart/cartActions';
import { loadPizzaData } from '../../redux/actions/index';

class Detail extends React.Component {

  componentDidMount () {
    const { loadPizzaData } = this.props
    loadPizzaData();

  }

  render () {
    const { id } = this.props.props.match.params // this is a string type `id`
    // console.log('this.props.props.match.params.id', typeof this.props.props.match.params.id)
    // console.log("pizza-data", this.props.pizzaData)

    let foodName, foodDes, foodPrice, foodCal, imgDetail, imgAlt;
    this.props.pizzaData.forEach(item => {
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
    let curItem = {
      id: parseInt(id),
      foodName, foodPrice, imgDetail, imgAlt
    };

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
              <button className="detail-button" onClick={() => this.props.addItem({ item: curItem })}>
                ORDER NOW</button>
            </Link> 
            <Link to="">Nutritional Info</Link>
            <Link to="">Additive&Allergen Info</Link>
          </div>
        </div>
      </div>
    )
  }
}
const mapAction = { addItem }

const mapStateToProps = (state) => {
  return {
    pizzaData: state.pizzaData.pizzaData
  }
}

const mapActionsToProps = {
  loadPizzaData,
  addItem,
}

export default connect(mapStateToProps, mapActionsToProps)(Detail);
