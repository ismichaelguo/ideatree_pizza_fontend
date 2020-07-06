import React, { Fragment } from "react";
import "./admin-product-card.scss";
import ProductItem from "./ProductItem";

class AdminProductCard extends React.Component {
  constructor() {
    super();
    this.state = {
      dropDown: false,
    };
  }

  render() {
    console.log("products", this.props.product);
    const product = this.props.product;
    const items = this.props.product.items;
    console.log("functions", this.props);

    return (
      <div className="cardContainer">
        <div className="card">
          <div className="card__type">
            <h3>{`Product Type: ${product.itemFirstName} ${product.itemLastName}`}</h3>
          </div>
          <div className="card__header">
            <ul>
              <li>Item Id</li>
              <li>Item Name</li>
              <li>Item Price</li>
              <li>Details</li>
              <li>Operations</li>
            </ul>
            <div className="card__items">
              {items.map((item, index) => (
                <ProductItem
                  key={item.id}
                  item={item}
                  handleEditClick={this.props.handleEditClick}
                  removeItem={this.props.removeItem}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminProductCard;
