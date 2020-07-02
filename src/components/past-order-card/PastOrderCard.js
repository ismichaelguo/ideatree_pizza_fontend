import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import './past-order-card.scss'
import {addItem} from '../../redux/actions/cart/cartActions';
import { Link,withRouter } from 'react-router-dom';

class PastOrderCard extends React.Component{
    handleOrderAgain = (e,props)=>{
        const order = this.props.pastOrder.orderItems
        console.log("order",this.props.cartItems)
        console.log("new-order",order)

        for(let i=0;i<order.length;i++){
            this.props.addItem({
                item:order[i],
            })   
        }

    }
    
    render(){
        const {order}=this.props;
        const {id} = this.props.match.params;

        return(
            <Fragment>
                <div className="card-container">
                    <div className="card-container__top"></div>
                    <div className="card-container__body">
                        <div>
                            {order.map(item=>(
                                <h3 key={item.id}>{item.quantity} X {item.foodName}</h3>
                            ))}
                        </div>
                        <p>ORDER TIME : {this.props.time}</p>
                        <p>PRICE : {this.props.price}</p>
                        <Link to={`/menu/detail/${id}/order-type`}>
                            <button onClick={this.handleOrderAgain}>Order now</button>
                        </Link>
                        <p className="card-container__body__text">You can enter a voucher and confirm <br/>
                        payment details after selecting ORDER <br/>
                        NOW</p>
                    </div>
                    <div className="card-container__bottom"></div>
                </div>
            </Fragment>
        )

    }
   
}

function mapStateToProps(state){
    const {cartReducer}=state
  
  
    return {
        pastOrders:cartReducer.pastOrders,
        cartItems: state.cartReducer.cartItems,
    }
  }

  const mapActionsToProps = {
    addItem,  
}
  
export default connect(mapStateToProps,mapActionsToProps)(withRouter(PastOrderCard));