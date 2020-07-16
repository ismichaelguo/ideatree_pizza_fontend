import React from "react";
import { Link } from "react-router-dom";
import "./save-order-nohistory.scss";

export default function SavedOrderNone(props) {
  const { id } = props.match.params;

  return (
    <section className="pageContainer">
      <header className="pageContainer__banner">
        <Link to="/menu"></Link>
        <div>Saved Orders</div>
      </header>

      <div className="pageContainer__message">
        <p>
          Sorry! We can't find any previous orders.
          <br />
          Place a new order and we will remember it for Quick Ordering next
          time.
          <br />
          For even faster ordering, save your favorite order.
        </p>
        <Link
          to={`/menu/detail/${id}/order-type/delivery`}
          className="pageContainer__message__type delivery"
        >
          Delivery
        </Link>
        <Link
          to={`/menu/detail/${id}/order-type/pick-up`}
          className="pageContainer__message__type pick-up"
        >
          Pick up
        </Link>
        <Link to={`/menu/detail/${id}/order-type`} className="btn-container">
          previous
        </Link>
      </div>
    </section>
  );
}
