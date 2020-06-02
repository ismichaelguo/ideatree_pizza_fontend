import {combineReducers} from 'redux';
import DeliveryForm from './DeliveryForm';
import pizzaData from './PizzaData'
const rootReducer = combineReducers({
    DeliveryForm,
    pizzaData
})

export default rootReducer;