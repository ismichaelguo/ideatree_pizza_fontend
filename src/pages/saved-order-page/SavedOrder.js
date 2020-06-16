import React from 'react';
import { Link } from 'react-router-dom';
import './saved-order.scss'
import { connect } from "react-redux";
import PastOrderCard from '../../components/past-order-card/PastOrderCard'


class SavedOrder extends React.Component{
    

    render(){
        const {pastOrders} = this.props;
        console.log("price",this.props)

        return (
            <section className="order-type-container">
                <header className="banner">
                    <Link to='/' className="banner_logo-image">
                    </Link>
                    <div className="banner_description">
                    Saved Orders
                    </div>
                </header>
                 <div className="order-type-container__body">
                        {pastOrders.map((item=>(
                            <PastOrderCard 
                            key={item.orderId} 
                            order={item.orderItems}
                            time={item.orderTime}
                            pastOrder = {item}
                            price = {item.totalPrice}
                            />
                        )))}
                </div>

            </section>
                
        )
    }
  
}

function mapStateToProps(state){
    const {cartReducer}=state
   
    return {
        pastOrders:cartReducer.pastOrders,
    }
  }
 
  export default connect(mapStateToProps,null)(SavedOrder);


