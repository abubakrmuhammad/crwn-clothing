import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import Button from '../Button/Button';
import { selectCartItems } from '../../redux/cart/cartSelectors';

import './CartDropdown.scss';

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

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
