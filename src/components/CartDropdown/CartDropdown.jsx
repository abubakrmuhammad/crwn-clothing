import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CartItem from '../CartItem/CartItem';
import Button from '../Button/Button';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { toggleCartHidden } from '../../redux/cart/cartActions';

import './CartDropdown.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(item => <CartItem key={item.id} {...item} />)
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <Button
      onClick={() => {
        dispatch(toggleCartHidden(false));
        history.push('/checkout');
      }}
    >
      Go to Checkout
    </Button>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
