import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  REMOVE_ITEM,
  DECREASE_ITEM_QUANTITY
} from '../types';
import { addItemToCart, removeItemFromCart } from './cartUtils';

const initialState = { hidden: true, cartItems: [] };

function cartReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_CART_HIDDEN:
      return { ...state, hidden: payload || !state.hidden };
    case ADD_ITEM:
      return { ...state, cartItems: addItemToCart(state.cartItems, payload) };
    case DECREASE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload)
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== payload.id)
      };
    default:
      return state;
  }
}

export default cartReducer;
