import React from 'react';
import axiosInstance from "../../api/axiosInstance";
import './admin-order-item.scss';

class AdminOrderItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: false,
      update: false,
      currentOrder: {}
    }
  }

  handleDetailClick = () => {
    this.setState({
      dropdown: !this.state.dropdown
    })
  }
  handleEditClick = (id) => {
    this.setState({
      update: !this.state.update
    })
    axiosInstance({
      url: `/order/${id}`,
      method: "GET",
    }).then(res => {
      console.log('update res', res)
      this.setState({
        currentOrder: res.data
      })
    }).catch(err => console.log('err', err))
  }

  handleTimeChange = (e) => {
    let prevOrder = this.state.currentOrder;
    this.setState({
      currentOrder: {
        ...prevOrder,
        DeliverPickupTime: e.target.value,
      }
    })
  }
  handleAddressChange = (e) => {
    let prevOrder = this.state.currentOrder;
    this.setState({
      currentOrder: {
        ...prevOrder,
        address: e.target.value,
      }
    })
  }
  handleTypeChange = (e) => {
    let prevOrder = this.state.currentOrder;
    this.setState({
      currentOrder: {
        ...prevOrder,
        type: e.target.value,
      }
    })
  }

  handleCloseBtn = () => {
    this.setState({
      update: !this.state.update
    })
  }

  handleSubmit = (id) => {
    // update order and get paginate order again
    this.setState({
      update: !this.state.update
    })
    // console.log('id', id)
    axiosInstance({
      url: `/order/${id}`,
      method: "PUT",
      header: { 'Content-type': 'application/json' },
      data: {
        "orderTime": this.state.currentOrder.orderTime,
        "DeliverPickupTime": this.state.currentOrder.DeliverPickupTime,
        "orderItems": this.state.currentOrder.orderItems,
        "totalPrice": this.state.currentOrder.totalPrice,
        "address": this.state.currentOrder.address,
        "type": this.state.currentOrder.type,
      }
    }).then(res => {
      console.log('update res:', res)
      this.props.fetchData(this.props.currentPage, this.props.pageSize)
    }).catch(err => console.log('err', err))
  }

  render () {
    const { _id, DeliverPickupTime, address, orderItems, orderTime, totalPrice, type } = this.props.order;

    return (
      <div className="order-item__container">
        <div className="order-item">
          <span className="order-item__id">{_id.slice(-5)}</span>
          <span className="order-item__order-time">{orderTime}</span>
          <span className="order-item__details" onClick={this.handleDetailClick} > <i className="fa fa-search-plus"></i></span>
          <span className="order-item__price">{parseFloat(totalPrice.toFixed(2))}</span>
          <span className="order-item__type">{type}</span>
          <span className="order-item__operators">
            <span className="order-item__edit" onClick={() => this.handleEditClick(_id)}><i className="fa fa-edit"></i></span>
            <span className="order-item__remove" onClick={() => this.props.removeOrder(_id)}><i className="fa fa-trash"></i></span>
          </span>
        </div>
        {this.state.dropdown ?
          <div className="order-details__dropdown">
            <p>OrderItems: {orderItems.map((item) => <span>{item.foodName} × {item.quantity}; </span>)}</p>
            <p>Deliver/PickupTime: {DeliverPickupTime}</p>
            <p>Address: {address}</p>
          </div>
          : null
        }
        {this.state.update ? (
          <div className="order-details__update">
            <div className="order-details__update__relative">
              <p className='close-btn'><i className="fa fa-times-circle" onClick={this.handleCloseBtn}></i></p>
              <p className="clear"></p>
              <p>Order ID: <input type="text" name="orderID" value={_id} disabled /></p>
              <p>Deliver/PickupTime:
              <input type="text" name="DeliverPickupTime" onChange={this.handleTimeChange}
                  value={this.state.currentOrder.DeliverPickupTime} />
              </p>
              {/* <p>orderItems: <input type="text" name="orderItems" value="" /></p>
            <p>totalPrice: <input type="text" name="totalPrice" value="" /></p> */}
              <p>address:
              <input type="text" name="address" onChange={this.handleAddressChange}
                  value={this.state.currentOrder.address} />
              </p>
              <p>type:
               <input type="text" name="type" onChange={this.handleTypeChange}
                  value={this.state.currentOrder.type} />
              </p>
              <button type="submit" onClick={() => this.handleSubmit(_id)}>Submit</button>
            </div>
          </div>
        ) : null}
      </div>
    )
  }

}

export default AdminOrderItem;