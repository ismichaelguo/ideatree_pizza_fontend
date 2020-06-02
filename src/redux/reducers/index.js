import { combineReducers } from 'redux';
import DeliveryForm from './DeliveryForm';
import cartReducer from './cartReducer';
import pizzaData from './PizzaData'

const rootReducer = combineReducers({
    DeliveryForm,
    pizzaData,
    cart: cartReducer, 
})

export default rootReducer;