import React from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import OrderItem from '../../components/order-item/OrderItem';
import { sumPrice } from '../../redux/actions/cart/cartUtils';
import axiosInstance from "../../api/server";
import './admin-order-page.scss';

class AdminOrderPage extends React.Component {
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
      isPrevBtnActive: 'disabled',
      isNextBtnActive: '',
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

  componentDidUpdate () {
    $("ul li.active").removeClass('active');
    $('ul li#' + this.state.currentPage).addClass('active');
  }
  handleNumberClick = (event) => {
    let pageID = Number(event.target.id);
    this.fetchData(pageID, this.state.pageSize)
    this.setState({
      currentPage: pageID
    });
    $("ul li.active").removeClass('active');
    $('ul li#' + pageID).addClass('active');
    this.setPrevAndNextBtnClass(pageID);
  }
  setPrevAndNextBtnClass = (pageID) => {
    let totalPages = this.state.totalPages;
    this.setState({ isNextBtnActive: 'disabled' });
    this.setState({ isPrevBtnActive: 'disabled' });
    if (totalPages === pageID && totalPages > 1) {
      this.setState({ isPrevBtnActive: '' });
    }
    else if (pageID === 1 && totalPages > 1) {
      this.setState({ isNextBtnActive: '' });
    }
    else if (totalPages > 1) {
      this.setState({ isNextBtnActive: '' });
      this.setState({ isPrevBtnActive: '' });
    }
  }
  btnIncrementClick = () => {
    this.setState({ upperPageBound: this.state.upperPageBound + this.state.pageInterval });
    this.setState({ lowerPageBound: this.state.lowerPageBound + this.state.pageInterval });
    let pageID = this.state.upperPageBound + 1;
    this.fetchData(pageID, this.state.pageSize)
    this.setState({ currentPage: pageID });
    this.setPrevAndNextBtnClass(pageID);
  }
  btnDecrementClick = () => {
    this.setState({ upperPageBound: this.state.upperPageBound - this.state.pageInterval });
    this.setState({ lowerPageBound: this.state.lowerPageBound - this.state.pageInterval });
    let pageID = this.state.upperPageBound - this.state.pageInterval;
    this.fetchData(pageID, this.state.pageSize)
    this.setState({ currentPage: pageID });
    this.setPrevAndNextBtnClass(pageID);
  }
  btnPrevClick = () => {
    if ((this.state.currentPage - 1) % this.state.pageInterval === 0) {
      this.setState({ upperPageBound: this.state.upperPageBound - this.state.pageInterval });
      this.setState({ lowerPageBound: this.state.lowerPageBound - this.state.pageInterval });
    }
    let pageID = this.state.currentPage - 1;
    this.fetchData(pageID, this.state.pageSize)
    this.setState({ currentPage: pageID });
    this.setPrevAndNextBtnClass(pageID);
  }
  btnNextClick = () => {
    if ((this.state.currentPage + 1) > this.state.upperPageBound) {
      this.setState({ upperPageBound: this.state.upperPageBound + this.state.pageInterval });
      this.setState({ lowerPageBound: this.state.lowerPageBound + this.state.pageInterval });
    }
    let pageID = this.state.currentPage + 1;
    this.fetchData(pageID, this.state.pageSize)
    this.setState({ currentPage: pageID });
    this.setPrevAndNextBtnClass(pageID);
  }

  render () {
    // console.log('orders', this.state.orders)
    const { currentPage, upperPageBound, lowerPageBound, isPrevBtnActive, isNextBtnActive } = this.state;
    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= this.state.totalPages; i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
      if (number === 1 && currentPage === 1) {
        return (
          <li key={number} className='active' id={number}><a href='#' id={number} onClick={this.handleNumberClick}>{number}</a></li>
        )
      }
      else if ((number < upperPageBound + 1) && number > lowerPageBound) {
        return (
          <li key={number} id={number}><a href='#' id={number} onClick={this.handleNumberClick}>{number}</a></li>
        )
      }
    });
    // Logic for direction buttons
    let pageIncrementBtn = null;
    if (pageNumbers.length > upperPageBound) {
      pageIncrementBtn = <li className=''><a href='#' onClick={this.btnIncrementClick}>&hellip;</a></li>
    }
    let pageDecrementBtn = null;
    if (lowerPageBound >= 1) {
      pageDecrementBtn = <li className=''><a href='#' onClick={this.btnDecrementClick}>&hellip;</a></li>
    }
    const renderPrevBtn = <li className={isPrevBtnActive}><a href='#' id="btnPrev" onClick={this.btnPrevClick}>Prev</a></li>;
    const renderNextBtn = <li className={isNextBtnActive}><a href='#' id="btnNext" onClick={this.btnNextClick}>Next</a></li>;

    return (
      <div className="admin-order-page">
        <div className="admin-order-page__container">
          <header className='banner'>
            <Link to='' className="banner__logo-image">
            </Link>
            <div className="banner__description">
              Admin-Order
            </div>
          </header>
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
          {renderPrevBtn}
          {pageDecrementBtn}
          {renderPageNumbers}
          {pageIncrementBtn}
          {renderNextBtn}
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


export default connect(mapState, null)(AdminOrderPage);