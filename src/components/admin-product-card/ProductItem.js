import React, { Fragment } from "react";
import "./product-item.scss";

class ProductItem extends React.Component {
  constructor() {
    super();
    this.state = {
      dropDown: false,
    };
  }

  handleDetailClick = () => {
    this.setState({
      dropDown: !this.state.dropDown,
    });
  };
  handleEditClick = (e) => {
    const index = e.target.id;
    this.props.handleEditClick(index);
  };

  removeItem = () => {
    this.props.removeItem();
  };

  render() {

    const item = this.props.item;
    return (
      <Fragment key={item.id}>
        <div className="item" key={item.id}>
          <span>{item.id}</span>
          <span>{item.name}</span>
          <span>{parseFloat(item.price)}</span>
          <span onClick={this.handleDetailClick}>
            <i className="fa fa-search-plus"></i>
          </span>
          <div>
            <span onClick={this.handleEditClick} id={this.props.index}>
              <i className="fa fa-edit"></i>
            </span>
            <span onClick={this.removeItem}>
              <i className="fa fa-trash"></i>
            </span>
          </div>
        </div>
        {this.state.dropDown && (
          <div className="detail">
            <span>{`Description : ${item.description}`}</span>
            <span>{`Img : ${item.imgDetail}`}</span>
            <span>{`Cover : ${item.imgSrc}`}</span>
          </div>
        )}
      </Fragment>
    );
  }
}

export default ProductItem;
