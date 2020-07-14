import React from 'react';
import { connect } from 'react-redux';
import 'font-awesome/css/font-awesome.min.css';
import OrderItem from '../admin-order-item/AdminOrderItem';
import { sumPrice } from '../../redux/actions/cart/cartUtils';
import axiosInstance from "../../api/axiosInstance";
import AdminNav from '../admin-nav/AdminNav';
import './admin-order.scss';

class AdminOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentPage: 1,
      pageSize: 3,
      upperPageBound: 3,
      lowerPageBound: 0,
      pageInterval: 3,
      totalItems: 0,
      totalPages: 0,
      isFirstBtnActive: 'disabled',
      isLastBtnActive: '',
    }
  }

  fetchData = (currentPage, pageSize) => {
    axiosInstance({
      url: `/order/${currentPage}/${pageSize}`,
      method: "GET",
    }).then(res => {
      console.log('res.data', res.data)
      this.setState({
        orders: res.data.res,
        totalItems: res.data.totalItems,
        totalPages: Math.ceil(res.data.totalItems / pageSize),
      })
    }).catch(err => console.log('err', err))
  }

  componentDidMount () {
    this.fetchData(this.state.currentPage, this.state.pageSize)
  }

  removeOrder = (id) => {
    axiosInstance({
      url: `/order/${id}`,
      method: "DELETE",
    }).then(res => {
      console.log('delete success.')
      this.fetchData(this.state.currentPage, this.state.pageSize)
    }).catch(err => console.log('err', err))
  }

  handleNumberClick = (event) => {
    // handle pageID click
    event.preventDefault();
    let pageID = Number(event.target.id);
    this.fetchData(pageID, this.state.pageSize)
    this.setState({
      currentPage: pageID
    });
    this.setFirstAndLastBtnState(pageID);
  }
  setFirstAndLastBtnState = (pageID) => {
    // use to determine whether disable first or last button
    let totalPages = this.state.totalPages;
    this.setState({ isLastBtnActive: 'disabled' });
    this.setState({ isFirstBtnActive: 'disabled' });
    if (totalPages === pageID && totalPages > 1) {
      this.setState({ isFirstBtnActive: '' });
    }
    else if (pageID === 1 && totalPages > 1) {
      this.setState({ isLastBtnActive: '' });
    }
    else if (totalPages > 1) {
      this.setState({ isLastBtnActive: '' });
      this.setState({ isFirstBtnActive: '' });
    }
  }
  btnIncrementClick = (event) => {
    // increase by the page interval, symbol is `...`
    event.preventDefault();
    this.setState({ upperPageBound: this.state.upperPageBound + this.state.pageInterval });
    this.setState({ lowerPageBound: this.state.lowerPageBound + this.state.pageInterval });
    let pageID = this.state.upperPageBound + 1;
    this.fetchData(pageID, this.state.pageSize)
    this.setState({ currentPage: pageID });
    this.setFirstAndLastBtnState(pageID);
  }
  btnDecrementClick = (event) => {
    // decrease by the page interval, symbol is `...`
    event.preventDefault();
    this.setState({ upperPageBound: this.state.upperPageBound - this.state.pageInterval });
    this.setState({ lowerPageBound: this.state.lowerPageBound - this.state.pageInterval });
    let pageID = this.state.upperPageBound - this.state.pageInterval;
    this.fetchData(pageID, this.state.pageSize)
    this.setState({ currentPage: pageID });
    this.setFirstAndLastBtnState(pageID);
  }
  btnFirstClick = (event) => {
    // go the the first pageID
    event.preventDefault();
    let pageID = 1 // this.state.currentPage - 1;
    this.setState({ upperPageBound: this.state.pageInterval });
    this.setState({ lowerPageBound: 0 });
    this.fetchData(pageID, this.state.pageSize)
    this.setState({ currentPage: pageID });
    this.setFirstAndLastBtnState(pageID);
  }
  btnLastClick = (event) => {
    // go to the last pageID
    event.preventDefault();
    let pageID = this.state.totalPages // this.state.currentPage + 1;
    this.setState({ upperPageBound: this.state.totalPages });
    this.setState({ lowerPageBound: this.state.totalPages - this.state.pageInterval });
    this.fetchData(pageID, this.state.pageSize)
    this.setState({ currentPage: pageID });
    this.setFirstAndLastBtnState(pageID);
  }

  render () {
    // console.log('orders', this.state.orders)
    const { currentPage, upperPageBound, lowerPageBound, isFirstBtnActive, isLastBtnActive } = this.state;
    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= this.state.totalPages; i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
      // only display page numbers that are in the lower to upper bound range
      if ((number < upperPageBound + 1) && number > lowerPageBound) {
        return (
          <li key={number} className={currentPage === number ? `active` : ''} id={number} onClick={this.handleNumberClick}><span id={number}>{number}</span></li>
        )
      }
    });
    // Logic for direction buttons
    let pageIncrementBtn = null;
    if (pageNumbers.length > upperPageBound) {
      pageIncrementBtn = <li className='' onClick={this.btnIncrementClick}><span>&hellip;</span></li>
    }
    let pageDecrementBtn = null;
    if (lowerPageBound >= 1) {
      pageDecrementBtn = <li className='' onClick={this.btnDecrementClick}><span>&hellip;</span></li>
    }
    const renderFirstBtn = <li className={isFirstBtnActive} onClick={this.btnFirstClick}><span>First</span></li>;
    const renderLastBtn = <li className={isLastBtnActive} onClick={this.btnLastClick}><span>Last</span></li>;

    return (
      <div className="admin-order-page">
        <AdminNav />
        <div className="admin-order-page__container">
          <div className="admin-order-page__header">
            <div className="admin-order-page__header-item">
              <span>Order ID</span>
            </div>
            <div className="admin-order-page__header-item">
              <span>Order Time</span>
            </div>
            <div className="admin-order-page__header-item">
              <span>Details</span>
            </div>
            <div className="admin-order-page__header-item">
              <span>Price</span>
            </div>
            <div className="admin-order-page__header-item">
              <span>Type</span>
            </div>
            <div className="admin-order-page__header-item">
              <span>Operations</span>
            </div>
          </div>
          <div className="admin-order-page__items">
            {this.state.orders.map((order => (
              <OrderItem key={order._id} order={order} removeOrder={this.removeOrder}
                fetchData={this.fetchData} currentPage={this.state.currentPage}
                pageSize={this.state.pageSize} />
            )))}
          </div>
        </div>
        <ul className="admin-order-page__pagination">
          {renderFirstBtn}
          {pageDecrementBtn}
          {renderPageNumbers}
          {pageIncrementBtn}
          {renderLastBtn}
        </ul>
      </div>
    );
  }
}

const mapState = (state) => ({
  cartItems: state.cartReducer.cartItems,
  totalPrice: sumPrice(state.cartReducer.cartItems),
  unit: state.DeliveryForm.unit,
  streetNum: state.DeliveryForm.streetNum,
  streetName: state.DeliveryForm.streetName,
  suburb: state.DeliveryForm.suburb,
  postcode: state.DeliveryForm.postcode,
  time: state.DeliveryForm.time,
  pastOrders: state.cartReducer.pastOrders,
});


export default connect(mapState, null)(AdminOrder);