import { combineReducers } from 'redux';
import DeliveryForm from './DeliveryForm';
import cartReducer from './cartReducer';
import pizzaData from './PizzaData';
import loginInf from './Login';
import PickUpForm from './PickUpForm';

const rootReducer = combineReducers({
  DeliveryForm,
  pizzaData,
  cartReducer,
  loginInf,
  PickUpForm,
})

export default rootReducer;