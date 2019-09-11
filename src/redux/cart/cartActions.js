import { TOGGLE_CART_HIDDEN } from '../types';

export const toggleCartHidden = bool => ({
  type: TOGGLE_CART_HIDDEN,
  payload: bool
});
