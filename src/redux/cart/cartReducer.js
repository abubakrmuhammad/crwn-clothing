import { TOGGLE_CART_HIDDEN, ADD_ITEM } from '../types';
import { addItemToCart } from './cartUtils';

const initialState = { hidden: true, cartItems: [] };

function cartReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_CART_HIDDEN:
      return { ...state, hidden: payload || !state.hidden };
    case ADD_ITEM:
      return { ...state, cartItems: addItemToCart(state.cartItems, payload) };
    default:
      return state;
  }
}

export default cartReducer;
