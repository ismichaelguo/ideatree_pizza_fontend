import { combineReducers } from 'redux';
import DeliveryForm from './DeliveryForm';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  DeliveryForm,
  cart: cartReducer,
})

export default rootReducer;