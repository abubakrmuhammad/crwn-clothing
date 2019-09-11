import React from 'react';
import Button from '../Button/Button';

import './CartDropdown.scss';

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <Button>Go to Checkout</Button>
  </div>
);

export default CartDropdown;
