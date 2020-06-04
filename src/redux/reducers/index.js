import { combineReducers } from 'redux';
import DeliveryForm from './DeliveryForm';
import cartReducer from './cartReducer';
import pizzaData from './PizzaData';
import PickUpForm from './PickUpForm';

const rootReducer = combineReducers({
    DeliveryForm,
    pizzaData,
    cart: cartReducer, 
    PickUpForm,
})

export default rootReducer;