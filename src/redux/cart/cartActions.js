import { TOGGLE_CART_HIDDEN, ADD_ITEM } from '../types';

export const toggleCartHidden = bool => ({
  type: TOGGLE_CART_HIDDEN,
  payload: bool
});

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item
});
