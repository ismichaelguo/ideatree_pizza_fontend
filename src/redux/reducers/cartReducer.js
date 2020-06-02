import { CartActionTypes } from '../actions/cart/cartActionTypes';
import { addItemToCart, removeItemFromCart } from '../actions/cart/cartUtils';

const INITIAL_STATE = {
  cartItems: [
    // {
    //   foodName: "Garlic Chicken & Bacon Ranch",
    //   foodPrice: 16.8,
    //   id: 1,
    //   imgAlt: "Garlic Chicken & Bacon Ranch",
    //   imgDetail: "/static/media/GARLIC_CHICKEN&BACON_RANCH .7d6f6123.png",
    //   quantity: 1
    // },
    // {
    //   foodName: "Garlic Chicken & Bacon Ranch",
    //   foodPrice: 999996.8,
    //   id: 2,
    //   imgAlt: "Garlic Chicken & Bacon Ranch",
    //   imgDetail: "/static/media/GARLIC_CHICKEN&BACON_RANCH .7d6f6123.png",
    //   quantity: 1
    // },
    // {
    //   foodName: "Garlic Chicken & Bacon Ranch",
    //   foodPrice: 999996.8,
    //   id: 3,
    //   imgAlt: "Garlic Chicken & Bacon Ranch",
    //   imgDetail: "/static/media/GARLIC_CHICKEN&BACON_RANCH .7d6f6123.png",
    //   quantity: 1
    // },
  ],
};



const cartReducer = (state = INITIAL_STATE, action) => {
  // console.log('action', action);
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      // console.log('add reducer');
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    case CartActionTypes.REMOVE_ITEM:
      // console.log('remove reducer');
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      // console.log('clear reducer');
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
      }
    default:
      return state;
  }
};

export default cartReducer;