import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import DeliveryForm from './DeliveryForm';
import cartReducer from './cartReducer';
import pizzaData from './PizzaData';
import loginInf from './Login';
import PickUpForm from './PickUpForm';
import toppingData from './ToppingData';
import SignUpForm from './SignUpForm';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cartReducer', 'DeliveryForm'] // only these reducers will be persisted
}

const rootReducer = combineReducers({
  DeliveryForm,
  pizzaData,
  cartReducer,
  loginInf,
  PickUpForm,
  toppingData,
  SignUpForm,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer; //rootReducer;