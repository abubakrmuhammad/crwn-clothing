import { TOGGLE_CART_HIDDEN } from '../types';

const initialState = { hidden: true };

function cartReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_CART_HIDDEN:
      return { ...state, hidden: payload || !state.hidden };
    default:
      return state;
  }
}

export default cartReducer;
