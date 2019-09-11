import React from 'react';
import { connect } from 'react-redux';
import Button from '../Button/Button';

import './CartDropdown.scss';
import CartItem from '../CartItem/CartItem';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(item => (
        <CartItem key={item.id} {...item} />
      ))}
    </div>
    <Button>Go to Checkout</Button>
  </div>
);

const mapStateToProps = ({ cart }) => ({
  cartItems: cart.cartItems
});

export default connect(mapStateToProps)(CartDropdown);
