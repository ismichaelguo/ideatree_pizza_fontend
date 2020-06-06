import { CartActionTypes } from '../actions/cart/cartActionTypes';
import { addItemToCart, removeItemFromCart, sumPrice } from '../actions/cart/cartUtils';

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
  pastOrders: [
    {
      orderTime: "06/06/2020",
      orderId: 1591399396234,
      orderItems: [
        {
          foodName: "Loaded Supreme",
          foodPrice: 19.2,
          id: 2,
          imgAlt: "Loaded Supreme",
          imgDetail: "https://i.ibb.co/2tn7Cd8/LOADED-SUPREME.png",
          quantity: 2
        },
        {
          foodName: "Loaded Supreme",
          foodPrice: 19.2,
          id: 1,
          imgAlt: "Loaded Supreme",
          imgDetail: "https://i.ibb.co/2tn7Cd8/LOADED-SUPREME.png",
          quantity: 2
        },
        {
          foodName: "Loaded Supreme",
          foodPrice: 19.2,
          id: 3,
          imgAlt: "Loaded Supreme",
          imgDetail: "https://i.ibb.co/2tn7Cd8/LOADED-SUPREME.png",
          quantity: 2
        },

      ]
    },
    {
      orderTime: "06/06/2020",
      orderId: 159139939345,
      orderItems: [
        {
          foodName: "Loaded Supreme",
          foodPrice: 19.2,
          id: 1,
          imgAlt: "Loaded Supreme",
          imgDetail: "https://i.ibb.co/2tn7Cd8/LOADED-SUPREME.png",
          quantity: 2
        },
        {
          foodName: "Loaded Supreme",
          foodPrice: 19.2,
          id: 2,
          imgAlt: "Loaded Supreme",
          imgDetail: "https://i.ibb.co/2tn7Cd8/LOADED-SUPREME.png",
          quantity: 2
        },
        {
          foodName: "Loaded Supreme",
          foodPrice: 19.2,
          id: 3,
          imgAlt: "Loaded Supreme",
          imgDetail: "https://i.ibb.co/2tn7Cd8/LOADED-SUPREME.png",
          quantity: 2
        },

      ]
    },
    {
      orderTime: "06/06/2020",
      orderId: 15913993962134,
      orderItems: [
        {
          foodName: "Loaded Supreme",
          foodPrice: 19.2,
          id: 1,
          imgAlt: "Loaded Supreme",
          imgDetail: "https://i.ibb.co/2tn7Cd8/LOADED-SUPREME.png",
          quantity: 2
        },
        {
          foodName: "Loaded Supreme",
          foodPrice: 19.2,
          id: 2,
          imgAlt: "Loaded Supreme",
          imgDetail: "https://i.ibb.co/2tn7Cd8/LOADED-SUPREME.png",
          quantity: 2
        },
        {
          foodName: "Loaded Supreme",
          foodPrice: 19.2,
          id: 3,
          imgAlt: "Loaded Supreme",
          imgDetail: "https://i.ibb.co/2tn7Cd8/LOADED-SUPREME.png",
          quantity: 2
        },

      ]
    },
    {
      orderTime: "06/06/2020",
      orderId: 1591399396677,
      orderItems: [
        {
          foodName: "Loaded Supreme",
          foodPrice: 19.2,
          id: 1,
          imgAlt: "Loaded Supreme",
          imgDetail: "https://i.ibb.co/2tn7Cd8/LOADED-SUPREME.png",
          quantity: 2
        },
        {
          foodName: "Loaded Supreme",
          foodPrice: 19.2,
          id: 2,
          imgAlt: "Loaded Supreme",
          imgDetail: "https://i.ibb.co/2tn7Cd8/LOADED-SUPREME.png",
          quantity: 2
        },
        {
          foodName: "Loaded Supreme",
          foodPrice: 19.2,
          id: 3,
          imgAlt: "Loaded Supreme",
          imgDetail: "https://i.ibb.co/2tn7Cd8/LOADED-SUPREME.png",
          quantity: 2
        },

      ]
    },
    {
      orderTime: "06/06/2020",
      orderId: 1591399396556,
      orderItems: [
        {
          foodName: "Loaded Supreme",
          foodPrice: 19.2,
          id: 1,
          imgAlt: "Loaded Supreme",
          imgDetail: "https://i.ibb.co/2tn7Cd8/LOADED-SUPREME.png",
          quantity: 2
        },
        {
          foodName: "Loaded Supreme",
          foodPrice: 19.2,
          id: 2,
          imgAlt: "Loaded Supreme",
          imgDetail: "https://i.ibb.co/2tn7Cd8/LOADED-SUPREME.png",
          quantity: 2
        },
        {
          foodName: "Loaded Supreme",
          foodPrice: 19.2,
          id: 3,
          imgAlt: "Loaded Supreme",
          imgDetail: "https://i.ibb.co/2tn7Cd8/LOADED-SUPREME.png",
          quantity: 2
        },

      ]
    },

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

    case CartActionTypes.GENERATE_PAST_ORDER:
      let _pastOrders = state.pastOrders.concat({
        orderTime: (new Date()).toLocaleDateString(),
        orderId: (new Date()).getTime(),
        orderItems: [...state.cartItems],
        totalPrice: parseFloat(sumPrice(state.cartItems).toFixed(2)),
      }); // concat does not change the original array, but return an new array
      return {
        cartItems: [],
        pastOrders: _pastOrders,
      }
    default:
      return state;
  }
};

export default cartReducer;