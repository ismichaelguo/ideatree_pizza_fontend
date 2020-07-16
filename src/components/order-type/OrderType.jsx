import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./order-type.scss";
import { FiStar } from "react-icons/fi";
import { MdMotorcycle } from "react-icons/md";
import { FaStore } from "react-icons/fa";

function OderType(props) {
  const { id } = props.match.params;
  const { status } = props;
  let hasHistory = false;
  let orderHistory = window.sessionStorage.getItem("OrderHistory");
  if (status === true && orderHistory.length !== 0) {
    hasHistory = true;
  }

  return (
    <div className="orderType">
      <h1 className="orderType__title">Select An Order Type</h1>
      <div className="orderType__container">
        {status ? (
          <Link
            to={
              hasHistory
                ? `/menu/detail/${id}/order-type/saved-order`
                : `/menu/detail/${id}/order-type/saved-order-none`
            }
            className="orderType__container--save"
          >
            <div className="typeIcon">
              <FiStar />
            </div>
            <div className="typeText">
              <h1>Saved Orders</h1>
              <p>
                Quickly reorder one of
                <br />
                your saved Orders
              </p>
            </div>
          </Link>
        ) : (
          <Link to="/account" className=" orderType__container--save">
            <div className="typeIcon">
              <FiStar />
            </div>
            <div className="typeText">
              <h1>Saved Orders</h1>
              <p>
                Quickly reorder one of
                <br />
                your saved Orders
              </p>
            </div>
          </Link>
        )}

        <Link
          to={status ? `/menu/detail/${id}/order-type/delivery` : "/account"}
          className="orderType__container--delivery"
        >
          <div className="typeIcon">
            <MdMotorcycle />
          </div>
          <div className="typeText">
            <h1>Delivery</h1>
            <p>
              Have your order delivered
              <br />
              directly to you
            </p>
          </div>
        </Link>
        <Link
          to={status ? `/menu/detail/${id}/order-type/pick-up` : "/account"}
          className=" orderType__container--pickup"
        >
          <div className="typeIcon">
            <FaStore />
          </div>
          <div className="typeText">
            <h1>Pick up</h1>
            <p>
              Pick up your order at
              <br />a store
            </p>
          </div>
        </Link>
      </div>
      <Link to="account" className="orderType__container--login">
        Registered Member? Log in / Sign up
      </Link>
    </div>
  );
}

function mapStateToProps(state) {
  const { loginInf } = state;
  const { cartReducer } = state;
  console.log("state", loginInf);

  return {
    status: loginInf.status,
    pastOrders: cartReducer.pastOrders,
  };
}

export default connect(mapStateToProps, null)(OderType);
