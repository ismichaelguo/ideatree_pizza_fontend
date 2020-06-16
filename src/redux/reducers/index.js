import { combineReducers } from 'redux';
import DeliveryForm from './DeliveryForm';
import cartReducer from './cartReducer';
import pizzaData from './PizzaData';
import loginInf from './Login';
import PickUpForm from './PickUpForm';
import toppingData from './ToppingData';
import SignUpForm from './SignUpForm';

const rootReducer = combineReducers({
  DeliveryForm,
  pizzaData,
  cartReducer,
  loginInf,
  PickUpForm,
  toppingData,
  SignUpForm,

})

export default rootReducer;