import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((count, item) => count + item.quantity, 0)
);

export const selectCartTotalCost = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (totalCost, { quantity, price }) => totalCost + quantity * price,
      0
    )
);
