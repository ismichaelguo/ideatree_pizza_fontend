import React from "react";
import { Link } from "react-router-dom";
import "./select-order-type.scss";
import OderType from "../../components/order-type/OrderType";

export default function SelectOderType(props) {
  const MATCH = props.match;

  return (
    <section className="pageContainer">
      <header className="pageContainer__banner">
        <Link to="/menu"></Link>
        <div>Online Ordering</div>
      </header>

      <OderType match={MATCH} />
    </section>
  );
}
