import React from "react";
import { Link } from "react-router-dom";
import "./saved-order.scss";
import { connect } from "react-redux";
import PastOrderCard from "../../components/past-order-card/PastOrderCard";
import axiosInstance from "../../api/axiosInstance";

class SavedOrder extends React.Component {
  constructor() {
    super();
    this.state = {
      pastOrders: [],
    };
  }

  componentDidMount() {
    if (this.props.userName) {
      console.log(this.props.userName);
      //get user id by logged in username from redux 
      const id = window.sessionStorage.getItem(this.props.userName);
      axiosInstance({
        url: `/user/order/${id}`,
        method: "GET",
        //get order history from response and store into 
      }).then((res) => res.data.orders)
        .then((data) => {
          this.setState({
            pastOrders: data,
          });
        });
    }
  }

  render() {
    // const {pastOrders} = this.props;
    console.log("price", this.state.pastOrders);
    return (
      <section className="order-type-container">
        <header className="banner">
          <Link to="/" className="banner_logo-image"></Link>
          <div className="banner_description">Saved Orders</div>
        </header>
        <div className="order-type-container__body">
          {this.state.pastOrders.map((item) => (
            <PastOrderCard
              key={item._id}
              order={item.orderItems}
              time={item.orderTime}
              pastOrder={item}
              price={item.totalPrice}
            />
          ))}
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  const { cartReducer } = state;
  const { loginInf } = state;

  return {
    pastOrders: cartReducer.pastOrders,
    userName: loginInf.userName,
  };
}

export default connect(mapStateToProps, null)(SavedOrder);
