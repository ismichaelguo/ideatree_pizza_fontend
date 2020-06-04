import { combineReducers } from 'redux';
import DeliveryForm from './DeliveryForm';
import cartReducer from './cartReducer';
import pizzaData from './PizzaData';
import loginInf from './Login';

const rootReducer = combineReducers({
    DeliveryForm,
    pizzaData,
    cart: cartReducer, 
    loginInf,
})

export default rootReducer;